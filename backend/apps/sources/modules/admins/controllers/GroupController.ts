import SingleController from "@src/controllers/SingleController.js";
import { GroupData } from "@src/models/GroupsModel.js";
export default class GroupController extends SingleController {
    md = this.models.groups;
    actionActive = ['create', 'edit', 'detail'];
    async updateBefore(item: GroupData, _itemOld: GroupData) {
        item.name = this.request.getPost('name');
        item.excerpt = this.request.getPost('excerpt');
        item.status = this.request.getPost('status', 1, 'int');
        return item;
    }
    async getFunctionIds(group_id: number) {
        try {
            const group = await this.md.findOne({ id: group_id });
            if (!group || group.id === 1) throw new Error("invalid_403");
            const data = await this.models.adminfunction.getFunctionIds(group_id);
            return this.resJsonData(data);
        } catch (error: any) {
            return this.resJsonErr(error.message);
        }
    }
    async editRole(group_id: number) {
        try {
            // this.db.start();
            if (!this.request.isPost()) throw new Error("invalid_method_403");
            const group = await this.md.findOne({ id: group_id });
            if (!group) throw new Error("invalid_404");
            const adminFunctions: any[] = this.request.getPost('functionIds', [], 'raw');
            const functionOldIds: any[] = this.request.getPost('functionOldIds', [], 'raw');
            // [{id: 1, vf: 1}, {id: 1, vf: 1}, {id: 1, vf: 1}];
            // [{id: 1, vf: 1}, {id: 1, vf: 1}, {id: 1, vf: 1}];
            const ids = adminFunctions.map((f: any) => f.id);
            const removeIds = functionOldIds
                .map((f: any) => f.id)
                .filter((oldId: any) => !ids.includes(oldId));
            // const removeIds = functionOldIds.filter((value: any) => !functionIds.includes(value)); // viết lại;
            // const classPermission = new PermissionModel();
            // await classPermission.deleteMany({ adminFunctionId: { $in: removeIds }, group_id });
            // await PermissionModel.uncheckBygroup_id(group_id, adminFunctionIds);
            // console.log(functionOldIds);
            // console.log(functionIds);
            // console.log(removeIds);
            if (removeIds.length > 0) {
                await this.md.deleteMany({ adminFunctionId: { $in: removeIds }, group_id });
            }
            // throw new Error("1");

            const dataIds = [];
            for await (const adminFunction of adminFunctions) {
                const adminFunctionId = adminFunction.id;
                const vf = adminFunction.vf;
                if (![1, 2].includes(adminFunction.vf)) throw new Error("invalid_vf_function");
                const aF = await this.models.adminfunction.findOne({ id: adminFunctionId });
                if (!aF) throw new Error("invalid_admin_function");
                let item: any = await this.models.adminfunction.findOne({ group_id, adminFunctionId })

                if (!item) {
                    throw new Error("invaild_adminfunction");
                }
                if (!item) {
                    item = {};
                    item.group_id = group_id;
                    item.adminFunctionId = adminFunctionId;
                }
                item.module = aF.module;
                item.controller = aF.controller;

                item.action = aF.action;
                item.code = aF.code;
                item.vf = vf;
                item = await this.md.vdSave(item);
                dataIds.push(item.id);
            }
            return this.resJsonData(dataIds);
        } catch (error: any) {
            return this.resJsonErr(error.message);
        }
    }
    async checkPermission() {
        try {
            const controller = this.request.get('controller')
            const action = this.request.get('action');
            const code = this.request.get('code');
            const data = await this.models.permission.checkPermission('admins', controller, action, { code }, this.groupId);
            this.resJson({ permission: data });
        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }
}
