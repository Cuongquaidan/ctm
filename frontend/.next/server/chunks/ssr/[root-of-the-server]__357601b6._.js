module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/lib/api/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiFetch",
    ()=>apiFetch,
    "apiFetchCustomers",
    ()=>apiFetchCustomers,
    "apiFetchFullUrl",
    ()=>apiFetchFullUrl,
    "apiFetchSites",
    ()=>apiFetchSites,
    "buildURIWithQueries",
    ()=>buildURIWithQueries,
    "resetSessionExpiredFlag",
    ()=>resetSessionExpiredFlag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-ssr] (ecmascript)");
;
const BASE_URL = ("TURBOPACK compile-time value", "http://localhost:3000/customers") || "";
// Flag để track toast đã được hiển thị hay chưa
let sessionExpiredToastShown = false;
function resetSessionExpiredFlag() {
    sessionExpiredToastShown = false;
}
function buildURIWithQueries(path, queries) {
    if (!queries || Object.keys(queries).length === 0) {
        return path;
    }
    const params = new URLSearchParams();
    Object.entries(queries).forEach(([key, value])=>{
        if (value) {
            if (Array.isArray(value)) {
                value.forEach((val)=>{
                    params.append(key, String(val));
                });
            } else {
                params.append(key, String(value));
            }
        }
        if (typeof value === "boolean") {
            params.append(key, value ? "true" : "false");
        }
    });
    const queryString = params.toString();
    return queryString ? `${path}?${queryString}` : path;
}
async function apiFetch(uri, options) {
    const accessToken = sessionStorage.getItem("accessToken");
    const res = await fetch(`${BASE_URL}/${uri}`, {
        ...options,
        headers: {
            Authorization: `Bearer ${accessToken}`,
            ...options.headers
        }
    });
    if (res.status === 401) {
        sessionStorage.removeItem("accessToken");
        window.location.href = "/login?expired=true";
        return;
    }
    return res.json();
}
async function apiFetchFullUrl(fullUrl, options) {
    const accessToken = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
    const res = await fetch(fullUrl, {
        ...options,
        headers: {
            Authorization: `Bearer ${accessToken}`,
            ...options.headers
        }
    });
    if (res.status === 401) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return;
    }
    return res.json();
}
const BASE_URL_SITES = ("TURBOPACK compile-time value", "http://localhost:3000") || "";
async function apiFetchSites(uri, options) {
    try {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const url = `${BASE_URL_SITES}${uri}`;
        const res = await fetch(url, {
            ...options,
            headers: {
                ...options?.headers
            }
        });
        if (!res.ok) {
            console.log(`HTTP error! status: ${res.status}`);
            return null;
        }
        const resjson = await res.json();
        if (resjson.status === 400) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(resjson.message || "Lỗi khi lấy dữ liệu");
        }
        return resjson.data;
    } catch (error) {
        console.log("apiFetchSites error:", error);
        return null;
    }
}
const BASE_URL_CUSTOMERS = ("TURBOPACK compile-time value", "http://localhost:3000/customers") || "";
async function apiFetchCustomers(uri, options) {
    try {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const accessToken = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
        const url = `${BASE_URL_CUSTOMERS}${uri}`;
        const res = await fetch(url, {
            ...options,
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Secret-Key": `${("TURBOPACK compile-time value", "honeynet.vn")}`,
                ...options?.headers
            }
        });
        const resjson = await res.json();
        // Xử lý JWT expired hoặc unauthorized
        if (resjson.msg === "jwt expired" || resjson.status === 401 || res.status === 401) {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return;
        }
        if (!res.ok) {
            console.log(`HTTP error! status: ${res.status}`);
            return null;
        }
        if (resjson.status === 400) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(resjson.msg || "Lỗi khi lấy dữ liệu");
        }
        if (resjson.status === 403) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(resjson.msg || "Bạn không có quyền truy cập tài nguyên này");
        }
        if (resjson.status === 404) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Không tìm thấy tài nguyên yêu cầu");
        }
        if (resjson.status === 500) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Lỗi máy chủ, vui lòng thử lại sau");
        }
        return resjson.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}
}),
"[project]/src/lib/api/config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fixedSiteConfig",
    ()=>fixedSiteConfig,
    "getAllCurrencies",
    ()=>getAllCurrencies,
    "getAllCurrenciesByUrl",
    ()=>getAllCurrenciesByUrl,
    "getAllLangs",
    ()=>getAllLangs,
    "getAllLangsByUrl",
    ()=>getAllLangsByUrl,
    "getSiteConfig",
    ()=>getSiteConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/api.ts [app-ssr] (ecmascript)");
;
const fixedSiteConfig = {
    logo: "https://ca-ctm.systems.com.vn/styles/logotext.png",
    policies: {
        title: "Chính sách",
        items: [
            {
                title: "Chính sách bảo mật",
                link: "#"
            },
            {
                title: "Cơ chế giải quyết tranh chấp",
                link: "#"
            },
            {
                title: "Quy chế hoạt động",
                link: "#"
            }
        ]
    },
    support: {
        title: "Hỗ trợ khách hàng",
        items: [
            {
                title: "Bán hàng cùng CTM",
                link: "#"
            },
            {
                title: "Đóng góp ý kiến",
                link: "#"
            },
            {
                title: "Thông tin Đóng góp ý kiến",
                link: "#"
            },
            {
                title: "Tiếp nhận, đánh giá, phản ánh, kiến nghị của tổ chức xã hội",
                link: "#"
            },
            {
                title: "Danh sách các đánh giá, kiến nghị của tổ chức xã hội",
                link: "#"
            }
        ]
    },
    socials: [
        {
            icon: "<i class='fa-brands fa-facebook-f'></i>",
            key: "fb_link"
        },
        {
            icon: "<i class='fa-brands fa-twitter'></i>",
            key: "tw_link"
        },
        {
            icon: "<i class='fa-brands fa-instagram'></i>",
            key: "instagram_link"
        },
        {
            icon: "<i class='fa-brands fa-youtube'></i>",
            key: "yt_link"
        }
    ],
    langs: [
        {
            label: "English",
            value: "en",
            image: "/assets/language/en.png"
        },
        {
            label: "VietNam ",
            value: "vi",
            image: "/assets/language/vi.png"
        }
    ],
    currency: [
        {
            label: "VND",
            value: "vnd"
        },
        {
            label: "USD",
            value: "usd"
        }
    ]
};
async function getSiteConfig(queries) {
    // const uri = buildURIWithQueries('/config/site', queries);
    // const res = await apiFetch(uri);
    // return res.data;
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiFetchSites"])("/config/getAll");
}
const getAllLangs = async ()=>{
    // const res = await apiFetch("/profile/langs");
    // return res.data;
    return [
        {
            label: "English",
            value: "en",
            image: "/assets/language/en.png"
        },
        {
            label: "VietNam ",
            value: "vi",
            image: "/assets/language/vi.png"
        }
    ];
};
const getAllLangsByUrl = async (url)=>{
    // const res = await apiFetchFullUrl(url);
    // return res.data;
    return [
        {
            label: "English",
            value: "en",
            image: "/assets/language/en.png"
        },
        {
            label: "VietNam",
            value: "vi",
            image: "/assets/language/vi.png"
        }
    ];
};
const getAllCurrencies = async ()=>{
    // const res = await apiFetch("/profile/currencies");
    // return res.data;
    return [
        {
            label: "VND",
            value: "vnd"
        },
        {
            label: "USD",
            value: "usd"
        }
    ];
};
const getAllCurrenciesByUrl = async (url)=>{
    // const res = await apiFetchFullUrl(url);
    // return res.data;
    return [
        {
            label: "VND",
            value: "vnd"
        },
        {
            label: "USD",
            value: "usd"
        }
    ];
};
}),
"[project]/src/components/features/provider/ConfigProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConfigProvider,
    "useConfig",
    ()=>useConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const ConfigContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    config: {},
    setConfig: ()=>{}
});
function ConfigProvider({ children }) {
    const [config, setConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const handleFetchConfig = async ()=>{
        try {
            const resdata = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSiteConfig"])();
            setConfig(resdata);
        } catch (error) {
            console.error("❌ Error fetching site config:", error);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        handleFetchConfig();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ConfigContext.Provider, {
        value: {
            config,
            setConfig
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/features/provider/ConfigProvider.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
const useConfig = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ConfigContext);
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__357601b6._.js.map