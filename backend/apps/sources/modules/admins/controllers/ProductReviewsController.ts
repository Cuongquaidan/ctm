import SingleController from '@src/controllers/SingleController.js';

export default class ProductReviewsController extends SingleController {
    md = this.models.productReviews;
    actionActive = ['index', 'detail', 'edit', 'delete', 'deleteone']; // Loại bỏ 'create' vì đánh giá thường tạo qua đơn hàng

    async updateBefore(item: this['md']['td'], itemOld: Partial<this['md']['td']>) {
        if (item.id) {
            const postStatus = this.request.getPost('status');
            if (postStatus !== undefined) {
                item.status = Number(postStatus);
            } else {
                item.status = itemOld.status;
            }
            item.des = this.request.getPost('des') ?? itemOld.des;
            item.point = this.request.getPost('point') ?? itemOld.point;
            item.images = this.request.getPost('images') ?? itemOld.images;
        } else {
            item.store_id = this.request.getPost('store_id');
            item.customer_id = this.request.getPost('customer_id');
            item.order_id = this.request.getPost('order_id');
            item.product_id = this.request.getPost('product_id');
            item.point = this.request.getPost('point');
            item.des = this.request.getPost('des');

            if (!item.store_id || !item.customer_id || !item.product_id) {
                throw new Error("Thông tin cơ bản về đánh giá không đầy đủ.");
            }

            item.fullname = this.request.getPost('fullname') || 'Ẩn danh';
            item.status = this.request.getPost('status', 1);
        }
        if (item.point !== undefined) {
            item.point = Math.min(5, Math.max(0, Number(item.point)));
        }

        return item;
    }
}