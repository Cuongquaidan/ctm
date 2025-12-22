import SingleModel from '@src/SingleModel.js';
import { Request } from '@src/Request.js';

export interface PageData {
    id?: number;
    alias?: string;
    store_id: number;
    name?: string;
    description?: string;
    meta_title?: string;
    meta_keywords?: string;
    meta_description?: string;
    temp_id?: number;
    params?: string;
    sort_order?: number;
    status: number;
    is_home?: number;
    is_login?: number;

    created_at?: string;
    updated_at?: string;
    created_by?: number;
    updated_by?: number;
}

export default class PageModel extends SingleModel<PageData> {
    table = 'pages';

    vdObject = {
        alias: 'required|minLen(2)|maxLen(150)|unique(pages,alias)',
        store_id: 'required|integer',
        name: 'required|minLen(2)|maxLen(150)',
        description: 'maxLen(250)',
        meta_title: 'maxLen(250)',
        meta_keywords: 'maxLen(250)',
        meta_description: 'maxLen(250)',
        temp_id: 'integer',
        sort_order: 'integer',
        status: 'required|numeric|min(0)|max(1)',
        is_home: 'numeric|min(0)|max(1)',
        is_login: 'numeric|min(0)|max(1)',
    };

    fieldName(key: any) {
        const data: any = {
            id: 'ID Trang',
            alias: 'Đường dẫn (Alias)',
            store_id: 'ID Cửa hàng',
            name: 'Tên Trang',
            description: 'Mô tả ngắn',
            meta_title: 'Meta Title',
            meta_keywords: 'Meta Keywords',
            meta_description: 'Meta Description',
            temp_id: 'ID Template',
            params: 'Tham số cấu hình',
            sort_order: 'Thứ tự sắp xếp',
            status: 'Trạng thái',
            is_home: 'Là Trang chủ',
            is_login: 'Yêu cầu Đăng nhập',
            created_at: 'Ngày tạo',
            updated_at: 'Ngày cập nhật',
            created_by: 'Người tạo',
            updated_by: 'Người cập nhật',
        };
        return data[key] ?? key;
    }

    async getDatas(
        request: Request,
        _customer: any,
        _is_deleted: any
    ): Promise<{
        page: number;
        pageLen: number;
        pageTotal: number;
        recordTotal: number;
        data: PageData[];
    }> {
        const nameSh = request.get("nameSh");
        const statusSh = request.get("statusSh");
        const isHomeSh = request.get("isHomeSh");

        const whereParts: string[] = [];

        if (nameSh) {
            const keyword = `%${nameSh}%`;
            whereParts.push(`pages.name LIKE '${keyword}'`);
        }

        if (statusSh !== null && statusSh !== undefined && statusSh !== "") {
            whereParts.push(`pages.status = ${Number(statusSh)} `);
        }

        if (isHomeSh !== null && isHomeSh !== undefined && isHomeSh !== "") {
            whereParts.push(`pages.is_home = ${Number(isHomeSh)} `);
        }

        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";

        const page = parseInt(request.get("page", "1"));
        const pageLen = parseInt(request.get("pageLen", "10"));

        const data = await this.findWithPagination(
            whereClause,
            { "pages.sort_order": "ASC", "pages.id": "ASC" },
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
