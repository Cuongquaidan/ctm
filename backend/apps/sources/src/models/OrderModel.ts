import SingleModel from '@src/SingleModel.js';
import { Request } from '@src/Request.js';

export interface OrderData {
    id?: number;
    order_type?: number;
    customer_id?: number;
    fullname?: string;
    phone?: string;
    email?: string;
    address_id?: number;
    fulladdress?: string;
    country_id?: string;
    province_id?: string;
    district_id?: string;
    ward_id?: string;
    address?: string;
    payment_method_id?: number;
    received_method?: number;
    item_total?: number;
    shipping?: number;
    voucher_value?: number;
    voucher_store_value?: number;
    voucher_store_info?: string;
    bank_expense?: number;
    total?: number;
    status?: number;
    is_deleted?: number;
    created_at?: string;
    updated_at?: string;
    created_by?: number;
    updated_by?: number;
    received_at?: string;
    prepared_at?: string;
    prepared_by?: number;
    received_by?: number;
    transmited_at?: string;
    delivered_at?: string;
}

export default class OrderModel extends SingleModel<OrderData> {
    table = 'orders';

    vdObject = {
        order_type: 'numeric|min(1)',
        customer_id: 'integer|min(0)',
        fullname: 'required|maxLen(150)',
        phone: 'required|maxLen(50)',
        email: 'maxLen(150)|email',
        address_id: 'integer',
        country_id: 'maxLen(10)',
        province_id: 'maxLen(10)',
        district_id: 'maxLen(10)',
        ward_id: 'maxLen(10)',
        address: 'maxLen(255)',
        payment_method_id: 'numeric',
        received_method: 'numeric',
        item_total: 'numeric|min(0)',
        shipping: 'numeric|min(0)',
        voucher_value: 'numeric|min(0)',
        voucher_store_value: 'numeric|min(0)',
        bank_expense: 'numeric|min(0)',
        total: 'numeric|min(0)',
        status: 'numeric|min(0)|max(9)',
        is_deleted: 'numeric|min(0)|max(1)',
    };

    fieldName(key: any) {
        const data: any = {
            id: 'ID Đơn hàng',
            order_type: 'Loại đơn hàng',
            customer_id: 'ID Khách hàng',
            fullname: 'Họ tên',
            phone: 'Số điện thoại',
            email: 'Email',
            address_id: 'ID Địa chỉ nhận',
            fulladdress: 'Địa chỉ đầy đủ',
            payment_method_id: 'PT Thanh toán',
            received_method: 'PT Nhận hàng',
            item_total: 'Tổng tiền hàng',
            shipping: 'Phí vận chuyển',
            voucher_value: 'Giá trị Voucher chung',
            voucher_store_value: 'Giá trị Voucher Cửa hàng',
            bank_expense: 'Phí ngân hàng',
            total: 'Tổng thanh toán',
            status: 'Trạng thái',
            created_at: 'Ngày tạo',
            updated_at: 'Ngày cập nhật',
            received_at: 'Ngày nhận đơn',
            delivered_at: 'Ngày giao hàng',
        };
        return data[key] ?? key;
    }

    async getDatas(
        request: Request,
        is_deleted: any = 0
    ): Promise<{
        page: number;
        pageLen: number;
        pageTotal: number;
        recordTotal: number;
        data: OrderData[];
    }> {
        const customerIdSh = request.get("customerIdSh");
        const statusSh = request.get("statusSh");
        const orderIdSh = request.get("orderIdSh");
        const phoneSh = request.get("phoneSh");

        const whereParts: string[] = [];

        if (orderIdSh) {
            whereParts.push(`orders.id = ${Number(orderIdSh)}`);
        }

        if (customerIdSh) {
            whereParts.push(`orders.customer_id = ${Number(customerIdSh)}`);
        }

        if (phoneSh) {
            whereParts.push(`orders.phone LIKE '%${phoneSh}%'`);
        }

        if (statusSh !== undefined && statusSh !== null && statusSh !== '') {
            whereParts.push(`orders.status = ${Number(statusSh)}`);
        }

        const deletedValue = String(is_deleted);
        if (deletedValue === "0" || deletedValue === "false") {
            whereParts.push(`orders.is_deleted = 0`);
        } else if (deletedValue === "1" || deletedValue === "true") {
            whereParts.push(`orders.is_deleted = 1`);
        }

        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";

        const page = parseInt(request.get("page", "1"));
        const pageLen = parseInt(request.get("pageLen", "10"));
        const finalPageLen = Math.max(1, pageLen);

        const data = await this.findWithPagination(
            whereClause,
            { "orders.id": "DESC" },
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