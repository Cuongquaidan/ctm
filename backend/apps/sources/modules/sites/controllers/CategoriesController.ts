import CoreController from '@src/controllers/CoreController.js';
import { CategoryData } from '@src/models/CategoriesModel.js';

export default class CategoriesController extends CoreController {
    md = this.models.categories;
    async getList() {
        try {
            const isPaginatedParam = this.request.get('isPaginated');
            const isPaginated = isPaginatedParam === 'false' ? false : true;

            const data = await this.md.getDatas(
                this.request,
                this.user,
                isPaginated
            );

            if (isPaginated) {
                this.resJsonData(data);
            } else {
                this.resJson({ data: data, status: 200 });
            }

        } catch (error) {
            this.resJsonErr((error as Error).message || "Không thể lấy danh sách.");
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

    async getListByArrayIds() {
        try {
            const listId: number[] = this.request.getPost('category_ids', [], 'ids');

            if (!listId.length) {
                return this.resJsonErr('invalid_ids_list');
            }

            const validIds = listId.filter(id => typeof id === 'number' && id > 0);

            if (validIds.length === 0) {
                return this.resJsonData([]);
            }

            const idList = validIds.join(',');
            const whereClause = `id IN (${idList}) AND status = 1`;
            const rawItems: CategoryData[] = await this.md.find(whereClause, false, false);
            const itemMap: Record<number, CategoryData> = {};
            for (const item of rawItems) {
                if (item.id) {
                    itemMap[item.id] = item as CategoryData;
                }
            }
            const sortedItems: CategoryData[] = [];
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