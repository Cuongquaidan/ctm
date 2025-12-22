import { CurrencyT, LangT } from "@/types/common.types";
import { apiFetch, apiFetchCustomers } from "@/lib/api/api";
type UpdateProfileBodyT = {
    fullname: string;
    email: string;
    gender: number;
    birthday: string;
    phone?: string;
};

type UpdatePasswordBodyT = {
    newPassword: string;
    confirmNewPassword: string;
};

export const updateProfile = async (body: UpdateProfileBodyT): Promise<any> => {
    const resdata = await apiFetchCustomers("/accounts/editProfile", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            ...body,
            birthday: body.birthday,
        }),
    });
    // console.log(body);

    return resdata;
};

export const changePassword = async (
    body: UpdatePasswordBodyT
): Promise<any> => {
    const resdata = await apiFetchCustomers("/accounts/changePassword", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            password: body.newPassword,
            confirmPassword: body.confirmNewPassword,
        }),
    });
    return resdata;
};

export const getSelectedLang = async (): Promise<LangT> => {
    // const res = await apiFetch("/profile/selected-lang");
    // return res.data;
    return {
        label: "English",
        value: "en",
        image: "/assets/language/en.png",
    };
};

export const setSelectedLang = async (lang: string): Promise<any> => {
    // const res = await apiFetch("/profile/selected-lang", {
    //     method: 'POST',
    //     body: JSON.stringify({ lang })
    // });
    // return res;
    return true;
};
export const getSelectedCurrency = async (): Promise<CurrencyT> => {
    // const res = await apiFetch("/profile/selected-currency");
    // return res.data;
    return {
        label: "USD",
        value: "usd",
    };
};
export const setSelectedCurrency = async (currency: string): Promise<any> => {
    // const res = await apiFetch("/profile/selected-currency", {
    //     method: 'POST',
    //     body: JSON.stringify({ currency })
    // });
    // return res;
    return true;
};
