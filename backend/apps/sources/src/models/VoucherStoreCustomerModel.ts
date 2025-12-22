import SingleModel from '../SingleModel.js';
import { Request } from '../Request.js';

export interface VoucherStoreCustomerData {
    id?: number;
    customer_id?: number;
    voucher_id?: number;
    voucher_value?: number;
    voucher_info?: string;
    order_id?: number;
    created_at?: string;
}

export default class VoucherStoreCustomerModel extends SingleModel<VoucherStoreCustomerData> {
    table = 'voucher_store_customer';

    vdObject = {
        customer_id: 'required|number',
        voucher_id: 'required|number',
        voucher_value: 'required|number|minVal(0)',
        voucher_info: 'required',
        order_id: 'required|number',
    };

    fieldName(key: any) {
        const data: any = {
            id: 'ID',
            customer_id: 'ID Khách hàng',
            voucher_id: 'ID Voucher',
            voucher_value: 'Giá trị Voucher',
            voucher_info: 'Thông tin Voucher',
            order_id: 'ID Đơn hàng áp dụng',
            created_at: 'Thời gian áp dụng',
        };
        return data[key] ?? key;
    }

    async getDatas(
        request: Request,
        isPaginated: boolean = true
    ): Promise<any> {
        const customerIdSh = request.get("customerIdSh");
        const voucherIdSh = request.get("voucherIdSh");
        const orderIdSh = request.get("orderIdSh");

        const whereParts: string[] = [];

        if (customerIdSh) {
            whereParts.push(`voucher_store_customer.customer_id = ${Number(customerIdSh)}`);
        }

        if (voucherIdSh) {
            whereParts.push(`voucher_store_customer.voucher_id = ${Number(voucherIdSh)}`);
        }

        if (orderIdSh) {
            whereParts.push(`voucher_store_customer.order_id = ${Number(orderIdSh)}`);
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
                { "voucher_store_customer.created_at": "DESC" },
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
                { "voucher_store_customer.created_at": "DESC" },
                false,
                undefined,
                '*',
            );
            return items;
        }
    }
    // public async getUsedQuantity(
    //     customerId: number,
    //     voucherId: number | undefined | null,
    //     productId?: number // Tùy chọn nếu giới hạn áp dụng theo sản phẩm
    // ): Promise<number> {
    //     if (voucherId === undefined || voucherId === null) {
    //         return 0; // Trả về 0 nếu không có ID KM hợp lệ
    //     }
    //     let quantityUsed = 0;

    //     // 1. Truy vấn dữ liệu từ bảng sử dụng voucher
    //     // Chúng ta cần lấy voucher_info (thường là JSON) để phân tích số lượng sản phẩm đã mua
    //     const sql = `
    //         SELECT 
    //             voucher_info 
    //         FROM 
    //             \`${this.table}\` t1 
    //         WHERE 
    //             t1.customer_id = ? 
    //             AND t1.voucher_id = ?
    //             -- Cần thêm điều kiện liên kết với đơn hàng đã hoàn tất nếu có
    //             AND t1.order_id IS NOT NULL 
    //     `;

    //     const values = [customerId, voucherId];

    //     const results: any[] = await this.query(sql, values);

    //     if (!results.length) {
    //         return 0; // Khách hàng chưa từng sử dụng
    //     }

    //     // 2. Phân tích kết quả để tính tổng số lượng
    //     for (const row of results) {
    //         try {
    //             // Giả định voucher_info chứa thông tin về số lượng sản phẩm đã mua
    //             const info = JSON.parse(row.voucher_info);

    //             // Nếu voucher_info lưu quantity:
    //             if (info.quantity) {
    //                 quantityUsed += parseInt(info.quantity);
    //             }
    //             // Hoặc nếu nó là danh sách sản phẩm/số lượng
    //             else if (Array.isArray(info.products)) {
    //                 for (const item of info.products) {
    //                     if (productId && item.product_id === productId) {
    //                         quantityUsed += parseInt(item.quantity);
    //                     } else if (!productId) {
    //                         // Nếu giới hạn là trên toàn bộ voucher, cộng tổng số lượng sản phẩm
    //                         quantityUsed += parseInt(item.quantity);
    //                     }
    //                 }
    //             }

    //         } catch (e) {
    //             console.error("Lỗi parse voucher_info:", e);
    //             // Bỏ qua bản ghi lỗi
    //         }
    //     }

    //     return quantityUsed;
    // }
    // Trong VoucherStoreCustomerModel.ts (Sử dụng bảng orders và order_items)

    public async getUsedQuantity(
        customerId: number,
        // voucherId: number,
        voucherId: number | undefined | null,
        productId: number
    ): Promise<number> {

        // (Bỏ qua kiểm tra null/undefined ở đây vì đã xử lý ở ProductsModel)

        // Giả định:
        // t1: voucher_store_customer
        // t2: orders (lấy customer_id)
        // t3: order_items (lấy quantity và product_id)

        const sql = `
        SELECT 
            SUM(t3.quantity) AS itemsUsedTotal  /* TÍNH TỔNG QUANTITY ĐÃ MUA */
        FROM 
            voucher_store_customer t1 
        INNER JOIN 
            orders t2 ON t1.order_id = t2.id /* Lấy ID khách hàng từ bảng orders */
        INNER JOIN 
            order_items t3 ON t1.order_id = t3.order_id /* Lấy số lượng sản phẩm */
        WHERE 
            t2.customer_id = ? 
            AND t1.voucher_id = ? /* Voucher ID (hoặc promotion_id) */
            AND t3.product_id = ? /* Lọc theo sản phẩm nếu giới hạn là trên từng SP */
            AND t2.status = 'COMPLETED' /* Tùy chọn: chỉ tính đơn hàng hoàn thành */
    `;

        const values = [customerId, voucherId, productId];

        // Thực hiện truy vấn với tham số binding an toàn
        const [[result]]: any = await this.query(sql, values);

        // Trả về tổng số lượng đã dùng, hoặc 0 nếu NULL
        return parseInt(result.itemsUsedTotal) || 0;
    }
}