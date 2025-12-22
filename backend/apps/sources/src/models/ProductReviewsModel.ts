import SingleModel from '../SingleModel.js';
import { Request } from '../Request.js';

export interface ProductReviewData {
    id?: number;
    store_id?: number;
    customer_id?: number;
    order_store_id?: number;
    order_id?: number;
    order_item_id?: number;
    product_id?: number;
    product_price_id?: number;
    fullname?: string;
    avatar?: string;
    point?: number;
    des?: string;
    images?: string;
    status?: number;
    created_at?: string;
    updated_at?: string;
    created_by?: number;
    updated_by?: number;
}

export default class ProductReviewModel extends SingleModel<ProductReviewData> {
    table = 'product_reviews';

    vdObject = {
        store_id: 'required|number',
        customer_id: 'required|number',
        order_store_id: 'required|number',
        order_id: 'required|number',
        order_item_id: 'required|number',
        product_id: 'required|number',
        product_price_id: 'required|number',
        point: 'required|number|minVal(0)|maxVal(5)',
        des: 'maxLen(5000)',
        status: 'number',
    };

    fieldName(key: any) {
        const data: any = {
            id: 'ID',
            store_id: 'ID Cửa hàng',
            customer_id: 'ID Khách hàng',
            order_store_id: 'ID Đơn hàng Cửa hàng',
            order_id: 'ID Đơn hàng',
            order_item_id: 'ID Chi tiết Đơn hàng',
            product_id: 'ID Sản phẩm',
            product_price_id: 'ID Giá sản phẩm',
            fullname: 'Họ tên',
            avatar: 'Avatar',
            point: 'Điểm đánh giá',
            des: 'Nội dung đánh giá',
            images: 'Hình ảnh',
            status: 'Trạng thái',
            created_at: 'Thời gian tạo',
            updated_at: 'Thời gian cập nhật',
            created_by: 'Người tạo',
            updated_by: 'Người cập nhật',
        };
        return data[key] ?? key;
    }

    async getDatas(
        request: Request
    ): Promise<{
        page: number;
        pageLen: number;
        pageTotal: number;
        recordTotal: number;
        data: ProductReviewData[];
    }> {
        const productIdSh = request.get("productIdSh");
        const statusSh = request.get("statusSh");
        const customerIdSh = request.get("customerIdSh");
        const desSh = request.get("desSh");
        const store_idSh = request.get("store_idSh");

        const whereParts: string[] = [];

        if (productIdSh) {
            whereParts.push(`product_reviews.product_id = ${Number(productIdSh)}`);
        }

        if (statusSh) {
            whereParts.push(`product_reviews.status = ${Number(statusSh)}`);
        }

        if (customerIdSh) {
            whereParts.push(`product_reviews.customer_id = ${Number(customerIdSh)}`);
        }
        if (desSh) {
            const keyword = `%${desSh}%`;
            whereParts.push(`product_reviews.des LIKE '${keyword}'`);
        }
        if (store_idSh) {
            whereParts.push(`product_reviews.store_id = ${Number(store_idSh)} `);
        }

        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";

        const page = parseInt(request.get("page", "1"));
        const pageLen = parseInt(request.get("pageLen", "10"));

        const data = await this.findWithPagination(
            whereClause,
            { "product_reviews.created_at": "DESC" },
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