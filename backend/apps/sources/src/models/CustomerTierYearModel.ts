import SingleModel from '@src/SingleModel.js';
import { Request } from '@src/Request.js';
import Common from '@src/Common.js';

export interface CustomerTierYearData {
    id?: number;
    customer_id: number;
    tier_id: number;
    year: number;
    uptime?: string;
    spending?: number;
    point?: number;
    status?: number;
}

export default class CustomerTierYearModel extends SingleModel<CustomerTierYearData> {
    table = 'customer_tier_year';

    vdObject = {
        customer_id: 'required|integer',
        tier_id: 'required|integer',
        year: 'required|integer|minLen(4)|maxLen(4)',
        uptime: '',
        spending: 'numeric',
        point: 'integer',
        status: 'integer',
    };

    fieldName(key: any) {//Lưu dữ liệu điểm/spending theo từng năm cho mỗi khách hàng.
        const data: any = {
            customer_id: 'Khách hàng',
            tier_id: 'Hạng thành viên',
            year: 'Năm',
            uptime: 'Thời gian nâng hạng',
            spending: 'Tổng chi tiêu trong năm',
            point: 'Tổng điểm tích lũy trong năm',
            status: 'Trạng thái',
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
        data: CustomerTierYearData[];
    }> {
        const customerSh = request.get("customerSh");
        const tierSh = request.get("tierSh");
        const yearSh = request.get("yearSh");
        const statusSh = request.get("statusSh");

        const whereParts: string[] = [];

        if (customerSh) {
            const keyword = `%${Common.removeVietnameseTones(customerSh)}%`;
            whereParts.push(`(customers.fullname LIKE '${keyword}' OR customers.email LIKE '${keyword}' OR customers.phone LIKE '${keyword}')`);
        }

        if (tierSh) {
            const keyword = `%${Common.removeVietnameseTones(tierSh)}%`;
            whereParts.push(`customer_tiers.name LIKE '${keyword}'`);
        }

        if (yearSh) {
            whereParts.push(`customer_tier_year.year = ${Number(yearSh)}`);
        }

        if (statusSh) {
            whereParts.push(`customer_tier_year.status = ${Number(statusSh)}`);
        }

        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";

        const page = parseInt(request.get("page", "1"));
        const pageLen = parseInt(request.get("pageLen", "10"));

        const data = await this.findWithPagination(
            whereClause,
            { "customer_tier_year.year": "DESC" },
            page,
            pageLen,
            `LEFT JOIN customers ON customer_tier_year.customer_id = customers.id
             LEFT JOIN customer_tiers ON customer_tier_year.tier_id = customer_tiers.id`,
            `customer_tier_year.*, 
             customers.fullname AS customerName, 
             customers.email AS customerEmail, 
             customer_tiers.name AS tierName`
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
