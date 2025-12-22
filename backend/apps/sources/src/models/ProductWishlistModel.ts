import SingleModel from '../SingleModel.js';
import { Request } from '../Request.js';


export interface ProductWishlistData {
    id: number;
    product_id: number | null;
    customer_id: number | null;

}

export default class ProductWishlistModel extends SingleModel<ProductWishlistData> {
    table = 'product_wishlist';

    vdObject = {
        product_id: 'required|int',
        customer_id: 'required|int',
    };

    validateImport = {
        product_id: 'required|int',
        customer_id: 'required|int',
    };

    fieldName(key: string): string {
        const data: Record<string, string> = {
            product_id: 'ID Sản phẩm',
            customer_id: 'ID Khách hàng',
        };
        return data[key] ?? key;
    }

    async getDatas(request: Request, _user: any, _is_deleted: any): Promise<{
        page: number;
        pageLen: number;
        pageTotal: number;
        recordTotal: number;
        data: ProductWishlistData[];
    }> {
        const whereParts: string[] = [];
        const params: any[] = [];

        const customerIdSh = request.get('customerIdSh');
        if (customerIdSh) {
            whereParts.push("customer_id = ?");
            params.push(customerIdSh);
        }

        const productIdSh = request.get('productIdSh');
        if (productIdSh) {
            whereParts.push("product_id = ?");
            params.push(productIdSh);
        }

        const whereClause = whereParts.length > 0 ? whereParts.join(" AND ") : "1";
        const page = parseInt(request.get('page', '1'));
        const pageLen = parseInt(request.get('pageLen', '10'));

        const data = await this.findWithPagination(
            whereClause,
            { id: "DESC" },
            page,
            pageLen,
            params
        );

        return {
            page: data.page,
            pageLen: data.length,
            pageTotal: data.pageTotal,
            recordTotal: data.recordTotal,
            data: data.items,
        };
    }
    public async toggleWishlist(customerId: number, productId: number): Promise<{
        action: 'added' | 'removed',
        data: ProductWishlistData | null
    }> {
        const existingItem = await this.findOne({
            product_id: productId,
            customer_id: customerId,
        });

        if (existingItem) {
            await this.deleteOne({ id: existingItem.id });
            return { action: 'removed', data: null };
        } else {
            const newItemData: ProductWishlistData = {
                id: 0,
                product_id: productId,
                customer_id: customerId,
            };
            const addedItem = await this.vdSave(newItemData);
            if (addedItem === false) {
                console.error("Lưu sản phẩm vào wishlist thất bại sau khi vdSave.");
                throw new Error("Validation hoặc lưu DB thất bại.");
            }
            return { action: 'added', data: addedItem as ProductWishlistData };
        }
    }
    async getTotalCountByCustomer(customerId: number): Promise<number> {
        if (customerId <= 0) {
            return 0;
        }

        const sql = `
            SELECT COUNT(id) AS total_count
            FROM ${this.table}
            WHERE customer_id = ?
        `;

        try {
            const [rows]: any = await this.query(sql, [customerId]);

            return Number(rows[0]?.total_count || 0);
        } catch (error) {
            console.error("Lỗi truy vấn SQL getTotalCountByCustomer:", error);
            throw new Error("Lỗi khi đếm sản phẩm trong Wishlist.");
        }
    }
}