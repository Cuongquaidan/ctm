import CoreController from "./CoreController.js";
import { JWTAppCustomer } from "@src/JWTAppCustomer.js";

export default class CustomerController extends CoreController {
    async beforeRouter() {
        try {
            const tokenObj = await this.checkToken();
            const customerId = tokenObj.sub;
            const customer = await this.models.customer.findOne({ id: customerId, status: 1 });
            if (!customer) throw new Error("invalid_customer");
            this.customer = customer;
            this.customerId = customerId;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
    async checkToken() {
        // const accessToken = String(this.req.headers['auth-token']);
        // const accessToken = String(this.req.cookies?.accessToken);
        const tokenObj = JWTAppCustomer.verifyToken(this.req);
        const customerId = tokenObj.sub;
        const customer_token = await this.models.customertoken.findOne({ customer_id: customerId, access_token: tokenObj.accessToken });
        if (!customer_token) {
            throw new Error("invalid_customer_token");
        }
        if (customer_token.expiredRefreshAt < Date.now()) throw new Error("invalid_expired_refresh_token");
        if (customer_token.expiredAt < Date.now()) await this.models.customertoken.refreshToken(this);
        return tokenObj;
    }
}