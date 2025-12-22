// ============================================================================
// ROUTING CONFIGURATION - next-intl
// ============================================================================
// File này định nghĩa cấu hình routing đa ngôn ngữ cho ứng dụng
// Sử dụng next-intl để tự động dịch URLs và tạo navigation helpers
// ============================================================================

import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

// ============================================================================
// ROUTING CONFIG
// ============================================================================
export const routing = defineRouting({
    // ----------------------------------------------------------------------------
    // LOCALES - Danh sách các ngôn ngữ được hỗ trợ
    // ----------------------------------------------------------------------------
    // Mỗi locale được thêm vào đây sẽ tạo ra một URL prefix
    // VD: 'vi' → /vi/..., 'en' → /en/...
    // Lưu ý: Thứ tự không quan trọng nhưng nên đặt locale mặc định đầu tiên
    // ----------------------------------------------------------------------------
    locales: ["vi", "en"],

    // ----------------------------------------------------------------------------
    // DEFAULT LOCALE - Ngôn ngữ mặc định
    // ----------------------------------------------------------------------------
    // Khi user truy cập "/" hoặc không có locale trong URL, sẽ redirect về locale này
    // VD: "/" → redirect to "/vi"
    // Middleware sẽ tự động thêm prefix này nếu không có locale
    // ----------------------------------------------------------------------------
    defaultLocale: "vi",

    // ----------------------------------------------------------------------------
    // PATHNAMES - Định nghĩa URL cho từng ngôn ngữ
    // ----------------------------------------------------------------------------
    // Cấu trúc:
    // - Key (bên trái): Pathname CHÍNH THỨC dùng trong code (internal pathname)
    // - Value: Object chứa pathname cho từng locale (external pathname)
    //
    // Cách hoạt động:
    // 1. Trong code, bạn dùng internal pathname: <Link href="/products">
    // 2. next-intl tự động convert sang external pathname dựa trên locale hiện tại:
    //    - Locale = 'vi' → URL = /vi/san-pham
    //    - Locale = 'en' → URL = /en/products
    //
    // Lợi ích:
    // - Code không cần thay đổi khi thêm ngôn ngữ mới
    // - SEO tốt hơn với URL bản địa hóa
    // - User experience tốt hơn (URL dễ đọc với người dùng)
    // ----------------------------------------------------------------------------
    pathnames: {
        // Root path - giống nhau cho tất cả ngôn ngữ
        "/": "/",

        // ----------------------------------------------------------------------------
        // SITE PUBLIC ROUTES - Các routes công khai
        // ----------------------------------------------------------------------------
        "/flash-sale": {
            vi: "/khuyen-mai",
            en: "/flash-sale",
        },

        "/search": {
            vi: "/tim-kiem",
            en: "/search",
        },

        // ----------------------------------------------------------------------------
        // PRODUCT ROUTES - Các routes liên quan đến sản phẩm
        // ----------------------------------------------------------------------------
        "/product/[slug]": {
            vi: "/san-pham/[slug]",
            en: "/product/[slug]",
        },

        // Category route
        "/[category]": {
            vi: "/[category]",
            en: "/[category]",
        },

        // ----------------------------------------------------------------------------
        // STORE ROUTES - Các routes cửa hàng
        // ----------------------------------------------------------------------------
        "/store": {
            vi: "/cua-hang",
            en: "/store",
        },

        "/store/[slug]": {
            vi: "/cua-hang/[slug]",
            en: "/store/[slug]",
        },

        "/store/[slug]/[[...tab]]": {
            vi: "/cua-hang/[slug]/[[...tab]]",
            en: "/store/[slug]/[[...tab]]",
        },

        // ----------------------------------------------------------------------------
        // CUSTOMER AUTH ROUTES - Xác thực khách hàng
        // ----------------------------------------------------------------------------
        "/customers/login": {
            vi: "/khach-hang/dang-nhap",
            en: "/customers/login",
        },

        "/customers/register": {
            vi: "/khach-hang/dang-ky",
            en: "/customers/register",
        },

        "/customers/forgotPassword": {
            vi: "/khach-hang/quen-mat-khau",
            en: "/customers/forgot-password",
        },

        // ----------------------------------------------------------------------------
        // CUSTOMER PROTECTED ROUTES - Tài khoản khách hàng (yêu cầu đăng nhập)
        // ----------------------------------------------------------------------------
        "/customers": {
            vi: "/khach-hang",
            en: "/customers",
        },

        "/customers/profile": {
            vi: "/khach-hang/thong-tin",
            en: "/customers/profile",
        },

        "/customers/orders": {
            vi: "/khach-hang/don-hang",
            en: "/customers/orders",
        },

        "/customers/wishlist": {
            vi: "/khach-hang/yeu-thich",
            en: "/customers/wishlist",
        },

        "/customers/customerAddress": {
            vi: "/khach-hang/dia-chi",
            en: "/customers/address",
        },

        "/customers/vouchers": {
            vi: "/khach-hang/ma-giam-gia",
            en: "/customers/vouchers",
        },

        "/customers/reviews": {
            vi: "/khach-hang/danh-gia-san-pham",
            en: "/customers/reviews",
        },

        "/customers/storeReviews": {
            vi: "/khach-hang/danh-gia-cua-hang",
            en: "/customers/store-reviews",
        },
        "news/[slug]": {
            vi: "tin-tuc/[slug]",
            en: "news/[slug]",
        },

        // ----------------------------------------------------------------------------
        // CUSTOMER OTHER ROUTES - Giỏ hàng, thanh toán, thông báo
        // ----------------------------------------------------------------------------
        "/customers/cart": {
            vi: "/khach-hang/gio-hang",
            en: "/customers/cart",
        },

        "/customers/purchase": {
            vi: "/khach-hang/thanh-toan",
            en: "/customers/purchase",
        },

        "/customers/notifications": {
            vi: "/khach-hang/thong-bao",
            en: "/customers/notifications",
        },

        // ----------------------------------------------------------------------------
        // STORE ACCOUNT AUTH ROUTES - Xác thực tài khoản cửa hàng
        // ----------------------------------------------------------------------------
        "/storeAccount/login": {
            vi: "/tai-khoan-cua-hang/dang-nhap",
            en: "/storeAccount/login",
        },

        "/storeAccount/register": {
            vi: "/tai-khoan-cua-hang/dang-ky",
            en: "/storeAccount/register",
        },

        "/storeAccount/forgotPassword": {
            vi: "/tai-khoan-cua-hang/quen-mat-khau",
            en: "/storeAccount/forgot-password",
        },
    },
});

// ============================================================================
// TYPE DEFINITIONS - Định nghĩa types cho TypeScript
// ============================================================================

// ----------------------------------------------------------------------------
// Pathnames Type
// ----------------------------------------------------------------------------
// Extract tất cả keys từ routing.pathnames để tạo type union
// VD: '/products' | '/cart' | '/customers/login' | ...
// Dùng để type-check khi sử dụng Link hoặc router.push
// ----------------------------------------------------------------------------
export type Pathnames = keyof typeof routing.pathnames;

// ----------------------------------------------------------------------------
// Locale Type
// ----------------------------------------------------------------------------
// Extract tất cả locales từ routing.locales để tạo type union
// VD: 'vi' | 'en'
// Dùng để type-check khi làm việc với locale
// ----------------------------------------------------------------------------
export type Locale = (typeof routing.locales)[number];

// ============================================================================
// NAVIGATION HELPERS - Tạo các helper functions với type-safe
// ============================================================================
// createNavigation() nhận routing config và tạo ra các helper functions:
//
// 1. Link - Component thay thế next/link
//    - Tự động dịch href sang external pathname
//    - VD: <Link href="/products"> → /vi/san-pham hoặc /en/products
//
// 2. redirect - Function redirect với locale-aware
//    - Dùng trong Server Components hoặc Server Actions
//    - VD: redirect('/products') → redirect to /vi/san-pham
//
// 3. usePathname - Hook lấy pathname hiện tại
//    - Trả về INTERNAL pathname (không có locale prefix)
//    - VD: URL = /vi/san-pham → usePathname() = '/products'
//
// 4. useRouter - Hook router với locale-aware
//    - router.push('/products') → navigate to /vi/san-pham
//    - router.replace(), router.back(), router.forward() đều hỗ trợ
//
// 5. getPathname - Function convert internal → external pathname
//    - VD: getPathname({ href: '/products', locale: 'vi' }) → '/san-pham'
//
// ⚠️ QUAN TRỌNG:
// - PHẢI sử dụng các helpers này thay vì next/link và next/navigation
// - Nếu dùng next/link → URLs sẽ không được dịch
// - Nếu dùng next/navigation → Sẽ bị lỗi routing
// ============================================================================
export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);
