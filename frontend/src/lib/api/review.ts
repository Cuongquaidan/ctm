import { reviewReplies, reviews } from "@/assets/data/Review";
import { apiFetch, apiFetchSites, buildURIWithQueries } from "./api";
import { ReviewReplyT, ReviewT } from "@/types/common.types";
import { PaginatedDataT } from "@/types/api.type";

type BodyPostReviewT = Omit<
    ReviewT,
    "id" | "userId" | "userName" | "createdAt" | "updatedAt"
>;
export type QueriesT = {
    pageLen?: number;
    page?: number;
    store_idSh?: number;
    productIdSh?: number;
    [key: string]: any;
};

export const fetchAllReviews = async (
    queries?: QueriesT
): Promise<PaginatedDataT<ReviewT>> => {
    const uri = buildURIWithQueries(`/productReviews/getList`, queries);
    const resdata = await apiFetchSites(uri);
    return resdata;
};

export const fetchReviewsByUser = async (): Promise<ReviewT[]> => {
    // const res = await apiFetch("/reviews/user")
    // return res
    return reviews;
};
export const fetchReviewsByProduct = async (
    productId: number
): Promise<ReviewT[]> => {
    // const res = await apiFetch(`/reviews/product/${productId}`)
    // return res
    return reviews;
};
export const fetchReviewsByStore = async (
    storeId: number
): Promise<ReviewT[]> => {
    // const res = await apiFetch(`/reviews/store/${storeId}`)
    // return res
    return reviews;
};
export const fetchReviewRepliesByReview = async (
    reviewId: number
): Promise<ReviewReplyT[]> => {
    // const res = await apiFetch(`/reviews/${reviewId}/replies`)
    // return res
    return reviewReplies.filter((r) => r.product_review_id === reviewId);
};

export const postReview = async (body: BodyPostReviewT) => {
    // const res = await apiFetch(`/reviews`, {
    //     method: "POST",
    //     body: JSON.stringify(body),
    // });
    // return res;
    return true;
};
