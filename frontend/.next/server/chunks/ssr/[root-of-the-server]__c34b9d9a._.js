module.exports = [
"[project]/.next-internal/server/app/(sites)/(pages)/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/loading.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/(sites)/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(sites)/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/(sites)/(pages)/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(sites)/(pages)/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/lib/api/api.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-rsc] (ecmascript)");
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toast"].error(resjson.message || "Lỗi khi lấy dữ liệu");
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toast"].error(resjson.msg || "Lỗi khi lấy dữ liệu");
        }
        if (resjson.status === 403) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toast"].error(resjson.msg || "Bạn không có quyền truy cập tài nguyên này");
        }
        if (resjson.status === 404) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toast"].error("Không tìm thấy tài nguyên yêu cầu");
        }
        if (resjson.status === 500) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toast"].error("Lỗi máy chủ, vui lòng thử lại sau");
        }
        return resjson.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}
}),
"[project]/src/lib/api/advertisement.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAdvertisementById",
    ()=>getAdvertisementById
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/api.ts [app-rsc] (ecmascript)");
;
const getAdvertisementById = async (id)=>{
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiFetchSites"])(`/advertisements/detail/${id}`);
    return res;
};
}),
"[project]/src/components/features/banner/Advertisement1.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$advertisement$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/advertisement.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ImageError.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function Advertisement1({ item, id }) {
    let data = item || id ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$advertisement$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAdvertisementById"])(id) : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: " section-b-space",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "ratio_medium wow fadeIn",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "home-contain hover-effect",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        width: 400,
                        height: 1000,
                        src: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IMAGES_BASE_URL"]}/${data?.image}`,
                        className: "img-fluid lazyload w-full h-full object-cover",
                        style: {
                            aspectRatio: " 2/ 5"
                        },
                        alt: data?.name || 'honeynet'
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/banner/Advertisement1.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "home-detail p-top-left home-p-medium",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-yellow home-banner",
                                    children: data?.sale_name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/banner/Advertisement1.tsx",
                                    lineNumber: 28,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-uppercase fw-normal mb-0 theme-color",
                                    children: data?.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/banner/Advertisement1.tsx",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-uppercase fw-normal text-title",
                                    children: data?.sale_value
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/banner/Advertisement1.tsx",
                                    lineNumber: 30,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-3",
                                    children: data?.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/banner/Advertisement1.tsx",
                                    lineNumber: 31,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn-animation btn-sm mend-auto",
                                    children: [
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: data?.button_link || "#",
                                            style: {
                                                color: "white",
                                                fontStyle: "bold"
                                            },
                                            children: [
                                                data?.button_name,
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fa-solid fa-arrow-right icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/banner/Advertisement1.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/features/banner/Advertisement1.tsx",
                                            lineNumber: 32,
                                            columnNumber: 71
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/features/banner/Advertisement1.tsx",
                                    lineNumber: 32,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/features/banner/Advertisement1.tsx",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/banner/Advertisement1.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/banner/Advertisement1.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/features/banner/Advertisement1.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/features/banner/Advertisement1.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Advertisement1;
}),
"[project]/src/components/features/banner/Advertisement5.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$advertisement$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/advertisement.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ImageError.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function Advertisement5({ item, id }) {
    let data = item || id ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$advertisement$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAdvertisementById"])(id) : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: " section-b-space",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "ratio_156 section-t-space wow fadeIn",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "home-contain hover-effect",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        width: 400,
                        height: 600,
                        src: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IMAGES_BASE_URL"]}/${data?.image}`,
                        className: "bg-img lazyload w-full h-full object-cover",
                        style: {
                            aspectRatio: "2 / 3"
                        },
                        alt: data?.name || 'honeynet'
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/banner/Advertisement5.tsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "home-detail p-top-left home-p-medium",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-uppercase fw-normal theme-color fw-bold",
                                    children: data?.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/banner/Advertisement5.tsx",
                                    lineNumber: 22,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn-animation btn-sm mend-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: data?.button_link || "#",
                                        style: {
                                            color: "white",
                                            fontStyle: "bold"
                                        },
                                        children: [
                                            data?.button_name,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "fa-solid fa-arrow-right icon"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/banner/Advertisement5.tsx",
                                                lineNumber: 29,
                                                columnNumber: 39
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/banner/Advertisement5.tsx",
                                        lineNumber: 25,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/banner/Advertisement5.tsx",
                                    lineNumber: 23,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/features/banner/Advertisement5.tsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/banner/Advertisement5.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/banner/Advertisement5.tsx",
                lineNumber: 14,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/features/banner/Advertisement5.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/features/banner/Advertisement5.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Advertisement5;
}),
"[project]/src/components/features/banner/Banner1V2.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ImageError.tsx [app-rsc] (ecmascript)");
;
;
;
function Banner1V2({ item }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "home-contain h-100 ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "",
                style: {
                    backgroundImage: `url(${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IMAGES_BASE_URL"]}/${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    display: "block",
                    height: "100%"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    width: 1048.66,
                    height: 690,
                    src: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IMAGES_BASE_URL"]}/${item.image}`,
                    className: "lazyload w-full h-full object-cover hidden",
                    alt: "Giao hàng tận nơi"
                }, void 0, false, {
                    fileName: "[project]/src/components/features/banner/Banner1V2.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/features/banner/Banner1V2.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "home-detail p-center-left w-75",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                            children: [
                                item.sale_name,
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: item.sale_value
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/banner/Banner1V2.tsx",
                                    lineNumber: 26,
                                    columnNumber: 32
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/features/banner/Banner1V2.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-uppercase",
                            children: item.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/banner/Banner1V2.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "w-75 d-none d-sm-block",
                            children: item.description
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/banner/Banner1V2.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn btn-animation mt-xxl-4 mt-2 home-button mend-auto",
                            children: [
                                item.button_name,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "fa-solid fa-right-long icon"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/banner/Banner1V2.tsx",
                                    lineNumber: 29,
                                    columnNumber: 103
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/features/banner/Banner1V2.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/features/banner/Banner1V2.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/features/banner/Banner1V2.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/banner/Banner1V2.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Banner1V2;
}),
"[project]/src/components/features/banner/Banner2V2.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ImageError.tsx [app-rsc] (ecmascript)");
;
;
;
function Banner2V2({ item }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "home-contain",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                width: 415,
                height: 333,
                src: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IMAGES_BASE_URL"]}/${item.image}`,
                className: "bg-Image lazyload w-full h-full object-cover",
                alt: item.name
            }, void 0, false, {
                fileName: "[project]/src/components/features/banner/Banner2V2.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "home-detail p-center-left home-p-sm ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-0 text-danger",
                            children: [
                                item.sale_value,
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "discount text-title",
                                    children: item.sale_name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/banner/Banner2V2.tsx",
                                    lineNumber: 15,
                                    columnNumber: 62
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/features/banner/Banner2V2.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "theme-color",
                            children: item.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/banner/Banner2V2.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "w-75",
                            children: item.description
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/banner/Banner2V2.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: "shop-button",
                            children: [
                                item.button_name,
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "fa-solid fa-right-long"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/banner/Banner2V2.tsx",
                                    lineNumber: 18,
                                    columnNumber: 66
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/features/banner/Banner2V2.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/features/banner/Banner2V2.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/features/banner/Banner2V2.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/banner/Banner2V2.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Banner2V2;
}),
"[project]/src/components/features/banner/Banner3V2.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ImageError.tsx [app-rsc] (ecmascript)");
;
;
;
function Banner3V2({ item }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "home-contain",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                width: 415,
                height: 333,
                src: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IMAGES_BASE_URL"]}/${item.image}`,
                className: "bg-Image lazyload w-full h-full object-cover",
                alt: item.name
            }, void 0, false, {
                fileName: "[project]/src/components/features/banner/Banner3V2.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "home-detail p-center-left home-p-sm ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "mt-0 theme-color fw-bold",
                            children: item.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/banner/Banner3V2.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-danger",
                            children: item.sale_name
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/banner/Banner3V2.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "organic",
                            children: item.description
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/banner/Banner3V2.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: "shop-button",
                            children: [
                                item.button_name,
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "fa-solid fa-right-long"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/banner/Banner3V2.tsx",
                                    lineNumber: 19,
                                    columnNumber: 66
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/features/banner/Banner3V2.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/features/banner/Banner3V2.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/features/banner/Banner3V2.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/banner/Banner3V2.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Banner3V2;
}),
"[project]/src/components/features/banner/BannerSliderV2.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/features/banner/BannerSliderV2.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/features/banner/BannerSliderV2.tsx <module evaluation>", "default");
}),
"[project]/src/components/features/banner/BannerSliderV2.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/features/banner/BannerSliderV2.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/features/banner/BannerSliderV2.tsx", "default");
}),
"[project]/src/components/features/banner/BannerSliderV2.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$BannerSliderV2$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/features/banner/BannerSliderV2.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$BannerSliderV2$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/features/banner/BannerSliderV2.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$BannerSliderV2$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/lib/api/banner.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBannersByArr",
    ()=>getBannersByArr
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/api.ts [app-rsc] (ecmascript)");
;
const getBannersByArr = async (arr)=>{
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiFetchSites"])("/banners/getDetailsByArrayIds", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            banner_ids: arr
        })
    });
    return res;
};
}),
"[project]/src/components/features/banner/LayoutBanners1.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$Banner1V2$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/banner/Banner1V2.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$Banner2V2$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/banner/Banner2V2.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$Banner3V2$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/banner/Banner3V2.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$BannerSliderV2$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/banner/BannerSliderV2.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$banner$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/banner.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function LayoutBanners1({ arr }) {
    const banners = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$banner$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBannersByArr"])(arr);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "row g-4 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-xl-8 ratio_65 wow fadeIn ",
                        style: {
                            aspectRatio: "100/65"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$Banner1V2$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            item: banners[0]
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/banner/LayoutBanners1.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/banner/LayoutBanners1.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-xl-4 ratio_65",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "row g-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-xl-12 col-md-6 wow fadeIn",
                                    "data-wow-daley": "0.1s",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$Banner2V2$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        item: banners[1]
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/banner/LayoutBanners1.tsx",
                                        lineNumber: 24,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/banner/LayoutBanners1.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-xl-12 col-md-6 wow fadeIn",
                                    "data-wow-daley": "0.15s",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$Banner3V2$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        item: banners[2]
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/banner/LayoutBanners1.tsx",
                                        lineNumber: 27,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/banner/LayoutBanners1.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/features/banner/LayoutBanners1.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/banner/LayoutBanners1.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/banner/LayoutBanners1.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$BannerSliderV2$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                items: banners.slice(3)
            }, void 0, false, {
                fileName: "[project]/src/components/features/banner/LayoutBanners1.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = LayoutBanners1;
}),
"[project]/src/components/features/category/CategoryMenuItem.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ImageError.tsx [app-rsc] (ecmascript)");
;
;
;
function CategoryMenuItem({ item, index }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "wow fadeInUp ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "category-list",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    width: 50,
                    height: 50,
                    src: item.image ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IMAGES_BASE_URL"] + "/" + item.image : '/images/logo.png',
                    "data-src": item.image ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IMAGES_BASE_URL"] + "/" + item.image : '/images/logo.png',
                    className: "lazyload",
                    alt: item.description || "honeynet",
                    style: {
                        height: "40px",
                        width: "40px"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/features/category/CategoryMenuItem.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "line-height-15 ",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: item.alias,
                        children: item.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/category/CategoryMenuItem.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/features/category/CategoryMenuItem.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/category/CategoryMenuItem.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/features/category/CategoryMenuItem.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = CategoryMenuItem;
}),
"[project]/src/assets/data/Home.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blogData",
    ()=>blogData,
    "categoryMenuData",
    ()=>categoryMenuData,
    "data",
    ()=>data
]);
const categoryMenuData = [
    {
        name: "Máy móc xây dựng",
        link: "/may-moc-xay-dung",
        image: "/styles/logo.png",
        slug: "may-moc-xay-dung"
    },
    {
        name: "Máy móc y tế",
        link: "/may-moc-y-te",
        image: "/styles/logo.png",
        slug: "may-moc-y-te"
    },
    {
        name: "Thiết bị phẫu thuật",
        link: "/thiet-bi-phau-thuat",
        image: "/styles/logo.png",
        slug: "thiet-bi-phau-thuat"
    },
    {
        name: "Máy tưới tiêu",
        link: "/may-tuoi-tieu",
        image: "/styles/logo.png",
        slug: "may-tuoi-tieu"
    },
    {
        name: "Máy cày",
        link: "/may-cay",
        image: "/styles/logo.png",
        slug: "may-cay"
    },
    {
        name: "Nồi cơm điện",
        link: "/noi-com-dien",
        image: "/styles/logo.png",
        slug: "noi-com-dien"
    },
    {
        name: "Máy bón phân",
        link: "/may-bon-phan",
        image: "/styles/logo.png",
        slug: "may-bon-phan"
    },
    {
        name: "Máy gặt",
        link: "/may-gat",
        image: "/styles/logo.png",
        slug: "may-gat"
    },
    {
        name: "Máy chẩn đoán hình ảnh",
        link: "/may-chan-doan-hinh-anh",
        image: "/styles/logo.png",
        slug: "may-chan-doan-hinh-anh"
    },
    {
        name: "Thiết bị hồi sức cấp cứu",
        link: "/thiet-bi-hoi-suc-cap-cuu",
        image: "/styles/logo.png",
        slug: "thiet-bi-hoi-suc-cap-cuu"
    },
    {
        name: "Máy giặt",
        link: "/may-giat",
        image: "/styles/logo.png",
        slug: "may-giat"
    },
    {
        name: "Máy móc nông nghiệp",
        link: "/may-moc-nong-nghiep",
        image: "/styles/logo.png",
        slug: "may-moc-nong-nghiep"
    },
    {
        name: "Máy nâng hạ",
        link: "/may-nang-ha",
        image: "/styles/logo.png",
        slug: "may-nang-ha"
    },
    {
        name: "Máy hút bụi",
        link: "/may-hut-bui",
        image: "/styles/logo.png",
        slug: "may-hut-bui"
    },
    {
        name: "Tủ lạnh",
        link: "/tu-lanh",
        image: "/styles/logo.png",
        slug: "tu-lanh"
    },
    {
        name: "Tivi",
        link: "/tivi",
        image: "/styles/logo.png",
        slug: "tivi"
    },
    {
        name: "Thiết bị mạng",
        link: "/thiet-bi-mang",
        image: "/styles/logo.png",
        slug: "thiet-bi-mang"
    },
    {
        name: "Đồ dùng nhà bếp",
        link: "/do-dung-nha-bep",
        image: "/styles/logo.png",
        slug: "do-dung-nha-bep"
    },
    {
        name: "Máy thi công",
        link: "/may-thi-cong",
        image: "/styles/logo.png",
        slug: "may-thi-cong"
    }
];
const data = [
    {
        // Product 1: Café đen
        id: 1,
        store_id: 1,
        code: "CF-101",
        alias: "cafe-den",
        name: "Café đen",
        excerpt: "Cafe nguyên chất, đã ủ sẵn",
        description: null,
        content: `<h2>Thông tin sản phẩm</h2>\n\n<p>Táo gala là&nbsp;trái cây&nbsp;nhập khẩu từ Pháp... </p>`,
        meta_title: "Café đen",
        meta_description: "Cafe nguyên chất, đã ủ sẵn",
        meta_keywords: "Café đen",
        detail_info: JSON.stringify([
            {
                "title": "Giá trị dinh dưỡng",
                "info": "Táo gala có lớp vỏ giàu chất xơ, thịt táo giàu vitamin A, vitamin C, vitamin B1, vitamin B2,...tốt cho sức khỏe."
            },
            {
                "title": "Các món ăn ngon",
                "info": "Táo gala có thể chế biến thành nhiều món ăn, thức uống hấp dẫn như salad táo, nước ép táo, bánh ngọt, thạch táo,..."
            },
            {
                "title": "Xuất xứ",
                "info": "Pháp"
            },
            {
                "title": "Bảo quản",
                "info": "Nhiệt độ tủ mát"
            }
        ]),
        image: "/images/banner/1.jpg",
        gallery: '["/images/banner/1.jpg", "/images/banner/2.jpg"]',
        hot: 0,
        package_id: 1,
        category_ids: "[]",
        view: 0,
        review_total: 0,
        review_point: 5,
        review_point_1: 0,
        review_point_2: 0,
        review_point_3: 0,
        review_point_4: 0,
        review_point_5: 0,
        sold: 0,
        reason_cancel: null,
        status: 0,
        is_deleted: 0,
        created_at: "2025-11-24T04:46:51.000Z",
        updated_at: "2025-11-24T04:46:51.000Z",
        created_by: 1,
        updated_by: 1,
        prices: [
            {
                id: 1,
                product_id: 1,
                package_id: 1,
                is_dist: 1,
                price: 10000,
                sold_quantity: 0,
                remaining_quantity: 100,
                quantity: 100,
                updated_at: "2025-11-24T04:46:51.000Z",
                productName: "Café đen",
                packageName: "gói",
                expense: 0,
                promotion_fullname: null,
                promotion_type: null,
                discount_value: 0,
                discount_type: null,
                product_price_id: 1,
                promotion_id: null,
                promotion_quantity: null,
                start_date: null,
                end_date: null,
                start_time: null,
                end_time: null
            }
        ]
    },
    {
        // Product 2: Cua đá (Có Flashsale)
        id: 2,
        store_id: 2,
        code: "SEA-202",
        alias: "cua-da",
        name: "Cua đá",
        excerpt: "Có flashsale 10%",
        description: null,
        content: `<h2>Thông tin sản phẩm</h2>\n\n<p>Táo gala là&nbsp;trái cây&nbsp;nhập khẩu từ Pháp... </p>`,
        meta_title: "Cua đá",
        meta_description: "Cua đá tươi, đang flashsale",
        meta_keywords: "Cua đá, Flashsale",
        detail_info: JSON.stringify([
            {
                title: "Loại",
                info: "Hải sản tươi sống"
            },
            {
                title: "Xuất xứ",
                info: "Việt Nam"
            },
            {
                title: "Trọng lượng",
                info: "500g - 1kg/con"
            },
            {
                title: "Bảo quản",
                info: "Nhiệt độ tủ mát 0-4°C"
            }
        ]),
        image: "/images/banner/1.jpg",
        gallery: JSON.stringify([
            "/images/banner/1.jpg",
            "/images/banner/2.jpg",
            "/images/banner/3.jpg",
            "/images/banner/4.jpg",
            "/images/banner/5.jpg",
            "/images/banner/6.jpg"
        ]),
        hot: 1,
        package_id: 1,
        category_ids: "[]",
        view: 0,
        review_total: 0,
        review_point: 5,
        review_point_1: 0,
        review_point_2: 0,
        review_point_3: 0,
        review_point_4: 0,
        review_point_5: 0,
        sold: 0,
        reason_cancel: null,
        status: 1,
        is_deleted: 0,
        created_at: "2025-11-24T04:46:51.000Z",
        updated_at: "2025-11-24T04:46:51.000Z",
        created_by: 2,
        updated_by: 2,
        prices: [
            {
                id: 2,
                product_id: 2,
                package_id: 1,
                is_dist: 1,
                price: 175000,
                sold_quantity: 0,
                remaining_quantity: 50,
                quantity: 50,
                updated_at: "2025-11-24T04:46:51.000Z",
                productName: "Cua đá",
                packageName: "kg",
                expense: 0,
                promotion_fullname: "Giảm giá Flashsale",
                promotion_type: "PERCENT",
                discount_value: 10,
                discount_type: "PERCENT",
                product_price_id: 2,
                promotion_id: 1,
                promotion_quantity: 50,
                start_date: new Date().toISOString(),
                end_date: new Date(new Date().getTime() + 60 * 60 * 1000).toISOString(),
                start_time: null,
                end_time: null
            }
        ]
    },
    {
        // Product 3: Gạo
        id: 3,
        store_id: 3,
        code: "GRN-303",
        alias: "gao",
        name: "Gạo",
        excerpt: "Gạo sạch, chất lượng cao.",
        description: null,
        content: `<h2>Thông tin sản phẩm</h2>\n\n<p>Táo gala là&nbsp;trái cây&nbsp;nhập khẩu từ Pháp... </p>`,
        meta_title: "Gạo",
        meta_description: "Gạo sạch, chất lượng cao",
        meta_keywords: "Gạo",
        detail_info: JSON.stringify([
            {
                title: "Loại",
                info: "Gạo sạch hữu cơ"
            },
            {
                title: "Xuất xứ",
                info: "Việt Nam"
            },
            {
                title: "Khối lượng",
                info: "5kg/túi"
            },
            {
                title: "Bảo quản",
                info: "Nơi khô ráo, thoáng mát"
            }
        ]),
        image: "/images/banner/1.jpg",
        gallery: '["/images/banner/1.jpg", "/images/banner/2.jpg"]',
        hot: 0,
        package_id: 1,
        category_ids: "[]",
        view: 0,
        review_total: 0,
        review_point: 5,
        review_point_1: 0,
        review_point_2: 0,
        review_point_3: 0,
        review_point_4: 0,
        review_point_5: 0,
        sold: 0,
        reason_cancel: null,
        status: 1,
        is_deleted: 0,
        created_at: "2025-11-24T04:46:51.000Z",
        updated_at: "2025-11-24T04:46:51.000Z",
        created_by: 3,
        updated_by: 3,
        prices: [
            {
                id: 3,
                product_id: 3,
                package_id: 1,
                is_dist: 1,
                price: 120000,
                sold_quantity: 0,
                remaining_quantity: 200,
                quantity: 200,
                updated_at: "2025-11-24T04:46:51.000Z",
                productName: "Gạo",
                packageName: "bao",
                expense: 0,
                promotion_fullname: null,
                promotion_type: null,
                discount_value: 0,
                discount_type: null,
                product_price_id: 3,
                promotion_id: null,
                promotion_quantity: null,
                start_date: null,
                end_date: null,
                start_time: null,
                end_time: null
            }
        ]
    },
    {
        // Product 4: Hoa quả
        id: 4,
        store_id: 4,
        code: "FRT-404",
        alias: "hoa-qua",
        name: "Hoa quả",
        excerpt: "Hoa quả tươi, nhập khẩu.",
        description: null,
        content: `<h2>Thông tin sản phẩm</h2>\n\n<p>Táo gala là&nbsp;trái cây&nbsp;nhập khẩu từ Pháp... </p>`,
        meta_title: "Hoa quả",
        meta_description: "Hoa quả tươi, nhập khẩu",
        meta_keywords: "Hoa quả",
        detail_info: JSON.stringify([
            {
                title: "Loại",
                info: "Trái cây tươi nhập khẩu"
            },
            {
                title: "Xuất xứ",
                info: "Mỹ, Úc, Nhật Bản"
            },
            {
                title: "Bảo quản",
                info: "Nhiệt độ phòng hoặc tủ lạnh"
            },
            {
                title: "Lưu ý",
                info: "Rửa sạch trước khi dùng"
            }
        ]),
        image: "/images/banner/1.jpg",
        gallery: '["/images/banner/1.jpg", "/images/banner/2.jpg"]',
        hot: 0,
        package_id: 1,
        category_ids: "[]",
        view: 0,
        review_total: 0,
        review_point: 5,
        review_point_1: 0,
        review_point_2: 0,
        review_point_3: 0,
        review_point_4: 0,
        review_point_5: 0,
        sold: 0,
        reason_cancel: null,
        status: 1,
        is_deleted: 0,
        created_at: "2025-11-24T04:46:51.000Z",
        updated_at: "2025-11-24T04:46:51.000Z",
        created_by: 4,
        updated_by: 4,
        prices: [
            {
                id: 4,
                product_id: 4,
                package_id: 1,
                is_dist: 1,
                price: 20000,
                sold_quantity: 0,
                remaining_quantity: 150,
                quantity: 150,
                updated_at: "2025-11-24T04:46:51.000Z",
                productName: "Hoa quả",
                packageName: "kg",
                expense: 0,
                promotion_fullname: null,
                promotion_type: null,
                discount_value: 0,
                discount_type: null,
                product_price_id: 4,
                promotion_id: null,
                promotion_quantity: null,
                start_date: null,
                end_date: null,
                start_time: null,
                end_time: null
            }
        ]
    },
    {
        // Product 5: Cá nâu
        id: 5,
        store_id: 5,
        code: "SEA-505",
        alias: "ca-nau",
        name: "Cá nâu",
        excerpt: "Cá nâu tươi, đang có deal hot.",
        description: null,
        content: `<h2>Thông tin sản phẩm</h2>\n\n<p>Táo gala là&nbsp;trái cây&nbsp;nhập khẩu từ Pháp... </p>`,
        meta_title: "Cá nâu",
        meta_description: "Cá nâu tươi, đang có deal hot",
        meta_keywords: "Cá nâu",
        detail_info: JSON.stringify([
            {
                title: "Loại",
                info: "Hải sản tươi sống"
            },
            {
                title: "Xuất xứ",
                info: "Việt Nam"
            },
            {
                title: "Trọng lượng",
                info: "1-2kg/con"
            },
            {
                title: "Bảo quản",
                info: "Nhiệt độ tủ đá 0-4°C"
            }
        ]),
        image: "/images/banner/1.jpg",
        gallery: '["/images/banner/1.jpg", "/images/banner/2.jpg"]',
        hot: 1,
        package_id: 1,
        category_ids: "[]",
        view: 0,
        review_total: 0,
        review_point: 5,
        review_point_1: 0,
        review_point_2: 0,
        review_point_3: 0,
        review_point_4: 0,
        review_point_5: 0,
        sold: 0,
        reason_cancel: null,
        status: 1,
        is_deleted: 0,
        created_at: "2025-11-24T04:46:51.000Z",
        updated_at: "2025-11-24T04:46:51.000Z",
        created_by: 5,
        updated_by: 5,
        prices: [
            {
                id: 5,
                product_id: 5,
                package_id: 1,
                is_dist: 1,
                price: 250000,
                sold_quantity: 0,
                remaining_quantity: 80,
                quantity: 80,
                updated_at: "2025-11-24T04:46:51.000Z",
                productName: "Cá nâu",
                packageName: "kg",
                expense: 0,
                promotion_fullname: null,
                promotion_type: null,
                discount_value: 0,
                discount_type: null,
                product_price_id: 5,
                promotion_id: null,
                promotion_quantity: null,
                start_date: null,
                end_date: null,
                start_time: null,
                end_time: null
            }
        ]
    },
    {
        // Product 6: Mì Cay Nongshim Shinucup
        id: 6,
        store_id: 1,
        code: "NOO-606",
        alias: "mi-cay-nongshim-shinucup",
        name: "Mì Cay Nongshim Shinucup",
        excerpt: "Mì cay nhập khẩu từ Hàn Quốc.",
        description: null,
        content: `<h2>Thông tin sản phẩm</h2>\n\n<p>Táo gala là&nbsp;trái cây&nbsp;nhập khẩu từ Pháp... </p>`,
        meta_title: "Mì Cay Nongshim Shinucup",
        meta_description: "Mì cay nhập khẩu từ Hàn Quốc",
        meta_keywords: "Mì Cay Nongshim Shinucup",
        detail_info: JSON.stringify([
            {
                title: "Thương hiệu",
                info: "Nongshim"
            },
            {
                title: "Xuất xứ",
                info: "Hàn Quốc"
            },
            {
                title: "Khối lượng",
                info: "75g/gói"
            },
            {
                title: "Bảo quản",
                info: "Nơi khô ráo, tránh ẩm mốc"
            }
        ]),
        image: "/images/banner/1.jpg",
        gallery: '["/images/banner/1.jpg", "/images/banner/2.jpg"]',
        hot: 0,
        package_id: 1,
        category_ids: "[]",
        view: 0,
        review_total: 0,
        review_point: 5,
        review_point_1: 0,
        review_point_2: 0,
        review_point_3: 0,
        review_point_4: 0,
        review_point_5: 0,
        sold: 0,
        reason_cancel: null,
        status: 1,
        is_deleted: 0,
        created_at: "2025-11-24T04:46:51.000Z",
        updated_at: "2025-11-24T04:46:51.000Z",
        created_by: 1,
        updated_by: 1,
        prices: [
            {
                id: 6,
                product_id: 6,
                package_id: 1,
                is_dist: 1,
                price: 30000,
                sold_quantity: 0,
                remaining_quantity: 120,
                quantity: 120,
                updated_at: "2025-11-24T04:46:51.000Z",
                productName: "Mì Cay Nongshim Shinucup",
                packageName: "gói",
                expense: 0,
                promotion_fullname: null,
                promotion_type: null,
                discount_value: 0,
                discount_type: null,
                product_price_id: 6,
                promotion_id: null,
                promotion_quantity: null,
                start_date: null,
                end_date: null,
                start_time: null,
                end_time: null
            }
        ]
    },
    {
        // Product 7: Khô cá khoai
        id: 7,
        store_id: 2,
        code: "SEA-707",
        alias: "kho-ca-khoai",
        name: "Khô cá khoai",
        excerpt: "Cá khoai đã phơi khô.",
        description: null,
        content: `<h2>Thông tin sản phẩm</h2>\n\n<p>Táo gala là&nbsp;trái cây&nbsp;nhập khẩu từ Pháp... </p>`,
        meta_title: "Khô cá khoai",
        meta_description: "Cá khoai đã phơi khô",
        meta_keywords: "Khô cá khoai",
        detail_info: JSON.stringify([
            {
                title: "Loại",
                info: "Hải sản khô"
            },
            {
                title: "Xuất xứ",
                info: "Việt Nam"
            },
            {
                title: "Chế biến",
                info: "Phơi khô tự nhiên"
            },
            {
                title: "Bảo quản",
                info: "Nơi khô ráo, thoáng mát"
            }
        ]),
        image: "/images/banner/1.jpg",
        gallery: '["/images/banner/1.jpg", "/images/banner/2.jpg"]',
        hot: 1,
        package_id: 1,
        category_ids: "[]",
        view: 0,
        review_total: 0,
        review_point: 5,
        review_point_1: 0,
        review_point_2: 0,
        review_point_3: 0,
        review_point_4: 0,
        review_point_5: 0,
        sold: 0,
        reason_cancel: null,
        status: 1,
        is_deleted: 0,
        created_at: "2025-11-24T04:46:51.000Z",
        updated_at: "2025-11-24T04:46:51.000Z",
        created_by: 2,
        updated_by: 2,
        prices: [
            {
                id: 7,
                product_id: 7,
                package_id: 1,
                is_dist: 1,
                price: 500000,
                sold_quantity: 0,
                remaining_quantity: 60,
                quantity: 60,
                updated_at: "2025-11-24T04:46:51.000Z",
                productName: "Khô cá khoai",
                packageName: "kg",
                expense: 0,
                promotion_fullname: null,
                promotion_type: null,
                discount_value: 0,
                discount_type: null,
                product_price_id: 7,
                promotion_id: null,
                promotion_quantity: null,
                start_date: null,
                end_date: null,
                start_time: null,
                end_time: null
            }
        ]
    },
    {
        // Product 8: Tôm sú (Hết hàng)
        id: 8,
        store_id: 3,
        code: "SEA-808",
        alias: "tom-su",
        name: "Tôm sú",
        excerpt: "Tôm sú tươi, hiện đang hết hàng.",
        description: null,
        content: `<h2>Thông tin sản phẩm</h2>\n\n<p>Táo gala là&nbsp;trái cây&nbsp;nhập khẩu từ Pháp... </p>`,
        meta_title: "Tôm sú",
        meta_description: "Tôm sú tươi, hiện đang hết hàng",
        meta_keywords: "Tôm sú",
        detail_info: JSON.stringify([
            {
                title: "Loại",
                info: "Hải sản tươi sống"
            },
            {
                title: "Xuất xứ",
                info: "Việt Nam"
            },
            {
                title: "Kích thước",
                info: "10-15 con/kg"
            },
            {
                title: "Bảo quản",
                info: "Nhiệt độ tủ đá 0-4°C"
            }
        ]),
        image: "/images/banner/1.jpg",
        gallery: '["/images/banner/1.jpg", "/images/banner/2.jpg"]',
        hot: 0,
        package_id: 1,
        category_ids: "[]",
        view: 0,
        review_total: 0,
        review_point: 5,
        review_point_1: 0,
        review_point_2: 0,
        review_point_3: 0,
        review_point_4: 0,
        review_point_5: 0,
        sold: 0,
        reason_cancel: null,
        status: 0,
        is_deleted: 0,
        created_at: "2025-11-24T04:46:51.000Z",
        updated_at: "2025-11-24T04:46:51.000Z",
        created_by: 3,
        updated_by: 3,
        prices: [
            {
                id: 8,
                product_id: 8,
                package_id: 1,
                is_dist: 1,
                price: 0,
                sold_quantity: 0,
                remaining_quantity: 0,
                quantity: 0,
                updated_at: "2025-11-24T04:46:51.000Z",
                productName: "Tôm sú",
                packageName: "kg",
                expense: 0,
                promotion_fullname: null,
                promotion_type: null,
                discount_value: 0,
                discount_type: null,
                product_price_id: 8,
                promotion_id: null,
                promotion_quantity: null,
                start_date: null,
                end_date: null,
                start_time: null,
                end_time: null
            }
        ]
    },
    {
        // Product 9: My omachi
        id: 9,
        store_id: 4,
        code: "NOO-909",
        alias: "my-omachi",
        name: "My omachi",
        excerpt: "Mì Omachi, sợi khoai tây.",
        description: null,
        content: `<h2>Thông tin sản phẩm</h2>\n\n<p>Táo gala là&nbsp;trái cây&nbsp;nhập khẩu từ Pháp... </p>`,
        meta_title: "My omachi",
        meta_description: "Mì Omachi, sợi khoai tây",
        meta_keywords: "My omachi",
        detail_info: JSON.stringify([
            {
                title: "Thương hiệu",
                info: "Omachi"
            },
            {
                title: "Xuất xứ",
                info: "Việt Nam"
            },
            {
                title: "Khối lượng",
                info: "80g/gói"
            },
            {
                title: "Bảo quản",
                info: "Nơi khô ráo, thoáng mát"
            }
        ]),
        image: "/images/banner/1.jpg",
        gallery: '["/images/banner/1.jpg", "/images/banner/2.jpg"]',
        hot: 0,
        package_id: 1,
        category_ids: "[]",
        view: 0,
        review_total: 0,
        review_point: 5,
        review_point_1: 0,
        review_point_2: 0,
        review_point_3: 0,
        review_point_4: 0,
        review_point_5: 0,
        sold: 0,
        reason_cancel: null,
        status: 1,
        is_deleted: 0,
        created_at: "2025-11-24T04:46:51.000Z",
        updated_at: "2025-11-24T04:46:51.000Z",
        created_by: 4,
        updated_by: 4,
        prices: [
            {
                id: 9,
                product_id: 9,
                package_id: 1,
                is_dist: 1,
                price: 10000,
                sold_quantity: 0,
                remaining_quantity: 300,
                quantity: 300,
                updated_at: "2025-11-24T04:46:51.000Z",
                productName: "My omachi",
                packageName: "gói",
                expense: 0,
                promotion_fullname: null,
                promotion_type: null,
                discount_value: 0,
                discount_type: null,
                product_price_id: 9,
                promotion_id: null,
                promotion_quantity: null,
                start_date: null,
                end_date: null,
                start_time: null,
                end_time: null
            }
        ]
    },
    {
        // Product 10: Vop Cá Mau
        id: 10,
        store_id: 5,
        code: "SEA-1010",
        alias: "vop-ca-mau",
        name: "Vop Cá Mau",
        excerpt: "Vop tươi sống từ Cà Mau.",
        description: null,
        content: `<h2>Thông tin sản phẩm</h2>\n\n<p>Táo gala là&nbsp;trái cây&nbsp;nhập khẩu từ Pháp... </p>`,
        meta_title: "Vop Cá Mau",
        meta_description: "Vop tươi sống từ Cà Mau",
        meta_keywords: "Vop Cá Mau",
        detail_info: JSON.stringify([
            {
                title: "Loại",
                info: "Hải sản tươi sống"
            },
            {
                title: "Xuất xứ",
                info: "Cà Mau, Việt Nam"
            },
            {
                title: "Kích thước",
                info: "300-500g/con"
            },
            {
                title: "Bảo quản",
                info: "Nhiệt độ tủ đá 0-4°C"
            }
        ]),
        image: "/images/banner/1.jpg",
        gallery: '["/images/banner/1.jpg", "/images/banner/2.jpg"]',
        hot: 1,
        package_id: 1,
        category_ids: "[]",
        view: 0,
        review_total: 0,
        review_point: 5,
        review_point_1: 0,
        review_point_2: 0,
        review_point_3: 0,
        review_point_4: 0,
        review_point_5: 0,
        sold: 0,
        reason_cancel: null,
        status: 1,
        is_deleted: 0,
        created_at: "2025-11-24T04:46:51.000Z",
        updated_at: "2025-11-24T04:46:51.000Z",
        created_by: 5,
        updated_by: 5,
        prices: [
            {
                id: 10,
                product_id: 10,
                package_id: 1,
                is_dist: 1,
                price: 200000,
                sold_quantity: 0,
                remaining_quantity: 90,
                quantity: 90,
                updated_at: "2025-11-24T04:46:51.000Z",
                productName: "Vop Cá Mau",
                packageName: "kg",
                expense: 0,
                promotion_fullname: null,
                promotion_type: null,
                discount_value: 0,
                discount_type: null,
                product_price_id: 10,
                promotion_id: null,
                promotion_quantity: null,
                start_date: null,
                end_date: null,
                start_time: null,
                end_time: null
            }
        ]
    },
    {
        // Product 11: Cua Cá Mau (Có Flashsale)
        id: 11,
        store_id: 1,
        code: "SEA-1111",
        alias: "cua-ca-mau",
        name: "Cua Cá Mau",
        excerpt: "Cua Cà Mau tươi ngon, thịt chắc.",
        description: null,
        content: `<h2>Thông tin sản phẩm</h2>\n\n<p>Táo gala là&nbsp;trái cây&nbsp;nhập khẩu từ Pháp... </p>`,
        meta_title: "Cua Cá Mau",
        meta_description: "Cua Cà Mau tươi ngon, thịt chắc",
        meta_keywords: "Cua Cá Mau",
        detail_info: JSON.stringify([
            {
                title: "Loại",
                info: "Hải sản tươi sống"
            },
            {
                title: "Xuất xứ",
                info: "Cà Mau, Việt Nam"
            },
            {
                title: "Trọng lượng",
                info: "500g - 1kg/con"
            },
            {
                title: "Bảo quản",
                info: "Nhiệt độ tủ mát 0-4°C"
            }
        ]),
        image: "/images/banner/1.jpg",
        gallery: '["/images/banner/1.jpg", "/images/banner/2.jpg"]',
        hot: 1,
        package_id: 1,
        category_ids: "[]",
        view: 0,
        review_total: 0,
        review_point: 5,
        review_point_1: 0,
        review_point_2: 0,
        review_point_3: 0,
        review_point_4: 0,
        review_point_5: 0,
        sold: 0,
        reason_cancel: null,
        status: 1,
        is_deleted: 0,
        created_at: "2025-11-24T04:46:51.000Z",
        updated_at: "2025-11-24T04:46:51.000Z",
        created_by: 1,
        updated_by: 1,
        prices: [
            {
                id: 11,
                product_id: 11,
                package_id: 1,
                is_dist: 1,
                price: 150000,
                sold_quantity: 0,
                remaining_quantity: 70,
                quantity: 70,
                updated_at: "2025-11-24T04:46:51.000Z",
                productName: "Cua Cá Mau",
                packageName: "kg",
                expense: 0,
                promotion_fullname: null,
                promotion_type: null,
                discount_value: 0,
                discount_type: null,
                product_price_id: 11,
                promotion_id: null,
                promotion_quantity: null,
                start_date: new Date().toISOString(),
                end_date: new Date(new Date().getTime() + 60 * 60 * 1000).toISOString(),
                start_time: null,
                end_time: null
            }
        ]
    },
    {
        // Product 12: testes
        id: 12,
        store_id: 2,
        code: "TST-1212",
        alias: "testes",
        name: "testes",
        excerpt: "Sản phẩm dùng để kiểm tra.",
        description: null,
        content: `<h2>Thông tin sản phẩm</h2>\n\n<p>Táo gala là&nbsp;trái cây&nbsp;nhập khẩu từ Pháp... </p>`,
        meta_title: "testes",
        meta_description: "Sản phẩm dùng để kiểm tra",
        meta_keywords: "testes",
        detail_info: JSON.stringify([
            {
                title: "Loại",
                info: "Sản phẩm test"
            },
            {
                title: "Mục đích",
                info: "Kiểm tra chức năng hệ thống"
            },
            {
                title: "Trạng thái",
                info: "Demo"
            },
            {
                title: "Lưu ý",
                info: "Không sử dụng cho mục đích thương mại"
            }
        ]),
        image: "/images/banner/1.jpg",
        gallery: '["/images/banner/1.jpg", "/images/banner/2.jpg"]',
        hot: 0,
        package_id: 1,
        category_ids: "[]",
        view: 0,
        review_total: 0,
        review_point: 4,
        review_point_1: 0,
        review_point_2: 0,
        review_point_3: 0,
        review_point_4: 0,
        review_point_5: 0,
        sold: 0,
        reason_cancel: null,
        status: 1,
        is_deleted: 0,
        created_at: "2025-11-24T04:46:51.000Z",
        updated_at: "2025-11-24T04:46:51.000Z",
        created_by: 2,
        updated_by: 2,
        prices: [
            {
                id: 12,
                product_id: 12,
                package_id: 1,
                is_dist: 1,
                price: 10000,
                sold_quantity: 0,
                remaining_quantity: 110,
                quantity: 110,
                updated_at: "2025-11-24T04:46:51.000Z",
                productName: "testes",
                packageName: "kg",
                expense: 0,
                promotion_fullname: null,
                promotion_type: null,
                discount_value: 0,
                discount_type: null,
                product_price_id: 12,
                promotion_id: null,
                promotion_quantity: null,
                start_date: null,
                end_date: null,
                start_time: null,
                end_time: null
            }
        ]
    }
];
const blogData = [
    {
        id: 1,
        image: "https://ca-ctm.systems.com.vn/styles/default.jpg",
        title: "Loại quả được đánh giá là thực phẩm tốt nhất thế giới, Việt Nam trồng nhiều",
        date: "Thứ 6, 11/4/2025, 10:24",
        link: "/news/loai-qua-duoc-danh-gia-la-thuc-pham-tot-nhat-the-gioi-viet-nam-trong-nhieu",
        author: "Admin",
        createdAt: new Date("2025-04-11T10:24:00")
    },
    {
        id: 2,
        image: "https://ca-ctm.systems.com.vn/styles/default.jpg",
        title: "Quy chế hoạt động",
        date: "Thứ 2, 24/2/2025, 09:51",
        link: "/news/quy-che-hoat-dong",
        author: "Admin",
        createdAt: new Date("2025-02-24T09:51:00")
    },
    {
        id: 3,
        image: "https://ca-ctm.systems.com.vn/styles/default.jpg",
        title: "Cơ chế giải quyết tranh chấp",
        date: "Thứ 2, 24/2/2025, 09:49",
        link: "/news/co-che-giai-quyet-tranh-chap",
        author: "Admin",
        createdAt: new Date("2025-02-24T09:49:00")
    },
    {
        id: 4,
        image: "https://ca-ctm.systems.com.vn/styles/default.jpg",
        title: "Chính sách bảo mật",
        date: "Thứ 2, 24/2/2025, 09:49",
        link: "/news/chinh-sach-bao-mat",
        author: "Admin",
        createdAt: new Date("2025-02-24T09:49:00")
    }
];
}),
"[project]/src/lib/api/category.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllCategories",
    ()=>getAllCategories,
    "getAllCategoriesByUrl",
    ()=>getAllCategoriesByUrl,
    "getAllCategoriesNoPaginated",
    ()=>getAllCategoriesNoPaginated,
    "getAllCategoriesPaginated",
    ()=>getAllCategoriesPaginated,
    "getAllCategoriesV2",
    ()=>getAllCategoriesV2,
    "getCategoriesByParentIdNoPaginated",
    ()=>getCategoriesByParentIdNoPaginated,
    "getCategoryByAlias",
    ()=>getCategoryByAlias
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$data$2f$Home$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/data/Home.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/api.ts [app-rsc] (ecmascript)");
;
;
const getAllCategories = async ()=>{
    // const res = await apiFetch("/categories");
    // return res;
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$data$2f$Home$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categoryMenuData"];
};
const getAllCategoriesByUrl = async (uri, id)=>{
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiFetchSites"])(uri, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            category_ids: id
        })
    });
    // API returns {data: [...], status: 200}, extract the data array
    if (res && typeof res === "object" && "data" in res && Array.isArray(res.data)) {
        return res.data;
    }
    // Fallback if structure is different
    return Array.isArray(res) ? res : [];
};
const getAllCategoriesV2 = async (queries)=>{
    // const uri = buildURIWithQueries('/categories', queries);
    // const res = await apiFetch(uri);
    // return res.data;
    return [
        {
            name: "Vegetables & Fruit",
            link: "shop-left-sidebar.html",
            image: "/assets/eme2023/svg/1/vegetable.svg",
            slug: "vegetables-and-fruit",
            children: []
        },
        {
            name: "Beverages",
            link: "shop-left-sidebar.html",
            image: "/assets/eme2023/svg/1/cup.svg",
            slug: "beverages",
            children: []
        },
        {
            name: "Meats & Seafood",
            link: "shop-left-sidebar.html",
            image: "/assets/eme2023/svg/1/meats.svg",
            slug: "meats-and-seafood",
            children: []
        },
        {
            name: "Breakfast",
            link: "shop-left-sidebar.html",
            image: "/assets/eme2023/svg/1/breakfast.svg",
            slug: "breakfast",
            children: []
        },
        {
            name: "Frozen Foods",
            link: "shop-left-sidebar.html",
            image: "/assets/eme2023/svg/1/frozen.svg",
            slug: "frozen-foods",
            children: []
        },
        {
            name: "Milk & Dairies",
            link: "shop-left-sidebar.html",
            image: "/assets/eme2023/svg/1/milk.svg",
            slug: "milk-and-dairies",
            children: []
        },
        {
            name: "Pet Food",
            link: "shop-left-sidebar.html",
            image: "/assets/eme2023/svg/1/pet.svg",
            slug: "pet-food",
            children: []
        },
        {
            name: "Biscuits & Snacks",
            link: "shop-left-sidebar.html",
            image: "/assets/eme2023/svg/1/biscuit.svg",
            slug: "biscuits-and-snacks",
            children: []
        },
        {
            name: "Grocery & Staples",
            link: "shop-left-sidebar.html",
            image: "/assets/eme2023/svg/1/grocery.svg",
            slug: "grocery-and-staples",
            children: []
        }
    ];
};
const getAllCategoriesPaginated = async (queries)=>{
    const uri = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildURIWithQueries"])("/categories/getList", queries);
    const resdata = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiFetchSites"])(uri);
    return resdata;
};
const getAllCategoriesNoPaginated = async (queries)=>{
    const uri = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildURIWithQueries"])("/categories/getList", {
        ...queries,
        isPaginated: false
    });
    const resdata = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiFetchSites"])(uri);
    return resdata;
};
const getCategoryByAlias = async (alias, queries)=>{
    const uri = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildURIWithQueries"])(`/categories/detail/${alias}`, queries);
    const resdata = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiFetchSites"])(uri);
    return resdata;
};
const getCategoriesByParentIdNoPaginated = async (parentId)=>{
    const uri = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildURIWithQueries"])("/categories/getList", {
        isPaginated: false,
        parentIdSh: parentId
    });
    const resdata = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiFetchSites"])(uri);
    return resdata;
};
}),
"[project]/src/components/features/category/CategoryMenu.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$category$2f$CategoryMenuItem$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/category/CategoryMenuItem.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$category$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/category.ts [app-rsc] (ecmascript)");
;
;
;
async function CategoryMenu({ title, initialData, uri, id }) {
    // const data = initialData || await fetch(url as string).then(res => res.ok ? res.json() : []).catch(() => []) as CategoryTV0[];
    const data = uri ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$category$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllCategoriesByUrl"])(uri, id) : [];
    const dataToUse = initialData && initialData.length ? initialData : data;
    if (!dataToUse || dataToUse.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "category-menu ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/features/category/CategoryMenu.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "pb-2 border-bottom-0",
                children: dataToUse.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$category$2f$CategoryMenuItem$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        item: item,
                        index: index
                    }, index, false, {
                        fileName: "[project]/src/components/features/category/CategoryMenu.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/features/category/CategoryMenu.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/category/CategoryMenu.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = CategoryMenu;
}),
"[project]/src/components/features/product/section/HorizontalItemSection.client.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/features/product/section/HorizontalItemSection.client.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/features/product/section/HorizontalItemSection.client.tsx <module evaluation>", "default");
}),
"[project]/src/components/features/product/section/HorizontalItemSection.client.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/features/product/section/HorizontalItemSection.client.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/features/product/section/HorizontalItemSection.client.tsx", "default");
}),
"[project]/src/components/features/product/section/HorizontalItemSection.client.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$product$2f$section$2f$HorizontalItemSection$2e$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/features/product/section/HorizontalItemSection.client.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$product$2f$section$2f$HorizontalItemSection$2e$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/features/product/section/HorizontalItemSection.client.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$product$2f$section$2f$HorizontalItemSection$2e$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/features/product/section/HorizontalItemSection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$product$2f$section$2f$HorizontalItemSection$2e$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/product/section/HorizontalItemSection.client.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/api.ts [app-rsc] (ecmascript)");
;
;
;
async function HorizontalItemSection({ initialData, url, title, description, breakpoints, hasIcon, hasNavigation, link, wrapperStyle, startDate, endDate, n, hasUnderline, classOfColumn }) {
    const response = url ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiFetchSites"])(url) : undefined;
    const data = initialData || response?.data;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$product$2f$section$2f$HorizontalItemSection$2e$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            n: n,
            initialData: data,
            title: title,
            description: description,
            wrapperStyle: wrapperStyle,
            breakpoints: breakpoints,
            hasIcon: hasIcon,
            hasNavigation: hasNavigation,
            classOfColumn: classOfColumn,
            link: link,
            startDate: startDate,
            endDate: endDate,
            hasUnderline: hasUnderline
        }, void 0, false, {
            fileName: "[project]/src/components/features/product/section/HorizontalItemSection.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
const __TURBOPACK__default__export__ = HorizontalItemSection;
}),
"[project]/src/components/features/category/SearchByCategory.client.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/features/category/SearchByCategory.client.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/features/category/SearchByCategory.client.tsx <module evaluation>", "default");
}),
"[project]/src/components/features/category/SearchByCategory.client.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/features/category/SearchByCategory.client.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/features/category/SearchByCategory.client.tsx", "default");
}),
"[project]/src/components/features/category/SearchByCategory.client.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$category$2f$SearchByCategory$2e$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/features/category/SearchByCategory.client.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$category$2f$SearchByCategory$2e$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/features/category/SearchByCategory.client.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$category$2f$SearchByCategory$2e$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/features/category/SearchByCategory.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$category$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/category.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$category$2f$SearchByCategory$2e$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/category/SearchByCategory.client.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
async function SearchByCategory({ title, description, initialData, uri, id }) {
    const data = uri ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$category$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllCategoriesByUrl"])(uri, id) : [];
    const dataToUse = initialData && initialData.length ? initialData : data;
    if (!dataToUse || dataToUse.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$category$2f$SearchByCategory$2e$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            items: dataToUse,
            title: title,
            description: description
        }, void 0, false, {
            fileName: "[project]/src/components/features/category/SearchByCategory.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
const __TURBOPACK__default__export__ = SearchByCategory;
}),
"[project]/src/components/features/banner/Advertisement4.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$advertisement$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/advertisement.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ImageError.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function Advertisement4({ item, id }) {
    let data = item || id ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$advertisement$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAdvertisementById"])(id) : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "banner-contain hover-effect wow fadeIn ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IMAGES_BASE_URL"] + "/" + data?.image,
                className: "bg-img lazyload w-100 object-cover ",
                alt: data?.description || "honeynet",
                width: 1000,
                height: 600,
                style: {
                    aspectRatio: "583/157",
                    maxHeight: "160px"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/features/banner/Advertisement4.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "banner-details p-center-left p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: data?.sale_value
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/banner/Advertisement4.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "fw-normal theme-color mb-2",
                            children: data?.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/banner/Advertisement4.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn btn-animation btn-sm mend-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: data?.button_link || "#",
                                style: {
                                    color: "white",
                                    fontStyle: "bold"
                                },
                                children: [
                                    data?.button_name,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "fa-solid fa-arrow-right icon"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/banner/Advertisement4.tsx",
                                        lineNumber: 27,
                                        columnNumber: 35
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/banner/Advertisement4.tsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/banner/Advertisement4.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/features/banner/Advertisement4.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/features/banner/Advertisement4.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/banner/Advertisement4.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Advertisement4;
}),
"[project]/src/components/features/banner/Advertisement7.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$advertisement$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/advertisement.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ImageError.tsx [app-rsc] (ecmascript)");
;
;
;
;
async function Advertisement7({ item, id }) {
    let data = item || id ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$advertisement$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAdvertisementById"])(id) : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: data?.button_link,
        className: "banner-contain hover-effect ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                width: 500,
                height: 300,
                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IMAGES_BASE_URL"] + "/" + data?.image,
                className: "bg-img lazyload w-full h-full object-cover",
                alt: data?.description || ""
            }, void 0, false, {
                fileName: "[project]/src/components/features/banner/Advertisement7.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "banner-details p-center-left p-4 ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-kaushan fw-normal text-danger",
                            children: data?.sale_value
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/banner/Advertisement7.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "mt-2 mb-2 theme-color",
                            children: data?.name || "Giá hot"
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/banner/Advertisement7.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "fw-normal product-name text-title",
                            children: data?.description
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/banner/Advertisement7.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/features/banner/Advertisement7.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/features/banner/Advertisement7.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/banner/Advertisement7.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Advertisement7;
}),
"[project]/src/components/features/banner/Advertisement6.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$advertisement$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/advertisement.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ImageError.tsx [app-rsc] (ecmascript)");
;
;
;
;
async function Advertisement6({ item, id }) {
    let data = item || id ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$advertisement$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAdvertisementById"])(id) : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "banner-contain",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                width: 2000,
                height: 200,
                src: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IMAGES_BASE_URL"]}/${data?.image}`,
                className: "bg-img lazyload w-full h-48 object-cover",
                alt: data?.name || "honeynet"
            }, void 0, false, {
                fileName: "[project]/src/components/features/banner/Advertisement6.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "banner-details p-center p-4 text-white text-center !top-1/2 !left-1/2 transform -translate-1/2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "lh-base fw-bold offer-text",
                            children: data?.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/banner/Advertisement6.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "coupon-code",
                            children: data?.sale_name
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/banner/Advertisement6.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/features/banner/Advertisement6.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/features/banner/Advertisement6.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/banner/Advertisement6.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Advertisement6;
}),
"[project]/src/components/features/banner/Advertisement3.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$advertisement$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/advertisement.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ImageError.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function Advertisement3({ item, id }) {
    let data = item || id ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$advertisement$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAdvertisementById"])(id) : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            "       ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "banner-contain hover-effect wow fadeIn",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        width: 3000,
                        height: 500,
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IMAGES_BASE_URL"] + "/" + data?.image,
                        className: "bg-img lazyload w-full h-full object-cover",
                        style: {
                            aspectRatio: "6 / 1"
                        },
                        alt: data?.name || "honeynet"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/banner/Advertisement3.tsx",
                        lineNumber: 16,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "banner-details p-center banner-b-space  text-center !top-1/2 !left-1/2 transform -translate-1/2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "banner-title",
                                    children: data?.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/banner/Advertisement3.tsx",
                                    lineNumber: 23,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    className: "lh-sm mx-auto mt-1 text-content",
                                    children: data?.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/banner/Advertisement3.tsx",
                                    lineNumber: 24,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn-animation btn-sm mx-auto mt-sm-3 mt-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: data?.button_link || "#",
                                        style: {
                                            color: "white",
                                            fontStyle: "bold"
                                        },
                                        children: [
                                            data?.button_name,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "fa-solid fa-arrow-right icon"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/banner/Advertisement3.tsx",
                                                lineNumber: 30,
                                                columnNumber: 35
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/banner/Advertisement3.tsx",
                                        lineNumber: 26,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/banner/Advertisement3.tsx",
                                    lineNumber: 25,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/features/banner/Advertisement3.tsx",
                            lineNumber: 22,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/banner/Advertisement3.tsx",
                        lineNumber: 21,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/banner/Advertisement3.tsx",
                lineNumber: 15,
                columnNumber: 14
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = Advertisement3;
}),
"[project]/src/components/features/news/NewsBlogSection.client.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/features/news/NewsBlogSection.client.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/features/news/NewsBlogSection.client.tsx <module evaluation>", "default");
}),
"[project]/src/components/features/news/NewsBlogSection.client.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/features/news/NewsBlogSection.client.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/features/news/NewsBlogSection.client.tsx", "default");
}),
"[project]/src/components/features/news/NewsBlogSection.client.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$news$2f$NewsBlogSection$2e$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/features/news/NewsBlogSection.client.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$news$2f$NewsBlogSection$2e$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/features/news/NewsBlogSection.client.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$news$2f$NewsBlogSection$2e$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/features/news/NewsBlogSection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$news$2f$NewsBlogSection$2e$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/news/NewsBlogSection.client.tsx [app-rsc] (ecmascript)");
;
;
;
;
async function BlogSection({ initialData, uri, title, hasPagination, description, link, wrapperStyle, breakpoints }) {
    const response = uri ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiFetchSites"])(uri) : undefined;
    const data = initialData || response?.data;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$news$2f$NewsBlogSection$2e$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            data: data,
            title: title,
            description: description,
            link: link,
            wrapperStyle: wrapperStyle,
            breakpoints: breakpoints,
            hasPagination: hasPagination
        }, void 0, false, {
            fileName: "[project]/src/components/features/news/NewsBlogSection.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
const __TURBOPACK__default__export__ = BlogSection;
}),
"[project]/src/components/ui/ContactMail.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function ContactMail() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "newsletter-section wow fadeInUp",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "newsletter-box newsletter-box-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "newsletter-contain py-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-xxl-4 col-lg-5 col-md-7 col-sm-9 offset-xxl-2 offset-md-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "newsletter-detail px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Theo dõi và nhận ngay ưu đãi"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/ContactMail.tsx",
                                    lineNumber: 11,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "newsletter-des",
                                    children: "Nhận ngay mã giảm giá 100k cho đơn đầu tiên"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/ContactMail.tsx",
                                    lineNumber: 12,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "input-box",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            className: "form-control",
                                            id: "exampleFormControlInput1",
                                            placeholder: "Địa chỉ email của bạn"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/ContactMail.tsx",
                                            lineNumber: 14,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fa-solid fa-envelope arrow"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/ContactMail.tsx",
                                            lineNumber: 15,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "sub-btn btn-animation",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "d-sm-block d-none",
                                                    children: "Đăng ký"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/ContactMail.tsx",
                                                    lineNumber: 17,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fa-solid fa-arrow-right icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/ContactMail.tsx",
                                                    lineNumber: 18,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ui/ContactMail.tsx",
                                            lineNumber: 16,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/ContactMail.tsx",
                                    lineNumber: 13,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/ContactMail.tsx",
                            lineNumber: 10,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/ContactMail.tsx",
                        lineNumber: 9,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/ContactMail.tsx",
                    lineNumber: 8,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/ContactMail.tsx",
                lineNumber: 7,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/ContactMail.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/ContactMail.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = ContactMail;
}),
"[project]/src/components/features/product/section/VerticalNItems.client.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/features/product/section/VerticalNItems.client.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/features/product/section/VerticalNItems.client.tsx <module evaluation>", "default");
}),
"[project]/src/components/features/product/section/VerticalNItems.client.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/features/product/section/VerticalNItems.client.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/features/product/section/VerticalNItems.client.tsx", "default");
}),
"[project]/src/components/features/product/section/VerticalNItems.client.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$product$2f$section$2f$VerticalNItems$2e$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/features/product/section/VerticalNItems.client.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$product$2f$section$2f$VerticalNItems$2e$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/features/product/section/VerticalNItems.client.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$product$2f$section$2f$VerticalNItems$2e$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/lib/helper/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkIsWithinTimeRange",
    ()=>checkIsWithinTimeRange,
    "chunk",
    ()=>chunk,
    "findDescendantsRecursive",
    ()=>findDescendantsRecursive,
    "formatCurrency",
    ()=>formatCurrency,
    "formatDate",
    ()=>formatDate,
    "formatDateTime",
    ()=>formatDateTime,
    "formatEstimatedDelivery",
    ()=>formatEstimatedDelivery,
    "formatOrderHistoryDateTime",
    ()=>formatOrderHistoryDateTime,
    "formatTrackingDate",
    ()=>formatTrackingDate,
    "formatTrackingTime",
    ()=>formatTrackingTime,
    "formatVietnameseDateTime",
    ()=>formatVietnameseDateTime,
    "getInfoTimeFlashSale",
    ()=>getInfoTimeFlashSale,
    "sortFilterFirst",
    ()=>sortFilterFirst,
    "transformFlashsaleItemToSingleProduct",
    ()=>transformFlashsaleItemToSingleProduct
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants/constants.ts [app-rsc] (ecmascript)");
;
function chunk(arr, size) {
    const result = [];
    for(let i = 0; i < arr.length; i += size){
        result.push(arr.slice(i, i + size));
    }
    return result;
}
const formatCurrency = (amount)=>{
    if (isNaN(amount)) return "0 ₫";
    return amount.toLocaleString("vi-VN") + " ₫";
};
const formatDate = (date)=>{
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}/${month}/${year} `;
};
const formatDateTime = (date)=>{
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    const hours = String(d.getHours()).padStart(2, "0");
    const minutes = String(d.getMinutes()).padStart(2, "0");
    const seconds = String(d.getSeconds()).padStart(2, "0");
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};
const formatVietnameseDateTime = (date)=>{
    if (!date) return "Chưa cập nhật";
    const d = new Date(date);
    // Tên các thứ trong tuần
    const daysOfWeek = [
        "Chủ nhật",
        "Thứ 2",
        "Thứ 3",
        "Thứ 4",
        "Thứ 5",
        "Thứ 6",
        "Thứ 7"
    ];
    const dayOfWeek = daysOfWeek[d.getDay()];
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1);
    const year = d.getFullYear();
    const hours = String(d.getHours()).padStart(2, "0");
    const minutes = String(d.getMinutes()).padStart(2, "0");
    return `${dayOfWeek}, ${day}/${month}/${year}, ${hours}:${minutes}`;
};
const checkIsWithinTimeRange = (startDate, endDate)=>{
    const now = new Date();
    return now >= startDate && now <= endDate;
};
const formatTrackingDate = (date)=>{
    const d = new Date(date);
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
    const day = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    return `${day} ${month} ${year}`;
};
const formatTrackingTime = (date)=>{
    const d = new Date(date);
    let hours = d.getHours();
    const minutes = String(d.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 giờ -> 12
    const hoursStr = String(hours).padStart(2, "0");
    return `${hoursStr}:${minutes} ${ampm}`;
};
const formatEstimatedDelivery = (date)=>{
    const d = new Date(date);
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
    const day = d.getDate();
    const month = months[d.getMonth()];
    const time = formatTrackingTime(d);
    return `${day} ${month}, ${time}`;
};
const formatOrderHistoryDateTime = (date)=>{
    return {
        date: formatTrackingDate(date),
        time: formatTrackingTime(date)
    };
};
const transformFlashsaleItemToSingleProduct = (flashsaleItem)=>{
    return {
        flash_type: flashsaleItem.flash_type || "",
        id: flashsaleItem.id || flashsaleItem.id,
        name: flashsaleItem.name || "",
        prices: flashsaleItem.prices,
        store_id: flashsaleItem.store_id || 0,
        code: flashsaleItem.code || "",
        alias: flashsaleItem.alias || "",
        excerpt: flashsaleItem.excerpt || "",
        description: flashsaleItem.description || null,
        content: flashsaleItem.content || "",
        meta_title: flashsaleItem.meta_title || flashsaleItem.packageName || "",
        meta_description: flashsaleItem.meta_description || "",
        meta_keywords: flashsaleItem.meta_keywords || "",
        image: flashsaleItem.image || "",
        gallery: flashsaleItem.gallery || "[]",
        category_ids: flashsaleItem.category_ids || "",
        package_id: flashsaleItem.package_id,
        detail_info: flashsaleItem.detail_info || "",
        hot: flashsaleItem.hot || 0,
        view: flashsaleItem.view || 0,
        sold: flashsaleItem.sold || 0,
        status: flashsaleItem.status || 1,
        is_deleted: flashsaleItem.is_deleted || 0,
        reason_cancel: flashsaleItem.reason_cancel || null,
        // Dữ liệu đánh giá (sử dụng dữ liệu gói, nếu có)
        review_total: flashsaleItem.review_total || 0,
        review_point: flashsaleItem.review_point || 0,
        review_point_1: flashsaleItem.review_point_1 || 0,
        review_point_2: flashsaleItem.review_point_2 || 0,
        review_point_3: flashsaleItem.review_point_3 || 0,
        review_point_4: flashsaleItem.review_point_4 || 0,
        review_point_5: flashsaleItem.review_point_5 || 0,
        // Dữ liệu thời gian
        created_at: flashsaleItem.created_at || new Date().toISOString(),
        updated_at: flashsaleItem.updated_at || new Date().toISOString(),
        created_by: flashsaleItem.created_by || 0,
        updated_by: flashsaleItem.updated_by || 0
    };
};
const getInfoTimeFlashSale = ()=>{
    let flashType = "00:00";
    for(let i = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FLASH_SALE_TYPES"].length - 1; i >= 0; i--){
        const hour = parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FLASH_SALE_TYPES"][i].split(":")[0], 10);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CURRENT_HOUR"] >= hour) {
            flashType = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FLASH_SALE_TYPES"][i];
            break;
        }
    }
    const startCountdownDate = new Date(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CURRENT"].getFullYear(), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CURRENT"].getMonth(), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CURRENT"].getDate(), parseInt(flashType.split(":")[0], 10), 0, 0);
    const indexOfFlash = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FLASH_SALE_TYPES"].indexOf(flashType);
    let endCountdownDate;
    if (indexOfFlash === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FLASH_SALE_TYPES"].length - 1) {
        endCountdownDate = new Date(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CURRENT"].getFullYear(), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CURRENT"].getMonth(), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CURRENT"].getDate() + 1, parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FLASH_SALE_TYPES"][0].split(":")[0], 10), 0, 0);
    } else {
        endCountdownDate = new Date(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CURRENT"].getFullYear(), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CURRENT"].getMonth(), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CURRENT"].getDate(), parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FLASH_SALE_TYPES"][indexOfFlash + 1].split(":")[0], 10), 0, 0);
    }
    return {
        flashType,
        startCountdownDate,
        endCountdownDate
    };
};
const findDescendantsRecursive = (id, data)=>{
    // Tạo Map để tra cứu nhanh - chỉ duyệt 1 lần
    const itemMap = new Map();
    const childrenMap = new Map();
    // Duyệt 1 lần duy nhất để build map
    data.forEach((item)=>{
        itemMap.set(item.id, item);
        if (!childrenMap.has(item.parent_id)) {
            childrenMap.set(item.parent_id, []);
        }
        childrenMap.get(item.parent_id).push(item.id);
    });
    // Hàm đệ quy tối ưu - không cần duyệt mảng data nữa
    const buildTree = (currentId)=>{
        const children = childrenMap.get(currentId) || [];
        return {
            item: itemMap.get(currentId),
            children: children.map((childId)=>buildTree(childId))
        };
    };
    return buildTree(id);
};
const sortFilterFirst = (arr, field, value)=>{
    const firstItems = arr.filter((item)=>item[field] === value);
    const otherItems = arr.filter((item)=>item[field] !== value);
    return [
        ...firstItems,
        ...otherItems
    ];
};
}),
"[project]/src/lib/api/product.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "get5FeaturedProducts",
    ()=>get5FeaturedProducts,
    "getActiveProductOffers",
    ()=>getActiveProductOffers,
    "getActiveProductOffersByUrl",
    ()=>getActiveProductOffersByUrl,
    "getAllFlashsalesAtTime",
    ()=>getAllFlashsalesAtTime,
    "getAllProducts",
    ()=>getAllProducts,
    "getBestSellProducts",
    ()=>getBestSellProducts,
    "getBestSellProductsByUrl",
    ()=>getBestSellProductsByUrl,
    "getFeaturedProducts",
    ()=>getFeaturedProducts,
    "getFeaturedProductsByUrl",
    ()=>getFeaturedProductsByUrl,
    "getFeaturedProductsPaginated",
    ()=>getFeaturedProductsPaginated,
    "getFlashSaleByStoreAtTime",
    ()=>getFlashSaleByStoreAtTime,
    "getFlashSaleByUrl",
    ()=>getFlashSaleByUrl,
    "getProductByAlias",
    ()=>getProductByAlias,
    "getProductsByCategory",
    ()=>getProductsByCategory,
    "getProductsByCategoryAlias",
    ()=>getProductsByCategoryAlias,
    "getProductsByStoreIdByUrl",
    ()=>getProductsByStoreIdByUrl,
    "getProductsFlashsale",
    ()=>getProductsFlashsale,
    "getProductsFlashsaleByQueries",
    ()=>getProductsFlashsaleByQueries,
    "getProductsFlashsaleByUri",
    ()=>getProductsFlashsaleByUri,
    "getProductsPaginated",
    ()=>getProductsPaginated,
    "getRelatedProducts",
    ()=>getRelatedProducts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$data$2f$Home$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/data/Home.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/api.ts [app-rsc] (ecmascript)");
;
;
async function getProductByAlias(alias, queries) {
    const uri = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildURIWithQueries"])(`/products/detail/${alias}`, queries);
    const resdata = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiFetchSites"])(uri);
    return resdata;
}
async function getRelatedProducts(slug, queries) {
    // const uri = buildURIWithQueries(`/products/${slug}/related`, queries);
    // const res = await apiFetch(uri);
    // return res.data;
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$data$2f$Home$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["data"];
}
async function getAllFlashsalesAtTime(date, time, queries) {
    // const uri = buildURIWithQueries(`/stores/flashsales`, { date, time, ...queries });
    // const res = await apiFetch(uri);
    // return res.data;
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$data$2f$Home$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["data"];
}
async function getActiveProductOffers() {
    // const uri = buildURIWithQueries(`/products/active-offers`, {});
    // const res = await apiFetch(uri);
    // return res.data;
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$data$2f$Home$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["data"];
}
async function getActiveProductOffersByUrl(url, queries) {
    // const uri = buildURIWithQueries(url, queries);
    // const res = await apiFetchFullUrl(uri);
    // return res.data;
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$data$2f$Home$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["data"];
}
async function getFlashSaleByStoreAtTime(storeId, flashType, time, queries) {
    // const uri = buildURIWithQueries(`/stores/${storeId}/flashsales`, { date, time, ...queries });
    // const res = await apiFetch(uri);
    // return res.data;
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$data$2f$Home$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["data"];
}
async function getAllProducts(queries) {
    // const uri = buildURIWithQueries('/products', queries);
    // const res = await apiFetch(uri);
    // return res.data;
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$data$2f$Home$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["data"];
}
async function getProductsPaginated(queries) {
    const uri = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildURIWithQueries"])("/products/getList", queries);
    const resdata = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiFetchSites"])(uri);
    return resdata;
}
async function getFeaturedProductsPaginated(queries) {
    const uri = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildURIWithQueries"])("/products/getList", {
        ...queries,
        hotSh: 1
    });
    const resdata = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiFetchSites"])(uri);
    return resdata;
}
async function getProductsByCategory(queries) {
    // const uri = buildURIWithQueries('/products-by-category', queries);
    // const res = await apiFetch(uri);
    // return res.data;
    return {
        title: "Sản phẩm theo danh mục",
        products: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$data$2f$Home$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["data"]
    };
}
async function getFeaturedProducts(queries) {
    // const uri = buildURIWithQueries('/products/featured', queries);
    // const res = await apiFetch(uri);
    // return res.data;
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$data$2f$Home$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["data"];
}
async function get5FeaturedProducts(queries) {
    // const uri = buildURIWithQueries('/products/featured', { limit: 5, ...queries });
    // const res = await apiFetch(uri);
    // return res.data;
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$data$2f$Home$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["data"].slice(0, 5);
}
async function getBestSellProducts(queries) {
    // const uri = buildURIWithQueries('/products/best-sell', queries);
    // const res = await apiFetch(uri);
    // return res.data;
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$data$2f$Home$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["data"];
}
async function getBestSellProductsByUrl(url, queries) {
    // const uri = buildURIWithQueries(url, queries);
    // const res = await apiFetchFullUrl(uri);
    // return res.data;
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$data$2f$Home$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["data"];
}
async function getFeaturedProductsByUrl(url, queries) {
    // const uri = buildURIWithQueries(url, queries);
    // const res = await apiFetchFullUrl(uri);
    // return res.data;
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$data$2f$Home$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["data"];
}
async function getFlashSaleByUrl(url, queries) {
    // const uri = buildURIWithQueries(url, queries);
    // const res = await apiFetchFullUrl(uri);
    // return res.data;
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$data$2f$Home$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["data"];
}
async function getProductsByStoreIdByUrl(url, queries) {
    // const uri = buildURIWithQueries(url, queries);
    // const res = await apiFetchFullUrl(uri);
    // return res.data;
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$data$2f$Home$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["data"];
}
async function getProductsFlashsaleByUri(uri) {
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiFetchSites"])(uri);
    return res;
}
async function getProductsFlashsale(path, queries) {
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiFetchSites"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildURIWithQueries"])(path, queries));
    return res;
}
async function getProductsFlashsaleByQueries(queries) {
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiFetchSites"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildURIWithQueries"])("/promotions/getFlashSaleByProducts", queries));
    return res;
}
const getProductsByCategoryAlias = async (alias, queries)=>{
    const uri = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildURIWithQueries"])(`/categories/${alias}`, queries);
    const resdata = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiFetchSites"])(uri);
    return resdata;
};
}),
"[project]/src/components/features/product/section/VerticalNItemsFlashsale.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$product$2f$section$2f$VerticalNItems$2e$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/product/section/VerticalNItems.client.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$helper$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/helper/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/product.ts [app-rsc] (ecmascript)");
;
;
;
;
async function VerticalNItemsFlashsale({ title, breakpoints, description, startDate, endDate, initialData, url, n, hasIcon, wrapperStyle, classOfItem, hasNavigation, hasPagination, link, isFlashSaleItem }) {
    const response = url ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductsFlashsaleByUri"])(url) : undefined;
    const data = initialData || response;
    const dataProducts = data.map((item)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$helper$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transformFlashsaleItemToSingleProduct"])(item));
    const groupedData = [];
    if (data && data.length > 0) {
        for(let i = 0; i < data.length; i += n){
            const group = [];
            for(let j = 0; j < n; j++){
                if (dataProducts[i + j]) {
                    group.push(dataProducts[i + j]);
                }
            }
            groupedData.push(group);
        }
    }
    if (!dataProducts || dataProducts.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$product$2f$section$2f$VerticalNItems$2e$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            initialData: dataProducts,
            title: title,
            breakpoints: breakpoints,
            hasPagination: hasPagination,
            description: description,
            startDate: startDate,
            endDate: endDate,
            hasIcon: hasIcon,
            wrapperStyle: wrapperStyle,
            classOfItem: classOfItem,
            hasNavigation: hasNavigation,
            link: link,
            n: n,
            isFlashSaleItem: isFlashSaleItem
        }, void 0, false, {
            fileName: "[project]/src/components/features/product/section/VerticalNItemsFlashsale.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
const __TURBOPACK__default__export__ = VerticalNItemsFlashsale;
}),
"[project]/src/components/features/banner/LayoutBanners2.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$banner$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/banner.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$BannerSliderV2$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/banner/BannerSliderV2.tsx [app-rsc] (ecmascript)");
;
;
;
async function LayoutBanners2({ arr }) {
    const banners = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$banner$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBannersByArr"])(arr);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$BannerSliderV2$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        items: banners
    }, void 0, false, {
        fileName: "[project]/src/components/features/banner/LayoutBanners2.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = LayoutBanners2;
}),
"[project]/src/components/features/banner/LayoutBanners3.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$banner$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/banner.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ImageError.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function LayoutBanners3({ arr }) {
    const banners = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$banner$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBannersByArr"])(arr);
    const banner1 = banners[0];
    const banner2 = banners[1];
    const banner3 = banners[2];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "row g-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-xxl-3 col-lg-4 col-sm-6 ratio_180 d-sm-block d-none",
                    style: {
                        aspectRatio: "180/100"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "home-contain rounded h-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: " w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    fill: true,
                                    src: banner1.image ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IMAGES_BASE_URL"] + "/" + banner1.image : "/images/logo.png",
                                    className: "bg-img  lazyload",
                                    alt: banner1.name || "honeynet"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/banner/LayoutBanners3.tsx",
                                    lineNumber: 25,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/banner/LayoutBanners3.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "home-detail p-top-left home-p-medium",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                            className: "text-danger mb-2 fw-bold",
                                            children: banner1.sale_name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/banner/LayoutBanners3.tsx",
                                            lineNumber: 29,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "theme-color fw-bold",
                                            children: banner1.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/banner/LayoutBanners3.tsx",
                                            lineNumber: 30,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-content d-md-block d-none",
                                            children: banner1.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/banner/LayoutBanners3.tsx",
                                            lineNumber: 31,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: banner1.button_link || "#",
                                            className: "shop-button",
                                            children: [
                                                banner1.button_name || "Shop Now",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fa-solid fa-right-long ms-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/banner/LayoutBanners3.tsx",
                                                    lineNumber: 32,
                                                    columnNumber: 117
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/features/banner/LayoutBanners3.tsx",
                                            lineNumber: 32,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/features/banner/LayoutBanners3.tsx",
                                    lineNumber: 28,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/banner/LayoutBanners3.tsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/banner/LayoutBanners3.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/features/banner/LayoutBanners3.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-xxl-6 col-lg-8 order-xxl-0 ratio_87",
                    style: {
                        aspectRatio: "87/100"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "home-contain rounded   h-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    fill: true,
                                    src: banner2.image ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IMAGES_BASE_URL"] + "/" + banner2.image : "/images/logo.png",
                                    className: "bg-img  lazyload",
                                    alt: banner2.name || "honeynet"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/banner/LayoutBanners3.tsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/banner/LayoutBanners3.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "home-detail p-center-left home-p-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                            children: banner2.sale_name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/banner/LayoutBanners3.tsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "w-75 text-uppercase name-title poster-2 my-2",
                                            children: banner2.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/banner/LayoutBanners3.tsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "w-50",
                                            children: banner2.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/banner/LayoutBanners3.tsx",
                                            lineNumber: 54,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn text-white mt-xxl-4 mt-2 home-button mend-auto theme-bg-color",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: banner2.button_link || "#",
                                                style: {
                                                    color: "white",
                                                    fontStyle: "bold"
                                                },
                                                children: [
                                                    banner2.button_name || "Shop Now",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "fa-solid fa-arrow-right icon ms-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/banner/LayoutBanners3.tsx",
                                                        lineNumber: 62,
                                                        columnNumber: 57
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/features/banner/LayoutBanners3.tsx",
                                                lineNumber: 58,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/banner/LayoutBanners3.tsx",
                                            lineNumber: 55,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/features/banner/LayoutBanners3.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/banner/LayoutBanners3.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/banner/LayoutBanners3.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/features/banner/LayoutBanners3.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-xxl-3 col-xl-4 col-sm-6 ratio_180 custom-ratio d-xxl-block d-lg-none d-sm-block d-none",
                    style: {
                        aspectRatio: "180/100"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "home-contain rounded h-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                fill: true,
                                src: banner3.image ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IMAGES_BASE_URL"] + "/" + banner3.image : "/images/logo.png",
                                className: "bg-img  lazyload",
                                alt: banner3.name || "honeynet"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/banner/LayoutBanners3.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "home-detail p-top-left home-p-medium",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                            className: "text-danger mb-2 fw-bold",
                                            children: banner3.sale_name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/banner/LayoutBanners3.tsx",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "theme-color fw-bold",
                                            children: banner3.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/banner/LayoutBanners3.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-content d-md-block d-none",
                                            children: banner3.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/banner/LayoutBanners3.tsx",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: banner3.button_link || "#",
                                            className: "shop-button",
                                            children: [
                                                banner3.button_name || "Shop Now",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fa-solid fa-right-long ms-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/banner/LayoutBanners3.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 114
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/features/banner/LayoutBanners3.tsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/features/banner/LayoutBanners3.tsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/banner/LayoutBanners3.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/banner/LayoutBanners3.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/features/banner/LayoutBanners3.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/banner/LayoutBanners3.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
const __TURBOPACK__default__export__ = LayoutBanners3;
}),
"[project]/src/components/features/banner/LayoutBanners4.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$banner$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/banner.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ImageError.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function LayoutBanners4({ arr }) {
    const banners = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$banner$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBannersByArr"])(arr);
    const banner1 = banners[0];
    const banner2 = banners[1];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "row g-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-xl-9 col-lg-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "home-contain h-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                fill: true,
                                src: banner1.image ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IMAGES_BASE_URL"] + "/" + banner1.image : "/images/logo.png",
                                className: "bg-img    lazyload",
                                alt: banner1.name || "honeynet"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/banner/LayoutBanners4.tsx",
                                lineNumber: 16,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "home-detail p-center-left w-75 position-relative mend-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                            children: [
                                                banner1.sale_name,
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: banner1.sale_value
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/banner/LayoutBanners4.tsx",
                                                    lineNumber: 19,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/features/banner/LayoutBanners4.tsx",
                                            lineNumber: 19,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "w-75 text-uppercase poster-1",
                                            children: [
                                                banner1.name,
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "daily",
                                                    children: "Daily Needs"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/banner/LayoutBanners4.tsx",
                                                    lineNumber: 20,
                                                    columnNumber: 77
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/features/banner/LayoutBanners4.tsx",
                                            lineNumber: 20,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "w-58 d-none d-sm-block",
                                            children: banner1.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/banner/LayoutBanners4.tsx",
                                            lineNumber: 22,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btn-animation mt-xxl-4 mt-2 home-button mend-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: banner1.button_link || "#",
                                                style: {
                                                    color: "white",
                                                    fontStyle: "bold"
                                                },
                                                children: [
                                                    banner1.button_name || "Shop Now",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "fa-solid fa-arrow-right icon ms-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/banner/LayoutBanners4.tsx",
                                                        lineNumber: 28,
                                                        columnNumber: 57
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/features/banner/LayoutBanners4.tsx",
                                                lineNumber: 24,
                                                columnNumber: 85
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/banner/LayoutBanners4.tsx",
                                            lineNumber: 23,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/features/banner/LayoutBanners4.tsx",
                                    lineNumber: 18,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/banner/LayoutBanners4.tsx",
                                lineNumber: 17,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/banner/LayoutBanners4.tsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/features/banner/LayoutBanners4.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-xl-3 col-lg-4 d-lg-inline-block d-none ratio_156",
                    style: {
                        aspectRatio: '156/100'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "home-contain h-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                fill: true,
                                src: "/assets/eme2023/images/veg-2/banner/2.jpg",
                                className: "bg-img    lazyload",
                                alt: "honeynet"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/banner/LayoutBanners4.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "home-detail p-top-left home-p-sm w-75",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "mt-0 text-danger",
                                            children: [
                                                banner2.sale_name,
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "discount text-title",
                                                    children: banner2.sale_value
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/banner/LayoutBanners4.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 70
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/features/banner/LayoutBanners4.tsx",
                                            lineNumber: 40,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "theme-color",
                                            children: banner2.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/banner/LayoutBanners4.tsx",
                                            lineNumber: 42,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            className: "text-content",
                                            children: banner2.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/banner/LayoutBanners4.tsx",
                                            lineNumber: 43,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: banner2.button_link || "#",
                                            style: {
                                                color: "white",
                                                fontStyle: "bold"
                                            },
                                            children: [
                                                banner2.button_name || "Shop Now",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fa-solid fa-arrow-right icon ms-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/banner/LayoutBanners4.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 55
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/features/banner/LayoutBanners4.tsx",
                                            lineNumber: 44,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/features/banner/LayoutBanners4.tsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/banner/LayoutBanners4.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/banner/LayoutBanners4.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/features/banner/LayoutBanners4.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/banner/LayoutBanners4.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
const __TURBOPACK__default__export__ = LayoutBanners4;
}),
"[project]/src/components/features/banner/LayoutBanners5.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$banner$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/banner.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ImageError.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function LayoutBanners5({ arr }) {
    const banners = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$banner$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBannersByArr"])(arr);
    const banner1 = banners[0];
    const banner2 = banners[1];
    const banner3 = banners[2];
    const banner4 = banners[3];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "row g-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-xxl-6 col-md-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "home-contain h-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IMAGES_BASE_URL"] + "/" + banner1.image,
                                alt: banner1.name || "honeynet",
                                width: 780,
                                height: 534,
                                className: "img-fluid bg-img lazyload w-full"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "home-detail home-width p-center-left ",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                            className: "ls-expanded theme-color",
                                            children: banner1.sale_name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                                            lineNumber: 21,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "fw-bold w-100",
                                            children: banner1.sale_value
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                                            lineNumber: 22,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-content fw-light",
                                            children: banner1.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                                            lineNumber: 23,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "d-sm-block d-none",
                                            children: banner1.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                                            lineNumber: 24,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn mt-sm-4 btn-2 theme-bg-color text-white mend-auto btn-2-animation",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: banner1.button_link || "#",
                                                style: {
                                                    color: "white",
                                                    fontStyle: "bold"
                                                },
                                                children: [
                                                    banner1.button_name || "Shop Now",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "fa-solid fa-arrow-right icon ms-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                                                        lineNumber: 30,
                                                        columnNumber: 57
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                                                lineNumber: 26,
                                                columnNumber: 101
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                                            lineNumber: 25,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                                    lineNumber: 20,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-xxl-3 col-md-4 ratio_medium d-md-block d-none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "home-contain home-small h-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IMAGES_BASE_URL"] + "/" + banner2.image,
                                    alt: banner2.name || "honeynet",
                                    width: 375,
                                    height: 534,
                                    className: "img-fluid bg-img lazyload w-full pb-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "home-detail text-center p-top-center w-100 text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "fw-bold",
                                            children: banner2.sale_name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                                            lineNumber: 44,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            className: "text-center",
                                            children: banner2.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                                            lineNumber: 45,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn bg-white theme-color mt-3 home-button mx-auto btn-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: banner2.button_link || "#",
                                                style: {
                                                    color: "white",
                                                    fontStyle: "bold"
                                                },
                                                children: [
                                                    banner2.button_name || "Shop Now",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "fa-solid fa-arrow-right icon ms-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 57
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                                                lineNumber: 47,
                                                columnNumber: 18
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                                            lineNumber: 46,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                                    lineNumber: 43,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-xxl-3 ratio_65 d-xxl-block d-none",
                    style: {
                        aspectRatio: '65/100'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row g-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-xxl-12 col-sm-6 pb-1.5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "home-contain",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "shop-left-sidebar.html",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IMAGES_BASE_URL"] + "/" + banner3.image,
                                                alt: banner3.name || "honeynet",
                                                width: 375,
                                                height: 252,
                                                className: "img-fluid bg-img lazyload w-full"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                                                lineNumber: 63,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                                            lineNumber: 62,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "home-detail text-white p-center text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-center",
                                                        children: banner3.sale_name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "text-center",
                                                        children: banner3.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                                                lineNumber: 66,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-xxl-12 col-sm-6 pt-1.5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "home-contain",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "shop-left-sidebar.html",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IMAGES_BASE_URL"] + "/" + banner4.image,
                                                alt: banner4.name || "honeynet",
                                                width: 375,
                                                height: 252,
                                                className: "img-fluid bg-img lazyload w-full"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                                                lineNumber: 77,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                                            lineNumber: 76,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "home-detail text-white w-50 p-center-left home-p-sm",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "fw-bold",
                                                        children: banner4.sale_name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        children: banner4.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                                                lineNumber: 80,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/banner/LayoutBanners5.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
const __TURBOPACK__default__export__ = LayoutBanners5;
}),
"[project]/src/components/features/banner/LayoutBanners6.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$banner$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/banner.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ImageError.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$BannerSliderV2$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/banner/BannerSliderV2.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function LayoutBanners6({ arr }) {
    const banners = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$banner$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBannersByArr"])(arr);
    const banner1 = banners[0];
    const banner2 = banners[1];
    const banner3 = banners[2];
    const banner4 = banners[3];
    const banner5 = banners[4];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "home-section-2 home-section-bg pt-0 overflow-hidden",
            style: {
                position: "relative",
                zIndex: 0
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-fluid p-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "slider-animate",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "home-contain rounded-0 p-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IMAGES_BASE_URL"] + "/" + banner1.image,
                                                alt: banner1.name || "honeynet",
                                                layout: "fill"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/banner/LayoutBanners6.tsx",
                                                lineNumber: 29,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "home-detail home-big-space p-center-left home-overlay position-relative",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "container-fluid-lg",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                className: "ls-expanded theme-color text-uppercase",
                                                                children: banner1.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/banner/LayoutBanners6.tsx",
                                                                lineNumber: 33,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                className: "heding-2",
                                                                children: banner1.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/banner/LayoutBanners6.tsx",
                                                                lineNumber: 35,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "content-2",
                                                                children: banner1.sale_value
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/banner/LayoutBanners6.tsx",
                                                                lineNumber: 36,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                className: "text-content",
                                                                children: banner1.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/banner/LayoutBanners6.tsx",
                                                                lineNumber: 37,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "btn theme-bg-color btn-md text-white fw-bold mt-md-4 mt-2 mend-auto",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: banner1.button_link || "#",
                                                                    style: {
                                                                        color: "white",
                                                                        fontStyle: "bold"
                                                                    },
                                                                    children: [
                                                                        banner1.button_name || "Shop Now",
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "fa-solid fa-arrow-right icon ms-2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/features/banner/LayoutBanners6.tsx",
                                                                            lineNumber: 44,
                                                                            columnNumber: 67
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/features/banner/LayoutBanners6.tsx",
                                                                    lineNumber: 40,
                                                                    columnNumber: 109
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/banner/LayoutBanners6.tsx",
                                                                lineNumber: 39,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/features/banner/LayoutBanners6.tsx",
                                                        lineNumber: 32,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/banner/LayoutBanners6.tsx",
                                                    lineNumber: 31,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/banner/LayoutBanners6.tsx",
                                                lineNumber: 30,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/banner/LayoutBanners6.tsx",
                                        lineNumber: 28,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/banner/LayoutBanners6.tsx",
                                    lineNumber: 27,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/banner/LayoutBanners6.tsx",
                                lineNumber: 26,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/banner/LayoutBanners6.tsx",
                            lineNumber: 25,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/banner/LayoutBanners6.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/features/banner/LayoutBanners6.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-fluid-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$BannerSliderV2$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        items: [
                            banner2,
                            banner3,
                            banner4,
                            banner5
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/banner/LayoutBanners6.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/features/banner/LayoutBanners6.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/banner/LayoutBanners6.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
const __TURBOPACK__default__export__ = LayoutBanners6;
}),
"[project]/src/components/features/banner/LayoutBanners7.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$banner$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/banner.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ImageError.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants/constants.ts [app-rsc] (ecmascript)");
;
;
;
;
async function LayoutBanners7({ arr }) {
    const banners = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$banner$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBannersByArr"])(arr);
    const banner1 = banners[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "home-contain rounded-0 p-0 w-100",
            style: {
                aspectRatio: "1080/1080"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IMAGES_BASE_URL"] + "/" + banner1.image,
                    className: "img-fluid bg-img    lazyload bg-top h-100 w-100",
                    alt: banner1.name || "honeynet",
                    width: 1920,
                    height: 1080
                }, void 0, false, {
                    fileName: "[project]/src/components/features/banner/LayoutBanners7.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "home-detail p-center text-center home-overlay ",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: banner1.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/banner/LayoutBanners7.tsx",
                                    lineNumber: 24,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: banner1.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/banner/LayoutBanners7.tsx",
                                    lineNumber: 25,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "search-box",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "search",
                                            className: "form-control",
                                            placeholder: "I'm searching for..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/banner/LayoutBanners7.tsx",
                                            lineNumber: 27,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            "data-feather": "search"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/banner/LayoutBanners7.tsx",
                                            lineNumber: 29,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/features/banner/LayoutBanners7.tsx",
                                    lineNumber: 26,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/features/banner/LayoutBanners7.tsx",
                            lineNumber: 23,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/banner/LayoutBanners7.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/features/banner/LayoutBanners7.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/banner/LayoutBanners7.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
const __TURBOPACK__default__export__ = LayoutBanners7;
}),
"[project]/src/lib/helper/mapParamsToComponents.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mapParamsToComponents",
    ()=>mapParamsToComponents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$Advertisement1$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/banner/Advertisement1.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$Advertisement5$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/banner/Advertisement5.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$LayoutBanners1$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/banner/LayoutBanners1.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$category$2f$CategoryMenu$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/category/CategoryMenu.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$product$2f$section$2f$HorizontalItemSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/product/section/HorizontalItemSection.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$category$2f$SearchByCategory$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/category/SearchByCategory.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$Advertisement4$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/banner/Advertisement4.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$Advertisement7$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/banner/Advertisement7.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$Advertisement6$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/banner/Advertisement6.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$Advertisement3$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/banner/Advertisement3.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$news$2f$NewsBlogSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/news/NewsBlogSection.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ContactMail$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ContactMail.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$product$2f$section$2f$VerticalNItemsFlashsale$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/product/section/VerticalNItemsFlashsale.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$LayoutBanners2$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/banner/LayoutBanners2.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$LayoutBanners3$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/banner/LayoutBanners3.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$LayoutBanners4$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/banner/LayoutBanners4.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$LayoutBanners5$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/banner/LayoutBanners5.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$LayoutBanners6$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/banner/LayoutBanners6.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$LayoutBanners7$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/banner/LayoutBanners7.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$helper$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/helper/index.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const mapParamsToComponents = (params)=>{
    return params.map((param, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: `page-${index} ${param.className}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-fluid-lg",
                children: checkHasDifferenceClassCol(param.data) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row",
                    children: param.data && param.data.map((col, colIndex)=>{
                        const hasDiff = checkHasDifferenceClassCol(col.data);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `col-md-${col.classCol} ${col.intervale || ""}`,
                            children: hasDiff ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "row",
                                children: col.data && col.data.map((obj, objIndex)=>ObjectToComponent(obj, hasDiff, objIndex))
                            }, void 0, false, {
                                fileName: "[project]/src/lib/helper/mapParamsToComponents.tsx",
                                lineNumber: 34,
                                columnNumber: 30
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: col.data && col.data.map((obj, objIndex)=>ObjectToComponent(obj, hasDiff, objIndex))
                            }, colIndex, false, {
                                fileName: "[project]/src/lib/helper/mapParamsToComponents.tsx",
                                lineNumber: 38,
                                columnNumber: 28
                            }, ("TURBOPACK compile-time value", void 0))
                        }, index + "-" + colIndex, false, {
                            fileName: "[project]/src/lib/helper/mapParamsToComponents.tsx",
                            lineNumber: 33,
                            columnNumber: 24
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, index, false, {
                    fileName: "[project]/src/lib/helper/mapParamsToComponents.tsx",
                    lineNumber: 30,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: param.data && param.data.map((col, colIndex)=>{
                        const hasDiff = checkHasDifferenceClassCol(col.data);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: hasDiff ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "row",
                                children: col.data && col.data.map((obj, objIndex)=>ObjectToComponent(obj, hasDiff, objIndex))
                            }, colIndex, false, {
                                fileName: "[project]/src/lib/helper/mapParamsToComponents.tsx",
                                lineNumber: 52,
                                columnNumber: 30
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: col.data && col.data.map((obj, objIndex)=>ObjectToComponent(obj, hasDiff, objIndex))
                            }, void 0, false)
                        }, colIndex, false, {
                            fileName: "[project]/src/lib/helper/mapParamsToComponents.tsx",
                            lineNumber: 51,
                            columnNumber: 24
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false)
            }, void 0, false, {
                fileName: "[project]/src/lib/helper/mapParamsToComponents.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, index, false, {
            fileName: "[project]/src/lib/helper/mapParamsToComponents.tsx",
            lineNumber: 26,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)));
};
const ObjectToComponent = (obj, hasDiff, key)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${obj.intervale} ${obj.classCol && hasDiff ? `col-md-${obj.classCol}` : ""}`,
        children: renderComponentByTypeAndLayout(obj)
    }, key, false, {
        fileName: "[project]/src/lib/helper/mapParamsToComponents.tsx",
        lineNumber: 75,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const checkHasDifferenceClassCol = (arr)=>{
    let hasDiff = false;
    const classColFirst = arr[0]?.classCol;
    for(let i = 1; i < arr.length; i++){
        if (arr[i]?.classCol.toString() !== classColFirst.toString()) {
            hasDiff = true;
            break;
        }
    }
    return hasDiff;
};
const getListURI = (type)=>{
    switch(type){
        case 'banners':
            return '/banners/getList';
        case 'productscat':
            return '';
        case 'advertisement':
            return '/categories';
        case 'productshot':
            return '/products/getList/hot';
        case 'flashsale':
            return '/productPromotions/getList';
        default:
            return '';
    }
};
const renderComponentByTypeAndLayout = (obj)=>{
    switch(obj?.type){
        case 'banners':
            {
                if (obj.layout === "1") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$LayoutBanners1$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        arr: obj.id || []
                    }, void 0, false, {
                        fileName: "[project]/src/lib/helper/mapParamsToComponents.tsx",
                        lineNumber: 115,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0));
                }
                if (obj.layout === "2") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$LayoutBanners2$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        arr: obj.id || []
                    }, void 0, false, {
                        fileName: "[project]/src/lib/helper/mapParamsToComponents.tsx",
                        lineNumber: 118,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0));
                }
                if (obj.layout === "3") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$LayoutBanners3$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        arr: obj.id || []
                    }, void 0, false, {
                        fileName: "[project]/src/lib/helper/mapParamsToComponents.tsx",
                        lineNumber: 121,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0));
                }
                if (obj.layout === "4") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$LayoutBanners4$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        arr: obj.id || []
                    }, void 0, false, {
                        fileName: "[project]/src/lib/helper/mapParamsToComponents.tsx",
                        lineNumber: 124,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0));
                }
                if (obj.layout === "5") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$LayoutBanners5$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        arr: obj.id || []
                    }, void 0, false, {
                        fileName: "[project]/src/lib/helper/mapParamsToComponents.tsx",
                        lineNumber: 126,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0));
                }
                if (obj.layout === "6") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$LayoutBanners6$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        arr: obj.id || []
                    }, void 0, false, {
                        fileName: "[project]/src/lib/helper/mapParamsToComponents.tsx",
                        lineNumber: 128,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0));
                }
                if (obj.layout === "7") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$LayoutBanners7$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        arr: obj.id || []
                    }, void 0, false, {
                        fileName: "[project]/src/lib/helper/mapParamsToComponents.tsx",
                        lineNumber: 130,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0));
                }
            }
        case 'productscat':
            {
                if (obj.layout === "1") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$category$2f$CategoryMenu$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        title: obj.name ? obj.name["1"] : "",
                        uri: '/categories/getListByArrayIds',
                        id: obj.id
                    }, void 0, false, {
                        fileName: "[project]/src/lib/helper/mapParamsToComponents.tsx",
                        lineNumber: 135,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0));
                }
                if (obj.layout === "2") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$category$2f$SearchByCategory$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        uri: "/categories/getListByArrayIds",
                        title: obj.name ? obj.name["1"] : "",
                        description: obj.des ? obj.des["1"] : "",
                        id: obj.id
                    }, void 0, false, {
                        fileName: "[project]/src/lib/helper/mapParamsToComponents.tsx",
                        lineNumber: 138,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0));
                }
            }
        case 'advertisement':
            {
                if (obj.layout === "1") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$Advertisement1$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        id: typeof obj.id === "string" ? obj.id : undefined
                    }, void 0, false, {
                        fileName: "[project]/src/lib/helper/mapParamsToComponents.tsx",
                        lineNumber: 148,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0));
                }
                if (obj.layout === "3") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$Advertisement3$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        id: typeof obj.id === "string" ? obj.id : undefined
                    }, void 0, false, {
                        fileName: "[project]/src/lib/helper/mapParamsToComponents.tsx",
                        lineNumber: 151,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0));
                }
                if (obj.layout === "4") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$Advertisement4$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        id: typeof obj.id === "string" ? obj.id : undefined
                    }, void 0, false, {
                        fileName: "[project]/src/lib/helper/mapParamsToComponents.tsx",
                        lineNumber: 154,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0));
                }
                if (obj.layout === "5") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$Advertisement5$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        id: typeof obj.id === "string" ? obj.id : undefined
                    }, void 0, false, {
                        fileName: "[project]/src/lib/helper/mapParamsToComponents.tsx",
                        lineNumber: 157,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0));
                }
                if (obj.layout === "6") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$Advertisement6$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        id: typeof obj.id === "string" ? obj.id : undefined
                    }, void 0, false, {
                        fileName: "[project]/src/lib/helper/mapParamsToComponents.tsx",
                        lineNumber: 160,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0));
                }
                if (obj.layout === "7") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$banner$2f$Advertisement7$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        id: typeof obj.id === "string" ? obj.id : undefined
                    }, void 0, false, {
                        fileName: "[project]/src/lib/helper/mapParamsToComponents.tsx",
                        lineNumber: 163,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0));
                }
            }
        // /products/getList ? hotSh = 1
        case 'productshot':
            {
                if (obj.layout === "1") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$product$2f$section$2f$HorizontalItemSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildURIWithQueries"])("/products/getList", {
                            hotSh: 1,
                            limit: obj.limit,
                            order: obj.order
                        }),
                        n: 4,
                        hasIcon: false,
                        hasUnderline: true,
                        title: obj.name ? obj.name["1"] : "",
                        description: obj.des ? obj.des["1"] : "",
                        link: obj.link ? obj.link["1"] : "",
                        wrapperStyle: {
                            padding: "10px"
                        },
                        breakpoints: {
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 0
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/lib/helper/mapParamsToComponents.tsx",
                        lineNumber: 172,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0));
                }
                if (obj.layout === "4") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$product$2f$section$2f$HorizontalItemSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildURIWithQueries"])("/products/getList", {
                            hotSh: 1,
                            limit: obj.limit,
                            order: obj.order
                        }),
                        n: 4,
                        classOfColumn: "p-4 rounded-xl border ",
                        hasIcon: true,
                        title: obj.name ? obj.name["1"] : "",
                        description: obj.des ? obj.des["1"] : "",
                        link: obj.link ? obj.link["1"] : "",
                        wrapperStyle: {
                            padding: "10px"
                        },
                        breakpoints: {
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 0
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            960: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/lib/helper/mapParamsToComponents.tsx",
                        lineNumber: 197,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0));
                }
            }
        case 'flashsale':
            {
                if (obj.layout === "1") {
                    const { flashType, startCountdownDate, endCountdownDate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$helper$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInfoTimeFlashSale"])();
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$product$2f$section$2f$VerticalNItemsFlashsale$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildURIWithQueries"])("/promotions/getFlashSaleByProducts", {
                            limit: obj.limit,
                            order: obj.order,
                            ft: flashType
                        }),
                        title: obj.name ? obj.name["1"] : "",
                        description: obj.des ? obj.des["1"] : "",
                        link: "/flash-sale",
                        n: 1,
                        classOfItem: "border-r border-gray-300 rounded bg-white",
                        startDate: startCountdownDate,
                        isFlashSaleItem: true,
                        endDate: endCountdownDate,
                        breakpoints: {
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 5
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 5
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 10
                            },
                            1280: {
                                slidesPerView: 6,
                                spaceBetween: 10
                            }
                        },
                        hasNavigation: true
                    }, void 0, false, {
                        fileName: "[project]/src/lib/helper/mapParamsToComponents.tsx",
                        lineNumber: 235,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0));
                }
                if (obj.layout === "3") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$product$2f$section$2f$VerticalNItemsFlashsale$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildURIWithQueries"])("/promotions/getFlashSaleByProducts", {
                            limit: obj.limit,
                            order: obj.order
                        }),
                        title: obj.name ? obj.name["1"] : "",
                        description: obj.des ? obj.des["1"] : "",
                        link: obj.link ? obj.link["1"] : "",
                        n: 1,
                        isFlashSaleItem: false,
                        classOfItem: "border-r border-gray-300 rounded bg-white",
                        breakpoints: {
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 5
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 5
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 10
                            },
                            1280: {
                                slidesPerView: 6,
                                spaceBetween: 10
                            }
                        },
                        hasNavigation: true
                    }, void 0, false, {
                        fileName: "[project]/src/lib/helper/mapParamsToComponents.tsx",
                        lineNumber: 272,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0));
                }
            }
        case 'newshot':
            {
                if (obj.layout === "1") {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$news$2f$NewsBlogSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        uri: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildURIWithQueries"])("/news/getList", {
                            limit: obj.limit,
                            order: obj.order,
                            hotSh: 1
                        }),
                        title: obj.name ? obj.name["1"] : "",
                        description: obj.des ? obj.des["1"] : "",
                        link: obj.link ? obj.link["1"] : "",
                        wrapperStyle: {
                            border: "none"
                        },
                        breakpoints: {
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 15
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/lib/helper/mapParamsToComponents.tsx",
                        lineNumber: 308,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0));
                }
            }
        case 'contact':
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ContactMail$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/lib/helper/mapParamsToComponents.tsx",
                    lineNumber: 328,
                    columnNumber: 14
                }, ("TURBOPACK compile-time value", void 0));
            }
        default:
            return '';
    }
};
}),
"[project]/src/app/(sites)/(pages)/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home,
    "defaultBanner",
    ()=>defaultBanner,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$helper$2f$mapParamsToComponents$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/helper/mapParamsToComponents.tsx [app-rsc] (ecmascript)");
;
;
;
const defaultBanner = {
    "id": 1,
    "name": "Deal siêu hot",
    "description": "Hoa quả tươi",
    "button_link": "#",
    "button_name": "Xem thêm",
    "sale_name": "Giảm giá",
    "sale_value": "5% OFF",
    "image": "/images/banner/5.jpg",
    "sort_order": 1,
    "status": 1,
    "is_deleted": 0,
    "created_at": "2025-11-24T00:00:00Z",
    "updated_at": "2025-11-24T00:00:00Z",
    "created_by": 0,
    "updated_by": 0
};
async function generateMetadata() {
    try {
        const structure = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiFetchSites"])('/pages/getDetail/home');
        const pageData = structure;
        const title = pageData?.meta_title || "Tiêu đề mặc định";
        const description = pageData?.meta_description || "Mô tả mặc định";
        const keywords = pageData?.meta_keywords || "Từ khóa mặc định";
        return {
            title: title,
            description: description,
            keywords: keywords,
            openGraph: {
                title: title,
                description: description
            }
        };
    } catch (error) {
        console.error('Error fetching metadata:', error);
        return {
            title: "Sản thương mại điện tử - Công ty Cổ phần HONEYNET",
            description: "Mô tả mặc định",
            keywords: "Từ khóa mặc định"
        };
    }
}
async function Home() {
    let structure = null;
    try {
        structure = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiFetchSites"])('/pages/getDetail/home');
    } catch (error) {
        console.error('Error fetching home page structure:', error);
        structure = {
            params: []
        };
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "d-none",
                children: "Sản thương mại điện tử - Công ty Cổ phần HONEYNET"
            }, void 0, false, {
                fileName: "[project]/src/app/(sites)/(pages)/page.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$helper$2f$mapParamsToComponents$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mapParamsToComponents"])(structure?.params || [])
        ]
    }, void 0, true);
}
}),
"[project]/src/app/(sites)/(pages)/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(sites)/(pages)/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c34b9d9a._.js.map