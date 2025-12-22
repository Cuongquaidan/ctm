import { CartItemT, CartT } from "@/types/common.types";
import { apiFetch, apiFetchCustomers } from "@/lib/api/api";
import { vouchersData } from "@/assets/data/Vouchers";

export const getCart = async (): Promise<CartT> => {
    const resdata = await apiFetchCustomers("/cart/getDetail");

    return resdata;
};

export const updateCart = async (
    product_id: number,
    product_price_id: number,
    quantity: number
): Promise<any> => {
    const resdata = await apiFetchCustomers("/cart/edit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ product_id, quantity, product_price_id }),
    });

    return resdata;
};
export const removeItems = async (cartItemIds: number[]): Promise<boolean> => {
    const resdata = await apiFetchCustomers(`/cart/CartRemoveProduct`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartItemIds: cartItemIds }),
    });
    return resdata;
};

export const getSummaryCart = async (): Promise<{
    itemTotal: number;
    shippingFee: number;
    totalDiscount: number;
    finalTotal: number;
}> => {
    const resdata = await apiFetchCustomers("/cart/getCartSummary");
    return resdata;
};

export const applyCoupon = async (couponCode: string): Promise<any> => {
    // const resdata = await apiFetch('/cart/apply-coupon', {
    //     method: "POST",
    //     body: JSON.stringify({ couponCode }),
    // });
    // return resdata;
    return {
        total: 250000,
        discount: 50001,
        shippingFee: 15000,
        finalTotal: 214999,
    };
};

export const ToggleSelectionStatus = async (
    cartItemIds: number[],
    isOrder: 0 | 1
): Promise<boolean> => {
    const resdata = await apiFetchCustomers("/cart/toggleSelectionStatus", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartItemIds, isOrder }),
    });
    return resdata;
};

export const getTotalItemsInCart = async (): Promise<number> => {
    const resdata = await apiFetchCustomers("/cart/CartCountProduct");
    return resdata?.total_quantity || 0;
};
