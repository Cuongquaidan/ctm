import SingleController from "@src/controllers/SingleController.js";
import Common from '@src/Common.js';

export default class ProductsController extends SingleController {
    md = this.models.products;
    actionActive = ['create', 'copy', 'detail', 'edit', 'delete', 'deleteone'];
    isDeleted = true;
    exportFile = 'news_export.xlsx';
    async updateBefore(item: this['md']['td'], _itemOld: Partial<this['md']['td']>) {
        item.name = this.request.getPost('name');
        item.excerpt = this.request.getPost('excerpt'); // Thêm trường excerpt
        item.description = this.request.getPost('description');
        item.content = this.request.getPost('content', '', 'html');
        item.detail_info = this.request.getPost('detail_info', '', 'html'); // Thêm trường detail_info

        item.code = this.request.getPost('code');
        item.package_id = this.request.getPost('package_id', 0, 'int'); // Ép kiểu số nguyên
        item.hot = this.request.getPost('hot', 0, 'int');
        item.status = this.request.getPost('status', 0, 'int');

        const categoryIdPost = this.request.getPost('category_ids');
        // if (!categoryIdPost) {
        // }
        item.category_ids = categoryIdPost;

        item.meta_title = item?.id ? this.request.getPost('meta_title') : item.name;

        item.meta_description = item?.id ? this.request.getPost('meta_description') : item.description;

        item.meta_keywords = item?.id ? this.request.getPost('meta_keywords') : item.name;

        item.alias = item?.id
            ? this.request.getPost('alias')
            : await Common.createAlias(item, this.md);

        return item;
    }
}

