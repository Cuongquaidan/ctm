import CoreController from "@src/controllers/CoreController.js";

export default class MenuTypeController extends CoreController {
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