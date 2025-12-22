import CustomerController from "@src/controllers/CustomerController.js";
import CartItemModel from "@src/models/CartItemModel.js";

export default class CartItemController extends CustomerController {

    async getList() {
        try {
            const cartItemModel = new CartItemModel(this.pool);
            const customerId = Number(this.customerId || 0);
            if (!customerId) throw new Error("invalid_customer_id");
            const finalResult = await cartItemModel.getDatas(
                this.request,
                customerId,
                0
            );
            this.resJsonData(finalResult);
        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }
}