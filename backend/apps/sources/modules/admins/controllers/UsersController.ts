import Common from '@src/Common.js';
import SingleController from '@src/controllers/SingleController.js';
export default class UsersController extends SingleController {
    md = this.models.user;
    actionActive = ['index', 'create', 'detail', 'edit', 'delete', 'deleteone'];
    is_deleted = true;
    async updateBefore(item: this['md']['td']) {
        // itemId = (int)Common::getValue([item,'id']);
        item.fullname = this.request.getPost('fullname');
        item.phone = this.request.getPost('phone');
        item.gender = this.request.getPost('gender');
        item.email = this.request.getPost('email');
        item.status = this.request.getPost('status');
        item.group_id = this.request.getPost('group_id');
        if (!item.group_id) throw new Error('invalid_group');
        if (item.group_id === 1) throw new Error("invaild_group");
        const group = await this.models.groups.getById(item.group_id);
        if (!group) throw new Error("invaild_group");
        item.group_id = group.id;
        if (!item.id) {
            item.username = this.request.getPost('username');
            const password = this.request.getPost('password');
            const confirmPassword = this.request.getPost('confirmPassword');
            if (password) {
                if (password !== confirmPassword) {
                    throw new Error('Mật khẩu và xác nhận mật khẩu không khớp.');
                }
                if (!(await this.md.validate({ password }, this.md.validatePassword))) {
                    this.md.getErrors().forEach((error: string) => {
                        throw new Error(error);
                    });
                }
                item.password = await Common.makePassword(password);
            }
        }
        return item;
    }
}
