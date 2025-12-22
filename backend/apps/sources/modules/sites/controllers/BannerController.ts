import CoreController from "@src/controllers/CoreController.js";
import { BannerData } from "@src/models/BannersModel.js";
export default class BannersController extends CoreController {
    md = this.models.banners;
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

    async getDetailsByArrayIds() {
        try {
            const listId: number[] = this.request.getPost('banner_ids', [], 'ids');

            if (!listId.length) {
                return this.resJsonErr('invalid_ids_list');
            }

            const validIds = listId.filter(id => typeof id === 'number' && id > 0);

            if (validIds.length === 0) {
                return this.resJsonData([]);
            }


            const idList = validIds.join(',');
            const whereClause = `id IN (${idList}) AND status = 1`;

            const rawItems: BannerData[] = await this.md.find(whereClause, false, false);
            const itemMap: Record<number, BannerData> = {};
            for (const item of rawItems) {
                if (item.id) {
                    itemMap[item.id] = item as BannerData;
                }
            }

            const sortedItems: BannerData[] = [];
            for (const id of validIds) {
                const item = itemMap[id];

                if (item) {
                    sortedItems.push(item);
                }
            }

            this.resJsonData(sortedItems);

        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }

}
