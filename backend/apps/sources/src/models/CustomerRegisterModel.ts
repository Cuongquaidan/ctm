import SingleModel from '@src/SingleModel.js';
import { Request } from '@src/Request.js';
import Common from '@src/Common.js';

export interface CustomerRegisterData {
    id?: number;
    google_id?: string;
    facebook_id?: string;
    apple_id?: string;
    phone?: string;
    username?: string;
    email?: string;
    name?: string;
    avatar?: string;
    reference_code: number;
    referral_code?: string;
    created_at?: string;
    updated_at?: string;
}

export default class CustomerRegisterModel extends SingleModel<CustomerRegisterData> {
    table = 'customer_register';
    vdObject = {
        reference_code: 'required|maxLen(10)',
        username: 'required|maxLen(100)|unique(customer_register,username)',
        email: 'required|unique(customer_register,email)|email',
        phone: 'maxLen(20)|unique(customer_register,phone)|phoneVn',
        name: 'maxLen(150)',
        avatar: 'maxLen(256)',
        referral_code: 'maxLen(15)',
    };
    validateRegister = {
        name: 'required|maxLen(200)',
        phone: 'required|unique(customers,phone)|phoneVn',
        // captcha: "required|captcha",
    }
    validateCreate = {
        name: 'required|maxLen(200)',
        // email: 'required|unique(customer_register,email)|email',
        phone: 'required|unique(customers,phone)|phoneVn',
    };
    fieldName(key: any) {
        const data: any = {
            google_id: 'Google ID',
            facebook_id: 'Facebook ID',
            apple_id: 'Apple ID',
            phone: 'Số điện thoại',
            username: 'Tên đăng nhập',
            email: 'Email',
            name: 'Họ & tên',
            avatar: 'Ảnh đại diện',
            reference_code: 'Mã đăng ký',
            referral_code: 'Mã giới thiệu',
            created_at: 'Ngày tạo',
            updated_at: 'Ngày cập nhật',
        };
        return data[key] ?? key;
    }
    async getDatas(
        request: Request,
        _customer: any,
        _is_deleted: any
    ): Promise<{
        page: number;
        pageLen: number;
        pageTotal: number;
        recordTotal: number;
        data: CustomerRegisterData[];
    }> {
        const nameSh = request.get("nameSh");
        const emailSh = request.get("emailSh");
        const phoneSh = request.get("phoneSh");

        const whereParts: string[] = [];

        if (nameSh) {
            const keyword = `%${nameSh}%`;
            whereParts.push(`customer_register.name LIKE '${keyword}'`);
        }

        if (emailSh) {
            const keyword = `% ${emailSh}% `;
            whereParts.push(`customer_register.email LIKE '${keyword}'`);
        }

        if (phoneSh) {
            const keyword = `% ${phoneSh}% `;
            whereParts.push(`customer_register.phone LIKE '${keyword}'`);
        }

        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";

        const page = parseInt(request.get("page", "1"));
        const pageLen = parseInt(request.get("pageLen", "10"));

        const data = await this.findWithPagination(
            whereClause,
            { "customer_register.created_at": "DESC" },
            page,
            pageLen
        );

        return {
            page: data.page,
            pageLen: data.length,
            pageTotal: data.pageTotal,
            recordTotal: data.recordTotal,
            data: data.items,
        };
    }
    async createItem(item: any, googleId: string | null = null, facebookId: string | null = null) {
        const phone = item.phone || 0;
        let register = await this.findOne({ phone });
        // Nếu không có thì tạo mới
        if (!register) {
            register = {
                phone: phone,
                google_id: googleId,
                facebook_id: facebookId,
                created_at: Common.dateNow()
            };
        }
        // Giữ giá trị cũ nếu đã có, còn không thì gán giá trị mới
        register.google_id = register.google_id || googleId;
        register.facebook_id = register.facebook_id || facebookId;
        // Các field khác
        register.name = item.name;
        register.email = item.email || "";
        register.referral_code = item.referral_code || "";
        register.avatar = item.avatar || "";
        // Tạo mã tham chiếu 6 số
        register.reference_code = Math.floor(Math.random() * 900000) + 100000;
        register.updated_at = Common.dateNow();
        // Validate & Save
        return await this.vdSave(register, this.validateCreate);
    }
    async createByUser(item: Record<string, any>) {
        const filter: Record<string, any> = {};
        const phone = item.username || "";
        const name = item.fullname || "";
        const email = item.email || "";
        filter.phone = phone;
        const register = await this.findOne(filter);
        if (!register || register.name !== name || register.email !== email) {
            if (register?.id) {
                await this.deleteOne({ id: register.id });
            }

            const newRegister: Record<string, any> = {
                phone: phone,
                name: name,
                email: email,
                created_at: Common.dateNow(), // giờ Việt Nam chuẩn
                updated_at: Common.dateNow(),
                reference_code: Math.floor(Math.random() * 900000) + 100000, // random 6 chữ số
                // avatar: Common.getValue([item], "avatar") // nếu muốn lưu avatar
            };
            return await this.vdSave(newRegister, this.validateCreate);
        }
        return register;
    }
}
