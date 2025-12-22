import Route from '@src/Route.js';
import RegisterController from './controllers/RegisterController.js';
import AuthController from './controllers/AuthController.js';
import AccountController from './controllers/AccountController.js';
import CartController from './controllers/CartController.js';
import CartItemController from './controllers/CartItemController.js';
import CustomerAddressController from './controllers/CustomerAddressController.js';
import DistrictsController from './controllers/DistrictsController.js';
import ProvincesController from './controllers/ProvincesController.js';
import ProductWishlistController from './controllers/ProductWishlistController.js';
import WardsController from './controllers/WardsController.js';
import VoucherStoreController from './controllers/VoucherStoreController.js';
import VoucherController from './controllers/VoucherController.js';
const getRouters = () => {
    const CUSTOMERS_URI = process.env.CUSTOMERS_URI || '/customers';
    const router = new Route();
    router.add(CUSTOMERS_URI, [
        //00.Ganeral
        //01.Tài khoản
        {
            link: '/register',
            modules: 'customers',
            controller: RegisterController,
            action: 'register',
            method: 'post'
        },
        {
            link: '/registerConfirmOtp',
            modules: 'customers',
            controller: RegisterController,
            action: 'registerConfirmOtp',
            method: 'post'
        },
        {
            link: '/registerResendOtp',
            modules: 'customers',
            controller: RegisterController,
            action: 'registerResendOtp',
            method: 'post'
        },
        {
            link: '/captcha',
            modules: 'customers',
            controller: AuthController,
            action: 'getCaptcha',
            method: 'get'
        },
        // {
        //     link: '/uploads/:folder/:id/:filename',
        //     modules: 'admins',
        //     controller: FileController,
        //     action: 'serve',
        // },
        {
            link: '/login',
            modules: 'customers',
            controller: AuthController,
            action: 'login',
            method: 'post'
        },
        {
            link: '/redirectToGoogle',
            modules: 'customers',
            controller: AuthController,
            action: 'redirectToGoogle',
        },
        {
            link: '/googleCallback',
            modules: 'customers',
            controller: AuthController,
            action: 'googleCallback',
            method: 'get'
        },
        {
            link: '/logout',
            modules: 'customers',
            controller: AuthController,
            action: 'logout',
            method: 'post'
        },
        {
            link: '/forget',
            modules: 'customers',
            controller: AuthController,
            action: 'forget',
            method: 'post'
        },
        {
            link: '/forgetConfirmOtp',
            modules: 'customers',
            controller: AuthController,
            action: 'forgetConfirmOtp',
            method: 'post'
        },
        {
            link: '/forgetResendOtp',
            modules: 'customers',
            controller: AuthController,
            action: 'forgetResendOtp',
            method: 'post'
        },
        {
            link: '/forgetPassword',
            modules: 'customers',
            controller: AuthController,
            action: 'forgetPassword',
            method: 'post'
        },
        {
            link: '/refreshToken',
            modules: 'customers',
            controller: AuthController,
            action: 'refreshToken',
            method: 'post'
        },
        {
            link: '/accounts/getProfile',
            modules: 'customers',
            controller: AccountController,
            action: 'profile',
        },
        {
            link: '/accounts/editProfile',
            modules: 'customers',
            controller: AccountController,
            action: 'editProfile',
            method: 'post'
        },
        {
            link: '/accounts/changePassword',
            modules: 'customers',
            controller: AccountController,
            action: 'changePassword',
            method: 'post'
        },
        {
            link: '/cart/edit',
            modules: 'customers',
            controller: CartController,
            action: 'UpdateCart',
            method: 'post'
        },
        {
            link: '/cart/CartCountProduct',
            modules: 'customers',
            controller: CartController,
            action: 'CartCountProduct',
            method: 'get'
        },
        {
            link: '/cart/getDetail',
            modules: 'customers',
            controller: CartController,
            action: 'getDetail',
            method: 'get'
        },
        {
            link: '/cart/getCartItems',
            modules: 'customers',
            controller: CartController,
            action: 'getCartItems',
            method: 'get'
        },
        {
            link: '/cart/CartRemoveProduct',
            modules: 'customers',
            controller: CartController,
            action: 'CartRemoveProduct',
            method: 'post'
        },
        {
            link: '/cart/toggleSelectionStatus',
            modules: 'customers',
            controller: CartController,
            action: 'toggleSelectionStatus',
            method: 'post'
        },
        {
            link: '/cart/getDetail',
            modules: 'customers',
            controller: CartController,
            action: 'getDetail',
            method: 'post'
        },
        {
            link: '/cart/getCartSummary',
            modules: 'customers',
            controller: CartController,
            action: 'getCartSummary',
            method: 'get'
        },
        {
            link: '/voucherStores/storeVoucherMaybeApply/:storeId',
            modules: 'customers',
            controller: VoucherStoreController,
            action: 'storeVoucherMaybeApply',
            method: 'get'
        },
        {
            link: '/voucherStores/cartUseStoreVoucher',
            modules: 'customers',
            controller: VoucherStoreController,
            action: 'cartUseStoreVoucher',
            method: 'post'
        },
        {
            link: '/voucherStores/cartRemoveStoreVoucher/:storeId',
            modules: 'customers',
            controller: VoucherStoreController,
            action: 'cartRemoveStoreVoucher',
            method: 'post'
        },
        {
            link: '/vouchers/cartUseVoucher',
            modules: 'customers',
            controller: VoucherController,
            action: 'cartUseVoucher',
            method: 'post'
        },
        {
            link: '/vouchers/voucherMaybeApply',
            modules: 'customers',
            controller: VoucherController,
            action: 'voucherMaybeApply',
            method: 'get'
        },
        {
            link: '/vouchers/removeVoucher',
            modules: 'customers',
            controller: VoucherController,
            action: 'removeVoucher',
            method: 'get'
        },
        {
            link: '/vouchers/getVoucherList',
            modules: 'customers',
            controller: VoucherController,
            action: 'getVoucherList',
            method: 'get'
        },
        {
            link: '/vouchers/profileVouchers',
            modules: 'customers',
            controller: VoucherController,
            action: 'profileVouchers',
            method: 'get'
        },
        {
            link: '/cartItems/getList',
            modules: 'customers',
            controller: CartItemController,
            action: 'getList',
            method: 'get'
        },
        {
            link: '/customerAddress/getAddresses',
            modules: 'customers',
            controller: CustomerAddressController,
            action: 'getAddresses',
            method: 'get'
        },
        {
            link: '/customerAddress/create',
            modules: 'customers',
            controller: CustomerAddressController,
            action: 'updateAddress',
            method: 'post'
        },
        {
            link: '/customerAddress/edit/:id',
            modules: 'customers',
            controller: CustomerAddressController,
            action: 'updateAddress',
            method: 'post'
        },
        {
            link: '/customerAddress/getAddressDetail/:addressId',
            modules: 'customers',
            controller: CustomerAddressController,
            action: 'getAddressDetail',
            method: 'get'
        },
        {
            link: '/customerAddress/setAsDefault',
            modules: 'customers',
            controller: CustomerAddressController,
            action: 'setAsDefault',
            method: 'post'
        },
        {
            link: '/customerAddress/removeAddress/:addressId',
            modules: 'customers',
            controller: CustomerAddressController,
            action: 'removeAddress',
            method: 'get'
        },
        {
            link: '/customerAddress/getDefaultAddress',
            modules: 'customers',
            controller: CustomerAddressController,
            action: 'getDefaultAddress',
            method: 'get'
        },
        {
            link: '/wards/getWardByCityId',
            modules: 'customers',
            controller: WardsController,
            action: 'getWardByCityId',
            method: 'get'
        },
        {
            link: '/districts/getCityByStateId',
            modules: 'customers',
            controller: DistrictsController,
            action: 'getCityByStateId',
            method: 'get'
        },
        {
            link: '/provinces/getProvinces',
            modules: 'customers',
            controller: ProvincesController,
            action: 'getProvinces',
            method: 'get'
        },
        {
            link: '/productwishlist/toggleWishlist/:productId',
            modules: 'customers',
            controller: ProductWishlistController,
            action: 'toggleWishlist',
            method: 'get'
        },
        {
            link: '/productwishlist/getWishlist',
            modules: 'customers',
            controller: ProductWishlistController,
            action: 'getWishlist',
            method: 'get'
        },
        {
            link: '/productwishlist/getWishlistProductIds',
            modules: 'customers',
            controller: ProductWishlistController,
            action: 'getWishlistProductIds',
            method: 'get'
        },
        {
            link: '/productwishlist/countWishlist',
            modules: 'customers',
            controller: ProductWishlistController,
            action: 'countWishlist',
            method: 'get'
        },
        {
            link: '/productwishlist/checkMultiWishlistStatus',
            modules: 'customers',
            controller: ProductWishlistController,
            action: 'checkMultiWishlistStatus',
            method: 'post'
        }
    ]);
    return router.getRouter();
}
export default getRouters();