import { VoucherStoreT, VoucherT } from "@/types/common.types";

export type ApiResponseT<T> = {
    data: T;
    status: number;
};

export type PaginatedResponseT<T> = ApiResponseT<PaginatedDataT<T>>;

export type PaginatedDataT<T> = {
    page: number;
    pageLen: number;
    pageTotal: number;
    recordTotal: number;
    data: T[];
};

export type VoucherStoresResponse = {
    voucher_id: number;
    list: VoucherStoreT[];
};

export type VouchersResponse = {
    voucher_id: number;
    list: VoucherT[];
};
