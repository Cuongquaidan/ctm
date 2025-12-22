import SingleModel from '@src/SingleModel.js';
import { Request } from '@src/Request.js';

export interface BannerData {
    id?: number;
    name: string; // NOT NULL
    description?: string;
    button_link?: string;
    button_name?: string;
    sale_name?: string;
    sale_value?: string;
    image?: string;
    sort_order?: number;
    status?: number; // DEFAULT 0
    is_deleted?: number; // DEFAULT 0
    created_at?: string; // datetime
    updated_at?: string; // datetime
    created_by?: number;
    updated_by?: number;
}

export default class BannerModel extends SingleModel<BannerData> {
    table = 'banners';

    vdObject = {
        name: 'required|minLen(2)|maxLen(150)|unique(banners,name)',
        description: 'maxLen(250)',
        button_link: 'maxLen(250)',
        button_name: 'maxLen(50)',
        sale_name: 'maxLen(100)',
        sale_value: 'maxLen(50)',
        image: 'maxLen(250)',
        sort_order: 'integer',
    };

    fieldName(key: any) {
        const data: any = {
            id: 'ID Banner',
            name: 'Tên Banner',
            description: 'Mô tả Banner',
            button_link: 'Liên kết nút',
            button_name: 'Tên nút (Button)',
            sale_name: 'Tên khuyến mãi',
            sale_value: 'Giá trị khuyến mãi',
            image: 'Hình ảnh Banner',
            sort_order: 'Thứ tự sắp xếp',
            status: 'Trạng thái',
            is_deleted: 'Đã xóa',
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
        is_deleted: any
    ): Promise<{
        page: number;
        pageLen: number;
        pageTotal: number;
        recordTotal: number;
        data: BannerData[];
    }> {
        const nameSh = request.get("nameSh");
        const statusSh = request.get("statusSh");

        const whereParts: string[] = [];

        if (nameSh) {
            const keyword = `%${nameSh}%`;
            whereParts.push(`banners.name LIKE '${keyword}'`);
        }

        if (statusSh) {
            whereParts.push(`banners.status = ${Number(statusSh)} `);
        }

        if (is_deleted === true || is_deleted === 0 || is_deleted === "true") {
            whereParts.push(`banners.is_deleted = 0`);
        }

        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";

        const page = parseInt(request.get("page", "1"));
        const limitSh = request.get("limit");
        const defaultPageLen = parseInt(request.get("pageLen", "10"));

        const pageLen = limitSh ? parseInt(limitSh) : defaultPageLen;

        const finalPageLen = Math.max(1, pageLen);

        const data = await this.findWithPagination(
            whereClause,
            { "banners.created_at": "DESC" },
            page,
            finalPageLen
        );

        return {
            page: data.page,
            pageLen: finalPageLen,
            pageTotal: data.pageTotal,
            recordTotal: data.recordTotal,
            data: data.items,
        };
    }
}
