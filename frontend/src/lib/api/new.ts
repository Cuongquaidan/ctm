import { newData } from "@/assets/data/New";
import { PostItemT } from "@/types/common.types";
import { apiFetchSites, buildURIWithQueries } from "./api";
import { PaginatedDataT } from "@/types/api.type";

export type queriesT = {
    nameSh?: string;
    hotSh?: number;
    pageLen?: number;
    page?: number;
    store_idSh?: number;
    category_idsSh?: number;
    [key: string]: any;
};

export const getAllNews = async (
    queries?: queriesT
): Promise<PaginatedDataT<PostItemT>> => {
    const uri = buildURIWithQueries("/news/getList", queries);
    const resdata = await apiFetchSites(uri);
    return resdata;
};
export const getFeaturedNews = async (
    queries?: queriesT
): Promise<PaginatedDataT<PostItemT>> => {
    const uri = buildURIWithQueries("/news/getList", {
        ...queries,
        hotSh: 1,
    });
    const resdata = await apiFetchSites(uri);
    return resdata;
};

export const getNewsByAlias = async (
    alias: string,
    queries?: { [key: string]: any }
): Promise<PostItemT> => {
    const uri = buildURIWithQueries(`/news/${alias}`, queries);
    const resdata = await apiFetchSites(uri);
    return resdata;
};
