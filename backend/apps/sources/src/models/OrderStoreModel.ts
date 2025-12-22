import SingleModel from '@src/SingleModel.js';
import { Request } from '@src/Request.js';


export interface OrderStoreData {
    id?: number;
    order_id?: number;
    order_type?: number;
    customer_id?: number;
    fullname?: string;
    phone?: string;
    email?: string;

    store_id?: number;
    store_name?: string;
    store_phone?: string;
    store_country?: number;
    store_province?: number;
    store_district?: number;
    store_ward?: number;
    store_address?: string;
    store_fulladdress?: string;
    store_lat?: number;
    store_lng?: number;
    ahamove_service_id?: string;

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
    total?: number;
    cus_shipping?: number;
    shipping?: number;
    voucher_ctm_value?: number;
    voucher_value?: number;
    voucher_info?: string;
    store_discount?: number;
    ctm_discount?: number;
    seller_discount?: number;

    status?: number;
    ahamoved?: number;
    cancel_comment?: string;
    is_deleted?: number;
    is_rate?: number;

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
    cancel_at?: string;
}


export default class OrderStoreModel extends SingleModel<OrderStoreData> {
    table = 'order_store';

    vdObject = {
        order_id: 'required|integer|min(1)',
        store_id: 'required|integer|min(1)',
        order_type: 'numeric|min(1)',
        customer_id: 'integer|min(0)',
        fullname: 'maxLen(150)',
        phone: 'maxLen(50)',
        email: 'maxLen(150)|email',
        item_total: 'numeric|min(0)',
        total: 'numeric|min(0)',
        shipping: 'numeric|min(0)',
        status: 'numeric|min(0)',
        is_deleted: 'numeric|min(0)|max(1)',
    };

    fieldName(key: any) {
        const data: any = {
            id: 'ID Đơn hàng Cửa hàng',
            order_id: 'ID Đơn hàng tổng',
            store_id: 'ID Cửa hàng',
            store_name: 'Tên Cửa hàng',
            item_total: 'Tổng tiền hàng',
            shipping: 'Phí vận chuyển',
            voucher_value: 'Giá trị Voucher Store',
            total: 'Tổng thanh toán Store',
            status: 'Trạng thái Store',
            created_at: 'Ngày tạo',
            delivered_at: 'Ngày giao hàng',
            cancel_comment: 'Lý do hủy',
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
        data: OrderStoreData[];
    }> {
        const storeIdSh = request.get("storeIdSh");
        const orderIdSh = request.get("orderIdSh");
        const statusSh = request.get("statusSh");

        const whereParts: string[] = [];

        if (storeIdSh) {
            whereParts.push(`order_store.store_id = ${Number(storeIdSh)}`);
        }

        if (orderIdSh) {
            whereParts.push(`order_store.order_id = ${Number(orderIdSh)}`);
        }

        if (statusSh !== undefined && statusSh !== null && statusSh !== '') {
            whereParts.push(`order_store.status = ${Number(statusSh)}`);
        }

        const deletedValue = String(is_deleted);
        if (deletedValue === "0" || deletedValue === "false") {
            whereParts.push(`order_store.is_deleted = 0`);
        } else if (deletedValue === "1" || deletedValue === "true") {
            whereParts.push(`order_store.is_deleted = 1`);
        }

        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";

        const page = parseInt(request.get("page", "1"));
        const pageLen = parseInt(request.get("pageLen", "10"));
        const finalPageLen = Math.max(1, pageLen);

        const data = await this.findWithPagination(
            whereClause,
            { "order_store.id": "DESC" },
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