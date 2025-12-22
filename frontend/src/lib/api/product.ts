import { data } from "@/assets/data/Home";
import { FlashsaleItemT, ProductPriceT, ProductT } from "@/types/common.types";
import {
    apiFetch,
    apiFetchFullUrl,
    apiFetchSites,
    buildURIWithQueries,
} from "./api";
import { PaginatedDataT } from "@/types/api.type";

type getProductsByCategoryResponseT = {
    title: string;
    products: ProductT[];
};
export type QueriesT = {
    nameSh?: string;
    hotSh?: number;
    pageLen?: number;
    page?: number;
    store_idSh?: number;
    category_idsSh?: number;
    [key: string]: any;
};

export async function getProductByAlias(
    alias: string,
    queries?: QueriesT
): Promise<ProductT> {
    const uri = buildURIWithQueries(`/products/detail/${alias}`, queries);
    const resdata = await apiFetchSites(uri);
    return resdata;
}

export async function getRelatedProducts(
    slug: string,
    queries?: { [key: string]: any }
): Promise<ProductT[]> {
    // const uri = buildURIWithQueries(`/products/${slug}/related`, queries);
    // const res = await apiFetch(uri);
    // return res.data;
    return data;
}

export async function getAllFlashsalesAtTime(
    date: string,
    time: string,
    queries?: { [key: string]: any }
): Promise<ProductT[]> {
    // const uri = buildURIWithQueries(`/stores/flashsales`, { date, time, ...queries });
    // const res = await apiFetch(uri);
    // return res.data;
    return data;
}
export async function getActiveProductOffers(): Promise<ProductT[]> {
    // const uri = buildURIWithQueries(`/products/active-offers`, {});
    // const res = await apiFetch(uri);
    // return res.data;
    return data;
}
export async function getActiveProductOffersByUrl(
    url: string,
    queries?: { [key: string]: any }
): Promise<ProductT[]> {
    // const uri = buildURIWithQueries(url, queries);
    // const res = await apiFetchFullUrl(uri);
    // return res.data;
    return data;
}

export async function getFlashSaleByStoreAtTime(
    storeId: number,
    flashType: string,
    time: string,
    queries?: { [key: string]: any }
): Promise<ProductT[]> {
    // const uri = buildURIWithQueries(`/stores/${storeId}/flashsales`, { date, time, ...queries });
    // const res = await apiFetch(uri);
    // return res.data;
    return data;
}

export async function getAllProducts(queries?: {
    page?: number;
    pageSize?: number;
    sortBy?: string;
    storeSlug?: string;
    s?: string;
    [key: string]: any;
}): Promise<ProductT[]> {
    // const uri = buildURIWithQueries('/products', queries);
    // const res = await apiFetch(uri);
    // return res.data;
    return data;
}

export async function getProductsPaginated(
    queries?: QueriesT
): Promise<PaginatedDataT<ProductT>> {
    const uri = buildURIWithQueries("/products/getList", queries);

    const resdata = await apiFetchSites(uri);

    return resdata;
}

export async function getFeaturedProductsPaginated(
    queries?: QueriesT
): Promise<PaginatedDataT<ProductT>> {
    const uri = buildURIWithQueries("/products/getList", {
        ...queries,
        hotSh: 1,
    });
    const resdata = await apiFetchSites(uri);
    return resdata;
}

export async function getProductsByCategory(queries?: {
    [key: string]: any;
}): Promise<getProductsByCategoryResponseT> {
    // const uri = buildURIWithQueries('/products-by-category', queries);
    // const res = await apiFetch(uri);
    // return res.data;
    return {
        title: "Sản phẩm theo danh mục",
        products: data,
    };
}

export async function getFeaturedProducts(queries?: {
    [key: string]: any;
}): Promise<ProductT[]> {
    // const uri = buildURIWithQueries('/products/featured', queries);
    // const res = await apiFetch(uri);
    // return res.data;
    return data;
}

export async function get5FeaturedProducts(queries?: {
    [key: string]: any;
}): Promise<ProductT[]> {
    // const uri = buildURIWithQueries('/products/featured', { limit: 5, ...queries });
    // const res = await apiFetch(uri);
    // return res.data;
    return data.slice(0, 5);
}

export async function getBestSellProducts(queries?: {
    [key: string]: any;
}): Promise<ProductT[]> {
    // const uri = buildURIWithQueries('/products/best-sell', queries);
    // const res = await apiFetch(uri);
    // return res.data;
    return data;
}

export async function getBestSellProductsByUrl(
    url: string,
    queries?: { [key: string]: any }
): Promise<ProductT[]> {
    // const uri = buildURIWithQueries(url, queries);
    // const res = await apiFetchFullUrl(uri);
    // return res.data;
    return data;
}

export async function getFeaturedProductsByUrl(
    url: string,
    queries?: { [key: string]: any }
): Promise<ProductT[]> {
    // const uri = buildURIWithQueries(url, queries);
    // const res = await apiFetchFullUrl(uri);
    // return res.data;
    return data;
}

export async function getFlashSaleByUrl(
    url: string,
    queries?: { [key: string]: any }
): Promise<ProductT[]> {
    // const uri = buildURIWithQueries(url, queries);
    // const res = await apiFetchFullUrl(uri);
    // return res.data;
    return data;
}

export async function getProductsByStoreIdByUrl(
    url: string,
    queries?: { [key: string]: any }
): Promise<ProductT[]> {
    // const uri = buildURIWithQueries(url, queries);
    // const res = await apiFetchFullUrl(uri);
    // return res.data;
    return data;
}

export async function getProductsFlashsaleByUri(
    uri: string
): Promise<FlashsaleItemT[]> {
    const res = await apiFetchSites(uri);
    return res;
}

export async function getProductsFlashsale(
    path: string,
    queries?: { [key: string]: any }
): Promise<FlashsaleItemT[]> {
    const res = await apiFetchSites(buildURIWithQueries(path, queries));
    return res;
}

export async function getProductsFlashsaleByQueries(queries?: {
    [key: string]: any;
}): Promise<FlashsaleItemT[]> {
    const res = await apiFetchSites(
        buildURIWithQueries("/promotions/getFlashSaleByProducts", queries)
    );
    return res;
}
export const getProductsByCategoryAlias = async (
    alias: string,
    queries?: QueriesT
): Promise<ProductT[]> => {
    const uri = buildURIWithQueries(`/categories/${alias}`, queries);

    const resdata = await apiFetchSites(uri);
    return resdata;
};
