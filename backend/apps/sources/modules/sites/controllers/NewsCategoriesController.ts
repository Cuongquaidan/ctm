import CoreController from "@src/controllers/CoreController.js";

export default class NewsCategoriesController extends CoreController {
    md = this.models.newsCategory;

    async getTree() {
        try {
            const parent_id = this.request.get('parent_id');
            const params: any = {
                status: 1,
            };
            // if (this.is_deleted) {
            //     params.is_deleted = 0;
            // }
            const data = await this.md.getTree(params, parent_id);

            this.resJsonData(data);
        } catch (error: any) {
            this.resJsonErr(error.message || "Đã xảy ra lỗi");
        }
    }
    async getList() {
        try {
            const data = await this.md.getDatas(
                this.request,
                this.user,
                0
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
            const conditions: any = { id: id, status: 1, is_deleted: 0 };
            let item = await this.md.findOne(conditions);
            if (!item) throw new Error('invalid_404');

            item = await this.detailBefore(item);

            this.resJsonData(item);
        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }
}