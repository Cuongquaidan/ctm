import SingleModel from "@src/SingleModel.js";
import { JWTAppCustomer } from "@src/JWTAppCustomer.js";
import { FastifyRequest } from "fastify";
import { v4 as uuidv4 } from "uuid";

export interface customerTonkenData {
    id?: number;
    session_id: string;
    customer_id: number;
    tier_id: number;
    fcm_token?: string;
    accessToken: string;
    refresh_token: string;
    chat_token: string;
    expired_at: number;
}

export default class CustomerTokenModel extends SingleModel<customerTonkenData> {
    table = "customer_token";
    validateApiCreate = {
        // 'userId': 'required'
    };
    fieldName(key: any) {
        const data: any = {
            session_id: "Mã phiên (session)",
            customer_id: "ID khách hàng",
            tier_id: "Hạng thành viên",
            fcm_token: "FCM Token",
            accessToken: "Access Token",
            refresh_token: "Refresh Token",
            chat_token: "Chat Token", // chat realtime
            expired_at: "Thời gian hết hạn (timestamp)",
        };
        return data[key] ?? key;
    }
    async createByCustomer(
        customer: any,
        req: FastifyRequest,
        refreshToken: string | false = false
    ) {
        let customerToken: any = false;
        if (refreshToken) {
            const params: any = {
                customer_id: customer.id,
                refresh_token: refreshToken,
            };
            // let customerToken = new CustomerTokenModel
            customerToken = await this.findOne(params);
            if (!customerToken) throw new Error("invalid_refresh_token");
            if (customerToken.us !== req.headers["user-agent"])
                throw new Error("invalid_refresh_token");
            if (customerToken.expired_refresh_at < Date.now())
                throw new Error("invalid_expired_refresh_token");
        } else {
            customerToken = {};
            customerToken.customer_id = customer.id;
            // customer_token.userId = user.id;
        }
        const JWT_TIMEOUT = Number(process.env.JWT_TIMEOUT || 3600);
        customerToken.expired_at = Date.now() + JWT_TIMEOUT * 500;
        customerToken.expired_refresh_at = Date.now() + 3 * 60 * 1000;
        customerToken.access_token = JWTAppCustomer.createToken(customer, req);
        customerToken.refresh_token = uuidv4();
        customerToken.session_id = customerToken.refresh_token;
        customerToken.ip = req.ip;
        customerToken.us = req.headers["user-agent"] || "unknown";
        // let mdClass = this.models.customertoken;
        const tokenId = await this.vdSave(
            customerToken,
            this.validateApiCreate
        );
        if (!tokenId) throw new Error("invalid_save_customer_token");
        return customerToken;
    }
    // async refreshToken(_this: any) {
    //     // const accessToken = String(this.req.headers['auth-token']);
    //     // const accessToken = String(this.req.cookies?.accessToken);
    //     const tokenObj = JWTAppCustomer.verifyToken(_this.req);
    //     const customerId = tokenObj.sub;
    //     // const userModel = new UserModel(_this.fastify.mysql);
    //     const customer = await _this.findOne({ id: customerId, is_deleted: 0, status: 1 });
    //     if (!customer) throw new Error("invalid_user_accessToken");
    //     const refreshToken = _this.req.cookies?.refreshToken;
    //     if (!refreshToken) throw new Error("invalid_refresh_token");
    //     const customer_token = await _this.createByCustomer(customer, _this.req, _this.db, refreshToken);
    //     return customer_token;
    // }

    async refreshToken(_this: any) {
        const authHeader = _this.req.headers["authorization"];

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            throw new Error("missing_authorization_header");
        }

        const refreshTokenGuid = authHeader.split(" ")[1];
        console.log(refreshTokenGuid);

        const tokenRecord = await this.findOne({
            refresh_token: refreshTokenGuid,
            // is_deleted: 0
        });
        console.log(tokenRecord);

        if (!tokenRecord || new Date(tokenRecord.expired_at) < new Date()) {
            throw new Error("invalid_or_expired_refresh_token");
        }

        const customer = await this.findOne({ id: tokenRecord.customer_id });
        if (!customer) throw new Error("customer_not_found");

        const customer_token = await this.createByCustomer(
            customer,
            _this.req,
            refreshTokenGuid
        );
        return customer_token;
    }
}
