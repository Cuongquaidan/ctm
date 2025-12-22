import { JWTApp } from "@src/JWTApp.js";
import CoreController from "./CoreController.js";
export default class AdminController extends CoreController {
    async beforeRouter() {
        try {
            const tokenObj = await this.checkToken();
            const userId = tokenObj.sub;
            const user = await this.models.user.findOne({ id: userId, status: 1 });
            if (!user) throw new Error("invalid_user");
            this.user = user;
            this.userId = Number(userId);
            this.userObjectId = user.id;
            this.groupId = user.groupId;
            const controllerName = typeof this.controller === 'function' ? this.controller.name.charAt(0).toLowerCase() + this.controller.name.slice(1) : this.controller;
            if (!await this.models.permission.checkPermission(this.module, controllerName, this.action, this.params, this.groupId)) {
                throw new Error("invalid_permission_403");
            }
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
    async checkToken() {
        // const accessToken = String(this.req.headers['auth-token']);
        // const accessToken = String(this.req.cookies?.accessToken);
        const tokenObj = JWTApp.verifyToken(this.req);
        const userId = tokenObj.sub;
        const userToken = await this.models.usertoken.findOne({ userId: userId, accessToken: tokenObj.accessToken });
        if (!userToken) {
            throw new Error("invalid_user_token");
        }
        if (userToken.expiredRefreshAt < Date.now()) throw new Error("invalid_expired_refresh_token");
        if (userToken.expiredAt < Date.now()) await this.models.usertoken.refreshToken(this);
        return tokenObj;
    }
}