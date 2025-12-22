import SingleModel from '@src/SingleModel.js';
import { Request } from '@src/Request.js';
import Common from '@src/Common.js';

export interface CustomerPayinedData {
    id?: number;
    customer_pay_in_id: number;
    customer_id: number;
    payment_method_id: number;
    payment_info: string;
    amount?: number;
    stop?: number;
    status?: number;
    created_at?: string;
    updated_at?: string;
}

export default class CustomerPayinedModel extends SingleModel<CustomerPayinedData> {
    table = 'customer_payined';

    vdObject = {
        customer_pay_in_id: 'required|integer',
        customer_id: 'required|integer',
        payment_method_id: 'required|integer',
        payment_info: 'required',
        amount: 'numeric',
        stop: 'integer',
        status: 'integer',
        created_at: '',
        updated_at: '',
    };

    fieldName(key: any) {
        const data: any = {
            customer_pay_in_id: 'ID Giao dịch nạp tiền',
            customer_id: 'Khách hàng',
            payment_method_id: 'Phương thức thanh toán',
            payment_info: 'Thông tin thanh toán',
            amount: 'Số tiền',
            stop: 'Đình chỉ',
            status: 'Trạng thái',
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
        data: CustomerPayinedData[];
    }> {
        const customerSh = request.get("customerSh");
        const statusSh = request.get("statusSh");
        const methodSh = request.get("methodSh");

        const whereParts: string[] = [];

        if (customerSh) {
            const keyword = `%${Common.removeVietnameseTones(customerSh)}%`;
            whereParts.push(`customers.fullname LIKE '${keyword}'`);
        }

        if (statusSh) {
            whereParts.push(`customer_payined.status = ${Number(statusSh)}`);
        }

        if (methodSh) {
            whereParts.push(`customer_payined.payment_method_id = ${Number(methodSh)}`);
        }

        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";

        const page = parseInt(request.get("page", "1"));
        const pageLen = parseInt(request.get("pageLen", "10"));

        const data = await this.findWithPagination(
            whereClause,
            { "customer_payined.created_at": "DESC" },
            page,
            pageLen,
            `LEFT JOIN customers ON customer_payined.customer_id = customers.id`,
            `customer_payined.*, customers.fullname AS customerName`
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
