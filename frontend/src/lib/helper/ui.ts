import { CategoryT, OrderStatus } from "@/types/common.types";
import { getAllCategories } from "@/lib/api/category";
import { priceRanges, ratings } from "@/lib/constants/constants";

export const OrderStatusLabel: Record<OrderStatus, string> = {
    [OrderStatus.NEW]: "Đơn hàng mới",
    [OrderStatus.COMPLETED]: "Hoàn thành",
    [OrderStatus.CANCELLED]: "Vận chuyển hủy",
};

export const OrderStatusColor: Record<OrderStatus, string> = {
    [OrderStatus.NEW]: "badge bg-warning",
    [OrderStatus.COMPLETED]: "badge bg-success",
    [OrderStatus.CANCELLED]: "badge bg-danger",
};

export const getLabelByValue = async (
    categories: CategoryT[] = [],
    key: string,
    value: string | number
): Promise<string> => {
    if (key === "fcatid") {
        const option = categories.find(
            (item) => item.id === Number.parseInt(value + "")
        );
        return option ? option.name : "";
    } else if (key === "fprice") {
        const option = priceRanges.find((item) => item.value === value);
        return option ? option.label : "";
    } else {
        return (
            ratings.find((item) => item.value === Number.parseInt(value + ""))
                ?.label || ""
        );
    }
};
