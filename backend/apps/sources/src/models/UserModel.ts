import SingleModel from '../SingleModel.js';
import { Request } from '../Request.js';

export interface UserData {
    id?: number;
    username?: string;
    fullname?: string;
    phone?: string;
    email: string;
    password?: string;
    avatar?: string;
    gender?: number;
    status?: number;
    group_id?: number;
    googleId?: string;
    group?: any;
    created_at?: string;
    created_by?: number;
    updated_at?: string;
    updated_by?: number;
    is_deleted?: number;
}

export default class UserModel extends SingleModel<UserData> {
    table = 'users';
    // static type = {} as UserData;
    vdObject = {
        fullname: 'required|minLen(2)|maxLen(250)',
        username: 'required|minLen(2)|unique(users,username)',
        // username: 'required|minLen(2)',
        email: 'required|unique(users,email)|email',
        // email: 'required|email',
        // password: 'required|password',
    };

    validateLogin = {
        username: 'required',
        password: 'required|password',
    };

    validateForgetPassowrd = {
        email: 'required|maxLen(150)',
        referenceCode: 'required',
        password: 'required|password',
    };

    validatePassword = {
        password: 'required|password',
    };

    validateProfile = {
        fullname: 'required|minLen(2)|maxLen(250)',
        email: 'required|email|unique(users,email)',
    };

    fieldName(key: any) {
        const data: any = {
            username: 'Tên đăng nhập',
            avatar: 'Hình ảnh',
            fullname: 'Họ & tên',
            email: 'E-mail',
            phone: 'Số điện thoại',
            gender: 'Giới tính',
            birthday: 'Ngày sinh',
            countryId: 'Quốc gia',
            provinceId: 'Tỉnh/Thành phố',
            districtId: 'Quận/Huyện',
            wardId: 'Phường/Xã',
            address: 'Số nhà, tên đường',
            fulladdress: 'Địa chỉ',
            password: 'Mật khẩu',
            facebookId: 'Facebook ID',
            googleId: 'Google ID',
            note: 'Ghi chú',
            referral_code: 'Mã giới thiệu',
            status: 'Trạng thái',
            confirm_failed: 'Lý do từ chối xác minh',
            created_at: 'Thời gian tạo',
        };
        return data[key] ?? key;
    }

    async getDatas(
        request: Request,
        user: any,
        is_deleted: any
    ): Promise<{
        page: number;
        pageLen: number;
        pageTotal: number;
        recordTotal: number;
        data: UserData[];
    }> {
        const nameSh = request.get("nameSh");
        const emailSh = request.get("emailSh");
        const statusSh = request.get("statusSh");

        const whereParts: string[] = [];

        if (nameSh) {
            const keyword = `%${nameSh}%`;
            whereParts.push(`(users.fullname LIKE '${keyword}' OR users.username LIKE '${keyword}')`);
        }

        if (emailSh) {
            const keyword = `%${emailSh}%`;
            whereParts.push(`users.email LIKE '${keyword}'`);
        }

        if (statusSh) {
            whereParts.push(`users.status = ${Number(statusSh)}`);
        }

        if (is_deleted === true || is_deleted === 0 || is_deleted === "true") {
            whereParts.push(`users.is_deleted = 0`);
        }

        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";

        const page = parseInt(request.get("page", "1"));
        const pageLen = parseInt(request.get("pageLen", "10"));

        const data = await this.findWithPagination(
            whereClause,
            { "users.created_at": "ASC" },
            page,
            pageLen,
            `LEFT JOIN \`groups\` ON users.group_id = \`groups\`.id`,
            `users.*, \`groups\`.name AS groupName`
        );

        return {
            page: data.page,
            pageLen: data.length,
            pageTotal: data.pageTotal,
            recordTotal: data.recordTotal,
            data: data.items,
        };
    }
}

