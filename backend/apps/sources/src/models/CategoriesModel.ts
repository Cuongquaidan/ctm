import SingleModel from '../SingleModel.js';
import { Request } from '../Request.js';

export interface CategoryData {
    id?: number;
    alias?: string;
    level?: number;
    name?: string;
    description?: string;
    meta_title?: string;
    meta_description?: string;
    meta_keywords?: string;
    image?: string;
    sort_order?: number;
    status?: number;
    parent_id?: number;
    layout?: string;
    created_at?: string;
    updated_at?: string;
    created_by?: number;
    updated_by?: number;
    is_deleted?: number;
    parentName?: string;
}

export default class CategoryModel extends SingleModel<CategoryData> {
    table = 'categories';

    vdObject = {
        name: 'required|minLen(2)|maxLen(250)',
        alias: 'maxLen(150)|unique(categories,alias)',
        level: 'number',
        sort_order: 'number',
        status: 'number',
        parent_id: 'number',
    };

    validateCategory = {
        name: 'required|minLen(2)|maxLen(250)',
        alias: 'maxLen(150)|alias',
        parent_id: 'number',
        sort_order: 'number',
    };
    fieldName(key: any) {
        const data: any = {
            id: 'ID',
            alias: 'Đường dẫn (Alias)',
            level: 'Cấp độ',
            name: 'Tên danh mục',
            description: 'Mô tả',
            meta_title: 'Meta Title',
            meta_description: 'Meta Description',
            meta_keywords: 'Meta Keywords',
            image: 'Hình ảnh đại diện',
            sort_order: 'Thứ tự sắp xếp',
            status: 'Trạng thái',
            parent_id: 'Danh mục cha',
            layout: 'Layout hiển thị',
            created_at: 'Thời gian tạo',
            updated_at: 'Thời gian cập nhật',
            created_by: 'Người tạo',
            updated_by: 'Người cập nhật',
            is_deleted: 'Đã xóa mềm',
        };
        return data[key] ?? key;
    }


    async getDatas(
        request: Request,
        is_deleted: any = 0,
        isPaginated: boolean = true
    ): Promise<any> {

        const nameSh = request.get("nameSh");
        const statusSh = request.get("statusSh");
        const parentIdSh = request.get("parentIdSh");

        const whereParts: string[] = [];


        if (nameSh) {
            const keyword = `%${nameSh}%`;
            whereParts.push(`categories.name LIKE '${keyword}'`);
        }

        if (statusSh) {
            whereParts.push(`categories.status = ${Number(statusSh)} `);
        }

        if (parentIdSh !== undefined && parentIdSh !== null && parentIdSh !== '') {
            whereParts.push(`categories.parent_id = ${Number(parentIdSh)} `);
        }

        if (is_deleted === true || is_deleted === 0 || is_deleted === "true" || is_deleted === "0") {
            whereParts.push(`categories.is_deleted = 0`);
        } else if (is_deleted === 1 || is_deleted === "1") {
            whereParts.push(`categories.is_deleted = 1`);
        }

        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";

        const orderOptions: Record<string, "ASC" | "DESC"> = {
            "categories.sort_order": "ASC",
            "categories.id": "ASC"
        };
        const joinClause = `LEFT JOIN \`categories\` AS parent ON categories.parent_id = parent.id`;
        const selectClause = `categories.*, parent.name AS parentName`;


        if (isPaginated) {

            const page = parseInt(request.get("page", "1"));
            const limitSh = request.get("limit");
            const defaultPageLen = parseInt(request.get("pageLen", "10"));

            const pageLen = limitSh ? parseInt(limitSh) : defaultPageLen;
            const finalPageLen = Math.max(1, pageLen);

            const data = await this.findWithPagination(
                whereClause,
                orderOptions,
                page,
                finalPageLen,
                joinClause,
                selectClause
            );

            return {
                page: data.page,
                pageLen: finalPageLen,
                pageTotal: data.pageTotal,
                recordTotal: data.recordTotal,
                data: data.items,
            };

        } else {
            const items = await this.find(
                whereClause,
                orderOptions,
                false,
                joinClause,
                selectClause
            );
            return items;
        }
    }

    async getAllDescendantIds(parentId: number): Promise<number[]> {

        if (parentId <= 0) return [parentId];

        const allIds = new Set<number>([parentId]);
        const processingIds = new Set<number>([parentId]);

        while (processingIds.size > 0) {
            const currentParentIds = Array.from(processingIds);
            processingIds.clear();

            const sql = `SELECT id FROM categories WHERE parent_id IN (${currentParentIds.join(',')})`;
            const [rows]: any = await this.query(sql);

            if (rows.length === 0) break;

            for (const row of rows) {
                if (!allIds.has(row.id)) {
                    allIds.add(row.id);
                    processingIds.add(row.id);
                }
            }
        }

        return Array.from(allIds);
    }
}
