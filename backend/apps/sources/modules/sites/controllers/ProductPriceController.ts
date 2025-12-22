import CoreController from '@src/controllers/CoreController.js';

export default class ProductPriceController extends CoreController {
    md = this.models.productPrice;
    actionActive = ['index', 'create', 'detail', 'edit', 'delete', 'deleteone'];
    is_deleted = false;
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
        return item;
    }
    async detailById(id: number = 0) {
        try {
            if (!id) throw new Error("invalid_id");
            const conditions: any = { id: id };
            let item = await this.md.findOne(conditions);
            if (!item) throw new Error('invalid_404');

            item = await this.detailBefore(item);

            this.resJsonData(item);
        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }

    async getSingleProductPrice() {
        try {
            const request = this.request;
            const productPriceId = parseInt(request.get('productPriceId') || request.query.productPriceId);
            const priceModel = this.models.productPrice;
            const priceItem = await priceModel.getSingleProductPrice(
                productPriceId,
            );
            if (!priceItem) {
                throw new Error('invalid_404');
            }
            this.resJsonData(priceItem);
        } catch (error) {
            this.resJsonErr((error as Error).message);
        }
    }
}