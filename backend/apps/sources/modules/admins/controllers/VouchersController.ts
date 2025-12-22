import SingleController from '@src/controllers/SingleController.js';

export default class VoucherController extends SingleController {
    md = this.models.voucher;
    actionActive = ['index', 'create', 'detail', 'edit', 'delete', 'deleteone'];
    is_deleted = true;
    async updateBefore(item: this['md']['td'], itemOld: Partial<this['md']['td']>) {
        item.name = this.request.getPost('name');
        item.description = this.request.getPost('description');
        item.image = this.request.getPost('image');
        item.code = this.request.getPost('code');
        item.voucher_type = this.request.getPost('voucher_type');
        item.discount_type = this.request.getPost('discount_type');
        item.discount = this.request.getPost('discount');
        item.min_cost = this.request.getPost('min_cost', 0);
        item.cost_limit = this.request.getPost('cost_limit', 0);
        item.quantity = this.request.getPost('quantity', -1);
        item.customer_number = this.request.getPost('customer_number', -1);
        item.tier_id = this.request.getPost('tier_id');
        item.status = this.request.getPost('status', 1);
        if (!item.id) {
            if (!item.name || !item.code || !item.voucher_type || !item.discount) {
                throw new Error("Tên, Mã, Loại Voucher và Chiết khấu là bắt buộc.");
            }
            item.quantity_used = 0;
            item.used = 0;
        } else {
            item.code = itemOld.code;
            item.quantity_used = itemOld.quantity_used;
            item.discount_type = itemOld.discount_type;
            // if (item.quantity !== undefined && item.quantity >= 0 && item.quantity < itemOld.quantity_used) {
            //     throw new Error(`Số lượng voucher phải lớn hơn số lượng đã dùng (${itemOld.quantity_used}).`);
            // }
        }
        item.date_type = this.request.getPost('date_type');
        item.start_date = this.request.getPost('start_date');
        item.end_date = this.request.getPost('end_date');
        item.start_time = this.request.getPost('start_time');
        item.end_time = this.request.getPost('end_time');
        item.day_of_week = this.request.getPost('day_of_week');
        if (item.date_type === 1 && (!item.start_date || !item.end_date)) {
            throw new Error('Cần cung cấp ngày bắt đầu và ngày kết thúc.');
        }
        item.discount = Math.max(0, Number(item.discount));
        item.min_cost = Math.max(0, Number(item.min_cost));
        item.cost_limit = Math.max(0, Number(item.cost_limit));

        return item;
    }
}