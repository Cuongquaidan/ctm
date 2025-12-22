// ============================================================================
// NEXT.JS CONFIGURATION WITH next-intl
// ============================================================================
// File này config Next.js để hoạt động với next-intl
// Import plugin và wrap Next.js config
// ============================================================================

import createNextIntlPlugin from "next-intl/plugin";

// ============================================================================
// CREATE next-intl PLUGIN
// ============================================================================
// createNextIntlPlugin() nhận path đến file request config
// Plugin này sẽ:
// 1. Inject request config vào Next.js build process
// 2. Setup server-side message loading
// 3. Enable locale-based routing
// 4. Optimize message bundles (code splitting by locale)
//
// Tham số: './src/i18n/request.ts'
// - Path TƯƠNG ĐỐI từ project root
// - Trỏ đến file export getRequestConfig()
// - File này define cách load messages cho mỗi locale
// ============================================================================
const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// ============================================================================
// NEXT.JS CONFIG
// ============================================================================
/** @type {import('next').NextConfig} */
// --------------------------------------------------------------------------
// IMAGES CONFIGURATION
// --------------------------------------------------------------------------
// Whitelist external domains cho next/image component
// Next.js yêu cầu phải config domains trước khi dùng external images
//
// remotePatterns: Cấu hình patterns cho external images (khuyến nghị)
// - protocol: 'https' hoặc 'http'
// - hostname: Domain name (exact match hoặc wildcard)
// - pathname: Path pattern (optional)
//
// VD:
// <Image src="https://ca-ctm.systems.com.vn/styles/logo.png" />
// → Match với pattern bên dưới → Allow
// --------------------------------------------------------------------------
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ca-ctm.systems.com.vn",
                pathname: "/**", // Allow tất cả paths
            },
            {
                protocol: "https",
                hostname: "api-tmdt.systems.com.vn",
                pathname: "/**",
            },
        ],
    },
    experimental: {
        turbo: {
            rules: {
                // thêm rule cho .ttf
                "*.ttf": ["file-loader"],
            },
        },
    },

    // --------------------------------------------------------------------------
    // BASIC CONFIGS (Examples - uncomment nếu cần)
    // --------------------------------------------------------------------------
    // // Strict Mode: Enable React strict mode cho development
    // // Giúp phát hiện bugs sớm
    // reactStrictMode: true,
    // // Image Domains: Whitelist domains cho next/image
    // // VD: images: { domains: ['example.com', 'cdn.example.com'] }
    // images: {
    //   domains: [],
    // },
    // // Environment Variables: Expose env vars to browser
    // env: {
    //   CUSTOM_KEY: process.env.CUSTOM_KEY,
    // },
    // // Redirects: Server-side redirects
    // async redirects() {
    //   return [
    //     {
    //       source: '/old-path',
    //       destination: '/new-path',
    //       permanent: true,
    //     },
    //   ];
    // },
    // // Rewrites: URL rewrites (giữ URL nhưng render content khác)
    // async rewrites() {
    //   return [
    //     {
    //       source: '/api/:path*',
    //       destination: 'https://api.example.com/:path*',
    //     },
    //   ];
    // },
};

// ============================================================================
// EXPORT CONFIG WITH next-intl PLUGIN
// ============================================================================
// Wrap nextConfig với withNextIntl() để enable i18n features
//
// Cách hoạt động:
// 1. withNextIntl() nhận nextConfig
// 2. Merge với i18n-specific configs
// 3. Add webpack plugins cho message loading
// 4. Return enhanced config cho Next.js
//
// ⚠️ QUAN TRỌNG:
// - PHẢI wrap config với withNextIntl()
// - Nếu có plugins khác, wrap theo thứ tự đúng
//
// VD với nhiều plugins:
// export default withPlugin3(withPlugin2(withNextIntl(nextConfig)));
//
// Hoặc dùng compose:
// import { compose } from 'next-compose-plugins';
// export default compose([
//   [withNextIntl],
//   [withPlugin2],
//   [withPlugin3]
// ])(nextConfig);
// ============================================================================
// export default withNextIntl(nextConfig);
export default nextConfig;

// ============================================================================
// BUILD PROCESS FLOW
// ============================================================================
//
// 1. Developer chạy: npm run build
// ↓
// 2. Next.js đọc next.config.mjs
// ↓
// 3. Execute createNextIntlPlugin('./src/i18n/request.ts')
// ↓
// 4. Plugin reads routing config từ @/i18n/routing
// ↓
// 5. Plugin setup webpack loaders cho JSON messages
// ↓
// 6. Build pages với locale-specific bundles:
//    - /vi/san-pham → Bundle với messages/vi.json
//    - /en/products → Bundle với messages/en.json
// ↓
// 7. Generate static pages (nếu có generateStaticParams)
// ↓
// 8. Output: .next/standalone hoặc .next/server
//
// ============================================================================

// ============================================================================
// TROUBLESHOOTING
// ============================================================================
//
// ❌ Lỗi: Cannot find module './src/i18n/request.ts'
// ✅ Fix: Đảm bảo path đúng, relative từ project root
//
// ❌ Lỗi: Messages not loading
// ✅ Fix: Check messages/*.json files exist và có cấu trúc đúng
//
// ❌ Lỗi: Plugin conflict
// ✅ Fix: Check thứ tự wrap plugins, next-intl nên wrap đầu tiên
//
// ❌ Lỗi: Build fails với locale errors
// ✅ Fix: Check routing.locales match với messages files
//
// ============================================================================
