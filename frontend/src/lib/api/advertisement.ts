import { apiFetchSites } from "@/lib/api/api";
import { AdvertisementT } from "@/types/common.types";

export const getAdvertisementById = async (
    id: string
): Promise<AdvertisementT> => {
    const res = await apiFetchSites(`/advertisements/detail/${id}`);
    return res;
};
