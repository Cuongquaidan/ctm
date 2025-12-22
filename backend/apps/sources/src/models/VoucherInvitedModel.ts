import SingleModel from '../SingleModel.js';
import { Request } from '../Request.js';

export interface VoucherInvitedData {
    id?: number;
    customer_id?: number;
    voucher_id?: number;
    quantity?: number;
    created_at?: string;
}

export default class VoucherInvitedModel extends SingleModel<VoucherInvitedData> {
    table = 'voucher_invited';

    vdObject = {
        customer_id: 'required|number',
        voucher_id: 'required|number',
        quantity: 'required|number|minVal(0)',
    };

    fieldName(key: any) {
        const data: any = {
            id: 'ID',
            customer_id: 'ID Khách hàng',
            voucher_id: 'ID Voucher',
            quantity: 'Số lượng Voucher đã mời',
            created_at: 'Thời gian tạo',
        };
        return data[key] ?? key;
    }

    async getDatas(
        request: Request,
        isPaginated: boolean = true
    ): Promise<any> {
        const customerIdSh = request.get("customerIdSh");
        const voucherIdSh = request.get("voucherIdSh");

        const whereParts: string[] = [];

        if (customerIdSh) {
            whereParts.push(`voucher_invited.customer_id = ${Number(customerIdSh)}`);
        }

        if (voucherIdSh) {
            whereParts.push(`voucher_invited.voucher_id = ${Number(voucherIdSh)}`);
        }

        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";
        if (isPaginated) {

            const page = parseInt(request.get("page", "1"));
            const limitSh = request.get("limit");
            const defaultPageLen = parseInt(request.get("pageLen", "10"));

            const pageLen = limitSh ? parseInt(limitSh) : defaultPageLen;
            const finalPageLen = Math.max(1, pageLen);

            const data = await this.findWithPagination(
                whereClause,
                { "voucher_invited.created_at": "DESC" },
                pageLen,
                page,
            );

            return {
                page: data.page,
                pageLen: finalPageLen,
                pageTotal: data.pageTotal,
                recordTotal: data.recordTotal,
                data: data.items,
            };

        } else {
            const items = await this.find(
                whereClause,
                { "voucher_invited.created_at": "DESC" },
                false,
                undefined,
                '*',
            );
            return items;
        }
    }
}