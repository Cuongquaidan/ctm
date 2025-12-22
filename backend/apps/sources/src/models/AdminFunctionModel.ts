import SingleModel from '../SingleModel.js';
import { Request } from '@src/Request.js';
import PermissionModel from './PermissionModel.js';
export interface AdminFunctionData {
    id: number;
    name?: string;
    url?: string;
    module?: string;
    controller?: string;
    action?: string;
    code?: number;
    parent_id?: number;
    sort_order?: number;
    menu_icon?: string;
    status?: number;
    createdAt?: string;
    created_by?: number;
    updated_at?: string;
    updated_by?: number;
}

export default class AdminFunctionModel extends SingleModel<AdminFunctionData> {
    table = "adminfunctions"
    // model = AdminFunctionModel.model;
    vdObject = {
        name: 'required|maxLen(100)',
        url: 'required|maxLen(100)',
        module: 'required|maxLen(100)',
        controller: 'required|maxLen(100)',
        action: 'required|maxLen(100)'
    };
    validateImport = {
        name: 'required|maxLen(100)',
        url: 'required|maxLen(100)',
        module: 'required|maxLen(100)',
        controller: 'required|maxLen(100)',
        action: 'required|maxLen(100)'
    };
    fieldName(key: string) {
        const data: any = {
            name: 'Tiêu đề',
            url: 'Đường dẫn',
            module: 'Module',
            controller: 'Controller',
            action: 'Action',
            status: 'Trạng thái',
        };
        return data[key] ?? key;
    }
    async getDatas(request: Request, isDel = false) {
        const params: any = {};
        const nameSh = request.get('nameSh');
        if (nameSh) params.name = { $regex: nameSh, $options: "i" };
        const statusSh = request.get('statusSh', -1);
        if (statusSh != -1) params.name = statusSh;
        if (isDel) {
            params.is_deleted = 0;
        }
        let data: any;
        data.items = await this.getTree();
        return data;
    }
    // async getTree(params: any = {}, prId: any = 0, data: any[] = [], tag = '', symbol = '__') {
    //     params.parent_id = prId;
    //     const tagN = tag ? tag + ' ' : '';
    //     const childs = await this.findItems(params, { sort_order: 'ASC' });

    //     if (childs.length) {
    //         tag += symbol;
    //         for (const child of childs) {
    //             child.nameFilter = tagN + child.name;
    //             data.push(child);
    //             data = await this.getTree(params, child.id, data, tag);
    //         }
    //     }

    //     return data;
    // }
    async getTree(params: any = {}, prId: any = 0, data: any[] = [], tag = '', symbol = '__') {
        params.parent_id = prId;

        const tagN = tag ? tag + ' ' : '';

        let whereClause = '1';

        const conditions: string[] = [];
        const values: any[] = [];

        for (const key in params) {
            if (Object.prototype.hasOwnProperty.call(params, key)) {
                conditions.push(`${key} = ${typeof params[key] === 'string' ? `'${params[key]}'` : params[key]}`);
            }
        }

        if (conditions.length) {
            whereClause = conditions.join(' AND ');
        }

        const childs = await this.find(
            whereClause,
            { sort_order: 'ASC' },
            false
        );

        if (childs.length) {
            tag += symbol;
            for (const child of childs) {
                (child as any).nameFilter = tagN + child.name;
                data.push(child);
                data = await this.getTree(params, child.id, data, tag, symbol);
            }
        }

        return data;
    }

    // async getSubData(id: number, dId = 0, params: any = {}) {
    //     params.parent_id = id;
    //     if (dId > 0) params.id = { not: dId };
    //     return await this.findItems(params, { sort_order: 'ASC' });
    // }
    async getSubData(id: number, dId = 0, params: any = {}) {

        params.parent_id = id;
        if (dId > 0) {
            params.id = { not: dId };
        }

        let whereClause = '1';
        const conditions: string[] = [];

        for (const key in params) {
            if (Object.prototype.hasOwnProperty.call(params, key)) {
                const value = params[key];

                if (key === 'id' && typeof value === 'object' && value.not) {
                    conditions.push(`id != ${Number(value.not)}`);
                } else {
                    const sqlValue = (typeof value === 'string') ? `'${value}'` : value;
                    conditions.push(`${key} = ${sqlValue}`);
                }
            }
        }

        if (conditions.length) {
            whereClause = conditions.join(' AND ');
        }

        const result = await this.find(
            whereClause,
            { sort_order: 'ASC' },
            false
        );

        return result;
    }
    async getFuncMenu(group_id: number, parent_id: any = 0, level = 0) {
        const data = [];
        if (level >= 10)
            return [];
        const funMenus = await this.getSubData(parent_id, 0, { status: { not: 0 } });
        // throw new Error("1");
        // const perCls = this.models.permissions;
        for await (const menu of funMenus) {
            const permission = new PermissionModel(this.pool)
            if (await permission.getFuncRole(menu.id, group_id)) {
                const menuCus: any = { ...menu };
                level += 1;
                const subMenu = await this.getFuncMenu(group_id, menuCus.id, level);
                if (subMenu.length) {
                    menuCus.subs = subMenu;
                }
                data.push(menuCus);
            }
        }
        return data;
    }
    async getPermissonMenu(group_id: number, parent_id: any = 0, level = 0) {
        const data = [];
        if (level >= 10)
            return [];
        const funMenus = await this.getSubData(parent_id, 0);
        for await (const menu of funMenus) {
            const menuCus: any = { ...menu };
            if (menu.status === 1) {
                menuCus.isPer = true;
            } else {
                const permission = new PermissionModel(this.pool)
                menuCus.isPer = await permission.getFuncRole(menu.id, group_id) ? true : false;
            }
            const subMenu = await this.getPermissonMenu(group_id, menuCus.id, level + 1);
            if (subMenu.length > 0) {
                menuCus.subs = subMenu;
            }
            data.push(menuCus);
        }
        return data;
    }
    // async getFunctionIds(group_id: number) {/// sửa lại chỗ này
    //     const permission = new PermissionModel(this.pool)
    //     const permissions: any[] = await permission.findItems({ group_id }, false, false, false, 10000);
    //     return permissions.length ? permissions.map(item => item.adminFunctionId) : [];
    // }
    async getFunctionIds(group_id: number) {
        const permission = new PermissionModel(this.pool);
        const whereClause = `group_id = ${group_id}`;
        const permissions: any[] = await permission.find(
            whereClause,
            false,
            false,
            undefined,
            'adminFunctionId'
        );
        return permissions.length ? permissions.map(item => item.adminFunctionId) : [];
    }
}
