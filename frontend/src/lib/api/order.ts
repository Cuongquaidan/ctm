import { orders } from "@/assets/data/Order";
import { apiFetch } from "./api";
import {
    Order,
    OrderSuccessDetailT,
    OrderTrackingDetailT,
    TrackingStatusEnum,
} from "@/types/common.types";

export const fetchOrders = async (slug: string): Promise<Order[]> => {
    // const res = await apiFetch(`/orders/${slug}`);
    // return res;
    return orders;
};

export const fetchOrderSuccessDetail = async (
    transactionId: string
): Promise<OrderSuccessDetailT> => {
    // const res = await apiFetch(`/orders/success/${transactionId}`);
    // return res.data;

    // Mock data for now
    return {
        transactionId,
        items: [
            {
                id: "1",
                name: "Bell pepper",
                image: "/assets/eme2023/images/vegetable/product/1.png",
                seller: "Fresho",
                quantity: "500 g",
                price: 20.68,
                qty: 1,
                total: 35.1,
            },
            {
                id: "2",
                name: "Eggplant",
                image: "/assets/eme2023/images/vegetable/product/2.png",
                seller: "Nesto",
                quantity: "250 g",
                price: 15.14,
                qty: 1,
                total: 52.95,
            },
            {
                id: "3",
                name: "Onion",
                image: "/assets/eme2023/images/vegetable/product/3.png",
                seller: "Basket",
                quantity: "750 g",
                price: 29.22,
                qty: 1,
                total: 67.36,
            },
        ],
        priceDetails: {
            subtotal: 32.34,
            saving: 12.23,
            couponDiscount: 6.27,
            total: 19.28,
        },
        shippingAddress: {
            address: "8424 James Lane South",
            city: "San Francisco, CA 94080",
            zipCode: "94080",
            expectedDelivery: "Oct 21, 2021",
            trackingUrl: "/order-tracking",
        },
        paymentMethod: {
            type: "Cash on Delivery",
            description:
                "Pay on Delivery (Cash/Card). Cash on delivery (COD) available. Card/Net banking acceptance subject to device availability.",
        },
    };
};

export const fetchOrderTrackingById = async (
    orderId: string
): Promise<OrderTrackingDetailT> => {
    // const res = await apiFetch(`/orders/tracking/${orderId}`);
    // Khi call API thực tế, convert string datetime sang Date:
    // const data = res.data;
    // return {
    //     ...data,
    //     estimatedDelivery: new Date(data.estimatedDelivery),
    //     timeline: data.timeline.map(t => ({
    //         ...t,
    //         datetime: t.datetime ? new Date(t.datetime) : undefined
    //     })),
    //     history: data.history.map(h => ({
    //         ...h,
    //         datetime: new Date(h.datetime)
    //     }))
    // };

    // Mock data with Date objects
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
        orderId,
        trackingCode: "MH4285UY",
        productImage: "/assets/eme2023/images/vegetable/product/6.png",
        productName: "Fresh Vegetables",
        service: {
            name: "Express Delivery",
            logo: "/assets/eme2023/images/inner-page/brand-name.svg",
        },
        packageInfo: "Letter",
        from: "STR. Smardan 9, Bucuresti, Romania",
        destination: "Flokagata 24, 105 Reykjavik, Iceland",
        estimatedDelivery: new Date("2024-02-07T17:05:00"), // 7 Feb, 05:05 PM
        currentStatus: TrackingStatusEnum.IN_PRODUCTION,
        timeline: [
            {
                status: TrackingStatusEnum.PROCESSING,
                label: "Order Processing",
                datetime: new Date("2021-09-26T05:43:00"),
                location: "California",
                isCompleted: true,
            },
            {
                status: TrackingStatusEnum.PROCESSING,
                label: "Pre-Production",
                datetime: new Date("2021-10-03T13:21:00"),
                location: "Canada",
                isCompleted: true,
            },
            {
                status: TrackingStatusEnum.IN_PRODUCTION,
                label: "In Production",
                datetime: new Date("2021-10-04T10:00:00"),
                location: "America",
                isCompleted: true,
            },
            {
                status: TrackingStatusEnum.SHIPPED,
                label: "Shipped",
                datetime: undefined, // Pending
                isCompleted: false,
            },
            {
                status: TrackingStatusEnum.DELIVERED,
                label: "Delivered",
                datetime: undefined, // Pending
                isCompleted: false,
            },
        ],
        history: [
            {
                description: "Order Placed",
                datetime: new Date("2021-09-26T00:00:00"),
                location: "California",
            },
            {
                description: "Preparing to Ship",
                datetime: new Date("2021-10-03T00:00:00"),
                location: "Canada",
            },
            {
                description: "Shipped",
                datetime: new Date("2021-10-04T00:00:00"),
                location: "America",
            },
            {
                description: "Delivered",
                datetime: new Date("2021-11-10T00:00:00"),
                location: "Germany",
            },
        ],
    };
};
