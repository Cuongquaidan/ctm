import SingleModel from '../SingleModel.js';
import { Request } from '../Request.js';

export interface ProductReviewReplyData {
    id?: number;
    product_review_id?: number;
    content?: string;
    status?: number;
    created_at?: string;
    updated_at?: string;
    created_by?: number;
    updated_by?: number;
}

export default class ProductReviewReplyModel extends SingleModel<ProductReviewReplyData> {
    table = 'product_reviews_reply';

    vdObject = {
        product_review_id: 'required|number',
        content: 'required|minLen(1)|maxLen(1000)',
        status: 'number',
    };

    fieldName(key: any) {
        const data: any = {
            id: 'ID',
            product_review_id: 'ID Đánh giá sản phẩm',
            content: 'Nội dung phản hồi',
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
        data: ProductReviewReplyData[];
    }> {

        const listReviewIds: number[] = await request.get('reviewIdSh', [], 'ids');

        const statusSh = request.get("statusSh");

        const whereParts: string[] = [];

        if (listReviewIds.length > 0) {
            const idsInClause = listReviewIds.join(', ');

            whereParts.push(`product_reviews_reply.product_review_id IN (${idsInClause})`);

        }

        if (statusSh) {
            whereParts.push(`product_reviews_reply.status = ${Number(statusSh)}`);
        }

        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";

        const page = parseInt(request.get("page", "1"));
        const pageLen = parseInt(request.get("pageLen", "10"));

        const data = await this.findWithPagination(
            whereClause,
            { "product_reviews_reply.created_at": "DESC" },
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