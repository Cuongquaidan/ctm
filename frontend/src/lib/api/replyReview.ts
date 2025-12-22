import { PaginatedDataT } from "@/types/api.type";
import { ReviewReplyT } from "@/types/common.types";
import { apiFetchSites, buildURIWithQueries } from "./api";

export type QueriesT = {
    pageLen?: number;
    page?: number;
    reviewIdSh?: number;
    [key: string]: any;
};

export const fetchAllReviewReplies = async (
    queries?: QueriesT
): Promise<PaginatedDataT<ReviewReplyT>> => {
    const uri = buildURIWithQueries(`/productReviewsReply/getList`, queries);
    const resdata = await apiFetchSites(uri);
    return resdata;
};
