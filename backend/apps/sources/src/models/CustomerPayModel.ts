import SingleModel from '@src/SingleModel.js';
import { Request } from '@src/Request.js';
import Common from '@src/Common.js';

export interface CustomerPayData {
    id?: number;
    customer_id: number;
    payment_total?: number;
    pay_in_total?: number;
    pay_out_total?: number;
    total?: number;
    created_at?: string;
    updated_at?: string;
}

export default class CustomerPayModel extends SingleModel<CustomerPayData> {
    table = 'customer_pay';

    vdObject = {
        customer_id: 'required|integer',
        payment_total: 'numeric',
        pay_in_total: 'numeric',
        pay_out_total: 'numeric',
        total: 'numeric',
        created_at: '',
        updated_at: '',
    };

    fieldName(key: any) {
        const data: any = {
            customer_id: 'Khách hàng',
            payment_total: 'Tổng thanh toán',
            pay_in_total: 'Tổng nạp',
            pay_out_total: 'Tổng rút',
            total: 'Tổng hiện có',
            created_at: 'Ngày tạo',
            updated_at: 'Ngày cập nhật',
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
        data: CustomerPayData[];
    }> {
        const customerSh = request.get("customerSh");

        const whereParts: string[] = [];

        if (customerSh) {
            const keyword = `%${Common.removeVietnameseTones(customerSh)}%`;
            whereParts.push(`customers.fullname LIKE '${keyword}'`);
        }

        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";

        const page = parseInt(request.get("page", "1"));
        const pageLen = parseInt(request.get("pageLen", "10"));

        const data = await this.findWithPagination(
            whereClause,
            { "customer_pay.created_at": "DESC" },
            page,
            pageLen,
            `LEFT JOIN customers ON customer_pay.customer_id = customers.id`,
            `customer_pay.*, customers.fullname AS customerName, customers.email AS customerEmail`
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
