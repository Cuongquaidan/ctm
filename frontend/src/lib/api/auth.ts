import { apiFetch, apiFetchCustomers, apiFetchSites } from "./api";
import { UserT } from "@/types/common.types";

type LoginBodyT = {
    phone: string;
    password: string;
    captcha?: string;
};

type RegisterBodyT = {
    phone: string;
    name: string;
    referral_code?: string;
};

type StoreRegisterBodyT = {
    phone: string;
    password: string;
    captcha: string;
};

type forgotPasswordBodyT = {
    phone: string;
    captcha?: string;
};
type confirmForgetPasswordBodyT = {
    phone: string;
    reference_code: string;
    password: string;
};

type RequestOtpBodyT = {
    phone: string;
    purpose: "verification" | "forgot-password" | "register";
};

type ValidateOtpBodyT = {
    phone: string;
    otp: string;
    purpose: "verification" | "forgot-password" | "register";
};

type OtpResponseT = {
    success: boolean;
    message: string;
    otpId?: string; // ID để tracking OTP session
    expiresIn?: number; // Thời gian hết hạn (seconds)
    maskedPhone?: string; // Số điện thoại đã che: *******9897
};

type ValidateOtpResponseT = {
    success: boolean;
    message: string;
    error?: string;
    token?: string; // Token sau khi verify thành công
};

export const requestOtp = async (
    body: RequestOtpBodyT
): Promise<OtpResponseT> => {
    const { phone, purpose } = body;

    // Trong thực tế:
    // const res = await apiFetch("/auth/request-otp", {
    //     method: "POST",
    //     body: JSON.stringify({ phone, purpose }),
    // });
    // return res.data;

    // Mock response
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API delay

    // Che số điện thoại: chỉ hiện 4 số cuối
    const maskedPhone = phone.replace(/(\d{3})\d+(\d{4})/, "$1*****$2");

    return {
        success: true,
        message: "OTP đã được gửi đến số điện thoại của bạn",
        otpId: `otp_${Date.now()}`,
        expiresIn: 300, // 5 phút
        maskedPhone: maskedPhone,
    };
};

export const validateOtp = async (
    body: ValidateOtpBodyT
): Promise<ValidateOtpResponseT> => {
    const { phone, otp, purpose } = body;

    // Trong thực tế:
    // const res = await apiFetch("/auth/validate-otp", {
    //     method: "POST",
    //     body: JSON.stringify({ phone, otp, purpose }),
    // });
    // return res.data;

    // Mock validation

    // Demo: OTP đúng là "123456"
    if (otp !== "123456") {
        return {
            success: false,
            message: "Mã OTP không đúng",
            error: "INVALID_OTP",
        };
    }

    return {
        success: true,
        message: "Xác thực thành công",
        token: `verified_${Date.now()}_${phone}`,
    };
};

export const resendOtp = async (
    phone: string,
    purpose: RequestOtpBodyT["purpose"]
): Promise<OtpResponseT> => {
    return requestOtp({ phone, purpose });
};

export const getProfile = async (): Promise<UserT> => {
    const resdata = await apiFetchCustomers("/accounts/getProfile");
    return resdata;
    // return {
    //     id: "1",
    //     name: "Nguyen Van AAAAAAAAAAAAAA",
    //     phone: "0123456789",
    //     email: "nguyen.van.a@example.com",
    //     avatar: "https://ca-ctm.systems.com.vn/styles/avatar.jpg",
    //     gender: "male",
    //     birthday: new Date("1990-01-01"),
    //     google: "google-id",
    //     facebook: "facebook-id",
    //     createdAt: new Date("2020-01-01"),
    //     updatedAt: new Date("2020-01-01"),
    // };
};
export const logIn = async (body: LoginBodyT) => {
    const { phone, password, captcha } = body;
    const resdata = await apiFetchCustomers("/login", {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone, password, captcha }),
    });
    return resdata;
};

export const refreshToken = async () => {
    const resdata = await apiFetchCustomers("/refreshToken", {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("refreshToken")}`,
        },
    });
    return resdata;
};

export const logOut = async () => {
    return await apiFetchCustomers("/logout", {
        method: "POST",
    });
};

export const register = async (body: RegisterBodyT) => {
    const { phone, name, referral_code } = body;

    const resdata = await apiFetchCustomers(`/register`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone, name, referral_code }),
    });

    return resdata;
};
export const confirmRegistration = async ({
    phone,
    reference_code,
    password,
    confirmPassword,
}: {
    phone: string;
    reference_code: string;
    password: string;
    confirmPassword: string;
}) => {
    const res = await apiFetchCustomers("/registerConfirmOtp", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            phone,
            reference_code,
            password,
            confirmPassword,
        }),
    });
    return res;
};

export const forgotPassword = async (body: forgotPasswordBodyT) => {
    const resdata = await apiFetchCustomers("/forget", {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    return resdata;
};

export const confirmForgotPassword = async (
    body: confirmForgetPasswordBodyT
) => {
    const resdata = await apiFetchSites("/forgetPassword", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Secret-Key": `${process.env.NEXT_PUBLIC_SECRET_KEY_CUSTOMERS}`,
        },
        body: JSON.stringify({ ...body }),
    });
    return resdata;
};

export const requestOtpForForgotPassword = async (body: {
    phone: string;
}): Promise<any> => {
    const resdata = await apiFetch("/forgetResendOtp", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Secret-Key": `${process.env.NEXT_PUBLIC_SECRET_KEY_CUSTOMERS}`,
        },
        body: JSON.stringify(body),
    });
    return resdata;
};

export const storeRegister = async (body: StoreRegisterBodyT) => {
    // const res = await apiFetch("/store-auth/register", {
    //     method: "POST",
    //     body: JSON.stringify(body),
    // });
    // return res;
    return true;
};

export const storeForgotPassword = async (body: forgotPasswordBodyT) => {
    // const res = await apiFetch("/store-auth/forgot-password", {
    //     method: "POST",
    //     body: JSON.stringify(body),
    // });
    // return res;
    return true;
};

export const storeLogin = async (body: LoginBodyT) => {
    const { phone, password } = body;
    // Fetch o day
    // Gia su thanh cong
    if (password !== "11111111") {
        return {
            accessToken: "",
            success: false,
            error: "Mật khẩu không đúng",
        };
    }
    const data = {
        error: "",
        success: true,
        accessToken: "fake-jwt-token-store",
        user: {
            id: 1,
            name: "Cua Hang A",
            phone: phone,
            email: "cua.hang.a@example.com",
            avatar: "https://ca-ctm.systems.com.vn/static/1/images/shop/9.png",
        },
    };

    return data;
};
