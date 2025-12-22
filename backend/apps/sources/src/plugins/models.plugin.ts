import fp from 'fastify-plugin';
import UserModel from '@src/models/UserModel.js';
import GroupsModel from '@src/models/GroupsModel.js';
import UserTokenModel from '@src/models/UserTokenModel.js';
import AdminFunctionModel from '@src/models/AdminFunctionModel.js';
import PermissionModel from '@src/models/PermissionModel.js';
import UserForgetModel from '@src/models/UserForgetModel.js';
import DeptsModel from '@src/models/DeptsModel.js';
import LogsModel from '@src/models/LogsModel.js';
import CustomerRegisterModel from '@src/models/CustomerRegisterModel.js';
import CustomerModel from '@src/models/CustomerModel.js';
import CustomerTokenModel from '@src/models/CustomerTokenModel.js';
import CustomerForgetModel from '@src/models/CustomerForgetModel.js';
import { FastifyInstance } from 'fastify';
import { Pool } from 'mysql2/promise';
import ConfigModel from '@src/models/ConfigModel.js';
import MenuModel from '@src/models/MenusModel.js';
import MenuTypeModel from '@src/models/MenuTypeModel.js';
import NewsModel from '@src/models/NewsModel.js';
import NewsCategoryModel from '@src/models/NewsCategoriesModel.js';
import PageModel from '@src/models/PagesModel.js';
import BannerModel from '@src/models/BannersModel.js';
import ProductsModel from '@src/models/ProductsModel.js';
import CategoryModel from '@src/models/CategoriesModel.js';
import PackageModel from '@src/models/PackagesModel.js';
import ProductReviewModel from '@src/models/ProductReviewsModel.js';
import ProductPriceModel from '@src/models/ProductPriceModel.js';
import VoucherModel from '@src/models/VouchersModel.js';
import ProductReviewReplyModel from '@src/models/ProductReviewsReplyModel.js';
import PromotionModel from '@src/models/PromotionsModel.js';
import StoreModel from '@src/models/StoresModel.js';
import VoucherInvitedModel from '@src/models/VoucherInvitedModel.js';
import VoucherStoreModel from '@src/models/VoucherStoreModel.js';
import VoucherStoreCustomerModel from '@src/models/VoucherStoreCustomerModel.js';
import AdvertisementsModel from '@src/models/AdvertisementsModel.js';
import ProductPromotionsModel from '@src/models/ProductPromotionsModel.js';
import OrderItemModel from '@src/models/OrderItemModel.js';
import CartModel from '@src/models/CartModel.js';
import CartItemModel from '@src/models/CartItemModel.js';
import OrderItemMoreModel from '@src/models/OrderItemMoreModel.js';
import OrderModel from '@src/models/OrderModel.js';
import OrderPaymentedModel from '@src/models/OrderPaymentedModel.js';
import OrderStoreModel from '@src/models/OrderStoreModel.js';
import DistrictsModel from '@src/models/DistrictsModel.js';
import CountriesModel from '@src/models/CountriesModel.js';
import ProvincesModel from '@src/models/ProvincesModel.js';
import WardsModel from '@src/models/WardsModel.js';
export interface AppModels {
    user: UserModel;
    groups: GroupsModel;
    usertoken: UserTokenModel;
    adminfunction: AdminFunctionModel
    permission: PermissionModel
    userforget: UserForgetModel
    dept: DeptsModel
    logs: LogsModel
    customerRegister: CustomerRegisterModel
    customertoken: CustomerTokenModel
    customer: CustomerModel
    customerForget: CustomerForgetModel
    config: ConfigModel
    menu: MenuModel
    menuType: MenuTypeModel
    news: NewsModel
    newsCategory: NewsCategoryModel
    pages: PageModel
    banners: BannerModel
    products: ProductsModel
    categories: CategoryModel
    packages: PackageModel
    productReviews: ProductReviewModel
    productPrice: ProductPriceModel
    voucher: VoucherModel
    productReviewReply: ProductReviewReplyModel
    promotions: PromotionModel
    stores: StoreModel
    voucherInvited: VoucherInvitedModel
    voucherStore: VoucherStoreModel
    voucherStoreCustomer: VoucherStoreCustomerModel
    advertisements: AdvertisementsModel
    productPromotions: ProductPromotionsModel
    carts: CartModel
    cartItem: CartItemModel
    orderItems: OrderItemModel
    orderItemMore: OrderItemMoreModel
    order: OrderModel
    orderPaymented: OrderPaymentedModel
    orderStore: OrderStoreModel
    districts: DistrictsModel
    provinces: ProvincesModel
    countries: CountriesModel
    wards: WardsModel
}
declare module 'fastify' {
    interface FastifyInstance {
        models: AppModels;
    }
    interface FastifyInstance {
        mysql: Pool;
    }
}

export default fp(async (fastify: FastifyInstance) => {
    const models: AppModels = {
        user: new UserModel(fastify.mysql),
        groups: new GroupsModel(fastify.mysql),
        usertoken: new UserTokenModel(fastify.mysql),
        adminfunction: new AdminFunctionModel(fastify.mysql),
        permission: new PermissionModel(fastify.mysql),
        userforget: new UserForgetModel(fastify.mysql),
        dept: new DeptsModel(fastify.mysql),
        logs: new LogsModel(fastify.mysql),
        customerRegister: new CustomerRegisterModel(fastify.mysql),
        customertoken: new CustomerTokenModel(fastify.mysql),
        customer: new CustomerModel(fastify.mysql),
        customerForget: new CustomerForgetModel(fastify.mysql),
        config: new ConfigModel(fastify.mysql),
        menu: new MenuModel(fastify.mysql),
        menuType: new MenuTypeModel(fastify.mysql),
        news: new NewsModel(fastify.mysql),
        newsCategory: new NewsCategoryModel(fastify.mysql),
        pages: new PageModel(fastify.mysql),
        banners: new BannerModel(fastify.mysql),
        products: new ProductsModel(fastify.mysql),
        categories: new CategoryModel(fastify.mysql),
        packages: new PackageModel(fastify.mysql),
        productReviews: new ProductReviewModel(fastify.mysql),
        productPrice: new ProductPriceModel(fastify.mysql),
        voucher: new VoucherModel(fastify.mysql),
        productReviewReply: new ProductReviewReplyModel(fastify.mysql),
        promotions: new PromotionModel(fastify.mysql),
        stores: new StoreModel(fastify.mysql),
        voucherInvited: new VoucherInvitedModel(fastify.mysql),
        voucherStore: new VoucherStoreModel(fastify.mysql),
        voucherStoreCustomer: new VoucherStoreCustomerModel(fastify.mysql),
        advertisements: new AdvertisementsModel(fastify.mysql),
        productPromotions: new ProductPromotionsModel(fastify.mysql),
        carts: new CartModel(fastify.mysql),
        cartItem: new CartItemModel(fastify.mysql),
        orderItems: new OrderItemModel(fastify.mysql),
        orderItemMore: new OrderItemMoreModel(fastify.mysql),
        order: new OrderModel(fastify.mysql),
        orderPaymented: new OrderPaymentedModel(fastify.mysql),
        orderStore: new OrderStoreModel(fastify.mysql),
        districts: new DistrictsModel(fastify.mysql),
        provinces: new ProvincesModel(fastify.mysql),
        countries: new CountriesModel(fastify.mysql),
        wards: new WardsModel(fastify.mysql)
    }
    fastify.decorate('models', models);

});
