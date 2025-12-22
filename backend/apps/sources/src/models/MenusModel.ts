import SingleModel from '@src/SingleModel.js';
import { Request } from '@src/Request.js';
import NewsModel from './NewsModel.js';
import NewsCategoryModel from './NewsCategoriesModel.js';

export interface MenuData {
    id?: number;
    store_id: number;
    name: string;
    icon?: string;
    param?: string;
    sort_order?: number;
    is_mega?: number;
    is_icon?: number;
    type?: number;
    parent_id?: number;
    menu_type?: number;
    status?: number;
    created_at?: string;
    updated_at?: string;
    created_by?: number;
    updated_by?: number;
}

export default class MenuModel extends SingleModel<MenuData> {
    table = 'menus';

    vdObject = {
        name: 'required|minLen(2)|maxLen(100)',
        store_id: 'required|integer',
        icon: 'maxLen(50)',
        param: 'maxLen(200)',
        sort_order: 'integer',
        is_mega: 'numeric|min(0)|max(1)',
        is_icon: 'numeric|min(0)|max(1)',
        status: 'numeric|min(0)|max(1)',
        type: 'integer',
        parent_id: 'integer',
        menu_type: 'required|integer',
    };

    fieldName(key: any) {
        const data: any = {
            id: 'ID Menu',
            store_id: 'ID Cửa hàng',
            name: 'Tên Menu',
            icon: 'Icon (biểu tượng)',
            param: 'Tham số/Đường dẫn',
            sort_order: 'Thứ tự sắp xếp',
            is_mega: 'Mega Menu',
            is_icon: 'Hiển thị Icon',
            type: 'Loại liên kết (Link type)',
            parent_id: 'ID Menu cha',
            menu_type: 'Phân loại Menu (Header/Footer/Sidebar)',
            status: 'Trạng thái',
            created_at: 'Ngày tạo',
            updated_at: 'Ngày cập nhật',
            created_by: 'Người tạo',
            updated_by: 'Người cập nhật',
        };
        return data[key] ?? key;
    }
    // async getSubData(id: number, dId = 0, params: any = {}) {
    //     params.parent_id = id;
    //     if (dId > 0) params.id = { not: dId };
    //     return await this.findItems(params, { sort_order: 'ASC' });
    // }
    async getSubData(id: number, dId = 0, params: any = {}) {
        const currentConditions = { ...params };

        currentConditions.parent_id = id;
        if (dId > 0) {
            currentConditions.id = { not: dId };
        }

        let whereClause = '';
        const conditions: string[] = [];

        for (const key in currentConditions) {
            if (Object.prototype.hasOwnProperty.call(currentConditions, key)) {
                const value = currentConditions[key];

                if (typeof value === 'object' && value !== null) {

                    if (value.not !== undefined) {
                        conditions.push(`${key} != ${Number(value.not)}`);
                    }

                } else {
                    const sqlValue = (typeof value === 'string') ? `'${value}'` : value;
                    conditions.push(`${key} = ${sqlValue}`);
                }
            }
        }

        if (conditions.length) {
            whereClause = conditions.join(' AND ');
        } else {
            whereClause = '1';
        }


        const result = await this.find(
            whereClause,
            { sort_order: 'ASC' },
            false
        );

        return result;
    }
    // async getSubIds(id: number, filter: any = {}, data: number[] = []): Promise<number[]> {
    //     filter.parent_id = id;
    //     filter.isdeleted = 0;
    //     const children = await this.findItems(filter);
    //     for (const child of children) {
    //         data.push(child.id);
    //         filter.parent_id = child.id;
    //         data = await this.getSubIds(child.id, filter, data);
    //     }
    //     return data;
    // }
    async getSubIds(id: number, filter: any = {}, data: number[] = []): Promise<number[]> {

        const currentConditions = { ...filter };

        currentConditions.parent_id = id;
        currentConditions.isdeleted = 0;

        let whereClause = '';
        const conditions: string[] = [];

        for (const key in currentConditions) {
            if (Object.prototype.hasOwnProperty.call(currentConditions, key)) {
                const value = currentConditions[key];

                if (typeof value === 'object' && value !== null) {

                    if (value.not !== undefined) {
                        conditions.push(`${key} != ${Number(value.not)}`);
                    }

                } else {
                    const sqlValue = (typeof value === 'string') ? `'${value}'` : value;
                    conditions.push(`${key} = ${sqlValue}`);
                }
            }
        }

        if (conditions.length) {
            whereClause = conditions.join(' AND ');
        } else {
            whereClause = '1';
        }

        const children: any[] = await this.find(
            whereClause,
            false,
            false,
            undefined,
            'id'
        );

        for (const child of children) {
            if (child.id) {
                data.push(child.id);
                data = await this.getSubIds(child.id, currentConditions, data);
            }
        }

        return data;
    }
    async getMenuTree(parent_id = 0, menu_type?: number): Promise<any[]> {

        const newsModel = new NewsModel(this.pool);
        const newsCategoryModel = new NewsCategoryModel(this.pool);
        const query: any = { status: { not: 0 } };
        if (menu_type) {
            query.menu_type = menu_type;
        }

        const menus = await this.getSubData(parent_id, 0, query);

        const menuPromises = menus.map(async (menu) => {
            const menuObj: any = { ...menu };
            if ((menuObj.type === 1 || menuObj.type === 2) && menuObj.param) {
                const resourceId = parseInt(menuObj.param, 10);

                if (!isNaN(resourceId) && resourceId > 0) {
                    let modelToUse: any = null;
                    if (menuObj.type === 1) {
                        modelToUse = newsModel;
                    } else if (menuObj.type === 2) {
                        modelToUse = newsCategoryModel;
                    }
                    if (modelToUse) {
                        try {
                            const aliasItem = await modelToUse.findOne({ id: resourceId });

                            if (aliasItem && aliasItem.alias) {
                                menuObj.alias = aliasItem.alias;
                            }
                        } catch (error) {
                            console.error(`Lỗi khi lấy alias cho type ${menuObj.type} ID ${resourceId}:`, error);
                        }
                    }
                }
            }
            const subMenus = await this.getMenuTree(menuObj.id, menu_type);
            if (subMenus.length) {
                menuObj.subs = subMenus;
            }

            return menuObj;
        });

        const tree = await Promise.all(menuPromises);

        return tree;
    }

    async getDatas(
        request: Request,
        user: any,
    ): Promise<{
        page: number;
        pageLen: number;
        pageTotal: number;
        recordTotal: number;
        data: MenuData[];
    }> {
        const nameSh = request.get("nameSh");
        const statusSh = request.get("statusSh");
        const typeSh = request.get("typeSh");
        const menuTypeSh = request.get("menuTypeSh");
        const whereParts: string[] = [];
        if (nameSh) {
            const keyword = `%${nameSh}%`;
            whereParts.push(`menus.name LIKE '${keyword}'`);
        }

        if (statusSh !== null && statusSh !== undefined && statusSh !== "") {
            whereParts.push(`menus.status = ${Number(statusSh)} `);
        }

        if (typeSh !== null && typeSh !== undefined && typeSh !== "") {
            whereParts.push(`menus.type = ${Number(typeSh)} `);
        }

        if (menuTypeSh !== null && menuTypeSh !== undefined && menuTypeSh !== "") {
            whereParts.push(`menus.menu_type = ${Number(menuTypeSh)} `);
        }

        if (user && user.store_id) {
            whereParts.push(`menus.store_id = ${user.store_id} `);
        } else {
            whereParts.push(`menus.store_id = 1`);
        }


        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";

        const page = parseInt(request.get("page", "1"));
        const pageLen = parseInt(request.get("pageLen", "10"));

        const data = await this.findWithPagination(
            whereClause,
            { "menus.parent_id": "ASC", "menus.sort_order": "ASC", "menus.created_at": "ASC" },
            page,
            pageLen
        );

        return {
            page: data.page,
            pageLen: data.length,
            pageTotal: data.pageTotal,
            recordTotal: data.recordTotal,
            data: data.items,
        };
    }
}
