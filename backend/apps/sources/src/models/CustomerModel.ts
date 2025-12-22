import SingleModel from '@src/SingleModel.js';
import { Request } from '@src/Request.js';

export interface CustomerData {
    id?: number;
    tier_id?: number;
    point?: number;
    point_used?: number;
    referral_code?: string;
    fullname: string;
    phone?: string;
    email?: string;
    address_id?: number;
    country_id?: string;
    province_id?: string;
    district_id?: string;
    ward_id?: string;
    address?: string;
    fulladdress?: string;
    gender?: number;
    birthday?: string;
    username?: string;
    change_username?: number;
    password?: string;
    facebook_id?: string;
    google_id?: string;
    apple_id?: string;
    avatar?: string;
    cnote?: string;
    status?: number;
    created_at?: string;
    updated_at?: string;
    created_by?: number;
    updated_by?: number;
    is_deleted?: number;
}

export default class CustomerModel extends SingleModel<CustomerData> {
    table = 'customers';

    vdObject = {
        fullname: 'required|minLen(2)|maxLen(250)',
        username: 'required|minLen(2)|unique(customers,username)',
        email: 'email|unique(customers,email)',
        phone: 'maxLen(20)',
    };

    validateRegister = {
        // username: 'required|maxLen(100)|unique(customers,username)',
        // email: 'required|unique(customers,email)|email',
        phone: 'maxLen(20)|unique(customers,phone)|phoneVn',
    };

    validateLogin = {
        phone: 'maxLen(20)|required|phoneVn',
        password: 'required|password',
    };

    validatePassword = {
        password: 'required|password',
    };
    validateForgetPassowrd = {
        // email: 'required|maxLen(150)',
        phone: 'maxLen(20)|unique(customers,phone)|phoneVn',
        referenceCode: 'required',
        password: 'required|password',
    };
    validateProfile = {
        fullname: 'required|minLen(2)|maxLen(250)',
        email: 'required|email|unique(customers,email)',
        phone: 'maxLen(20)',
        address: 'maxLen(255)',
    };

    fieldName(key: any) {
        const data: any = {
            tier_id: 'Hạng thành viên',
            point: 'Điểm tích lũy',
            point_used: 'Điểm đã dùng',
            referral_code: 'Mã giới thiệu',
            fullname: 'Họ & tên',
            phone: 'Số điện thoại',
            email: 'Email',
            address_id: 'Địa chỉ ID',
            country_id: 'Quốc gia',
            province_id: 'Tỉnh/Thành phố',
            district_id: 'Quận/Huyện',
            ward_id: 'Phường/Xã',
            address: 'Số nhà, tên đường',
            fulladdress: 'Địa chỉ đầy đủ',
            gender: 'Giới tính',
            birthday: 'Ngày sinh',
            username: 'Tên đăng nhập',
            change_username: 'Đổi tên đăng nhập',
            password: 'Mật khẩu',
            facebook_id: 'Facebook ID',
            google_id: 'Google ID',
            apple_id: 'Apple ID',
            avatar: 'Ảnh đại diện',
            cnote: 'Ghi chú',
            status: 'Trạng thái',
            created_at: 'Ngày tạo',
            updated_at: 'Ngày cập nhật',
            created_by: 'Người tạo',
            updated_by: 'Người cập nhật',
            is_deleted: 'Đã xóa',
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
        data: CustomerData[];
    }> {
        const nameSh = request.get("nameSh");
        const emailSh = request.get("emailSh");
        const phoneSh = request.get("phoneSh");
        const statusSh = request.get("statusSh");

        const whereParts: string[] = [];

        if (nameSh) {
            const keyword = `%${nameSh}%`;
            whereParts.push(`(customers.fullname LIKE '${keyword}' OR customers.username LIKE '${keyword}')`);
        }

        if (emailSh) {
            const keyword = `% ${emailSh}% `;
            whereParts.push(`customers.email LIKE '${keyword}'`);
        }

        if (phoneSh) {
            const keyword = `% ${phoneSh}% `;
            whereParts.push(`customers.phone LIKE '${keyword}'`);
        }

        if (statusSh) {
            whereParts.push(`customers.status = ${Number(statusSh)} `);
        }

        if (is_deleted === true || is_deleted === 0 || is_deleted === "true") {
            whereParts.push(`customers.is_deleted = 0`);
        }

        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";

        const page = parseInt(request.get("page", "1"));
        const pageLen = parseInt(request.get("pageLen", "10"));

        const data = await this.findWithPagination(
            whereClause,
            { "customers.created_at": "DESC" },
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
}
