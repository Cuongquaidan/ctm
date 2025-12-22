import { StoreAdT, StoreT } from "@/types/common.types";
import {
    apiFetch,
    apiFetchFullUrl,
    apiFetchSites,
    buildURIWithQueries,
} from "./api";
import { storeAdsData, stores } from "@/assets/data/Store";
import { PaginatedDataT } from "@/types/api.type";

export async function getStoreBySlug(
    slug: string,
    queries?: { [key: string]: any }
): Promise<StoreT> {
    const uri = buildURIWithQueries(`/stores/${slug}`, queries);
    const data = await apiFetchSites(uri);
    return data;
}

export async function getStoreById(
    id: number,
    queries?: { [key: string]: any }
): Promise<StoreT> {
    const uri = buildURIWithQueries(`/stores/detail/${id}`, queries);
    const data = await apiFetchSites(uri);
    return data;
}

export async function getAllStores(queries?: {
    [key: string]: any;
}): Promise<PaginatedDataT<StoreT>> {
    const uri = buildURIWithQueries("/stores/getList", queries);
    const resdata = await apiFetchSites(uri);
    return resdata;
}

export async function getAllStoresByUrl(
    url: string,
    queries?: { [key: string]: any }
): Promise<StoreT[]> {
    // const uri = buildURIWithQueries(url, queries);
    // const res = await apiFetchFullUrl(uri);
    // return res.data;
    return stores;
}

export async function getAllStoreAds(queries?: {
    [key: string]: any;
}): Promise<StoreAdT[]> {
    // const uri = buildURIWithQueries('/store-ads', queries);
    // const res = await apiFetch(uri);
    // return res.data;
    return storeAdsData;
}
