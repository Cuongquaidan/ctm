import SingleModel from '@src/SingleModel.js';
import { Request } from '@src/Request.js';

export interface OrderItemMoreData {
    id?: number;
    customer_id?: number;
    order_id?: number;
    order_store_id?: number;
    order_item_id?: number;
    infos?: string;
}

export default class OrderItemMoreModel extends SingleModel<OrderItemMoreData> {
    table = 'order_item_more';

    vdObject = {
        customer_id: 'integer',
        order_id: 'integer',
        order_store_id: 'required|integer|min(1)',
        order_item_id: 'required|integer|min(1)',
        infos: 'required',
    };

    fieldName(key: any) {
        const data: any = {
            id: 'ID Chi tiết thêm',
            customer_id: 'ID Khách hàng',
            order_id: 'ID Đơn hàng tổng',
            order_store_id: 'ID Đơn hàng cửa hàng',
            order_item_id: 'ID Chi tiết sản phẩm',
            infos: 'Thông tin thêm',
        };
        return data[key] ?? key;
    }

    async getDatas(
        request: Request,
        // is_deleted: any = 0
    ): Promise<{
        page: number;
        pageLen: number;
        pageTotal: number;
        recordTotal: number;
        data: OrderItemMoreData[];
    }> {
        const orderItemIdSh = request.get("orderItemIdSh");
        const orderStoreIdSh = request.get("orderStoreIdSh");

        const whereParts: string[] = [];

        if (orderItemIdSh) {
            whereParts.push(`order_item_more.order_item_id = ${Number(orderItemIdSh)}`);
        }

        if (orderStoreIdSh) {
            whereParts.push(`order_item_more.order_store_id = ${Number(orderStoreIdSh)}`);
        }

        // Không có trường is_deleted trong bảng này, nên tôi sẽ bỏ qua logic is_deleted
        // Nếu bạn muốn thêm điều kiện mặc định, hãy dùng '1'

        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";

        const page = parseInt(request.get("page", "1"));
        const pageLen = parseInt(request.get("pageLen", "10"));
        const finalPageLen = Math.max(1, pageLen);

        const data = await this.findWithPagination(
            whereClause,
            { "order_item_more.id": "DESC" },
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