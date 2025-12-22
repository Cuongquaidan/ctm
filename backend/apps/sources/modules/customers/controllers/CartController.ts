import CustomerController from "@src/controllers/CustomerController.js";
import CartItemModel from "@src/models/CartItemModel.js";
import CartModel from "@src/models/CartModel.js";
import StoreModel from "@src/models/StoresModel.js";
import VoucherModel from "@src/models/VouchersModel.js";
import VoucherStoreModel from "@src/models/VoucherStoreModel.js";

export default class CartController extends CustomerController {
    md = this.models.cartItem;

    async UpdateCart(customerIdFromRoute: number) {
        try {
            const customerId = Number(this.customerId || customerIdFromRoute);
            if (!customerId) throw new Error("invalid_customer_id");
            const resultData = await this.md.UpdateCart(
                this.request,
                customerId
            );

            this.resJsonData(resultData);

        } catch (error) {
            this.resJsonErr((error as Error).message);
        }
    }
    public async CartCountProduct(request: Request, customerId: number) {
        try {
            const cartModel = new CartModel(this.pool);
            const customerId = this.customerId;
            const summary = await cartModel.getCartSummary(customerId);

            if (!summary) {
                return this.resJsonData({ total_quantity: 0, item_total: 0, message: "Giỏ hàng rỗng." });
            }

            this.resJsonData(summary);

        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }
    async getCartItems() {
        try {
            const data = await this.md.getItemsByCustomer(this.request, this.customer);
            this.resJsonData(data);
        } catch (error) {
            this.resJsonErr((error as Error).message || "Không thể lấy danh sách sản phẩm trong giỏ hàng.");
        }
    }

    public async getDetail(request: Request, customerIdFromRoute: number) {
        try {
            const customerId = Number(this.customerId || customerIdFromRoute);
            if (!customerId) throw new Error("invalid_customer_id");

            const cartItemModel = new CartItemModel(this.pool);
            const cartModel = new CartModel(this.pool);
            const voucherModel = new VoucherModel(this.pool);
            const voucherStoreModel = new VoucherStoreModel(this.pool);
            const storeModel = new StoreModel(this.pool);

            const fullCartDetails = await cartItemModel.getDatas(this.request, customerId, null);
            const updatedCart = await cartModel.getCustomerCart(customerId);

            if (!updatedCart || !updatedCart.id) {
                return this.resJsonData({
                    list: [], stores: {}, itemTotal: 0,
                    storeVouchers: {}, voucher: null,
                    message: "Giỏ hàng rỗng."
                });
            }

            const itemTotal = updatedCart.item_total || 0;

            const flatItemList = fullCartDetails.data.flatMap((group: any) => {
                const groupStoreId = Number(group.store_id);
                return group.items.map((item: any) => ({
                    ...item,
                    store_id: groupStoreId,
                    product: item.product ? {
                        ...item.product,
                        store_id: groupStoreId
                    } : null
                }));
            });

            let globalVoucherDetails = null;
            let globalDiscountAmount = 0;
            const appliedGlobalVoucherId = updatedCart.voucher_id || null;
            if (appliedGlobalVoucherId) {
                const voucherDetails = await voucherModel.findOne({ id: appliedGlobalVoucherId });
                if (voucherDetails) {
                    const finalDiscountValue = voucherModel.calculateMaxDiscount(voucherDetails, itemTotal);
                    const ctmValues = voucherModel.calculateCtmValues({ discount_value: finalDiscountValue }, fullCartDetails.data);
                    globalVoucherDetails = { ...voucherDetails, discount_value: finalDiscountValue, ctmValues: ctmValues };
                    globalDiscountAmount = finalDiscountValue;
                }
            }

            const voucherStoreString = updatedCart.voucher_store_id;
            const finalStoreVoucherDetailsMap: Record<string, any> = {};
            let totalStoreDiscountAmount = 0;

            if (voucherStoreString) {
                try {
                    const storeVoucherMap: { [storeId: string]: number } = JSON.parse(voucherStoreString);
                    const appliedStoreVoucherIds = Object.values(storeVoucherMap).filter(id => id > 0);
                    if (appliedStoreVoucherIds.length > 0) {
                        const detailsList = await voucherStoreModel.getDetailsByIds(appliedStoreVoucherIds);
                        const detailsById = new Map(detailsList.map((v: any) => [v.id, v]));
                        const storeTotals = updatedCart.item_store_total ? JSON.parse(updatedCart.item_store_total) : {};

                        for (const storeIdString in storeVoucherMap) {
                            const voucherId = storeVoucherMap[storeIdString];
                            const voucherDetails = detailsById.get(voucherId);
                            if (voucherId > 0 && voucherDetails) {
                                const storeSubtotal = storeTotals[storeIdString] || 0;
                                const finalDiscountValue = voucherModel.calculateMaxDiscount(voucherDetails, storeSubtotal);

                                finalStoreVoucherDetailsMap[storeIdString] = { ...voucherDetails, discount_value: finalDiscountValue };
                                totalStoreDiscountAmount += finalDiscountValue;
                            }
                        }
                    }
                } catch (e) { console.error("Lỗi xử lý voucher store", e); }
            }

            const storeIdsInCart = fullCartDetails.data.map((group: any) => group.store_id);
            const fullStoreDetailsMap = await storeModel.getStoreDetailsByIds(storeIdsInCart);

            const storesMap = fullCartDetails.data.reduce((acc: Record<number, any>, storeGroup: any) => {
                const storeId = storeGroup.store_id;
                const detailedStoreInfo = fullStoreDetailsMap.get(storeId) || {};
                acc[storeId] = {
                    ...detailedStoreInfo,
                    store_id: storeId,
                    items: flatItemList.filter((i: any) => i.store_id === storeId)
                };
                return acc;
            }, {});

            const totalDiscount = globalDiscountAmount + totalStoreDiscountAmount;
            const finalTotal = Math.max(0, itemTotal - totalDiscount);

            const finalResponseData = {
                list: flatItemList,
                stores: storesMap,
                itemTotal: itemTotal,
                totalDiscount: totalDiscount,
                finalTotal: finalTotal,
                storeVouchers: finalStoreVoucherDetailsMap,
                voucher: globalVoucherDetails || null,
            };

            return this.resJsonData(finalResponseData);

        } catch (error: any) {
            return this.resJsonErr(error.message);
        }
    }

    public async CartRemoveProduct(request: Request, customerIdFromRoute: number) {
        try {
            const customerId = Number(this.customerId || customerIdFromRoute);
            if (!customerId) throw new Error("invalid_customer_id");

            const listItemId: number[] = await this.request.getPost('cartItemIds', [], 'ids');

            if (customerId <= 0 || !listItemId.length) {
                throw new Error('Dữ liệu không hợp lệ');
            }

            const cartItemModel = new CartItemModel(this.pool);
            const cartModel = new CartModel(this.pool);
            const voucherModel = new VoucherModel(this.pool);
            const voucherStoreModel = new VoucherStoreModel(this.pool);
            const storeModel = new StoreModel(this.pool);

            let itemsSuccessfullyDeleted = 0;

            for (const itemId of listItemId) {
                try {
                    const filter = { id: itemId, customer_id: customerId };
                    const CartItem = await cartItemModel.findOne(filter);
                    if (!CartItem) continue;

                    await cartItemModel.deleteOne(filter);
                    itemsSuccessfullyDeleted++;
                } catch (innerError: any) {
                    console.error(`Lỗi xóa item ID ${itemId}:`, innerError.message);
                }
            }

            if (itemsSuccessfullyDeleted === 0) {
                throw new Error('invalid_404');
            }

            const currentCart = await cartModel.getCustomerCart(customerId);
            if (currentCart && currentCart.id) {
                await cartModel.recalculateCartTotals(currentCart.id, customerId);
            }

            const fullCartDetails = await cartItemModel.getDatas(this.request, customerId, null);
            const updatedCart = await cartModel.getCustomerCart(customerId);

            if (!updatedCart || fullCartDetails.data.length === 0) {
                const finalResponseData = {
                    list: [], stores: {}, itemTotal: 0, totalDiscount: 0, finalTotal: 0,
                    storeVouchers: {}, voucher: null,
                    message: `Đã xóa thành công ${itemsSuccessfullyDeleted} mặt hàng. Giỏ hàng hiện tại rỗng.`
                };
                return this.resJsonData(finalResponseData);
            }

            const itemTotal = updatedCart.item_total || 0;

            const flatItemList = fullCartDetails.data.flatMap((group: any) => {
                const groupStoreId = Number(group.store_id);
                return group.items.map((item: any) => ({
                    ...item,
                    store_id: groupStoreId,
                    product: item.product ? {
                        ...item.product,
                        store_id: groupStoreId
                    } : null
                }));
            });

            const storeIdsInCart = fullCartDetails.data.map((group: any) => group.store_id);
            const fullStoreDetailsMap = await storeModel.getStoreDetailsByIds(storeIdsInCart);

            let globalVoucherDetails = null;
            let globalDiscountAmount = 0;
            const appliedGlobalVoucherId = updatedCart.voucher_id || null;

            if (appliedGlobalVoucherId) {
                const voucherDetails = await voucherModel.findOne({ id: appliedGlobalVoucherId });
                if (voucherDetails) {
                    const finalDiscountValue = voucherModel.calculateMaxDiscount(voucherDetails, itemTotal);
                    const ctmValues = voucherModel.calculateCtmValues({ discount_value: finalDiscountValue }, fullCartDetails.data);

                    globalVoucherDetails = {
                        ...voucherDetails,
                        discount_value: finalDiscountValue,
                        ctmValues: ctmValues,
                    };
                    globalDiscountAmount = finalDiscountValue;
                }
            }

            const voucherStoreString = updatedCart.voucher_store_id;
            const finalStoreVoucherDetailsMap: Record<string, any> = {};
            let totalStoreDiscountAmount = 0;

            if (voucherStoreString) {
                try {
                    const storeVoucherMap: { [storeId: string]: number } = JSON.parse(voucherStoreString);
                    const appliedStoreVoucherIds = Object.values(storeVoucherMap).filter(id => id > 0);

                    if (appliedStoreVoucherIds.length > 0) {
                        const detailsList = await voucherStoreModel.getDetailsByIds(appliedStoreVoucherIds);
                        const detailsById = new Map(detailsList.map((v: any) => [v.id, v]));
                        const storeTotals = updatedCart.item_store_total ? JSON.parse(updatedCart.item_store_total) : {};

                        for (const storeIdString in storeVoucherMap) {
                            const voucherId = storeVoucherMap[storeIdString];
                            const voucherDetails = detailsById.get(voucherId);
                            const storeSubtotal = storeTotals[storeIdString] || 0;

                            if (voucherId > 0 && voucherDetails) {
                                const finalDiscountValue = voucherModel.calculateMaxDiscount(voucherDetails, storeSubtotal);
                                finalStoreVoucherDetailsMap[storeIdString] = {
                                    ...voucherDetails,
                                    discount_value: finalDiscountValue,
                                };
                                totalStoreDiscountAmount += finalDiscountValue;
                            }
                        }
                    }
                } catch (e) {
                    console.error("Lỗi xử lý store voucher trong CartRemoveProduct:", e);
                }
            }

            const storesMap = fullCartDetails.data.reduce((acc: Record<number, any>, storeGroup: any) => {
                const storeId = storeGroup.store_id;
                const detailedStoreInfo = fullStoreDetailsMap.get(storeId) || {};
                acc[storeId] = {
                    ...detailedStoreInfo,
                    store_id: storeId,
                    items: flatItemList.filter((i: any) => i.store_id === storeId)
                };
                return acc;
            }, {});

            const totalDiscount = globalDiscountAmount + totalStoreDiscountAmount;
            const finalTotal = Math.max(0, itemTotal - totalDiscount);

            const finalResponseData = {
                list: flatItemList,
                stores: storesMap,
                itemTotal: itemTotal,
                totalDiscount: totalDiscount,
                finalTotal: finalTotal,
                storeVouchers: finalStoreVoucherDetailsMap,
                voucher: globalVoucherDetails || null,
                message: `Đã xóa thành công ${itemsSuccessfullyDeleted} mặt hàng.`,
            };

            return this.resJsonData(finalResponseData);

        } catch (error: any) {
            return this.resJsonErr(error.message);
        }
    }

    public async toggleSelectionStatus(request: Request, customerId: number) {
        try {
            const custId = Number(this.customerId || customerId);
            if (!custId) throw new Error("invalid_customer_id");

            const itemIds: number[] = await this.request.getPost('cartItemIds', [], 'ids');
            const isOrder = Number(this.request.getPost('isOrder', 0));

            if (custId <= 0 || !itemIds.length || (isOrder !== 0 && isOrder !== 1)) {
                throw new Error("invalid_404");
            }

            const cartItemModel = new CartItemModel(this.pool);
            const cartModel = new CartModel(this.pool);
            const voucherModel = new VoucherModel(this.pool);
            const voucherStoreModel = new VoucherStoreModel(this.pool);
            const storeModel = new StoreModel(this.pool);

            for (const itemId of itemIds) {
                const item = await cartItemModel.findOne({ id: itemId, customer_id: custId });
                if (!item) throw new Error("invalid_404");
            }

            await cartItemModel.toggleCartItemsSelection(
                custId,
                itemIds,
                isOrder as (0 | 1)
            );

            const currentCart = await cartModel.getCustomerCart(custId);
            if (currentCart && currentCart.id) {
                await cartModel.recalculateCartTotals(currentCart.id, custId);
            }

            const fullCartDetails = await cartItemModel.getDatas(this.request, custId, null);
            const updatedCart = await cartModel.getCustomerCart(custId);

            if (!updatedCart || fullCartDetails.data.length === 0) {
                return this.resJsonData({
                    list: [], stores: {}, itemTotal: 0, totalDiscount: 0, finalTotal: 0,
                    storeVouchers: {}, voucher: null,
                });
            }

            const itemTotal = updatedCart.item_total || 0;

            const flatItemList = fullCartDetails.data.flatMap((group: any) => {
                const groupStoreId = Number(group.store_id);
                return group.items.map((item: any) => ({
                    ...item,
                    store_id: groupStoreId,
                    product: item.product ? {
                        ...item.product,
                        store_id: groupStoreId
                    } : null
                }));
            });

            let globalVoucherDetails = null;
            let globalDiscountAmount = 0;
            const appliedGlobalVoucherId = updatedCart.voucher_id || null;

            if (appliedGlobalVoucherId) {
                const voucherDetails = await voucherModel.findOne({ id: appliedGlobalVoucherId });
                if (voucherDetails) {
                    const finalDiscountValue = voucherModel.calculateMaxDiscount(voucherDetails, itemTotal);
                    const ctmValues = voucherModel.calculateCtmValues({ discount_value: finalDiscountValue }, fullCartDetails.data);

                    globalVoucherDetails = {
                        ...voucherDetails,
                        discount_value: finalDiscountValue,
                        ctmValues: ctmValues,
                    };
                    globalDiscountAmount = finalDiscountValue;
                }
            }

            const voucherStoreString = updatedCart.voucher_store_id;
            const finalStoreVoucherDetailsMap: Record<string, any> = {};
            let totalStoreDiscountAmount = 0;

            if (voucherStoreString) {
                try {
                    const storeVoucherMap: { [storeId: string]: number } = JSON.parse(voucherStoreString);
                    const appliedStoreVoucherIds = Object.values(storeVoucherMap).filter(id => id > 0);

                    if (appliedStoreVoucherIds.length > 0) {
                        const detailsList = await voucherStoreModel.getDetailsByIds(appliedStoreVoucherIds);
                        const detailsById = new Map(detailsList.map((v: any) => [v.id, v]));
                        const storeTotals = updatedCart.item_store_total ? JSON.parse(updatedCart.item_store_total) : {};

                        for (const storeIdString in storeVoucherMap) {
                            const voucherId = storeVoucherMap[storeIdString];
                            const voucherDetails = detailsById.get(voucherId);
                            const storeSubtotal = storeTotals[storeIdString] || 0;

                            if (voucherId > 0 && voucherDetails) {
                                const finalDiscountValue = voucherModel.calculateMaxDiscount(voucherDetails, storeSubtotal);
                                finalStoreVoucherDetailsMap[storeIdString] = {
                                    ...voucherDetails,
                                    discount_value: finalDiscountValue,
                                };
                                totalStoreDiscountAmount += finalDiscountValue;
                            }
                        }
                    }
                } catch (e) {
                    console.error("Lỗi xử lý store voucher trong toggleSelectionStatus:", e);
                }
            }

            const storeIdsInCart = fullCartDetails.data.map((group: any) => group.store_id);
            const fullStoreDetailsMap = await storeModel.getStoreDetailsByIds(storeIdsInCart);

            const storesMap = fullCartDetails.data.reduce((acc: Record<number, any>, storeGroup: any) => {
                const storeId = storeGroup.store_id;
                const detailedStoreInfo = fullStoreDetailsMap.get(storeId) || {};
                acc[storeId] = {
                    ...detailedStoreInfo,
                    store_id: storeId,
                    items: flatItemList.filter((i: any) => i.store_id === storeId)
                };
                return acc;
            }, {});

            const totalDiscount = globalDiscountAmount + totalStoreDiscountAmount;
            const finalTotal = Math.max(0, itemTotal - totalDiscount);

            const finalResponseData = {
                list: flatItemList,
                stores: storesMap,
                itemTotal: itemTotal,
                totalDiscount: totalDiscount,
                finalTotal: finalTotal,
                storeVouchers: finalStoreVoucherDetailsMap,
                voucher: globalVoucherDetails || null,
            };

            return this.resJsonData(finalResponseData);

        } catch (error: any) {
            return this.resJsonErr(error.message);
        }
    }
    public async getCartSummary(request: Request, customerIdFromRoute: number) {
        try {
            const customerId = Number(this.customerId || customerIdFromRoute);
            if (!customerId) throw new Error("invalid_customer_id");

            const cartModel = new CartModel(this.pool);
            const summary = await cartModel.calculateSummary(customerId);

            return this.resJsonData(summary);
        } catch (error: any) {
            return this.resJsonErr(error.message);
        }
    }
}