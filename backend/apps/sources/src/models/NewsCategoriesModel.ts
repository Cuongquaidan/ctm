import SingleModel from '@src/SingleModel.js';
import { Request } from '@src/Request.js';

export interface NewsCategoryData {
    id?: number;
    alias: string;
    name: string;
    description?: string;
    meta_title?: string;
    meta_keywords?: string;
    meta_description?: string;
    image?: string;
    layout?: string;
    status?: number;
    is_deleted: number;
    parent_id: number;
    created_at?: string;
    updated_at?: string;
    created_by?: number;
    updated_by?: number;
}

export default class NewsCategoryModel extends SingleModel<NewsCategoryData> {
    table = 'news_categories';

    vdObject = {
        alias: 'required|minLen(2)|maxLen(250)|unique(news_categories,alias)',

        name: 'required|minLen(2)|maxLen(150)',

        parent_id: 'required|integer|min(0)',

        description: 'maxLen(250)',
        meta_title: 'maxLen(250)',
        meta_keywords: 'maxLen(250)',
        meta_description: 'maxLen(250)',

        image: 'maxLen(150)',

        layout: 'maxLen(30)',

        status: 'numeric|min(0)|max(1)',
        is_deleted: 'numeric|min(0)|max(1)',
    };

    fieldName(key: any) {
        const data: any = {
            id: 'ID Danh mục',
            alias: 'Đường dẫn (Alias)',
            name: 'Tên Danh mục',
            description: 'Mô tả ngắn',
            meta_title: 'Meta Title',
            meta_keywords: 'Meta Keywords',
            meta_description: 'Meta Description',
            image: 'Hình ảnh đại diện',
            layout: 'Layout hiển thị',
            status: 'Trạng thái',
            is_deleted: 'Đã xóa',
            parent_id: 'Danh mục cha',
            created_at: 'Ngày tạo',
            updated_at: 'Ngày cập nhật',
            created_by: 'Người tạo',
            updated_by: 'Người cập nhật',
        };
        return data[key] ?? key;
    }
    async getTree(params: any = {}, prId: number = 0): Promise<any[]> {

        const queryParams: (string | number)[] = [prId];
        let sqlWhere = `parent_id = ?`;

        for (const key in params) {
            if (Object.prototype.hasOwnProperty.call(params, key)) {
                sqlWhere += ` AND \`${key}\` = ?`;
                queryParams.push(params[key]);
            }
        }

        const sql = `
        SELECT 
            *
        FROM \`${this.table}\`
        WHERE ${sqlWhere}
        ORDER BY created_at ASC
    `;

        const [rows] = await this.query(sql, queryParams);

        const tree: any[] = [];

        if (Array.isArray(rows) && rows.length > 0) {
            for (const item of rows as any[]) {

                const children = await this.getTree(params, item.id);

                if (children.length > 0) {
                    item.children = children;
                } else {
                    item.children = [];
                }

                tree.push(item);
            }
        }
        return tree;
    }
    // async getSubIds(id: number, filter: any = {}, data: number[] = []): Promise<number[]> {
    //     filter.parent_id = id;
    //     filter.isDeleted = 0;
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
        currentConditions.isDeleted = 0;

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

    async getDatas(
        request: Request,
        user: any,
        is_deleted: any
    ): Promise<{
        page: number;
        pageLen: number;
        pageTotal: number;
        recordTotal: number;
        data: NewsCategoryData[];
    }> {
        const nameSh = request.get("nameSh");
        const statusSh = request.get("statusSh");
        const parentIdSh = request.get("parentIdSh");
        const whereParts: string[] = [];

        if (is_deleted === 0 || is_deleted === "0") {
            whereParts.push(`news_categories.is_deleted = 0`);
        } else if (is_deleted === 1 || is_deleted === "1") {
            whereParts.push(`news_categories.is_deleted = 1`);
        }

        if (nameSh) {
            const keyword = `%${nameSh}%`;
            whereParts.push(`news_categories.name LIKE '${keyword}'`);
        }

        if (statusSh !== null && statusSh !== undefined && statusSh !== "") {
            whereParts.push(`news_categories.status = ${Number(statusSh)} `);
        }

        if (parentIdSh !== null && parentIdSh !== undefined && parentIdSh !== "") {
            whereParts.push(`news_categories.parent_id = ${Number(parentIdSh)} `);
        } else if (request.get('onlyRoot') === 'true') {
            whereParts.push(`news_categories.parent_id = 0`);
        }

        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";

        const page = parseInt(request.get("page", "1"));
        const pageLen = parseInt(request.get("pageLen", "10"));

        const data = await this.findWithPagination(
            whereClause,
            { "news_categories.parent_id": "ASC", "news_categories.created_at": "ASC" },
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

    async getCategoryAlias(id: number): Promise<string | null> {
        const item = await this.findOne({ id: id },);
        return item ? item.alias : null;
    }
}
