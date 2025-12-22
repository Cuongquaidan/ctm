import CoreController from "@src/controllers/CoreController.js";

export default class VoucherInvitedController extends CoreController {
    md = this.models.voucher;
    async getList() {
        try {
            const isPaginatedParam = this.request.get('isPaginated');
            const isPaginated = isPaginatedParam === 'false' ? false : true;
            const data = await this.md.getDatas(
                this.request,
                this.user,
                isPaginated
            );

            if (isPaginated) {
                this.resJsonData(data);
            } else {
                this.resJson({ data: data, status: 200 });
            }

        } catch (error) {
            this.resJsonErr((error as Error).message || "Không thể lấy danh sách menu.");
        }
    }
}