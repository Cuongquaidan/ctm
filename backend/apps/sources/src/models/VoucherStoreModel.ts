import SingleModel from '../SingleModel.js';
import { Request } from '../Request.js';
import CartModel, { CartData } from './CartModel.js';
import Common from '@src/Common.js';

export interface VoucherStoreData {
    id?: number;
    store_id?: number;
    name?: string;
    description?: string;
    image?: string;
    code?: string;
    tier_id?: number;
    quantity?: number;
    quantity_used?: number;
    customer_number?: number;
    voucher_type?: number;
    discount_type?: string;
    discount?: number;
    min_cost?: number;
    cost_limit?: number;
    date_type?: number;
    start_date?: string;
    end_date?: string;
    start_time?: string;
    end_time?: string;
    day_of_week?: string;
    reason_cancel?: string;
    status?: number;
    used?: number;
    created_at?: string;
    updated_at?: string;
    created_by?: number;
    updated_by?: number;
    is_deleted?: number;
}

export default class VoucherStoreModel extends SingleModel<VoucherStoreData> {
    table = 'voucher_store';

    vdObject = {
        store_id: 'required|number',
        name: 'required|minLen(2)|maxLen(128)',
        code: 'required|maxLen(20)|unique(voucher_store,code)',
        voucher_type: 'required|number',
        discount_type: 'required|maxLen(1)',
        discount: 'required|number|minVal(0)',
        min_cost: 'number|minVal(0)',
        cost_limit: 'number|minVal(0)',
        quantity: 'number',
        customer_number: 'number',
        date_type: 'number',
        status: 'number',
        is_deleted: 'number',
    };

    fieldName(key: any) {
        const data: any = {
            id: 'ID',
            store_id: 'ID Cửa hàng',
            name: 'Tên Voucher',
            description: 'Mô tả',
            image: 'Hình ảnh',
            code: 'Mã Voucher',
            tier_id: 'ID Hạng thành viên',
            quantity: 'Tổng số lượng',
            quantity_used: 'Số lượng đã dùng',
            customer_number: 'Số lượng/Khách hàng',
            voucher_type: 'Loại Voucher',
            discount_type: 'Loại giảm giá',
            discount: 'Giá trị giảm giá',
            min_cost: 'Giá trị đơn hàng tối thiểu',
            cost_limit: 'Giới hạn giảm tối đa',
            date_type: 'Loại thời gian áp dụng',
            start_date: 'Ngày bắt đầu',
            end_date: 'Ngày kết thúc',
            start_time: 'Giờ bắt đầu',
            end_time: 'Giờ kết thúc',
            day_of_week: 'Ngày trong tuần áp dụng',
            reason_cancel: 'Lý do hủy',
            status: 'Trạng thái',
            used: 'Đã sử dụng',
            created_at: 'Thời gian tạo',
            updated_at: 'Thời gian cập nhật',
            created_by: 'Người tạo',
            updated_by: 'Người cập nhật',
            is_deleted: 'Đã xóa mềm',
        };
        return data[key] ?? key;
    }

    async getDatas(
        request: Request,
        is_deleted: any = 0,
        isPaginated: boolean = true
    ): Promise<any> {
        const nameSh = request.get("nameSh");
        const storeIdSh = request.get("storeIdSh");
        const statusSh = request.get("statusSh");
        const codeSh = request.get("codeSh");

        const whereParts: string[] = [];

        if (nameSh) {
            const keyword = `%${nameSh}%`;
            whereParts.push(`voucher_store.name LIKE '${keyword}'`);
        }

        if (codeSh) {
            const keyword = `%${codeSh}%`;
            whereParts.push(`voucher_store.code LIKE '${keyword}'`);
        }

        if (storeIdSh) {
            whereParts.push(`voucher_store.store_id = ${Number(storeIdSh)} `);
        }

        if (statusSh) {
            whereParts.push(`voucher_store.status = ${Number(statusSh)} `);
        }

        if (is_deleted === 0 || is_deleted === "0") {
            whereParts.push(`voucher_store.is_deleted = 0`);
        } else if (is_deleted === 1 || is_deleted === "1") {
            whereParts.push(`voucher_store.is_deleted = 1`);
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
                { "voucher_store.created_at": "DESC" },
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
                { "voucher_store.created_at": "DESC" },
                false,
                undefined,
                '*',
            );
            return items;
        }
    }

    async storeVoucherMaybeApply(storeId: number, customerId: number): Promise<VoucherStoreData[]> {
        const now = new Date();
        const currentDate = Common.formatDate(now).split(' ')[0];
        let whereClause = "store_id = ? AND status = ? AND is_deleted = ?";
        const params: (string | number)[] = [storeId, 1, 0];

        whereClause += " AND DATE(end_date) >= ?";
        params.push(currentDate);
        const sql = `
        SELECT * FROM \`${this.table}\` 
        WHERE ${whereClause}
    `;

        const [rawVouchersResult]: any = await this.query(sql, params);
        const rawVouchers = rawVouchersResult || [];

        const finalVouchers: VoucherStoreData[] = [];
        const cartModel = new CartModel(this.pool);
        const cartStoreTotal = await cartModel.getStoreTotal(customerId, storeId) as any;
        // console.log(cartStoreTotal);

        // const cartTotalAmount = Number(cartStoreTotal?.item_total || 0);
        // console.log(cartTotalAmount);

        for (const voucher of rawVouchers) {
            let isApplicable = true;

            const minCost = Number(voucher.min_cost || 0);
            if (cartStoreTotal < minCost) {
                isApplicable = false;
            }

            const totalQty = Number(voucher.quantity);

            const usedQty = Number(voucher.quantity_used || 0);

            // if (isApplicable && totalQty !== -1 && usedQty >= totalQty) {
            //     throw new Error("1");

            //     isApplicable = false;
            // }
            if (isApplicable && totalQty !== -1 && usedQty >= totalQty) {
                isApplicable = false;
            }


            if (Number(voucher.status) !== 1) isApplicable = false;

            const finalVoucher = {
                ...voucher,
                discount_value: this.calculateMaxDiscount(voucher),
                verified: isApplicable
            } as VoucherStoreData;

            finalVouchers.push(finalVoucher);
        }

        return finalVouchers;
    }

    private calculateMaxDiscount(voucher: VoucherStoreData): number {
        const discount = Number(voucher.discount || 0);
        const costLimit = Number(voucher.cost_limit || 0);

        if (voucher.discount_type === 'P') {
            return costLimit;
        }
        return discount;
    }
    async cartUseStoreVoucher(request: Request, customerId: number): Promise<any> {
        const voucherIdPost = request.getPost('voucherId');
        const storeIdRaw = request.getPost('storeId');
        const custId = Number(customerId);

        if (Number(storeIdRaw) <= 0) {
            throw new Error('invalid_404');
        }

        const storeId = Number(storeIdRaw);
        const voucherId = Number(voucherIdPost) || 0;

        if (voucherId <= 0) {
            throw new Error('invalid_404');
        }

        const cartModel = new CartModel(this.pool);
        const voucherStoreModel = new VoucherStoreModel(this.pool);

        try {
            const currentCart = await cartModel.getCustomerCart(custId);
            if (!currentCart) throw new Error('invalid_404');
            const cartId = currentCart.id!;

            const voucherToApply: VoucherStoreData | null = await voucherStoreModel.findOne({ id: voucherId });

            if (!voucherToApply || Number(voucherToApply.store_id) !== storeId) {
                throw new Error("invalid_404");
            }

            const itemStoreTotalString = currentCart.item_store_total;
            const itemStoreTotalMap: { [key: string]: number } = itemStoreTotalString ? JSON.parse(itemStoreTotalString) : {};
            const storeCartTotal = itemStoreTotalMap[storeId.toString()] || 0;


            // const discountMessage = `Đã áp dụng mã giảm giá ${voucherToApply.code || voucherId} thành công.`;

            const finalVoucherDetail = {
                ...voucherToApply,
                discount_value: this.calculateMaxDiscount(voucherToApply),
            };

            const currentVoucherStoreString = currentCart.voucher_store_id;
            const storeVoucherMap: { [key: number]: number | null } = currentVoucherStoreString ? JSON.parse(currentVoucherStoreString) : {};

            storeVoucherMap[storeId] = voucherId;

            const cartUpdateData: Partial<CartData> = {};
            cartUpdateData.voucher_store_id = JSON.stringify(storeVoucherMap);
            await cartModel.update(cartUpdateData, { id: cartId });

            await cartModel.recalculateCartTotals(cartId, custId);

            const finalVoucherData = finalVoucherDetail ? { [storeId]: finalVoucherDetail } : {};
            return {
                ...finalVoucherData,
                status: 200,
                // message: discountMessage
            };

        } catch (error: any) {
            console.error("Lỗi khi áp dụng voucher:", error);
            return {
                data: [],
                // status: 400,
                message: error.message || 'Lỗi hệ thống khi áp dụng voucher.'
            };
        }
    }

    async removeStoreVoucher(request: Request, customerId: number): Promise<any> {
        const storeIdRaw = request.getParam('storeId');
        const voucherId = request.getPost('voucherId');
        const custId = Number(customerId);

        if (Number(storeIdRaw) <= 0) {
            throw new Error('invalid_404');
        }
        const storeId = Number(storeIdRaw);

        const cartModel = new CartModel(this.pool);

        try {
            const currentCart = await cartModel.getCustomerCart(custId);
            if (!currentCart) throw new Error('invalid_404');
            const cartId = currentCart.id!;
            const voucherStoreModel = new VoucherStoreModel(this.pool);
            const voucherToApply: VoucherStoreData | null = await voucherStoreModel.findOne({ id: voucherId });
            if (!voucherToApply || Number(voucherToApply.store_id) !== storeId || Number(voucherToApply.status) !== 1) {
                throw new Error("invalid_404");
            }
            const itemStoreTotalString = currentCart.item_store_total;

            const itemStoreTotalMap: { [key: string]: number } =
                itemStoreTotalString && itemStoreTotalString !== '[]' && itemStoreTotalString !== '{}'
                    ? JSON.parse(itemStoreTotalString)
                    : {};

            const storeIdKey = String(storeId);
            const storeCartTotal = itemStoreTotalMap[storeIdKey] || 0;

            if (storeCartTotal <= 0) {
                throw new Error('invalid_404');
            }
            const currentVoucherStoreString = currentCart.voucher_store_id;


            const storeVoucherMap: { [key: string]: number | null } =
                currentVoucherStoreString ? JSON.parse(currentVoucherStoreString) : {};
            if (!Object.prototype.hasOwnProperty.call(storeVoucherMap, storeIdKey)) {
                throw new Error('invalid_404');
            }
            if (Object.prototype.hasOwnProperty.call(storeVoucherMap, storeIdKey)) {
                delete storeVoucherMap[storeIdKey];
            }

            const cartUpdateData: Partial<CartData> = {};
            cartUpdateData.voucher_store_id = JSON.stringify(storeVoucherMap);
            await cartModel.update(cartUpdateData, { id: cartId });

            await cartModel.recalculateCartTotals(cartId, custId);

            // const discountMessage = 'Đã hủy bỏ mã giảm giá cửa hàng thành công.';

            return {
                data: [],
                status: 200,
                // message: discountMessage
            };

        } catch (error: any) {
            console.error("Lỗi khi hủy voucher cửa hàng:", error);

            return {
                data: [],
                status: 400,
                message: error.message || 'Lỗi hệ thống khi hủy voucher.'
            };
        }
    }
    async getDetailsByIds(voucherIds: number[]): Promise<VoucherStoreData[]> {

        if (!voucherIds || voucherIds.length === 0) {
            return [];
        }

        const placeholders = voucherIds.map(() => '?').join(', ');

        const sql = `
            SELECT 
                id, store_id, name, description, image, code, tier_id, quantity, quantity_used, customer_number,
                voucher_type, discount_type, discount, min_cost, cost_limit, date_type, 
                start_date, end_date, start_time, end_time, day_of_week, 
                status, is_deleted
                -- Thêm các trường khác nếu cần
            FROM 
                voucher_store 
            WHERE 
                id IN (${placeholders})
        `;

        try {
            const [rows]: any = await this.query(sql, voucherIds);

            return rows as VoucherStoreData[];
        } catch (error) {
            console.error("Lỗi truy vấn SQL getDetailsByIds:", error);
            throw error;
        }
    }
}