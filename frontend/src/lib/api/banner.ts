import { BannerT } from "@/types/common.types";
import { apiFetchSites } from "./api";
import { headers } from "next/headers";

export const getBannersByArr = async (arr: number[]): Promise<BannerT[]> => {
    const res = await apiFetchSites("/banners/getDetailsByArrayIds", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ banner_ids: arr }),
    });

    return res;
};
