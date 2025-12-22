# Tài liệu Components - CTM E-commerce Platform

## 📋 Mục lục

-   [Tổng quan Architecture](#tổng-quan-architecture)
-   [Features Components](#features-components)
    -   [Authentication](#-authentication-featuresauth)
    -   [Banner](#-banner-featuresbanner)
    -   [Breadcrumb](#-breadcrumb-featuresbreadcrumb)
    -   [Cart](#-cart-featurescart)
    -   [Category](#-category-featurescategory)
    -   [Dashboard](#-dashboard-featuresdashboard)
    -   [Footer](#-footer-featuresfooter)
    -   [Header](#-header-featuresheader)
    -   [Help](#-help-featureshelp)
    -   [Image](#-image-featuresimage)
    -   [Mobile](#-mobile-featuresmobile)
    -   [Modal](#-modal-featuresmodal)
    -   [News](#-news-featuresnews)
    -   [Notification](#-notification-featuresnotification)
    -   [Product](#-product-featuresproduct)
    -   [Profile](#-profile-featuresprofile)
    -   [Provider](#-provider-featuresprovider)
    -   [Purchase](#-purchase-featurespurchase)
    -   [Review](#-review-featuresreview)
    -   [Sidebar](#-sidebar-featuressidebar)
    -   [Store](#-store-featuresstore)
    -   [Voucher](#-voucher-featuresvoucher)
-   [UI Components](#ui-components)
-   [Layout Components](#layout-components)
-   [Component Versions](#component-versions)
-   [Best Practices](#best-practices)

---

## 🏗️ Tổng quan Architecture

### Component Organization

```
src/components/
├── features/          # Feature-specific components
│   ├── auth/         # Authentication components
│   ├── banner/       # Banners & sliders
│   ├── breadcrumb/   # Breadcrumb navigation
│   ├── cart/         # Shopping cart
│   ├── category/     # Category menus & filters
│   ├── dashboard/    # Dashboard components
│   ├── footer/       # Footer variants
│   ├── header/       # Header & navigation
│   ├── help/         # Help & FAQ
│   ├── image/        # Illustration images
│   ├── mobile/       # Mobile-specific UI
│   ├── modal/        # Modal dialogs
│   ├── news/         # News & blog
│   ├── notification/ # Notifications
│   ├── product/      # Product displays
│   │   ├── components/  # Product sub-components
│   │   ├── filter/      # Product filters
│   │   ├── item/        # Product card variants
│   │   ├── section/     # Product sections
│   │   └── tab/         # Product tabs
│   ├── profile/      # User profile
│   ├── provider/     # Context providers
│   ├── purchase/     # Orders & checkout
│   │   └── tracking/    # Order tracking
│   ├── review/       # Reviews & ratings
│   ├── sidebar/      # Sidebars
│   ├── store/        # Store pages
│   │   └── tab/      # Store tabs
│   └── voucher/      # Vouchers & promotions
├── layout/           # Layout components
│   └── storeAccount/ # Store account layouts
└── ui/               # Reusable UI primitives
    ├── badge/        # Badge components
    ├── button/       # Button variants
    └── icons/        # Icon components
```

### Naming Conventions

-   **Base components**: `ComponentName.tsx` (e.g., `VerticalProduct.tsx`)
-   **V2 variants**: `ComponentNameV2.tsx` (improved UI/animations)
-   **V3 variants**: `ComponentNameV3.tsx` (URL state + SEO optimized)
-   **Client components**: `ComponentName.client.tsx` (client-side logic separation)
-   **Server components**: No suffix, async function (default in Next.js 13+)

### Version Evolution

| Version | Focus               | Key Features                                 |
| ------- | ------------------- | -------------------------------------------- |
| **V1**  | Basic functionality | Standard UI, local state                     |
| **V2**  | Enhanced UX         | Hover effects, smooth animations, responsive |
| **V3**  | SEO & Performance   | URL state management, server/client split    |

---

## 🎯 Features Components

### 🔐 Authentication (`features/auth`)

Components xử lý đăng nhập, đăng ký và quản lý tài khoản.

#### Customer Auth

-   **`LoginBox`**: Form đăng nhập với phone/password, captcha, remember me
-   **`RegisterBox`**: Form đăng ký với phone, password, referral code, captcha
-   **`RegisterConfirmBox`**: Form xác nhận đăng ký với OTP
-   **`ForgotPasswordBox`**: Form khôi phục mật khẩu với phone và captcha
-   **`ForgotConfirmBox`**: Form xác nhận reset mật khẩu với OTP

#### Store Auth

-   **`StoreLoginBox`**: Form đăng nhập dành cho cửa hàng
-   **`StoreRegisterBox`**: Form đăng ký cửa hàng
-   **`StoreForgotPasswordBox`**: Form quên mật khẩu cửa hàng

#### Shared Components

-   **`CustomInput`**: Input field tùy chỉnh với validation, error message, required field

---

### 🎨 Banner (`features/banner`)

Components hiển thị banner quảng cáo và slider.

#### Static Banners

-   **`Banner1` - `Banner16`**: Banner tĩnh cho các vị trí khác nhau
    -   V2 variants: `Banner1V2`, `Banner2V2`, `Banner3V2`, `Banner4V2`, `Banner5V2`, `Banner6V2`, `Banner7V2`, `Banner11V2`, `Banner14V2`, `Banner16V2`
    -   Cải tiến responsive và animation

#### Banner Layouts

-   **`LayoutBanners1` - `LayoutBanners8`**: Layout tổ hợp nhiều banner

#### Banner Sliders

-   **`BannerSlider`**: Slider 4 banner với animation ngang
-   **`BannerSliderV2`**: V2 variant với smooth transition
-   **`BannerSliderPagination`**: Slider với pagination dots
-   **`BannerSliderPaginationV2`**: V2 với auto-play
-   **`BannerHover`**: Banner với hover effect
-   **`BannerHoverSection`**: Section chứa banner hover
-   **`BannerHoverSectionV2`**: V2 với lazy loading

#### Special Sections

-   **`CustomerReview`**: Section đánh giá khách hàng
-   **`Advertisement1` - `Advertisement7`**: Banner quảng cáo đặc biệt

---

### 🍞 Breadcrumb (`features/breadcrumb`)

-   **`BreadcrumbBackToHome`**: Breadcrumb đơn giản với nút back to home và current page

---

### 🛒 Cart (`features/cart`)

Components quản lý giỏ hàng.

#### Cart Display

-   **`CartHeader`**: Header tổng với số lượng sản phẩm, nút xóa tất cả
-   **`CartTable`**: Bảng hiển thị sản phẩm theo store
-   **`CartTableHeader`**: Header bảng với checkbox chọn tất cả
-   **`CartTableBody`**: Body chứa danh sách CartTableItem
-   **`CartTableItem`**: Dòng sản phẩm với checkbox, hình, tên, giá, số lượng (+/-), xóa
-   **`CartTableFooter`**: Footer hiển thị tổng tiền store
-   **`CartBoxHover`**: Dropdown hover mini cart preview

#### Cart Actions

-   **`CartBoxAddress`**: Box chọn địa chỉ giao hàng
-   **`CartBoxVoucher`**: Box nhập/chọn voucher
-   **`CartBoxSummary`**: Box tổng kết: tạm tính, giảm giá, ship, tổng, nút đặt hàng

---

### 📁 Category (`features/category`)

Components danh mục sản phẩm.

#### Vertical Menu (Sidebar)

-   **`CategoryMenu`**: Menu dọc bên trái với async data fetching
-   **`CategoryMenuItem`**: Item menu với image, name, link

#### Horizontal Menu (Header)

-   **`CategoryMenuHorizontal`**: Container horizontal dropdown
-   **`HorizontalCategoryButton`**: Nút trigger "All Categories"
-   **`HorizontalCategoryDropdown`**: Dropdown container với title và close
-   **`HorizontalCategoryList`**: Render tất cả horizontal items
-   **`HorizontalCategoryItem`**: Item với icon, name, subcategories hover

#### Category Search & Display

-   **`SearchByCategory`**: Section tìm kiếm với filter và grid
-   **`SearchByCategory.client`**: Client logic cho filtering
-   **`SearchByCategoryV2`**: V2 với CustomSectionV2
-   **`SearchByCategoryV2.client`**: Client component V2
-   **`SearchByCategoryHasAction`**: Variant có action buttons
-   **`SearchByCategoryHasActionV2`**: V2 với Swiper navigation
-   **`SearchByCategoryHoverV2`**: Category hover section V2
-   **`SearchByCategoryHoverV2.client`**: Client logic
-   **`SearchByCategoryHoverV2Item`**: Item trong hover section
-   **`SearchCategoryItem`**: Item trong search results

#### Other Category Components

-   **`CategoryItemHasAction`**: Category item với action buttons
-   **`SliderCategory`**: Category slider
-   **`FloatCategory`**: Floating category selector
-   **`BookCategory`**: Category dành cho sách

---

### 📊 Dashboard (`features/dashboard`)

-   **`DashboardItem`**: Card trong dashboard với icon, title, số liệu thống kê

---

### 🦶 Footer (`features/footer`)

Components footer cho trang web.

-   **`Footer`**: Footer cơ bản với links, info
-   **`FooterV2`**: V2 với layout cải tiến
-   **`FooterWithEmail`**: Footer có newsletter subscription
-   **`FooterHasServices`**: Footer với service icons
-   **`SubFooter`**: Sub-footer với copyright, payment methods
-   **`MiniFooter`**: Compact footer

---

### 🎯 Header (`features/header`)

Components header và navigation.

#### Header Variants

-   **`Header`**: Header cơ bản
-   **`HeaderV2` - `HeaderV8`**: Các variant header khác nhau
-   **`HeaderTop`**: Top bar với contact, language, currency
-   **`HeaderGradient`**: Header có gradient background
-   **`HeaderStore`**: Header dành cho store pages
-   **`HeaderSearchMain`**: Header tập trung vào search

#### Navigation

-   **`NavTop`**: Navigation top bar
-   **`NavTopCategoryDropdown`**: Dropdown danh mục
-   **`NavTopCategoryItem`**: Item trong category dropdown
-   **`NavTopCategoryItemSubList`**: Sub-menu items

#### Vertical Navigation

-   **`VerticalNavigation`**: Menu dọc
-   **`VerticalNavigationItem`**: Item trong vertical menu

#### Header Components

-   **`Logo`**: Logo component
-   **`HeaderNavLeft`**: Navigation bên trái
-   **`SearchNoButton`**: Search box không có button

#### Location

-   **`LocationSearchBox`**: Search box chọn địa điểm
-   **`LocationSearchBoxV2`**: V2 với autocomplete

#### Right Side Components

-   **`RightSideMenu`**: Menu bên phải
-   **`RightSideNavTop`**: Nav top bên phải
-   **`RightSideUser`**: User dropdown
-   **`RightSideSupport`**: Support icon
-   **`RightSideWishListButton`**: Wishlist button
-   **`RightSideCartHoverButton`**: Cart hover button

#### Dropdown Components

-   **`DropdownCol`**: Dropdown 1 column
-   **`DropdownColMega`**: Dropdown mega menu 1 col
-   **`Dropdown4ColMega`**: Dropdown mega 4 columns
-   **`DropdownItem`**: Dropdown menu item
-   **`DropdownMegaItem`**: Mega menu item
-   **`DropdownSubmenu`**: Submenu trong dropdown

---

### ❓ Help (`features/help`)

-   **`HelpCard`**: Card hỗ trợ với icon, title, description
-   **`FaqAccordionItem`**: Accordion item cho FAQ
-   **`SearchDropdown`**: Dropdown tìm kiếm help

---

### 🖼️ Image (`features/image`)

Ảnh minh họa cho auth pages.

-   **`LoginImg`**: Ảnh trang login
-   **`RegisterImg`**: Ảnh trang đăng ký
-   **`ForgotPasswordImg`**: Ảnh quên mật khẩu
-   **`StoreLoginImg`**: Ảnh login cửa hàng
-   **`StoreRegisterImg`**: Ảnh đăng ký cửa hàng
-   **`StoreForgotPasswordImg`**: Ảnh quên mật khẩu cửa hàng

---

### 📱 Mobile (`features/mobile`)

Components dành cho mobile UI.

-   **`Menu`**: Mobile menu

#### Mobile Navigation

-   **`HeaderNavMobile`**: Navigation cho mobile
-   **`HeaderNavMiddleMobile`**: Middle navigation mobile

---

### 🔔 Modal (`features/modal`)

Components modal dialogs.

-   **`Modal`**: Base modal component
-   **`ModalLogin`**: Modal đăng nhập
-   **`ModalConfirmDelete`**: Modal xác nhận xóa
-   **`ModalChangePassword`**: Modal đổi mật khẩu
-   **`ModalUpdateProfile`**: Modal cập nhật profile
-   **`ModalAddReview`**: Modal thêm đánh giá
-   **`ModalSaveAddress`**: Modal lưu địa chỉ
-   **`ModalChooseAddress`**: Modal chọn địa chỉ
-   **`ModalChooseVoucher`**: Modal chọn voucher

#### Location Modal

-   **`ModalLocationSearchBox`**: Modal search location
-   **`ModalLocationSearchBoxItem`**: Item trong location search

#### Store Modal

-   **`ModalStore`**: Modal danh sách cửa hàng
-   **`ModalStoreItem`**: Item cửa hàng trong modal

#### Deal Modal

-   **`ModalDealToday`**: Modal deal hôm nay
-   **`ModalDealTodayItem`**: Item trong deal modal

---

### 📰 News (`features/news`)

Components tin tức và blog.

-   **`NewsBlogSection`**: Section blog posts
-   **`NewsBlogSection.client`**: Client logic
-   **`NewsBlogSectionV2`**: V2 với grid layout
-   **`NewsBlogItem`**: Card blog item
-   **`NewsItemHasAuthor`**: News item với thông tin tác giả
-   **`NewItemHorizontal`**: Card tin tức ngang

#### Featured News

-   **`FeaturedNewsBlogSectionV2`**: Featured blog section V2
-   **`FeaturedNewsBlogSectionV2.client`**: Client component
-   **`NewsHasAuthorSection`**: Section news có author
-   **`NewsHasAuthorSectionV2`**: V2 variant

---

### 🔔 Notification (`features/notification`)

Components thông báo.

-   **`NotificationItem`**: Card thông báo với icon, tiêu đề, nội dung, thời gian
-   **`NotificationHoverSection`**: Dropdown hover với 3 tab (Tất cả/Cá nhân/Khuyến mãi)
-   **`NotificationHoverItem`**: Item trong dropdown
-   **`TimerNotification`**: Toast notification tự động hiện/ẩn
-   **`TimerNotifications`**: Manager cho multiple toast notifications

---

### 🛍️ Product (`features/product`)

Components hiển thị và quản lý sản phẩm (lớn nhất trong hệ thống).

#### Product Components (`product/components`)

-   **`BoxPrice`**: Hiển thị giá (giá gốc + giá giảm với %)
-   **`BoxOption`**: Chọn option (size, màu...)
-   **`Box2Option`**: 2 action buttons
-   **`Box3Option`**: 3 action buttons (xem nhanh, so sánh, wishlist)
-   **`Box4Option`**: 4 action buttons
-   **`CustomRating`**: Rating sao và số lượng đánh giá
-   **`ProductInfo`**: Thông tin chi tiết, giá, số lượng, nút mua
-   **`SlickSliderImages`**: Slider ảnh với zoom 2x, magnifier, gallery thumbnails
-   **`SlickSliderImagesVIP`**: VIP slider variant với effects cao cấp
-   **`Sticky`**: Sticky product info khi scroll
-   **`VerticalProductButtonAdd`**: Nút thêm giỏ hàng V1
-   **`VerticalProductButtonAddV2`**: V2 với animation cải tiến
-   **`VerticalProductButtonAddV3`**: V3 với cart state management đầy đủ

#### Product Items (`product/item`)

##### V1 Items (Basic)

-   **`VerticalProduct`**: Card dọc cơ bản
-   **`HorizontalProduct`**: Card ngang cơ bản
-   **`ListItem`**: Card dạng list view

##### V2 Items (Enhanced UI)

-   **`VerticalProductHover`**: Card dọc với hover effect
-   **`VerticalProductHoverV2`**: V2 variant với animation mượt hơn
-   **`HorizontalProductNoAction`**: Card ngang tối giản
-   **`HorizontalProductBox4Action`**: Card ngang với 4 actions
-   **`SimpleVerticalProductHover`**: Simplified vertical với hover
-   **`SimpleDealHoverItem`**: Deal item với hover

##### V3 Items (Latest - URL State)

-   **`VerticalProductHoverV3`**: V3 với URL state support
-   **`VerticalProduct2Actions`**: Card với 2 action buttons
-   **`BookItem`**: Card sách với layout đặc biệt
-   **`DigitalProduct`**: Card sản phẩm digital
-   **`DealHasCartButtonItem`**: Deal item với cart button

#### Product Sections (`product/section`)

##### V1 Sections

-   **`VerticalNItems`**: Section N items vertical
-   **`VerticalNItems.client`**: Client logic
-   **`HorizontalItemSection`**: Section horizontal items
-   **`HorizontalItemSection.client`**: Client component
-   **`HorizontalItemNoActionSection`**: Horizontal không action
-   **`HorizontalItemNoActionSection.client`**: Client logic
-   **`HorizontalItemNoActionSuperSection`**: Super section variant
-   **`DealSection`**: Section deal
-   **`DealSection.client`**: Client component

##### V2 Sections (Server/Client Split)

-   **`VerticalNItemV2`**: V2 với server component
-   **`VerticalNItemV2.client`**: Client logic
-   **`HorizontalNItemsSectionV2`**: Horizontal N items V2
-   **`HorizontalNItemsSectionV2.client`**: Client component
-   **`HorizontalNItems2ActionsSection`**: 2 actions variant
-   **`HorizontalNItems2ActionsSection.client`**: Client logic
-   **`HorizontalNItems4ActionsSection`**: 4 actions variant
-   **`HorizontalNItems4ActionsSection.client`**: Client logic
-   **`VerticalProductHoverSectionV2`**: Vertical hover section
-   **`VerticalProductHoverSectionV2.client`**: Client component
-   **`VerticalBookProductHoverSectionV2`**: Book section V2
-   **`VerticalBookProductHoverSectionV2.client`**: Client logic
-   **`SimpleVerticalProductHoverSectionV2`**: Simplified vertical V2
-   **`SimpleVerticalProductHoverSectionV2.client`**: Client component
-   **`SimpleDealHoverV2`**: Simple deal hover V2
-   **`SimpleDealHoverV2.client`**: Client logic
-   **`DealHasCartButtonSectionV2`**: Deal với cart button
-   **`DealHasCartButtonSectionV2.client`**: Client component
-   **`RelatedProductSectionV2`**: Sản phẩm liên quan V2

##### V3 Sections (URL State + SEO)

-   **`VerticalProductHoverSectionV3`**: V3 với URL filtering
-   **`VerticalProductHoverSectionV3.client`**: Client logic
-   **`Vertical3ActionSectionV3`**: 3 actions với URL state
-   **`Vertical3ActionSectionV3.client`**: Client component
-   **`VerticalDigitalSectionV3`**: Digital products V3
-   **`VerticalDigitalSectionV3.client`**: Client logic
-   **`AllProductsVertical2Action2ItemV3`**: All products với 2 actions
-   **`AllProductsVertical2Action2ItemV3.client`**: Client component

##### Other Sections

-   **`VerticalProductWishList`**: Wishlist grid
-   **`VerticalNItemsFlashsale`**: Flash sale section

#### Product Filter (`product/filter`)

-   **`FilterBox`**: Container chứa tất cả filter options
-   **`CategoryFilterItem`**: Filter theo category với radio
-   **`FilterPriceRangeItem`**: Filter theo khoảng giá với slider
-   **`FilterRatingItem`**: Filter theo rating stars
-   **`FilterSelectedItem`**: Hiển thị filter đã chọn với nút xóa

#### Product Tab (`product/tab`)

-   **`TabWrapper`**: Wrapper container cho tabs
-   **`ReviewTab`**: Tab đánh giá sản phẩm
-   **`ProductDescriptionTab`**: Tab mô tả chi tiết
-   **`ProductInfoDetailTab`**: Tab thông tin kỹ thuật

---

### 👤 Profile (`features/profile`)

-   **`AddressItem`**: Card địa chỉ với tên, phone, địa chỉ đầy đủ, nút sửa/xóa/đặt mặc định

---

### 🔌 Provider (`features/provider`)

Context providers cho global state.

-   **`AuthProvider`**: Provider quản lý authentication state
-   **`ConfigProvider`**: Provider quản lý config settings

---

### 🧾 Purchase (`features/purchase`)

Components quản lý quy trình mua hàng từ checkout đến theo dõi đơn hàng.

#### Purchase Table (Main)

-   **`PurchaseTable`**: Container chính hiển thị đơn hàng với ServiceBox
-   **`PurchaseTableHeader`**: Header với thông tin cửa hàng (store name, count)
-   **`PurchaseCartItem`**: Dòng sản phẩm trong bảng đơn hàng

#### Service Shipping

-   **`ServiceBox`**: (Client Component) Box chọn dịch vụ vận chuyển
    -   Fetch data với `getServiceShipping()` trong `useEffect`
    -   State: service (id, name, especial, items)
    -   Loading state với `spinner-xs` class
    -   Hiển thị danh sách `ServiceBoxItem` hoặc message đặc biệt
-   **`ServiceBoxItem`**: Radio button item cho service
    -   Props: `item: ServiceItem`
    -   Hiển thị: description, price (formatted)
    -   Input: radio với name={item.name}, class="cbserviceId"

#### Checkout

-   **`CheckoutItem`**: Item sản phẩm trong trang checkout
-   **`CheckoutSummary`**: Tổng kết giá trị đơn hàng
-   **`PaymentOption`**: Radio group chọn phương thức thanh toán
-   **`PaymentMethod`**: Hiển thị phương thức thanh toán đã chọn
-   **`DeliveryOption`**: Chọn phương thức giao hàng
-   **`SelectableAddressBox`**: Card địa chỉ có radio button
-   **`SelectableAddressBoxGroup`**: Group các SelectableAddressBox

#### Success Page

-   **`SuccessCheckmark`**: Animated checkmark icon sau khi đặt hàng thành công
-   **`SuccessHeader`**: Header hiển thị order info và confirmation
-   **`OrderItem`**: Card sản phẩm trong order summary
-   **`OrderTable`**: Bảng chi tiết các sản phẩm đã đặt
-   **`PriceDetails`**: Chi tiết giá: subtotal, shipping, discount, total
-   **`ShippingAddress`**: Card địa chỉ giao hàng

#### Tracking (`tracking/`)

-   **`TrackingProgress`**: Timeline hiển thị trạng thái đơn hàng (stepper)
-   **`TrackingHistory`**: Lịch sử các bước tracking (đã đặt, đang giao, đã nhận...)
-   **`OrderDetailsCard`**: Card thông tin tổng quan đơn hàng
-   **`OrderDetails`**: Chi tiết đơn hàng đầy đủ (products, price, address)

---

### ⭐ Review (`features/review`)

Components đánh giá sản phẩm và cửa hàng.

-   **`ReviewBox`**: Tổng quan đánh giá với rating trung bình, phân bố sao, filter
-   **`ReviewItem`**: Card đánh giá với avatar, rating, nội dung, ảnh đính kèm, reply
-   **`ReviewPeople`**: Danh sách các ReviewItem
-   **`RatingList`**: Phân bố rating (5 sao: x%, 4 sao: y%...) với progress bars
-   **`ProductReview`**: Card sản phẩm chờ đánh giá
-   **`StoreReview`**: Card cửa hàng chờ đánh giá

---

### 📂 Sidebar (`features/sidebar`)

Components sidebar navigation.

-   **`DashboardLeftSidebar`**: Sidebar cho dashboard
-   **`DashboardLeftSidebarItem`**: Item trong sidebar với icon, label, link
-   **`SidebarCategories`**: Sidebar hiển thị categories

---

### 🏪 Store (`features/store`)

Components liên quan đến cửa hàng.

#### Store Display

-   **`StoreBox`**: Card cửa hàng với logo, tên, rating, nút theo dõi
-   **`StoreInfo`**: Thông tin chi tiết: banner, logo, tên, rating, địa chỉ, stats
-   **`StoreMenu`**: Menu navigation trong trang cửa hàng
-   **`SearchStore`**: Tìm kiếm cửa hàng
-   **`CircleLogo`**: Logo cửa hàng dạng tròn
-   **`SellerItem`**: Card người bán

#### Store Ads

-   **`StoreAds`**: Section quảng cáo cửa hàng
-   **`StoreAds.client`**: Client logic cho ads
-   **`StoreAdItem`**: Item quảng cáo cửa hàng

#### Store Tabs (`store/tab`)

##### V1 Tabs

-   **`HomeTab`**: Tab trang chủ cửa hàng
-   **`ProductTab`**: Tab danh sách sản phẩm
-   **`FlashsaleTab`**: Tab flash sale
-   **`PromoTab`**: Tab khuyến mãi
-   **`NewsTab`**: Tab tin tức cửa hàng
-   **`ReviewTab`**: Tab đánh giá cửa hàng
-   **`ContactTab`**: Tab liên hệ cửa hàng

##### V2 Tabs

-   **`ProductTabV2`**: V2 với SortBox và Pagination
-   **`FlashsaleTabV2`**: V2 với time slots
-   **`PromoTabV2`**: V2 với Swiper slider
-   **`NewsTabV2`**: V2 với grid layout
-   **`ReviewTabV2`**: V2 với SectionHeaderV2

---

### 🎟️ Voucher (`features/voucher`)

Components quản lý voucher và khuyến mãi.

-   **`VoucherItem`**: Card voucher với discount info, expiry, claim button
-   **`ModalVoucherItem`**: Item voucher trong modal chọn voucher
-   **`PromotionItem`**: Card khuyến mãi
-   **`ButtonGetAllModalVoucher`**: Nút "Lấy tất cả voucher"
-   **`BankSection`**: Section khuyến mãi ngân hàng
-   **`BankSection.client`**: Client logic cho bank section

---

## 🎨 UI Components

Components UI tái sử dụng.

### Core UI

-   **`BoxSpinner`**: Loading spinner trong box
-   **`LoadingSpinner`**: Loading spinner standalone
-   **`Pagination`**: Component phân trang
-   **`OnlyLeftLine`**: Decorative left line
-   **`ContactMail`**: Email contact component
-   **`CountdownTimer`**: Đếm ngược thời gian
-   **`TimingBox`**: Box hiển thị thời gian
-   **`TimingBoxDHMS`**: Timer với Days, Hours, Minutes, Seconds

### Form Controls

-   **`CustomFormCheck`**: Custom checkbox/radio
-   **`CustomDropdown`**: Dropdown menu tùy chỉnh
-   **`CustomSelect`**: Select dropdown tùy chỉnh
-   **`PriceRangeFilter`**: Slider chọn khoảng giá

### Section Components

-   **`CustomSection`**: Generic section component V1
-   **`CustomSectionV2<T>`**: Generic section V2 với Swiper
-   **`CustomSectionV3<T>`**: Generic section V3 với URL state + tabs
-   **`CustomSection3ItemsVerticalV2`**: Section 3 items vertical
-   **`CustomSection3ItemsVerticalV2.client`**: Client logic
-   **`ServiceSection`**: Section hiển thị services

### Section Headers

-   **`SectionHeader`**: Header cho section V1
-   **`SectionHeaderV2`**: V2 với navigation arrows
-   **`SectionHeaderV3`**: V3 với tab support

### Image Components

-   **`ImageError`**: Component xử lý lỗi ảnh
-   **`ImageError.client`**: Client logic cho image error

### Button Components (`ui/button`)

#### Cart & Actions

-   **`CartButton`**: Nút giỏ hàng với badge số lượng
-   **`CartButtonV2`**: V2 với animation
-   **`WishListButton`**: Nút wishlist
-   **`TrashIconButton`**: Nút xóa với icon thùng rác

#### Grid & Sort

-   **`GridOption`**: Chọn layout grid/list
-   **`SortBox`**: Dropdown sắp xếp sản phẩm

#### Variant Selectors

-   **`VariantCircleOptions`**: Chọn variant dạng circle (màu sắc)
-   **`VariantRectangleOptions`**: Chọn variant dạng hình chữ nhật (size)
-   **`VariantRadioOptions`**: Chọn variant dạng radio
-   **`VariantSelectOptions`**: Chọn variant dạng dropdown

#### Dropdown Buttons

-   **`DropdownSelectButtonCurrencies`**: Dropdown chọn tiền tệ
-   **`DropdownSelectButtonLangs`**: Dropdown chọn ngôn ngữ
-   **`DropdownSelectButtonItem`**: Item trong dropdown select
-   **`LanguageSwitcher`**: Component chuyển đổi ngôn ngữ

### Badge Components (`ui/badge`)

-   **`NewBadge`**: Badge "New"
-   **`DangerBadge`**: Badge đỏ (nguy hiểm/sold out)
-   **`WarningBadge`**: Badge vàng (cảnh báo)

### Icon Components (`ui/icons`)

-   **`User`**: Icon user
-   **`Store`**: Icon store
-   **`Shop`**: Icon shop
-   **`Flash`**: Icon flash sale
-   **`LordIcon`**: Wrapper cho animated lordicon

---

## 🏗️ Layout Components

Components layout cho các section đặc biệt.

### Store Account Layout (`layout/storeAccount`)

-   **`HeaderStoreAuth`**: Header cho trang auth cửa hàng
-   **`NavTopStore`**: Navigation top cho store
-   **`StoreAuthHover`**: Hover menu cho store auth

---

## 🔄 Component Versions

### CustomSection Evolution

#### V1 - Basic Section

```typescript
<CustomSection
    items={products}
    renderItem={(product) => <ProductCard product={product} />}
/>
```

**Features**: Basic grid layout, no Swiper

#### V2 - Swiper Carousel

```typescript
<CustomSectionV2<ProductT>
    items={products}
    renderItem={(product) => <ProductCard product={product} />}
    breakpoints={{
        320: { slidesPerView: 2 },
        768: { slidesPerView: 4 },
        1280: { slidesPerView: 6 },
    }}
    hasNavigation={true}
/>
```

**Features**:

-   Swiper carousel
-   Responsive breakpoints
-   Navigation arrows
-   Generic type support

#### V3 - URL State + Tabs

```typescript
<CustomSectionV3<ProductT>
    items={products}
    categories={categories}
    getCategorySlug={(item) => item.categorySlug}
    renderItem={(product) => <ProductCard product={product} />}
/>
```

**Features**:

-   URL query param filtering (`?tab=category`)
-   Category tabs
-   SEO friendly
-   Server/client split

**URL Behavior**:

-   No param: Show all
-   `?tab=all`: Show all
-   `?tab=vegetables`: Filter by category

---

## 🎯 Best Practices

### Component Selection Guide

| Requirement               | Recommended Version  |
| ------------------------- | -------------------- |
| Basic functionality       | V1                   |
| Modern UX, animations     | V2                   |
| SEO + Category filtering  | V3                   |
| Server-side data          | V2 / V3              |
| URL state persistence     | V3                   |
| High performance          | V2 / V3              |
| Client-side interactivity | .client.tsx variants |

### Architecture Patterns

#### Server/Client Split (V2/V3)

```typescript
// ComponentName.tsx (Server)
async function Component() {
    const data = await fetchData();
    return <ComponentClient data={data} />;
}

// ComponentName.client.tsx (Client)
("use client");
function ComponentClient({ data }) {
    const [state, setState] = useState();
    // Client logic...
}
```

#### Generic Section Component

```typescript
<CustomSectionV2<ProductT>
    items={products}
    renderItem={(product) => <ProductCard product={product} />}
    breakpoints={{
        320: { slidesPerView: 2 },
        768: { slidesPerView: 4 },
        1280: { slidesPerView: 6 },
    }}
/>
```

### Performance Tips

-   **Image Optimization**: Next.js Image với lazy loading
-   **Code Splitting**: Dynamic imports cho heavy components
-   **Memoization**: React.memo, useMemo cho filtering
-   **Virtual Scrolling**: Cho danh sách dài
-   **Server Components**: Pre-fetch data for faster initial load

### Styling Conventions

-   Utility classes (Bootstrap/Tailwind)
-   Component-specific styles in `public/styles/`
-   Inline styles cho dynamic values
-   `aspectRatio: "x/100"` cho ratio classes
-   Responsive classes: `col-xxl-X col-xl-X col-md-X col-X`

### State Management

-   **Local**: useState, useReducer
-   **Global**: Context API (AuthProvider, ConfigProvider)
-   **Form**: Controlled components
-   **URL**: useSearchParams + useRouter (V3)
-   **Server**: async/await in server components

### Common Props Patterns

```typescript
// Product Component
{
  product: ProductT;
  index?: number;
  className?: string;
  classNameImg?: string;
}

// Section Component
{
  items: T[];
  title?: string;
  description?: string;
  hasNavigation?: boolean;
  breakpoints?: {...};
  renderItem: (item: T) => JSX.Element;
}

// Modal Component
{
  isOpen?: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  children?: React.ReactNode;
}
```

### Naming Best Practices

-   **Descriptive names**: `VerticalProductHoverV2` better than `ProductV2`
-   **Consistent suffixes**: V2, V3, .client
-   **Feature-first**: Group by feature, not by type
-   **Avoid abbreviations**: `Button` not `Btn`

---

## 📱 Responsive Design

### Breakpoint Strategy

-   **Mobile**: 320px - 767px (2 columns)
-   **Tablet**: 768px - 1023px (3-4 columns)
-   **Desktop**: 1024px+ (4-6 columns)
-   **Large Desktop**: 1280px+ (6+ columns)

### Swiper Breakpoints

```typescript
breakpoints={{
  320: { slidesPerView: 2, spaceBetween: 10 },
  640: { slidesPerView: 3, spaceBetween: 15 },
  768: { slidesPerView: 4, spaceBetween: 20 },
  1024: { slidesPerView: 5, spaceBetween: 20 },
  1280: { slidesPerView: 6, spaceBetween: 24 },
}}
```

### Mobile Considerations

-   Touch-friendly buttons (min 44px)
-   Hamburger menu for navigation
-   Bottom navigation for key actions
-   Swipeable carousels
-   Collapsible sections

---

## 📊 Component Statistics

-   **Total Components**: 357
-   **Features**: 22 categories
-   **UI Primitives**: ~40 components
-   **Version Variants**: V1, V2, V3
-   **Server/Client Split**: ~50 .client.tsx files

---

_Tài liệu Components - Cập nhật: December 21, 2025_  
_Version: 2.0.0_  
_Total Components Documented: 357_
