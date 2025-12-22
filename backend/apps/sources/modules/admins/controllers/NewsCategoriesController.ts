import Common from "@src/Common.js";
import SingleController from "@src/controllers/SingleController.js";

export default class NewsCategoriesController extends SingleController {
    md = this.models.newsCategory;
    actionActive = ['create', 'detail', 'copy', 'edit', 'delete', 'deleteone'];
    isDeleted = true;
    async updateBefore(item: this['md']['td'], _itemOld: Partial<this['md']['td']>) {
        item.name = this.request.getPost('name');
        item.description = this.request.getPost('description');
        item.layout = this.request.getPost('layout');
        item.status = this.request.getPost('status');
        item.parent_id = this.request.getPost('parent_id', 0, 'int');
        item.alias = await Common.createAlias(item, this.md);
        // item.level = 1;
        item.meta_title = item.id ? this.request.getPost('meta_title') : item.name;
        item.meta_description = item.id ? this.request.getPost('meta_description') : item.meta_description;
        item.meta_keywords = item.id ? this.request.getPost('meta_keywords') : item.name;
        if (item.parent_id) {
            if (item.parent_id === item?.id) throw new Error("invalid_parent");
            const parentItem: any = await this.md.getById(item.parent_id, { isdeleted: 0 });
            if (!parentItem) throw new Error("invalid_parent");
            // item.level = parentItem.level + 1;
            if (parentItem.level >= 3) {
                throw new Error("max_level_exceeded");
            }
            if (!item.id) throw new Error("invail_childIds");
            const childIds = await this.md.getSubIds(item.id);
            if (childIds.includes(item.parent_id)) {
                throw new Error("invalid_parent");
            }
        }
        return item;
    }
    async getTree() {
        try {
            const parent_id = this.request.get('parent_id');
            const params: any = {
                status: 1,
            };
            if (this.is_deleted) {
                params.is_deleted = 0;
            }
            const data = await this.md.getTree(params, parent_id);

            this.resJsonData(data);
        } catch (error: any) {
            this.resJsonErr(error.message || "Đã xảy ra lỗi");
        }
    }
}