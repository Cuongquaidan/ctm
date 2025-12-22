import Route from '@src/Route.js';
import ConfigController from './controllers/ConfigController.js';
import MenuController from './controllers/MenuController.js';
import NewsController from './controllers/NewsController.js';
import NewsCategoriesController from './controllers/NewsCategoriesController.js';
import ProductsController from './controllers/ProductsController.js';
import BannerController from './controllers/BannerController.js';
import StoresController from './controllers/StoresController.js';
import ProductPriceController from './controllers/ProductPriceController.js';
import CategoriesController from './controllers/CategoriesController.js';
import PackageController from './controllers/PackagesController.js';
import VoucherController from './controllers/VouchersController.js';
import PromotionsController from './controllers/PromotionsController.js';
import VoucherStoreController from './controllers/VoucherStoreController.js';
import ProductReviewsController from './controllers/ProductReviewsController.js';
import ProductReviewsReplyController from './controllers/ProductReviewsReplyController.js';
import VoucherStoreCustomerController from './controllers/VoucherStoreCustomerController.js';
import PagesController from './controllers/PagesController.js';
import AdvertisementsController from './controllers/AdvertisementsController.js';
import ProductPromotionsController from './controllers/ProductPromotionsController.js';
import OrderItemController from './controllers/OrderItemController.js';
import AuthController from '../customers/controllers/AuthController.js';
const getRouters = () => {
    const SITES_URI = process.env.SITES_URI || '';
    const router = new Route();
    router.add(SITES_URI, [
        //00.Ganeral
        //01.Tài khoản
        {
            link: '/config/getAll',
            modules: 'admins',
            controller: ConfigController,
            action: 'getAll'
        },
        {
            link: '/menu/getList',
            modules: 'sites',
            controller: MenuController,
            action: 'getList',
        },
        {
            link: '/menu/getFuncMenu',
            modules: 'sites',
            controller: MenuController,
            action: 'getFuncMenu',
        },
        {
            link: '/news/getList',
            modules: 'sites',
            controller: NewsController,
            action: 'getList',
        },
        {
            link: '/news/:alias',
            modules: 'sites',
            controller: NewsController,
            action: 'detailByAlias',
        },
        {
            link: '/news/detail/:code([0-9]+)',
            modules: 'sites',
            controller: NewsController,
            action: 'detailById',
        },
        {
            link: '/news/getNewsByCategoryId/:categoryId',
            modules: 'sites',
            controller: NewsController,
            action: 'getNewsByCategoryId',
        },
        {
            link: '/news/getNewsByCategoryAlias/:categoryAlias',
            modules: 'sites',
            controller: NewsController,
            action: 'getNewsByCategoryAlias',
        },
        {
            link: '/newsCategories/getList',
            modules: 'sites',
            controller: NewsCategoriesController,
            action: 'getList',
        },
        {
            link: '/newsCategories/detail/:code([0-9]+)',
            modules: 'sites',
            controller: NewsCategoriesController,
            action: 'detailById',
        },
        {
            link: '/newsCategories/getTree/:parent_id',
            modules: 'sites',
            controller: NewsCategoriesController,
            action: 'getTree',
        },
        {
            link: '/products/getProductPriceCalculation',
            modules: 'sites',
            controller: ProductsController,
            action: 'getProductPriceCalculation',
        },
        {
            link: '/products/getMultiProductPriceCalculation',
            modules: 'sites',
            controller: ProductsController,
            action: 'getMultiProductPriceCalculation',
            method: 'post'
        },
        {
            link: '/products/getList',
            modules: 'sites',
            controller: ProductsController,
            action: 'getList',
        },
        {
            link: '/categories/:alias',
            modules: 'sites',
            controller: ProductsController,
            action: 'getProductsByCategory',
        },
        {
            link: '/products/:alias',
            modules: 'sites',
            controller: ProductsController,
            action: 'getSimilarProductsByAlias',
        },
        {
            link: '/products/promotions',
            modules: 'sites',
            controller: ProductsController,
            action: 'getPromotionalProducts',
        },
        {
            link: '/promotions/flash-sale',
            modules: 'sites',
            controller: PromotionsController,
            action: 'getFlashSales',
        },
        {
            link: '/promotions/getFlashSaleByProducts',
            modules: 'sites',
            controller: PromotionsController,
            action: 'getFlashSaleByProducts',
        },
        {
            link: '/products/detail/:code([0-9]+)',
            modules: 'sites',
            controller: ProductsController,
            action: 'detailById',
        },
        {
            link: '/products/detail/:alias',
            modules: 'sites',
            controller: ProductsController,
            action: 'detailByAlias',
        },
        {
            link: '/productPromotions/getList',
            modules: 'sites',
            controller: ProductPromotionsController,
            action: 'getList',
        },
        {
            link: '/productPromotions/getProductsBySlot',
            modules: 'sites',
            controller: ProductPromotionsController,
            action: 'getProductsBySlot',
        },
        {
            link: '/productPromotions/fetchAllProductData',
            modules: 'sites',
            controller: ProductPromotionsController,
            action: 'fetchAllProductData',
        },
        {
            link: '/orderItem/getList',
            modules: 'sites',
            controller: OrderItemController,
            action: 'getList',
        },
        {
            link: '/categories/getList',
            modules: 'sites',
            controller: CategoriesController,
            action: 'getList',
        },
        {
            link: '/categories/detail/:code([0-9]+)',
            modules: 'sites',
            controller: CategoriesController,
            action: 'detailById',
        },
        {
            link: '/categories/detail/:alias',
            modules: 'sites',
            controller: CategoriesController,
            action: 'detailByAlias',
        },
        {
            link: '/categories/getListByArrayIds',
            modules: 'sites',
            controller: CategoriesController,
            action: 'getListByArrayIds',
            method: 'post'
        },
        {
            link: '/banners/getList',
            modules: 'sites',
            controller: BannerController,
            action: 'getList',
        },
        {
            link: '/banners/detail/:code([0-9]+)',
            modules: 'sites',
            controller: BannerController,
            action: 'detailById',
        },
        {
            link: '/banners/getDetailsByArrayIds',
            modules: 'sites',
            controller: BannerController,
            action: 'getDetailsByArrayIds',
            method: 'post'
        },
        {
            link: '/advertisements/getList',
            modules: 'sites',
            controller: AdvertisementsController,
            action: 'getList',
        },
        {
            link: '/advertisements/detail/:code([0-9]+)',
            modules: 'sites',
            controller: AdvertisementsController,
            action: 'detailById',
        },
        {
            link: '/advertisements/getDetailsByArrayIds',
            modules: 'sites',
            controller: AdvertisementsController,
            action: 'getDetailsByArrayIds',
            method: 'post'
        },
        {
            link: '/stores/getList',
            modules: 'sites',
            controller: StoresController,
            action: 'getList',
        },
        {
            link: '/stores/detail/:code([0-9]+)',
            modules: 'sites',
            controller: StoresController,
            action: 'detailById',
        },
        {
            link: '/stores/:alias',
            modules: 'sites',
            controller: StoresController,
            action: 'getDetailAlias',
        },
        {
            link: '/stores/getProductsByStore/:alias',
            modules: 'sites',
            controller: StoresController,
            action: 'getProductsByStoreAlias',
        },
        {
            link: '/stores/getProductsByStoreId/:store_id',
            modules: 'sites',
            controller: StoresController,
            action: 'getProductsByStoreId',
        },
        {
            link: '/stores/listNamesStores',
            modules: 'sites',
            controller: StoresController,
            action: 'listNamesStores',
        },
        {
            link: '/packages/getList',
            modules: 'sites',
            controller: PackageController,
            action: 'getList',
        },
        {
            link: '/packages/detail/:code([0-9]+)',
            modules: 'sites',
            controller: PackageController,
            action: 'detailById',
        },
        {
            link: '/packages/detail/:alias',
            modules: 'sites',
            controller: PackageController,
            action: 'detailByAlias',
        },
        {
            link: '/productPrice/getList',
            modules: 'sites',
            controller: ProductPriceController,
            action: 'getList',
        },
        {
            link: '/productPrice/detail/:code([0-9]+)',
            modules: 'sites',
            controller: ProductPriceController,
            action: 'detailById',
        },
        {
            link: '/productPrice/getSingleProductPrice',
            modules: 'sites',
            controller: ProductPriceController,
            action: 'getSingleProductPrice',
        },
        {
            link: '/vouchers/getList',
            modules: 'sites',
            controller: VoucherController,
            action: 'getList',
        },
        {
            link: '/vouchers/detail/:code([0-9]+)',
            modules: 'sites',
            controller: VoucherController,
            action: 'detailById',
        },
        {
            link: '/promotions/getList',
            modules: 'sites',
            controller: PromotionsController,
            action: 'getList',
        },
        {
            link: '/promotions/detail/:code([0-9]+)',
            modules: 'sites',
            controller: PromotionsController,
            action: 'detailById',
        },
        {
            link: '/flash-sale',
            modules: 'sites',
            controller: PromotionsController,
            action: 'getAllFlashSaleSlots',
        },
        {
            link: '/voucherStore/getList',
            modules: 'sites',
            controller: VoucherStoreController,
            action: 'getList',
        },
        {
            link: '/voucherStore/detail/:code([0-9]+)',
            modules: 'sites',
            controller: VoucherStoreController,
            action: 'detailById',
        },
        {
            link: '/voucherStoreCustomer/getList',
            modules: 'sites',
            controller: VoucherStoreCustomerController,
            action: 'getList',
        },
        {
            link: '/voucherStoreCustomer/detail/:code([0-9]+)',
            modules: 'sites',
            controller: VoucherStoreCustomerController,
            action: 'detailById',
        },
        {
            link: '/productReviews/getList',
            modules: 'sites',
            controller: ProductReviewsController,
            action: 'getList',
        },
        {
            link: '/productReviews/detail/:code([0-9]+)',
            modules: 'sites',
            controller: ProductReviewsController,
            action: 'detailById',
        },
        {
            link: '/productReviewsReply/getList',
            modules: 'sites',
            controller: ProductReviewsReplyController,
            action: 'getList',
        },
        {
            link: '/productReviewsReply/detail/:code([0-9]+)',
            modules: 'sites',
            controller: ProductReviewsReplyController,
            action: 'detailById',
        },
        {
            link: '/pages/getDetail/:alias',
            modules: 'sites',
            controller: PagesController,
            action: 'getDetail',
        },
        {
            link: '/pages/listPages',
            modules: 'sites',
            controller: PagesController,
            action: 'listPages',
        },
        {
            link: '/forget',
            modules: 'sites',
            controller: AuthController,
            action: 'forget',
            method: 'post'
        },
        {
            link: '/forgetPassword',
            modules: 'sites',
            controller: AuthController,
            action: 'forgetPassword',
            method: 'post'
        },
        {
            link: '/forgetResendOtp',
            modules: 'sites',
            controller: AuthController,
            action: 'forgetResendOtp',
            method: 'post'
        },
    ]);
    return router.getRouter();
}
export default getRouters();