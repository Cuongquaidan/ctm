import Common from '@src/Common.js';
// import { google } from 'googleapis';
import { JWTApp } from '@src/JWTApp.js';
import CoreController from '@src/controllers/CoreController.js';

export default class AuthController extends CoreController {
    async register() {
        // await this.models.customerregister.getConnection();
        try {
            // await this.models.customerregister.conn.beginTransaction()
            if (!this.request.isPost()) throw new Error('invalid_method_403');
            const secretKey = this.request.getHeader('Secret-Key');
            // const captcha = this.request.getPost('captcha');
            // const saveCaptcha = (this.req.session as any).captcha;
            // if (captcha !== saveCaptcha) throw new Error("invalid_captcha");
            if (!secretKey) throw new Error('invaild_empty_secretkey');
            JWTApp.checkSecretKey(secretKey);
            const registerClass = this.models.customerRegister;
            const vds = {
                phone: this.request.getPost("phone"),
                name: this.request.getPost("name"),
                captcha: this.request.getPost("captcha"),
                referral_code: this.request.getPost("referral_code")
            };
            if (!(await registerClass.validate(vds, registerClass.validateRegister))) {
                registerClass.getErrors().forEach((error: any) => {
                    throw new Error(error);
                });
            }
            if (vds.referral_code) {
                const ref = await this.models.customer.findOne({ phone: vds.referral_code });
                if (!ref) throw new Error('invalid_referral_code');
            }
            const register = await registerClass.createItem(vds);
            return this.resJsonData(register);
        } catch (err: any) {
            // await this.models.customerregister.conn.rollback();
            return this.resJsonErr(err.message);
        }
    }
    async registerConfirmOtp() {
        try {
            if (!this.request.isPost()) throw new Error('invalid_method_403');
            const mdRegister = this.models.customerRegister;
            // const captcha = this.request.getPost('captcha');
            // const saveCaptcha = (this.req.session as any).captcha;
            // if (captcha !== saveCaptcha) throw new Error("invalid_captcha");
            // const phone = this.request.getPost('phone');
            // const reference_code = this.request.getPost('reference_code');
            const phone = this.request.getPost("phone");
            const name = this.request.getPost("name");
            const referral_code = this.request.getPost("referral_code");

            if (!this.request.isPost()) throw new Error('invalid_method_403');

            const vds = { phone, name, referral_code };
            const mdCustomer = this.models.customer;
            if (!(await mdCustomer.validate(vds, mdCustomer.validateRegister))) {
                mdCustomer.getErrors().forEach((error: any) => {
                    throw new Error(error);
                });
            }

            const register = await mdRegister.findOne({ phone, referral_code })

            if (!register) {
                throw new Error('invalid_customerregister');
            }
            // if(strtotime('+5 minutes', strtotime(forget['updated_at'])) < strtotime('now')){
            //     throw new Error("invalid_otp_expired");
            // }
            const password = this.request.getPost('password');
            const confirmPassword = this.request.getPost('confirmPassword');
            if (!password || password !== confirmPassword) {
                throw new Error('password_mismatch');
            }
            const hashedPassword = await Common.makePassword(password);
            const customerData: any = {};
            if (register.phone) customerData.phone = register.phone;
            if (register.username) customerData.username = register.username;
            if (register.email) customerData.email = register.email;
            if (register.avatar) customerData.avatar = register.avatar;
            if (register.referral_code) customerData.referral_code = register.referral_code;
            customerData.fullname = register.name;
            customerData.password = hashedPassword;
            customerData.status = 1;
            customerData.created_at = new Date();
            customerData.updated_at = new Date();
            const customer = await mdCustomer.vdSave(customerData);

            if (!customer) throw new Error('failed_to_save_customer');
            await mdRegister.deleteOne({ id: register.id });

            this.resJsonData({
                message: 'register_confirm_success',
                customer: {
                    id: customer.id,
                    fullname: customer.fullname,
                    email: customer.email,
                },
            });
        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }
    async registerResendOtp() {
        try {
            if (!this.request.isPost()) throw new Error('invalid_method_403');
            const mdClass = this.models.customerRegister;
            const phone = this.request.getPost('phone');
            const customerregister = await mdClass.findOne({ phone: phone });

            if (!customerregister) {
                throw new Error('invalid_404');
            }
            const otp = customerregister.reference_code = Math.floor(100000 + Math.random() * 900000);
            customerregister.updated_at = new Date();
            await mdClass.vdSave(customerregister);
            // Users.sendEmailForget(email,user['fullname'],forget['otp']);
            this.resJsonData({ phone, otp });
        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }
}
