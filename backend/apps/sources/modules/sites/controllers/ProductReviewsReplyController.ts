import CoreController from '@src/controllers/CoreController.js';

export default class ProductReviewReplyController extends CoreController {
    md = this.models.productReviewReply;
    async getList() {
        try {
            const data = await this.md.getDatas(
                this.request,
            );

            this.resJsonData(data);

        } catch (error) {
            this.resJsonErr((error as Error).message || "Không thể lấy danh sách menu.");
        }
    }
    async detailBefore(item: any): Promise<any> {
        // if (item) {
        //     item.views += 1; // Tăng lượt xem
        //     await this.md.update(item.id, { views: item.views });
        // }
        return item;
    }
    async detailById(id: number = 0) {
        try {
            if (!id) throw new Error("invalid_id");
            const conditions: any = { id: id, status: 1 };
            let item = await this.md.findOne(conditions);
            if (!item) throw new Error('invalid_404');

            item = await this.detailBefore(item);

            this.resJsonData(item);
        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }
}