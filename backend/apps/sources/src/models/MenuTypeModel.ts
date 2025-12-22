import SingleModel from '@src/SingleModel.js';
import { Request } from '@src/Request.js';

export interface MenuTypeData {
    id?: number;
    store_id?: number;
    name: string;
    status?: number;
    sort_order?: number;
    created_at?: string;
    updated_at?: string;
    created_by?: number;
    updated_by?: number;
}

export default class MenuTypeModel extends SingleModel<MenuTypeData> {
    table = 'menu_type';

    vdObject = {
        name: 'required|minLen(2)|maxLen(150)|unique(menu_type,name)',

        store_id: 'integer',

        sort_order: 'integer',

        status: 'numeric|min(0)|max(1)',
    };

    fieldName(key: any) {
        const data: any = {
            id: 'ID Loại Menu',
            store_id: 'ID Cửa hàng',
            name: 'Tên Loại Menu',
            status: 'Trạng thái',
            sort_order: 'Thứ tự sắp xếp',
            created_at: 'Ngày tạo',
            updated_at: 'Ngày cập nhật',
            created_by: 'Người tạo',
            updated_by: 'Người cập nhật',
        };
        return data[key] ?? key;
    }

    async getDatas(
        request: Request,
        user: any,
    ): Promise<{
        page: number;
        pageLen: number;
        pageTotal: number;
        recordTotal: number;
        data: MenuTypeData[];
    }> {
        const nameSh = request.get("nameSh");
        const statusSh = request.get("statusSh");
        const whereParts: string[] = [];

        if (nameSh) {
            const keyword = `%${nameSh}%`;
            whereParts.push(`menu_type.name LIKE '${keyword}'`);
        }

        if (statusSh !== null && statusSh !== undefined && statusSh !== "") {
            whereParts.push(`menu_type.status = ${Number(statusSh)} `);
        }

        if (user && user.store_id) {
            whereParts.push(`menu_type.store_id = ${user.store_id} `);
        }

        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";

        const page = parseInt(request.get("page", "1"));
        const pageLen = parseInt(request.get("pageLen", "10"));

        const data = await this.findWithPagination(
            whereClause,
            { "menu_type.sort_order": "ASC", "menu_type.created_at": "ASC" },
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
