import Common from '@src/Common.js';
import SingleController from '@src/controllers/SingleController.js';

export default class CategoriesController extends SingleController {
    md = this.models.categories;
    actionActive = ['index', 'create', 'detail', 'edit', 'delete', 'deleteone'];
    is_deleted = true;
    async updateBefore(item: this['md']['td'], _itemOld: Partial<this['md']['td']>) {
        item.name = this.request.getPost('name');
        item.alias = this.request.getPost('alias');
        item.description = this.request.getPost('description');
        item.image = this.request.getPost('image');
        item.sort_order = this.request.getPost('sort_order', 0);
        item.status = this.request.getPost('status');
        item.layout = this.request.getPost('layout');
        item.parent_id = this.request.getPost('parent_id', 0);
        item.meta_title = item?.id ? this.request.getPost('meta_title') : item.name;
        item.meta_description = item?.id ? this.request.getPost('meta_description') : item.description;
        item.meta_keywords = item?.id ? this.request.getPost('metaKeymeta_keywordswords') : item.name;
        item.alias = item?.id ? this.request.getPost('alias') : await Common.createAlias(item, this.md);
        const parentId = Number(item.parent_id) || 0;
        if (parentId > 0) {
            const parentCategory = await this.md.getById(parentId);
            if (!parentCategory) {
                throw new Error('Danh mục cha không hợp lệ (invalid_parent_category).');
            }
            item.parent_id = parentCategory.id;
            item.level = (parentCategory.level || 0) + 1;
            if (item.id && item.id === item.parent_id) {
                throw new Error('Không thể chọn chính danh mục này làm danh mục cha.');
            }
        } else {
            item.parent_id = 0;
            item.level = 1;
        }

        return item;
    }
}