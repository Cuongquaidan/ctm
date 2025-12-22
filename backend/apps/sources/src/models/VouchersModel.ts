import SingleModel from '../SingleModel.js';
import { Request } from '../Request.js';
import PromotionModel from './PromotionsModel.js';
import CartModel, { CartData } from './CartModel.js';
import VoucherStoreModel from './VoucherStoreModel.js';

export interface VoucherData {
    id?: number;
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
    status?: number;
    used?: number;
    created_at?: string;
    updated_at?: string;
    created_by?: number;
    updated_by?: number;
    is_deleted?: number;
}

export default class VoucherModel extends SingleModel<VoucherData> {
    table = 'vouchers';

    vdObject = {
        name: 'required|minLen(2)|maxLen(128)',
        code: 'required|maxLen(20)|unique(vouchers,code)',
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
        const statusSh = request.get("statusSh");
        const codeSh = request.get("codeSh");
        const typeSh = request.get("typeSh");

        const whereParts: string[] = [];

        if (nameSh) {
            const keyword = `%${nameSh}%`;
            whereParts.push(`vouchers.name LIKE '${keyword}'`);
        }

        if (codeSh) {
            const keyword = `%${codeSh}%`;

            whereParts.push(`vouchers.code LIKE '${keyword}'`);
        }

        if (typeSh) {
            whereParts.push(`vouchers.voucher_type = ${Number(typeSh)} `);
        }

        if (statusSh) {
            whereParts.push(`vouchers.status = ${Number(statusSh)} `);
        }

        if (is_deleted === 0 || is_deleted === "0") {
            whereParts.push(`vouchers.is_deleted = 0`);
        } else if (is_deleted === 1 || is_deleted === "1") {
            whereParts.push(`vouchers.is_deleted = 1`);
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
                { "vouchers.created_at": "DESC" },
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
                { "vouchers.created_at": "DESC" },
                false,
                undefined,
                '*',
            );
            return items;
        }
    }
    // async cartUseVoucher(request: Request, customerId: number): Promise<any> {
    //     const voucherIdPost = request.getPost('voucherId');
    //     const custId = Number(customerId);
    //     const voucherId = Number(voucherIdPost) || 0;

    //     const cartModel = new CartModel(this.pool);
    //     const voucherModel = new VoucherModel(this.pool);

    //     try {
    //         const currentCart = await cartModel.getCustomerCart(custId);
    //         if (!currentCart) throw new Error('Giỏ hàng không tồn tại.');
    //         const cartId = currentCart.id!;

    //         let voucherToApply: VoucherData | null = null;
    //         let discountMessage = 'Đã hủy bỏ mã giảm giá toàn hệ thống.';
    //         let finalVoucherDetail = null;

    //         if (voucherId > 0) {
    //             voucherToApply = await voucherModel.findOne({ id: voucherId });

    //             if (!voucherToApply || Number(voucherToApply.status) !== 1 || Number(voucherToApply.is_deleted) === 1) {
    //                 throw new Error("Mã giảm giá không hợp lệ.");
    //             }
    //             const cartTotal = Number(currentCart.item_total || 0);

    //             const validationError = this.validateGlobalVoucher(voucherToApply, cartTotal, custId);

    //             if (validationError) {
    //                 throw new Error(validationError);
    //             }

    //             discountMessage = `Đã áp dụng mã giảm giá ${voucherToApply.code || voucherId} thành công.`;

    //             finalVoucherDetail = {
    //                 ...voucherToApply,
    //                 discount_value: this.calculateMaxDiscount(voucherToApply, cartTotal),
    //             };

    //         } else {
    //             discountMessage = 'Đã hủy bỏ mã giảm giá toàn hệ thống.';
    //         }

    //         const cartUpdateData: Partial<CartData> = {};

    //         cartUpdateData.voucher_id = voucherId > 0 ? voucherId : null;

    //         await cartModel.update(cartUpdateData, { id: cartId });

    //         await cartModel.recalculateCartTotals(cartId, custId);

    //         const finalResponseData = {
    //             ...finalVoucherDetail,
    //             // status: 200,
    //             message: discountMessage
    //         };

    //         return finalResponseData;

    //     } catch (error: any) {
    //         console.error("Lỗi khi áp dụng Global Voucher:", error);
    //         return (error.message);
    //     }
    // }
    async cartUseVoucher(request: Request, customerId: number): Promise<any> {
        const voucherIdPost = request.getPost('voucherId');
        const custId = Number(customerId);
        const voucherId = Number(voucherIdPost) || 0;

        if (voucherId <= 0) return { msg: 'invalid_404', status: 400 };

        const cartModel = new CartModel(this.pool);
        const voucherModel = new VoucherModel(this.pool);

        try {
            const currentCart = await cartModel.getCustomerCart(custId);
            if (!currentCart) throw new Error('invalid_404');
            const cartId = currentCart.id!;

            const voucherToApply: VoucherData | null = await voucherModel.findOne({ id: voucherId });

            if (!voucherToApply || Number(voucherToApply.status) !== 1 || Number(voucherToApply.is_deleted) === 1) {
                throw new Error("invalid_404");
            }

            const cartTotal = Number(currentCart.item_total || 0);
            const validationError = this.validateGlobalVoucher(voucherToApply, cartTotal, custId);
            if (validationError) {
                return { msg: 'invalid_404', status: 400 };
            }

            await cartModel.update({ voucher_id: voucherId }, { id: cartId });
            await cartModel.recalculateCartTotals(cartId, custId);

            return {
                ...voucherToApply,
                status: 200,
                discount_value: this.calculateMaxDiscount(voucherToApply, cartTotal),
            };

        } catch (error: any) {
            console.error("Lỗi apply Global Voucher:", error.message);
            return { msg: 'invalid_404', status: 400 };
        }
    }

    async removeVoucher(request: Request, customerId: number): Promise<any> {
        const custId = Number(customerId);
        const cartModel = new CartModel(this.pool);

        try {
            const currentCart = await cartModel.getCustomerCart(custId);
            if (!currentCart) throw new Error('invalid_404');

            if (!currentCart.voucher_id) {
                throw new Error('invalid_404');
            }

            const cartId = currentCart.id!;

            await cartModel.update({ voucher_id: null }, { id: cartId });
            await cartModel.recalculateCartTotals(cartId, custId);

            return {
                data: [],
                status: 200,
                message: 'Đã hủy bỏ mã giảm giá hệ thống.'
            };

        } catch (error: any) {
            console.error("Lỗi remove Global Voucher:", error.message);
            return { msg: 'invalid_404', status: 400 };
        }
    }
    public validateGlobalVoucher(voucher: VoucherData, cartTotal: number, custId: number): string | null {

        if (cartTotal <= 0) {
            return "Giỏ hàng chưa có sản phẩm.";
        }

        const minCostRequired = Number(voucher.min_cost || 0);
        if (minCostRequired > 0 && cartTotal < minCostRequired) {
            const requiredAmount = minCostRequired.toLocaleString('vi-VN');
            return `Đơn hàng phải đạt tối thiểu ${requiredAmount}đ để áp dụng voucher.`;
        }

        const now = new Date();
        const startDate = new Date(voucher.start_date ?? '');
        const endDate = new Date(voucher.end_date ?? '');

        if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
            return "Dữ liệu ngày tháng của mã giảm giá không hợp lệ.";
        }

        startDate.setUTCHours(0, 0, 0, 0);
        endDate.setUTCHours(23, 59, 59, 999);

        if (now.getTime() < startDate.getTime() || now.getTime() > endDate.getTime()) {
            return "Mã giảm giá chưa đến ngày áp dụng hoặc đã hết hạn sử dụng.";
        }

        const totalQuantity = Number(voucher.quantity || 0);
        const quantityUsed = Number(voucher.quantity_used || 0);

        if (totalQuantity > 0 && quantityUsed >= totalQuantity) {
            return "Mã giảm giá đã hết lượt sử dụng.";
        }

        const customerLimit = Number(voucher.customer_number || 0);
        if (customerLimit > 0) {
            // [Cần thêm logic truy vấn CSDL để đếm số lần khách hàng này đã dùng]
            // Ví dụ: 
            // const userUsedCount = await this.getUsedCountByCustomer(voucher.id, custId);
            // if (userUsedCount >= customerLimit) {
            //     return "Bạn đã hết lượt sử dụng mã giảm giá này.";
            // }
            // Để đơn giản, nếu bạn chưa có hàm `getUsedCountByCustomer`, bạn có thể bỏ qua hoặc coi là luôn hợp lệ.
        }

        return null; // Tất cả điều kiện đều hợp lệ
    }
    async voucherMaybeApply(customerId: number): Promise<any> {
        const custId = Number(customerId);
        if (custId <= 0) {
            throw new Error('ID khách hàng không hợp lệ.');
        }

        const voucherModel = new VoucherModel(this.pool);
        const cartModel = new CartModel(this.pool);

        try {
            const currentCart = await cartModel.getCustomerCart(custId);
            const cartTotal = Number(currentCart?.item_total || 0);

            const appliedVoucherId = currentCart?.voucher_id || null;

            const globalVouchers: VoucherData[] = await voucherModel.getGlobalVouchersForCustomer(custId);

            const now = new Date();

            const finalVoucherList = globalVouchers.map((voucher: VoucherData) => {
                let isVerified = true;
                let validationMessage = 'Hợp lệ';

                if (Number(voucher.status) !== 1 || Number(voucher.is_deleted) === 1) {
                    isVerified = false;
                    validationMessage = 'Voucher không hoạt động.';
                }

                const startDate = new Date(voucher.start_date ?? '');
                const endDate = new Date(voucher.end_date ?? '');

                startDate.setUTCHours(0, 0, 0, 0);
                endDate.setUTCHours(23, 59, 59, 999);

                if (isVerified && (isNaN(startDate.getTime()) || isNaN(endDate.getTime()) || now.getTime() < startDate.getTime() || now.getTime() > endDate.getTime())) {
                    isVerified = false;
                    validationMessage = 'Đã hết hạn hoặc chưa đến ngày áp dụng.';
                }

                const totalQuantity = Number(voucher.quantity || 0);
                const quantityUsed = Number(voucher.quantity_used || 0);

                if (isVerified && totalQuantity > 0 && quantityUsed >= totalQuantity) {
                    isVerified = false;
                    validationMessage = 'Đã hết lượt sử dụng.';
                }

                const minCostRequired = Number(voucher.min_cost || 0);

                if (isVerified && minCostRequired > 0 && cartTotal < minCostRequired) {
                    isVerified = false;
                    validationMessage = `Thiếu ${minCostRequired.toLocaleString('vi-VN')}đ để áp dụng.`;
                }

                const finalDiscountValue = this.calculateMaxDiscount(voucher, cartTotal);

                let verifiedStatus: boolean | object = isVerified;

                if (appliedVoucherId && Number(voucher.id) === appliedVoucherId) {
                    verifiedStatus = {
                        ...voucher,
                        discount_value: finalDiscountValue,
                        status: voucher.status,
                    };
                }

                return {
                    ...voucher,
                    discount_value: finalDiscountValue,
                    verified: verifiedStatus,
                    validation_message: validationMessage,
                };
            });

            const currentAppliedVoucher = finalVoucherList.find(v => Number(v.id) === appliedVoucherId);

            return {
                status: 200,
                data: {
                    voucher_id: currentAppliedVoucher ? currentAppliedVoucher.id : null,
                    list: finalVoucherList,
                }
            };

        } catch (error: any) {
            console.error("Lỗi khi lấy danh sách voucher:", error);
            throw new Error('Không thể lấy danh sách voucher hiện tại.');
        }
    }
    async getVoucherListForProfile(customerId: number): Promise<any> {
        const custId = Number(customerId);
        if (custId <= 0) return { status: 400, msg: 'invalid_404' };

        const voucherModel = new VoucherModel(this.pool);
        const now = new Date();

        try {
            const vouchers: VoucherData[] = await voucherModel.getGlobalVouchersForCustomer(custId);

            const list = vouchers.map((v: VoucherData) => {
                const startDate = new Date(v.start_date ?? '');
                const endDate = new Date(v.end_date ?? '');

                const isExpired = now > endDate;
                const isUpcoming = now < startDate;
                const totalQty = Number(v.quantity || 0);
                const usedQty = Number(v.quantity_used || 0);
                const isOutOfStock = totalQty > 0 && usedQty >= totalQty;

                return {
                    id: v.id,
                    code: v.code,
                    name: v.name,
                    discount_display: v.discount_type === 'P'
                        ? `Giảm ${v.discount}%`
                        : `Giảm ${Number(v.discount || 0).toLocaleString('vi-VN')} đ`,

                    condition_display: `cho đơn từ ${Number(v.min_cost || 0).toLocaleString('vi-VN')} đ`,

                    max_discount_display: v.discount_type === 'P' && v.cost_limit
                        ? `tối đa ${Number(v.cost_limit).toLocaleString('vi-VN')} đ`
                        : null,

                    start_date: v.start_date,
                    end_date: v.end_date,
                    is_available: Number(v.status) === 1 && !isOutOfStock
                };
            });

            return { status: 200, data: list };
        } catch (error) {
            return { status: 400, msg: 'invalid_404' };
        }
    }

    async getGlobalVouchersForCustomer(customerId: number): Promise<VoucherData[]> {
        const VOUCHER_TYPE_GLOBAL = 1;
        const VOUCHER_TYPE_NEW_MEMBER = 6;
        const STATUS_ACTIVE = 1;
        const IS_NOT_DELETED = 0;
        const IS_PUBLIC_VOUCHER = 0;
        const sql = `
            SELECT 
                id, name, description, image, code, tier_id, quantity, quantity_used, customer_number,
                voucher_type, discount_type, discount, min_cost, cost_limit, date_type, 
                start_date, end_date, start_time, end_time, day_of_week, 
                status, used, created_at, updated_at, created_by, updated_by, is_deleted
            FROM 
                vouchers 
            WHERE 
                (voucher_type = ? OR voucher_type = ?)
                AND status = ? 
                AND is_deleted = ? 
                AND end_date >= NOW()
                -- Lấy các voucher Công khai (Giả định customer_number = 0 là public)
                AND (customer_number = ? OR customer_number IS NULL) 
        `;

        try {
            const [rows]: any = await this.query(sql, [
                VOUCHER_TYPE_GLOBAL,
                VOUCHER_TYPE_NEW_MEMBER,
                STATUS_ACTIVE,
                IS_NOT_DELETED,
                IS_PUBLIC_VOUCHER
            ]);


            return rows as VoucherData[];
        } catch (error) {
            console.error("Lỗi truy vấn SQL getGlobalVouchersForCustomer:", error);
            throw error;
        }
    }
    public calculateMaxDiscount(voucher: VoucherData, cartTotal: number): number {
        const discountValue = Number(voucher.discount || 0);
        const costLimit = Number(voucher.cost_limit || 0);

        if (voucher.discount_type === 'P') {
            let maxDiscount = cartTotal * (discountValue / 100);

            if (costLimit > 0 && maxDiscount > costLimit) {
                maxDiscount = costLimit;
            }
            return Math.round(maxDiscount);

        } else if (voucher.discount_type === 'F' || voucher.discount_type === 'S') {
            if (discountValue > cartTotal && voucher.discount_type !== 'S') {
                return Math.round(cartTotal);
            }
            return Math.round(discountValue);
        }

        return 0;
    }
    public calculateCtmValues(voucherDetails: any, storeGroups: any[]): Record<string, number> {

        const globalDiscountValue = Number(voucherDetails.discount_value || 0);

        if (globalDiscountValue <= 0 || !storeGroups || storeGroups.length === 0) {
            return {};
        }

        const totalItemTotal = storeGroups.reduce((sum, group) => {

            const storeTotal = Number(group.store_subtotal || group.total || 0);
            return sum + storeTotal;
        }, 0);

        if (totalItemTotal <= 0) {
            return {};
        }

        const ctmValues: Record<string, number> = {};
        let totalAllocatedDiscount = 0;

        for (const group of storeGroups) {
            const storeId = group.store_id.toString();
            const storeTotal = Number(group.store_subtotal || group.total || 0);

            const allocationRatio = storeTotal / totalItemTotal;

            const allocatedDiscount = allocationRatio * globalDiscountValue;

            ctmValues[storeId] = allocatedDiscount;
            totalAllocatedDiscount += allocatedDiscount;
        }

        const roundingError = globalDiscountValue - totalAllocatedDiscount;

        if (storeGroups.length > 0) {
            const firstStoreId = storeGroups[0].store_id.toString();
            ctmValues[firstStoreId] = Number(ctmValues[firstStoreId]) + roundingError;
        }

        const finalCtmValues: Record<string, number> = {};
        for (const key in ctmValues) {
            finalCtmValues[key] = parseFloat(ctmValues[key].toFixed(4));
        }

        return finalCtmValues;
    }
    public async getApplicableVouchersList(custId: number): Promise<any> {
        const voucherModel = new VoucherModel(this.pool);

        const globalVouchers: VoucherData[] = await voucherModel.getGlobalVouchersForCustomer(custId);

        const finalVoucherList = await Promise.all(globalVouchers.map(async (voucher: VoucherData) => {
            let isUsable = true;
            let statusMessage = 'Có thể sử dụng';

            const now = new Date();
            const endDate = new Date(voucher.end_date ?? '');
            endDate.setUTCHours(23, 59, 59, 999);

            if (now.getTime() > endDate.getTime()) {
                isUsable = false;
                statusMessage = 'Đã hết hạn sử dụng.';
            }

            const totalQuantity = Number(voucher.quantity || 0);
            const quantityUsed = Number(voucher.quantity_used || 0);
            if (isUsable && totalQuantity > 0 && quantityUsed >= totalQuantity) {
                isUsable = false;
                statusMessage = 'Đã hết lượt sử dụng.';
            }

            const customerLimit = Number(voucher.customer_number || 0);
            if (isUsable && customerLimit > 0) {
                const userUsedCount = await this.getUsedCountByCustomer(Number(voucher.id), custId);
                if (userUsedCount >= customerLimit) {
                    isUsable = false;
                    statusMessage = "Bạn đã hết lượt sử dụng mã giảm giá này.";
                }
            }

            const placeholderTotal = 1000000000;
            // const maxDiscountValue = this.calculateMaxDiscount(voucher, placeholderTotal);

            return {
                ...voucher,
                is_usable: isUsable,
                status_message: statusMessage,
                // max_discount_value: maxDiscountValue
            };
        }));

        return { list: finalVoucherList };
    }
    public async getUsedCountByCustomer(voucherId: number, custId: number): Promise<number> {

        const sql = `
        SELECT COUNT(id) AS used_count
        FROM voucher_history
        WHERE voucher_id = ? AND customer_id = ?
    `;

        try {
            const [rows]: any = await this.query(sql, [voucherId, custId]);

            return Number(rows[0]?.used_count || 0);
        } catch (error) {
            console.error("Lỗi truy vấn SQL getUsedCountByCustomer:", error);
            return 0;
        }
    }
}