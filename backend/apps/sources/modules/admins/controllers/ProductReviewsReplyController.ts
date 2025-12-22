import SingleController from '@src/controllers/SingleController.js';

export default class ProductReviewReplyController extends SingleController {
    md = this.models.productReviewReply;
    mdReview = this.models.productReviews;
    actionActive = ['index', 'create', 'detail', 'edit', 'delete', 'deleteone'];
    is_deleted = true;

    async updateBefore(item: this['md']['td'], _itemOld: Partial<this['md']['td']>) {
        const currentUserId = this.request.getUserId();
        item.content = this.request.getPost('content');
        item.status = this.request.getPost('status', 1);
        if (!item.id || this.request.getPost('product_review_id')) {
            item.product_review_id = this.request.getPost('product_review_id');
        }
        const reviewId = Number(item.product_review_id) || 0;
        if (reviewId <= 0) {
            throw new Error('Đánh giá sản phẩm (product_review_id) không hợp lệ.');
        }

        const parentReview = await this.mdReview.getById(reviewId);
        if (!parentReview) {
            throw new Error('Đánh giá sản phẩm cha không tồn tại.');
        }

        item.product_review_id = parentReview.id;

        if (!item.id) {
            // item.created_at = Common.getCurrentTime();
            // item.created_at = new Date();
            item.created_by = currentUserId;
        }

        // item.updated_at = Common.getCurrentTime();
        // item.created_at = new Date();
        item.updated_by = currentUserId;

        return item;
    }
}