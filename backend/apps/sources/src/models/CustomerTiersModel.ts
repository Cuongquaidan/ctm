import SingleModel from '@src/SingleModel.js';
import { Request } from '@src/Request.js';


export interface CustomerTierData {
    id?: number;
    name: string;
    excerpt?: string;
    content?: string;
    image?: string;
    color?: string;
    point_ratio?: number;
    sale_ratio?: number;
    gift_number?: number;
    spending_of_year?: number;
    keeping_of_year?: number;
    status?: number;
    created_at?: string;
    updated_at?: string;
    created_by?: number;
    updated_by?: number;
    is_deleted?: number;
}

export default class CustomerTierModel extends SingleModel<CustomerTierData> {
    table = 'customer_tiers';

    vdObject = {
        name: 'required|minLen(2)|maxLen(250)|unique(customer_tiers,name)',
        excerpt: 'maxLen(255)',
        image: 'maxLen(150)',
        color: 'maxLen(30)',
        point_ratio: 'numeric',
        sale_ratio: 'numeric',
        gift_number: 'integer',
        spending_of_year: 'integer',
        keeping_of_year: 'integer',
    };

    fieldName(key: any) {//Lưu cấp bậc khách hàng (VIP, Silver, Gold...).
        const data: any = {
            name: 'Tên hạng',
            excerpt: 'Mô tả ngắn',
            content: 'Nội dung chi tiết',
            image: 'Hình ảnh',
            color: 'Màu hiển thị',
            point_ratio: 'Tỉ lệ điểm tích lũy (%)',
            sale_ratio: 'Tỉ lệ giảm giá (%)',
            gift_number: 'Số lượng quà tặng',
            spending_of_year: 'Chi tiêu trong năm (điều kiện lên hạng)',
            keeping_of_year: 'Chi tiêu duy trì hạng (mỗi năm)',
            status: 'Trạng thái',
            created_at: 'Ngày tạo',
            updated_at: 'Ngày cập nhật',
            created_by: 'Người tạo',
            updated_by: 'Người cập nhật',
            is_deleted: 'Đã xóa',
        };
        return data[key] ?? key;
    }

    async getDatas(
        request: Request,
        _customer: any,
        is_deleted: any
    ): Promise<{
        page: number;
        pageLen: number;
        pageTotal: number;
        recordTotal: number;
        data: CustomerTierData[];
    }> {
        const nameSh = request.get("nameSh");
        const statusSh = request.get("statusSh");

        const whereParts: string[] = [];

        if (nameSh) {
            const keyword = `%${nameSh}%`;
            whereParts.push(`customer_tiers.name LIKE '${keyword}'`);
        }

        if (statusSh) {
            whereParts.push(`customer_tiers.status = ${Number(statusSh)} `);
        }

        if (is_deleted === true || is_deleted === 0 || is_deleted === "true") {
            whereParts.push(`customer_tiers.is_deleted = 0`);
        }

        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";

        const page = parseInt(request.get("page", "1"));
        const pageLen = parseInt(request.get("pageLen", "10"));

        const data = await this.findWithPagination(
            whereClause,
            { "customer_tiers.created_at": "DESC" },
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
