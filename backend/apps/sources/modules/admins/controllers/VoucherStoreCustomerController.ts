import SingleController from '@src/controllers/SingleController.js';

export default class VoucherStoreCustomerController extends SingleController {
    md = this.models.voucherStoreCustomer;

    actionActive = ['index', 'create', 'detail', 'edit', 'delete', 'deleteone'];
    is_deleted = false;

    async updateBefore(item: this['md']['td'], _itemOld: Partial<this['md']['td']>) {
        // const currentUserId = this.request.getUserId();

        item.customer_id = this.request.getPost('customer_id');
        item.voucher_id = this.request.getPost('voucher_id');
        item.voucher_value = this.request.getPost('voucher_value', 0);
        item.voucher_info = this.request.getPost('voucher_info');

        item.order_id = this.request.getPost('order_id');

        const customerId = Number(item.customer_id) || 0;
        const voucherId = Number(item.voucher_id) || 0;

        if (customerId <= 0) {
            throw new Error('ID khách hàng không hợp lệ.');
        }
        if (voucherId <= 0) {
            throw new Error('ID Voucher không hợp lệ.');
        }

        // if (!item.id) {
        //     // item.created_at = Common.getCurrentTime(); 
        // } else {
        // }

        // if (item.id && item.order_id && !itemOld.order_id) {
        // }

        return item;
    }
}