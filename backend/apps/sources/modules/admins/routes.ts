import Route from '@src/Route.js';
import AccountController from './controllers/AccountController.js';
import AuthController from './controllers/AuthController.js';
import AdminFunctionController from './controllers/AdminFunctionController.js';
import GroupController from './controllers/GroupController.js';
import UsersController from './controllers/UsersController.js';
import ConfigController from './controllers/ConfigController.js';
// import FinderController from './controllers/FinderController.js';
import DeptsController from './controllers/DeptsController.js';
// import EmployeeController from './controllers/EmployeeController.js';
import FileController from './controllers/UploadController.js';
import LogsController from './controllers/LogsController.js';
import MenuTypeController from './controllers/MenuTypeController.js';
import MenuController from './controllers/MenuController.js';
import NewsController from './controllers/NewsController.js';
import NewsCategoriesController from './controllers/NewsCategoriesController.js';
import BannersController from './controllers/BannerController.js';
import ProductsController from './controllers/ProductsController.js';
import PagesController from './controllers/PagesController.js';
import CategoriesController from './controllers/CategoriesController.js';
import PackagesController from './controllers/PackagesController.js';
import ProductPriceController from './controllers/ProductPriceController.js';
import ProductReviewsController from './controllers/ProductReviewsController.js';
import VoucherController from './controllers/VouchersController.js';
import PromotionsController from './controllers/PromotionsController.js';
import VoucherStoreController from './controllers/VoucherStoreController.js';
import VoucherStoreCustomerController from './controllers/VoucherStoreCustomerController.js';
import VoucherInvitedController from './controllers/VoucherInvitedController.js';
import ProductReviewsReplyController from './controllers/ProductReviewsReplyController.js';
import StoresController from './controllers/StoresController.js';

const getRouters = () => {
    const ADMIN_URI = process.env.ADMIN_URI || "/adcp";
    const router = new Route();
    router.add(ADMIN_URI, [
        //00.Ganeral
        //01.Tài khoản
        {
            link: '/captcha',
            modules: 'admins',
            controller: AuthController,
            action: 'getCaptcha',
        },
        {
            link: '/uploads/:folder/:id/:filename',
            modules: 'admins',
            controller: FileController,
            action: 'serve',
        },
        {
            link: '/login',
            modules: 'admins',
            controller: AuthController,
            action: 'login',
            method: 'post'
        },
        {
            link: '/redirectToGoogle',
            modules: 'admins',
            controller: AuthController,
            action: 'redirectToGoogle',
            method: 'get'
        },
        {
            link: '/googleCallback',
            modules: 'admins',
            controller: AuthController,
            action: 'googleCallback',
            method: 'get'
        },
        {
            link: '/logout',
            modules: 'admins',
            controller: AuthController,
            action: 'logout',
        },
        {
            link: '/forget',
            modules: 'admins',
            controller: AuthController,
            action: 'forget',
            method: 'post'
        },
        {
            link: '/forgetConfirmOtp',
            modules: 'admins',
            controller: AuthController,
            action: 'forgetConfirmOtp',
        },
        {
            link: '/forgetResendOtp',
            modules: 'admins',
            controller: AuthController,
            action: 'forgetResendOtp',
        },
        {
            link: '/forgetPassword',
            modules: 'admins',
            controller: AuthController,
            action: 'forgetPassword',
            method: 'post'
        },
        {
            link: '/refreshToken',
            modules: 'admins',
            controller: AuthController,
            action: 'refreshToken',
        },
        {
            link: '/accounts/getProfile',
            modules: 'admins',
            controller: AccountController,
            action: 'profile',
        },
        {
            link: '/accounts/editProfile',
            modules: 'admins',
            controller: AccountController,
            action: 'editProfile',
            method: 'post'
        },
        {
            link: '/accounts/changePassword',
            modules: 'admins',
            controller: AccountController,
            action: 'changePassword',
            method: 'post'
        },
        {
            link: '/accounts/linkGoogle',
            modules: 'admins',
            controller: AccountController,
            action: 'linkGoogle',
            method: 'get'
        },
        {
            link: '/accounts/redirectToLinkGoogle',
            modules: 'admins',
            controller: AccountController,
            action: 'redirectToLinkGoogle',
            method: 'get'
        },
        {
            link: '/linkGoogleCallback',
            modules: 'admins',
            controller: AccountController,
            action: 'linkGoogleCallback',
            method: 'get'
        },
        {
            link: '/accounts/unlinkGoogle',
            modules: 'admins',
            controller: AccountController,
            action: 'unlinkGoogle',
            method: 'get'
        },
        // {
        //     link: '/elfinder/connector',
        //     modules: 'admins',
        //     controller: FinderController,
        //     action: 'connector',
        //     method: 'post'
        // },
        // {
        //     link: '/elfinder/connector',
        //     modules: 'admins',
        //     controller: FinderController,
        //     action: 'connector',
        //     method: 'get'
        // },
        // {
        //     link: '/elfinder/tmb/:filename',
        //     modules: 'admins',
        //     controller: FinderController,
        //     action: 'tmb',
        // },
        // {
        //     link: '/file/:volume/*',
        //     modules: 'admins',
        //     controller: FinderController,
        //     action: 'file',
        // },
    ]);
    router.addGS(ADMIN_URI + '/users', UsersController, 'admins');
    router.add(ADMIN_URI, [
        {
            link: '/users/adminChangeUserPassword/:code([0-9]+)',
            modules: 'admins',
            controller: UsersController,
            action: 'adminChangeUserPassword',
        },
    ]);
    router.addGS(ADMIN_URI + '/group', GroupController, 'admins');
    router.add(ADMIN_URI, [
        {
            link: '/group/getFunctionIds/:code([0-9]+)',
            modules: 'admins',
            controller: GroupController,
            action: 'getFunctionIds',
        },
        {
            link: '/group/editRole/:code([0-9]+)',
            modules: 'admins',
            controller: GroupController,
            action: 'editRole',
            method: 'post'
        },
        {
            link: '/group/checkPermission',
            modules: 'admins',
            controller: GroupController,
            action: 'checkPermission',
        }
    ]);
    router.addGS(ADMIN_URI + '/adminFunction', AdminFunctionController, 'admins');
    router.add(ADMIN_URI, [
        {
            link: '/adminFunction/getFuncMenu',
            modules: 'admins',
            controller: AdminFunctionController,
            action: 'getFuncMenu',
        },
        {
            link: '/adminFunction/getPermissonMenu',
            modules: 'admins',
            controller: AdminFunctionController,
            action: 'getPermissonMenu',
        },
    ]);
    router.add(ADMIN_URI, [
        {
            link: '/config/update',
            modules: 'admins',
            controller: ConfigController,
            action: 'update',
            method: 'post'
        },
        {
            link: '/config/getAll',
            modules: 'admins',
            controller: ConfigController,
            action: 'getAll'
        }
    ]);
    router.addGS(ADMIN_URI + '/depts', DeptsController, 'admins');
    router.add(ADMIN_URI, [
        {
            link: '/depts/getDepts',
            modules: 'admins',
            controller: DeptsController,
            action: 'getDepts',
        },
    ]);
    // router.addGS(ADMIN_URI + '/employee', EmployeeController, 'admins');
    // router.add(ADMIN_URI, [
    //     {
    //         link: '/employee/getEmployees',
    //         modules: 'admins',
    //         controller: EmployeeController,
    //         action: 'getEmployees',
    //     },
    // ]);
    router.addGS(ADMIN_URI + '/logs', LogsController, 'admins');
    router.addGS(ADMIN_URI + '/menuType', MenuTypeController, 'admins');
    router.addGS(ADMIN_URI + '/menu', MenuController, 'admins');
    router.add(ADMIN_URI, [
        {
            link: '/menu/getFuncMenu',
            modules: 'admins',
            controller: MenuController,
            action: 'getFuncMenu',
        },
    ]);
    router.addGS(ADMIN_URI + '/newsCategories', NewsCategoriesController, 'admins');
    router.add(ADMIN_URI, [
        {
            link: '/newsCategories/getTree/:parent_id',
            modules: 'admins',
            controller: NewsCategoriesController,
            action: 'getTree',
        },
    ]);

    router.addGS(ADMIN_URI + '/news', NewsController, 'admins');
    router.add(ADMIN_URI, [
        {
            link: '/news/getParentSimple',
            modules: 'admins',
            controller: NewsController,
            action: 'getParentSimple',
        },
        {
            link: '/news/:alias',
            modules: 'admins',
            controller: NewsController,
            action: 'detailByAlias',
        }
    ]);
    router.addGS(ADMIN_URI + '/banners', BannersController, 'admins');
    router.addGS(ADMIN_URI + '/packages', PackagesController, 'admins');
    router.addGS(ADMIN_URI + '/products', ProductsController, 'admins');
    router.addGS(ADMIN_URI + '/productReviews', ProductReviewsController, 'admins');
    router.addGS(ADMIN_URI + '/productReviewsReply', ProductReviewsReplyController, 'admins');
    router.addGS(ADMIN_URI + '/productPrice', ProductPriceController, 'admins');
    router.addGS(ADMIN_URI + '/categories', CategoriesController, 'admins');
    router.addGS(ADMIN_URI + '/vouchers', VoucherController, 'admins');
    router.addGS(ADMIN_URI + '/promotions', PromotionsController, 'admins');
    router.addGS(ADMIN_URI + '/voucherStore', VoucherStoreController, 'admins');
    router.addGS(ADMIN_URI + '/voucherStoreCustomer', VoucherStoreCustomerController, 'admins');
    router.addGS(ADMIN_URI + '/voucherInvited', VoucherInvitedController, 'admins');
    router.addGS(ADMIN_URI + '/stores', StoresController, 'admins');
    router.addGS(ADMIN_URI + '/pages', PagesController, 'admins');
    router.add(ADMIN_URI, [
        {
            link: '/pages/addNewSection/:code([0-9]+)',
            modules: 'admins',
            controller: PagesController,
            action: 'addNewSection',
            method: 'post'
        },
        {
            link: '/pages/:code([0-9]+)/editSection',
            modules: 'admins',
            controller: PagesController,
            action: 'editSection',
            method: 'post'
        },
        {
            link: '/pages/:code([0-9]+)/deleteSection',
            modules: 'admins',
            controller: PagesController,
            action: 'deleteSection',
            method: 'post'
        },
        {
            link: '/pages/:code([0-9]+)/addNewCol',
            modules: 'admins',
            controller: PagesController,
            action: 'addNewCol',
            method: 'post'
        },
        {
            link: '/pages/:code([0-9]+)/editCol',
            modules: 'admins',
            controller: PagesController,
            action: 'editCol',
            method: 'post'
        },
        {
            link: '/pages/:code([0-9]+)/deleteCol',
            modules: 'admins',
            controller: PagesController,
            action: 'deleteCol',
            method: 'post'
        },
        {
            link: '/pages/:code([0-9]+)/type',
            modules: 'admins',
            controller: PagesController,
            action: 'type',
        },
        {
            link: '/pages/:code([0-9]+)/sortCol',
            modules: 'admins',
            controller: PagesController,
            action: 'sortCol',
            method: 'post'
        },
        {
            link: '/pages/:code([0-9]+)/sortRow',
            modules: 'admins',
            controller: PagesController,
            action: 'sortRow',
            method: 'post'
        },
        {
            link: '/pages/:code([0-9]+)/sortSection',
            modules: 'admins',
            controller: PagesController,
            action: 'sortSection',
            method: 'post'
        },
    ]);

    return router.getRouter();
}
export default getRouters();
