import { DashboardStatItemT } from "@/types/common.types";
import { DashboardLeftSidebarItemT } from "@/types/common.types";

export const dashboardLeftSidebarItems: DashboardLeftSidebarItemT[] = [
    {
        icon: "fa-regular fa-house",
        title: "Tổng quan",
        link: "/customers/",
    },
    {
        icon: "fa-regular fa-bag-shopping",
        title: "Đơn hàng của tôi",
        link: "/customers/orders",
    },
    {
        icon: "fa-regular fa-badge-percent",
        title: "Mã giảm giá",
        link: "/customers/vouchers",
    },
    {
        icon: "fa-regular fa-map-pin",
        title: "Địa chỉ giao hàng",
        link: "/customers/customerAddress",
    },
    {
        icon: "fa-regular fa-heart",
        title: "Sản phẩm yêu thích",
        link: "/customers/wishlist",
    },
    {
        icon: "fa-regular fa-star",
        title: "Đánh giá sản phẩm",
        link: "/customers/reviews",
    },
    {
        icon: "fa-regular fa-store",
        title: "Đánh giá Cửa hàng",
        link: "/customers/storeReviews",
    },
    {
        icon: "fa-regular fa-user",
        title: "Thông tin tài khoản",
        link: "/customers/profile",
    },
];

export const dashboardStats: DashboardStatItemT[] = [
    {
        icon: "/assets/eme2023/lordicon/wbtzvepm.json",
        label: "Đơn hàng",
        value: 29,
    },
    {
        icon: "/assets/eme2023/lordicon/wvqpnihn.json",
        label: "Mã giảm giá",
        value: 4,
    },
    {
        icon: "/assets/eme2023/lordicon/wbtzvepm.json",
        label: "Sản phẩm yêu thích",
        value: 2,
    },
    {
        icon: "/assets/eme2023/lordicon/wbtzvepm.json",
        label: "Sản phẩm đánh giá",
        value: 3,
    },
];
