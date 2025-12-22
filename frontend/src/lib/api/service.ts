// Thương Mại Điện Tử
// 340,612 ₫

import { ServiceItem } from "@/types/common.types";
import { apiFetch } from "./api";

// Siêu Tốc
// 434,000 ₫

// Siêu Tốc
// 427,000 ₫

// Siêu Tốc - Tiết Kiệm
// 388,000 ₫

// HUB Thần Tốc CK
// 157,000 ₫

// Siêu Tốc chung cư
// 397,000 ₫
export const getServiceShipping = async (): Promise<{
    id: string;
    name: string;
    especial: string;
    items: ServiceItem[];
}> => {
    // const res = await apiFetch("/services/shipping");
    // return res;
    return {
        id: "service-group-1",
        name: "Chi phí giao hàng",
        especial: "Khu vực không hỗ trợ giao hàng",
        items: [
            {
                id: "service-1",
                name: "Thương Mại Điện Tử",
                price: 340612,
                description: "Giao hàng siêu tốc trong 2-3 ngày",
            },
            {
                id: "service-2",
                name: "Siêu Tốc",
                price: 434000,
                description: "Giao hàng nhanh trong 1-2 ngày",
            },
            {
                id: "service-3",
                name: "Siêu Tốc",
                price: 427000,
                description: "Giao hàng nhanh trong 1-2 ngày",
            },
            {
                id: "service-4",
                name: "Siêu Tốc - Tiết Kiệm",
                price: 388000,
                description: "Giao hàng nhanh trong 1-2 ngày",
            },
            {
                id: "service-5",
                name: "HUB Thần Tốc CK",
                price: 157000,
                description: "Giao hàng siêu tốc trong 2-3 ngày",
            },
            {
                id: "service-6",
                name: "Siêu Tốc chung cư",
                price: 397000,
                description: "Giao hàng nhanh trong 1-2 ngày",
            },
        ],
    };
};
