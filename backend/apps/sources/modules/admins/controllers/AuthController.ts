import Common from '@src/Common.js';
import { JWTApp } from '@src/JWTApp.js';
// import { OAuth2Client, TokenPayload } from 'google-auth-library';
import { google } from 'googleapis';
import CoreController from '@src/controllers/CoreController.js';
import svgCaptcha from 'svg-captcha';
// const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
export default class AuthController extends CoreController {
    async login() {
        try {
            if (!this.request.isPost()) throw new Error('invalid_method_403');
            const secretKey = this.request.getHeader('Secret-Key');
            if (!secretKey) throw new Error('invaild_empty_secretkey');
            JWTApp.checkSecretKey(secretKey);
            // const captcha = this.request.getPost('captcha');
            // const saveCaptcha = (this.req.session as any).captcha;
            // if (captcha !== saveCaptcha) throw new Error("invalid_captcha");
            // delete (this.req.session as any).captcha;
            const username = this.request.getPost('username');
            const password = this.request.getPost('password');
            const vds = {
                username,
                password
            };
            const mdClass = this.models.user;
            if (!(await mdClass.validate(vds, mdClass.validateLogin))) {
                mdClass.getErrors().forEach((error: any) => {
                    throw new Error(error);
                });
            }
            // const md = new UserModel(this.fastify.mysql, 'users');
            // const user = await md.findOne({ username, is_deleted: 0, status: 1 });
            // const md = this.models.users;
            const user = await mdClass.findOne({ username, is_deleted: 0, status: 1 });
            if (!user) throw new Error('invalid_user_authentication');
            if (!await Common.checkPassword(password, user.password)) {
                throw new Error('invalid_authentication');
            }
            const userToken = await this.models.usertoken.createByUser(user, this.req);
            this.res.setCookie('refreshToken', userToken.refreshToken, {
                httpOnly: true,
                secure: true,
                sameSite: 'strict',
                path: '/',
                maxAge: 60 * 60 * 24 * 7
            })
            this.res.setCookie('accessToken', userToken.accessToken, {
                httpOnly: true,
                secure: true,
                sameSite: 'strict',
                path: '/',
                maxAge: 60 * 60 * 24 * 7
            });
            return this.resJsonData({ accessToken: userToken.accessToken, expiredAt: userToken.expiredAt });
        } catch (error: any) {
            return this.resJsonErr(error.message);
        }
    }
    async logout() {
        try {
            const refreshToken = this.req.cookies?.refreshToken;
            if (refreshToken) {
                this.res.clearCookie('refreshToken', { path: '/' });
                this.res.clearCookie('expiredAt', { path: '/' });
                this.res.clearCookie('accessToken', { path: '/' });
                await this.models.usertoken.findOne({ refreshToken });
                return this.resJsonData({ msg: "logout_successful" });
            }
            return this.resJsonData({ msg: "logout_failed" });
        } catch (error: any) {
            return this.resJsonErr(error.message);
        }
    }
    async refreshToken() {
        try {
            const userToken = await this.models.usertoken.refreshToken(this);
            this.resJsonData({ expiredAt: userToken.expiredAt });
        } catch (error: any) {
            return this.resJsonErr(error.message);
        }
    }
    async forget() {
        try {
            if (!this.request.isPost()) throw new Error('invalid_method_403');
            const email = this.request.getPost('email');
            const user = await this.models.user.findOne({ email, is_deleted: 0 });
            if (!user) {
                throw new Error('invalid_404');
            }
            const mdClass = this.models.userforget;
            const params: any = {};
            params.email = email;
            let forget: any = await this.models.user.findOne(params);
            if (!forget) {
                forget = {};
                forget.email = email;
            }
            forget.otp = Math.floor(100000 + Math.random() * 900000);
            forget.updated_at = Date.now();
            // Users.sendEmailForget(email,user['fullname'],forget['otp']);
            await mdClass.vdSave(forget);
            this.resJsonData({ email: email, otp: forget.otp });
        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }
    async forgetConfirmOtp() {
        try {
            if (!this.request.isPost()) throw new Error('invalid_method_403');
            const mdClass = this.models.userforget;
            const email = this.request.getPost('email');
            const otp = this.request.getPost('otp');
            const forget = await mdClass.findOne({ email, otp });
            if (!forget) {
                throw new Error('invalid_otp');
            }
            // if(strtotime('+5 minutes', strtotime(forget['updated_at'])) < strtotime('now')){
            //     throw new Error("invalid_otp_expired");
            // }
            forget.updated_at = new Date();
            await mdClass.vdSave(forget);
            this.resJsonData({ otp: forget.otp });
        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }
    async forgetResendOtp() {
        try {
            if (!this.request.isPost()) throw new Error('invalid_method_403');
            const mdClass = this.models.userforget;
            const email = this.request.getPost('email');
            const forget = await mdClass.findOne({ email });
            if (!forget) throw new Error('invalid_email');

            const user = await this.models.user.findOne({ email, is_deleted: 0 });
            if (!user) {
                throw new Error('invalid_404');
            }
            forget.otp = Math.floor(100000 + Math.random() * 900000);
            forget.updated_at = new Date();
            await mdClass.vdSave(forget);
            // Users.sendEmailForget(email,user['fullname'],forget['otp']);
            this.resJsonData({ email });
        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }
    async forgetPassword() {
        try {
            // $db = \Model.openConnection();
            // $db.beginTransaction();
            if (!this.request.isPost()) throw new Error('invalid_method_403');
            const email = this.request.getPost('email');
            const otp = this.request.getPost('otp');
            const password = this.request.getPost('password');
            const userforgetClass = this.models.userforget;
            const forget = await userforgetClass.findOne({ email, otp });
            if (!forget) throw new Error('invalid_otp');

            // if(strtotime('+5 minutes', strtotime(forget['updated_at'])) < strtotime('now')){
            //     throw new Error("invalid_otp_expired");
            // }
            const userClass = this.models.user;
            const user = await userClass.findOne({ email, is_deleted: 0 });
            if (!user) throw new Error('invalid_forget');
            const vds = {
                email: email,
                password: password,
            };
            if (!userClass.validate(vds, userClass.validateForgetPassowrd)) {
                userClass.getErrors().forEach((error: any) => {
                    throw new Error(error);
                });
            }
            user.password = await Common.makePassword(password);
            user.updated_at = new Date();
            await userClass.vdSave(user);
            // user['id'] = userId;
            await userforgetClass.deleteOne(forget.id);
            // $db.commit();
            this.resJsonData({ email });
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
                clientId: process.env.GOOGLE_CLIENT_ID!,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
                redirectUri: process.env.CALLBACK_URL!,
            });
            const url = oauth2Client.generateAuthUrl({
                access_type: "offline",
                scope: ["openid", "profile", "email"],
                prompt: "consent",
                redirect_uri: "http://localhost:3000/googleCallback",
                client_id: process.env.GOOGLE_CLIENT_ID,

            });
            this.res.redirect(url);
        } catch (err: any) {
            this.res.status(400).send({ msg: err.message });
        }
    }
    async googleCallback() {
        try {
            const oauth2Client = new google.auth.OAuth2({
                clientId: process.env.GOOGLE_CLIENT_ID!,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
                redirectUri: process.env.CALLBACK_URL!,
            });
            const code = this.request.get("code");
            if (!code) throw new Error("missing_code");
            const { tokens } = await oauth2Client.getToken(code);
            oauth2Client.setCredentials(tokens);
            const idToken = tokens.id_token;
            if (!idToken) throw new Error("invaild_idToken");
            const ticket = await oauth2Client.verifyIdToken({
                idToken,
                audience: process.env.GOOGLE_CLIENT_ID,
            });
            const payload = ticket.getPayload();
            const { sub: googleId, email } = payload!;
            const mdClass = this.models.user;
            let item: any = await mdClass.findOne({ googleId });
            if (!item) throw new Error("invalid_user");
            // const itemOld = { ...item };
            item.googleId = googleId;
            item.googleEmail = email;
            item.updated_at = new Date();
            item = await mdClass.vdSave(item, mdClass.validate);
            const userToken = await this.models.usertoken.createByUser(item, this.req);
            this.res.setCookie('refreshToken', userToken.refreshToken, {
                httpOnly: true,
                secure: true,
                sameSite: 'strict',
                path: '/',
                maxAge: 60 * 60 * 24 * 7
            })
            this.res.setCookie('accessToken', userToken.accessToken, {
                httpOnly: true,
                secure: true,
                sameSite: 'strict',
                path: '/',
                maxAge: 60 * 60 * 24 * 7
            });
            const frontendUrl = process.env.SITE_URL || "http://localhost:5173";
            this.res.redirect(frontendUrl);

        } catch (err: any) {
            this.res.status(400).send({ msg: err.message });
        }
    }
}
