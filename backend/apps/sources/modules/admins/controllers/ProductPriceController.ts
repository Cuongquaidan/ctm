import SingleController from '@src/controllers/SingleController.js';

export default class ProductPriceController extends SingleController {
    md = this.models.productPrice;
    actionActive = ['index', 'create', 'detail', 'edit', 'delete', 'deleteone'];
    is_deleted = false;

    async updateBefore(item: this['md']['td'], itemOld: Partial<this['md']['td']>) {

        item.price = this.request.getPost('price');
        item.is_dist = this.request.getPost('is_dist', 0);
        item.quantity = this.request.getPost('quantity', -1);
        if (!item.id) {
            item.product_id = this.request.getPost('product_id');
            item.package_id = this.request.getPost('package_id');
            if (!item.product_id) {
                throw new Error("product_id không được để trống.");
            }
            item.sold_quantity = 0;
            const quantity = Number(item.quantity);
            if (quantity >= 0) {
                item.remaining_quantity = quantity;
            } else {
                item.remaining_quantity = -1;
            }
        } else {
            const newQuantity = Number(item.quantity);
            const oldQuantity = Number(itemOld.quantity);
            const oldRemainingQuantity = Number(itemOld.remaining_quantity);
            if (newQuantity !== oldQuantity && newQuantity >= 0) {
                const quantityDifference = newQuantity - oldQuantity;
                item.remaining_quantity = oldRemainingQuantity + quantityDifference;
                // if (item.remaining_quantity < 0) {
                // }
            } else {
                item.remaining_quantity = oldRemainingQuantity;
                item.quantity = oldQuantity;
            }
            item.sold_quantity = itemOld.sold_quantity;
            item.product_id = itemOld.product_id;
            item.package_id = itemOld.package_id;
        }

        if (item.price !== undefined) {
            item.price = Math.max(0, Number(item.price));
        }


        return item;
    }
}