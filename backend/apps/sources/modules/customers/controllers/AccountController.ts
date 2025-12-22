import Common from "@src/Common.js";
import CustomerController from "@src/controllers/CustomerController.js";

export default class AccountController extends CustomerController {
    async profile() {
        try {
            const item: any = await this.models.customer.findOne({ id: this.customer.id });
            if (!item) throw new Error("invalid_customer_id");
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
            const item = await this.models.customer.findOne({ id: this.customer.id })
            // console.log(item);if (customerId <= 0) {
            if (!item) throw new Error("invalid_customer_id");
            const mdClass = this.models.customer;
            const itemOld = { ...item };
            item.email = this.request.getPost('email');
            item.fullname = this.request.getPost('fullname');
            item.username = this.request.getPost('username');
            item.gender = this.request.getPost('gender');
            // item.phone = this.request.getPost('phone');
            item.birthday = this.request.getPost('birthday');
            item.updated_at = new Date();
            // item.avatar = Common.rmUploadPath(this.request.getPost('avatar'));
            const savedItem = await mdClass.vdSave(item, mdClass.validate);

            if (savedItem === false) {
                throw new Error("profile_validation_failed");
            }
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
            let item = await this.models.customer.findOne({ id: this.customer.id })
            if (!item) throw new Error("invalid_customer_id");
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
            const mdClass = this.models.customer
            if (!mdClass.validate(vds, mdClass.validatePassword)) {
                mdClass.getErrors().forEach((error: any) => {
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
}