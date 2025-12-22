import SingleModel from '@src/SingleModel.js';
import { Request } from '@src/Request.js';

export interface PaymentMethodData {
    id?: number;
    name?: string;
    des?: string;
    image?: string;
    status?: number;
    ordering?: number;
    is_deleted?: number;
    is_order?: number;
    pay_in?: number;
    is_store?: number;
    is_transport?: number;
    created_at?: string;
    updated_at?: string;
    created_by?: number;
    updated_by?: number;
}

export default class PaymentMethodModel extends SingleModel<PaymentMethodData> {
    table = 'payment_methods';

    vdObject = {
        name: 'required|maxLen(200)',
        des: 'maxLen(250)',
        status: 'numeric|min(0)|max(1)',
        ordering: 'numeric|min(0)',
        is_deleted: 'numeric|min(0)|max(1)',
        is_order: 'numeric|min(0)|max(1)',
        pay_in: 'numeric|min(0)|max(1)',
        is_store: 'numeric|min(0)|max(1)',
        is_transport: 'numeric|min(0)|max(1)',
    };

    fieldName(key: any) {
        const data: any = {
            id: 'ID PT Thanh toán',
            name: 'Tên PT Thanh toán',
            des: 'Mô tả',
            image: 'Hình ảnh',
            status: 'Trạng thái',
            ordering: 'Thứ tự',
            is_deleted: 'Đã xóa',
            is_order: 'Dùng cho Đặt hàng',
            pay_in: 'Dùng cho Nạp tiền',
            is_store: 'Dùng cho Cửa hàng',
            is_transport: 'Dùng cho Vận chuyển',
            created_at: 'Ngày tạo',
            updated_at: 'Ngày cập nhật',
        };
        return data[key] ?? key;
    }

    async getDatas(
        request: Request,
        is_deleted: any = 0
    ): Promise<{
        page: number;
        pageLen: number;
        pageTotal: number;
        recordTotal: number;
        data: PaymentMethodData[];
    }> {
        const nameSh = request.get("nameSh");
        const statusSh = request.get("statusSh");

        const whereParts: string[] = [];

        if (nameSh) {
            whereParts.push(`payment_methods.name LIKE '%${nameSh}%'`);
        }

        if (statusSh !== undefined && statusSh !== null && statusSh !== '') {
            whereParts.push(`payment_methods.status = ${Number(statusSh)}`);
        }

        const deletedValue = String(is_deleted);
        if (deletedValue === "0" || deletedValue === "false") {
            whereParts.push(`payment_methods.is_deleted = 0`);
        } else if (deletedValue === "1" || deletedValue === "true") {
            whereParts.push(`payment_methods.is_deleted = 1`);
        }

        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";

        const page = parseInt(request.get("page", "1"));
        const pageLen = parseInt(request.get("pageLen", "10"));
        const finalPageLen = Math.max(1, pageLen);

        const data = await this.findWithPagination(
            whereClause,
            { "payment_methods.ordering": "ASC", "payment_methods.id": "ASC" },
            page,
            finalPageLen
        );

        return {
            page: data.page,
            pageLen: finalPageLen,
            pageTotal: data.pageTotal,
            recordTotal: data.recordTotal,
            data: data.items,
        };
    }
}