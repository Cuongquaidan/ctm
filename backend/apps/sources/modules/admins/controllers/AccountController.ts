import Common from "@src/Common.js";
import AdminController from "@src/controllers/AdminController.js";
import { google } from "googleapis";
// const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
export default class AccountController extends AdminController {
    async profile() {
        try {
            // Gọi static findOne với connection

            const item: any = await this.models.user.findOne(this.user.id);

            if (!item) throw new Error("invalid_500");

            item.password = null;
            item.groupName = await this.models.groups.getName(item.group_id);

            this.resJsonData(item);

        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }

    async editProfile() {
        try {
            // $db = UserModel.openConnection();
            // $db.beginTransaction();
            let item = await this.models.user.findOne({ 'id': this.user.id })
            if (!item) throw new Error("invalid_500");
            const mdClass = this.models.user;
            const itemOld = { ...item };
            item.email = this.request.getPost('email');
            item.fullname = this.request.getPost('fullname');
            item.username = this.request.getPost('username');
            item.gender = this.request.getPost('gender');
            item.group_id = this.request.getPost('group_id');
            item.phone = this.request.getPost('phone');
            item.updated_at = new Date();
            // item.avatar = Common.rmUploadPath(this.request.getPost('avatar'));
            item = await mdClass.vdSave(item, mdClass.validate);
            item.password = null;
            itemOld.password = null;
            // Logs.saveLogs(this.userId,1,mdClass.$table,item,itemOld);
            // UserModel.deleteDir(itemId);
            // $db.commit();
            this.resJsonData(item);
        } catch (error: any) {
            // $db.rollBack();
            this.resJsonErr(error.message);
        }
    }
    async changePassword() {
        try {
            // $db = Model.openConnection();
            // $db.beginTransaction();
            if (!this.request.isPost()) throw new Error("invalid_post_403");
            let item = await this.models.user.findOne({ '_id': this.user.id })
            if (!item) throw new Error("invalid_500");
            // const itemOld = { ...item };
            const currentPassword = this.request.getPost("currentPassword");
            const confirmPassword = this.request.getPost("confirmPassword");
            const password = this.request.getPost("password");
            if (password !== confirmPassword) {
                throw new Error('Mật khẩu và xác nhận mật khẩu không khớp.');
            }
            if (!Common.checkPassword(currentPassword, item.password)) {
                throw new Error("invalid_500");
            }
            const vds = {
                'password': password
            };
            const mdClass = this.models.user
            if (!mdClass.validate(vds, mdClass.validatePassword)) {
                mdClass.getErrors().forEach((error: string) => {
                    throw new Error(error);
                });
            }
            item.password = await Common.makePassword(this.request.getPost("password"));
            item = await mdClass.vdSave(item);
            // Logs.saveLogs(this.userId,2,mdClass.$table,item,itemOld);
            // UserModel.deleteDir(itemId);
            // $db.commit();
            item.password = null
            this.resJsonData(item);
        } catch (error: any) {
            // $db.rollBack();
            this.resJsonErr(error.message);
        }
    }
    async redirectToLinkGoogle() {
        try {
            // Chỉ cho phép user đã login
            if (!this.userObjectId) throw new Error("unauthorized_401");
            const item: any = await this.models.user.findOne({ '_id': this.user.id });
            if (!item) throw new Error("invalid_500");

            const oauth2Client = new google.auth.OAuth2({
                clientId: process.env.GOOGLE_CLIENT_ID!,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
                redirectUri: process.env.GOOGLE_LINK_CALLBACK_URL!,
            });

            const url = oauth2Client.generateAuthUrl({
                access_type: "offline",
                scope: ["openid", "profile", "email"],
                prompt: "consent",
            });

            this.res.redirect(url);
        } catch (err: any) {
            this.res.status(400).send({ msg: err.message });
        }
    }

    async linkGoogleCallback() {
        try {
            // Xác nhận user đang login
            const mdClass = this.models.user;
            if (!this.userObjectId) throw new Error("unauthorized_401");
            let item: any = await this.models.user.findOne({ 'id': this.user.id });
            if (!item) throw new Error("invalid_500");

            const oauth2Client = new google.auth.OAuth2({
                clientId: process.env.GOOGLE_CLIENT_ID!,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
                redirectUri: process.env.GOOGLE_LINK_CALLBACK_URL!,
            });

            const code = this.request.get("code");

            if (!code) throw new Error("invalid_code");

            // B1: Đổi code lấy id_token
            const { tokens } = await oauth2Client.getToken(code);
            oauth2Client.setCredentials(tokens);

            const idToken = tokens.id_token;
            if (!idToken) throw new Error("invalid_id_token");

            // B2: Verify id_token
            const ticket = await oauth2Client.verifyIdToken({
                idToken,
                audience: process.env.GOOGLE_CLIENT_ID,
            });
            const payload = ticket.getPayload();
            if (!payload) throw new Error("invalid_token");

            const { sub: googleId, email } = payload;

            // B3: Kiểm tra user hiện tại
            const currentUser: any = await this.models.user.findOne({ id: this.user.id });
            if (!currentUser) throw new Error("invalid_user_404");

            // B4: Kiểm tra Google account đã liên kết với người khác chưa
            const existed = await this.models.user.findOne({
                $or: [{ googleId }, { googleEmail: email }],
                id: { $ne: this.user.id },
            });
            if (existed) throw new Error("google_account_already_linked");

            // B5: Lưu vào tài khoản hiện tại
            // const itemOld = item.toJSON();
            currentUser.googleId = googleId;
            currentUser.googleEmail = email;
            item = await mdClass.vdSave(item, mdClass.validate);

            const frontendUrl = process.env.SITE_URL || "http://localhost:5173";
            this.res.redirect(`${frontendUrl}/account?linked=success`);
        } catch (err: any) {
            const frontendUrl = process.env.SITE_URL || "http://localhost:5173";
            this.res.redirect(`${frontendUrl}/account?error=${encodeURIComponent(err.message)}`);
        }
    }

    async unlinkGoogle() {
        try {
            const mdClass = this.models.user;
            if (!this.userObjectId) throw new Error("unauthorized_401");
            let item: any = await this.models.user.findOne({ id: this.user.id });
            if (!item) throw new Error("invalid_user_404");

            const currentUser = await this.models.user.findOne({ id: this.user.id });
            if (!currentUser) throw new Error("invalid_user_404");

            // const itemOld = item.toJSON();
            currentUser.googleId = null;
            currentUser.googleEmail = null;
            item = await mdClass.vdSave(item, mdClass.validate);

            this.resJsonData({ msg: "unlink_google_success" });
        } catch (err: any) {
            this.resJsonErr(err.message);
        }
    }

}