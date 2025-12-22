import Common from '@src/Common.js';
import { JWTApp } from '@src/JWTApp.js';
import { google } from 'googleapis';
import CoreController from '@src/controllers/CoreController.js';
import svgCaptcha from 'svg-captcha';
export default class AuthController extends CoreController {
    async login() {
        try {
            if (!this.request.isPost()) throw new Error('invalid_method_403');
            const secretKey = this.request.getHeader('Secret-Key');
            if (!secretKey) throw new Error('invalid_empty_secretkey');
            JWTApp.checkSecretKey(secretKey);
            // const captcha = this.request.getPost('captcha');
            // const saveCaptcha = (this.req.session as any).captcha;
            // if (captcha !== saveCaptcha) throw new Error("invalid_captcha");
            // delete (this.req.session as any).captcha;
            const phone = this.request.getPost('phone');
            const password = this.request.getPost('password');
            const vds = {
                phone,
                password
            };
            const mdClass = this.models.customer;
            if (!(await mdClass.validate(vds, mdClass.validateLogin))) {
                mdClass.getErrors().forEach((error: any) => {
                    throw new Error(error);
                });
            }
            const customer = await mdClass.findOne({ phone, is_deleted: 0, status: 1 });

            if (!customer) throw new Error('invalid_customer_authentication');
            if (!await Common.checkPassword(password, customer.password)) {
                throw new Error('invalid_authentication');
            }
            const customerToken = await this.models.customertoken.createByCustomer(customer, this.req);

            return this.resJsonData({ message: 'login_success', accessToken: customerToken.access_token, refreshToken: customerToken.refresh_token, expired_at: customerToken.expired_at });
        } catch (error: any) {
            return this.resJsonErr(error.message);
        }
    }
    // async logout() {
    //     try {
    //         const refreshToken = this.req.cookies?.refreshToken;
    //         if (refreshToken) {
    //             this.res.clearCookie('refreshToken', { path: '/' });
    //             this.res.clearCookie('expired_at', { path: '/' });
    //             this.res.clearCookie('accessToken', { path: '/' });
    //             await this.models.customertoken.findOne({ refreshToken });
    //             return this.resJsonData({ msg: "logout_successful" });
    //         }
    //         return this.resJsonData({ msg: "logout_failed" });
    //     } catch (error: any) {
    //         return this.resJsonErr(error.message);
    //     }
    // }
    async logout() {
        try {
            const refreshToken = this.request.getPost('refreshToken');
            this.res.clearCookie('refreshToken', { path: '/' });
            this.res.clearCookie('expiredAt', { path: '/' });
            this.res.clearCookie('accessToken', { path: '/' });

            if (refreshToken) {
                const tokenRecord = await this.models.customertoken.findOne({
                    refresh_token: refreshToken,
                });

                if (tokenRecord) {

                    await this.models.customertoken.deleteOne({ id: tokenRecord.id });
                }

                return this.resJsonData({ message: "logout_successful" });
            }

            return this.resJsonData({ message: "logout_successful" });

        } catch (error: any) {
            console.error("Database error during logout:", error);
            return this.resJsonErr("logout_failed_server");
        }
    }
    // async refreshToken() {
    //     try {
    //         const customerToken = await this.models.customertoken.refreshToken(this);
    //         this.resJsonData({ expiredAt: customerToken.expired_at });
    //     } catch (error: any) {
    //         return this.resJsonErr(error.message);
    //     }
    // }
    async refreshToken() {
        try {

            // const authHeader = this.request.get("authorization");

            // if (!authHeader) {
            //     throw new Error('missing_authorization_header');
            // }

            const customerToken = await this.models.customertoken.refreshToken(this);

            this.resJsonData({
                expiredAt: customerToken.expired_at,
                // accessToken: customerToken.new_access_token
            });
        } catch (error: any) {
            return this.resJsonErr(error.message);
        }
    }
    async forget() {
        try {
            if (!this.request.isPost()) throw new Error('invalid_method_403');
            const phone = this.request.getPost('phone');
            const customer = await this.models.customer.findOne({ phone, is_deleted: 0 });
            if (!customer) throw new Error("invalid_customer_id");
            const mdClass = this.models.customerForget;
            const params: any = {};
            params.phone = phone;
            let forget: any = await mdClass.findOne(params);
            if (!forget) {
                forget = {};
                forget.phone = phone;
            }
            forget.reference_code = Math.floor(100000 + Math.random() * 900000);
            forget.updated_at = new Date();
            //Users.sendEmailForget(phone,user['fullname'],forget['otp']);
            await mdClass.vdSave(forget);
            this.resJsonData({ phone: phone, otp: forget.reference_code });
        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }
    async forgetConfirmOtp() {
        try {
            if (!this.request.isPost()) throw new Error('invalid_method_403');
            const mdClass = this.models.customerForget;
            const phone = this.request.getPost('phone');
            const reference_code = this.request.getPost('otp');
            const forget = await mdClass.findOne({ phone, reference_code });
            if (!forget) {
                throw new Error('invalid_otp');
            }
            // if(strtotime('+5 minutes', strtotime(forget['updated_at'])) < strtotime('now')){
            //     throw new Error("invalid_otp_expired");
            // }
            forget.updated_at = new Date();
            await mdClass.vdSave(forget);
            this.resJsonData({
                message: "OTP confirmed successfully. You can now set a new password.",
                phone: phone,
                reference_code: forget.reference_code
            });
        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }
    async forgetResendOtp() {
        try {
            if (!this.request.isPost()) throw new Error('invalid_method_403');
            const mdClass = this.models.customerForget;
            const phone = this.request.getPost('phone');
            const forget = await mdClass.findOne({ phone });
            if (!forget) throw new Error('invalid_phone');

            const customer = await this.models.customer.findOne({ phone, is_deleted: 0 });
            if (!customer) throw new Error("invalid_customer_id");

            const otp = forget.reference_code = Math.floor(100000 + Math.random() * 900000);
            forget.updated_at = new Date();
            await mdClass.vdSave(forget);
            // Users.sendEmailForget(phone,user['fullname'],forget['otp']);
            this.resJsonData(otp);
        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }
    async forgetPassword() {
        try {
            // $db = \Model.openConnection();
            // $db.beginTransaction();
            if (!this.request.isPost()) throw new Error('invalid_method_403');
            const phone = this.request.getPost('phone');
            const reference_code = this.request.getPost('reference_code');
            const password = this.request.getPost('password');
            const customerforgetClass = this.models.customerForget;
            const forget = await customerforgetClass.findOne({ phone: phone, reference_code: reference_code });
            if (!forget) throw new Error('invalid_otp');

            // if(strtotime('+5 minutes', strtotime(forget['updated_at'])) < strtotime('now')){
            //     throw new Error("invalid_otp_expired");
            // }
            const customerClass = this.models.customer;
            const customer = await customerClass.findOne({ phone: phone, is_deleted: 0 });

            if (!customer) throw new Error('invalid_forget');
            const vds = {
                phone: phone,
                password: password,
            };
            if (!customerClass.validate(vds, customerClass.validateForgetPassowrd)) {
                customerClass.getErrors().forEach((error: any) => {
                    throw new Error(error);
                });
            }

            customer.password = await Common.makePassword(password);

            customer.updated_at = new Date();
            // const customerId = await customerClass.vdSave(customer);
            // user['id'] = userId;
            if (!forget.id) {
                throw new Error('forget_id_missing');
            }
            await customerforgetClass.deleteOne({ id: forget.id });
            // throw new Error("1");

            // $db.commit();
            await customerClass.vdSave(customer);
            this.resJsonData({
                message: "Password reset successful!",
                phone: phone
            })
        } catch (error: any) {
            // $db.rollBack();
            this.resJsonErr(error.message);
        }
    }
    async getCaptcha() {
        try {
            const captcha = svgCaptcha.create({
                size: 2,
                noise: 3,
                color: true,
                background: '#cc9966',
                ignoreChars: '0o1il'
            });
            // const captchaId = uuidv4();
            (this.req.session as any).captcha = captcha.text;
            this.res.type('image/svg+xml');
            this.res.send(captcha.data);
        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }
    async redirectToGoogle() {
        try {
            const oauth2Client = new google.auth.OAuth2({
                clientId: process.env.GOOGLE_CLIENT_ID_1!,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET_1!,
                redirectUri: process.env.CALLBACK_URL_CUSTOMERS!,
            });
            const url = oauth2Client.generateAuthUrl({
                access_type: "offline",
                scope: ["openid", "profile", "email"],
                prompt: "consent",
                redirect_uri: "http://localhost:3000/customers/googleCallback",
                client_id: process.env.GOOGLE_CLIENT_ID_1,
            });
            this.res.redirect(url);
        } catch (err: any) {
            this.res.status(400).send({ msg: err.message });
        }
    }
    async googleCallback() {
        try {
            const oauth2Client = new google.auth.OAuth2({
                clientId: process.env.GOOGLE_CLIENT_ID_1!,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET_1!,
                redirectUri: process.env.CALLBACK_URL_CUSTOMERS!,
            });
            const code = this.request.get("code");
            if (!code) throw new Error("missing_code");
            const { tokens } = await oauth2Client.getToken(code);
            oauth2Client.setCredentials(tokens);
            const idToken = tokens.id_token;
            if (!idToken) throw new Error("invaild_idToken");
            const ticket = await oauth2Client.verifyIdToken({
                idToken,
                audience: process.env.GOOGLE_CLIENT_ID_1,
            });
            const payload = ticket.getPayload();
            // const { sub: googleId, email } = payload!;
            const { sub: googleId, email, name, picture: avatar } = payload!;
            const mdClass = this.models.customer;
            let item: any = await mdClass.findOne({ google_id: googleId });
            console.log(item);
            const formatTimestamp = (date: Date) => {
                // 1. Dùng .toISOString() để có chuỗi 'YYYY-MM-DDTHH:mm:ss.sssZ'
                // 2. Dùng .slice(0, 19) để cắt bỏ phần mili giây và Z (ví dụ: '2025-10-25T06:03:47')
                // 3. Dùng .replace('T', ' ') để thay thế 'T' bằng khoảng trắng (ví dụ: '2025-10-25 06:03:47')
                return date.toISOString().slice(0, 19).replace('T', ' ');
            };
            const now = new Date();
            if (!item) {
                item = await mdClass.findOne({ email });
            }
            if (item) {
                item.google_id = googleId;
                item.email = email;
                item.status = 1;
                item.updated_at = formatTimestamp(now);
                item = await mdClass.vdSave(item, mdClass.validate);
            } else {
                const newCustomer = {
                    google_id: googleId,
                    email: email,
                    fullname: name,
                    avatar: avatar,
                    status: 1,
                    created_at: formatTimestamp(now),
                    updated_at: formatTimestamp(now),
                };
                item = await mdClass.vdSave(newCustomer, mdClass.validate);
            }
            // item = await mdClass.vdSave(item, mdClass.validate);
            await this.models.customertoken.createByCustomer(item, this.req);
            const frontendUrl = process.env.SITE_URL || "http://localhost:5173";
            this.res.redirect(frontendUrl);

        } catch (err: any) {
            this.res.status(400).send({ msg: err.message });
        }
    }
}
