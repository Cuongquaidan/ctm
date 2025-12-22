import CoreController from "@src/controllers/CoreController.js";

export default class VoucherStoreCustomerController extends CoreController {
    md = this.models.voucherStoreCustomer;
    async getList() {
        const isPaginatedParam = this.request.get('isPaginated');
        const isPaginated = isPaginatedParam === 'false' ? false : true;
        const data = await this.md.getDatas(
            this.request,
            isPaginated
        );

        if (isPaginated) {
            this.resJsonData(data);
        } else {
            this.resJson({ data: data, status: 200 });
        }
    } catch(error: any) {
        this.resJsonErr((error as Error).message);
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