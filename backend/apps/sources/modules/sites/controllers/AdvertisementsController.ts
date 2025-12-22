import CoreController from "@src/controllers/CoreController.js";
import { AdvertisementData } from "@src/models/AdvertisementsModel.js";
export default class AdvertisementsController extends CoreController {
    md = this.models.advertisements;
    async getList() {
        try {
            const data = await this.md.getDatas(
                this.request,
                this.user,
            );

            this.resJsonData(data);

        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }
    async detailBefore(item: any): Promise<any> {
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
    // async getDetailsByArrayIds() {
    //     try {
    //         const listId: number[] = await this.request.getPost('advertisement_ids', [], 'ids');
    //         if (!listId.length) {
    //             return this.resJsonErr('invalid_ids_list');
    //         }
    //         const validIds = listId.filter(id => typeof id === 'number' && id > 0);

    //         if (validIds.length === 0) {
    //             return this.resJsonData([]);
    //         }
    //         const conditions: any = {
    //             id: validIds,
    //             status: 1
    //         };
    //         const rawItems = await this.md.find(conditions);

    //         const sortedItems = validIds.map(id => rawItems.find((item: any) => item.id === id)).filter(Boolean);

    //         this.resJsonData(sortedItems);

    //     } catch (error: any) {
    //         this.resJsonErr(error.message);
    //     }
    // }
    async getDetailsByArrayIds() {
        try {
            const listId: number[] = this.request.getPost('advertisement_ids', [], 'ids');
            if (!listId.length) {
                return this.resJsonErr('invalid_ids_list');
            }
            const validIds = listId.filter(id => typeof id === 'number' && id > 0);

            if (validIds.length === 0) {
                return this.resJsonData([]);
            }
            const idList = validIds.join(',');
            const whereClause = `id IN (${idList}) AND status = 1`;
            const rawItems: AdvertisementData[] = await this.md.find(whereClause, false, false);
            const itemMap: Record<number, AdvertisementData> = {};
            for (const item of rawItems) {
                if (item.id) {
                    itemMap[item.id] = item;
                }
            }
            const sortedItems: AdvertisementData[] = [];
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
