import Common from '@src/Common.js';
import SingleController from '@src/controllers/SingleController.js';
import LogsModel from '@src/models/LogsModel.js';
export default class LogsController extends SingleController {
    md: LogsModel = this.models.logs
    actionActive = ['detail', 'create', 'edit', 'delete', 'deleteone', 'import', 'export', 'copy'];
    is_deleted = true;
    async updateBefore(item: any, _itemOld: object) {
        item.typeid = this.request.getPost('typeid');
        item.name = this.request.getPost('name');
        item.nameSearch = Common.removeVietnameseTones(item.name ?? '');
        item.controller = this.request.getPost('controller');
        item.action = this.request.getPost('action');
        item.itemid = this.request.getPost('itemid');
        item.table = this.request.getPost('table');
        item.difference = this.request.getPost('difference');
        item.params = this.request.getPost('params');
        item.item = this.request.getPost('item');
        item.ip = this.request.getPost('ip');
        item.device = this.request.getPost('device');
        item.browser = this.request.getPost('browser');
        item.os = this.request.getPost('os');
        item.userid = Number(this.request.getPost('userid'));
        return item;
    }
}