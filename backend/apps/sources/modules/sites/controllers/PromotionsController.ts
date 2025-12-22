import CoreController from '@src/controllers/CoreController.js';

export default class PromotionsController extends CoreController {
    md = this.models.promotions;

    async getList() {
        try {
            const data = await this.md.getDatas(
                this.request,
                0,
            );

            this.resJsonData(data);

        } catch (error) {
            this.resJsonErr((error as Error).message);
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

    async getFlashSales(): Promise<void> {
        try {
            const flashSaleData = await this.md.getFlashSale(this.request, this.customer);

            if (!flashSaleData || flashSaleData.length === 0) {
                throw new Error("invalid_flash_sale");
            }

            this.resJsonData({ flashSaleData });

        } catch (error) {
            console.error('Lỗi khi lấy danh sách Flash Sale:', error);
            this.resJsonErr((error as Error).message || 'Lỗi khi lấy danh sách Flash Sale.');
        }
    }

    async getFlashSaleByProducts(): Promise<void> {
        try {
            const customerInfo = this.customer;

            const storeIds: number[] = await this.request.get('storeIds', [], 'ids');
            // const productPromotions = new ProductPromotionModel(this.pool)
            const flashSaleData = await this.md.getFlashSaleProducts(this.request, customerInfo, storeIds);

            if (!flashSaleData || flashSaleData.length === 0) {
                return this.resJsonData([]);
            }

            this.resJsonData(flashSaleData);

        } catch (error) {
            console.error('Lỗi khi lấy danh sách Flash Sale:', error);
            this.resJsonErr((error as Error).message || 'Lỗi khi lấy danh sách Flash Sale.');
        }
    }
}