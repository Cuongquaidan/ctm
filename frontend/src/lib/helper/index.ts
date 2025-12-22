import { FlashsaleItemT, ProductT } from "@/types/common.types";
import {
    CURRENT,
    CURRENT_HOUR,
    FLASH_SALE_TYPES,
} from "@/lib/constants/constants";

export function chunk<T>(arr: T[], size: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

export const formatCurrency = (amount: number) => {
    if (isNaN(amount)) return "0 ₫";
    return amount.toLocaleString("vi-VN") + " ₫";
};
// Format ngày giờ đầy đủ
export const formatDate = (date: Date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}/${month}/${year} `;
};
// Format ngày giờ đầy đủ
export const formatDateTime = (date: Date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    const hours = String(d.getHours()).padStart(2, "0");
    const minutes = String(d.getMinutes()).padStart(2, "0");
    const seconds = String(d.getSeconds()).padStart(2, "0");
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};
// Format datetime to Vietnamese format with time
export const formatVietnameseDateTime = (date: Date | string | undefined) => {
    if (!date) return "Chưa cập nhật";
    const d = new Date(date);

    // Tên các thứ trong tuần
    const daysOfWeek = [
        "Chủ nhật",
        "Thứ 2",
        "Thứ 3",
        "Thứ 4",
        "Thứ 5",
        "Thứ 6",
        "Thứ 7",
    ];
    const dayOfWeek = daysOfWeek[d.getDay()];

    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1);
    const year = d.getFullYear();
    const hours = String(d.getHours()).padStart(2, "0");
    const minutes = String(d.getMinutes()).padStart(2, "0");

    return `${dayOfWeek}, ${day}/${month}/${year}, ${hours}:${minutes}`;
};

export const checkIsWithinTimeRange = (
    startDate: Date,
    endDate: Date
): boolean => {
    const now = new Date();
    return now >= startDate && now <= endDate;
};

// Format date to "26 Sep 2021"
export const formatTrackingDate = (date: Date | string): string => {
    const d = new Date(date);
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const day = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    return `${day} ${month} ${year}`;
};

// Format time to "05:43 AM" or "01:21 PM"
export const formatTrackingTime = (date: Date | string): string => {
    const d = new Date(date);
    let hours = d.getHours();
    const minutes = String(d.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 giờ -> 12
    const hoursStr = String(hours).padStart(2, "0");
    return `${hoursStr}:${minutes} ${ampm}`;
};

// Format estimated delivery "7 Feb, 05:05 PM"
export const formatEstimatedDelivery = (date: Date | string): string => {
    const d = new Date(date);
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const day = d.getDate();
    const month = months[d.getMonth()];
    const time = formatTrackingTime(d);
    return `${day} ${month}, ${time}`;
};

// Format datetime for order history "26 Sep 2021, 12:00 AM"
export const formatOrderHistoryDateTime = (
    date: Date | string
): { date: string; time: string } => {
    return {
        date: formatTrackingDate(date),
        time: formatTrackingTime(date),
    };
};
export const transformFlashsaleItemToSingleProduct = (
    flashsaleItem: FlashsaleItemT
): ProductT => {
    return {
        flash_type: flashsaleItem.flash_type || "",
        id: flashsaleItem.id || flashsaleItem.id,
        name: flashsaleItem.name || "",

        prices: flashsaleItem.prices,
        store_id: flashsaleItem.store_id || 0,
        code: flashsaleItem.code || "",
        alias: flashsaleItem.alias || "",
        excerpt: flashsaleItem.excerpt || "",
        description: flashsaleItem.description || null,
        content: flashsaleItem.content || "",

        meta_title: flashsaleItem.meta_title || flashsaleItem.packageName || "",
        meta_description: flashsaleItem.meta_description || "",
        meta_keywords: flashsaleItem.meta_keywords || "",

        image: flashsaleItem.image || "",
        gallery: flashsaleItem.gallery || "[]",
        category_ids: flashsaleItem.category_ids || "",
        package_id: flashsaleItem.package_id,
        detail_info: flashsaleItem.detail_info || "",

        hot: flashsaleItem.hot || (0 as 0 | 1),
        view: flashsaleItem.view || 0,
        sold: flashsaleItem.sold || 0,
        status: flashsaleItem.status || (1 as 0 | 1),
        is_deleted: flashsaleItem.is_deleted || (0 as 0 | 1),
        reason_cancel: flashsaleItem.reason_cancel || null,

        // Dữ liệu đánh giá (sử dụng dữ liệu gói, nếu có)
        review_total: flashsaleItem.review_total || 0,
        review_point: flashsaleItem.review_point || 0,
        review_point_1: flashsaleItem.review_point_1 || 0,
        review_point_2: flashsaleItem.review_point_2 || 0,
        review_point_3: flashsaleItem.review_point_3 || 0,
        review_point_4: flashsaleItem.review_point_4 || 0,
        review_point_5: flashsaleItem.review_point_5 || 0,

        // Dữ liệu thời gian
        created_at: flashsaleItem.created_at || new Date().toISOString(),
        updated_at: flashsaleItem.updated_at || new Date().toISOString(),
        created_by: flashsaleItem.created_by || 0,
        updated_by: flashsaleItem.updated_by || 0,
    } as ProductT;
};

export const getInfoTimeFlashSale = () => {
    let flashType = "00:00";
    for (let i = FLASH_SALE_TYPES.length - 1; i >= 0; i--) {
        const hour = parseInt(FLASH_SALE_TYPES[i].split(":")[0], 10);
        if (CURRENT_HOUR >= hour) {
            flashType = FLASH_SALE_TYPES[i];
            break;
        }
    }
    const startCountdownDate = new Date(
        CURRENT.getFullYear(),
        CURRENT.getMonth(),
        CURRENT.getDate(),
        parseInt(flashType.split(":")[0], 10),
        0,
        0
    );

    const indexOfFlash = FLASH_SALE_TYPES.indexOf(flashType);
    let endCountdownDate: Date;
    if (indexOfFlash === FLASH_SALE_TYPES.length - 1) {
        endCountdownDate = new Date(
            CURRENT.getFullYear(),
            CURRENT.getMonth(),
            CURRENT.getDate() + 1,
            parseInt(FLASH_SALE_TYPES[0].split(":")[0], 10),
            0,
            0
        );
    } else {
        endCountdownDate = new Date(
            CURRENT.getFullYear(),
            CURRENT.getMonth(),
            CURRENT.getDate(),
            parseInt(FLASH_SALE_TYPES[indexOfFlash + 1].split(":")[0], 10),
            0,
            0
        );
    }
    return { flashType, startCountdownDate, endCountdownDate };
};

export const findDescendantsRecursive = (
    id: any,
    data: any[]
): { item: any; children: any[] } => {
    // Tạo Map để tra cứu nhanh - chỉ duyệt 1 lần
    const itemMap = new Map<any, any>();
    const childrenMap = new Map<any, any[]>();

    // Duyệt 1 lần duy nhất để build map
    data.forEach((item) => {
        itemMap.set(item.id, item);

        if (!childrenMap.has(item.parent_id)) {
            childrenMap.set(item.parent_id, []);
        }
        childrenMap.get(item.parent_id)!.push(item.id);
    });

    // Hàm đệ quy tối ưu - không cần duyệt mảng data nữa
    const buildTree = (currentId: any): { item: any; children: any[] } => {
        const children = childrenMap.get(currentId) || [];
        return {
            item: itemMap.get(currentId),
            children: children.map((childId) => buildTree(childId)),
        };
    };

    return buildTree(id);
};

export const sortFilterFirst = <T>(
    arr: T[],
    field: string,
    value: any
): T[] => {
    const firstItems = arr.filter((item: any) => item[field] === value);
    const otherItems = arr.filter((item: any) => item[field] !== value);
    return [...firstItems, ...otherItems];
};
