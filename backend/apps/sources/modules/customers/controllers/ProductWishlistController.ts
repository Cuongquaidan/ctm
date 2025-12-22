import CustomerController from "@src/controllers/CustomerController.js";
import ProductPriceModel from "@src/models/ProductPriceModel.js";
import ProductModel, { ProductData, ProductPricesData } from "@src/models/ProductsModel.js";
import ProductWishlistModel from "@src/models/ProductWishlistModel.js";
export default class WardsController extends CustomerController {
    public async toggleWishlist() {
        const productIdRaw = this.request.getParam('productId');
        const productId = Number(productIdRaw);

        if (isNaN(productId) || productId <= 0) {
            return this.resJsonErr('ID sản phẩm không hợp lệ.');
        }
        try {
            const productModel = new ProductModel(this.pool);

            const productInfo = await productModel.findOne({
                id: productId,
                is_deleted: 0,
                status: 1
            });

            if (!productInfo) {
                return this.resJsonErr('invalid_404');
            }

            const wishlistModel = new ProductWishlistModel(this.pool);
            const result = await wishlistModel.toggleWishlist(this.customerId, productId);

            if (result.action === 'added') {
                return this.resJsonData({
                    message: 'Đã thêm sản phẩm vào danh sách yêu thích!',
                    action: 'added'
                });
            } else if (result.action === 'removed') {
                return this.resJsonData({
                    message: 'Đã xóa sản phẩm khỏi danh sách yêu thích.',
                    action: 'removed'
                });
            }

            return this.resJsonData({ message: 'Thao tác hoàn tất.' });

        } catch (error: any) {
            console.error('Lỗi khi thao tác wishlist:', error);

            return this.resJsonErr('Lỗi hệ thống khi thực hiện thao tác.');
        }
    }
    async getWishlist() {
        try {
            const customerId = this.customer.id;
            const customer = this.customer;

            if (!customerId) {
                return this.resJsonErr('Customer ID is required.');
            }

            const productWishlistModel = new ProductWishlistModel(this.pool);
            const productModel = new ProductModel(this.pool);
            const productPriceModel = new ProductPriceModel(this.pool);

            const wishlistItems = await productWishlistModel.find(
                `customer_id = ${customerId}`,
                { id: 'DESC' },
                false,
                [],
                '*'
            );

            if (!wishlistItems || wishlistItems.length === 0) {
                return this.resJsonData([]);
            }
            const productIdsToLoad = wishlistItems
                .map(item => item.product_id)
                .filter(id => typeof id === 'number' && id > 0) as number[];

            if (productIdsToLoad.length === 0) {
                return this.resJsonData([]);
            }
            const productTableName = "product";
            const idList = productIdsToLoad.join(',');

            const whereClause = `${productTableName}.is_deleted = 0 AND ${productTableName}.status = 1 AND ${productTableName}.id IN (${idList})`;
            // const whereClause = `product.id IN (${idList})`;
            const MAX_WISHLIST_ITEMS = 1000;
            const productItems = await productModel.find(
                whereClause,
                { id: 'DESC' },
                MAX_WISHLIST_ITEMS);


            let finalProducts: ProductData[] = productItems as ProductData[];

            if (productItems.length > 0) {
                const allProductPriceIds: number[] = [];
                const productIds: number[] = wishlistItems
                    .map(item => item.product_id)
                    .filter((id): id is number => typeof id === 'number' && id !== null);

                const allPriceRecords = await productPriceModel.getPricesByProductIds(productIds);

                for (const priceRecord of allPriceRecords) {
                    const priceId = priceRecord.id;
                    if (typeof priceId === 'number' && priceId > 0) {
                        allProductPriceIds.push(priceId);
                    }
                }

                const calculatedPrices = await productModel.getCalculatedMultiPrices(
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
                    const productPrices: ProductPricesData[] = [];

                    for (const priceRecord of allPriceRecords) {
                        if (priceRecord.product_id === product.id) {
                            productPrices.push(priceRecord as ProductPricesData);
                        }
                    }

                    const enrichedPrices: ProductPricesData[] = [];

                    for (const price of productPrices) {
                        const priceRecordId = Number(price.id);

                        let calculatedData: ProductPricesData | undefined | null = null;

                        if (!Number.isNaN(priceRecordId) && priceRecordId > 0) {
                            calculatedData = calculatedPricesMap.get(priceRecordId);
                        }

                        enrichedPrices.push((calculatedData || price) as ProductPricesData);
                    }

                    mergedProducts.push({
                        ...product,
                        prices: enrichedPrices,
                    } as ProductData);
                }

                finalProducts = mergedProducts;
            }

            this.resJsonData(finalProducts);

        } catch (error: any) {
            console.error('Lỗi khi lấy danh sách Wishlist chi tiết:', error);
            return this.resJsonErr('Lỗi hệ thống khi tải Wishlist.');
        }
    }
    async getWishlistProductIds() {
        try {
            const customerId = this.customer.id;

            if (!customerId) {
                return this.resJsonErr('Customer ID is required.');
            }

            const productWishlistModel = new ProductWishlistModel(this.pool);

            const wishlistItems = await productWishlistModel.find(
                `customer_id = ${customerId}`,
                { id: 'DESC' },
                false,
                [],
                'product_id'
            );

            if (!wishlistItems || wishlistItems.length === 0) {
                return this.resJsonData([]);
            }

            const productIds = wishlistItems
                .map(item => item.product_id)
                .filter((id): id is number => typeof id === 'number' && id > 0);

            return this.resJsonData(productIds);

        } catch (error: any) {
            console.error('Lỗi khi lấy danh sách Product ID trong Wishlist:', error);
            return this.resJsonErr('Lỗi hệ thống khi tải Wishlist Product IDs.');
        }
    }
    async checkMultiWishlistStatus() {
        try {
            const productIds: number[] = await this.request.getPost('productIds', [], 'ids');
            const customerId = this.customer.id;

            if (!productIds.length) {
                throw new Error('product_ids_required');
            }

            if (!customerId) {
                return this.resJsonData(productIds.map(id => ({ product_id: id, is_in_wishlist: false })));
            }

            const productWishlistModel = new ProductWishlistModel(this.pool);

            const idList = productIds.join(',');
            const whereClause = `customer_id = ${customerId} AND product_id IN (${idList})`;

            const wishlistRecords = await productWishlistModel.find(
                whereClause,
                undefined,
                false
            );

            const wishlistMap = new Map<number, boolean>();
            for (const record of wishlistRecords) {
                if (record.product_id) {
                    wishlistMap.set(record.product_id, true);
                }
            }

            const finalStatus = productIds.map(id => ({
                product_id: id,
                is_in_wishlist: wishlistMap.has(id)
            }));

            this.resJsonData(finalStatus);

        } catch (error: any) {
            console.error('Lỗi khi kiểm tra trạng thái Wishlist đa mục:', error);
            return this.resJsonErr(error.message || 'Lỗi hệ thống khi thực hiện kiểm tra đa mục.');
        }
    }

    public async countWishlist(request: Request, customerIdFromRoute: number) {
        try {
            const customerId = Number(this.customerId || customerIdFromRoute);

            const wishlistModel = new ProductWishlistModel(this.pool);

            const totalCount = await wishlistModel.getTotalCountByCustomer(customerId);

            const responseData = {
                count: totalCount,
            };

            return this.resJsonData(responseData);

        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }
}