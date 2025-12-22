import SingleController from "@src/controllers/SingleController.js";
import Common from '@src/Common.js';
import { ImportExcel } from '@src/ImportExcel.js';

export default class NewsController extends SingleController {
    md = this.models.news;
    actionActive = ['create', 'copy', 'detail', 'edit', 'delete', 'deleteone'];
    isDeleted = true;
    exportFile = 'news_export.xlsx';
    async updateBefore(item: this['md']['td'], _itemOld: Partial<this['md']['td']>) {
        item.name = this.request.getPost('name');
        item.description = this.request.getPost('description');
        item.content = this.request.getPost('content', '', 'html');
        item.category_ids = this.request.getPost('category_ids');
        if (!item.category_ids) throw new Error("invail_category");
        const newsCategory = await this.md.getById(item.category_ids);
        if (item.category_ids) {
            item.category_ids = newsCategory?.id;
        }
        item.status = this.request.getPost('status');
        item.meta_title = item?.id ? this.request.getPost('meta_title') : item.name;
        item.meta_description = item?.id ? this.request.getPost('meta_description') : item.description;
        item.meta_keywords = item?.id ? this.request.getPost('metaKeymeta_keywordswords') : item.name;
        item.alias = item?.id ? this.request.getPost('alias') : await Common.createAlias(item, this.md);
        item.hot = this.request.getPost('hot', 0, 'int');
        return item;
    }
    async detailByAlias(alias: string) {
        try {
            alias = this.request.get('alias')
            if (!this.actionActive.includes('detail')) {
                throw new Error('invalid_403');
            }
            const conditions: any = { alias: alias, status: 1, is_deleted: 0 };
            let item = await this.md.findOne(conditions);
            console.log(item);
            if (!item) throw new Error('invalid_404');

            item = await this.detailBefore(item);

            this.resJsonData(item);
        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }
    async importBefore(importExcel: ImportExcel, row: number, item: any) {
        item.name = importExcel.getFilterData('B' + row);
        item.excerpt = importExcel.getFilterData('C' + row);
        item.status = importExcel.getFilterData('D' + row);
        item.newsCategoryId = importExcel.getFilterData('E' + row);
        if (item.newsCategoryId) {
            const newsCategory = await this.md.getById(item.newsCategoryId);
            item.newsCategory = newsCategory?._id ?? null;
        }
        item.isFeatured = importExcel.getFilterData('F' + row);
        if (item?._id) {
            item.metaTitle = item.metaTitle ?? importExcel.getFilterData('G' + row);
            item.metaExcerpt = item.metaExcerpt ?? importExcel.getFilterData('H' + row);
            item.metaKeywords = item.metaKeywords ?? importExcel.getFilterData('J' + row);
            item.alias = item.alias ?? importExcel.getFilterData('I' + row);
            item.updatedAt = new Date();
            item.updatedBy = this.userObjectId;
        } else {
            item.metaTitle = importExcel.getFilterData('B' + row);
            item.metaExcerpt = importExcel.getFilterData('C' + row);
            item.metaKeywords = importExcel.getFilterData('B' + row);
            item.alias = await Common.createAlias(item, this.md);
            const now = new Date();
            item.created_at = now;
            item.updated_at = now;
            item.publish_at = now;
            item.created_by = this.userObjectId;
            item.updated_by = this.userObjectId;
        }
        return item;
    }
    // async exportBefore(workbook: Workbook | undefined) {
    //     // const worksheet = workbook?.getWorksheet(1);
    //     // const data = await this.md.getDataExport(this.request, this.user, this.isDeleted);
    //     // data.forEach((item: any, ind: any) => {
    //     //     worksheet?.spliceRows(this.importRow + ind, 0, [item.numberId, item.name, item.excerpt, item.status,
    //     //     item.newsCategoryId ?? '', item.isFeatured, item.metaTitle, item.metaExcerpt, item.metaKeywords, item.alias, item.newsCategory?.name ?? '', item.createdBy?.fullname ?? '']);
    //     // });
    //     // return workbook;
    // }
    async getParentSimple() {
        try {
            const data = await this.models.newsCategory.getTree({ is_deleted: 0 });
            this.resJsonData(data);
        } catch (error: any) {
            this.resJsonErr(error.message || "Đã xảy ra lỗi");
        }
    }
    async listNamesNews() {
        try {
            const whereClause = 'isdeleted = 0';
            const fieldsString = 'id, name';

            const news = await this.md.find(
                whereClause,
                { sort_order: 'ASC' },
                false,
                undefined,
                fieldsString
            );

            return this.resJsonData(news);
        } catch (err: any) {
            return this.resJsonErr(err.message);
        }
    }
}