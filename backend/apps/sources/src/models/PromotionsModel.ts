import SingleModel from '../SingleModel.js';
import { Request } from '../Request.js';
import ProductPromotionModel, { ProductPromotionData } from './ProductPromotionsModel.js';
import ProductsModel, { ProductData, ProductPricesData } from './ProductsModel.js';
import ProductPriceModel from './ProductPriceModel.js';

export interface PromotionData {
    id?: number;
    store_id?: number;
    alias?: string;
    name?: string;
    description?: string;
    image?: string;
    date_type?: number;
    start_date?: string;
    end_date?: string;
    start_time?: string;
    end_time?: string;
    day_of_week?: string;
    status?: number;
    nofi_type?: number;
    flash_type?: string;
    created_at?: string;
    updated_at?: string;
    created_by?: number;
    updated_by?: number;
    is_deleted?: number;
}

export default class PromotionModel extends SingleModel<PromotionData> {
    table = 'promotions';

    vdObject = {
        store_id: 'required|number',
        name: 'required|minLen(2)|maxLen(256)',
        alias: 'maxLen(255)|unique(promotions,alias)',
        date_type: 'number',
        start_date: 'date',
        end_date: 'date',
        start_time: 'time',
        end_time: 'time',
        day_of_week: 'maxLen(255)',
        status: 'number',
        nofi_type: 'number',
        flash_type: 'maxLen(10)',
    };

    fieldName(key: any) {
        const data: any = {
            id: 'ID',
            store_id: 'ID Cửa hàng',
            alias: 'Đường dẫn (Alias)',
            name: 'Tên chương trình',
            description: 'Mô tả',
            image: 'Hình ảnh',
            date_type: 'Loại thời gian áp dụng',
            start_date: 'Ngày bắt đầu',
            end_date: 'Ngày kết thúc',
            start_time: 'Giờ bắt đầu',
            end_time: 'Giờ kết thúc',
            day_of_week: 'Ngày trong tuần áp dụng',
            status: 'Trạng thái',
            nofi_type: 'Loại thông báo',
            flash_type: 'Loại Flash Sale',
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
    ): Promise<{
        page: number;
        pageLen: number;
        pageTotal: number;
        recordTotal: number;
        data: PromotionData[];
    }> {
        const nameSh = request.get("nameSh");
        const statusSh = request.get("statusSh");
        const storeIdSh = request.get("storeIdSh");
        const startSh = request.get("startSh");
        const ft = request.get("ft");

        const whereParts: string[] = [];

        if (nameSh) {
            const keyword = `%${nameSh}%`;
            whereParts.push(`promotions.name LIKE '${keyword}'`);
        }

        if (statusSh) {
            whereParts.push(`promotions.status = ${Number(statusSh)} `);
        }

        if (ft) {
            whereParts.push(`promotions.flash_type = '${ft}'`);
        }
        if (storeIdSh) {
            whereParts.push(`promotions.store_id = ${Number(storeIdSh)} `);
        }
        if (startSh) {
            whereParts.push(`DATE(promotions.created_at) = DATE('${startSh}')`);
        }

        if (is_deleted === 0 || is_deleted === "0") {
            whereParts.push(`promotions.is_deleted = 0`);
        } else if (is_deleted === 1 || is_deleted === "1") {
            whereParts.push(`promotions.is_deleted = 1`);
        }

        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";

        const page = parseInt(request.get("page", "1"));
        const pageLen = parseInt(request.get("pageLen", "10"));

        const data = await this.findWithPagination(
            whereClause,
            { "promotions.created_at": "DESC" },
            page,
            pageLen
        );

        return {
            page: data.page,
            pageLen: data.length,
            pageTotal: data.pageTotal,
            recordTotal: data.recordTotal,
            data: data.items,
        };
    }

    public async getAllActiveSlots(request: Request): Promise<PromotionData[]> {

        const ftSh = request.get('ft');

        const PROMOTION_TABLE = this.table;
        const whereParts: string[] = [];

        whereParts.push(`${PROMOTION_TABLE}.status = 1`);
        whereParts.push(`${PROMOTION_TABLE}.is_deleted = 0`);
        whereParts.push(`${PROMOTION_TABLE}.date_type = 5`);

        if (ftSh) {
            whereParts.push(`${PROMOTION_TABLE}.flash_type = '${ftSh}'`);
        }

        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";

        const orderObject: Record<string, "ASC" | "DESC"> = { start_time: "ASC" };

        const slots = await this.find(
            whereClause,
            orderObject,
            0,
            undefined,
            "*"
        );

        return slots as PromotionData[];
    }

    async getFlashSale(request: Request, customer: any): Promise<any[]> {
        const now = new Date();
        // const FLASH_SALE_DATE_TYPE = 5;
        const promotions = new PromotionModel(this.pool);
        const allPromotions = await promotions.getAllActiveSlots(request);

        const activePromotions = allPromotions.filter(promo =>
            promotions.isPromotionActive(promo, now)
        );

        if (activePromotions.length === 0) return [];

        const activePromoIds = activePromotions.map(p => p.id!).filter(id => id > 0);

        const productPromotions = new ProductPromotionModel(this.pool);

        const allProductPromotions = await productPromotions.getProductPromotionsByPromotionIds(activePromoIds);

        const productIds = new Set<number>();
        const specificPriceIds = new Set<number>();
        let applyToAllPackages = false;

        // allProductPromotions.forEach(pp => {
        //     if (pp.product_id) productIds.add(pp.product_id);
        //     if (pp.product_price_id) productPriceIds.add(pp.product_price_id);
        // });
        allProductPromotions.forEach(pp => {
            if (pp.product_id) productIds.add(pp.product_id);

            if (pp.product_price_id === -1) {
                applyToAllPackages = true;
            } else if (pp.product_price_id && pp.product_price_id > 0) {
                specificPriceIds.add(pp.product_price_id);
            }
        });

        const uniqueProductIds = Array.from(productIds);
        if (applyToAllPackages && uniqueProductIds.length > 0) {
            const productPrice = new ProductPriceModel(this.pool);
            const allPriceRecords = await productPrice.getPricesByProductIds(uniqueProductIds);

            allPriceRecords.forEach(pr => {
                if (pr.id && pr.id > 0) {
                    specificPriceIds.add(pr.id);
                }
            });
        }
        const uniquePriceIds = Array.from(specificPriceIds);

        const products = new ProductsModel(this.pool);

        const productDetails = await products.getProductsByIds(uniqueProductIds);
        const calculatedPrices = await products.getCalculatedMultiPrices(uniquePriceIds, customer);
        // console.log(calculatedPrices);

        const productToCalculatedPricesMap = new Map<number, ProductPricesData[]>();
        calculatedPrices.forEach(p => {
            if (p.product_id) {
                const arr = productToCalculatedPricesMap.get(p.product_id) || [];
                arr.push(p);
                productToCalculatedPricesMap.set(p.product_id, arr);
            }
        });

        const productMap = new Map<number, ProductData>();
        productDetails.forEach(p => p.id && productMap.set(p.id, p));
        const calculatedPriceMap = new Map<number, ProductPricesData>();
        calculatedPrices.forEach(p => p.product_price_id && calculatedPriceMap.set(p.product_price_id, p));

        const finalSlots = new Map<number, any>();

        for (const promoHeader of activePromotions) {
            const promoId = promoHeader.id!;

            const details = allProductPromotions.filter(pp => pp.promotion_id === promoId);
            const productsModel = new ProductsModel(this.pool);

            const fullPromoProducts = productsModel.mergePromotionData(details, [promoHeader]);

            const products: any[] = [];

            for (const fullPromo of fullPromoProducts) {
                const productId = fullPromo.product_id;
                const productDetail: ProductData = (productMap.get(fullPromo.product_id!) || {}) as ProductData;
                // const priceId = fullPromo.product_price_id!;
                // const calculatedPriceData = calculatedPriceMap.get(priceId);
                // const finalPriceArray: any[] = [];
                const calculatedPricesForProduct = productToCalculatedPricesMap.get(productId) || [];
                // const calculatedPriceData = calculatedPricesForProduct.length > 0
                //     ? calculatedPricesForProduct[0]
                //     : null;

                const finalPriceArray: any[] = calculatedPricesForProduct;

                // if (calculatedPriceData) {
                //     const lt = finalPriceArray.push(calculatedPriceData);
                //     console.log(lt);

                // }

                products.push({
                    ...productDetail,
                    ...fullPromo,
                    prices: finalPriceArray,
                });
            }

            finalSlots.set(promoId, {
                ...promoHeader,
                products: products,
            });
        }

        return Array.from(finalSlots.values());
    }
    async getFlashSaleProducts(request: Request, customer: any, storeIds: number[] = []): Promise<any[]> {
        const promotions = new PromotionModel(this.pool);

        const allPromotions = await promotions.getAllActiveSlots(request);
        const flashTypeFilter = request.get('ft');
        // let activePromotions = allPromotions.filter(promo =>
        //     promotions.isPromotionActive(promo, now)
        // );
        let activePromotions = allPromotions;

        if (flashTypeFilter) {
            activePromotions = activePromotions.filter(promo =>
                promo.flash_type === flashTypeFilter
            );
        }
        // if (storeIds.length > 0) {
        //     activePromotions = activePromotions.filter(promo =>
        //         storeIds.includes(promo.store_id!)
        //     );
        // }

        if (activePromotions.length === 0) return [];

        const activePromoIds = activePromotions.map(p => p.id!).filter(id => id > 0);
        const productPromotions = new ProductPromotionModel(this.pool);
        let allProductPromotions = await productPromotions.getProductPromotionsByPromotionIds(activePromoIds);
        // console.log(allProductPromotions);

        if (storeIds.length > 0) {
            allProductPromotions = allProductPromotions.filter(pp =>
                storeIds.includes(pp.store_id!)
            );
        }

        const productIds = new Set<number>();
        const specificPriceIds = new Set<number>();
        let applyToAllPackages = false;

        allProductPromotions.forEach(pp => {
            if (pp.product_id) productIds.add(pp.product_id);

            if (pp.product_price_id === -1) {
                applyToAllPackages = true;
            } else if (pp.product_price_id && pp.product_price_id > 0) {
                specificPriceIds.add(pp.product_price_id);
            }
        });

        const uniqueProductIds = Array.from(productIds);
        if (applyToAllPackages && uniqueProductIds.length > 0) {
            const productPrice = new ProductPriceModel(this.pool);
            const allPriceRecords = await productPrice.getPricesByProductIds(uniqueProductIds);

            allPriceRecords.forEach(pr => {
                if (pr.id && pr.id > 0) {
                    specificPriceIds.add(pr.id);
                }
            });
        }
        const uniquePriceIds = Array.from(specificPriceIds);
        const products = new ProductsModel(this.pool);
        const productDetails = await products.getProductsByIds(uniqueProductIds);
        const calculatedPrices = await products.getCalculatedMultiPrices(uniquePriceIds, customer);

        const productToCalculatedPricesMap = new Map<number, ProductPricesData[]>();
        calculatedPrices.forEach(p => {
            if (p.product_id) {
                const arr = productToCalculatedPricesMap.get(p.product_id) || [];
                arr.push(p);
                productToCalculatedPricesMap.set(p.product_id, arr);
            }
        });

        const productMap = new Map<number, ProductData>();
        productDetails.forEach(p => p.id && productMap.set(p.id, p));

        const allProductsInSlots: any[] = [];

        for (const promoHeader of activePromotions) {
            const details = allProductPromotions.filter(pp => pp.promotion_id === promoHeader.id!);
            const fullPromoProducts = products.mergePromotionData(details, [promoHeader]);
            const productsArray: any[] = [];

            for (const fullPromo of fullPromoProducts) {
                const rawProductId = fullPromo.product_id!;
                if (!rawProductId || rawProductId <= 0) { // Thêm kiểm tra
                    console.warn('Skipping promotion item due to invalid productId:', rawProductId);
                    continue;
                }
                const productId = Number(rawProductId);
                const productDetail: ProductData = (productMap.get(productId) || {}) as ProductData;
                if (!productDetail) {
                    console.warn(`Skipping promotion item: Product ID ${productId} not found in productDetails.`);
                    continue;
                }
                const calculatedPricesForProduct = productToCalculatedPricesMap.get(productId) || [];

                const calculatedPriceData = calculatedPricesForProduct.length > 0
                    ? calculatedPricesForProduct[0]
                    : {};

                const productObject = {
                    flash_type: promoHeader.flash_type,
                    ...productDetail,
                    ...calculatedPriceData,
                    store_id: productDetail.store_id,
                    id: productDetail.id,
                    prices: calculatedPricesForProduct,
                };

                productsArray.push(productObject);
            }
            allProductsInSlots.push(...productsArray);
        }

        return allProductsInSlots;
    }

    public isPromotionActive(promo: PromotionData, now: Date): boolean {
        const nowHour = now.getHours();
        const nowMinute = now.getMinutes();
        const nowDayOfWeek = now.getDay();
        if (promo.status !== 1 || promo.is_deleted === 1) {
            return false;
        }

        if (promo.start_date && new Date(promo.start_date) > now) {
            return false;
        }

        if (promo.end_date) {
            const endDateObj = new Date(promo.end_date);
            const endDay = new Date(endDateObj.getFullYear(), endDateObj.getMonth(), endDateObj.getDate());
            const currentDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());

            if (currentDay > endDay) {
                return false;
            }
        }
        if (promo.day_of_week) {
            try {
                const allowedDays = JSON.parse(promo.day_of_week);
                if (!allowedDays.includes(String(nowDayOfWeek))) {
                    return false;
                }
            } catch (e) {
                console.error("Error parsing day_of_week JSON:", e);
                return false;
            }
        }
        const startTimeParts = promo.start_time?.split(':').map(Number);
        const endTimeParts = promo.end_time?.split(':').map(Number);
        if (startTimeParts && endTimeParts) {
            const startMinutes = startTimeParts[0] * 60 + startTimeParts[1];
            const endMinutes = endTimeParts[0] * 60 + endTimeParts[1];
            const currentMinutes = nowHour * 60 + nowMinute;
            if (currentMinutes < startMinutes || currentMinutes > endMinutes) {
                // console.log(`[TIME CHECK] Promo ID ${promo.id}: Thời gian KHÔNG HỢP LỆ. Loại bỏ.`);
                return false;
            }
        }
        return true;
    }

    public async getPromotion(promotionIds: number[]): Promise<PromotionData[]> {

        if (promotionIds.length === 0) return [];

        const uniquePromoIds = Array.from(new Set(promotionIds));

        const idList = uniquePromoIds.join(',');

        const whereClause = `id IN (${idList}) AND is_deleted = 0 AND status = 1`;
        const promotions = new PromotionModel(this.pool)
        const promotionHeaders = await promotions.find(
            whereClause,
            false,
            false,
        );

        return promotionHeaders as PromotionData[];
    }
}