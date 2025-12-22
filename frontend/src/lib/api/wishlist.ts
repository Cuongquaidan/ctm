import { ProductT } from "@/types/common.types";
import { apiFetchCustomers } from "./api";
import { data } from "@/assets/data/Home";

export const getWishList = async (): Promise<ProductT[]> => {
    const resdata = await apiFetchCustomers("/productwishlist/getWishlist");
    return resdata;
};

export const addToWishList = async (productId: number): Promise<unknown> => {
    const resdata = await apiFetchCustomers(
        "/productwishlist/toggleWishlist/" + productId
    );
    return resdata;
};

export const removeWishListItem = async (
    productId: number
): Promise<boolean> => {
    const resdata = await apiFetchCustomers(
        "/productwishlist/toggleWishlist/" + productId
    );
    return resdata;
};

export const fetchProductsInWishList = async (): Promise<ProductT[]> => {
    const resdata = await apiFetchCustomers("/productwishlist/getWishlist");
    return resdata;
};
export const fetchWishListIds = async (): Promise<number[]> => {
    const resdata = await apiFetchCustomers(
        "/productwishlist/getWishlistProductIds"
    );
    return resdata;
};

export const getWishListCount = async (): Promise<number> => {
    // const res = await apiFetch("/wishlist/count");
    // return res.count;
    return 1;
};

export const checkIsInWishlist = async (
    productId: number
): Promise<boolean> => {
    // const res = await apiFetch(`/wishlist/check/${productId}`);
    // return res;
    return true;
};

export const getTotalItems = async (): Promise<number> => {
    const resdata = await apiFetchCustomers("/productwishlist/countWishlist");
    return resdata?.count || 0;
};
