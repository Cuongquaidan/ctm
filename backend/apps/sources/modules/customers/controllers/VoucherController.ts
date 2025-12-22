import CustomerController from "@src/controllers/CustomerController.js";
import VoucherModel from "@src/models/VouchersModel.js";

export default class VoucherController extends CustomerController {

    async cartUseVoucher() {
        try {
            const customerId = Number(this.customerId || 0);
            if (customerId <= 0) {
                throw new Error("invalid_customer_id");
            }
            const voucherModel = new VoucherModel(this.pool);

            const result = await voucherModel.cartUseVoucher(this.request, customerId);
            if (result.status !== 200) {
                return this.resJsonErr(result.msg || "invalid_404", 400);
            }
            return this.resJsonData(result);
        } catch (error) {
            console.error("Lỗi Controller khi áp dụng Global Voucher:", error);
            return this.resJsonErr((error as Error).message);
        }
    }

    async removeVoucher() {
        const customerId = Number(this.customerId || 0);
        if (customerId <= 0) {
            throw new Error("invalid_customer_id");
        }
        const voucherModel = new VoucherModel(this.pool);
        const result = await voucherModel.removeVoucher(this.request, customerId);

        if (result.status !== 200) {
            return this.resJsonErr(result.msg || "invalid_404", 400);
        }
        return this.resJsonData(result.data, result.status);
    }
    async voucherMaybeApply() {
        try {
            const customerId = Number(this.customerId || 0);
            if (customerId <= 0) {
                throw new Error("invalid_customer_id");
            }
            const voucherModel = new VoucherModel(this.pool);

            const result = await voucherModel.voucherMaybeApply(customerId);

            return this.resJsonData(result.data);

        } catch (error: any) {
            console.error("Lỗi Controller khi lấy danh sách voucher:", error);
            return this.resJsonErr(error.message);
        }
    }

    public async getVoucherList(request: Request, customerIdFromRoute: number) {
        try {
            const customerId = Number(this.customerId || customerIdFromRoute);
            if (customerId <= 0) {
                throw new Error("invalid_customer_id");
            }

            const voucherService = new VoucherModel(this.pool);

            const result = await voucherService.getApplicableVouchersList(customerId);

            return this.resJsonData(result);

        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }

    async profileVouchers() {
        const customerId = Number(this.customerId || 0);
        const voucherModel = new VoucherModel(this.pool);
        const result = await voucherModel.getVoucherListForProfile(customerId);

        if (result.status !== 200) {
            return this.resJsonErr(result.msg || "invalid_404", 400);
        }
        return this.resJsonData(result.data, 200);
    }
}