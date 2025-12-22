import SingleModel from '../SingleModel.js';
import { Request } from '../Request.js';

export interface OrderItemData {
    id?: number;
    order_id: number;
    order_store_id: number;
    product_id: number;
    product_price_id: number;
    product_seller_id?: number;
    seller_id?: number;
    name?: string;
    price?: number;
    expense?: number;
    quantity?: number;
    seller_discount?: number;
    total?: number;
    is_rate?: number;
    promotion_id?: number;
    discount_value?: number;
    discount_name?: string;
    created_at?: string;
    updated_at?: string;
    created_by?: number;
    updated_by?: number;
}

export default class OrderItemModel extends SingleModel<OrderItemData> {
    table = 'order_item';

    vdObject = {
        order_id: 'required|number',
        order_store_id: 'required|number',
        product_id: 'required|number',
        product_price_id: 'required|number',
        quantity: 'required|number',
        price: 'required|number',
        total: 'required|number',
    };

    fieldName(key: any) {
        const data: any = {
            order_id: 'ID đơn hàng',
            order_store_id: 'ID cửa hàng',
            product_id: 'ID sản phẩm',
            product_price_id: 'ID giá sản phẩm',
            product_seller_id: 'ID người bán sản phẩm',
            seller_id: 'ID người bán',
            name: 'Tên sản phẩm',
            price: 'Giá sản phẩm',
            expense: 'Chi phí',
            quantity: 'Số lượng',
            seller_discount: 'Giảm giá người bán',
            total: 'Tổng tiền',
            is_rate: 'Đã đánh giá',
            promotion_id: 'ID khuyến mãi',
            discount_value: 'Giá trị giảm',
            discount_name: 'Tên khuyến mãi',
            created_at: 'Ngày tạo',
            updated_at: 'Ngày cập nhật',
            created_by: 'Người tạo',
            updated_by: 'Người cập nhật',
        };
        return data[key] ?? key;
    }

    async getDatas(
        request: Request,
        customer: any,
        is_deleted: any
    ): Promise<{
        page: number;
        pageLen: number;
        pageTotal: number;
        recordTotal: number;
        data: OrderItemData[];
    }> {
        const orderIdSh = request.get("orderIdSh");
        const productIdSh = request.get("productIdSh");

        const whereParts: string[] = [];

        if (orderIdSh) whereParts.push(`order_item.order_id = ${Number(orderIdSh)}`);
        if (productIdSh) whereParts.push(`order_item.product_id = ${Number(productIdSh)}`);

        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";

        const page = parseInt(request.get("page", "1"));
        const pageLen = parseInt(request.get("pageLen", "10"));

        const data = await this.findWithPagination(
            whereClause,
            { "order_item.created_at": "ASC" },
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
