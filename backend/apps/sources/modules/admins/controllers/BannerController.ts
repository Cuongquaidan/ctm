import Common from "@src/Common.js";
import SingleController from "@src/controllers/SingleController.js";
export default class BannersController extends SingleController {
    md = this.models.banners;
    actionActive = ['create', 'edit', 'detail', 'delete', 'deleteone'];
    isDeleted = true;
    async updateBefore(item: any, _itemOld: object) {
        item.name = this.request.getPost('name');
        item.excerpt = this.request.getPost('excerpt');
        item.image = Common.rmStaticPath(this.request.getPost('image'));
        item.status = this.request.getPost('status');
        item.description = this.request.getPost('description');
        item.buttonName = this.request.getPost('buttonName');
        item.buttonLink = this.request.getPost('buttonLink');
        item.saleName = this.request.getPost('saleName');
        item.saleValue = this.request.getPost('saleValue');
        return item;
    }
}
