import {
    CurrencyT,
    FixedSiteConfigT,
    LangT,
    SiteConfigT,
} from "@/types/common.types";
import { apiFetchSites, buildURIWithQueries } from "./api";

export const fixedSiteConfig: FixedSiteConfigT = {
    logo: "https://ca-ctm.systems.com.vn/styles/logotext.png",
    policies: {
        title: "Chính sách",
        items: [
            {
                title: "Chính sách bảo mật",
                link: "#",
            },
            {
                title: "Cơ chế giải quyết tranh chấp",
                link: "#",
            },
            {
                title: "Quy chế hoạt động",
                link: "#",
            },
        ],
    },
    support: {
        title: "Hỗ trợ khách hàng",
        items: [
            {
                title: "Bán hàng cùng CTM",
                link: "#",
            },
            {
                title: "Đóng góp ý kiến",
                link: "#",
            },
            {
                title: "Thông tin Đóng góp ý kiến",

                link: "#",
            },
            {
                title: "Tiếp nhận, đánh giá, phản ánh, kiến nghị của tổ chức xã hội",
                link: "#",
            },
            {
                title: "Danh sách các đánh giá, kiến nghị của tổ chức xã hội",
                link: "#",
            },
        ],
    },

    socials: [
        {
            icon: "<i class='fa-brands fa-facebook-f'></i>",
            key: "fb_link",
        },
        {
            icon: "<i class='fa-brands fa-twitter'></i>",
            key: "tw_link",
        },
        {
            icon: "<i class='fa-brands fa-instagram'></i>",
            key: "instagram_link",
        },
        {
            icon: "<i class='fa-brands fa-youtube'></i>",
            key: "yt_link",
        },
    ],
    langs: [
        {
            label: "English",
            value: "en",
            image: "/assets/language/en.png",
        },
        {
            label: "VietNam ",
            value: "vi",
            image: "/assets/language/vi.png",
        },
    ],
    currency: [
        {
            label: "VND",
            value: "vnd",
        },
        {
            label: "USD",
            value: "usd",
        },
    ],
};

export async function getSiteConfig(queries?: {
    [key: string]: any;
}): Promise<any> {
    // const uri = buildURIWithQueries('/config/site', queries);
    // const res = await apiFetch(uri);
    // return res.data;

    return await apiFetchSites("/config/getAll");
}
export const getAllLangs = async (): Promise<LangT[]> => {
    // const res = await apiFetch("/profile/langs");
    // return res.data;
    return [
        {
            label: "English",
            value: "en",
            image: "/assets/language/en.png",
        },
        {
            label: "VietNam ",
            value: "vi",
            image: "/assets/language/vi.png",
        },
    ];
};
export const getAllLangsByUrl = async (url: string): Promise<LangT[]> => {
    // const res = await apiFetchFullUrl(url);
    // return res.data;
    return [
        {
            label: "English",
            value: "en",
            image: "/assets/language/en.png",
        },
        {
            label: "VietNam",
            value: "vi",
            image: "/assets/language/vi.png",
        },
    ];
};
export const getAllCurrencies = async (): Promise<CurrencyT[]> => {
    // const res = await apiFetch("/profile/currencies");
    // return res.data;
    return [
        {
            label: "VND",
            value: "vnd",
        },
        {
            label: "USD",
            value: "usd",
        },
    ];
};
export const getAllCurrenciesByUrl = async (
    url: string
): Promise<CurrencyT[]> => {
    // const res = await apiFetchFullUrl(url);
    // return res.data;
    return [
        {
            label: "VND",
            value: "vnd",
        },
        {
            label: "USD",
            value: "usd",
        },
    ];
};
