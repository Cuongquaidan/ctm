import SingleModel from '../SingleModel.js';
import { Request } from '../Request.js';

export interface PromotionResult {
    discountedPrice: number;
    promotionId: number | null;
    promotionType: 'FlashSale' | 'Promotion' | null;
}

export interface ProductPromotionData {
    id?: number;
    store_id?: number;
    product_id?: number;
    promotion_id?: number;
    product_price_id?: number;
    flash_type?: string;
    start_date?: string;
    end_date?: string;
    quantity?: number;
    remaining_quantity?: number;
    used_quantity?: number;
    customer_quantity?: number;
    discount_type?: string;
    discount?: number;
    status?: number;
    created_at?: string;
    updated_at?: string;
    created_by?: number;
    updated_by?: number;
    is_deleted?: number;
}

export default class ProductPromotionModel extends SingleModel<ProductPromotionData> {
    table = 'product_promotions';

    vdObject = {
        store_id: 'required|number',
        product_id: 'required|number',
        promotion_id: 'required|number',
        discount_type: 'required|maxLen(1)',
        discount: 'required|number|minVal(0)',
        start_date: 'required|date',
        end_date: 'required|date',
        quantity: 'number',
        remaining_quantity: 'number',
        customer_quantity: 'number',
        status: 'number',
    };

    fieldName(key: any) {
        const data: any = {
            id: 'ID',
            store_id: 'ID Cửa hàng',
            product_id: 'ID Sản phẩm',
            promotion_id: 'ID Chương trình KM',
            product_price_id: 'ID Giá sản phẩm',
            flash_type: 'Loại Flash Sale',
            start_date: 'Ngày bắt đầu',
            end_date: 'Ngày kết thúc',
            quantity: 'Tổng số lượng khuyến mãi',
            remaining_quantity: 'Số lượng còn lại',
            used_quantity: 'Số lượng đã dùng',
            customer_quantity: 'Số lượng tối đa/KH',
            discount_type: 'Loại chiết khấu',
            discount: 'Giá trị chiết khấu',
            status: 'Trạng thái',
            created_at: 'Thời gian tạo',
            updated_at: 'Thời gian cập nhật',
            created_by: 'Người tạo',
            updated_by: 'Người cập nhật',
            is_deleted: 'Đã xóa mềm',
        };
        return data[key] ?? key;
    }

    async getData(
        request: Request,
        is_deleted: any = 0
    ): Promise<{
        page: number;
        pageLen: number;
        pageTotal: number;
        recordTotal: number;
        data: ProductPromotionData[];
    }> {
        const productIdSh = request.get("productIdSh");
        const promotionIdSh = request.get("promotionIdSh");
        const statusSh = request.get("statusSh");

        const whereParts: string[] = [];

        if (productIdSh) {
            whereParts.push(`product_promotions.product_id = ${Number(productIdSh)}`);
        }

        if (promotionIdSh) {
            whereParts.push(`product_promotions.promotion_id = ${Number(promotionIdSh)}`);
        }

        if (statusSh) {
            whereParts.push(`product_promotions.status = ${Number(statusSh)}`);
        }

        if (is_deleted === 0 || is_deleted === "0") {
            whereParts.push(`product_promotions.is_deleted = 0`);
        } else if (is_deleted === 1 || is_deleted === "1") {
            whereParts.push(`product_promotions.is_deleted = 1`);
        }

        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";

        const page = parseInt(request.get("page", "1"));
        const pageLen = parseInt(request.get("pageLen", "10"));
        const joinClause = `
                LEFT JOIN \`product\` ON product_promotions.product_id = \`product\`.id
                LEFT JOIN \`stores\` ON product_promotions.store_id = \`stores\`.id
                LEFT JOIN \`promotions\` ON product_promotions.promotion_id = \`promotions\`.id
            `;

        const selectFields = `
                product_promotions.*, 
                \`product\`.name AS productName,
                \`stores\`.name AS storeName,
                \`promotions\`.name AS promotionsName
    `;
        const data = await this.findWithPagination(
            whereClause,
            { "product_promotions.start_date": "DESC" },
            page,
            pageLen,
            joinClause,
            selectFields
        );

        return {
            page: data.page,
            pageLen: data.length,
            pageTotal: data.pageTotal,
            recordTotal: data.recordTotal,
            data: data.items,
        };
    }

    public async getProductsPromotions(productId: number): Promise<ProductPromotionData[] | null> {

        if (!productId || productId <= 0) return null;

        const sql = `
        SELECT *
        FROM ${this.table}
        WHERE product_id = ? AND is_deleted = 0 AND status = 1
    `;
        const [rows]: any = await this.query(sql, [productId]);

        return rows && rows.length > 0 ? rows as ProductPromotionData[] : null;
    }
    public async getProductPromotionsByPromotionId(promotionId: number): Promise<any[]> {

        const whereCondition = `promotion_id = ${promotionId} AND status = 1 AND is_deleted = 0`;

        const fields = "product_id, discount, remaining_quantity";
        // const ProductPromotions = new ProductPromotionsModel(this.pool)
        const productPromotions = await this.find(
            whereCondition,
            false,
            false,
            undefined,
            fields
        );

        return productPromotions || [];
    }
    public async getProductPromotionsByPromotionIds(promotionIds: number[]): Promise<ProductPromotionData[]> {
        if (promotionIds.length === 0) {
            return [];
        }

        const idList = promotionIds.join(',');

        const whereClause = `
            promotion_id IN (${idList}) AND status = 1 AND is_deleted = 0
        `;

        const productPromotions = await this.find(
            whereClause,
            false,
            0,
            undefined,
            "*"
        );

        return productPromotions as ProductPromotionData[];
    }
}
