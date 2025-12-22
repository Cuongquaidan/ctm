import SingleModel from '@src/SingleModel.js';
import { Request } from '@src/Request.js';
import Common from '@src/Common.js';

export interface CustomerPayInData {
    id?: number;
    customer_id: number;
    itype: number;
    order_id?: number;
    price: number;
    name: string;
    des?: string;
    payment_method_id: number;
    status?: number;
    created_at?: string;
    updated_at?: string;
    created_by?: number;
    updated_by?: number;
}

export default class CustomerPayInModel extends SingleModel<CustomerPayInData> {
    table = 'customer_pay_in';

    vdObject = {
        customer_id: 'required|integer',
        itype: 'required|integer',
        order_id: 'integer',
        price: 'required|numeric',
        name: 'required|maxLen(255)',
        des: 'maxLen(255)',
        payment_method_id: 'required|integer',
        status: 'integer',
        created_at: '',
        updated_at: '',
        created_by: 'integer',
        updated_by: 'integer',
    };

    fieldName(key: any) {
        const data: any = {
            customer_id: 'Khách hàng',
            itype: 'Loại giao dịch',
            order_id: 'ID đơn hàng',
            price: 'Số tiền',
            name: 'Tên người nạp',
            des: 'Mô tả',
            payment_method_id: 'Phương thức thanh toán',
            status: 'Trạng thái',
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
        data: CustomerPayInData[];
    }> {
        const customerSh = request.get("customerSh");
        const statusSh = request.get("statusSh");
        const itypeSh = request.get("itypeSh");

        const whereParts: string[] = [];

        if (customerSh) {
            const keyword = `%${Common.removeVietnameseTones(customerSh)}%`;
            whereParts.push(`customers.fullname LIKE '${keyword}'`);
        }

        if (statusSh) {
            whereParts.push(`customer_pay_in.status = ${Number(statusSh)}`);
        }

        if (itypeSh) {
            whereParts.push(`customer_pay_in.itype = ${Number(itypeSh)}`);
        }

        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";

        const page = parseInt(request.get("page", "1"));
        const pageLen = parseInt(request.get("pageLen", "10"));

        const data = await this.findWithPagination(
            whereClause,
            { "customer_pay_in.created_at": "DESC" },
            page,
            pageLen,
            `LEFT JOIN customers ON customer_pay_in.customer_id = customers.id`,
            `customer_pay_in.*, customers.fullname AS customerName, customers.email AS customerEmail`
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
