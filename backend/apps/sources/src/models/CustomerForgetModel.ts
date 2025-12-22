import SingleModel from '@src/SingleModel.js';
import { Request } from '@src/Request.js';

export interface CustomerForgetData {
    id?: number;
    email?: string;
    phone?: string;
    reference_code: string;
    referral_code?: string;
    created_at?: string;
    updated_at?: string;
}

export default class CustomerForgetModel extends SingleModel<CustomerForgetData> {
    table = 'customer_forget';

    vdObject = {
        reference_code: 'required|maxLen(10)',
        email: 'email|maxLen(100)',
        phone: 'maxLen(20)',
        referral_code: 'maxLen(15)',
        created_at: '',
        updated_at: '',
    };

    fieldName(key: any) {
        const data: any = {
            email: 'Email',
            phone: 'Số điện thoại',
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
        data: CustomerForgetData[];
    }> {
        const emailSh = request.get("emailSh");
        const phoneSh = request.get("phoneSh");
        const refCodeSh = request.get("refCodeSh");

        const whereParts: string[] = [];

        if (emailSh) {
            const keyword = `%${emailSh}%`;
            whereParts.push(`customer_forget.email LIKE '${keyword}'`);
        }

        if (phoneSh) {
            const keyword = `%${phoneSh}%`;
            whereParts.push(`customer_forget.phone LIKE '${keyword}'`);
        }

        if (refCodeSh) {
            const keyword = `%${refCodeSh}%`;
            whereParts.push(`customer_forget.reference_code LIKE '${keyword}'`);
        }

        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";

        const page = parseInt(request.get("page", "1"));
        const pageLen = parseInt(request.get("pageLen", "10"));

        const data = await this.findWithPagination(
            whereClause,
            { "customer_forget.created_at": "DESC" },
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
