// ============================================================================
// REQUEST CONFIGURATION - next-intl
// ============================================================================
// File này cấu hình cách next-intl xử lý requests và load messages (translations)
// Đây là Server-side config, chạy trên Next.js server
// ============================================================================

import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

// ============================================================================
// EXPORT DEFAULT CONFIG
// ============================================================================
// getRequestConfig() là một function từ next-intl/server
// Nó nhận một async function và được gọi mỗi khi có request đến server
//
// Tham số nhận vào:
// - requestLocale: Promise<string | undefined>
//   → Locale được extract từ URL path (segment [locale])
//   → VD: /vi/san-pham → requestLocale = 'vi'
//        /en/products → requestLocale = 'en'
//
// Return:
// - Object chứa:
//   - locale: Locale đã được validate
//   - messages: Object chứa tất cả translations cho locale đó
// ============================================================================
export default getRequestConfig(async ({ requestLocale }) => {
    // ------------------------------------------------------------------------
    // STEP 1: Lấy locale từ request
    // ------------------------------------------------------------------------
    // requestLocale là một Promise nên cần await
    // Nó được extract từ [locale] segment trong URL
    // VD: URL = /vi/san-pham → requestLocale = 'vi'
    // ------------------------------------------------------------------------
    let locale = await requestLocale;

    // ------------------------------------------------------------------------
    // STEP 2: Validate locale
    // ------------------------------------------------------------------------
    // Kiểm tra xem locale có hợp lệ không (có trong danh sách routing.locales)
    // Nếu không hợp lệ hoặc undefined → dùng defaultLocale
    //
    // Trường hợp locale không hợp lệ:
    // - User truy cập URL không đúng: /xyz/san-pham
    // - Hacker cố gắng inject locale: /../../etc/passwd
    // - Locale chưa được support: /fr/products (nếu chưa có 'fr')
    //
    // → Fallback về defaultLocale để đảm bảo app luôn hoạt động
    // ------------------------------------------------------------------------
    if (!locale || !routing.locales.includes(locale as any)) {
        locale = routing.defaultLocale;
    }

    // ------------------------------------------------------------------------
    // STEP 3: Load messages (translations) cho locale
    // ------------------------------------------------------------------------
    // Dynamic import messages file tương ứng với locale
    // VD: locale = 'vi' → import('@/messages/vi.json')
    //     locale = 'en' → import('@/messages/en.json')
    //
    // Ưu điểm của dynamic import:
    // - Code splitting: Chỉ load messages cần thiết cho locale hiện tại
    // - Performance: Không load tất cả ngôn ngữ cùng lúc
    // - Bundle size: Giảm kích thước bundle cho mỗi page
    //
    // .default: Vì JSON module export default, cần access .default property
    // ------------------------------------------------------------------------
    return {
        locale, // Locale đã validate
        messages: (await import(`@/messages/${locale}.json`)).default, // Translations
    };
});

// ============================================================================
// CÁCH HOẠT ĐỘNG TRONG FLOW
// ============================================================================
// 1. User truy cập: /vi/san-pham
//
// 2. Next.js routing:
//    - Match với app/[locale]/... structure
//    - Extract locale = 'vi' từ URL
//
// 3. next-intl gọi getRequestConfig():
//    - Nhận requestLocale = 'vi'
//    - Validate locale
//    - Load @/messages/vi.json
//
// 4. Messages được inject vào React context:
//    - Tất cả components trong tree có thể access messages
//    - Dùng useTranslations() hook để lấy translations
//
// 5. Component render:
//    const t = useTranslations('products');
//    <h1>{t('title')}</h1>
//    → Render: <h1>Sản phẩm</h1>
// ============================================================================
