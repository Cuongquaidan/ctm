import { ReactNode } from "react";

export type SiteConfigT = {
    // --- Chi tiết Website 1 ---
    address_1: string;
    name_1: string;
    description_1: string;
    content_1: string; // Dữ liệu HTML escaped
    keyword_1: string;
    copyright_1: string;

    // --- Chi tiết Website 2 ---
    address_2: string;
    name_2: string;
    description_2: string;
    content_2: string; // Dữ liệu HTML escaped
    keyword_2: string;
    copyright_2: string;

    // --- Cấu hình Email Sender ---
    sendmail_account: string;
    sendmail_password: string;
    sendmail_domain: string;
    sendmail_port: string;
    sendmail_contact: string;
    sendmail_ssl: "ssl" | string; // Giả định là chuỗi

    // --- Thông tin Liên hệ ---
    email: string;
    hotline: string;
    phone: string;
    fax: string;
    contact_info: string;
    contact_info_bank: string;

    // --- Mạng xã hội & Liên kết ---
    fb_link: string;
    tw_link: string;
    yt_link: string;
    ggp_link: string;
    instagram_link: string;
    tiktok_link: string;
    twitter_link: string;
    whatsapp_link: string;
    order_link: string;

    // --- Assets & Logo ---
    logo: string | null;
    elogo: string;
    logotext: string | null;
    image: string | null;
    favicon: string | null;

    // --- Cấu hình Khác ---
    container: string;
    theme_color1: string; // Hex code, ví dụ: "#f58233"
    theme_color2: string; // Hex code, ví dụ: "#ffc20e"
    appstore_link: string;
    playstore_link: string;
};

export type FixedSiteConfigT = {
    logo: string | null;
    policies: {
        title: string;
        items: InfoT[];
    };
    support: {
        title: string;
        items: InfoT[];
    };
    socials: SocialT[];
    langs: LangT[];
    currency: CurrencyT[];
};

export type ProfileT = {
    id: number;
    name: string;
    phone?: string;
    email?: string;
    avatar?: string;
};
export type SubCategoryTV0 = {
    name: string;
    link: string;
};

export type CategoryTV0 = {
    name: string;
    link: string;
    image: string;
    slug: string;
    totalItems?: number;
    children?: {
        name: string;
        link: string;
        children?: SubCategoryTV0[];
    }[];
};

export type CategoryT = {
    id: number;
    alias: string;
    name: string;
    description: string;
    level: number;
    parent_id: number;
    sort_order: number;
    layout: string | null;
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
    image: string | null;
    status: 0 | 1;
    is_deleted: 0 | 1;

    // Lịch sử thời gian
    created_at: string;
    updated_at: string;
    created_by: number;
    updated_by: number;
};

export type CartItemT = {
    id: number;
    customer_id: number;
    product_id: number;
    product_price_id: number;
    seller_id: number;
    product_seller_id: number;
    quantity: number;
    is_order: 0 | 1;
    created_at: string;
    updated_at: string;
    store_id: number;
    package_name: string;
    price: number;
    image: string | null;
    expense: number;
    total: number;
    product: ProductT;
};

export type CartItemItemT = {
    productId: number;
    quantity: number;
    productPriceId: number;
    price: number;
    name: string;
    image: string;
    unit: string;
    isChecked: boolean;
    slug: string;
};

export type CartT = {
    list: CartItemT[];
    itemTotal: number;
    stores: Record<string, StoreT>;
    voucher: VoucherT | null;
    storeVouchers: Record<string, VoucherStoreT>;
};
export type WishListItemT = {
    productId: number;
    name: string;
    image: string;
};

export type WishListT = {
    items: WishListItemT[];
    totalItems: number;
    userId: string;
    id: string;
};

export type UserT = {
    id: number;
    tier_id: number;
    point: number;
    point_used: number;
    address_id: number;
    change_username: number;
    status: number;
    is_deleted: number;

    // Các trường chuỗi (string)
    referral_code: string;
    fullname: string;
    phone: string;
    email: string; // Có vẻ là chuỗi rỗng nếu không có, nhưng kiểu là string
    avatar: string; // Có vẻ là chuỗi rỗng nếu không có, nhưng kiểu là string
    groupName: string;

    // Các trường có thể là null (optional hoặc union type)
    country_id: number | null;
    province_id: number | null;
    district_id: number | null;
    ward_id: number | null;
    address: string | null; // Nullable string
    fulladdress: string | null; // Nullable string
    gender: number | null; // Giả định là string (ví dụ: 'male', 'female') hoặc null
    birthday: string | null; // Giả định là chuỗi ngày tháng (ISO 8601) hoặc null
    username: string | null;
    password: string | null;
    facebook_id: string | null;
    google_id: string | null;
    apple_id: string | null;
    cnote: string | null; // Có thể là chuỗi ghi chú
    created_by: number | null; // Giả định là ID người dùng
    updated_by: number | null; // Giả định là ID người dùng

    // Các trường ngày tháng (string theo định dạng ISO 8601)
    created_at: string;
    updated_at: string;
};

export type DashboardStatItemT = {
    icon: string;
    label: string;
    value: number;
};

// Định nghĩa kiểu dữ liệu cho thông tin giá/biến thể của sản phẩm
export type ProductPriceT = {
    id: number;
    product_id: number;
    package_id: number;
    is_dist: 0 | 1;
    price: number;
    sold_quantity: number;
    remaining_quantity: number;
    quantity: number;
    updated_at: string;
    productName: string;
    packageName: string;
    expense: number;

    // Thông tin khuyến mãi (Promotion)
    promotion_fullname: string | null;
    promotion_type: string | null;
    discount_value: number;
    discount_type: string | null;
    product_price_id: number;
    promotion_id: number | null;
    promotion_quantity: number | null;
    start_date: string | null;
    end_date: string | null;
    start_time: string | null;
    end_time: string | null;
};

// Định nghĩa kiểu dữ liệu chính cho Sản phẩm
export type ProductT = {
    flash_type?: string;
    // Thông tin cơ bản và định danh
    id: number;
    store_id: number;
    code: string;
    alias: string;
    name: string;
    excerpt: string;
    description: string | null;
    content: string;

    // SEO (Tối ưu hóa công cụ tìm kiếm)
    meta_title: string;
    meta_description: string;
    meta_keywords: string;

    // Media & Phân loại
    image: string;
    gallery: string;
    category_ids: string;
    package_id: number;
    detail_info: string;

    // Trạng thái & Thống kê
    hot: 0 | 1;
    view: number;
    sold: number;
    status: 0 | 1;
    is_deleted: 0 | 1;
    reason_cancel: string | null;

    // Đánh giá (Review)
    review_total: number;
    review_point: number;
    review_point_1: number;
    review_point_2: number;
    review_point_3: number;
    review_point_4: number;
    review_point_5: number;

    // Lịch sử thời gian
    created_at: string;
    updated_at: string;
    created_by: number;
    updated_by: number;

    // Dữ liệu lồng nhau
    prices: ProductPriceT[];
};
export type ListProductT = ProductT[];

export type BlogItemT = {
    id: number;
    image: string;
    title: string;
    date: string;
    link: string;
    author: string;
    createdAt: Date;
};
export type PostItemT = {
    // Thông tin cơ bản
    id: number;
    store_id: number;
    category_ids: string; // Thực tế là một chuỗi JSON của mảng ID, ví dụ: "[\"3\"]"
    alias: string;
    name: string;
    description: string;
    content: string | null;
    image: string;
    file: string | null;
    author: string | null;

    // SEO Meta
    meta_title: string;
    meta_keywords: string;
    meta_description: string;

    // Trạng thái và thống kê
    status: 0 | 1; // Giả định 0/1 là trạng thái
    view: number;
    hot: 0 | 1; // Giả định 0/1 là cờ hot

    // Dấu thời gian và người dùng
    updated_at: string; // Chuỗi ISO Date (ví dụ: "2024-09-19T08:03:42.000Z")
    created_at: string; // Chuỗi ISO Date
    created_by: number;
    updated_by: number;
    publish_at: string; // Chuỗi ISO Date
    publish_by: number;
    is_deleted: 0 | 1; // Giả định 0/1 là cờ xóa mềm
};
export type ModalStoreItemI = {
    link: string;
    image: string;
    alt: string;
    title: string;
    label?: string;
};

export type DashboardLeftSidebarItemT = {
    icon: string;
    title: string;
    link: string;
};

/**
 * Type cuối cùng cho một voucher, là sự kết hợp của các loại trên.
 * TypeScript sẽ tự động nhận diện đúng các thuộc tính dựa trên `discountType`.
 */
export interface VoucherT {
    id: number;
    name: string;
    description: string | null;
    image: string | null;
    code: string;
    tier_id: number;
    quantity: number;
    quantity_used: number;
    customer_number: number;
    verified?: boolean;
    voucher_type: number;
    discount_type: "P" | "S" | "F";
    discount: string;
    min_cost: number;
    cost_limit: number;
    date_type: number;
    start_date: string;
    end_date: string;
    start_time: string;
    end_time: string;
    day_of_week: string;
    status: number;
    used: number;
    created_at: string;
    updated_at: string;
    created_by: number;
    updated_by: number;
    is_deleted: number;
}
export interface VoucherCustomerT {
    id: number;
    name: string;
    description: string | null;
    image: string | null;
    code: string;
    tier_id: number;

    verified?: boolean;
    quantity: number;
    quantity_used: number;
    customer_number: number;
    voucher_type: number;
    discount_type: "P" | "S" | "F" | string;
    discount: string;
    min_cost: number;
    cost_limit: number;
    date_type: number;
    start_date: string;
    end_date: string;
    start_time: string;
    end_time: string;
    day_of_week: string;
    status: number;
    used: number;
    created_at: string;
    updated_at: string;
    created_by: number;
    updated_by: number;
    is_deleted: number;
}
export interface VoucherStoreT {
    id: number;
    store_id: number;
    name: string;
    description: string | null;
    image: string | null;
    code: string;
    tier_id: number;
    quantity: number; // Tổng số lượng voucher được phát hành
    quantity_used: number; // Số lượng voucher đã được sử dụng
    customer_number: number; // Số lượng khách hàng tối đa có thể sử dụng
    voucher_type: number;
    discount_type: "P" | "S" | "F";

    verified?: boolean;
    discount: string;
    min_cost: number;
    cost_limit: number;
    date_type: number;
    start_date: string; // Ngày bắt đầu hiệu lực (ISO 8601 string)
    end_date: string; // Ngày kết thúc hiệu lực (ISO 8601 string)
    start_time: string; // Ví dụ: "00:00:00"
    end_time: string; // Ví dụ: "00:00:00"
    day_of_week: string; // Chuỗi JSON thể hiện các ngày trong tuần được áp dụng (ví dụ: "[]")
    status: number;
    used: number;
    created_at: string;
    updated_at: string;
    created_by: number;
    updated_by: number;
    is_deleted: number;
}
export enum OrderStatus {
    NEW = "NEW", // Đơn hàng mới
    COMPLETED = "COMPLETED", // Hoàn thành
    CANCELLED = "CANCELLED", // Vận chuyển hủy
}
export type Order = {
    id: number;
    name: string;
    total: number;
    status: OrderStatus;
};

export type OrderSuccessDetailT = {
    transactionId: string;
    items: OrderItemT[];
    priceDetails: {
        subtotal: number;
        saving: number;
        couponDiscount: number;
        total: number;
    };
    shippingAddress: {
        address: string;
        city: string;
        zipCode: string;
        expectedDelivery: string;
        trackingUrl?: string;
    };
    paymentMethod: {
        type: string;
        description: string;
    };
};

export type OrderItemT = {
    id: string;
    name: string;
    image: string;
    seller: string;
    quantity: string;
    price: number;
    qty: number;
    total: number;
};

export enum TrackingStatusEnum {
    PENDING = "PENDING",
    PROCESSING = "PROCESSING",
    IN_PRODUCTION = "IN_PRODUCTION",
    SHIPPED = "SHIPPED",
    DELIVERED = "DELIVERED",
}

export type TrackingTimelineT = {
    status: TrackingStatusEnum;
    label: string;
    datetime?: Date; // DateTime từ API
    location?: string;
    isCompleted: boolean;
};

export type OrderTrackingDetailT = {
    orderId: string;
    trackingCode: string;
    productImage: string;
    productName?: string;
    service: {
        name: string;
        logo: string;
    };
    packageInfo: string;
    from: string;
    destination: string;
    estimatedDelivery: Date; // DateTime từ API
    currentStatus: TrackingStatusEnum;
    timeline: TrackingTimelineT[];
    history: {
        description: string;
        datetime: Date; // DateTime từ API
        location: string;
    }[];
};

export type AddressT = {
    // id: string;
    // name: string;
    // phone: string;
    // isDefault: boolean;
    // province: string;
    // district: string;
    // ward: string;
    // detailAddress: string;
    id: number;
    name: string;
    phone: string;
    customer_id: number;
    address: string; // Có vẻ là phần chi tiết của địa chỉ (số nhà, đường)
    country_id: string; // ID của quốc gia
    province_id: string; // ID của tỉnh/thành phố
    district_id: string; // ID của quận/huyện
    ward_id: string; // ID của phường/xã
    fulladdress: string; // Chuỗi địa chỉ đầy đủ (bao gồm cả phường, quận, tỉnh, quốc gia)
    is_deleted: 0 | 1; // Sử dụng union type cho boolean-like number
    status: number; // Trạng thái của địa chỉ (có thể là 0 hoặc 1, nhưng để là number nếu có nhiều trạng thái khác)
    created_at: string; // Dùng string vì dữ liệu JSON là ISO 8601 string
    updated_at: string; // Dùng string vì dữ liệu JSON là ISO 8601 string
};
export enum ReviewTypeEnum {
    PRODUCT = "PRODUCT",
    STORE = "STORE",
}

export type ReviewT = {
    id: number;
    store_id: number;
    customer_id: number;
    order_store_id: number;
    order_id: number;
    order_item_id: number;
    product_id: number;
    product_price_id: number;
    fullname: string;
    avatar: string;
    point: number;
    des: string;
    images: string;
    status: number;
    created_at: string;
    updated_at: string;
    created_by: number | null;
    updated_by: number | null;
};
// export type StoreT = {
//     id: string;
//     name: string;
//     address: string;
//     image: string;
//     gallery: string[];
//     rating: number;
//     slug: string;
//     numberOfRatings: number;
// };
export type StoreT = {
    id: number;
    alias: string;
    name: string;
    register_id: string | null; // ID đăng ký kinh doanh/thuế
    ctm_discount: number; // Phần trăm chiết khấu cho khách hàng (Customer Discount)
    des: string | null; // Mô tả ngắn
    activity: string; // Lĩnh vực hoạt động (ví dụ: "Hải sản")

    // Thông tin liên hệ
    phone: string;
    telephone: string;
    email: string;

    // Thông tin địa chỉ
    country_id: string; // ID quốc gia (ví dụ: "240")
    province_id: string; // ID tỉnh/thành phố (ví dụ: "79")
    district_id: string; // ID quận/huyện
    ward_id: string; // ID phường/xã
    address: string; // Địa chỉ chi tiết (ví dụ: "29-31 đinh bộ lĩnh")
    fulladdress: string; // Địa chỉ đầy đủ, bao gồm cả cấp hành chính
    lat: number; // Vĩ độ (Latitude)
    lng: number; // Kinh độ (Longitude)
    image: string | null; // Đường dẫn hình ảnh cửa hàng

    items?: CartItemT[];

    // Đánh giá (Review)
    review_total: number; // Tổng số lượt đánh giá
    review_point: number; // Điểm trung bình
    review_point_1: number; // Số điểm 1 sao
    review_point_2: number; // Số điểm 2 sao
    review_point_3: number; // Số điểm 3 sao
    review_point_4: number; // Số điểm 4 sao
    review_point_5: number; // Số điểm 5 sao

    // Trạng thái & Lịch sử
    status: 0 | 1; // Trạng thái hoạt động (1 = Đang hoạt động)
    is_deleted: 0 | 1; // Cờ xóa mềm (0 = Chưa xóa)
    created_at: string; // Chuỗi ISO Date (thời gian tạo)
    updated_at: string; // Chuỗi ISO Date (thời gian cập nhật)
    created_by: number; // ID người tạo
    updated_by: number; // ID người cập nhật
};

export enum NotificationTypeEnum {
    PERSONAL = "PERSONAL",
    PROMOTION = "PROMOTION",
}

export type NotificationT = {
    id: string;
    title: string;
    message: string;
    isRead: boolean;
    createdAt: Date;
    type: NotificationTypeEnum;
};

export type ReviewReplyT = {
    id: number;
    // Liên kết với bài đánh giá gốc
    product_review_id: number;
    // Nội dung và trạng thái
    content: string;
    status: number;
    // Thời gian
    created_at: string; // Chuỗi thời gian (ISO 8601 string)
    updated_at: string; // Chuỗi thời gian (ISO 8601 string)
    // Thông tin người thực hiện
    created_by: number; // ID của người tạo phản hồi
    updated_by: number; // ID của người cập nhật phản hồi
};

export type ServiceItem = {
    id: string;
    name: string;
    description: string;
    price: number;
};

export type LocationT = {
    id: number;
    name: string;
    minPrice: number;
};
export type DropdownSelectButtonItemT = {
    label: string;
    value: string;
    image?: string;
};

export type LangT = DropdownSelectButtonItemT;
export type CurrencyT = DropdownSelectButtonItemT;

export type InfoT = {
    title: string;
    link: string;
};

export type MenuItemT = {
    id: number;
    store_id: number;
    name: string;
    icon: string;
    alias?: string;
    sort_order: number;
    is_mega: 0 | 1;
    is_icon: 0 | 1;
    type: number;
    param?: string;
    parent_id: number;
    menu_type: number;
    status: 0 | 1;
    created_at: string;
    updated_at: string;
    created_by: number;
    updated_by: number;
    subs?: MenuItemT[];
};

export type SocialT = {
    icon: string;
    key: string;
};
export type StoreAdT = {
    id: number;
    slug: string;
    imageUrl: string;
    title: string;
    subtitle: string;
    rating: number;
    numberOfRatings: number;
    name: string;
};

export type BookT = {
    id: string;
    image: string;
    category: string; // Thể loại sách
    name: string; // Tên/Tiêu đề sách
    author: string;
    price: number; // Giá (dạng chuỗi, ví dụ: '$55.00')
    isBestSeller?: boolean;
};
export type BookCategoryItemT = {
    id: string;
    imageSrc: string; // Đường dẫn đến ảnh danh mục
    altText: string; // Mô tả ảnh (cho thuộc tính alt)
    linkHref: string; // Đường dẫn khi nhấp vào danh mục (ví dụ: "shop-left-sidebar.html")
};

export type BannerT = {
    id: number;
    name: string;
    description: string;
    button_link: string;
    button_name: string;
    sale_name: string;
    sale_value: string;
    image: string;
    sort_order: number;
    status: number;
    is_deleted: number;
    created_at: string;
    updated_at: string;
    created_by: number;
    updated_by: number;
};

export type AdvertisementT = {
    id: number;
    name: string;
    description: string;
    image: string;
    button_link: string;
    button_name: string;
    sale_name: string;
    sale_value: string;
    scode: string;
    view_count: number;
    click_count: number;
    status: 0 | 1;
    created_at: string;
    updated_at: string;
    created_by: number;
    updated_by: number;
};
export type FlashsaleItemT = {
    flash_type: string; // Ví dụ: "00:00"
    is_dist: 0 | 1;
    price: number;
    sold_quantity: number;
    remaining_quantity: number;
    quantity: number;
    expense: number;
    discount_value: number;
    discount_type: string | null;
    product_price_id: number;

    // Tên và ID Gói/Sản phẩm
    id: number; // ID sản phẩm
    product_id: number; // ID sản phẩm (lặp lại id)
    name: string;
    packageName: string;
    package_id: number;
    productName: string | null;

    // Dữ liệu Sản phẩm cơ bản
    store_id: number;
    code: string;
    alias: string;
    category_ids: string | null; // Có thể là chuỗi JSON hoặc null
    excerpt: string | null;
    description: string | null;
    content: string; // Có thể chứa HTML escape characters
    image: string;
    gallery: string; // Chuỗi JSON của mảng ảnh
    detail_info: string; // Chuỗi JSON của mảng chi tiết

    // SEO
    meta_title: string | null;
    meta_description: string | null;
    meta_keywords: string | null;

    // Trạng thái & Thống kê
    hot: 0 | 1;
    view: number;
    sold: number; // Số lượng bán tổng
    status: 0 | 1;
    is_deleted: 0 | 1;
    reason_cancel: string | null;

    // Đánh giá (Review)
    review_total: number;
    review_point: number;
    review_point_1: number;
    review_point_2: number;
    review_point_3: number;
    review_point_4: number;
    review_point_5: number;

    // Lịch sử thời gian & Người tạo
    created_at: string;
    updated_at: string;
    created_by: number;
    updated_by: number;

    // Thông tin khuyến mãi chi tiết (có vẻ lặp lại với các trường cấp cao)
    promotion_fullname: string | null;
    promotion_type: string | null;
    promotion_id: number | null;
    promotion_quantity: number | null;
    start_date: string | null;
    end_date: string | null;
    start_time: string | null;
    end_time: string | null;

    // Dữ liệu lồng nhau
    prices: ProductPriceT[];
};

export type NewsCategoryT = {
    // Các trường số nguyên (number) bắt buộc
    id: number;
    status: number;
    is_deleted: number;
    parent_id: number; // Thường là 0 nếu không có danh mục cha

    // Các trường chuỗi (string)
    alias: string; // Slug URL (ví dụ: "meo-bo-tui")
    name: string;
    description: string;
    meta_title: string;
    meta_keywords: string;
    meta_description: string;
    image: string; // Có thể là chuỗi rỗng

    // Các trường ngày tháng (string theo định dạng ISO 8601)
    created_at: string;
    updated_at: string;

    // Các trường có thể là null hoặc number/string (tùy chọn)
    layout: string | null; // Giả định là string chứa tên layout hoặc null
    created_by: number | null; // ID người tạo
    updated_by: number | null; // ID người cập nhật
};
