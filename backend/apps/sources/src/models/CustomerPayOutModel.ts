import SingleModel from '@src/SingleModel.js';
import { Request } from '@src/Request.js';
import Common from '@src/Common.js';

export interface CustomerPayOutData {
    id?: number;
    customer_id: number;
    otype: number;
    bank_code?: number;
    bank_number?: string;
    price: number;
    name?: string;
    des: string;
    info?: string;
    is_save?: number;
    cancel_reason?: string;
    status?: number;
    created_at?: string;
    updated_at?: string;
    created_by?: number;
    updated_by?: number;
}

export default class CustomerPayOutModel extends SingleModel<CustomerPayOutData> {
    table = 'customer_pay_out';

    vdObject = {
        customer_id: 'required|integer',
        otype: 'required|integer',
        bank_code: 'integer',
        bank_number: 'maxLen(20)',
        price: 'required|numeric',
        name: 'maxLen(100)',
        des: 'required|maxLen(255)',
        info: '',
        is_save: 'integer',
        cancel_reason: 'maxLen(255)',
        status: 'integer',
        created_at: '',
        updated_at: '',
        created_by: 'integer',
        updated_by: 'integer',
    };

    fieldName(key: any) {
        const data: any = {
            customer_id: 'Khách hàng',
            otype: 'Loại giao dịch',
            bank_code: 'Mã ngân hàng',
            bank_number: 'Số tài khoản',
            price: 'Số tiền',
            name: 'Tên người nhận',
            des: 'Mô tả',
            info: 'Thông tin bổ sung',
            is_save: 'Lưu thông tin',
            cancel_reason: 'Lý do hủy',
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
        data: CustomerPayOutData[];
    }> {
        const customerSh = request.get("customerSh");
        const statusSh = request.get("statusSh");
        const otypeSh = request.get("otypeSh");

        const whereParts: string[] = [];

        if (customerSh) {
            const keyword = `%${Common.removeVietnameseTones(customerSh)}%`;
            whereParts.push(`customers.fullname LIKE '${keyword}'`);
        }

        if (statusSh) {
            whereParts.push(`customer_pay_out.status = ${Number(statusSh)}`);
        }

        if (otypeSh) {
            whereParts.push(`customer_pay_out.otype = ${Number(otypeSh)}`);
        }

        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";

        const page = parseInt(request.get("page", "1"));
        const pageLen = parseInt(request.get("pageLen", "10"));

        const data = await this.findWithPagination(
            whereClause,
            { "customer_pay_out.created_at": "DESC" },
            page,
            pageLen,
            `LEFT JOIN customers ON customer_pay_out.customer_id = customers.id`,
            `customer_pay_out.*, customers.fullname AS customerName, customers.email AS customerEmail`
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
