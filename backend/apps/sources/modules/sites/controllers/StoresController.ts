import CoreController from "@src/controllers/CoreController.js";

export default class StoreController extends CoreController {
    md = this.models.stores;
    async getList() {
        try {
            const data = await this.md.getDatas(
                this.request,
                0,
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

    async getStoreDetail() {
        try {
            const alias = this.request.get('alias');

            if (!alias) {
                throw new Error("invail_alias");
            }

            const storeService = this.models.stores;

            const storeData = await storeService.getStoreByAlias(alias);

            if (!storeData) {
                throw new Error("invail_store");

            }

            this.resJsonData(storeData);

        } catch (error) {
            this.resJsonErr((error as Error).message);
        }
    }
    async listNamesStores() {
        try {
            const whereClause = 'is_deleted = 0';

            const orderObject = { created_at: 'ASC' } as const;

            const stores = await this.md.find(
                whereClause,
                orderObject,
                false,
                undefined,
                'id, name'
            );

            return this.resJsonData(stores);
        } catch (err: any) {
            return this.resJsonErr(err.message);
        }
    }

    async getDetailAlias() {
        try {
            const alias = this.request.getParam('alias');

            if (!alias) {
                throw new Error("invail_alias");
            }

            const storeData = await this.models.stores.getStoreByAlias(alias);

            if (!storeData) {
                throw new Error("invail_store");
            }

            this.resJsonData(storeData);

        } catch (error) {
            this.resJsonErr((error as Error).message || 'Lỗi hệ thống khi truy vấn cửa hàng.');
        }
    }

    async getProductsByStoreAlias() {
        try {
            const request = this.request;
            const customer = this.customer || null;
            const is_deleted = request.get('is_deleted') || 0;

            const storeService = this.models.stores;
            const alias = this.request.getParam('alias');

            if (!alias) {
                throw new Error("invail_alias");
            }

            const finalResult = await storeService.getProductListByStore(
                request,
                customer,
                is_deleted,
                alias
            );

            this.resJsonData(finalResult);

        } catch (error) {
            this.resJsonErr((error as Error).message || 'Lỗi khi lấy danh sách sản phẩm theo alias cửa hàng.');
        }
    }
    async getProductsByStoreId() {
        try {
            const request = this.request;
            const customer = this.customer || null;
            const is_deleted = request.get('is_deleted') || 0;

            const storeIdParam = request.getParam('store_id');

            if (!storeIdParam || Number(storeIdParam) <= 0) {
                throw new Error("invalid_store_id");
            }

            const storeId = Number(storeIdParam);

            const storeService = this.models.stores;

            const finalResult = await storeService.getProductListByStoreId(
                request,
                customer,
                is_deleted,
                storeId
            );

            this.resJsonData(finalResult);

        } catch (error) {
            this.resJsonErr((error as Error).message || 'Lỗi khi lấy danh sách sản phẩm.');
        }
    }

}