import SingleController from '@src/controllers/SingleController.js';

export default class OrderItemsController extends SingleController {
    md = this.models.orderItems;
    async getList() {
        try {
            const data = await this.md.getDatas(
                this.request,
                this.customer,
                0
            );

            this.resJsonData(data);

        } catch (error) {
            this.resJsonErr((error as Error).message || "Không thể lấy danh sách menu.");
        }
    }
}