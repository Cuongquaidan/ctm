import { addresses } from "@/assets/data/Address";
import { AddressT } from "@/types/common.types";
import { apiFetchCustomers } from "./api";

type AddressBodyT = {
    name: string;
    phone: string;
    address: string;
    country_id: string;
    province_id: string;
    district_id: string;
    ward_id: string;
    fulladdress: string;
    is_deleted: number;
    status: number;
};

export const getProvinces = async (): Promise<
    { id: string; text: string }[]
> => {
    const resdata = await apiFetchCustomers(
        "/provinces/getProvinces?countryId=240"
    );
    return resdata;
};

export const getDistrictsByStateId = async (
    stateId: string
): Promise<{ id: string; text: string }[]> => {
    const resdata = await apiFetchCustomers(
        `/districts/getCityByStateId?stateId=${stateId}`
    );
    return resdata;
};
export const getWardsByDistrictId = async (
    cityId: string
): Promise<{ id: string; text: string }[]> => {
    const resdata = await apiFetchCustomers(
        `/wards/getWardByCityId?countryId=240&cityId=${cityId}`
    );
    return resdata;
};

export const fetchAddresses = async (): Promise<AddressT[]> => {
    const resdata = await apiFetchCustomers("/customerAddress/getAddresses");
    return resdata;
};
export const fetchAddressesByUrl = async (url: string): Promise<AddressT[]> => {
    // const res = await apiFetchByUrl(url);
    // return res.data;
    return addresses;
};

export const getAddressById = async (id: number): Promise<AddressT> => {
    const resdata = await apiFetchCustomers(
        `/customerAddress/getAddressDetail/${id}`
    );
    return resdata;
};
export const addAddress = async (body: AddressBodyT): Promise<any> => {
    const resdata = await apiFetchCustomers("/customerAddress/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    return resdata;
};

export const updateAddress = async (
    id: number,
    body: AddressBodyT
): Promise<any> => {
    const resdata = await apiFetchCustomers(`/customerAddress/edit/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    return resdata;
};

export const deleteAddress = async (id: number): Promise<any> => {
    const resdata = await apiFetchCustomers(
        `/customerAddress/removeAddress/${id}`
    );
    return resdata;
};

export const setDefaultAddress = async (addressId: string): Promise<any> => {
    const resdata = await apiFetchCustomers(`/customerAddress/setAsDefault`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ addressId }),
    });
    return resdata;
};

export const getDefaultAddress = async (): Promise<AddressT> => {
    const resdata = await apiFetchCustomers(
        "/customerAddress/getDefaultAddress"
    );
    return resdata;
};
