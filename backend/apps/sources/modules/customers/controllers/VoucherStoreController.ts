import CustomerController from "@src/controllers/CustomerController.js";
import CartModel from "@src/models/CartModel.js";
import VoucherStoreModel from "@src/models/VoucherStoreModel.js";

export default class VoucherStoreController extends CustomerController {
    async storeVoucherMaybeApply() {
        try {
            const storeId = this.request.getParam('storeId');
            if (storeId <= 0) {
                throw new Error("invalid_404");
            }
            const customerId = Number(this.customerId || 0);
            const voucherStore = new VoucherStoreModel(this.pool);
            const cartModel = new CartModel(this.pool)
            const currentCart = await cartModel.getCustomerCart(customerId);
            let appliedVoucherStoreId = 0;
            if (currentCart && currentCart.voucher_store_id) {

                const rawVoucherMap = currentCart.voucher_store_id;

                if (rawVoucherMap && rawVoucherMap !== 'NULL' && rawVoucherMap.trim() !== '{}') {
                    try {
                        const voucherMap = JSON.parse(rawVoucherMap);

                        const storeKey = String(storeId);

                        if (voucherMap[storeKey]) {
                            appliedVoucherStoreId = Number(voucherMap[storeKey]);
                        }

                    } catch (e) {
                        console.error("Lỗi Parsing JSON voucher_store_id:", e);
                    }
                }
            }
            const resultList = await voucherStore.storeVoucherMaybeApply(storeId, customerId);
            const responseData = {
                voucher_id: appliedVoucherStoreId,
                list: resultList || [],
            };

            this.resJsonData(responseData);

        } catch (error) {
            this.resJsonErr((error as Error).message || "Lỗi hệ thống khi lấy danh sách voucher.");
        }
    }
    async cartUseStoreVoucher() {
        try {
            const customerId = Number(this.customerId || 0);
            if (customerId <= 0) {
                throw new Error("invalid_customer_id");
            }

            const voucherStore = new VoucherStoreModel(this.pool)
            const result = await voucherStore.cartUseStoreVoucher(this.request, customerId);
            if (result.status !== 200) {
                return this.resJsonErr(result.message);
            }
            this.resJsonData(result);
        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }
    async cartRemoveStoreVoucher() {
        try {
            const customerId = Number(this.customerId || 0);
            if (customerId <= 0) {
                throw new Error("invalid_customer_id");
            }
            const voucherStoreModel = new VoucherStoreModel(this.pool);
            const result = await voucherStoreModel.removeStoreVoucher(this.request, customerId);

            if (result.status !== 200) {
                return this.resJsonErr(result.message, result.status);
            }
            return this.resJsonData(result.data, result.message);

        } catch (error: any) {
            return this.resJsonErr(error.message,);
        }
    }
}