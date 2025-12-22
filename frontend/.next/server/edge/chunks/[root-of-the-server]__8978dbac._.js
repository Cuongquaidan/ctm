(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__8978dbac._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/src/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================================
// MIDDLEWARE - Kết hợp next-intl với Authentication logic
// ============================================================================
// File này xử lý:
// 1. i18n routing (locale detection, URL rewriting)
// 2. Authentication checks (protected routes, auth redirects)
//
// Middleware chạy TRƯỚC KHI request đến page/API route
// Cho phép intercept và modify request/response
// ============================================================================
// import createMiddleware from "next-intl/middleware";
// import { routing } from "@/i18n/routing";
__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
async function middleware(request) {
// ------------------------------------------------------------------------
// 2.1: Chạy i18n middleware TRƯỚC
// ------------------------------------------------------------------------
// Gọi intlMiddleware để xử lý locale detection và URL rewriting
// Response này có thể là:
// - NextResponse (normal): Cho phép request tiếp tục
// - RedirectResponse: Redirect đến URL có locale
//
// Tại sao chạy trước?
// - Đảm bảo pathname đã có locale prefix
// - Giúp auth logic dễ dàng check paths với locale
// ------------------------------------------------------------------------
// const response = intlMiddleware(request);
// ------------------------------------------------------------------------
// 2.2: Extract locale từ pathname
// ------------------------------------------------------------------------
// Pathname format: /[locale]/[...rest]
// VD: /vi/san-pham → split('/') → ['', 'vi', 'san-pham']
//                  → [1] = 'vi'
//
// Locale này dùng để:
// - Build auth paths cho từng ngôn ngữ
// - Redirect đúng locale khi cần
// ------------------------------------------------------------------------
// const locale = request.nextUrl.pathname.split("/")[1];
// ------------------------------------------------------------------------
// 2.3: Lấy authentication token và pathname
// ------------------------------------------------------------------------
// refreshToken: Cookie chứa refresh token
// pathname: Full path của request (/vi/khach-hang/dang-nhap)
// ------------------------------------------------------------------------
// const token = request.cookies.get("refreshToken")?.value;
// const { pathname } = request.nextUrl;
// ------------------------------------------------------------------------
// 2.4: Define auth paths cho MỖI locale
// ------------------------------------------------------------------------
// Auth paths là các routes mà user ĐÃ ĐĂNG NHẬP không nên truy cập
// VD: Đã login rồi thì không cần vào trang login nữa
//
// Bao gồm CẢ 2 versions (vi và en) của mỗi route:
// - /vi/customers/login (internal pathname, ít khi xảy ra)
// - /vi/khach-hang/dang-nhap (external pathname, URL thật)
// - /en/customers/login (external pathname cho English)
//
// Tại sao cần cả 2?
// - User có thể type trực tiếp URL
// - Direct navigation từ bookmarks
// - SEO crawlers có thể access cả 2 versions
// ------------------------------------------------------------------------
// const authPaths = [
//     `/${locale}/customers/login`, // Internal pathname
//     `/${locale}/khach-hang/dang-nhap`, // External pathname (vi)
//     `/${locale}/customers/register`, // Internal pathname
//     `/${locale}/khach-hang/dang-ky`, // External pathname (vi)
// ];
// ------------------------------------------------------------------------
// 2.5: Redirect authenticated users từ auth pages
// ------------------------------------------------------------------------
// Logic: Nếu user ĐÃ có token VÀ đang cố truy cập auth pages
// → Redirect về dashboard (đã login rồi không cần login nữa)
//
// Flow:
// 1. Check: pathname có trong authPaths? && token exists?
// 2. Yes → Redirect to /${locale}/dashboard
// 3. No → Cho phép tiếp tục
//
// VD:
// - User đã login, vào /vi/khach-hang/dang-nhap
// - Middleware detect token → Redirect to /vi/dashboard
// ------------------------------------------------------------------------
// if (authPaths.includes(pathname) && token) {
//     try {
//         // TODO: Optionally verify token here
//         // const isValid = await verifyToken(token);
//         // if (!isValid) throw new Error('Invalid token');
//         // Redirect về dashboard nếu đã đăng nhập
//         return NextResponse.redirect(new URL(`/${locale}/`, request.url));
//     } catch {
//         // Token invalid hoặc expired
//         // → Cho phép user vào login page để login lại
//         // (Không làm gì, fall through to return response)
//     }
// }
// ------------------------------------------------------------------------
// 2.6: Protected routes (COMMENTED - Example)
// ------------------------------------------------------------------------
// Code này được comment nhưng là example cho protected routes
// Protected routes: Routes chỉ user ĐĂNG NHẬP mới được truy cập
//
// Logic:
// 1. Define protected paths (profile, admin, etc.)
// 2. Check: pathname starts with protected path? && NO token?
// 3. Yes → Redirect to login page với redirect parameter
// 4. User login xong sẽ được redirect về page ban đầu
//
// VD Flow:
// - User chưa login, vào /vi/profile
// - Middleware detect không có token
// - Redirect to /vi/khach-hang/dang-nhap?redirect=/vi/profile
// - User login xong → Redirect về /vi/profile
// ------------------------------------------------------------------------
// const protectedPaths = [`/${locale}/profile`, `/${locale}/admin`];
// if (protectedPaths.some((path) => pathname.startsWith(path))) {
//     if (!token) {
//         // Build login URL dựa trên locale
//         const loginUrl = locale === 'vi'
//             ? `/${locale}/khach-hang/dang-nhap`
//             : `/${locale}/customers/login`;
//
//         // Add redirect parameter để redirect về page ban đầu sau login
//         const url = new URL(
//             `${loginUrl}?redirect=${encodeURIComponent(pathname)}`,
//             request.url
//         );
//         return NextResponse.redirect(url);
//     }
// }
// ------------------------------------------------------------------------
// 2.7: Return response từ i18n middleware
// ------------------------------------------------------------------------
// Nếu không có auth redirects → Return response từ intlMiddleware
// Response này có thể là:
// - Normal response: Request tiếp tục đến page
// - Redirect response: Redirect đến URL với locale
// ------------------------------------------------------------------------
// return response;
}
const config = {
}; // ============================================================================
 // FLOW TỔNG QUAN
 // ============================================================================
 //
 // Request: GET /san-pham
 // ↓
 // 1. Middleware chạy (match với pattern 1)
 // ↓
 // 2. intlMiddleware detect thiếu locale
 // ↓
 // 3. Check cookie NEXT_LOCALE → có 'vi'
 // ↓
 // 4. Redirect to /vi/san-pham
 // ↓
 // 5. Browser request lại: GET /vi/san-pham
 // ↓
 // 6. Middleware chạy lại (match với pattern 3)
 // ↓
 // 7. intlMiddleware OK, extract locale = 'vi'
 // ↓
 // 8. Auth logic: Check authPaths → không match
 // ↓
 // 9. Return response → Request tiếp tục
 // ↓
 // 10. Next.js routing: Match với app/[locale]/(pages)/...
 // ↓
 // 11. Load messages từ src/messages/vi.json
 // ↓
 // 12. Render page với translations
 //
 // ============================================================================
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__8978dbac._.js.map