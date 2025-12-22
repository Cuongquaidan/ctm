(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/api/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
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
    Object.entries(queries).forEach((param)=>{
        let [key, value] = param;
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
    return queryString ? "".concat(path, "?").concat(queryString) : path;
}
async function apiFetch(uri, options) {
    const accessToken = sessionStorage.getItem("accessToken");
    const res = await fetch("".concat(BASE_URL, "/").concat(uri), {
        ...options,
        headers: {
            Authorization: "Bearer ".concat(accessToken),
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
    const accessToken = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem("accessToken") : "TURBOPACK unreachable";
    const res = await fetch(fullUrl, {
        ...options,
        headers: {
            Authorization: "Bearer ".concat(accessToken),
            ...options.headers
        }
    });
    if (res.status === 401) {
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.removeItem("accessToken");
            window.location.href = "/login?expired=true";
        }
        return;
    }
    return res.json();
}
const BASE_URL_SITES = ("TURBOPACK compile-time value", "http://localhost:3000") || "";
async function apiFetchSites(uri, options) {
    try {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const url = "".concat(BASE_URL_SITES).concat(uri);
        const res = await fetch(url, {
            ...options,
            headers: {
                ...options === null || options === void 0 ? void 0 : options.headers
            }
        });
        if (!res.ok) {
            console.log("HTTP error! status: ".concat(res.status));
            return null;
        }
        const resjson = await res.json();
        if (resjson.status === 400) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(resjson.message || "Lỗi khi lấy dữ liệu");
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
        const accessToken = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem("accessToken") : "TURBOPACK unreachable";
        const url = "".concat(BASE_URL_CUSTOMERS).concat(uri);
        const res = await fetch(url, {
            ...options,
            headers: {
                Authorization: "Bearer ".concat(accessToken),
                "Secret-Key": "".concat(("TURBOPACK compile-time value", "honeynet.vn")),
                ...options === null || options === void 0 ? void 0 : options.headers
            }
        });
        const resjson = await res.json();
        // Xử lý JWT expired hoặc unauthorized
        if (resjson.msg === "jwt expired" || resjson.status === 401 || res.status === 401) {
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.removeItem("accessToken");
                // Chỉ hiển thị toast 1 lần duy nhất
                if (!sessionExpiredToastShown) {
                    sessionExpiredToastShown = true;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.");
                    setTimeout(()=>{
                        window.location.href = "/customers/login?expired=true";
                    }, 3000); // Delay 1s để user đọc được toast
                }
            }
            return;
        }
        if (!res.ok) {
            console.log("HTTP error! status: ".concat(res.status));
            return null;
        }
        if (resjson.status === 400) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(resjson.msg || "Lỗi khi lấy dữ liệu");
        }
        if (resjson.status === 403) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(resjson.msg || "Bạn không có quyền truy cập tài nguyên này");
        }
        if (resjson.status === 404) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Không tìm thấy tài nguyên yêu cầu");
        }
        if (resjson.status === 500) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Lỗi máy chủ, vui lòng thử lại sau");
        }
        return resjson.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/api/config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/api.ts [app-client] (ecmascript)");
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
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetchSites"])("/config/getAll");
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/features/provider/ConfigProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConfigProvider,
    "useConfig",
    ()=>useConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const ConfigContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    config: {},
    setConfig: ()=>{}
});
function ConfigProvider(param) {
    let { children } = param;
    _s();
    const [config, setConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const handleFetchConfig = async ()=>{
        try {
            const resdata = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSiteConfig"])();
            setConfig(resdata);
        } catch (error) {
            console.error("❌ Error fetching site config:", error);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConfigProvider.useEffect": ()=>{
            handleFetchConfig();
        }
    }["ConfigProvider.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConfigContext.Provider, {
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
_s(ConfigProvider, "IJYATpt50mJOvfVdU7yqc9CVBkI=");
_c = ConfigProvider;
const useConfig = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ConfigContext);
};
_s1(useConfig, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "ConfigProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_e309ac89._.js.map