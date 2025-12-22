import SingleController from '@src/controllers/SingleController.js';

export default class VoucherInvitedController extends SingleController {
    md = this.models.voucherInvited;

    actionActive = ['index', 'create', 'detail', 'edit', 'delete', 'deleteone'];
    is_deleted = false;

    async updateBefore(item: this['md']['td']) {
        // const currentUserId = this.request.getUserId();
        item.customer_id = this.request.getPost('customer_id');
        item.voucher_id = this.request.getPost('voucher_id');
        item.quantity = this.request.getPost('quantity', 1);
        const customerId = Number(item.customer_id) || 0;
        const voucherId = Number(item.voucher_id) || 0;
        if (customerId <= 0) {
            throw new Error('ID khách hàng không hợp lệ.');
        }
        if (voucherId <= 0) {
            throw new Error('ID Voucher không hợp lệ.');
        }
        if (!item.id) {
            // item.created_at = Common.getCurrentTime();
        }

        return item;
    }
}