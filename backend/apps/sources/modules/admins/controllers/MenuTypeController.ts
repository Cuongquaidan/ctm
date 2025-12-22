import SingleController from "@src/controllers/SingleController.js";

export default class MenuTypeController extends SingleController {
    md = this.models.menuType;
    actionActive = ['detail'];
    isDeleted = true;
    isImage = true;
    async updateBefore(item: this['md']['td'], _itemOld: Partial<this['md']['td']>) {
        item.name = this.request.getPost('name');
        item.status = this.request.getPost('status');
        return item;
    }
}       