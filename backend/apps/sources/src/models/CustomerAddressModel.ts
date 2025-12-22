import SingleModel from '@src/SingleModel.js';
import { Request } from '@src/Request.js';
import Common from '@src/Common.js';

export interface CustomerAddressData {
    id?: number;
    name?: string;
    phone?: string;
    customer_id: number;
    address?: string;
    country_id?: string;
    province_id?: string;
    district_id?: string;
    ward_id?: string;
    fulladdress?: string;
    is_deleted?: number;
    status?: number;
    created_at?: string;
    updated_at?: string;
}

export default class CustomerAddressModel extends SingleModel<CustomerAddressData> {
    table = 'customer_address';

    vdObject = {
        customer_id: 'required|integer',
        name: 'maxLen(100)',
        phone: 'maxLen(50)',
        address: 'maxLen(255)',
        country_id: '',
        province_id: '',
        district_id: '',
        ward_id: '',
        fulladdress: '',
        is_deleted: 'integer',
        status: 'integer',
        created_at: '',
        updated_at: '',
    };

    fieldName(key: any) {
        const data: any = {
            customer_id: 'Khách hàng',
            name: 'Tên người nhận',
            phone: 'Số điện thoại',
            address: 'Địa chỉ',
            country_id: 'Quốc gia',
            province_id: 'Tỉnh/Thành phố',
            district_id: 'Quận/Huyện',
            ward_id: 'Phường/Xã',
            fulladdress: 'Địa chỉ đầy đủ',
            is_deleted: 'Đã xóa',
            status: 'Trạng thái',
            created_at: 'Ngày tạo',
            updated_at: 'Ngày cập nhật',
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
        data: CustomerAddressData[];
    }> {
        const customerSh = request.get("customerSh");
        const statusSh = request.get("statusSh");

        const whereParts: string[] = [];

        if (customerSh) {
            const keyword = `%${Common.removeVietnameseTones(customerSh)}%`;
            whereParts.push(`customers.fullname LIKE '${keyword}'`);
        }

        if (statusSh) {
            whereParts.push(`customer_address.status = ${Number(statusSh)}`);
        }

        if (is_deleted === true || is_deleted === 0 || is_deleted === "true") {
            whereParts.push(`customer_address.is_deleted = 0`);
        }

        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";

        const page = parseInt(request.get("page", "1"));
        const pageLen = parseInt(request.get("pageLen", "10"));

        const data = await this.findWithPagination(
            whereClause,
            { "customer_address.created_at": "DESC" },
            page,
            pageLen,
            `LEFT JOIN customers ON customer_address.customer_id = customers.id`,
            `customer_address.*, customers.fullname AS customerName, customers.email AS customerEmail`
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
