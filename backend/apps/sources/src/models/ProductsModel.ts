import SingleModel from '@src/SingleModel.js';
import PromotionModel, { PromotionData } from './PromotionsModel.js';
import ProductPriceModel, { ProductPriceData } from './ProductPriceModel.js';
import ProductPromotionModel, { ProductPromotionData } from './ProductPromotionsModel.js';
import { Request } from '../Request.js';
import PackageModel from './PackagesModel.js';
import CategoryModel from './CategoriesModel.js';

export interface ProductPricesData extends ProductPriceData {
    store_id?: number | null;
    packageName?: string;
    expense?: number;
    image?: string;
    discount?: number;
    promotion_type?: 'FlashSale' | 'Promotion' | null,
    promotion_quantity?: number | null;
    promotion_fullname?: string | null;

    product_price_id?: number;
    promotion_id?: number | null;
    discount_value?: any,
    discount_type?: any,
    start_date?: string | null;
    end_date?: string | null;
    start_time?: string | null;
    end_time?: string | null;
}
export interface FullPromotionData extends PromotionData {
    remaining_quantity: number;
    customer_quantity: number;
    expense?: number;
    discount_value: number;
    discount_type: 'P' | 'F' | null;
    promotion_quantity?: number | null;
    product_id: number;
    product_price_id: any,

}
export interface ProductData {
    id?: number;
    store_id: number;
    code?: string;
    alias: string;
    name?: string;
    excerpt?: string;
    description?: string;
    content?: string;
    meta_title?: string;
    meta_description?: string;
    meta_keywords?: string;
    detail_info?: string;
    image?: string;
    gallery?: string;
    hot?: number;
    package_id: number;
    category_ids?: string;
    view?: number;
    review_total?: number;
    review_point?: number;
    review_point_1?: number;
    review_point_2?: number;
    review_point_3?: number;
    review_point_4?: number;
    review_point_5?: number;
    sold?: number;
    reason_cancel?: string;
    status?: number;
    is_deleted?: number;

    created_at?: string;
    updated_at?: string;
    created_by?: number;
    updated_by?: number;

    prices: ProductPricesData[];
    packageName?: string;
}
export default class ProductModel extends SingleModel<ProductData> {
    table = 'product';

    vdObject = {
        store_id: 'required|integer',
        code: 'maxLen(20)',
        alias: 'required|minLen(2)|maxLen(150)|unique(product,alias)',
        name: 'required|minLen(2)|maxLen(150)',
        excerpt: 'maxLen(255)',
        meta_title: 'maxLen(250)',
        meta_description: 'maxLen(250)',
        meta_keywords: 'maxLen(250)',
        package_id: 'required|integer',
        hot: 'numeric|min(0)|max(1)',
        status: 'numeric',
        is_deleted: 'numeric|min(0)|max(1)',
        reason_cancel: 'maxLen(255)'
    };

    fieldName(key: any) {
        const data: any = {
            id: 'ID Sản phẩm',
            store_id: 'ID Cửa hàng',
            code: 'Mã Sản phẩm',
            alias: 'Đường dẫn (Alias)',
            name: 'Tên Sản phẩm',
            excerpt: 'Mô tả ngắn',
            description: 'Mô tả',
            content: 'Nội dung chi tiết',
            meta_title: 'Meta Title',
            meta_description: 'Meta Description',
            meta_keywords: 'Meta Keywords',
            detail_info: 'Thông tin chi tiết',
            image: 'Ảnh đại diện',
            gallery: 'Bộ sưu tập ảnh',
            hot: 'Sản phẩm Hot',
            package_id: 'ID Gói/Package',
            category_ids: 'ID Danh mục',
            view: 'Lượt xem',
            review_total: 'Tổng số đánh giá',
            review_point: 'Điểm đánh giá TB',
            review_point_1: 'Số đánh giá 1 sao',
            review_point_2: 'Số đánh giá 2 sao',
            review_point_3: 'Số đánh giá 3 sao',
            review_point_4: 'Số đánh giá 4 sao',
            review_point_5: 'Số đánh giá 5 sao',
            sold: 'Số lượng đã bán',
            reason_cancel: 'Lý do hủy',
            status: 'Trạng thái',
            is_deleted: 'Đã xóa',
            created_at: 'Ngày tạo',
            updated_at: 'Ngày cập nhật',
            created_by: 'Người tạo',
            updated_by: 'Người cập nhật',
        };
        return data[key] ?? key;
    }

    async getData(
        request: Request,
        customer: any,
        is_deleted: any,
        status: number
    ): Promise<any> {
        const productsModel = new ProductModel(this.pool);
        const productPriceModel = new ProductPriceModel(this.pool);
        const nameSh = request.get("nameSh");
        const codeSh = request.get("codeSh");
        const statusSh = request.get("statusSh");
        const package_idSh = request.get("package_idSh");
        const category_idsSh = request.get("category_idsSh");
        const hotSh = request.get("hotSh");
        const publishDateSh = request.get("publishDateSh");
        const store_idSh = request.get("store_idSh");
        const product_idSh = request.get("product_idSh");
        const aliasSh = request.get("aliasSh") || request.get("alias");
        const category_idNum = Number(category_idsSh);
        const idsToFilter: number[] = [];
        const whereParts: string[] = [];
        const reviewFilterParts: string[] = [];

        const productTableName = "product";

        const isDeletedNum = Number(is_deleted);
        if (isDeletedNum === 0) {
            whereParts.push(`${productTableName}.is_deleted = 0`);
        } else if (isDeletedNum === 1) {
            whereParts.push(`${productTableName}.is_deleted = 1`);
        }
        const categoryFilterParts: string[] = [];

        const listId: number[] = await request.get('category_ids', [], 'ids');
        if (listId && listId.length > 0) {
            for (const id of listId) {
                const searchId = String(id);
                const likeConditions: string[] = [];
                likeConditions.push(`${productTableName}.category_ids = '["${searchId}"]'`);
                likeConditions.push(`${productTableName}.category_ids LIKE '["${searchId}",%'`);
                likeConditions.push(`${productTableName}.category_ids LIKE '%,"${searchId}"]'`);
                likeConditions.push(`${productTableName}.category_ids LIKE '%,"${searchId}",%'`);
                categoryFilterParts.push(`(${likeConditions.join(" OR ")})`);
            }

            if (categoryFilterParts.length > 0) {
                const categoryWhereClause = `(${categoryFilterParts.join(" OR ")})`;

                whereParts.push(`${productTableName}.category_ids IS NOT NULL`);
                whereParts.push(`${productTableName}.category_ids != '[]'`);
                whereParts.push(categoryWhereClause);
            }
        }
        if (aliasSh) {
            whereParts.push(`product.alias = '${aliasSh}'`);
        }
        if (nameSh) {
            const keyword = `%${nameSh}%`;
            whereParts.push(`${productTableName}.name LIKE '${keyword}'`);
        }
        if (codeSh) {
            whereParts.push(`product.code = '${codeSh}'`);
        }
        if (package_idSh) {
            whereParts.push(`product.package_id = ${Number(package_idSh)} `);
        }
        if (product_idSh) {
            whereParts.push(`product.id = ${Number(product_idSh)} `);
        }
        if (store_idSh) {
            whereParts.push(`product.store_id = ${Number(store_idSh)} `);
        }
        if (hotSh !== null && hotSh !== undefined && hotSh !== "") {
            whereParts.push(`product.hot = ${Number(hotSh)} `);
        }
        if (statusSh !== null && statusSh !== undefined && statusSh !== "") {
            whereParts.push(`product.status = ${Number(statusSh)} `);
        }
        if (publishDateSh) {
            whereParts.push(`DATE(product.created_at) = DATE('${publishDateSh}')`);
        }
        // if (Array.isArray(status) && status.length > 0) {
        //     const statusList = status.filter(s => !isNaN(Number(s))).join(', ');
        //     if (statusList) whereParts.push(`${productTableName}.status IN (${statusList})`);
        // }
        whereParts.push(`${productTableName}.status = ${Number(status)}`);
        if (idsToFilter.length > 0) {

            const allRecursiveConditions: string[] = [];

            for (const id of idsToFilter) {
                const searchString = `"${String(id)}"`;
                const singleIdConditions: string[] = [];
                singleIdConditions.push(`${productTableName}.category_ids LIKE '[${searchString},%'`);
                singleIdConditions.push(`${productTableName}.category_ids LIKE '%, ${searchString},%'`);
                singleIdConditions.push(`${productTableName}.category_ids LIKE '%,${searchString},%'`);
                singleIdConditions.push(`${productTableName}.category_ids LIKE '%, ${searchString}]'`);
                singleIdConditions.push(`${productTableName}.category_ids LIKE '%,${searchString}]'`);
                singleIdConditions.push(`${productTableName}.category_ids = '[${searchString}]'`);

                allRecursiveConditions.push(`(${singleIdConditions.join(" OR ")})`);
            }
            const finalLikeCondition = `(${allRecursiveConditions.join(" OR ")})`;

            whereParts.push(`${productTableName}.category_ids IS NOT NULL`);
            whereParts.push(`${productTableName}.category_ids != '[]'`);
            whereParts.push(finalLikeCondition);
        }
        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";
        const page = parseInt(request.get("page", "1"));
        const limitSh = request.get("limit");
        const defaultPageLen = parseInt(request.get("pageLen", "10"));

        const pageLen = limitSh ? parseInt(limitSh) : defaultPageLen;

        const finalPageLen = Math.max(1, pageLen);

        const data = await this.findWithPagination(
            whereClause,
            { "product.created_at": "DESC", "product.id": "DESC" },
            page,
            finalPageLen
        );
        const productItems = data.items;
        let finalProducts: ProductData[] = productItems as ProductData[];
        if (productItems.length > 0) {

            const productIds: number[] = [];
            const allProductPriceIds: number[] = [];

            for (const product of productItems) {
                const productId = product.id;
                if (typeof productId === 'number' && productId > 0) {
                    productIds.push(productId);
                }
            }

            if (productIds.length > 0) {

                const allPriceRecords = await productPriceModel.getPricesByProductIds(productIds);

                for (const priceRecord of allPriceRecords) {
                    const priceId = priceRecord.id;
                    if (typeof priceId === 'number' && priceId > 0) {
                        allProductPriceIds.push(priceId);
                    }
                }

                const calculatedPrices = await productsModel.getCalculatedMultiPrices(
                    allProductPriceIds,
                    customer
                );

                const calculatedPricesMap = new Map<number, ProductPricesData>();

                for (const item of calculatedPrices) {
                    const priceRecordId = item.id;
                    if (typeof priceRecordId === 'number' && priceRecordId > 0) {
                        calculatedPricesMap.set(priceRecordId, item as ProductPricesData);
                    }
                }

                const mergedProducts: ProductData[] = [];

                for (const product of productItems) {
                    const parentStoreId = product.store_id;
                    const productPrices: ProductPricesData[] = [];

                    for (const priceRecord of allPriceRecords) {
                        if (priceRecord.product_id === product.id) {
                            productPrices.push({
                                ...priceRecord,
                                store_id: priceRecord.store_id
                            } as ProductPricesData);
                        }
                    }

                    const enrichedPrices: ProductPricesData[] = [];

                    for (const price of productPrices) {
                        const priceRecordId = Number(price.id);

                        let calculatedData: ProductPricesData | undefined | null = null;

                        if (!Number.isNaN(priceRecordId) && priceRecordId > 0) {
                            calculatedData = calculatedPricesMap.get(priceRecordId);
                        }

                        // enrichedPrices.push((calculatedData || price) as ProductPricesData);
                        enrichedPrices.push({
                            ...(calculatedData || price),
                            store_id: (calculatedData as any)?.store_id || (price as any).store_id || parentStoreId
                        } as any);
                    }

                    mergedProducts.push({
                        ...product,
                        prices: enrichedPrices,
                    } as ProductData);
                }

                finalProducts = mergedProducts;
            }
        }
        return {
            page: data.page,
            pageLen: finalPageLen,
            pageTotal: data.pageTotal,
            recordTotal: data.recordTotal,
            data: finalProducts,
        };

    }

    public async calculatePackagePrice(
        productPrice: ProductPriceData,
        applicablePromotions: FullPromotionData[],
        customer: any,
        productId: number
    ): Promise<ProductPriceData> {

        const priceFromDb = productPrice.price || 0;
        let finalPrice = priceFromDb;
        const originalPrice = priceFromDb;

        let promotionType: 'FlashSale' | 'Promotion' | null = null;
        let bestDiscountValue: number = 0;
        let bestDiscountType: 'P' | 'F' | null = null;
        let bestPromotionId: number | null = null;
        let bestPromoStartDate: string | null = null;
        let bestPromoEndDate: string | null = null;
        let bestPromoStartTime: string | null = null;
        let bestPromoEndTime: string | null = null;
        let bestPromotionQuantity: number | null = null;
        let bestPromotionFullName: string | null = null;

        const now = new Date();

        if (originalPrice > 0 && typeof productPrice.package_id === 'number') {

            for (const promo of applicablePromotions) {
                const promotions = new PromotionModel(this.pool)
                const isActive = promotions.isPromotionActive(promo as PromotionData, now);
                const hasQuantity = (promo.remaining_quantity === -1 || promo.remaining_quantity > 0);
                if (!isActive || !hasQuantity) {
                    continue;
                }

                // if (promo.customer_quantity > 0 && customer && customer.id && this.models.voucherStoreCustomer) {

                //     const itemsUsed = await this.models.voucherStoreCustomer.getUsedQuantity(
                //         customer.id,
                //         promo.id, 
                //         productId
                //     );

                //     if (itemsUsed >= promo.customer_quantity) {
                //         continue;
                //     }
                // }

                let calculatedPrice = originalPrice;
                const isFlashSale = !!promo.flash_type;

                if (promo.discount_type === 'P') {
                    calculatedPrice = originalPrice * (1 - promo.discount_value / 100);
                } else if (promo.discount_type === 'F') {
                    calculatedPrice = originalPrice - promo.discount_value;
                }

                if (calculatedPrice < finalPrice) {
                    finalPrice = calculatedPrice;
                    promotionType = isFlashSale ? 'FlashSale' : 'Promotion';
                    bestDiscountValue = promo.discount_value;
                    bestDiscountType = promo.discount_type as 'P' | 'F';
                    bestPromotionId = promo.id as number;
                    bestPromoStartDate = promo.start_date || null;
                    bestPromoEndDate = promo.end_date || null;
                    bestPromoStartTime = promo.start_time || null;
                    bestPromoEndTime = promo.end_time || null;
                    bestPromotionQuantity = promo.promotion_quantity !== undefined ? promo.promotion_quantity : null;
                    bestPromotionFullName = promo.name || 'Chương trình khuyến mãi';
                }
            }
        }

        // const discountPercentage = (finalPrice < originalPrice && originalPrice > 0)
        //     ? Math.round((1 - (finalPrice / originalPrice)) * 10000) / 100
        //     : 0;

        const finalPackageResult: ProductPricesData = {
            ...productPrice,
            price: originalPrice,
            expense: finalPrice,
            store_id: (productPrice as any).store_id,
            // discount: discountPercentage,
            promotion_fullname: bestPromotionFullName,
            promotion_type: promotionType,
            discount_value: bestDiscountValue,
            discount_type: bestDiscountType,
            product_price_id: productPrice.id,
            promotion_id: bestPromotionId,
            promotion_quantity: bestPromotionQuantity,
            start_date: bestPromoStartDate,
            end_date: bestPromoEndDate,
            start_time: bestPromoStartTime,
            end_time: bestPromoEndTime,
        };

        return finalPackageResult;
    }

    public async getCalculatedSinglePrice(// lấy 1 giá
        productPriceData: ProductPriceData,
        customer: any
    ): Promise<ProductPriceData | null> {

        const productId = productPriceData.product_id;
        if (!productId) {
            return productPriceData;
        }
        const productPromotions = new ProductPromotionModel(this.pool);
        const promotionDetails = await productPromotions.getProductsPromotions(productId);

        const promoIds = promotionDetails?.map(p => p.promotion_id!).filter(id => id) || [];
        const promotions = new PromotionModel(this.pool)
        const promotionHeaders = await promotions.getPromotion(promoIds);
        const applicablePromotions = this.mergePromotionData(promotionDetails, promotionHeaders);

        const finalResult = await this.calculatePackagePrice(
            productPriceData,
            applicablePromotions,
            customer,
            productId
        );

        return finalResult;
    }
    public mergePromotionData(
        productPromotion: ProductPromotionData[] | null,
        promotion: PromotionData[]
    ): FullPromotionData[] {
        if (!productPromotion || productPromotion.length === 0 || !promotion || promotion.length === 0) {
            return [];
        }

        const headerMap = new Map<number, PromotionData>();
        for (const header of promotion) {
            if (header.id) {
                headerMap.set(header.id, header);
            }
        }

        const fullPromotions: FullPromotionData[] = [];

        for (const detail of productPromotion) {

            const promotionId = detail.promotion_id;

            if (promotionId && headerMap.has(promotionId)) {
                const header = headerMap.get(promotionId)!;

                const fullPromo: FullPromotionData = {
                    id: header.id,
                    status: header.status,
                    is_deleted: header.is_deleted,
                    name: header.name,
                    start_time: header.start_time,
                    end_time: header.end_time,
                    start_date: header.start_date,
                    end_date: header.end_date,
                    flash_type: header.flash_type,
                    promotion_id: header.id,
                    promotion_quantity: detail.quantity || 0,
                    product_id: detail.product_id,
                    product_price_id: detail.product_price_id,
                    discount_value: detail.discount || 0,
                    discount_percent: detail.discount || 0,
                    discount_type: detail.discount_type as 'P' | 'F' | null,
                    customer_quantity: detail.customer_quantity || 0,
                    remaining_quantity: detail.remaining_quantity || 0,

                } as FullPromotionData;

                fullPromotions.push(fullPromo);
            }
        }
        return fullPromotions;
    }
    public async getSingleProductPrice(productPriceId: number): Promise<ProductPriceData | null> {

        const priceData = await this.findOne({ id: productPriceId });


        if (!priceData || !priceData.product_id || !priceData.package_id) {
            return null;
        }

        const productId = priceData.product_id as number;
        const packageId = priceData.package_id as number;
        const productsModel = new ProductModel(this.pool);
        const packageModel = new PackageModel(this.pool);
        const [productInfo, packageInfo] = await Promise.all([
            productsModel.getProductNameById(productId),
            packageModel.getPackageNameById(packageId),
        ]);

        return {
            ...priceData,
            productName: productInfo?.name || null,
            packageName: packageInfo?.name || null,
        } as ProductPriceData;
    }
    public async getCalculatedMultiPrices(
        productPriceIds: number[],
        customer: any
    ): Promise<ProductPricesData[]> {
        const productPrice = new ProductPriceModel(this.pool)
        const priceDataList = await productPrice.getMultiProductPrices(productPriceIds);

        if (!priceDataList || priceDataList.length === 0) {
            return [];
        }

        const calculationPromises = priceDataList.map(priceData => {

            return this.getCalculatedSinglePrice(
                priceData,
                customer
            );
        });

        const finalPriceList = await Promise.all(calculationPromises);

        return finalPriceList.filter(item => item !== null) as ProductPricesData[];
    }

    public async getProductsByIds(productIds: number[]): Promise<ProductData[]> {
        if (productIds.length === 0) {
            return [];
        }

        const safeIdList = productIds
            .map(id => Number(id))
            .filter(id => id > 0)
            .join(',');

        const whereClause = `id IN (${safeIdList})`;

        const products = await this.find(
            whereClause,
            false,
            1000,
            undefined,
            "*"
        );

        return products as ProductData[];
    }
    public async findById(id: number): Promise<ProductData | null> {
        if (!id) return null;
        const result = await this.findOne({ id: id });
        return result as ProductData | null;
    }

    public async getProductNameById(productId: number): Promise<{ name: string, store_id: number, image: string } | null> {
        const product = await this.findOne({ id: productId, is_deleted: 0 });

        if (!product || !product.name || !product.store_id || !product.image) {

            return null;
        }

        return {
            name: product.name,
            store_id: product.store_id,
            image: product.image,
        };
    }
    public async getMultiProductDetails(productIds: number[]): Promise<Map<number, any>> {
        if (!productIds || productIds.length === 0) {
            return new Map();
        }
        const sql = `SELECT * FROM product WHERE id IN (?) AND is_deleted = 0`;
        const [rows]: any = await this.query(sql, [productIds]);
        const productMap = new Map<number, any>();
        if (rows) {
            rows.forEach((row: any) => {
                productMap.set(row.id, row);
            });
        }

        return productMap;
    }

    async detailByAliasWithPrice(alias: string, customer: any): Promise<ProductData | null> {
        const productModel = new ProductModel(this.pool);
        const productPriceModel = new ProductPriceModel(this.pool);
        const packageModel = new PackageModel(this.pool);

        const productConditions: any = { alias: alias, status: 1, is_deleted: 0 };
        const item: ProductData = await productModel.findOne(productConditions);

        if (!item) {
            return null;
        }

        const productId = item.id;
        if (!productId) {
            return item;
        }

        const allPriceRecords: ProductPriceData[] = await productPriceModel.getPricesByProductIds([productId]);

        const packageIds = new Set<number>();
        if (item.package_id) {
            packageIds.add(item.package_id);
        }
        allPriceRecords.forEach(price => {
            if (price.package_id) {
                packageIds.add(price.package_id);
            }
        });

        const packageIdArray = Array.from(packageIds);
        let packageNameMap = new Map<number, string>();

        if (packageIdArray.length > 0) {
            packageNameMap = await packageModel.getNamesByIds(packageIdArray);
        }

        const enrichedPrices: ProductPriceData[] = [];

        for (const priceRecord of allPriceRecords) {
            const calculatedPrice = await this.getCalculatedSinglePrice(
                priceRecord,
                customer
            );

            const finalPriceRecord: ProductPriceData = calculatedPrice || { ...priceRecord };

            if (finalPriceRecord.package_id && packageNameMap.has(finalPriceRecord.package_id)) {
                (finalPriceRecord as any).packageName = packageNameMap.get(finalPriceRecord.package_id);
            }

            enrichedPrices.push(finalPriceRecord);
        }

        // if (item.package_id && packageNameMap.has(item.package_id)) {
        //     (item as ProductData).packageName = packageNameMap.get(item.package_id);
        // } else {
        //     (item as ProductData).packageName = undefined;
        // }

        const finalProduct = {
            ...item,
            prices: enrichedPrices,
        } as ProductData;

        return finalProduct;
    }
    async detailByIdWithPrice(productId: number, customer: any): Promise<ProductData | null> {
        const productModel = new ProductModel(this.pool);
        const productPriceModel = new ProductPriceModel(this.pool);
        const packageModel = new PackageModel(this.pool);

        const productConditions: any = { id: productId, status: 1, is_deleted: 0 };
        const item: ProductData = await productModel.findOne(productConditions);

        if (!item) {
            return null;
        }

        const allPriceRecords: ProductPriceData[] = await productPriceModel.getPricesByProductIds([productId]);

        const packageIds = new Set<number>();

        allPriceRecords.forEach(price => {
            if (price.package_id) {
                packageIds.add(price.package_id);
            }
        });

        const packageIdArray = Array.from(packageIds);
        let packageNameMap = new Map<number, string>();

        if (packageIdArray.length > 0) {
            packageNameMap = await packageModel.getNamesByIds(packageIdArray);
        }

        const enrichedPrices: ProductPriceData[] = [];

        for (const priceRecord of allPriceRecords) {
            const calculatedPrice = await this.getCalculatedSinglePrice(
                priceRecord,
                customer
            );

            const finalPriceRecord: ProductPriceData = calculatedPrice || { ...priceRecord };

            if (finalPriceRecord.package_id && packageNameMap.has(finalPriceRecord.package_id)) {
                (finalPriceRecord as any).packageName = packageNameMap.get(finalPriceRecord.package_id);
            }

            enrichedPrices.push(finalPriceRecord);
        }


        const finalProduct = {
            ...item,
            prices: enrichedPrices,
        } as ProductData;

        return finalProduct;
    }

    public async findByCategoryId(
        categoryId: number,
        limit?: number | boolean,
        order?: Record<string, "DESC" | "ASC">,
        offset?: number,
        additionalWhereClause: string = ''
    ): Promise<ProductData[]> {

        const productTableName = this.table;
        const searchId = String(categoryId);

        const baseWhereClause: string = `
        ${productTableName}.is_deleted = 0 
        AND ${productTableName}.status = 1 
        AND (
            ${productTableName}.category_ids = '["${searchId}"]' 
            OR ${productTableName}.category_ids LIKE '["${searchId}",%'
            OR ${productTableName}.category_ids LIKE '%,"${searchId}"]'
            OR ${productTableName}.category_ids LIKE '%,"${searchId}",%'
        )
    `;

        const finalWhereClause = baseWhereClause + additionalWhereClause;

        const orderOptions = order || { created_at: "DESC" };

        let limitOption: any;

        if (limit && typeof limit === 'number' && offset && typeof offset === 'number') {
            limitOption = `${limit} OFFSET ${offset}`;
        } else if (limit && typeof limit === 'number') {
            limitOption = limit;
        }

        return this.find(
            finalWhereClause,
            orderOptions,
            limitOption
        );
    }
    async getProductsByCategoryAlias(categoryAlias: string, customer: any, options: any = {}): Promise<ProductData[]> {

        const categoryModel = new CategoryModel(this.pool);
        const productModel = new ProductModel(this.pool);
        const packageModel = new PackageModel(this.pool);
        const productPriceModel = new ProductPriceModel(this.pool);

        const categoryConditions = { alias: categoryAlias, status: 1, is_deleted: 0 };
        const categoryItem = await categoryModel.findOne(categoryConditions);

        if (!categoryItem) { return []; }

        const categoryId = categoryItem.id;
        const productTableName = "product";
        const selectedStarPoints: number[] = options.frating || [];
        let reviewFilterClause = '';

        if (selectedStarPoints.length > 0) {
            const minStar = Math.min(...selectedStarPoints);

            if (minStar >= 1 && minStar <= 5) {
                const productTableName = 'product';

                const reviewWhere = `${productTableName}.review_point >= ${minStar}`;

                reviewFilterClause = ` AND ${reviewWhere}`;
            }
        }

        const descendantIds: number[] = await categoryModel.getAllDescendantIds(categoryId);
        const allTargetIds: number[] = [categoryId, ...descendantIds];

        const categoryFilterParts: string[] = [];
        allTargetIds.forEach(id => {
            const searchId = String(id);
            const likeConditions: string[] = [];
            likeConditions.push(`${productTableName}.category_ids = '["${searchId}"]'`);
            likeConditions.push(`${productTableName}.category_ids LIKE '["${searchId}",%'`);
            likeConditions.push(`${productTableName}.category_ids LIKE '%,"${searchId}"]'`);
            likeConditions.push(`${productTableName}.category_ids LIKE '%,"${searchId}",%'`);
            categoryFilterParts.push(`(${likeConditions.join(" OR ")})`);
        });

        const mainCategoryFilterClause = ` AND (${categoryFilterParts.join(" OR ")})`;


        const filterSubCategoryIds: number[] = options.fcatid || [];
        let filterArrayWhereClause = '';

        if (filterSubCategoryIds.length > 0) {
            const fcatFilterParts: string[] = [];
            for (const id of filterSubCategoryIds) {
                const searchId = String(id);
                const likeConditions: string[] = [];
                likeConditions.push(`${productTableName}.category_ids = '["${searchId}"]'`);
                likeConditions.push(`${productTableName}.category_ids LIKE '["${searchId}",%'`);
                likeConditions.push(`${productTableName}.category_ids LIKE '%,"${searchId}"]'`);
                likeConditions.push(`${productTableName}.category_ids LIKE '%,"${searchId}",%'`);
                fcatFilterParts.push(`(${likeConditions.join(" OR ")})`);
            }

            if (fcatFilterParts.length > 0) {
                const fcatWhereClause = `(${fcatFilterParts.join(" OR ")})`;
                filterArrayWhereClause = ` 
                AND ${productTableName}.category_ids IS NOT NULL
                AND ${productTableName}.category_ids != '[]'
                AND ${fcatWhereClause}
            `;
            }
        }

        const finalAdditionalWhereClause = mainCategoryFilterClause + filterArrayWhereClause + reviewFilterClause;

        const orderOptions = options.order || undefined;

        // const products: ProductData[] = await productModel.findWithFilters(
        //     finalAdditionalWhereClause,
        //     options.limit,
        //     orderOptions,
        //     options.offset
        // );
        const paginationResult = await productModel.findWithFilters(
            finalAdditionalWhereClause,
            options.limit,
            orderOptions,
            options.offset
        );

        if (paginationResult.length === 0) {
            return [];
        }
        const products: ProductData[] = paginationResult.items;
        const productIds: number[] = products.map(p => p.id).filter((id): id is number => id !== undefined && id !== null);
        const allPriceRecords: ProductPriceData[] = await productPriceModel.getPricesByProductIds(productIds);
        const allProductPriceIds: number[] = allPriceRecords.map(price => price.id).filter((id): id is number => id !== undefined && id !== null);

        const packageIds = new Set<number>();
        allPriceRecords.forEach(price => { if (price.package_id) { packageIds.add(price.package_id); } });
        let packageNameMap = new Map<number, string>();
        if (packageIds.size > 0) {
            const packageIdArray = Array.from(packageIds);
            packageNameMap = await packageModel.getNamesByIds(packageIdArray);
        }

        const calculatedPrices: ProductPriceData[] = await productModel.getCalculatedMultiPrices(
            allProductPriceIds,
            customer
        );

        const calculatedPricesMap = new Map<number, ProductPriceData>(
            calculatedPrices.map(p => [p.id, p] as [number, ProductPriceData])
        );

        const productsMap = new Map<number, ProductData>(
            products
                .filter((p): p is ProductData => p.id !== undefined && p.id !== null)
                .map(p => [
                    p.id,
                    { ...p, prices: [] } as ProductData
                ] as [number, ProductData])
        );

        for (const priceRecord of allPriceRecords) {

            const priceRecordId = priceRecord.id as number;
            const calculatedData = calculatedPricesMap.get(priceRecordId);

            let finalPriceRecord: ProductPriceData;

            if (calculatedData) {
                finalPriceRecord = calculatedData;
            } else {
                finalPriceRecord = { ...priceRecord } as ProductPriceData;

                if (finalPriceRecord.package_id && packageNameMap.has(finalPriceRecord.package_id)) {
                    (finalPriceRecord as any).packageName = packageNameMap.get(finalPriceRecord.package_id);
                }
            }

            const product = productsMap.get(finalPriceRecord.product_id as number);
            if (product) {
                product.prices.push(finalPriceRecord);
            }
        }

        return Array.from(productsMap.values());
    }


    public async findWithFilters(
        categoryFilterClause: string,
        limit?: number | boolean,
        order?: Record<string, "DESC" | "ASC">,
        offset?: number
    ): Promise<{
        page: number;
        length: number;
        pageTotal: number;
        recordTotal: number;
        items: ProductData[];
    }> {

        const productTableName = this.table;

        const baseConditions: string = `
        ${productTableName}.is_deleted = 0 
        AND ${productTableName}.status = 1 
    `;

        const finalWhereClause = baseConditions + categoryFilterClause;

        const orderOptions = order || { created_at: "DESC" };
        let joinClause: string | undefined = undefined;
        let fieldsToSelect = `${productTableName}.*`;
        let groupByClause = '';

        if (orderOptions.min_price || orderOptions.max_price || orderOptions['min_price'] || orderOptions['max_price']) {

            joinClause = ` LEFT JOIN product_price T2 ON T2.product_id = ${productTableName}.id `;

            fieldsToSelect = `${productTableName}.*, MIN(T2.price) AS min_price`;

            groupByClause = ` GROUP BY ${productTableName}.id `;
        }

        const limitNum = typeof limit === 'number' ? limit : 10;
        const page = (offset && typeof offset === 'number' && limitNum > 0)
            ? Math.floor(offset / limitNum) + 1
            : 1;

        const result = await this.findWithPaginations(
            finalWhereClause,
            orderOptions,
            page,
            limitNum,
            joinClause,
            fieldsToSelect,
            groupByClause
        );


        return result as any;
    }

    async getSimilarProductsByAlias(currentProductAlias: string, customer: any, options: any = {}): Promise<ProductData[]> {

        const productModel = new ProductModel(this.pool);
        const categoryModel = new CategoryModel(this.pool);
        const productPriceModel = new ProductPriceModel(this.pool);
        const packageModel = new PackageModel(this.pool);

        const currentProduct = await productModel.findOne({ alias: currentProductAlias, is_deleted: 0, status: 1 });
        if (!currentProduct || !currentProduct.category_ids) {
            return [];
        }

        const currentProductId = currentProduct.id;

        const primaryCategoryIds: number[] = JSON.parse(currentProduct.category_ids);
        if (primaryCategoryIds.length === 0) {
            return [];
        }
        const mainCategoryId = primaryCategoryIds[0];
        const descendantIds: number[] = await categoryModel.getAllDescendantIds(mainCategoryId);
        const allTargetIds: number[] = [mainCategoryId, ...descendantIds];

        if (allTargetIds.length === 0) {
            return [];
        }

        const productTableName = "product";
        const categoryFilterParts: string[] = [];
        allTargetIds.forEach(id => {
            const searchId = String(id);
            const likeConditions: string[] = [];
            likeConditions.push(`${productTableName}.category_ids = '["${searchId}"]'`);
            likeConditions.push(`${productTableName}.category_ids LIKE '["${searchId}",%'`);
            likeConditions.push(`${productTableName}.category_ids LIKE '%,"${searchId}"]'`);
            likeConditions.push(`${productTableName}.category_ids LIKE '%,"${searchId}",%'`);
            categoryFilterParts.push(`(${likeConditions.join(" OR ")})`);
        });

        const mainCategoryFilterClause = ` AND (${categoryFilterParts.join(" OR ")})`;
        const excludeProductClause = ` AND ${productTableName}.id != ${currentProductId} `;

        const finalWhereClause = mainCategoryFilterClause + excludeProductClause;

        const paginationResult = await productModel.findWithFilters(
            finalWhereClause,
            options.limit || 10,
            undefined,
            options.offset
        );

        const products: ProductData[] = paginationResult.items;

        if (products.length === 0) { return []; }

        const productIds: number[] = products.map(p => p.id).filter((id): id is number => id !== undefined && id !== null);
        const allPriceRecords: ProductPriceData[] = await productPriceModel.getPricesByProductIds(productIds);
        const allProductPriceIds: number[] = allPriceRecords.map(price => price.id).filter((id): id is number => id !== undefined && id !== null);

        const packageIds = new Set<number>();
        allPriceRecords.forEach(price => { if (price.package_id) { packageIds.add(price.package_id); } });
        let packageNameMap = new Map<number, string>();
        if (packageIds.size > 0) {
            const packageIdArray = Array.from(packageIds);
            packageNameMap = await packageModel.getNamesByIds(packageIdArray);
        }

        const calculatedPrices: ProductPriceData[] = await productModel.getCalculatedMultiPrices(allProductPriceIds, customer);
        const calculatedPricesMap = new Map<number, ProductPriceData>(calculatedPrices.map(p => [p.id, p] as [number, ProductPriceData]));

        const productsMap = new Map<number, ProductData>(
            products
                .filter((p): p is ProductData => p.id !== undefined && p.id !== null)

                .map(p => [
                    p.id,
                    { ...p, prices: [] } as ProductData
                ] as [number, ProductData])
        );

        for (const priceRecord of allPriceRecords) {
            const calculatedData = calculatedPricesMap.get(priceRecord.id as number);
            const finalPriceRecord: ProductPriceData = calculatedData || { ...priceRecord };

            if (!calculatedData && finalPriceRecord.package_id && packageNameMap.has(finalPriceRecord.package_id)) {
                (finalPriceRecord as any).packageName = packageNameMap.get(finalPriceRecord.package_id);
            }

            const product = productsMap.get(finalPriceRecord.product_id as number);
            if (product) {
                product.prices.push(finalPriceRecord);
            }
        }

        return Array.from(productsMap.values());
    }
}
