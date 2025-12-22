import { PaginatedDataT } from "@/types/api.type";
import { NewsCategoryT } from "@/types/common.types";
import { apiFetchSites, buildURIWithQueries } from "./api";

export type queriesT = {
    nameSh?: string;
    hotSh?: number;
    pageLen?: number;
    page?: number;
    store_idSh?: number;
    category_idsSh?: number;
    [key: string]: any;
};

export const getAllNewsCategories = async (
    queries?: queriesT
): Promise<PaginatedDataT<NewsCategoryT>> => {
    const uri = buildURIWithQueries("/newsCategories/getList", queries);
    const resdata = await apiFetchSites(uri);
    return resdata;
};
