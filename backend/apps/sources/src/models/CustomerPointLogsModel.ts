import SingleModel from '@src/SingleModel.js';
import { Request } from '@src/Request.js';
import Common from '@src/Common.js';

export interface CustomerPointLogData {
    id?: number;
    status: number;
    customer_id: number;
    order_id?: number;
    spending?: number;
    point: number;
    total: number;
    created_at: string;
}

export default class CustomerPointLogModel extends SingleModel<CustomerPointLogData> {
    table = 'customer_point_logs';

    vdObject = {
        status: 'required|integer',
        customer_id: 'required|integer',
        order_id: 'integer',
        spending: 'numeric',
        point: 'required|integer',
        total: 'required|integer',
        created_at: 'required|datetime',
    };

    fieldName(key: any) {
        const data: any = {
            status: 'Trạng thái',
            customer_id: 'Khách hàng',
            order_id: 'ID đơn hàng',
            spending: 'Tổng chi tiêu',
            point: 'Điểm',
            total: 'Tổng điểm hiện có',
            created_at: 'Thời gian ghi nhận',
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
        data: CustomerPointLogData[];
    }> {
        const customerSh = request.get("customerSh");
        const statusSh = request.get("statusSh");
        const orderSh = request.get("orderSh");

        const whereParts: string[] = [];

        if (customerSh) {
            const keyword = `%${Common.removeVietnameseTones(customerSh)}%`;
            whereParts.push(`customers.fullname LIKE '${keyword}'`);
        }

        if (statusSh) {
            whereParts.push(`customer_point_logs.status = ${Number(statusSh)}`);
        }

        if (orderSh) {
            whereParts.push(`customer_point_logs.order_id = ${Number(orderSh)}`);
        }

        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";

        const page = parseInt(request.get("page", "1"));
        const pageLen = parseInt(request.get("pageLen", "10"));

        const data = await this.findWithPagination(
            whereClause,
            { "customer_point_logs.created_at": "DESC" },
            page,
            pageLen,
            `LEFT JOIN customers ON customer_point_logs.customer_id = customers.id`,
            `customer_point_logs.*, customers.fullname AS customerName, customers.email AS customerEmail`
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
