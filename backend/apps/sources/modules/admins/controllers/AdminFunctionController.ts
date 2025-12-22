import SingleController from "@src/controllers/SingleController.js";
export default class AdminFunctionController extends SingleController {
    md = this.models.adminfunction;
    actionActive = ['create', 'edit', 'delete', 'deleteone'];
    async index() {
        try {
            let data: any;
            data.items = await this.md.getFuncMenu(this.groupId);
            this.resJsonData(data);
        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }
    async updateBefore(item: this['md']['td'], _itemOld: Partial<this['md']['td']>) {
        // itemId = (int)Common.getValue([item,'id']);
        item.name = this.request.getPost('name');
        item.url = this.request.getPost('url');
        item.module = this.request.getPost('module');
        item.controller = this.request.getPost('controller');
        item.action = this.request.getPost('action');
        item.menu_icon = this.request.getPost('menu_icon');
        item.code = this.request.getPost('code', 0, 'int');
        item.parent_id = this.request.getPost('parent_id', 0, 'int');
        item.sort_order = this.request.getPost('sort_order', 0, 'int');
        item.status = this.request.getPost('status', 0, 'int');
        return item;
    }
    async getFuncMenu() {
        try {
            const data = await this.md.getFuncMenu(this.groupId);
            this.resJsonData(data);
        } catch (error: any) {
            // console.error("Lỗi khi lấy Menu:", error);
            this.resJsonErr(error.message);
        }
    }
    async getPermissonMenu() {
        try {
            const data = await this.md.getPermissonMenu(this.groupId);
            this.resJsonData(data);
        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }
}
