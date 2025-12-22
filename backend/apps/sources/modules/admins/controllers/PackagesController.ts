import Common from '@src/Common.js';
import SingleController from '@src/controllers/SingleController.js';

export default class PackageController extends SingleController {
    md = this.models.packages;
    actionActive = ['index', 'create', 'detail', 'edit', 'delete', 'deleteone'];
    is_deleted = true;

    async updateBefore(item: this['md']['td'], itemOld: Partial<this['md']['td']>) {
        item.name = this.request.getPost('name');
        item.short_name = this.request.getPost('short_name');
        item.excerpt = this.request.getPost('excerpt');
        item.image = this.request.getPost('image');
        item.status = this.request.getPost('status', 1);
        item.layout = this.request.getPost('layout');

        const postAlias = this.request.getPost('alias');
        if (item.id) {
            item.alias = postAlias ?? itemOld.alias;
        } else {
            item.alias = postAlias ?? await Common.createAlias(item.name, this.md);
        }
        if (item.id) {
            item.short_name = this.request.hasPost('short_name') ? item.short_name : itemOld.short_name;
            item.excerpt = this.request.hasPost('excerpt') ? item.excerpt : itemOld.excerpt;
            item.image = this.request.hasPost('image') ? item.image : itemOld.image;
        }
        return item;
    }
}