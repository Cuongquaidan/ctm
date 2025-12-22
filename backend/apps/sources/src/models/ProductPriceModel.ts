import SingleModel from '@src/SingleModel.js';
import { Request } from '../Request.js';
import ProductModel, { ProductData } from './ProductsModel.js';
import PackageModel from './PackagesModel.js';

export interface ProductPriceData {
    id?: number;
    product_id?: number;
    package_id?: number;
    productName?: string;
    is_dist?: number;
    price?: number;
    sold_quantity?: number;
    remaining_quantity?: number;
    quantity?: number;
    updated_at?: string;
    store_id?: number | null;
}

export default class ProductPriceModel extends SingleModel<ProductPriceData> {
    table = 'product_price';

    vdObject = {
        product_id: 'required|number',
        package_id: 'number',
        price: 'required|number|minVal(0)',
        is_dist: 'number',
        sold_quantity: 'number',
        remaining_quantity: 'number',
        quantity: 'number',
    };

    validatePriceUpdate = {
        price: 'required|number|minVal(0)',
        remaining_quantity: 'number',
        quantity: 'number',
    };

    fieldName(key: any) {
        const data: any = {
            id: 'ID',
            product_id: 'ID Sản phẩm',
            package_id: 'ID Gói/Quy cách',
            is_dist: 'Giá phân phối',
            price: 'Giá',
            sold_quantity: 'Số lượng đã bán',
            remaining_quantity: 'Số lượng còn lại',
            quantity: 'Tổng số lượng',
            updated_at: 'Thời gian cập nhật',
        };
        return data[key] ?? key;
    }

    async getDatas(
        request: Request
    ): Promise<{
        page: number;
        pageLen: number;
        pageTotal: number;
        recordTotal: number;
        data: ProductPriceData[];
    }> {
        const productIdSh = request.get("productIdSh");
        const packageIdSh = request.get("packageIdSh");
        const isDistSh = request.get("isDistSh");
        const productNameSh = request.get("productNameSh");
        const codeSh = request.get("codeSh");

        const whereParts: string[] = [];
        if (productNameSh) {
            const keyword = `%${productNameSh}%`;
            whereParts.push(`product.name LIKE '${keyword}'`);
        }
        if (codeSh) {
            whereParts.push(`product.code = '${codeSh}'`);
        }
        if (productIdSh) {
            whereParts.push(`product_price.product_id = ${Number(productIdSh)}`);
        }

        if (packageIdSh) {
            whereParts.push(`product_price.package_id = ${Number(packageIdSh)}`);
        }

        if (isDistSh) {
            whereParts.push(`product_price.is_dist = ${Number(isDistSh)}`);
        }

        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";

        const page = parseInt(request.get("page", "1"));
        const pageLen = parseInt(request.get("pageLen", "10"));
        const joinClause = `
            LEFT JOIN \`product\` ON product_price.product_id = \`product\`.id
            LEFT JOIN \`packages\` ON product_price.package_id = \`packages\`.id
        `;

        const selectFields = `
            product_price.*, 
            \`product\`.name AS productName,
            \`packages\`.name AS packageName
`;
        const data = await this.findWithPagination(
            whereClause,
            { "product_price.product_id": "ASC", "product_price.package_id": "ASC" },
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

    // public async getPricesByProductIds(productIds: number[]): Promise<ProductPriceData[]> {
    //     if (!productIds || productIds.length === 0) return [];

    //     const validIds = productIds.filter(id => id > 0);
    //     const idList = validIds.join(',');

    //     const sql = `
    //         SELECT 
    //             T1.id, 
    //             T1.product_id, 
    //             T1.package_id, 
    //             IFNULL(T1.price, 0) AS price, 
    //             T1.remaining_quantity
    //         FROM 
    //             \`product_price\` T1
    //         WHERE 
    //             T1.product_id IN (${idList})
    //     `;

    //     const [rows]: any = await this.query(sql);
    //     return rows as ProductPriceData[];
    // }
    public async getPricesByProductIds(productIds: number[]): Promise<ProductPriceData[]> {
        if (!productIds || productIds.length === 0) return [];

        const validIds = productIds.filter(id => id > 0);
        if (validIds.length === 0) return [];

        const idList = validIds.join(',');

        const sql = `
        SELECT 
            T1.id, 
            T1.product_id, 
            T1.package_id, 
            IFNULL(T1.price, 0) AS price, 
            T1.remaining_quantity,
            T2.store_id,             
            T3.name AS packageName   
        FROM 
            \`product_price\` T1
        INNER JOIN \`product\` T2 ON T1.product_id = T2.id
        LEFT JOIN \`packages\` T3 ON T1.package_id = T3.id 
        WHERE 
            T1.product_id IN (${idList})
    `;

        const [rows]: any = await this.query(sql);
        return rows as ProductPriceData[];
    }

    public async getSingleProductPrice(productPriceId: number): Promise<ProductPriceData | null> {

        const priceData = await this.findOne({ id: productPriceId });

        if (!priceData || !priceData.product_id || !priceData.package_id) {
            return null;
        }
        const productId = priceData.product_id as number;
        const packageId = priceData.package_id as number;
        const products = new ProductModel(this.pool)
        const packages = new PackageModel(this.pool)


        const [productInfo, packageInfo] = await Promise.all([
            products.getProductNameById(productId),
            packages.getPackageNameById(packageId),
        ]);

        return {
            ...priceData,
            productName: productInfo?.name || null,
            packageName: packageInfo?.name || null,
            store_id: productInfo?.store_id || null,
            image: productInfo?.image || null,
        } as ProductPriceData;
    }
    public async getMultiProductPrices(ids: number[]): Promise<ProductPriceData[]> {
        if (!ids || ids.length === 0) {
            return [];
        }
        const pricePromises = ids.map(id => {
            return this.getSingleProductPrice(id);
        });

        const results = await Promise.all(pricePromises);

        return results.filter(item => item !== null) as ProductPriceData[];
    }
}