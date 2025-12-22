import SingleModel from '@src/SingleModel.js';
import { Request } from '@src/Request.js';
import CartModel, { CartData } from './CartModel.js';
import Common from '@src/Common.js';
import ProductModel from './ProductsModel.js';
import StoreModel from './StoresModel.js';
import ProductPriceModel from './ProductPriceModel.js';
import VoucherStoreModel, { VoucherStoreData } from './VoucherStoreModel.js';
import VoucherModel from './VouchersModel.js';

export interface CartItemData {
    id?: number;
    customer_id?: number;
    product_id?: number;
    product_price_id?: number;
    seller_id?: number;
    product_seller_id?: number;
    quantity?: number;
    is_order?: number;
    created_at?: string;
    updated_at?: string;
    created_by?: number;
    updated_by?: number;
}

export default class CartItemModel extends SingleModel<CartItemData> {
    table = 'cart_item';

    vdObject = {
        customer_id: 'integer|min(0)',
        product_id: 'required|integer|min(1)',
        product_price_id: 'required|integer|min(1)',
        seller_id: 'integer|min(1)',
        product_seller_id: 'integer|min(1)',
        quantity: 'required|integer|min(1)',
        is_order: 'numeric|min(0)|max(1)',
        created_at: 'date',
        updated_at: 'date',
    };

    fieldName(key: any) {
        const data: any = {
            id: 'ID Chi tiết Giỏ hàng',
            customer_id: 'ID Khách hàng',
            product_id: 'ID Sản phẩm',
            product_price_id: 'ID Giá sản phẩm',
            seller_id: 'ID Người bán',
            product_seller_id: 'ID Sản phẩm/Người bán',
            quantity: 'Số lượng',
            is_order: 'Đã đặt hàng',
            created_at: 'Ngày thêm vào',
            updated_at: 'Ngày cập nhật',
            created_by: 'Người tạo',
            updated_by: 'Người cập nhật',
        };
        return data[key] ?? key;
    }

    async getItemsByCustomer(
        request: Request,
        customer: any
    ): Promise<CartItemData[]> {
        const customerId = customer && customer.customer_id ? customer.customer_id : 0;
        if (customerId <= 0) {
            return [];
        }
        const whereClause = `cart_item.customer_id = ${customerId} AND cart_item.is_order = 0`;
        const items = await this.find(
            whereClause,
            { "cart_item.created_at": "ASC" }
        );
        return items;
    }

    public async getTotalProductCount(customerId: number): Promise<number> {
        const sql = `
        SELECT COUNT(id) AS total_products
        FROM cart_item
        WHERE customer_id = ? 
    `;

        const [rows]: any = await this.query(sql, [customerId]);

        if (rows && rows.length > 0 && rows[0].total_products !== null) {
            return Number(rows[0].total_products);
        }

        return 0;
    }
    async getDatas(
        request: Request,
        authCustomerId: number,
        is_order: any = 0,
    ): Promise<{
        page: number;
        pageLen: number;
        pageTotal: number;
        recordTotal: number;
        data: any[];
    }> {
        const customerId = Number(authCustomerId);

        if (customerId <= 0) {
            return { page: 1, pageLen: 10, pageTotal: 0, recordTotal: 0, data: [] };
        }

        const productIdSh = request.get("productIdSh");
        const whereParts: string[] = [];

        whereParts.push(`cart_item.customer_id = ${customerId}`);

        if (productIdSh) {
            whereParts.push(`cart_item.product_id = ${Number(productIdSh)}`);
        }

        const orderValue = String(is_order);
        if (orderValue === "0" || orderValue === "false") {
            whereParts.push(`cart_item.is_order = 0`);
        } else if (orderValue === "1" || orderValue === "true") {
            whereParts.push(`cart_item.is_order = 1`);
        }

        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";
        const page = parseInt(request.get("page", "1"));
        const pageLen = parseInt(request.get("pageLen", "100"));
        const finalPageLen = Math.max(1, pageLen);

        const paginatedResult = await this.findWithPagination(
            whereClause,
            { "cart_item.created_at": "DESC" },
            page,
            finalPageLen
        );

        const rawItems: CartItemData[] = paginatedResult.items as CartItemData[];
        const productPriceIds = rawItems.map(item => item.product_price_id!).filter(id => id);

        const productModel = new ProductModel(this.pool);
        // const productIds = Array.from(new Set(rawItems.map(item => item.product_id).filter(id => id)));
        const rawProductIds = rawItems.map(item => item.product_id);

        const productIds = Array.from(new Set(rawProductIds))
            .filter((id): id is number => id !== undefined && id !== null) as number[];
        const calculatedPrices = await productModel.getCalculatedMultiPrices(
            productPriceIds,
            { id: customerId }
        );

        const priceMap = new Map(calculatedPrices.map(p => [p.id, p]));

        const productFullMap = await productModel.getMultiProductDetails(productIds);
        const finalData = rawItems.map(item => {
            const priceDetail = priceMap.get(item.product_price_id!);
            const productInfo = productFullMap.get(item.product_id!);

            const finalUnitPrice = priceDetail?.expense ?? 0;
            const totalCost = finalUnitPrice * (item.quantity || 0);
            const productObject = {
                ...(productInfo || {}),
                ...priceDetail,
                id: item.product_id,
            };

            return {
                ...item,
                store_id: productInfo?.store_id,
                package_name: priceDetail?.packageName,
                price: priceDetail?.price,
                image: priceDetail?.image,
                expense: finalUnitPrice,
                total: totalCost,
                // product_name: priceDetail?.productName,
                product: productObject,
            };
        });
        // const uniqueStoreIds: number[] = Array.from(new Set(finalData.map(item => item.store_id).filter(id => id)));
        const storeIdsWithUndefined = finalData.map(item => item.store_id);
        const uniqueStoreIds: number[] = Array.from(new Set(storeIdsWithUndefined))
            .filter((id): id is number => id !== undefined && id !== null);

        const storeModel = new StoreModel(this.pool);
        const storeNameMap = await storeModel.getStoreNamesByIds(uniqueStoreIds);

        const groupedMap: Record<number, {
            seller_id: number;
            store_id: number;
            store_name: string;
            item_count: number;
            items: any[];
        }> = {};

        finalData.forEach(item => {
            const storeId = item.store_id;

            if (!storeId) return;

            if (!groupedMap[storeId]) {
                const storeName = storeNameMap.get(storeId) || `Cửa hàng ID ${storeId}`;

                groupedMap[storeId] = {
                    seller_id: storeId,
                    store_id: storeId,
                    store_name: storeName,
                    item_count: 0,
                    items: []
                };
            }

            groupedMap[storeId].item_count += 1;
            groupedMap[storeId].items.push(item);
        });

        const groupedData = Object.values(groupedMap);

        return {
            page: paginatedResult.page,
            pageLen: finalPageLen,
            pageTotal: paginatedResult.pageTotal,
            recordTotal: paginatedResult.recordTotal,
            data: groupedData,
        };
    }

    async UpdateCart(
        request: Request,
        customerId: number
    ): Promise<any> {

        const productId = request.getPost('product_id');
        const productPriceId = request.getPost('product_price_id');
        const quantityNew = request.getPost('quantity', 0);
        const requestProductSellerId = request.getPost('product_seller_id', 0);

        const cartModel = new CartModel(this.pool);
        const productModel = new ProductModel(this.pool);
        const productPriceModel = new ProductPriceModel(this.pool);
        const voucherModel = new VoucherModel(this.pool);
        const voucherStoreModel = new VoucherStoreModel(this.pool);
        const storeModel = new StoreModel(this.pool);

        const custId = Number(customerId);
        const prodId = Number(productId);
        const priceId = Number(productPriceId);
        const newQuantity = Number(quantityNew);

        if (!prodId || !priceId || newQuantity < 0 || custId <= 0) {
            return { success: false, message: 'Dữ liệu sản phẩm hoặc khách hàng không hợp lệ.', cart: null, data: null, status: 400 };
        }

        try {
            const product = await productModel.findById(prodId);
            if (!product || product.is_deleted === 1 || product.status !== 1) {
                throw new Error('invalid_404');
            }

            const priceRecord = await productPriceModel.findOne({ id: priceId });
            if (!priceRecord) {
                throw new Error('invalid_404');
            }

            const remainingQty = Number(priceRecord.remaining_quantity || 0);
            const productName = product.name;

            let storeIdToSave = 0;
            if (product && product.store_id) { storeIdToSave = Number(product.store_id); }
            const finalSellerId = storeIdToSave;
            const finalProductSellerId = requestProductSellerId || storeIdToSave;

            const now = new Date();
            const formattedDatetime = Common.formatDate(now);

            let currentCart = await cartModel.getCustomerCart(custId);
            if (!currentCart) {
                const newCartData: CartData = { customer_id: custId, item_total: 0.00 };
                const newCartId = await cartModel.insert(newCartData);
                currentCart = await cartModel.findById(newCartId);
                if (!currentCart) throw new Error("Không thể tạo giỏ hàng mới.");
            }

            const existingItem = await this.findOne({
                customer_id: custId, product_id: prodId, product_price_id: priceId,
                seller_id: finalSellerId, product_seller_id: finalProductSellerId,
            });

            if (newQuantity > 0 && remainingQty !== -1) {
                if (remainingQty === 0) {
                    throw new Error(`Sản phẩm '${productName}' đã hết hàng.`);
                }
                if (newQuantity > remainingQty) {
                    throw new Error(`Sản phẩm '${productName}' chỉ còn ${remainingQty} đơn vị. Không thể đặt ${newQuantity} nữa.`);
                }
            }

            if (newQuantity === 0) {
                if (existingItem) {
                    await this.deleteOne({ id: existingItem.id! });
                }
            } else if (existingItem) {
                const updateData = { quantity: newQuantity, updated_at: formattedDatetime };
                const filterData = { id: existingItem.id! };
                await this.update(updateData, filterData);
            } else {
                const newItem: CartItemData = {
                    customer_id: custId, product_id: prodId, product_price_id: priceId,
                    quantity: newQuantity, seller_id: finalSellerId, product_seller_id: finalProductSellerId,
                    is_order: 1, created_at: formattedDatetime, updated_at: formattedDatetime,
                };
                await this.insert(newItem);
            }

            if (currentCart && currentCart.id) {
                await cartModel.recalculateCartTotals(currentCart.id, custId);
            }

            currentCart = await cartModel.getCustomerCart(custId);
            const fullCartDetails = await this.getDatas(request, custId, null);

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
            const itemTotal = currentCart?.item_total || 0;

            let globalVoucherDetails = null;
            let globalDiscountAmount = 0;
            const appliedGlobalVoucherId = currentCart?.voucher_id || null;

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

            const voucherStoreString = currentCart?.voucher_store_id;
            const finalStoreVoucherDetailsMap: Record<string, any> = {};
            let totalStoreDiscountAmount = 0;

            if (voucherStoreString) {
                try {
                    const storeVoucherMap: { [storeId: string]: number } = JSON.parse(voucherStoreString);
                    const appliedStoreVoucherIds = Object.values(storeVoucherMap).filter(id => id > 0);

                    if (appliedStoreVoucherIds.length > 0) {
                        const detailsList = await voucherStoreModel.getDetailsByIds(appliedStoreVoucherIds);
                        const detailsById = new Map(detailsList.map((v: any) => [v.id, v]));
                        const storeTotals = currentCart?.item_store_total ? JSON.parse(currentCart.item_store_total) : {};

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
                    console.error("Lỗi xử lý store voucher trong UpdateCart:", e);
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
            };

            return {
                success: true,
                message: 'Cập nhật giỏ hàng thành công.',
                ...finalResponseData,
                status: 200
            };

        } catch (error: any) {
            console.error("Lỗi khi cập nhật giỏ hàng:", error);
            return { success: false, message: error.message || 'Lỗi hệ thống.', status: 500 };
        }
    }

    public async toggleCartItemsSelection(
        customerId: number,
        itemIds: number[],
        isOrderValue: 0 | 1
    ): Promise<void> {
        if (!itemIds.length || customerId <= 0) {
            throw new Error("Dữ liệu đầu vào không hợp lệ hoặc chưa đăng nhập.");
        }
        const sql = `
        UPDATE cart_item 
        SET 
            is_order = ?,
            updated_at = NOW() 
        WHERE customer_id = ? 
        AND id IN (?)
    `;
        const values = [isOrderValue, customerId, itemIds];
        await this.query(sql, values);
        const cartModel = new CartModel(this.pool);
        const currentCart = await cartModel.getCustomerCart(customerId);

        if (currentCart && currentCart.id) {
            await cartModel.recalculateCartTotals(currentCart.id, customerId);
        }
    }
}