import SingleModel from '@src/SingleModel.js';
import { Request } from '@src/Request.js';

export interface OrderPaymentedData {
    id?: number;
    order_id?: number;
    customer_id?: number;
    payment_method_id?: number;
    payment_info?: string;
    amount?: number;
    stop?: number;
    status?: number;
    created_at?: string;
    updated_at?: string;
}

export default class OrderPaymentedModel extends SingleModel<OrderPaymentedData> {
    table = 'order_paymented';

    vdObject = {
        order_id: 'required|integer|min(1)',
        customer_id: 'required|integer|min(1)',
        payment_method_id: 'required|numeric|min(1)',
        payment_info: 'required',
        amount: 'numeric|min(0)',
        stop: 'numeric|min(0)|max(1)',
        status: 'numeric|min(0)|max(1)',
    };

    fieldName(key: any) {
        const data: any = {
            id: 'ID Thanh toán',
            order_id: 'ID Đơn hàng',
            customer_id: 'ID Khách hàng',
            payment_method_id: 'PT Thanh toán',
            payment_info: 'Thông tin thanh toán',
            amount: 'Số tiền thanh toán',
            stop: 'Ngừng thanh toán',
            status: 'Trạng thái',
            created_at: 'Ngày tạo',
            updated_at: 'Ngày cập nhật',
        };
        return data[key] ?? key;
    }

    async getDatas(
        request: Request,
        stopSh: any = 0
    ): Promise<{
        page: number;
        pageLen: number;
        pageTotal: number;
        recordTotal: number;
        data: OrderPaymentedData[];
    }> {
        const orderIdSh = request.get("orderIdSh");
        const customerIdSh = request.get("customerIdSh");
        const statusSh = request.get("statusSh");

        const whereParts: string[] = [];

        if (orderIdSh) {
            whereParts.push(`order_paymented.order_id = ${Number(orderIdSh)}`);
        }

        if (customerIdSh) {
            whereParts.push(`order_paymented.customer_id = ${Number(customerIdSh)}`);
        }

        if (statusSh !== undefined && statusSh !== null && statusSh !== '') {
            whereParts.push(`order_paymented.status = ${Number(statusSh)}`);
        }

        const stopValue = String(stopSh);
        if (stopValue === "0" || stopValue === "false") {
            whereParts.push(`order_paymented.stop = 0`);
        } else if (stopValue === "1" || stopValue === "true") {
            whereParts.push(`order_paymented.stop = 1`);
        }

        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";

        const page = parseInt(request.get("page", "1"));
        const pageLen = parseInt(request.get("pageLen", "10"));
        const finalPageLen = Math.max(1, pageLen);

        const data = await this.findWithPagination(
            whereClause,
            { "order_paymented.created_at": "DESC" },
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