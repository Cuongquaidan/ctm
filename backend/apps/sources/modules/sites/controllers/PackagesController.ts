import CoreController from '@src/controllers/CoreController.js';

export default class PackageController extends CoreController {
    md = this.models.packages;
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
        // Đây là nơi bạn thêm các logic tiền xử lý dữ liệu, ví dụ:
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
    async detailByAlias(alias: string) {
        try {
            alias = this.request.getParam('alias')
            const conditions: any = { alias: alias, status: 1, is_deleted: 0 };
            let item = await this.md.findOne(conditions);
            if (!item) throw new Error('invalid_404');

            item = await this.detailBefore(item);

            this.resJsonData(item);
        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }
}