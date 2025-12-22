import Common from '@src/Common.js';
import SingleController from '@src/controllers/SingleController.js';

export default class VoucherStoreController extends SingleController {
    md = this.models.voucherStore;
    actionActive = ['index', 'create', 'detail', 'edit', 'delete', 'deleteone'];
    is_deleted = true;

    async updateBefore(item: this['md']['td'], itemOld: Partial<this['md']['td']>) {
        const currentUserId = this.request.getUserId();

        item.store_id = this.request.getPost('store_id');
        item.name = this.request.getPost('name');
        item.description = this.request.getPost('description');
        item.image = this.request.getPost('image');
        item.tier_id = this.request.getPost('tier_id', 0);
        item.voucher_type = this.request.getPost('voucher_type');
        item.discount_type = this.request.getPost('discount_type');
        item.discount = this.request.getPost('discount', 0);
        item.min_cost = this.request.getPost('min_cost', 0);
        item.cost_limit = this.request.getPost('cost_limit', 0);
        item.quantity = this.request.getPost('quantity', 0);
        item.customer_number = this.request.getPost('customer_number', 0);
        item.date_type = this.request.getPost('date_type');
        item.start_date = this.request.getPost('start_date');
        item.end_date = this.request.getPost('end_date');
        item.start_time = this.request.getPost('start_time');
        item.end_time = this.request.getPost('end_time');
        item.day_of_week = this.request.getPost('day_of_week');
        item.status = this.request.getPost('status', 1);
        item.reason_cancel = this.request.getPost('reason_cancel');
        item.code = this.request.getPost('code');
        if (!item.id && !item.code) {
            item.code = Common.randomText(6);
        }

        // if (item.discount_type === 'percent' && (item.discount < 0 || item.discount > 100)) {
        //     throw new Error('Giảm giá phần trăm phải nằm trong khoảng 0-100.');
        // }
        // if (item.min_cost > 0 && item.min_cost < item.discount) {
        //     if (item.discount_type === 'amount') {
        //         throw new Error('Giá trị giảm giá không thể lớn hơn chi phí tối thiểu áp dụng.');
        //     }
        // }
        if (item.start_date && item.end_date && item.start_date > item.end_date) {
            throw new Error('Ngày bắt đầu không được lớn hơn ngày kết thúc.');
        }

        if (!item.id) {
            // item.created_at = Common.getCurrentTime(); 
            item.created_by = currentUserId;
            item.is_deleted = 0;
            item.quantity_used = 0;
            item.used = 0; //
        } else {
            item.quantity_used = itemOld.quantity_used;
            item.used = itemOld.used;
        }

        // item.updated_at = Common.getCurrentTime();
        item.updated_by = currentUserId;

        return item;
    }
}