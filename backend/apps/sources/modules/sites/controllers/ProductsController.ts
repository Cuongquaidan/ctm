import CoreController from "@src/controllers/CoreController.js";
import ProductModel from '@src/models/ProductsModel.js';
// import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export default class ProductsController extends CoreController {
    async getList() {
        try {
            const productModel = new ProductModel(this.pool);
            const finalResult = await productModel.getData(
                this.request,
                this.customer || null,
                0,
                1,
            );

            this.resJsonData(finalResult);
        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }

    async detailById() {
        try {
            const rawId = this.request.getParam('code');

            const productId = Number(rawId);
            if (productId <= 0) {
                throw new Error("invalid_id");
            }

            const customer = this.customer;
            const productModel = new ProductModel(this.pool);

            const item = await productModel.detailByIdWithPrice(productId, customer);

            if (!item) {
                throw new Error('invalid_404');
            }
            this.resJsonData(item);

        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }
    async detailByAlias(alias: string) {
        try {
            alias = this.request.getParam('alias');
            const customer = this.customer;
            const productModel = new ProductModel(this.pool);
            const item = await productModel.detailByAliasWithPrice(alias, customer);

            if (!item) throw new Error('invalid_404');

            this.resJsonData(item);

        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }

    async getProductPriceCalculation() {
        try {
            const request = this.request;
            const productsModel = this.models.products;
            // const packagesModel = this.models.packages;
            const productPriceIdParam = request.get('productPriceId');
            const customer = this.customer || null;
            const productPriceId = productPriceIdParam ? parseInt(productPriceIdParam) : null;
            if (!productPriceId || productPriceId <= 0) {
                throw new Error("invalid_product_price_id");
            }

            const priceData = await this.models.productPrice.getSingleProductPrice(productPriceId);

            if (!priceData || !priceData.product_id || !priceData.package_id) {
                throw new Error('invalid_404_price_record');
            }

            const finalCalculatedPrice = await productsModel.getCalculatedSinglePrice(
                priceData,
                customer
            );

            if (!finalCalculatedPrice) {
                throw new Error('calculation_failed');
            }

            this.resJsonData(finalCalculatedPrice);

        } catch (error) {
            this.resJsonErr((error as Error).message || 'Lỗi tính toán giá gói hàng chi tiết.');
        }
    }

    async getMultiProductPriceCalculation() {
        try {
            const productsModel = this.models.products;

            const listId: number[] = await this.request.getPost('productPriceIds', [], 'ids');

            const customer = this.customer || null;

            if (!listId || listId.length === 0) {
                throw new Error("invalid_500_missing_ids");
            }

            const finalCalculatedPrices = await productsModel.getCalculatedMultiPrices(
                listId,
                customer
            );

            if (!finalCalculatedPrices || finalCalculatedPrices.length === 0) {
                return this.resJsonData([]);
            }

            this.resJsonData(finalCalculatedPrices);

        } catch (error) {
            this.resJsonErr((error as Error).message || 'Lỗi tính toán giá gói hàng chi tiết.');
        }
    }
    getSortOptions(sortBy: string): Record<string, 'ASC' | 'DESC'> {
        const productTable = 'product';
        const priceColumn = 'min_price';

        switch (sortBy) {

            case 'most_popular':
                return { [`${productTable}.view`]: 'DESC', [`${productTable}.id`]: 'DESC' };

            case 'most_selling':
                return { [`${productTable}.sold`]: 'DESC', [`${productTable}.id`]: 'DESC' };

            case 'best_sale_of':
                return { [`${productTable}.review_point`]: 'DESC', [`${productTable}.review_total`]: 'DESC' };

            case 'newest':
                return { [`${productTable}.created_at`]: 'DESC', [`${productTable}.id`]: 'DESC' };

            case 'low_high_price':
                // return { [priceColumn]: 'ASC', [`${productTable}.id`]: 'ASC' };
                return { [`${productTable}.created_at`]: 'DESC', [`${productTable}.id`]: 'ASC' };
            case 'high_low_price':
                // return { [priceColumn]: 'DESC', [`${productTable}.id`]: 'DESC' };
                return { [`${productTable}.created_at`]: 'DESC', [`${productTable}.id`]: 'DESC' };


            default:
                return { [`${productTable}.created_at`]: 'DESC', [`${productTable}.id`]: 'DESC' };
        }
    }
    async getProductsByCategory() {
        try {
            const productModel = new ProductModel(this.pool);
            const categoryAlias: string = this.request.getParam('alias');
            const fcatid: number[] = await this.request.get('fcatid', [], 'ids');
            const frating: number[] = await this.request.get('frating', [], 'ids');
            // const page = parseInt(this.request.get('page', '1'));
            // const limit = parseInt(this.request.get('limit', '10'));
            // const offset = (page - 1) * limit;
            const sortBy = this.request.get('sort');

            const options: any = {
                // page: page,
                // limit: limit,
                // offset: offset,
                fcatid: fcatid,
                frating: frating,
                order: this.getSortOptions(sortBy),
            };

            const paginationResult: any = await productModel.getProductsByCategoryAlias(
                categoryAlias,
                this.customer || null,
                options
            );

            // this.resJsonData({
            //     // page: page,
            //     // pageLen: limit,
            //     pageTotal: paginationResult.pageTotal,
            //     recordTotal: paginationResult.recordTotal,
            //     data: paginationResult
            // });
            this.resJsonData(paginationResult);

        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }

    async getSimilarProductsByAlias() {
        try {
            const productService = new ProductModel(this.pool);

            const productAlias: string = this.request.getParam('alias');

            if (!productAlias) {
                return this.resJsonErr("Product alias is required.");
            }

            const options: any = {
                limit: this.request.get('limit', 10),
                offset: this.request.get('offset', 0),
            };

            const products = await productService.getSimilarProductsByAlias(
                productAlias,
                this.customer || null,
                options
            );

            this.resJsonData(products);

        } catch (error: any) {
            console.error('Error in getSimilarProductsByAlias:', error);
            this.resJsonErr(error.message);
        }
    }
}

