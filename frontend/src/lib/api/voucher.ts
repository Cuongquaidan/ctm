import { vouchersData } from "@/assets/data/Vouchers";
import { VoucherStoreT, VoucherT } from "@/types/common.types";
import {
    apiFetch,
    apiFetchCustomers,
    apiFetchFullUrl,
    apiFetchSites,
    buildURIWithQueries,
} from "./api";
import { VouchersResponse, VoucherStoresResponse } from "@/types/api.type";

export const getVoucherStores = async (queries?: {
    [key: string]: any;
}): Promise<VoucherStoreT[]> => {
    const resdata = (await apiFetchSites(
        buildURIWithQueries("/voucherStore/getList", queries)
    )) as Promise<VoucherStoreT[]>;
    return resdata;
};

export const getVoucherStoresById = async (
    id: number,
    queries?: { [key: string]: any }
): Promise<VoucherStoresResponse> => {
    const resdata = (await apiFetchCustomers(
        buildURIWithQueries(
            `/voucherStores/storeVoucherMaybeApply/${id}`,
            queries
        )
    )) as Promise<VoucherStoresResponse>;
    return resdata;
};
export const applyStoreVoucher = async (
    storeId: number,
    voucherId: number,
    queries?: { [key: string]: any }
): Promise<{
    [key: string]: any;
    message: string;
}> => {
    const resdata = await apiFetchCustomers(
        buildURIWithQueries(`/voucherStores/cartUseStoreVoucher`, queries),
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                storeId: storeId,
                voucherId: voucherId,
            }),
        }
    );
    return resdata;
};

export const removeVoucherStoreById = async (
    storeId: number,
    voucherId: number,
    queries?: { [key: string]: any }
): Promise<{
    [key: string]: any;
    message: string;
}> => {
    const resdata = await apiFetchCustomers(
        buildURIWithQueries(
            `/voucherStores/cartRemoveStoreVoucher/${storeId}`,
            queries
        ),
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ voucherId: voucherId }),
        }
    );
    return resdata;
};

export const getVouchers = async (queries?: {
    [key: string]: any;
}): Promise<VouchersResponse> => {
    const resdata = (await apiFetchCustomers(
        buildURIWithQueries("/vouchers/voucherMaybeApply", queries)
    )) as Promise<VouchersResponse>;
    return resdata;
};
export const applyVoucher = async (
    voucherId: number,
    queries?: {
        [key: string]: any;
    }
): Promise<{
    [key: string]: any;
    message: string;
}> => {
    const resdata = await apiFetchCustomers(
        buildURIWithQueries(`/vouchers/cartUseVoucher`, queries),
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ voucherId: voucherId }),
        }
    );
    return resdata;
};
export const removeVoucherById = async (queries?: {
    [key: string]: any;
}): Promise<{
    [key: string]: any;
    message: string;
}> => {
    const resdata = await apiFetchCustomers(
        buildURIWithQueries(`/vouchers/removeVoucher`, queries)
    );

    return resdata;
};

export const getPromotions = async (queries?: {
    [key: string]: any;
}): Promise<VoucherT[]> => {
    // const uri = buildURIWithQueries('/promotions', queries);
    // const res = await apiFetch(uri);
    // return res.data;
    return vouchersData;
};

export const getVouchersByUrl = async (
    url: string,
    queries?: { [key: string]: any }
): Promise<VoucherT[]> => {
    // const uri = buildURIWithQueries(url, queries);
    // const res = await apiFetchFullUrl(uri);
    // return res.data;
    return vouchersData;
};

export const getVoucherInCart = async (queries?: {
    [key: string]: any;
}): Promise<VoucherT> => {
    // const uri = buildURIWithQueries('/cart/voucher', queries);
    // const res = await apiFetch(uri);
    // return res.data;
    return vouchersData[0];
};

export const getMyVouchers = async (queries?: {
    [key: string]: any;
}): Promise<{
    list: VoucherT[];
}> => {
    const uri = buildURIWithQueries("/vouchers/getVoucherList", queries);
    const resdata = await apiFetchCustomers(uri);
    return resdata;
};

export const applyVoucherToCart = async (
    voucherId: number,
    queries?: { [key: string]: any }
): Promise<any> => {
    // const uri = buildURIWithQueries('/cart/voucher', queries);
    // const res = await apiFetch(uri, {
    //     method: 'POST',
    //     body: JSON.stringify({ voucherId })
    // });
    // return res;
    return true;
};
