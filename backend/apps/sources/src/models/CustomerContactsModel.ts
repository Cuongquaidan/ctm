import SingleModel from '@src/SingleModel.js';
import { Request } from '@src/Request.js';
import Common from '@src/Common.js';

export interface CustomerContactsData {
    id?: number;
    customer_id: number;
    message?: string;
    status?: number;
    created_at?: string;
    updated_at?: string;
    created_by?: number;
    updated_by?: number;
}

export default class CustomerContactsModel extends SingleModel<CustomerContactsData> {
    table = 'customer_contacts';

    vdObject = {
        customer_id: 'required|integer',
        message: '',
        status: 'integer',
        created_at: '',
        updated_at: '',
        created_by: 'integer',
        updated_by: 'integer',
    };

    fieldName(key: any) {
        const data: any = {
            customer_id: 'Khách hàng',
            message: 'Nội dung liên hệ',
            status: 'Trạng thái',
            created_at: 'Ngày tạo',
            updated_at: 'Ngày cập nhật',
            created_by: 'Người tạo',
            updated_by: 'Người cập nhật',
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
        data: CustomerContactsData[];
    }> {
        const customerSh = request.get("customerSh");
        const statusSh = request.get("statusSh");

        const whereParts: string[] = [];

        if (customerSh) {
            const keyword = `%${Common.removeVietnameseTones(customerSh)}%`;
            whereParts.push(`customers.fullname LIKE '${keyword}'`);
        }

        if (statusSh) {
            whereParts.push(`customer_contacts.status = ${Number(statusSh)}`);
        }

        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";

        const page = parseInt(request.get("page", "1"));
        const pageLen = parseInt(request.get("pageLen", "10"));

        const data = await this.findWithPagination(
            whereClause,
            { "customer_contacts.created_at": "DESC" },
            page,
            pageLen,
            `LEFT JOIN customers ON customer_contacts.customer_id = customers.id`,
            `customer_contacts.*, customers.fullname AS customerName, customers.email AS customerEmail`
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
