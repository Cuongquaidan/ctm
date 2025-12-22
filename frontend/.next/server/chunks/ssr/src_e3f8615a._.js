module.exports = [
"[project]/src/components/features/footer/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ImageError.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$provider$2f$ConfigProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/provider/ConfigProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function Footer() {
    const { config } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$provider$2f$ConfigProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConfig"])();
    const [menuData, setMenuData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState([]);
    const handleFetchMenuData = async ()=>{
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiFetchSites"])('/menu/getFuncMenu?menu_type=2');
            setMenuData(data);
        } catch (error) {
            console.error('Error fetching menu data:', error);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        handleFetchMenuData();
    }, []);
    const getLinkHref = (item)=>{
        // Nếu alias/param không tồn tại, trả về null hoặc '#' để tránh lỗi
        if (!item.alias && !item.param) return null;
        switch(item.type){
            case 1:
                return "/news/" + item.alias;
            case 2:
                return "/news/sections/" + item.alias;
            case 3:
                return item.param;
            case 4:
                return item.alias;
            case 5:
                return "/product/" + item.alias;
            case 6:
                return "/" + item.alias;
            default:
                return "#";
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].footer, {
        initial: {
            opacity: 0
        },
        whileInView: {
            opacity: 1
        },
        transition: {
            duration: 0.6
        },
        viewport: {
            once: true,
            amount: 0
        },
        className: "border-top pb-md-0 pb-1",
        children: config && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-fluid-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "main-footer section-b-space section-t-space border-top-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row g-md-4 g-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-xl-3 col-lg-4 col-sm-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "footer-logo",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "theme-logo mb-3 mt-3 mt-md-0",
                                            children: config?.logo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "/",
                                                children: (config.logo || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fixedSiteConfig"].logo) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    width: 300,
                                                    height: 300,
                                                    src: config.logo || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fixedSiteConfig"].logo,
                                                    className: "lazyload h-55 w-100",
                                                    alt: config?.name_1 || "Sản thương mại điện thử - Công ty Cổ phần HONEYNET"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/footer/Footer.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 72
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/footer/Footer.tsx",
                                                lineNumber: 65,
                                                columnNumber: 27
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/footer/Footer.tsx",
                                            lineNumber: 62,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "footer-logo-contain mt-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    dangerouslySetInnerHTML: {
                                                        __html: config.description_1
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/footer/Footer.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "address",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            className: "ms-0",
                                                            href: "#",
                                                            children: config?.address_1
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/features/footer/Footer.tsx",
                                                            lineNumber: 77,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/footer/Footer.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/footer/Footer.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/features/footer/Footer.tsx",
                                            lineNumber: 73,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/features/footer/Footer.tsx",
                                    lineNumber: 61,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/footer/Footer.tsx",
                                lineNumber: 60,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-xl-2 col-lg-4 col-md-4 col-sm-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "footer-title",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            children: menuData?.[0]?.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/footer/Footer.tsx",
                                            lineNumber: 85,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/footer/Footer.tsx",
                                        lineNumber: 84,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "footer-contain",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            children: menuData?.[0]?.subs?.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: getLinkHref(item) || "#",
                                                        className: "text-content",
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/footer/Footer.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 29
                                                    }, this)
                                                }, index, false, {
                                                    fileName: "[project]/src/components/features/footer/Footer.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 27
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/footer/Footer.tsx",
                                            lineNumber: 88,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/footer/Footer.tsx",
                                        lineNumber: 87,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/footer/Footer.tsx",
                                lineNumber: 83,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-xl col-lg-4 col-sm-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "footer-title",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            children: menuData?.[1]?.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/footer/Footer.tsx",
                                            lineNumber: 102,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/footer/Footer.tsx",
                                        lineNumber: 101,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "footer-contain",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            children: menuData?.[1]?.subs?.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: getLinkHref(item) || "#",
                                                        className: "text-content",
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/footer/Footer.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 29
                                                    }, this)
                                                }, index, false, {
                                                    fileName: "[project]/src/components/features/footer/Footer.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 27
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/footer/Footer.tsx",
                                            lineNumber: 105,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/footer/Footer.tsx",
                                        lineNumber: 104,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/footer/Footer.tsx",
                                lineNumber: 100,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ms-auto col-xl-3 col-lg-4 col-sm-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "footer-title",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            children: "Liên hệ"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/footer/Footer.tsx",
                                            lineNumber: 121,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/footer/Footer.tsx",
                                        lineNumber: 120,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "footer-contact",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "footer-number",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "far fa-phone"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/footer/Footer.tsx",
                                                                lineNumber: 127,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "contact-number",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Hotline:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/features/footer/Footer.tsx",
                                                                        lineNumber: 129,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: config?.hotline
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/features/footer/Footer.tsx",
                                                                        lineNumber: 130,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/features/footer/Footer.tsx",
                                                                lineNumber: 128,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/features/footer/Footer.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/footer/Footer.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "footer-number",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "far fa-envelope"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/footer/Footer.tsx",
                                                                lineNumber: 137,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "contact-number",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Email :"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/features/footer/Footer.tsx",
                                                                        lineNumber: 139,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            href: "mail:info@honeynet.vn",
                                                                            children: config?.email
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/features/footer/Footer.tsx",
                                                                            lineNumber: 140,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/features/footer/Footer.tsx",
                                                                        lineNumber: 140,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/features/footer/Footer.tsx",
                                                                lineNumber: 138,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/features/footer/Footer.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/footer/Footer.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "social-app mb-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "mb-2 text-content",
                                                            children: "Tải ứng dụng :"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/features/footer/Footer.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "mb-0",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: config?.playstore_link,
                                                                        target: "_blank",
                                                                        "aria-label": "playstore",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            width: 300,
                                                                            height: 300,
                                                                            src: "/assets/eme2023/images/playstore.svg",
                                                                            className: "lazyload",
                                                                            alt: "playstore"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/features/footer/Footer.tsx",
                                                                            lineNumber: 150,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/features/footer/Footer.tsx",
                                                                        lineNumber: 149,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/features/footer/Footer.tsx",
                                                                    lineNumber: 148,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "mb-0",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: config?.appstore_link,
                                                                        target: "_blank",
                                                                        "aria-label": "appstore",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            width: 300,
                                                                            height: 300,
                                                                            src: "/assets/eme2023/images/appstore.svg",
                                                                            className: "lazyload",
                                                                            alt: "appstore"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/features/footer/Footer.tsx",
                                                                            lineNumber: 155,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/features/footer/Footer.tsx",
                                                                        lineNumber: 154,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/features/footer/Footer.tsx",
                                                                    lineNumber: 153,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/features/footer/Footer.tsx",
                                                            lineNumber: 147,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/features/footer/Footer.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/features/footer/Footer.tsx",
                                            lineNumber: 124,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/footer/Footer.tsx",
                                        lineNumber: 123,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/footer/Footer.tsx",
                                lineNumber: 119,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/footer/Footer.tsx",
                        lineNumber: 59,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/features/footer/Footer.tsx",
                    lineNumber: 58,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sub-footer section-small-space",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "reserve",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-content h6 mb-0",
                                children: config?.copyright_1
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/footer/Footer.tsx",
                                lineNumber: 167,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/footer/Footer.tsx",
                            lineNumber: 166,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "payment d-flex align-items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                unoptimized: true,
                                width: 300,
                                height: 300,
                                src: "/assets/eme2023/images/payment/1.png",
                                className: "lazyload",
                                alt: "payment"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/footer/Footer.tsx",
                                lineNumber: 170,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/footer/Footer.tsx",
                            lineNumber: 169,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "social-link",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-content h6 me-2 mb-0",
                                    children: "Liên kết :"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/footer/Footer.tsx",
                                    lineNumber: 173,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fixedSiteConfig"]?.socials?.map((social, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: config[social.key],
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    dangerouslySetInnerHTML: {
                                                        __html: social.icon
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/footer/Footer.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/footer/Footer.tsx",
                                                lineNumber: 179,
                                                columnNumber: 25
                                            }, this)
                                        }, index, false, {
                                            fileName: "[project]/src/components/features/footer/Footer.tsx",
                                            lineNumber: 178,
                                            columnNumber: 23
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/footer/Footer.tsx",
                                    lineNumber: 174,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/features/footer/Footer.tsx",
                            lineNumber: 172,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/features/footer/Footer.tsx",
                    lineNumber: 165,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/footer/Footer.tsx",
            lineNumber: 57,
            columnNumber: 11
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/features/footer/Footer.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Footer;
}),
"[project]/src/components/features/header/NavTopCategoryItemSubList.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function NavTopCategoryItemSubList({ item }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `list-${item.item.id}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "category-title-box",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/" + item.item.alias,
                        children: item.item.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/header/NavTopCategoryItemSubList.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/features/header/NavTopCategoryItemSubList.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/features/header/NavTopCategoryItemSubList.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            item.children && item.children.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "pl-4 mt-1",
                children: item.children.map((child, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/" + child.item.alias,
                            children: child.item.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/header/NavTopCategoryItemSubList.tsx",
                            lineNumber: 25,
                            columnNumber: 15
                        }, this)
                    }, idx, false, {
                        fileName: "[project]/src/components/features/header/NavTopCategoryItemSubList.tsx",
                        lineNumber: 24,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/features/header/NavTopCategoryItemSubList.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this)
        ]
    }, item.item.id, true, {
        fileName: "[project]/src/components/features/header/NavTopCategoryItemSubList.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = NavTopCategoryItemSubList;
}),
"[project]/src/components/features/header/NavTopCategoryItem.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ImageError.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$header$2f$NavTopCategoryItemSubList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/header/NavTopCategoryItemSubList.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const NavTopCategoryItem = ({ item })=>{
    const category = item?.item || item;
    const children = item?.children || [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "onhover-category-list",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "/" + category.alias,
                className: "category-name flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: category.image !== null ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMAGES_BASE_URL"] + "/" + category.image : '/images/logo.png',
                        width: 40,
                        height: 40,
                        alt: category.name || 'honeynet'
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/header/NavTopCategoryItem.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                        children: category.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/header/NavTopCategoryItem.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    children?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "fa-solid fa-angle-right ml-auto"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/header/NavTopCategoryItem.tsx",
                        lineNumber: 23,
                        columnNumber: 34
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/header/NavTopCategoryItem.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            children && children.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "onhover-category-box grid grid-cols-2 md:grid-cols-3 gap-4 mt-2 p-2",
                children: children.map((childItem, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$header$2f$NavTopCategoryItemSubList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        item: childItem
                    }, index, false, {
                        fileName: "[project]/src/components/features/header/NavTopCategoryItem.tsx",
                        lineNumber: 29,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/features/header/NavTopCategoryItem.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/header/NavTopCategoryItem.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = NavTopCategoryItem;
}),
"[project]/src/lib/helper/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants/constants.ts [app-ssr] (ecmascript)");
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
    for(let i = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FLASH_SALE_TYPES"].length - 1; i >= 0; i--){
        const hour = parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FLASH_SALE_TYPES"][i].split(":")[0], 10);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CURRENT_HOUR"] >= hour) {
            flashType = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FLASH_SALE_TYPES"][i];
            break;
        }
    }
    const startCountdownDate = new Date(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CURRENT"].getFullYear(), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CURRENT"].getMonth(), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CURRENT"].getDate(), parseInt(flashType.split(":")[0], 10), 0, 0);
    const indexOfFlash = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FLASH_SALE_TYPES"].indexOf(flashType);
    let endCountdownDate;
    if (indexOfFlash === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FLASH_SALE_TYPES"].length - 1) {
        endCountdownDate = new Date(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CURRENT"].getFullYear(), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CURRENT"].getMonth(), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CURRENT"].getDate() + 1, parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FLASH_SALE_TYPES"][0].split(":")[0], 10), 0, 0);
    } else {
        endCountdownDate = new Date(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CURRENT"].getFullYear(), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CURRENT"].getMonth(), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CURRENT"].getDate(), parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FLASH_SALE_TYPES"][indexOfFlash + 1].split(":")[0], 10), 0, 0);
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
"[project]/src/components/features/header/NavTopCategoryDropdown.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$header$2f$NavTopCategoryItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/header/NavTopCategoryItem.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$helper$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/helper/index.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function NavTopCategoryDropdown() {
    const [categoryData, setCategoryData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const handleFetchData = async ()=>{
        const resdata = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiFetchSites"])("/categories/getList?isPaginated=false");
        const filteredData = resdata.filter((item)=>item.parent_id === 0);
        const transformedData = filteredData.map((item)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$helper$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findDescendantsRecursive"])(item.id, resdata));
        setCategoryData(transformedData);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        handleFetchData();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "category-dropdown hidden lg:block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "category-title",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                        children: "Danh mục"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/header/NavTopCategoryDropdown.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "btn p-0 close-button text-content",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "fa-solid fa-xmark"
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/header/NavTopCategoryDropdown.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/header/NavTopCategoryDropdown.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/header/NavTopCategoryDropdown.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "category-list",
                children: categoryData?.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$header$2f$NavTopCategoryItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        item: item
                    }, index, false, {
                        fileName: "[project]/src/components/features/header/NavTopCategoryDropdown.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/features/header/NavTopCategoryDropdown.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/header/NavTopCategoryDropdown.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = NavTopCategoryDropdown;
}),
"[project]/src/assets/lordicon/dnoiydox.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"v\":\"5.7.4\",\"fr\":24,\"ip\":0,\"op\":25,\"w\":500,\"h\":500,\"nm\":\"139-basket-outline\",\"ddd\":0,\"assets\":[],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":3,\"nm\":\"02092020\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":0,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[-105,15,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[60,60,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2}},\"ao\":0,\"ef\":[{\"ty\":5,\"nm\":\"02092020002\",\"np\":3,\"mn\":\"ADBE Checkbox Control\",\"ix\":1,\"en\":1,\"ef\":[{\"ty\":7,\"nm\":\"Checkbox\",\"mn\":\"ADBE Checkbox Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":0,\"ix\":1}}]}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"lordicon.com Outlines\",\"cl\":\"com\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":20,\"ix\":11,\"x\":\"var $bm_rt;\\nvar checkbox = thisComp.layer('02092020').effect('02092020002')('Checkbox');\\nif (checkbox == 1) {\\n    $bm_rt = 20;\\n} else {\\n    $bm_rt = 0;\\n}\\n;\"},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[249.934,481.369,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[79.934,0.369,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[265.159,265.159,100],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[1.415,0],[11.014,0],[11.014,-2.523],[4.656,-2.523],[4.656,-14.809],[1.415,-14.809]],\"c\":true},\"ix\":2},\"nm\":\"l\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"l\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-3.938],[-1.62,-1.723],[-1.949,0],[-1.641,1.846],[0,2.154],[1.579,1.805],[1.579,0]],\"o\":[[0,1.354],[1.354,1.415],[1.231,0],[1.21,-1.354],[0,-1.456],[-1.456,-1.641],[-5.333,0]],\"v\":[[11.167,-7.199],[12.992,-1.661],[18.243,0.369],[23.514,-1.743],[25.381,-7.548],[23.494,-13.127],[18.284,-15.137]],\"c\":true},\"ix\":2},\"nm\":\"o\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,1.415],[-0.841,1.026],[-1.19,0],[-0.615,-1.825],[0,-0.718],[0.492,-0.738],[1.292,0],[0.451,0.615]],\"o\":[[0,-1.682],[0.595,-0.759],[1.518,0],[0.308,0.902],[0,2.359],[-0.595,0.923],[-1.477,0],[-0.882,-1.149]],\"v\":[[14.49,-7.302],[15.577,-11.609],[18.305,-12.86],[21.689,-10.235],[22.058,-7.589],[21.053,-3.343],[18.284,-1.969],[15.597,-3.159]],\"c\":true},\"ix\":2},\"nm\":\"o\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"o\",\"np\":5,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[-0.287,-0.841],[-0.144,-0.82],[0,0],[0.164,0.656],[0.226,1.743],[2.236,0.205],[0,2.769],[0.923,0.8],[1.641,-0.021],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0.533,0],[0.205,0.574],[0,0],[-0.164,-0.246],[-0.103,-0.41],[-0.267,-1.928],[0.718,-0.205],[0,-0.964],[-1.19,-1.026],[0,0],[0,0]],\"v\":[[27.381,0],[30.622,0],[30.622,-5.989],[33.411,-5.989],[35.011,-5.148],[35.811,0],[39.318,0],[38.867,-1.067],[38.416,-3.938],[35.749,-7.343],[38.847,-10.973],[37.554,-13.824],[33.063,-14.829],[27.381,-14.829]],\"c\":true},\"ix\":2},\"nm\":\"r\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-0.492,-0.349],[0,-1.005],[0.226,-0.164],[0.369,0],[0,0]],\"o\":[[0,0],[1.005,0],[0.287,0.185],[0,1.046],[-0.513,0.41],[0,0],[0,0]],\"v\":[[30.519,-12.491],[32.652,-12.491],[34.744,-12.142],[35.524,-10.481],[34.703,-8.758],[33.083,-8.348],[30.519,-8.348]],\"c\":true},\"ix\":2},\"nm\":\"r\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"r\",\"np\":5,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-0.554,0.103],[0,4.553],[1.866,1.374],[0.82,0],[0,0]],\"o\":[[0,0],[1.497,0],[2.81,-0.513],[0,-2.113],[-1.784,-1.313],[0,0],[0,0]],\"v\":[[41.068,0],[45.683,0],[48.349,-0.164],[53.6,-7.609],[51.077,-13.434],[45.97,-14.768],[41.068,-14.788]],\"c\":true},\"ix\":2},\"nm\":\"d\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.656,-0.185],[0,-2.092],[1.251,-1.251],[1.354,0],[0.349,0.021]],\"o\":[[1.825,-0.082],[1.99,0.554],[0,0.718],[-0.923,0.923],[-0.369,0],[0,0]],\"v\":[[44.288,-12.388],[47.611,-12.183],[50.318,-7.609],[48.985,-3.425],[45.539,-2.4],[44.288,-2.441]],\"c\":true},\"ix\":2},\"nm\":\"d\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"d\",\"np\":5,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[55.669,0],[58.849,0],[58.849,-14.87],[55.669,-14.87]],\"c\":true},\"ix\":2},\"nm\":\"i\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"i\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[3.241,0],[0,-4.697],[-5.107,0],[-1.313,1.354],[-0.062,0.882],[0,0],[1.333,0],[0,0.882],[-2.359,0],[-0.062,-0.513]],\"o\":[[0,-2.954],[-4.164,0],[0,3.671],[1.354,0],[1.19,-1.231],[0,0],[-0.062,1.969],[-3.097,0],[0,-3.056],[2.154,0],[0,0]],\"v\":[[73.104,-9.989],[67.587,-14.911],[60.798,-7.097],[67.566,0.349],[71.894,-1.313],[73.227,-4.799],[69.884,-4.799],[67.218,-1.99],[64.121,-7.076],[67.464,-12.593],[69.864,-9.989]],\"c\":true},\"ix\":2},\"nm\":\"c\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"c\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-3.938],[-1.62,-1.723],[-1.949,0],[-1.641,1.846],[0,2.154],[1.579,1.805],[1.579,0]],\"o\":[[0,1.354],[1.354,1.415],[1.231,0],[1.21,-1.354],[0,-1.456],[-1.456,-1.641],[-5.333,0]],\"v\":[[74.546,-7.199],[76.372,-1.661],[81.622,0.369],[86.894,-1.743],[88.76,-7.548],[86.873,-13.127],[81.663,-15.137]],\"c\":true},\"ix\":2},\"nm\":\"o\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,1.415],[-0.841,1.026],[-1.19,0],[-0.615,-1.825],[0,-0.718],[0.492,-0.738],[1.292,0],[0.451,0.615]],\"o\":[[0,-1.682],[0.595,-0.759],[1.518,0],[0.308,0.902],[0,2.359],[-0.595,0.923],[-1.477,0],[-0.882,-1.149]],\"v\":[[77.869,-7.302],[78.956,-11.609],[81.684,-12.86],[85.068,-10.235],[85.437,-7.589],[84.432,-3.343],[81.663,-1.969],[78.977,-3.159]],\"c\":true},\"ix\":2},\"nm\":\"o\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"o\",\"np\":5,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[91.007,0],[94.001,0],[94.001,-12.306],[99.744,0],[104.113,0],[104.113,-14.829],[101.159,-14.829],[101.159,-3.159],[95.601,-14.829],[91.007,-14.829]],\"c\":true},\"ix\":2},\"nm\":\"n\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"n\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":8,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[106.893,0],[109.497,0],[109.497,-2.728],[106.893,-2.728]],\"c\":true},\"ix\":2},\"nm\":\".\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\".\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":9,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[3.241,0],[0,-4.697],[-5.107,0],[-1.313,1.354],[-0.062,0.882],[0,0],[1.333,0],[0,0.882],[-2.359,0],[-0.062,-0.513]],\"o\":[[0,-2.954],[-4.164,0],[0,3.671],[1.354,0],[1.19,-1.231],[0,0],[-0.062,1.969],[-3.097,0],[0,-3.056],[2.154,0],[0,0]],\"v\":[[124.04,-9.989],[118.523,-14.911],[111.734,-7.097],[118.502,0.349],[122.83,-1.313],[124.163,-4.799],[120.82,-4.799],[118.154,-1.99],[115.057,-7.076],[118.4,-12.593],[120.8,-9.989]],\"c\":true},\"ix\":2},\"nm\":\"c\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"c\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":10,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-3.938],[-1.62,-1.723],[-1.949,0],[-1.641,1.846],[0,2.154],[1.579,1.805],[1.579,0]],\"o\":[[0,1.354],[1.354,1.415],[1.231,0],[1.21,-1.354],[0,-1.456],[-1.456,-1.641],[-5.333,0]],\"v\":[[125.482,-7.199],[127.308,-1.661],[132.558,0.369],[137.829,-1.743],[139.696,-7.548],[137.809,-13.127],[132.599,-15.137]],\"c\":true},\"ix\":2},\"nm\":\"o\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,1.415],[-0.841,1.026],[-1.19,0],[-0.615,-1.825],[0,-0.718],[0.492,-0.738],[1.292,0],[0.451,0.615]],\"o\":[[0,-1.682],[0.595,-0.759],[1.518,0],[0.308,0.902],[0,2.359],[-0.595,0.923],[-1.477,0],[-0.882,-1.149]],\"v\":[[128.805,-7.302],[129.892,-11.609],[132.62,-12.86],[136.004,-10.235],[136.373,-7.589],[135.368,-3.343],[132.599,-1.969],[129.912,-3.159]],\"c\":true},\"ix\":2},\"nm\":\"o\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"o\",\"np\":5,\"cix\":2,\"bm\":0,\"ix\":11,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[141.696,0],[144.67,0],[144.67,-12.716],[148.629,0],[151.254,0],[155.295,-12.716],[155.295,0],[158.453,0],[158.453,-14.829],[153.408,-14.829],[150.024,-4.041],[146.885,-14.829],[141.696,-14.829]],\"c\":true},\"ix\":2},\"nm\":\"m\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"m\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":12,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":1,\"op\":10,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":3,\"nm\":\"Color  & Stroke Change\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":0,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2}},\"ao\":0,\"ef\":[{\"ty\":5,\"nm\":\"Primary\",\"np\":3,\"mn\":\"ADBE Color Control\",\"ix\":1,\"en\":1,\"ef\":[{\"ty\":2,\"nm\":\"Color\",\"mn\":\"ADBE Color Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":[0.070588238537,0.074509806931,0.192156866193,1],\"ix\":1}}]},{\"ty\":5,\"nm\":\"Secondary\",\"np\":3,\"mn\":\"ADBE Color Control\",\"ix\":2,\"en\":1,\"ef\":[{\"ty\":2,\"nm\":\"Color\",\"mn\":\"ADBE Color Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":[0.031372550875,0.658823549747,0.541176497936,1],\"ix\":1}}]},{\"ty\":5,\"nm\":\"Stroke\",\"np\":3,\"mn\":\"ADBE Slider Control\",\"ix\":3,\"en\":1,\"ef\":[{\"ty\":0,\"nm\":\"Slider\",\"mn\":\"ADBE Slider Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":70,\"ix\":1}}]},{\"ty\":5,\"nm\":\"Scale\",\"np\":3,\"mn\":\"ADBE Slider Control\",\"ix\":4,\"en\":1,\"ef\":[{\"ty\":0,\"nm\":\"Slider\",\"mn\":\"ADBE Slider Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":100,\"ix\":1}}]},{\"ty\":5,\"nm\":\"Axis\",\"np\":3,\"mn\":\"ADBE Point Control\",\"ix\":5,\"en\":1,\"ef\":[{\"ty\":3,\"nm\":\"Point\",\"mn\":\"ADBE Point Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":[250,250],\"ix\":1}}]}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":3,\"nm\":\"NULL 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":0,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[250,250,0],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = thisComp.layer('Color  & Stroke Change').effect('Axis')('Point');\",\"l\":2},\"a\":{\"a\":0,\"k\":[60,60,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"x\":\"var $bm_rt;\\nvar temp;\\ntemp = thisComp.layer('Color  & Stroke Change').effect('Scale')('Slider');\\n$bm_rt = [\\n    temp,\\n    temp\\n];\",\"l\":2}},\"ao\":0,\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":3,\"nm\":\"NULL\",\"parent\":4,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":0,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[60,60,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[60,60,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[430,430,100],\"ix\":6,\"l\":2}},\"ao\":0,\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":3,\"nm\":\"NULL\",\"parent\":5,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":0,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":0,\"s\":[0]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":4.833,\"s\":[5]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":10,\"s\":[-5]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":15,\"s\":[7.032]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":19,\"s\":[-0.795]},{\"t\":23.494140625,\"s\":[0]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[60,22.25,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[60,60,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[26,26,100],\"ix\":6,\"l\":2}},\"ao\":0,\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":7,\"ty\":4,\"nm\":\"Shape Layer 2\",\"parent\":6,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":0,\"s\":[0]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":4.833,\"s\":[19]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":10,\"s\":[-19]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":15,\"s\":[1.522]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":19,\"s\":[-4.366]},{\"t\":23.494140625,\"s\":[0]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[60.12,193.654,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[-5.969,-1,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[384.615,384.615,100],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-45.5,-2.25],[-33.297,38.578],[21.664,38.578],[33.5,-2.5]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"rd\",\"nm\":\"Round Corners 1\",\"r\":{\"a\":0,\"k\":5,\"ix\":1},\"ix\":2,\"mn\":\"ADBE Vector Filter - RC\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.070588238537,0.074509806931,0.192156881094,1],\"ix\":3,\"x\":\"var $bm_rt;\\n$bm_rt = thisComp.layer('Color  & Stroke Change').effect('Primary')('Color');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5,\"x\":\"var $bm_rt;\\n$bm_rt = $bm_mul(4.2 / 100, thisComp.layer('Color  & Stroke Change').effect('Stroke')('Slider'));\"},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 5\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":0,\"k\":[86,10],\"ix\":2},\"p\":{\"a\":0,\"k\":[-1,0.5],\"ix\":3},\"r\":{\"a\":0,\"k\":3,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.070588238537,0.074509806931,0.192156881094,1],\"ix\":3,\"x\":\"var $bm_rt;\\n$bm_rt = thisComp.layer('Color  & Stroke Change').effect('Primary')('Color');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5,\"x\":\"var $bm_rt;\\n$bm_rt = $bm_mul(4.2 / 100, thisComp.layer('Color  & Stroke Change').effect('Stroke')('Slider'));\"},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-5,-8],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[0.274,-1.395],[0.35,-34.876]],\"c\":false},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"d\":1,\"ty\":\"el\",\"s\":{\"a\":0,\"k\":[5,5],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"nm\":\"Ellipse Path 1\",\"mn\":\"ADBE Vector Shape - Ellipse\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0,0,1],\"ix\":4,\"x\":\"var $bm_rt;\\n$bm_rt = content('Ellipse 1').content('Stroke 1').color;\"},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.070588238537,0.074509806931,0.192156881094,1],\"ix\":3,\"x\":\"var $bm_rt;\\n$bm_rt = thisComp.layer('Color  & Stroke Change').effect('Primary')('Color');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5,\"x\":\"var $bm_rt;\\n$bm_rt = $bm_mul(4.2 / 100, thisComp.layer('Color  & Stroke Change').effect('Stroke')('Slider'));\"},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-5.813,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6,\"x\":\"var $bm_rt;\\n$bm_rt = $bm_neg(transform.rotation);\"},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Ellipse 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[-18.05,8.98],[-15.474,29.547]],\"c\":false},\"ix\":2},\"nm\":\"Path 9\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[-31.097,4.261],[-25.021,29.747]],\"c\":false},\"ix\":2},\"nm\":\"Path 8\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[-5.434,11.392],[-5.527,29.72]],\"c\":false},\"ix\":2},\"nm\":\"Path 5\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":3,\"ty\":\"sh\",\"ix\":4,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[7.066,8.571],[4.526,29.72]],\"c\":false},\"ix\":2},\"nm\":\"Path 7\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":4,\"ty\":\"sh\",\"ix\":5,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[20.066,4.235],[14.049,29.711]],\"c\":false},\"ix\":2},\"nm\":\"Path 6\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.070588238537,0.074509806931,0.192156881094,1],\"ix\":3,\"x\":\"var $bm_rt;\\n$bm_rt = thisComp.layer('Color  & Stroke Change').effect('Secondary')('Color');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5,\"x\":\"var $bm_rt;\\n$bm_rt = $bm_mul(4.2 / 100, thisComp.layer('Color  & Stroke Change').effect('Stroke')('Slider'));\"},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 3\",\"np\":6,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":8,\"ty\":4,\"nm\":\"Shape Layer 5\",\"parent\":7,\"td\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[-6,2,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":0,\"k\":[93.5,58.5],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 2\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.03137254902,0.658823529412,0.541176470588,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":0,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-1,14.75],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":9,\"ty\":4,\"nm\":\"Shape Layer 4\",\"parent\":7,\"tt\":2,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[-4,-3.75,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"t\":6,\"s\":[{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[13.69,-17.036],[23.138,-23.136],[31.125,-9.211]],\"c\":false}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":10,\"s\":[{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[11.823,-21.038],[23.791,-28.511],[35.403,-8.961]],\"c\":false}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"t\":14,\"s\":[{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[13.927,-17.114],[23.138,-23.136],[31.125,-9.211]],\"c\":false}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":18,\"s\":[{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[11.479,-20.676],[23.791,-28.511],[35.403,-8.961]],\"c\":false}]},{\"t\":22,\"s\":[{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[12.376,-16.221],[23.138,-23.136],[31.125,-9.211]],\"c\":false}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"t\":4,\"s\":[{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-4.262,-22.202],[4.741,-28.133],[16.153,-8.923]],\"c\":false}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":8,\"s\":[{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-6.532,-25.494],[5.394,-33.508],[20.431,-8.673]],\"c\":false}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"t\":12,\"s\":[{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-4.556,-22.045],[4.741,-28.133],[16.153,-8.923]],\"c\":false}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":16,\"s\":[{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-6.678,-25.943],[5.394,-33.508],[20.431,-8.673]],\"c\":false}]},{\"t\":20,\"s\":[{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-6.021,-21.218],[4.741,-28.133],[16.153,-8.923]],\"c\":false}]}],\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"t\":2,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-31.684,-9.217],[-36,-16.497],[-12.625,-31.516],[1.037,-8.931]],\"c\":false}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":6,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-27.405,-8.967],[-35.347,-21.872],[-11.972,-36.891],[5.315,-8.681]],\"c\":false}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"t\":10,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-31.684,-9.217],[-36,-16.497],[-12.625,-31.516],[1.037,-8.931]],\"c\":false}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":14,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-27.405,-8.967],[-35.347,-21.872],[-11.972,-36.891],[5.315,-8.681]],\"c\":false}]},{\"t\":18,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-31.684,-9.217],[-36,-16.497],[-12.625,-31.516],[1.037,-8.931]],\"c\":false}]}],\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.070588238537,0.074509806931,0.192156881094,1],\"ix\":3,\"x\":\"var $bm_rt;\\n$bm_rt = thisComp.layer('Color  & Stroke Change').effect('Secondary')('Color');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5,\"x\":\"var $bm_rt;\\n$bm_rt = $bm_mul(4.2 / 100, thisComp.layer('Color  & Stroke Change').effect('Stroke')('Slider'));\"},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0}],\"markers\":[{\"tm\":3,\"cm\":\"1\",\"dr\":0},{\"tm\":7,\"cm\":\"2\",\"dr\":0},{\"tm\":11,\"cm\":\"3\",\"dr\":0},{\"tm\":15,\"cm\":\"4\",\"dr\":0}]}"));}),
"[project]/src/components/features/header/HeaderNavLeft.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$header$2f$NavTopCategoryDropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/header/NavTopCategoryDropdown.tsx [app-ssr] (ecmascript)");
;
"use client";
;
;
;
const LordIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/src/components/ui/icons/LordIcon.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: 30,
                height: 30,
                display: 'inline-block'
            }
        }, void 0, false, {
            fileName: "[project]/src/components/features/header/HeaderNavLeft.tsx",
            lineNumber: 9,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
function HeaderNavLeft() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "header-nav-left hidden lg:block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dropdown-category",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LordIcon, {
                        size: 30,
                        icon: __turbopack_context__.r("[project]/src/assets/lordicon/dnoiydox.json (json)"),
                        primary: "#ffffff",
                        secondary: "#ffffff"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/header/HeaderNavLeft.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ms-1",
                        children: "Danh mục"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/header/HeaderNavLeft.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/header/HeaderNavLeft.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$header$2f$NavTopCategoryDropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/features/header/HeaderNavLeft.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/header/HeaderNavLeft.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = HeaderNavLeft;
}),
"[project]/src/components/features/mobile/nav/HeaderNavMiddleMobile.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function HeaderNavMiddleMobile({ isShow, setIsShow }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "header-nav-middle",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "main-nav navbar navbar-expand-xl navbar-light navbar-sticky",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `offcanvas offcanvas-collapse order-xl-2 ${isShow ? "show" : ""}`,
                id: "primaryMenu",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "offcanvas-header navbar-shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                children: "Menu"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/mobile/nav/HeaderNavMiddleMobile.tsx",
                                lineNumber: 14,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-close lead",
                                type: "button",
                                "data-bs-dismiss": "offcanvas",
                                "aria-label": "Close",
                                onClick: ()=>setIsShow(false)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/mobile/nav/HeaderNavMiddleMobile.tsx",
                                lineNumber: 15,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/mobile/nav/HeaderNavMiddleMobile.tsx",
                        lineNumber: 13,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "offcanvas-body",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "navbar-nav",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "nav-link no-sub",
                                        href: "#",
                                        children: "Flash Sale"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/mobile/nav/HeaderNavMiddleMobile.tsx",
                                        lineNumber: 22,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/mobile/nav/HeaderNavMiddleMobile.tsx",
                                    lineNumber: 21,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "nav-link no-sub",
                                        href: "/khuyen-mai",
                                        children: "Khuyến mãi"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/mobile/nav/HeaderNavMiddleMobile.tsx",
                                        lineNumber: 25,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/mobile/nav/HeaderNavMiddleMobile.tsx",
                                    lineNumber: 24,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "nav-link no-sub",
                                        href: "/store/list",
                                        children: "Cửa hàng"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/mobile/nav/HeaderNavMiddleMobile.tsx",
                                        lineNumber: 28,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/mobile/nav/HeaderNavMiddleMobile.tsx",
                                    lineNumber: 27,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/features/mobile/nav/HeaderNavMiddleMobile.tsx",
                            lineNumber: 20,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/mobile/nav/HeaderNavMiddleMobile.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/mobile/nav/HeaderNavMiddleMobile.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/features/mobile/nav/HeaderNavMiddleMobile.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/features/mobile/nav/HeaderNavMiddleMobile.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = HeaderNavMiddleMobile;
}),
"[project]/src/components/features/mobile/nav/HeaderNavMobile.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$header$2f$HeaderNavLeft$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/header/HeaderNavLeft.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$mobile$2f$nav$2f$HeaderNavMiddleMobile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/mobile/nav/HeaderNavMiddleMobile.tsx [app-ssr] (ecmascript)");
;
;
;
function HeaderNavMobile({ isShow, setIsShow }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container-fluid-lg d-block d-md-none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "row",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "col-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "header-nav",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$header$2f$HeaderNavLeft$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/features/mobile/nav/HeaderNavMobile.tsx",
                            lineNumber: 14,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$mobile$2f$nav$2f$HeaderNavMiddleMobile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            isShow: isShow,
                            setIsShow: setIsShow
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/mobile/nav/HeaderNavMobile.tsx",
                            lineNumber: 15,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/features/mobile/nav/HeaderNavMobile.tsx",
                    lineNumber: 13,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/features/mobile/nav/HeaderNavMobile.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/features/mobile/nav/HeaderNavMobile.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/features/mobile/nav/HeaderNavMobile.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = HeaderNavMobile;
}),
"[project]/src/assets/lordicon/msoeawqm.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"v\":\"5.6.10\",\"fr\":24,\"ip\":0,\"op\":17,\"w\":500,\"h\":500,\"nm\":\"19-magnifier-zoom-search-outline\",\"ddd\":0,\"assets\":[],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":3,\"nm\":\"02092020\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":0,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[-105,15,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[60,60,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ef\":[{\"ty\":5,\"nm\":\"02092020002\",\"np\":3,\"mn\":\"ADBE Checkbox Control\",\"ix\":1,\"en\":1,\"ef\":[{\"ty\":7,\"nm\":\"Checkbox\",\"mn\":\"ADBE Checkbox Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":0,\"ix\":1}}]}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"lordicon.com Outlines\",\"cl\":\"com\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":20,\"ix\":11,\"x\":\"var $bm_rt;\\nvar checkbox = thisComp.layer('02092020').effect('02092020002')('Checkbox');\\nif (checkbox == 1) {\\n    $bm_rt = 20;\\n} else {\\n    $bm_rt = 0;\\n}\\n;\"},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[249.934,481.369,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[79.934,0.369,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[265.159,265.159,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[1.415,0],[11.014,0],[11.014,-2.523],[4.656,-2.523],[4.656,-14.809],[1.415,-14.809]],\"c\":true},\"ix\":2},\"nm\":\"l\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"l\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-3.938],[-1.62,-1.723],[-1.949,0],[-1.641,1.846],[0,2.154],[1.579,1.805],[1.579,0]],\"o\":[[0,1.354],[1.354,1.415],[1.231,0],[1.21,-1.354],[0,-1.456],[-1.456,-1.641],[-5.333,0]],\"v\":[[11.167,-7.199],[12.992,-1.661],[18.243,0.369],[23.514,-1.743],[25.381,-7.548],[23.494,-13.127],[18.284,-15.137]],\"c\":true},\"ix\":2},\"nm\":\"o\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,1.415],[-0.841,1.026],[-1.19,0],[-0.615,-1.825],[0,-0.718],[0.492,-0.738],[1.292,0],[0.451,0.615]],\"o\":[[0,-1.682],[0.595,-0.759],[1.518,0],[0.308,0.902],[0,2.359],[-0.595,0.923],[-1.477,0],[-0.882,-1.149]],\"v\":[[14.49,-7.302],[15.577,-11.609],[18.305,-12.86],[21.689,-10.235],[22.058,-7.589],[21.053,-3.343],[18.284,-1.969],[15.597,-3.159]],\"c\":true},\"ix\":2},\"nm\":\"o\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"o\",\"np\":5,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[-0.287,-0.841],[-0.144,-0.82],[0,0],[0.164,0.656],[0.226,1.743],[2.236,0.205],[0,2.769],[0.923,0.8],[1.641,-0.021],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0.533,0],[0.205,0.574],[0,0],[-0.164,-0.246],[-0.103,-0.41],[-0.267,-1.928],[0.718,-0.205],[0,-0.964],[-1.19,-1.026],[0,0],[0,0]],\"v\":[[27.381,0],[30.622,0],[30.622,-5.989],[33.411,-5.989],[35.011,-5.148],[35.811,0],[39.318,0],[38.867,-1.067],[38.416,-3.938],[35.749,-7.343],[38.847,-10.973],[37.554,-13.824],[33.063,-14.829],[27.381,-14.829]],\"c\":true},\"ix\":2},\"nm\":\"r\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-0.492,-0.349],[0,-1.005],[0.226,-0.164],[0.369,0],[0,0]],\"o\":[[0,0],[1.005,0],[0.287,0.185],[0,1.046],[-0.513,0.41],[0,0],[0,0]],\"v\":[[30.519,-12.491],[32.652,-12.491],[34.744,-12.142],[35.524,-10.481],[34.703,-8.758],[33.083,-8.348],[30.519,-8.348]],\"c\":true},\"ix\":2},\"nm\":\"r\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"r\",\"np\":5,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-0.554,0.103],[0,4.553],[1.866,1.374],[0.82,0],[0,0]],\"o\":[[0,0],[1.497,0],[2.81,-0.513],[0,-2.113],[-1.784,-1.313],[0,0],[0,0]],\"v\":[[41.068,0],[45.683,0],[48.349,-0.164],[53.6,-7.609],[51.077,-13.434],[45.97,-14.768],[41.068,-14.788]],\"c\":true},\"ix\":2},\"nm\":\"d\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.656,-0.185],[0,-2.092],[1.251,-1.251],[1.354,0],[0.349,0.021]],\"o\":[[1.825,-0.082],[1.99,0.554],[0,0.718],[-0.923,0.923],[-0.369,0],[0,0]],\"v\":[[44.288,-12.388],[47.611,-12.183],[50.318,-7.609],[48.985,-3.425],[45.539,-2.4],[44.288,-2.441]],\"c\":true},\"ix\":2},\"nm\":\"d\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"d\",\"np\":5,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[55.669,0],[58.849,0],[58.849,-14.87],[55.669,-14.87]],\"c\":true},\"ix\":2},\"nm\":\"i\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"i\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[3.241,0],[0,-4.697],[-5.107,0],[-1.313,1.354],[-0.062,0.882],[0,0],[1.333,0],[0,0.882],[-2.359,0],[-0.062,-0.513]],\"o\":[[0,-2.954],[-4.164,0],[0,3.671],[1.354,0],[1.19,-1.231],[0,0],[-0.062,1.969],[-3.097,0],[0,-3.056],[2.154,0],[0,0]],\"v\":[[73.104,-9.989],[67.587,-14.911],[60.798,-7.097],[67.566,0.349],[71.894,-1.313],[73.227,-4.799],[69.884,-4.799],[67.218,-1.99],[64.121,-7.076],[67.464,-12.593],[69.864,-9.989]],\"c\":true},\"ix\":2},\"nm\":\"c\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"c\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-3.938],[-1.62,-1.723],[-1.949,0],[-1.641,1.846],[0,2.154],[1.579,1.805],[1.579,0]],\"o\":[[0,1.354],[1.354,1.415],[1.231,0],[1.21,-1.354],[0,-1.456],[-1.456,-1.641],[-5.333,0]],\"v\":[[74.546,-7.199],[76.372,-1.661],[81.622,0.369],[86.894,-1.743],[88.76,-7.548],[86.873,-13.127],[81.663,-15.137]],\"c\":true},\"ix\":2},\"nm\":\"o\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,1.415],[-0.841,1.026],[-1.19,0],[-0.615,-1.825],[0,-0.718],[0.492,-0.738],[1.292,0],[0.451,0.615]],\"o\":[[0,-1.682],[0.595,-0.759],[1.518,0],[0.308,0.902],[0,2.359],[-0.595,0.923],[-1.477,0],[-0.882,-1.149]],\"v\":[[77.869,-7.302],[78.956,-11.609],[81.684,-12.86],[85.068,-10.235],[85.437,-7.589],[84.432,-3.343],[81.663,-1.969],[78.977,-3.159]],\"c\":true},\"ix\":2},\"nm\":\"o\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"o\",\"np\":5,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[91.007,0],[94.001,0],[94.001,-12.306],[99.744,0],[104.113,0],[104.113,-14.829],[101.159,-14.829],[101.159,-3.159],[95.601,-14.829],[91.007,-14.829]],\"c\":true},\"ix\":2},\"nm\":\"n\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"n\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":8,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[106.893,0],[109.497,0],[109.497,-2.728],[106.893,-2.728]],\"c\":true},\"ix\":2},\"nm\":\".\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\".\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":9,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[3.241,0],[0,-4.697],[-5.107,0],[-1.313,1.354],[-0.062,0.882],[0,0],[1.333,0],[0,0.882],[-2.359,0],[-0.062,-0.513]],\"o\":[[0,-2.954],[-4.164,0],[0,3.671],[1.354,0],[1.19,-1.231],[0,0],[-0.062,1.969],[-3.097,0],[0,-3.056],[2.154,0],[0,0]],\"v\":[[124.04,-9.989],[118.523,-14.911],[111.734,-7.097],[118.502,0.349],[122.83,-1.313],[124.163,-4.799],[120.82,-4.799],[118.154,-1.99],[115.057,-7.076],[118.4,-12.593],[120.8,-9.989]],\"c\":true},\"ix\":2},\"nm\":\"c\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"c\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":10,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-3.938],[-1.62,-1.723],[-1.949,0],[-1.641,1.846],[0,2.154],[1.579,1.805],[1.579,0]],\"o\":[[0,1.354],[1.354,1.415],[1.231,0],[1.21,-1.354],[0,-1.456],[-1.456,-1.641],[-5.333,0]],\"v\":[[125.482,-7.199],[127.308,-1.661],[132.558,0.369],[137.829,-1.743],[139.696,-7.548],[137.809,-13.127],[132.599,-15.137]],\"c\":true},\"ix\":2},\"nm\":\"o\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,1.415],[-0.841,1.026],[-1.19,0],[-0.615,-1.825],[0,-0.718],[0.492,-0.738],[1.292,0],[0.451,0.615]],\"o\":[[0,-1.682],[0.595,-0.759],[1.518,0],[0.308,0.902],[0,2.359],[-0.595,0.923],[-1.477,0],[-0.882,-1.149]],\"v\":[[128.805,-7.302],[129.892,-11.609],[132.62,-12.86],[136.004,-10.235],[136.373,-7.589],[135.368,-3.343],[132.599,-1.969],[129.912,-3.159]],\"c\":true},\"ix\":2},\"nm\":\"o\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"Merge Paths 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"o\",\"np\":5,\"cix\":2,\"bm\":0,\"ix\":11,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[141.696,0],[144.67,0],[144.67,-12.716],[148.629,0],[151.254,0],[155.295,-12.716],[155.295,0],[158.453,0],[158.453,-14.829],[153.408,-14.829],[150.024,-4.041],[146.885,-14.829],[141.696,-14.829]],\"c\":true},\"ix\":2},\"nm\":\"m\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"m\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":12,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":1,\"op\":10,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":3,\"nm\":\"Color  & Stroke Change\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":0,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ef\":[{\"ty\":5,\"nm\":\"Primary\",\"np\":3,\"mn\":\"ADBE Color Control\",\"ix\":1,\"en\":1,\"ef\":[{\"ty\":2,\"nm\":\"Color\",\"mn\":\"ADBE Color Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":[0.070588238537,0.074509806931,0.192156866193,1],\"ix\":1}}]},{\"ty\":5,\"nm\":\"Secondary\",\"np\":3,\"mn\":\"ADBE Color Control\",\"ix\":2,\"en\":1,\"ef\":[{\"ty\":2,\"nm\":\"Color\",\"mn\":\"ADBE Color Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":[0.031372550875,0.658823549747,0.541176497936,1],\"ix\":1}}]},{\"ty\":5,\"nm\":\"Stroke\",\"np\":3,\"mn\":\"ADBE Slider Control\",\"ix\":3,\"en\":1,\"ef\":[{\"ty\":0,\"nm\":\"Slider\",\"mn\":\"ADBE Slider Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":70,\"ix\":1}}]},{\"ty\":5,\"nm\":\"Scale\",\"np\":3,\"mn\":\"ADBE Slider Control\",\"ix\":4,\"en\":1,\"ef\":[{\"ty\":0,\"nm\":\"Slider\",\"mn\":\"ADBE Slider Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":100,\"ix\":1}}]},{\"ty\":5,\"nm\":\"Axis\",\"np\":3,\"mn\":\"ADBE Point Control\",\"ix\":5,\"en\":1,\"ef\":[{\"ty\":3,\"nm\":\"Point\",\"mn\":\"ADBE Point Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":[250,250],\"ix\":1}}]}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":3,\"nm\":\"NULL\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":0,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[250,250,0],\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = thisComp.layer('Color  & Stroke Change').effect('Axis')('Point');\"},\"a\":{\"a\":0,\"k\":[60,60,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"x\":\"var $bm_rt;\\nvar temp;\\ntemp = thisComp.layer('Color  & Stroke Change').effect('Scale')('Slider');\\n$bm_rt = [\\n    temp,\\n    temp\\n];\"}},\"ao\":0,\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"Warstwa 6\",\"parent\":7,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[0,0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[21.486,21.427],[46.642,46.152]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.070588235294,0.074509803922,0.192156862745,1],\"ix\":3,\"x\":\"var $bm_rt;\\n$bm_rt = thisComp.layer('Color  & Stroke Change').effect('Primary')('Color');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5,\"x\":\"var $bm_rt;\\n$bm_rt = $bm_mul(6 / 100, thisComp.layer('Color  & Stroke Change').effect('Stroke')('Slider'));\"},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":0,\"ix\":1},\"e\":{\"a\":0,\"k\":100,\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":4,\"nm\":\"Warstwa 7\",\"parent\":7,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[-8.526,-8.465,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-8.526,-8.465,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-12.997,-12.997],[12.997,-12.997],[12.997,12.997],[-12.997,12.997]],\"o\":[[12.997,12.997],[-12.997,12.997],[-12.997,-12.997],[12.997,-12.997]],\"v\":[[14.753,-32.253],[14.753,14.814],[-32.314,14.814],[-32.314,-32.253]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":6.72,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":10.56,\"s\":[51]},{\"t\":15.36,\"s\":[52],\"h\":1},{\"t\":16.3203125,\"s\":[0],\"h\":1}],\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":0,\"s\":[14]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":6.72,\"s\":[66]},{\"t\":15.36,\"s\":[65.8],\"h\":1},{\"t\":16.3203125,\"s\":[14],\"h\":1}],\"ix\":2},\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":0,\"s\":[-113]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":6.72,\"s\":[247]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":10.56,\"s\":[1156]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":13.44,\"s\":[1133]},{\"t\":15.36,\"s\":[1141.2],\"h\":1},{\"t\":16.3203125,\"s\":[-113],\"h\":1}],\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.070588235294,0.074509803922,0.192156862745,1],\"ix\":3,\"x\":\"var $bm_rt;\\n$bm_rt = thisComp.layer('Color  & Stroke Change').effect('Secondary')('Color');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5,\"x\":\"var $bm_rt;\\n$bm_rt = $bm_mul(5.2 / 100, thisComp.layer('Color  & Stroke Change').effect('Stroke')('Slider'));\"},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":0,\"ix\":1},\"e\":{\"a\":0,\"k\":100,\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":7,\"ty\":4,\"nm\":\"Warstwa 4\",\"parent\":4,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[1],\"y\":[0]},\"t\":0,\"s\":[0]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":9.334,\"s\":[2]},{\"t\":16,\"s\":[0]}],\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":1,\"y\":0},\"t\":0,\"s\":[30.158,30.373,0],\"to\":[2.917,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":9.334,\"s\":[47.658,30.373,0],\"to\":[0,0,0],\"ti\":[2.917,0,0]},{\"t\":16,\"s\":[30.158,30.373,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[-8.526,-8.465,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[350,350,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-16.196,-16.196],[16.196,-16.196],[16.196,16.196],[-16.196,16.196]],\"o\":[[16.196,16.196],[-16.196,16.196],[-16.196,-16.196],[16.196,-16.196]],\"v\":[[20.8,-37.791],[20.8,20.861],[-37.853,20.861],[-37.853,-37.791]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.070588235294,0.074509803922,0.192156862745,1],\"ix\":3,\"x\":\"var $bm_rt;\\n$bm_rt = thisComp.layer('Color  & Stroke Change').effect('Primary')('Color');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5,\"x\":\"var $bm_rt;\\n$bm_rt = $bm_mul(5 / 100, thisComp.layer('Color  & Stroke Change').effect('Stroke')('Slider'));\"},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0}],\"markers\":[]}"));}),
"[project]/src/assets/lordicon/ljvjsnvh.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"v\":\"5.8.1\",\"fr\":24,\"ip\":0,\"op\":50,\"w\":500,\"h\":500,\"nm\":\"21-avatar-gradient\",\"ddd\":0,\"assets\":[{\"id\":\"comp_0\",\"nm\":\"hover-1\",\"fr\":24,\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":0,\"nm\":\"mask\",\"td\":1,\"refId\":\"comp_1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[250,250,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[250,250,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2}},\"ao\":0,\"w\":500,\"h\":500,\"ip\":0,\"op\":87,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"gardient\",\"tt\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.4],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":0,\"s\":[-94]},{\"t\":50,\"s\":[266]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[271.941,270.46,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[240,240,100],\"ix\":6,\"l\":2}},\"ao\":0,\"ef\":[{\"ty\":29,\"nm\":\"Gaussian Blur\",\"np\":5,\"mn\":\"ADBE Gaussian Blur 2\",\"ix\":1,\"en\":1,\"ef\":[{\"ty\":0,\"nm\":\"Blurriness\",\"mn\":\"ADBE Gaussian Blur 2-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":175,\"ix\":1}},{\"ty\":7,\"nm\":\"Blur Dimensions\",\"mn\":\"ADBE Gaussian Blur 2-0002\",\"ix\":2,\"v\":{\"a\":0,\"k\":1,\"ix\":2}},{\"ty\":7,\"nm\":\"Repeat Edge Pixels\",\"mn\":\"ADBE Gaussian Blur 2-0003\",\"ix\":3,\"v\":{\"a\":0,\"k\":1,\"ix\":3}}]}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-97.478,0],[0,-97.478],[97.478,0],[30.894,26.574],[0,53.531]],\"o\":[[97.478,0],[0,97.478],[-43.948,0],[-37.631,-32.369],[0,-97.478]],\"v\":[[0,-176.5],[176.5,0],[0,176.5],[-105.29,115.869],[-176.5,0]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.796078443527,0.368627458811,0.933333337307,1],\"ix\":4,\"x\":\"var $bm_rt;\\n$bm_rt = comp('21-avatar-gradient').layer('Color & Stroke Change').effect('Secondary')('Color');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[113.242,-118.884],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"primary.design\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"cl\":\"design\"},{\"ty\":\"gr\",\"it\":[{\"d\":1,\"ty\":\"el\",\"s\":{\"a\":0,\"k\":[500,500],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"nm\":\"Ellipse Path 1\",\"mn\":\"ADBE Vector Shape - Ellipse\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.29411765933,0.882352948189,0.92549020052,1],\"ix\":4,\"x\":\"var $bm_rt;\\n$bm_rt = comp('21-avatar-gradient').layer('Color & Stroke Change').effect('Primary')('Color');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"secondary.design\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"cl\":\"design\"}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0}]},{\"id\":\"comp_1\",\"nm\":\"mask\",\"fr\":24,\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Warstwa 12\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":5,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":9,\"s\":[40]},{\"t\":12,\"s\":[87],\"h\":1},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":18,\"s\":[87]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":20,\"s\":[131]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":23,\"s\":[89]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":25,\"s\":[64]},{\"t\":27,\"s\":[90],\"h\":1},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":31,\"s\":[90]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":34,\"s\":[28]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":37,\"s\":[148]},{\"t\":41,\"s\":[181]}],\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0,\"y\":1},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":0,\"s\":[249.927,172.992,0],\"to\":[0,-1.452,0],\"ti\":[0,53.437,0]},{\"i\":{\"x\":0.576,\"y\":1},\"o\":{\"x\":0.828,\"y\":0},\"t\":5,\"s\":[249.927,113.747,0],\"to\":[0.088,65.441,0],\"ti\":[46.955,-0.463,0]},{\"i\":{\"x\":0,\"y\":1},\"o\":{\"x\":0.46,\"y\":0},\"t\":12,\"s\":[169.456,187.644,0],\"to\":[7.543,-0.338,0],\"ti\":[-8.224,-0.191,0]},{\"t\":14,\"s\":[193.416,187.644,0],\"h\":1},{\"i\":{\"x\":0,\"y\":1},\"o\":{\"x\":0.46,\"y\":0},\"t\":18,\"s\":[193.416,187.644,0],\"to\":[-22.098,-1.912,0],\"ti\":[0.726,0,0]},{\"i\":{\"x\":0.463,\"y\":0.982},\"o\":{\"x\":0.699,\"y\":0},\"t\":20,\"s\":[167.278,170.219,0],\"to\":[-0.726,0,0],\"ti\":[-102.043,32.527,0]},{\"i\":{\"x\":0,\"y\":1},\"o\":{\"x\":0,\"y\":0},\"t\":25,\"s\":[316.469,186.773,0],\"to\":[-14.819,0.484,0],\"ti\":[4.429,0,0]},{\"t\":27,\"s\":[289.896,186.773,0],\"h\":1},{\"i\":{\"x\":0,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"t\":31,\"s\":[289.896,186.773,0],\"to\":[-0.726,0,0],\"ti\":[-16.481,20.983,0]},{\"i\":{\"x\":0.318,\"y\":1},\"o\":{\"x\":0.518,\"y\":0},\"t\":34,\"s\":[316.033,169.348,0],\"to\":[-65.416,47.846,0],\"ti\":[0.726,0,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":1,\"y\":0},\"t\":41,\"s\":[250.254,113.152,0],\"to\":[-0.726,0,0],\"ti\":[0,1.452,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":45,\"s\":[249.927,186.932,0],\"to\":[0,-1.452,0],\"ti\":[0,1.452,0]},{\"t\":49,\"s\":[249.927,172.992,0]}],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[7.898,-3.227,0],\"ix\":1,\"l\":2},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0,0.167,0]},\"t\":0,\"s\":[697,697,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":5,\"s\":[697,571.54,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":9,\"s\":[697,829.43,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":12,\"s\":[697,627.3,100]},{\"t\":14,\"s\":[697,697,100],\"h\":1},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":18,\"s\":[697,697,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[1,1,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0,0,0]},\"t\":20,\"s\":[697,627.3,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[1,1,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0,0,0]},\"t\":23,\"s\":[697,766.7,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[1,1,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0,0,0]},\"t\":25,\"s\":[697,627.3,100]},{\"t\":27,\"s\":[697,697,100],\"h\":1},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[1,1,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0,0,0]},\"t\":31,\"s\":[697,697,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[1,1,1]},\"o\":{\"x\":[0.172,0.172,0.172],\"y\":[0,0,0]},\"t\":34,\"s\":[697,627.3,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[1,1,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0,0,0]},\"t\":37,\"s\":[697,766.7,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0,0,0]},\"t\":41,\"s\":[697,571.54,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":45,\"s\":[697,697,100]},{\"t\":49,\"s\":[697,697,100]}],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-5.604],[5.604,0],[0,5.604],[-5.605,0]],\"o\":[[0,5.604],[-5.604,0],[0,-5.604],[5.605,0]],\"v\":[[18.046,-3.227],[7.898,6.921],[-2.25,-3.227],[7.898,-13.375]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.031372550875,0.658823549747,0.541176497936,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1.8,\"ix\":5,\"x\":\"var $bm_rt;\\n$bm_rt = $bm_mul($bm_div(value, 70), comp('21-avatar-gradient').layer('Color & Stroke Change').effect('Stroke')('Slider'));\"},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":0,\"ix\":1},\"e\":{\"a\":0,\"k\":100,\"ix\":2},\"o\":{\"a\":0,\"k\":-40,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":0,\"op\":87,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Warstwa 10\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[249.927,340.413,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[9.568,24.043,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[697,697,100],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":0,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[-7.742,0],[0,0],[0,-7.742]],\"o\":[[0,0],[0,0],[0,-7.742],[0,0],[7.742,0],[0,0]],\"v\":[[31.536,31.836],[-12.533,31.836],[-12.467,29.769],[1.552,15.75],[17.583,15.75],[31.602,29.769]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"t\":5,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[-7.742,0],[0,0],[0,-7.742]],\"o\":[[0,0],[0,0],[0,-7.742],[0,0],[7.742,0],[0,0]],\"v\":[[31.536,30.312],[-12.533,30.312],[-12.467,22.62],[1.552,8.601],[17.583,8.601],[31.602,22.62]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"t\":8,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[-7.742,0],[0,0],[0,-7.742]],\"o\":[[0,0],[0,0],[0,-7.742],[0,0],[7.742,0],[0,0]],\"v\":[[31.536,31.836],[-12.533,31.836],[-12.467,29.769],[1.552,15.75],[17.583,15.75],[31.602,29.769]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"t\":37,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[-7.742,0],[0,0],[0,-7.742]],\"o\":[[0,0],[0,0],[0,-7.742],[0,0],[7.742,0],[0,0]],\"v\":[[31.536,31.836],[-12.533,31.836],[-12.467,29.769],[1.552,15.75],[17.583,15.75],[31.602,29.769]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0},\"t\":41,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[-7.742,0],[0,0],[0,-7.742]],\"o\":[[0,0],[0,0],[0,-7.742],[0,0],[7.742,0],[0,0]],\"v\":[[31.536,30.312],[-12.533,30.312],[-12.467,22.62],[1.552,8.601],[17.583,8.601],[31.602,22.62]],\"c\":true}]},{\"t\":45,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[-7.742,0],[0,0],[0,-7.742]],\"o\":[[0,0],[0,0],[0,-7.742],[0,0],[7.742,0],[0,0]],\"v\":[[31.536,31.836],[-12.533,31.836],[-12.467,29.769],[1.552,15.75],[17.583,15.75],[31.602,29.769]],\"c\":true}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.070588235294,0.074509803922,0.192156862745,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1.8,\"ix\":5,\"x\":\"var $bm_rt;\\n$bm_rt = $bm_mul($bm_div(value, 70), comp('21-avatar-gradient').layer('Color & Stroke Change').effect('Stroke')('Slider'));\"},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":0,\"ix\":1},\"e\":{\"a\":0,\"k\":100,\"ix\":2},\"o\":{\"a\":0,\"k\":76,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":0,\"op\":87,\"st\":0,\"bm\":0}]},{\"id\":\"comp_2\",\"nm\":\"hover-2\",\"fr\":24,\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":0,\"nm\":\"mask2\",\"td\":1,\"refId\":\"comp_3\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[250,250,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[250,250,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2}},\"ao\":0,\"w\":500,\"h\":500,\"ip\":0,\"op\":87,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"gardient\",\"tt\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.4],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":0,\"s\":[-94]},{\"t\":73,\"s\":[266]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[271.941,270.46,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[240,240,100],\"ix\":6,\"l\":2}},\"ao\":0,\"ef\":[{\"ty\":29,\"nm\":\"Gaussian Blur\",\"np\":5,\"mn\":\"ADBE Gaussian Blur 2\",\"ix\":1,\"en\":1,\"ef\":[{\"ty\":0,\"nm\":\"Blurriness\",\"mn\":\"ADBE Gaussian Blur 2-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":175,\"ix\":1}},{\"ty\":7,\"nm\":\"Blur Dimensions\",\"mn\":\"ADBE Gaussian Blur 2-0002\",\"ix\":2,\"v\":{\"a\":0,\"k\":1,\"ix\":2}},{\"ty\":7,\"nm\":\"Repeat Edge Pixels\",\"mn\":\"ADBE Gaussian Blur 2-0003\",\"ix\":3,\"v\":{\"a\":0,\"k\":1,\"ix\":3}}]}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-97.478,0],[0,-97.478],[97.478,0],[30.894,26.574],[0,53.531]],\"o\":[[97.478,0],[0,97.478],[-43.948,0],[-37.631,-32.369],[0,-97.478]],\"v\":[[0,-176.5],[176.5,0],[0,176.5],[-105.29,115.869],[-176.5,0]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.796078443527,0.368627458811,0.933333337307,1],\"ix\":4,\"x\":\"var $bm_rt;\\n$bm_rt = comp('21-avatar-gradient').layer('Color & Stroke Change').effect('Secondary')('Color');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[113.242,-118.884],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"primary.design\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"cl\":\"design\"},{\"ty\":\"gr\",\"it\":[{\"d\":1,\"ty\":\"el\",\"s\":{\"a\":0,\"k\":[500,500],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"nm\":\"Ellipse Path 1\",\"mn\":\"ADBE Vector Shape - Ellipse\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.29411765933,0.882352948189,0.92549020052,1],\"ix\":4,\"x\":\"var $bm_rt;\\n$bm_rt = comp('21-avatar-gradient').layer('Color & Stroke Change').effect('Primary')('Color');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"secondary.design\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"cl\":\"design\"}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0}]},{\"id\":\"comp_3\",\"nm\":\"mask2\",\"fr\":24,\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Warstwa 12\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":0,\"s\":[249.927,172.992,0],\"to\":[0,9.167,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.261,\"y\":0.955},\"o\":{\"x\":0.333,\"y\":0},\"t\":9,\"s\":[249.927,227.992,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":24,\"s\":[249.927,172.992,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.261,\"y\":0.955},\"o\":{\"x\":0.333,\"y\":0},\"t\":33,\"s\":[249.927,227.992,0],\"to\":[0,0,0],\"ti\":[0,9.167,0]},{\"t\":48,\"s\":[249.927,172.992,0]}],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[7.898,-3.227,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[697,697,100],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-5.604],[5.604,0],[0,5.604],[-5.605,0]],\"o\":[[0,5.604],[-5.604,0],[0,-5.604],[5.605,0]],\"v\":[[18.046,-3.227],[7.898,6.921],[-2.25,-3.227],[7.898,-13.375]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.031372550875,0.658823549747,0.541176497936,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1.8,\"ix\":5,\"x\":\"var $bm_rt;\\n$bm_rt = $bm_mul($bm_div(value, 70), comp('21-avatar-gradient').layer('Color & Stroke Change').effect('Stroke')('Slider'));\"},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":0,\"ix\":1},\"e\":{\"a\":0,\"k\":100,\"ix\":2},\"o\":{\"a\":0,\"k\":-40,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":0,\"op\":87,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"mask\",\"td\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":0,\"s\":[249.927,172.992,0],\"to\":[0,9.167,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.261,\"y\":0.955},\"o\":{\"x\":0.333,\"y\":0},\"t\":9,\"s\":[249.927,227.992,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":24,\"s\":[249.927,172.992,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.261,\"y\":0.955},\"o\":{\"x\":0.333,\"y\":0},\"t\":33,\"s\":[249.927,227.992,0],\"to\":[0,0,0],\"ti\":[0,9.167,0]},{\"t\":48,\"s\":[249.927,172.992,0]}],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[7.898,-3.227,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[697,697,100],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-5.604],[5.604,0],[0,5.604],[-5.605,0]],\"o\":[[0,5.604],[-5.604,0],[0,-5.604],[5.605,0]],\"v\":[[18.046,-3.227],[7.898,6.921],[-2.25,-3.227],[7.898,-13.375]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":87,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Warstwa 10\",\"tt\":2,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[249.927,340.413,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[9.568,24.043,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[697,697,100],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[-7.742,0],[0,0],[0,-7.742]],\"o\":[[0,0],[0,0],[0,-7.742],[0,0],[7.742,0],[0,0]],\"v\":[[31.536,31.836],[-12.533,31.836],[-12.467,29.769],[1.552,15.75],[17.583,15.75],[31.602,29.769]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.070588235294,0.074509803922,0.192156862745,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1.8,\"ix\":5,\"x\":\"var $bm_rt;\\n$bm_rt = $bm_mul($bm_div(value, 70), comp('21-avatar-gradient').layer('Color & Stroke Change').effect('Stroke')('Slider'));\"},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":0,\"ix\":1},\"e\":{\"a\":0,\"k\":100,\"ix\":2},\"o\":{\"a\":0,\"k\":76,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":0,\"op\":87,\"st\":0,\"bm\":0}]},{\"id\":\"comp_4\",\"nm\":\"morph-1\",\"fr\":24,\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":0,\"nm\":\"mask\",\"td\":1,\"refId\":\"comp_5\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[250,250,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[250,250,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2}},\"ao\":0,\"w\":500,\"h\":500,\"ip\":0,\"op\":87,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"gardient\",\"tt\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":0,\"s\":[-94]},{\"t\":50,\"s\":[266]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[271.941,270.46,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[240,240,100],\"ix\":6,\"l\":2}},\"ao\":0,\"ef\":[{\"ty\":29,\"nm\":\"Gaussian Blur\",\"np\":5,\"mn\":\"ADBE Gaussian Blur 2\",\"ix\":1,\"en\":1,\"ef\":[{\"ty\":0,\"nm\":\"Blurriness\",\"mn\":\"ADBE Gaussian Blur 2-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":175,\"ix\":1}},{\"ty\":7,\"nm\":\"Blur Dimensions\",\"mn\":\"ADBE Gaussian Blur 2-0002\",\"ix\":2,\"v\":{\"a\":0,\"k\":1,\"ix\":2}},{\"ty\":7,\"nm\":\"Repeat Edge Pixels\",\"mn\":\"ADBE Gaussian Blur 2-0003\",\"ix\":3,\"v\":{\"a\":0,\"k\":1,\"ix\":3}}]}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-97.478,0],[0,-97.478],[97.478,0],[30.894,26.574],[0,53.531]],\"o\":[[97.478,0],[0,97.478],[-43.948,0],[-37.631,-32.369],[0,-97.478]],\"v\":[[0,-176.5],[176.5,0],[0,176.5],[-105.29,115.869],[-176.5,0]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.796078443527,0.368627458811,0.933333337307,1],\"ix\":4,\"x\":\"var $bm_rt;\\n$bm_rt = comp('21-avatar-gradient').layer('Color & Stroke Change').effect('Secondary')('Color');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[113.242,-118.884],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"primary.design\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"cl\":\"design\"},{\"ty\":\"gr\",\"it\":[{\"d\":1,\"ty\":\"el\",\"s\":{\"a\":0,\"k\":[500,500],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"nm\":\"Ellipse Path 1\",\"mn\":\"ADBE Vector Shape - Ellipse\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.29411765933,0.882352948189,0.92549020052,1],\"ix\":4,\"x\":\"var $bm_rt;\\n$bm_rt = comp('21-avatar-gradient').layer('Color & Stroke Change').effect('Primary')('Color');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"secondary.design\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"cl\":\"design\"}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0}]},{\"id\":\"comp_5\",\"nm\":\"mask\",\"fr\":24,\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Warstwa 10\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[249.695,394.73,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[9.534,31.836,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[697,697,100],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.6,\"y\":0},\"t\":12,\"s\":[{\"i\":[[0,-5.604],[5.604,0],[0,5.604],[-5.605,0]],\"o\":[[0,5.604],[-5.604,0],[0,-5.604],[5.605,0]],\"v\":[[19.681,0.043],[9.533,10.191],[-0.615,0.043],[9.533,-10.105]],\"c\":true}]},{\"t\":36,\"s\":[{\"i\":[[0,-4.621],[4.621,0],[0,4.621],[-4.621,0]],\"o\":[[0,4.621],[-4.621,0],[0,-4.621],[4.621,0]],\"v\":[[17.756,2.047],[9.39,10.414],[1.023,2.047],[9.39,-6.319]],\"c\":true}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.070588235294,0.074509803922,0.192156862745,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1.8,\"ix\":5,\"x\":\"var $bm_rt;\\n$bm_rt = $bm_mul($bm_div(value, 70), comp('21-avatar-gradient').layer('Color & Stroke Change').effect('Stroke')('Slider'));\"},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":0,\"s\":[0,0],\"to\":[0,-0.833],\"ti\":[0,-0.667]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":12,\"s\":[0,-5],\"to\":[0,0.667],\"ti\":[0,-0.5]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":24,\"s\":[0,4],\"to\":[0,0.5],\"ti\":[0,0.667]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":33,\"s\":[0,-2],\"to\":[0,-0.667],\"ti\":[0,-0.333]},{\"t\":48,\"s\":[0,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.6,\"y\":0},\"t\":12,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[-7.742,0],[0,0],[0,-7.742]],\"o\":[[0,0],[0,0],[0,-7.742],[0,0],[7.742,0],[0,0]],\"v\":[[31.536,31.836],[-12.533,31.836],[-12.467,29.769],[1.552,15.75],[17.583,15.75],[31.602,29.769]],\"c\":true}]},{\"t\":36,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[-6.408,0],[0,0],[0,-6.408]],\"o\":[[0,0],[0,0],[0,-6.408],[0,0],[6.408,0],[0,0]],\"v\":[[27.744,28.361],[-8.73,28.361],[-8.675,26.65],[2.928,15.047],[16.196,15.047],[27.799,26.65]],\"c\":true}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.070588235294,0.074509803922,0.192156862745,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1.8,\"ix\":5,\"x\":\"var $bm_rt;\\n$bm_rt = $bm_mul($bm_div(value, 70), comp('21-avatar-gradient').layer('Color & Stroke Change').effect('Stroke')('Slider'));\"},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":0,\"ix\":1},\"e\":{\"a\":0,\"k\":100,\"ix\":2},\"o\":{\"a\":0,\"k\":76,\"ix\":3},\"m\":1,\"ix\":3,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":0,\"op\":87,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"mask\",\"td\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[249.695,394.73,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[9.534,31.836,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[697,697,100],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.6,\"y\":0},\"t\":12,\"s\":[{\"i\":[[0,-5.604],[5.604,0],[0,5.604],[-5.605,0]],\"o\":[[0,5.604],[-5.604,0],[0,-5.604],[5.605,0]],\"v\":[[19.681,0.043],[9.533,10.191],[-0.615,0.043],[9.533,-10.105]],\"c\":true}]},{\"t\":36,\"s\":[{\"i\":[[0,-4.621],[4.621,0],[0,4.621],[-4.621,0]],\"o\":[[0,4.621],[-4.621,0],[0,-4.621],[4.621,0]],\"v\":[[17.756,2.047],[9.39,10.414],[1.023,2.047],[9.39,-6.319]],\"c\":true}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":0,\"s\":[0,0],\"to\":[0,-0.833],\"ti\":[0,-0.667]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":12,\"s\":[0,-5],\"to\":[0,0.667],\"ti\":[0,-0.5]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":24,\"s\":[0,4],\"to\":[0,0.5],\"ti\":[0,0.667]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":33,\"s\":[0,-2],\"to\":[0,-0.667],\"ti\":[0,-0.333]},{\"t\":48,\"s\":[0,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.6,\"y\":0},\"t\":12,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[-7.742,0],[0,0],[0,-7.742]],\"o\":[[0,0],[0,0],[0,-7.742],[0,0],[7.742,0],[0,0]],\"v\":[[31.536,31.836],[-12.533,31.836],[-12.467,29.769],[1.552,15.75],[17.583,15.75],[31.602,29.769]],\"c\":true}]},{\"t\":36,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[-6.408,0],[0,0],[0,-6.408]],\"o\":[[0,0],[0,0],[0,-6.408],[0,0],[6.408,0],[0,0]],\"v\":[[27.744,28.361],[-8.73,28.361],[-8.675,26.65],[2.928,15.047],[16.196,15.047],[27.799,26.65]],\"c\":true}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false}],\"ip\":0,\"op\":87,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Warstwa 12\",\"tt\":2,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.6,\"y\":0},\"t\":12,\"s\":[-158.092,252.318,0],\"to\":[58.333,0,0],\"ti\":[-58.333,0,0]},{\"t\":36,\"s\":[191.908,252.318,0]}],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[17.886,11.404,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[697,697,100],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-4.141],[4.141,0],[0,4.141],[-4.141,0]],\"o\":[[0,4.141],[-4.141,0],[0,-4.141],[4.141,0]],\"v\":[[25.255,3.361],[17.757,10.859],[10.259,3.361],[17.757,-4.137]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.031372550875,0.658823549747,0.541176497936,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1.8,\"ix\":5,\"x\":\"var $bm_rt;\\n$bm_rt = $bm_mul($bm_div(value, 70), comp('21-avatar-gradient').layer('Color & Stroke Change').effect('Stroke')('Slider'));\"},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[-5.743,0],[0,0],[0,-5.743]],\"o\":[[0,0],[0,0],[0,-5.743],[0,0],[5.743,0],[0,0]],\"v\":[[34.206,26.944],[1.517,26.944],[1.567,25.411],[11.965,15.012],[23.857,15.012],[34.255,25.411]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.031372550875,0.658823549747,0.541176497936,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1.8,\"ix\":5,\"x\":\"var $bm_rt;\\n$bm_rt = $bm_mul($bm_div(value, 70), comp('21-avatar-gradient').layer('Color & Stroke Change').effect('Stroke')('Slider'));\"},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":0,\"ix\":1},\"e\":{\"a\":0,\"k\":100,\"ix\":2},\"o\":{\"a\":0,\"k\":76,\"ix\":3},\"m\":1,\"ix\":3,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":0,\"op\":87,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"mask 2\",\"td\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[249.695,394.73,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[9.534,31.836,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[697,697,100],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.6,\"y\":0},\"t\":12,\"s\":[{\"i\":[[0,-5.604],[5.604,0],[0,5.604],[-5.605,0]],\"o\":[[0,5.604],[-5.604,0],[0,-5.604],[5.605,0]],\"v\":[[19.681,0.043],[9.533,10.191],[-0.615,0.043],[9.533,-10.105]],\"c\":true}]},{\"t\":36,\"s\":[{\"i\":[[0,-4.621],[4.621,0],[0,4.621],[-4.621,0]],\"o\":[[0,4.621],[-4.621,0],[0,-4.621],[4.621,0]],\"v\":[[17.756,2.047],[9.39,10.414],[1.023,2.047],[9.39,-6.319]],\"c\":true}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":0,\"s\":[0,0],\"to\":[0,-0.833],\"ti\":[0,-0.667]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":12,\"s\":[0,-5],\"to\":[0,0.667],\"ti\":[0,-0.5]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":24,\"s\":[0,4],\"to\":[0,0.5],\"ti\":[0,0.667]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":33,\"s\":[0,-2],\"to\":[0,-0.667],\"ti\":[0,-0.333]},{\"t\":48,\"s\":[0,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.6,\"y\":0},\"t\":12,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[-7.742,0],[0,0],[0,-7.742]],\"o\":[[0,0],[0,0],[0,-7.742],[0,0],[7.742,0],[0,0]],\"v\":[[31.536,31.836],[-12.533,31.836],[-12.467,29.769],[1.552,15.75],[17.583,15.75],[31.602,29.769]],\"c\":true}]},{\"t\":36,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[-6.408,0],[0,0],[0,-6.408]],\"o\":[[0,0],[0,0],[0,-6.408],[0,0],[6.408,0],[0,0]],\"v\":[[27.744,28.361],[-8.73,28.361],[-8.675,26.65],[2.928,15.047],[16.196,15.047],[27.799,26.65]],\"c\":true}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false}],\"ip\":0,\"op\":87,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"Warstwa 11\",\"tt\":2,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.4,\"y\":1},\"o\":{\"x\":0.6,\"y\":0},\"t\":12,\"s\":[621.908,252.318,0],\"to\":[-52.333,0,0],\"ti\":[52.333,0,0]},{\"t\":36,\"s\":[307.908,252.318,0]}],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[17.886,11.404,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[697,697,100],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-4.141],[4.141,0],[0,4.141],[-4.141,0]],\"o\":[[0,4.141],[-4.141,0],[0,-4.141],[4.141,0]],\"v\":[[25.255,3.361],[17.757,10.859],[10.259,3.361],[17.757,-4.137]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.031372550875,0.658823549747,0.541176497936,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1.8,\"ix\":5,\"x\":\"var $bm_rt;\\n$bm_rt = $bm_mul($bm_div(value, 70), comp('21-avatar-gradient').layer('Color & Stroke Change').effect('Stroke')('Slider'));\"},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[-5.743,0],[0,0],[0,-5.743]],\"o\":[[0,0],[0,0],[0,-5.743],[0,0],[5.743,0],[0,0]],\"v\":[[34.206,26.944],[1.517,26.944],[1.567,25.411],[11.965,15.012],[23.857,15.012],[34.255,25.411]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.031372550875,0.658823549747,0.541176497936,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1.8,\"ix\":5,\"x\":\"var $bm_rt;\\n$bm_rt = $bm_mul($bm_div(value, 70), comp('21-avatar-gradient').layer('Color & Stroke Change').effect('Stroke')('Slider'));\"},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":0,\"ix\":1},\"e\":{\"a\":0,\"k\":100,\"ix\":2},\"o\":{\"a\":0,\"k\":76,\"ix\":3},\"m\":1,\"ix\":3,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":0,\"op\":87,\"st\":0,\"bm\":0}]}],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"watermark\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11,\"x\":\"var $bm_rt;\\nvar checkbox = thisComp.layer('02092020').effect('02092020002')('Checkbox');\\nif (checkbox == 1) {\\n    $bm_rt = 20;\\n} else {\\n    $bm_rt = 0;\\n}\\n;\"},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[249.934,481.369,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[79.934,0.369,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[265.159,265.159,100],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[1.415,0],[11.014,0],[11.014,-2.523],[4.656,-2.523],[4.656,-14.809],[1.415,-14.809]],\"c\":true},\"ix\":2},\"nm\":\"l\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-3.938],[-1.62,-1.723],[-1.949,0],[-1.641,1.846],[0,2.154],[1.579,1.805],[1.579,0]],\"o\":[[0,1.354],[1.354,1.415],[1.231,0],[1.21,-1.354],[0,-1.456],[-1.456,-1.641],[-5.333,0]],\"v\":[[11.167,-7.199],[12.992,-1.661],[18.243,0.369],[23.514,-1.743],[25.381,-7.548],[23.494,-13.127],[18.284,-15.137]],\"c\":true},\"ix\":2},\"nm\":\"o\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,1.415],[-0.841,1.026],[-1.19,0],[-0.615,-1.825],[0,-0.718],[0.492,-0.738],[1.292,0],[0.451,0.615]],\"o\":[[0,-1.682],[0.595,-0.759],[1.518,0],[0.308,0.902],[0,2.359],[-0.595,0.923],[-1.477,0],[-0.882,-1.149]],\"v\":[[14.49,-7.302],[15.577,-11.609],[18.305,-12.86],[21.689,-10.235],[22.058,-7.589],[21.053,-3.343],[18.284,-1.969],[15.597,-3.159]],\"c\":true},\"ix\":2},\"nm\":\"o\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":3,\"ty\":\"sh\",\"ix\":4,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[-0.287,-0.841],[-0.144,-0.82],[0,0],[0.164,0.656],[0.226,1.743],[2.236,0.205],[0,2.769],[0.923,0.8],[1.641,-0.021],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0.533,0],[0.205,0.574],[0,0],[-0.164,-0.246],[-0.103,-0.41],[-0.267,-1.928],[0.718,-0.205],[0,-0.964],[-1.19,-1.026],[0,0],[0,0]],\"v\":[[27.381,0],[30.622,0],[30.622,-5.989],[33.411,-5.989],[35.011,-5.148],[35.811,0],[39.318,0],[38.867,-1.067],[38.416,-3.938],[35.749,-7.343],[38.847,-10.973],[37.554,-13.824],[33.063,-14.829],[27.381,-14.829]],\"c\":true},\"ix\":2},\"nm\":\"r\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":4,\"ty\":\"sh\",\"ix\":5,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-0.492,-0.349],[0,-1.005],[0.226,-0.164],[0.369,0],[0,0]],\"o\":[[0,0],[1.005,0],[0.287,0.185],[0,1.046],[-0.513,0.41],[0,0],[0,0]],\"v\":[[30.519,-12.491],[32.652,-12.491],[34.744,-12.142],[35.524,-10.481],[34.703,-8.758],[33.083,-8.348],[30.519,-8.348]],\"c\":true},\"ix\":2},\"nm\":\"r\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":5,\"ty\":\"sh\",\"ix\":6,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-0.554,0.103],[0,4.553],[1.866,1.374],[0.82,0],[0,0]],\"o\":[[0,0],[1.497,0],[2.81,-0.513],[0,-2.113],[-1.784,-1.313],[0,0],[0,0]],\"v\":[[41.068,0],[45.683,0],[48.349,-0.164],[53.6,-7.609],[51.077,-13.434],[45.97,-14.768],[41.068,-14.788]],\"c\":true},\"ix\":2},\"nm\":\"d\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":6,\"ty\":\"sh\",\"ix\":7,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.656,-0.185],[0,-2.092],[1.251,-1.251],[1.354,0],[0.349,0.021]],\"o\":[[1.825,-0.082],[1.99,0.554],[0,0.718],[-0.923,0.923],[-0.369,0],[0,0]],\"v\":[[44.288,-12.388],[47.611,-12.183],[50.318,-7.609],[48.985,-3.425],[45.539,-2.4],[44.288,-2.441]],\"c\":true},\"ix\":2},\"nm\":\"d\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":7,\"ty\":\"sh\",\"ix\":8,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[55.669,0],[58.849,0],[58.849,-14.87],[55.669,-14.87]],\"c\":true},\"ix\":2},\"nm\":\"i\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":8,\"ty\":\"sh\",\"ix\":9,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[3.241,0],[0,-4.697],[-5.107,0],[-1.313,1.354],[-0.062,0.882],[0,0],[1.333,0],[0,0.882],[-2.359,0],[-0.062,-0.513]],\"o\":[[0,-2.954],[-4.164,0],[0,3.671],[1.354,0],[1.19,-1.231],[0,0],[-0.062,1.969],[-3.097,0],[0,-3.056],[2.154,0],[0,0]],\"v\":[[73.104,-9.989],[67.587,-14.911],[60.798,-7.097],[67.566,0.349],[71.894,-1.313],[73.227,-4.799],[69.884,-4.799],[67.218,-1.99],[64.121,-7.076],[67.464,-12.593],[69.864,-9.989]],\"c\":true},\"ix\":2},\"nm\":\"c\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":9,\"ty\":\"sh\",\"ix\":10,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-3.938],[-1.62,-1.723],[-1.949,0],[-1.641,1.846],[0,2.154],[1.579,1.805],[1.579,0]],\"o\":[[0,1.354],[1.354,1.415],[1.231,0],[1.21,-1.354],[0,-1.456],[-1.456,-1.641],[-5.333,0]],\"v\":[[74.546,-7.199],[76.372,-1.661],[81.622,0.369],[86.894,-1.743],[88.76,-7.548],[86.873,-13.127],[81.663,-15.137]],\"c\":true},\"ix\":2},\"nm\":\"o\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":10,\"ty\":\"sh\",\"ix\":11,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,1.415],[-0.841,1.026],[-1.19,0],[-0.615,-1.825],[0,-0.718],[0.492,-0.738],[1.292,0],[0.451,0.615]],\"o\":[[0,-1.682],[0.595,-0.759],[1.518,0],[0.308,0.902],[0,2.359],[-0.595,0.923],[-1.477,0],[-0.882,-1.149]],\"v\":[[77.869,-7.302],[78.956,-11.609],[81.684,-12.86],[85.068,-10.235],[85.437,-7.589],[84.432,-3.343],[81.663,-1.969],[78.977,-3.159]],\"c\":true},\"ix\":2},\"nm\":\"o\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":11,\"ty\":\"sh\",\"ix\":12,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[91.007,0],[94.001,0],[94.001,-12.306],[99.744,0],[104.113,0],[104.113,-14.829],[101.159,-14.829],[101.159,-3.159],[95.601,-14.829],[91.007,-14.829]],\"c\":true},\"ix\":2},\"nm\":\"n\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":12,\"ty\":\"sh\",\"ix\":13,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[106.893,0],[109.497,0],[109.497,-2.728],[106.893,-2.728]],\"c\":true},\"ix\":2},\"nm\":\".\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":13,\"ty\":\"sh\",\"ix\":14,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[3.241,0],[0,-4.697],[-5.107,0],[-1.313,1.354],[-0.062,0.882],[0,0],[1.333,0],[0,0.882],[-2.359,0],[-0.062,-0.513]],\"o\":[[0,-2.954],[-4.164,0],[0,3.671],[1.354,0],[1.19,-1.231],[0,0],[-0.062,1.969],[-3.097,0],[0,-3.056],[2.154,0],[0,0]],\"v\":[[124.04,-9.989],[118.523,-14.911],[111.734,-7.097],[118.502,0.349],[122.83,-1.313],[124.163,-4.799],[120.82,-4.799],[118.154,-1.99],[115.057,-7.076],[118.4,-12.593],[120.8,-9.989]],\"c\":true},\"ix\":2},\"nm\":\"c\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":14,\"ty\":\"sh\",\"ix\":15,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-3.938],[-1.62,-1.723],[-1.949,0],[-1.641,1.846],[0,2.154],[1.579,1.805],[1.579,0]],\"o\":[[0,1.354],[1.354,1.415],[1.231,0],[1.21,-1.354],[0,-1.456],[-1.456,-1.641],[-5.333,0]],\"v\":[[125.482,-7.199],[127.308,-1.661],[132.558,0.369],[137.829,-1.743],[139.696,-7.548],[137.809,-13.127],[132.599,-15.137]],\"c\":true},\"ix\":2},\"nm\":\"o\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":15,\"ty\":\"sh\",\"ix\":16,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,1.415],[-0.841,1.026],[-1.19,0],[-0.615,-1.825],[0,-0.718],[0.492,-0.738],[1.292,0],[0.451,0.615]],\"o\":[[0,-1.682],[0.595,-0.759],[1.518,0],[0.308,0.902],[0,2.359],[-0.595,0.923],[-1.477,0],[-0.882,-1.149]],\"v\":[[128.805,-7.302],[129.892,-11.609],[132.62,-12.86],[136.004,-10.235],[136.373,-7.589],[135.368,-3.343],[132.599,-1.969],[129.912,-3.159]],\"c\":true},\"ix\":2},\"nm\":\"o\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":16,\"ty\":\"sh\",\"ix\":17,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[141.696,0],[144.67,0],[144.67,-12.716],[148.629,0],[151.254,0],[155.295,-12.716],[155.295,0],[158.453,0],[158.453,-14.829],[153.408,-14.829],[150.024,-4.041],[146.885,-14.829],[141.696,-14.829]],\"c\":true},\"ix\":2},\"nm\":\"m\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false}],\"ip\":1,\"op\":10,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":3,\"nm\":\"02092020\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":0,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[-105,15,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[60,60,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2}},\"ao\":0,\"ef\":[{\"ty\":5,\"nm\":\"02092020002\",\"np\":3,\"mn\":\"ADBE Checkbox Control\",\"ix\":1,\"en\":1,\"ef\":[{\"ty\":7,\"nm\":\"Checkbox\",\"mn\":\"ADBE Checkbox Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":0,\"ix\":1}}]}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":3,\"nm\":\"Color & Stroke Change\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":0,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[250,250,0],\"ix\":2,\"l\":2,\"x\":\"var $bm_rt;\\n$bm_rt = effect('Axis')('Point');\"},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2,\"x\":\"var $bm_rt;\\nvar temp;\\ntemp = effect('Scale')('Slider');\\n$bm_rt = [\\n    temp,\\n    temp\\n];\"}},\"ao\":0,\"ef\":[{\"ty\":5,\"nm\":\"Stroke\",\"np\":3,\"mn\":\"ADBE Slider Control\",\"ix\":1,\"en\":1,\"ef\":[{\"ty\":0,\"nm\":\"Slider\",\"mn\":\"ADBE Slider Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":70,\"ix\":1}}]},{\"ty\":5,\"nm\":\"Axis\",\"np\":3,\"mn\":\"ADBE Point Control\",\"ix\":2,\"en\":1,\"ef\":[{\"ty\":3,\"nm\":\"Point\",\"mn\":\"ADBE Point Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":[250,250],\"ix\":1}}]},{\"ty\":5,\"nm\":\"Scale\",\"np\":3,\"mn\":\"ADBE Slider Control\",\"ix\":3,\"en\":1,\"ef\":[{\"ty\":0,\"nm\":\"Slider\",\"mn\":\"ADBE Slider Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":100,\"ix\":1}}]},{\"ty\":5,\"nm\":\"State-Hover-1\",\"np\":3,\"mn\":\"ADBE Slider Control\",\"ix\":4,\"en\":1,\"ef\":[{\"ty\":0,\"nm\":\"Slider\",\"mn\":\"ADBE Slider Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":1,\"ix\":1}}]},{\"ty\":5,\"nm\":\"State-Hover-2\",\"np\":3,\"mn\":\"ADBE Slider Control\",\"ix\":5,\"en\":1,\"ef\":[{\"ty\":0,\"nm\":\"Slider\",\"mn\":\"ADBE Slider Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":0,\"ix\":1}}]},{\"ty\":5,\"nm\":\"State-Morph\",\"np\":3,\"mn\":\"ADBE Slider Control\",\"ix\":6,\"en\":1,\"ef\":[{\"ty\":0,\"nm\":\"Slider\",\"mn\":\"ADBE Slider Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":0,\"ix\":1}}]},{\"ty\":5,\"nm\":\"Primary\",\"np\":3,\"mn\":\"ADBE Color Control\",\"ix\":7,\"en\":1,\"ef\":[{\"ty\":2,\"nm\":\"Color\",\"mn\":\"ADBE Color Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":[0.29411765933,0.882352948189,0.92549020052,1],\"ix\":1}}]},{\"ty\":5,\"nm\":\"Secondary\",\"np\":3,\"mn\":\"ADBE Color Control\",\"ix\":8,\"en\":1,\"ef\":[{\"ty\":2,\"nm\":\"Color\",\"mn\":\"ADBE Color Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":[0.796078443527,0.368627458811,0.933333337307,1],\"ix\":1}}]}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":0,\"nm\":\"[hover-1]\",\"parent\":3,\"refId\":\"comp_0\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11,\"x\":\"var $bm_rt;\\n$bm_rt = $bm_mul(thisComp.layer('Color & Stroke Change').effect(4)('Slider'), 100);\"},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[0,0,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[250,250,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2}},\"ao\":0,\"w\":500,\"h\":500,\"ip\":0,\"op\":61,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":0,\"nm\":\"hover-2\",\"parent\":3,\"refId\":\"comp_2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11,\"x\":\"var $bm_rt;\\n$bm_rt = $bm_mul(thisComp.layer('Color & Stroke Change').effect(5)('Slider'), 100);\"},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[0,0,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[250,250,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2}},\"ao\":0,\"w\":500,\"h\":500,\"ip\":0,\"op\":61,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":0,\"nm\":\"morph-1\",\"parent\":3,\"refId\":\"comp_4\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11,\"x\":\"var $bm_rt;\\n$bm_rt = $bm_mul(thisComp.layer('Color & Stroke Change').effect(6)('Slider'), 100);\"},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[0,0,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[250,250,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2}},\"ao\":0,\"w\":500,\"h\":500,\"ip\":0,\"op\":61,\"st\":0,\"bm\":0}],\"markers\":[]}"));}),
"[project]/src/components/features/header/HeaderTop.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ImageError.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$provider$2f$ConfigProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/provider/ConfigProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$mobile$2f$nav$2f$HeaderNavMobile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/mobile/nav/HeaderNavMobile.tsx [app-ssr] (ecmascript)");
;
"use client";
;
;
;
;
;
;
const LordIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/src/components/ui/icons/LordIcon.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: 25,
                height: 25,
                display: 'inline-block'
            }
        }, void 0, false, {
            fileName: "[project]/src/components/features/header/HeaderTop.tsx",
            lineNumber: 12,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
const HeaderTop = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { config } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$provider$2f$ConfigProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConfig"])();
    const [isShow, setIsShow] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "header-top ",
        ref: ref,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$mobile$2f$nav$2f$HeaderNavMobile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isShow: isShow,
                setIsShow: setIsShow
            }, void 0, false, {
                fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-fluid-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-md-9 d-none d-md-block",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/flash-sale",
                                    className: "text-white me-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fas fa-bolt"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                            lineNumber: 26,
                                            columnNumber: 63
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Flash Sale"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/customers/register",
                                    className: "text-white me-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fa-regular fa-user"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                            lineNumber: 27,
                                            columnNumber: 71
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Đăng ký Tài khoản"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/storeAccount/login",
                                    className: "text-white me-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fas fa-store-alt"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                            lineNumber: 28,
                                            columnNumber: 71
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Kênh bán hàng"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/storeAccount/register",
                                    className: "text-white me-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fa-solid fa-store"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                            lineNumber: 29,
                                            columnNumber: 74
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Đăng ký Bán hàng"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-md-3 d-flex align-items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/",
                                    className: "d-block d-md-none me-2",
                                    style: {
                                        height: "50px",
                                        width: "50px"
                                    },
                                    children: config?.logo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        width: 400,
                                        height: 400,
                                        src: config?.logo,
                                        style: {
                                            objectFit: "contain",
                                            height: "100%"
                                        },
                                        alt: config?.description_1 || "honeynet"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                        lineNumber: 41,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rightside-box ms-2 d-block d-md-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "search-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "input-group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "input-group-text",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LordIcon, {
                                                            icon: __turbopack_context__.r("[project]/src/assets/lordicon/msoeawqm.json (json)"),
                                                            primary: "#ffffff",
                                                            secondary: "#ffffff"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                            lineNumber: 49,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                        lineNumber: 47,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        className: "form-control search-type",
                                                        placeholder: "Tìm kiếm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "input-group-text close-search",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "fa-light fa-x font-light"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                            lineNumber: 53,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                        lineNumber: 52,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                lineNumber: 46,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "right-side-menu",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "right-side onhover-dropdown",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "delivery-login-box",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "delivery-icon",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                className: "btn p-0 d-flex justify-content-center align-items-center bg-white",
                                                                style: {
                                                                    height: "35.5px",
                                                                    minWidth: "35.5px!important"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LordIcon, {
                                                                    icon: __turbopack_context__.r("[project]/src/assets/lordicon/ljvjsnvh.json (json)"),
                                                                    primary: "#f58233",
                                                                    secondary: "#ffc20e"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                                    lineNumber: 63,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                                lineNumber: 61,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                            lineNumber: 60,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                        lineNumber: 59,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "onhover-div onhover-div-login",
                                                        style: {
                                                            width: "205px"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "user-box-name",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "mb-1 notLogin",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "/customers/login",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "me-1 mb-1 fa-regular fa-right-to-bracket",
                                                                                style: {
                                                                                    width: "16px",
                                                                                    height: "16px"
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                                                lineNumber: 70,
                                                                                columnNumber: 52
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            "Đăng nhập"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                                        lineNumber: 70,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                                    lineNumber: 69,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "mb-1 notLogin",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "/customers/register",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "me-1 mb-1 fa-regular fa-user",
                                                                                style: {
                                                                                    width: "16px",
                                                                                    height: "16px"
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                                                lineNumber: 73,
                                                                                columnNumber: 55
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            "Đăng ký"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                                        lineNumber: 73,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                                    lineNumber: 72,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "mb-1 notLogin",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "/customers/forgotPassword",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "me-1 mb-1 fa-regular fa-lock",
                                                                                style: {
                                                                                    width: "16px",
                                                                                    height: "16px"
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                                                lineNumber: 76,
                                                                                columnNumber: 61
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            "Quên mật khẩu"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                                        lineNumber: 76,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                                    lineNumber: 75,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "mb-1 notLogin",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "/sellerAdcp/login",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "me-1 mb-1 fa-regular fa-handshake",
                                                                                style: {
                                                                                    width: "16px",
                                                                                    height: "16px"
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                                                lineNumber: 79,
                                                                                columnNumber: 53
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            "Cộng tác viên"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                                        lineNumber: 79,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                                    lineNumber: 78,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "mb-1 notLogin",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "/storeAccount/login",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "me-1 mb-1 fa-regular fa-store-alt",
                                                                                style: {
                                                                                    width: "16px",
                                                                                    height: "16px"
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                                                lineNumber: 82,
                                                                                columnNumber: 55
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            "Kênh bán hàng"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                                        lineNumber: 82,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                                    lineNumber: 81,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "mb-1 hasLogin ",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "/customers/profile",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "me-1 mb-1 fa-regular fa-user",
                                                                                style: {
                                                                                    width: "16px",
                                                                                    height: "16px"
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                                                lineNumber: 85,
                                                                                columnNumber: 54
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            "Thông tin tài khoản"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                                        lineNumber: 85,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                                    lineNumber: 84,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "mb-1 hasLogin ",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "/customers/vouchers",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "me-1 mb-1 fa-regular fa-badge-percent",
                                                                                style: {
                                                                                    width: "16px",
                                                                                    height: "16px"
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                                                lineNumber: 88,
                                                                                columnNumber: 55
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            "Mã giảm giá"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                                        lineNumber: 88,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                                    lineNumber: 87,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "mb-1 hasLogin ",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "/customers/pointLogs",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "me-1 mb-1 fa-regular fa-gift",
                                                                                style: {
                                                                                    width: "16px",
                                                                                    height: "16px"
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                                                lineNumber: 91,
                                                                                columnNumber: 56
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            "Điểm thưởng"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                                        lineNumber: 91,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                                    lineNumber: 90,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "mb-1 hasLogin ",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "/customers/orders",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "me-1 mb-1 fa-regular fa-bag-shopping",
                                                                                style: {
                                                                                    width: "16px",
                                                                                    height: "16px"
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                                                lineNumber: 94,
                                                                                columnNumber: 53
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            "Đơn hàng của tôi"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                                        lineNumber: 94,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                                    lineNumber: 93,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "mb-1 hasLogin ",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "/customers/customerAddress",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "me-1 mb-1 fa-regular fa-map-pin",
                                                                                style: {
                                                                                    width: "16px",
                                                                                    height: "16px"
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                                                lineNumber: 97,
                                                                                columnNumber: 62
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            "Địa chỉ giao hàng"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                                        lineNumber: 97,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                                    lineNumber: 96,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "hasLogin ",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "/customers/logout",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "me-1 mb-1 fa-regular fa-right-from-bracket",
                                                                                style: {
                                                                                    width: "16px",
                                                                                    height: "16px"
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                                                lineNumber: 100,
                                                                                columnNumber: 53
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            "Đăng xuất"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                                        lineNumber: 100,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                                    lineNumber: 99,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                            lineNumber: 68,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                lineNumber: 58,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ms-2 d-flex d-md-none",
                                    style: {
                                        height: "35.5px",
                                        minWidth: "35.5px!important",
                                        background: "#fff",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: "50px"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "navbar-toggler d-xl-none d-inline navbar-menu-button p-2",
                                        "data-bs-toggle": "offcanvas",
                                        "data-bs-target": "#primaryMenu",
                                        onClick: ()=>{
                                            setIsShow(true);
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "navbar-toggler-icon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "fa-solid fa-bars text-theme",
                                                style: {
                                                    WebkitTextFillColor: "var(--theme-color1)"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                                lineNumber: 123,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/features/header/HeaderTop.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/header/HeaderTop.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
HeaderTop.displayName = 'HeaderTop';
const __TURBOPACK__default__export__ = HeaderTop;
}),
"[project]/src/components/features/modal/ModalStoreItem.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ImageError.tsx [app-ssr] (ecmascript)");
;
;
;
function ModalStoreItem({ item }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "col-xxl-3 col-md-4 mb-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "blog-box h-100",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "blog-box-image",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `/store/${item.alias}`,
                        className: "ratio-16x9",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: item.image ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMAGES_BASE_URL"] + "/" + item.image : '/images/logo.png',
                            alt: item.name,
                            className: "lazyload bg-img w-100 ratio-16x9 object-contain",
                            width: 500,
                            height: 300
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/modal/ModalStoreItem.tsx",
                            lineNumber: 18,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/modal/ModalStoreItem.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/features/modal/ModalStoreItem.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "blog-detail",
                    children: [
                        item.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: item.des || item.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/modal/ModalStoreItem.tsx",
                            lineNumber: 29,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `/store/${item.alias}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: item.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/modal/ModalStoreItem.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/modal/ModalStoreItem.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/features/modal/ModalStoreItem.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/modal/ModalStoreItem.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/features/modal/ModalStoreItem.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = ModalStoreItem;
}),
"[project]/src/components/features/modal/ModalStore.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$modal$2f$ModalStoreItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/modal/ModalStoreItem.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$modal$2f$Modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/modal/Modal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/api.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function ModalStore({ initialData, uri, onClose }) {
    const [data, setData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(initialData || []);
    const handleFetchData = async ()=>{
        if (initialData && initialData.length > 0) {
            setData(initialData);
            return;
        }
        if (uri) {
            const resdata = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiFetchSites"])(uri);
            setData(resdata.data);
            return;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        handleFetchData();
    }, [
        uri,
        initialData
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$modal$2f$Modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        onClose: onClose,
        title: "",
        classNameMainModal: "modal-xl container",
        id: "modalStore",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-body",
            style: {
                overflowY: "auto",
                flexGrow: 1
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "title title-flex-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Cửa hàng"
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/modal/ModalStore.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "nav nav-tabs tab-style-color-2 tab-style-color",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "nav-link btn active",
                                    onClick: ()=>location.href = '/store',
                                    type: "button",
                                    children: "Xem tất cả"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/modal/ModalStore.tsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/modal/ModalStore.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/modal/ModalStore.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/features/modal/ModalStore.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row blog-section",
                    children: data?.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$modal$2f$ModalStoreItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            item: item
                        }, item.id || index, false, {
                            fileName: "[project]/src/components/features/modal/ModalStore.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/features/modal/ModalStore.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/modal/ModalStore.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/features/modal/ModalStore.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = ModalStore;
}),
"[project]/src/components/features/header/HeaderStore.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$modal$2f$ModalStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/modal/ModalStore.tsx [app-ssr] (ecmascript)");
;
"use client";
;
;
;
;
const LordIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/src/components/ui/icons/LordIcon.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: 30,
                height: 30,
                display: 'inline-block'
            }
        }, void 0, false, {
            fileName: "[project]/src/components/features/header/HeaderStore.tsx",
            lineNumber: 8,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
function HeaderStore() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "location-box",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "btn location-button",
                    "data-bs-toggle": "modal",
                    onClick: ()=>setIsOpen(true),
                    "aria-label": "Cửa hàng",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "location-arrow",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fas fa-store ms-0 d-block"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/header/HeaderStore.tsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/header/HeaderStore.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "locat-name",
                            children: "Cửa hàng"
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/header/HeaderStore.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "fa-solid fa-angle-down",
                            style: {
                                marginLeft: "20px"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/header/HeaderStore.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/features/header/HeaderStore.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$modal$2f$ModalStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    onClose: ()=>setIsOpen(false),
                    uri: "/stores/getList"
                }, void 0, false, {
                    fileName: "[project]/src/components/features/header/HeaderStore.tsx",
                    lineNumber: 25,
                    columnNumber: 20
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/header/HeaderStore.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
const __TURBOPACK__default__export__ = HeaderStore;
}),
"[project]/src/components/features/notification/NotificationHoverItem.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$helper$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/helper/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ImageError.tsx [app-ssr] (ecmascript)");
;
;
;
function NotificationHoverItem({ item }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: "#",
        className: "d-flex align-items-center gap-3 mb-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: "https://ca-ctm.systems.com.vn/styles/logo.png",
                alt: "user",
                className: "img-fluid w-6",
                width: 90,
                height: 90
            }, void 0, false, {
                fileName: "[project]/src/components/features/notification/NotificationHoverItem.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-flex flex-column flex-fill",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "fw-400 text-theme text-1-line",
                        children: item.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/notification/NotificationHoverItem.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "fw-400 text-body",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$helper$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(item.createdAt)
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/notification/NotificationHoverItem.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/notification/NotificationHoverItem.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/notification/NotificationHoverItem.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = NotificationHoverItem;
}),
"[project]/src/types/common.types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationTypeEnum",
    ()=>NotificationTypeEnum,
    "OrderStatus",
    ()=>OrderStatus,
    "ReviewTypeEnum",
    ()=>ReviewTypeEnum,
    "TrackingStatusEnum",
    ()=>TrackingStatusEnum
]);
var OrderStatus = /*#__PURE__*/ function(OrderStatus) {
    OrderStatus["NEW"] = "NEW";
    OrderStatus["COMPLETED"] = "COMPLETED";
    OrderStatus["CANCELLED"] = "CANCELLED";
    return OrderStatus;
}({});
var TrackingStatusEnum = /*#__PURE__*/ function(TrackingStatusEnum) {
    TrackingStatusEnum["PENDING"] = "PENDING";
    TrackingStatusEnum["PROCESSING"] = "PROCESSING";
    TrackingStatusEnum["IN_PRODUCTION"] = "IN_PRODUCTION";
    TrackingStatusEnum["SHIPPED"] = "SHIPPED";
    TrackingStatusEnum["DELIVERED"] = "DELIVERED";
    return TrackingStatusEnum;
}({});
var ReviewTypeEnum = /*#__PURE__*/ function(ReviewTypeEnum) {
    ReviewTypeEnum["PRODUCT"] = "PRODUCT";
    ReviewTypeEnum["STORE"] = "STORE";
    return ReviewTypeEnum;
}({});
var NotificationTypeEnum = /*#__PURE__*/ function(NotificationTypeEnum) {
    NotificationTypeEnum["PERSONAL"] = "PERSONAL";
    NotificationTypeEnum["PROMOTION"] = "PROMOTION";
    return NotificationTypeEnum;
}({});
}),
"[project]/src/assets/data/Notification.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "notifications",
    ()=>notifications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$common$2e$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/common.types.ts [app-ssr] (ecmascript)");
;
const notifications = [
    {
        id: "1",
        title: "Chào mừng bạn đến với hệ thống!",
        message: "Tài khoản của bạn đã được tạo thành công. Hãy bắt đầu khám phá ngay hôm nay.",
        isRead: false,
        createdAt: new Date("2025-10-19T09:00:00"),
        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$common$2e$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationTypeEnum"].PERSONAL
    },
    {
        id: "2",
        title: "Giảm giá 50% cho đơn hàng đầu tiên",
        message: "Nhập mã WELCOME50 khi thanh toán để nhận ưu đãi đặc biệt.",
        isRead: false,
        createdAt: new Date("2025-10-18T12:30:00"),
        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$common$2e$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationTypeEnum"].PROMOTION
    },
    {
        id: "3",
        title: "Cập nhật mật khẩu thành công",
        message: "Bạn vừa thay đổi mật khẩu. Nếu không phải bạn, hãy liên hệ ngay bộ phận hỗ trợ.",
        isRead: true,
        createdAt: new Date("2025-10-17T08:45:00"),
        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$common$2e$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationTypeEnum"].PERSONAL
    },
    {
        id: "4",
        title: "Khuyến mãi Halloween 🎃",
        message: "Nhận ngay ưu đãi giảm 30% cho tất cả sản phẩm đến hết 31/10!",
        isRead: false,
        createdAt: new Date("2025-10-16T14:00:00"),
        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$common$2e$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationTypeEnum"].PROMOTION
    },
    {
        id: "5",
        title: "Đơn hàng #A1254 đã được giao",
        message: "Cảm ơn bạn đã mua sắm cùng chúng tôi. Chúc bạn có trải nghiệm tuyệt vời!",
        isRead: true,
        createdAt: new Date("2025-10-15T11:15:00"),
        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$common$2e$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationTypeEnum"].PERSONAL
    },
    {
        id: "6",
        title: "Flash Sale 10.10",
        message: "Hàng ngàn sản phẩm giảm giá đến 70%! Chỉ trong 24 giờ.",
        isRead: false,
        createdAt: new Date("2025-10-10T00:00:00"),
        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$common$2e$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationTypeEnum"].PROMOTION
    },
    {
        id: "7",
        title: "Tài khoản của bạn sắp hết hạn đăng nhập",
        message: "Hãy đăng nhập lại để tiếp tục sử dụng các tính năng.",
        isRead: false,
        createdAt: new Date("2025-10-08T19:20:00"),
        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$common$2e$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationTypeEnum"].PERSONAL
    },
    {
        id: "8",
        title: "Voucher sinh nhật 🎂",
        message: "Chúc mừng sinh nhật bạn! Tặng bạn mã giảm 100k cho đơn hàng từ 500k.",
        isRead: true,
        createdAt: new Date("2025-09-18T09:30:00"),
        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$common$2e$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationTypeEnum"].PROMOTION
    },
    {
        id: "9",
        title: "Phản hồi của bạn đã được ghi nhận",
        message: "Cảm ơn bạn đã góp ý! Chúng tôi sẽ cải thiện sản phẩm tốt hơn.",
        isRead: true,
        createdAt: new Date("2025-09-15T10:05:00"),
        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$common$2e$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationTypeEnum"].PERSONAL
    },
    {
        id: "10",
        title: "Black Friday đang đến gần!",
        message: "Sẵn sàng cho siêu sự kiện mua sắm lớn nhất năm. Giảm đến 80%!",
        isRead: false,
        createdAt: new Date("2025-11-20T08:00:00"),
        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$common$2e$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationTypeEnum"].PROMOTION
    },
    {
        id: "11",
        title: "Xác nhận email thành công",
        message: "Email của bạn đã được xác thực. Giờ bạn có thể nhận thông báo mới nhất.",
        isRead: true,
        createdAt: new Date("2025-10-12T13:10:00"),
        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$common$2e$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationTypeEnum"].PERSONAL
    },
    {
        id: "12",
        title: "Miễn phí vận chuyển toàn quốc",
        message: "Chỉ áp dụng cho đơn hàng từ 200k trong tuần này.",
        isRead: false,
        createdAt: new Date("2025-10-14T09:40:00"),
        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$common$2e$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationTypeEnum"].PROMOTION
    },
    {
        id: "13",
        title: "Cập nhật thông tin cá nhân",
        message: "Bạn vừa thay đổi số điện thoại thành công.",
        isRead: true,
        createdAt: new Date("2025-10-03T18:22:00"),
        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$common$2e$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationTypeEnum"].PERSONAL
    },
    {
        id: "14",
        title: "Mã giảm giá cuối tuần 🌟",
        message: "Nhập mã WEEKEND10 để giảm 10% cho mọi đơn hàng.",
        isRead: false,
        createdAt: new Date("2025-10-18T06:45:00"),
        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$common$2e$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationTypeEnum"].PROMOTION
    },
    {
        id: "15",
        title: "Hệ thống bảo trì định kỳ",
        message: "Website sẽ tạm dừng hoạt động từ 0h - 3h sáng mai.",
        isRead: false,
        createdAt: new Date("2025-10-13T22:00:00"),
        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$common$2e$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationTypeEnum"].PERSONAL
    },
    {
        id: "16",
        title: "Deal độc quyền cho thành viên",
        message: "Giảm thêm 15% cho tất cả thành viên VIP.",
        isRead: true,
        createdAt: new Date("2025-10-05T15:30:00"),
        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$common$2e$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationTypeEnum"].PROMOTION
    },
    {
        id: "17",
        title: "Đơn hàng #A1329 đang được vận chuyển",
        message: "Giao hàng dự kiến: 22/10/2025.",
        isRead: false,
        createdAt: new Date("2025-10-19T16:10:00"),
        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$common$2e$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationTypeEnum"].PERSONAL
    },
    {
        id: "18",
        title: "Khuyến mãi sinh viên 🎓",
        message: "Nhập mã STUDENT15 để được giảm ngay 15%.",
        isRead: false,
        createdAt: new Date("2025-10-07T11:00:00"),
        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$common$2e$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationTypeEnum"].PROMOTION
    },
    {
        id: "19",
        title: "Thiết bị mới của bạn đã được đăng nhập",
        message: "Bạn vừa đăng nhập từ thiết bị Windows tại TP.HCM.",
        isRead: true,
        createdAt: new Date("2025-10-18T19:00:00"),
        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$common$2e$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationTypeEnum"].PERSONAL
    },
    {
        id: "20",
        title: "Mega Sale Giáng Sinh 🎄",
        message: "Mở đầu mùa lễ hội với hàng ngàn ưu đãi hấp dẫn!",
        isRead: false,
        createdAt: new Date("2025-12-01T10:00:00"),
        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$common$2e$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationTypeEnum"].PROMOTION
    }
];
}),
"[project]/src/lib/api/notification.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllNotifications",
    ()=>getAllNotifications,
    "getAllSystemNotifications",
    ()=>getAllSystemNotifications,
    "getAllSystemNotificationsByUrl",
    ()=>getAllSystemNotificationsByUrl,
    "markNotificationAsRead",
    ()=>markNotificationAsRead
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$data$2f$Notification$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/data/Notification.ts [app-ssr] (ecmascript)");
;
const getAllNotifications = async (tab)=>{
    // Nếu có tab, filter theo tab
    // const params = new URLSearchParams();
    // if (tab) params.append('tab', tab);
    // const res = await apiFetch(`/api/notifications?${params.toString()}`);
    // return res;
    if (tab) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$data$2f$Notification$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifications"].filter((n)=>{
            if (tab === "all") return true;
            return n.type === tab.toUpperCase();
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$data$2f$Notification$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifications"];
};
const markNotificationAsRead = async (notificationId)=>{
    // const res = await apiFetch(`/api/notifications/${notificationId}/read`, {
    //     method: "POST",
    // });
    // return res;
    return true;
};
const getAllSystemNotifications = async ()=>{
    // const res = await apiFetch('/api/notifications/system');
    // return res;
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$data$2f$Notification$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifications"];
};
const getAllSystemNotificationsByUrl = async (url)=>{
    // const res = await apiFetchFullUrl(url);
    // return res;
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$data$2f$Notification$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifications"];
};
}),
"[project]/src/components/features/notification/NotificationHoverSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$notification$2f$NotificationHoverItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/notification/NotificationHoverItem.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$common$2e$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/common.types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$notification$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/notification.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function NotificationHoverSection() {
    // const { notifications } = useAuthContext();
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedTab, setSelectedTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const handleFetchNotifications = async ()=>{
        const resdata = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$notification$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllNotifications"])();
        setNotifications(resdata);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        handleFetchNotifications();
    }, []);
    const notificationPERSONAL = notifications?.filter((item)=>item.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$common$2e$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationTypeEnum"].PERSONAL) || [];
    const notificationPROMOTION = notifications?.filter((item)=>item.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$common$2e$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationTypeEnum"].PROMOTION) || [];
    // Lấy notifications theo tab
    const getNotificationsByTab = ()=>{
        switch(selectedTab){
            case 'personal':
                return notificationPERSONAL;
            case 'promotion':
                return notificationPROMOTION;
            case 'all':
            default:
                return [
                    ...notificationPERSONAL,
                    ...notificationPROMOTION
                ];
        }
    };
    const currentNotifications = getNotificationsByTab();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "hasLogin ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "fw-600 mb-3",
                children: "Thông báo"
            }, void 0, false, {
                fileName: "[project]/src/components/features/notification/NotificationHoverSection.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "nav nav-pills filter-box",
                id: "pills-tab",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "nav-item flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `nav-link w-100 ${selectedTab === 'all' ? 'active' : ''}`,
                            onClick: ()=>setSelectedTab('all'),
                            type: "button",
                            children: "Tất cả"
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/notification/NotificationHoverSection.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/notification/NotificationHoverSection.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "nav-item flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `nav-link w-100 ${selectedTab === 'personal' ? 'active' : ''}`,
                            onClick: ()=>setSelectedTab('personal'),
                            type: "button",
                            children: "Cá nhân"
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/notification/NotificationHoverSection.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/notification/NotificationHoverSection.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "nav-item flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `nav-link w-100 ${selectedTab === 'promotion' ? 'active' : ''}`,
                            onClick: ()=>setSelectedTab('promotion'),
                            type: "button",
                            children: "Khuyến mãi"
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/notification/NotificationHoverSection.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/notification/NotificationHoverSection.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/notification/NotificationHoverSection.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: "100%"
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.6
                },
                viewport: {
                    once: true,
                    amount: 0
                },
                className: "tab-content mt-3",
                id: "pills-tabContent",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "notifyBody",
                    children: currentNotifications.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "notifyBodyList",
                                children: currentNotifications.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$notification$2f$NotificationHoverItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        item: item
                                    }, item.id, false, {
                                        fileName: "[project]/src/components/features/notification/NotificationHoverSection.tsx",
                                        lineNumber: 80,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/notification/NotificationHoverSection.tsx",
                                lineNumber: 78,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center w-100 mt-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: {
                                        pathname: "/customers/notifications",
                                        query: selectedTab !== 'all' ? {
                                            tab: `notification-${selectedTab}`
                                        } : undefined
                                    },
                                    className: "fs-6",
                                    children: "Xem tất cả"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/notification/NotificationHoverSection.tsx",
                                    lineNumber: 84,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/notification/NotificationHoverSection.tsx",
                                lineNumber: 83,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-100 text-center fs-6 emptyNotifi",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            children: "Chưa có thông báo"
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/notification/NotificationHoverSection.tsx",
                            lineNumber: 97,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/notification/NotificationHoverSection.tsx",
                        lineNumber: 96,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/features/notification/NotificationHoverSection.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/features/notification/NotificationHoverSection.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/notification/NotificationHoverSection.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = NotificationHoverSection;
}),
"[project]/src/assets/lordicon/ytuosppc.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"v\":\"5.8.1\",\"fr\":24,\"ip\":0,\"op\":25,\"w\":500,\"h\":500,\"nm\":\"20-love-heart-gradient\",\"ddd\":0,\"assets\":[{\"id\":\"comp_0\",\"nm\":\"mask\",\"fr\":24,\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":3,\"nm\":\"NULL\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":0,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[250,250,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[60,60,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[350,350,100],\"ix\":6,\"l\":2}},\"ao\":0,\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Warstwa 3\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[60,60,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1,\"l\":2},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":0,\"s\":[78,78,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":5,\"s\":[68,68,100]},{\"i\":{\"x\":[0.575,0.575,0.575],\"y\":[1,1,1]},\"o\":{\"x\":[0.185,0.185,0.185],\"y\":[0,0,0]},\"t\":8,\"s\":[78,78,100]},{\"i\":{\"x\":[0.703,0.703,0.703],\"y\":[1,1,1]},\"o\":{\"x\":[0.341,0.341,0.341],\"y\":[0,0,0]},\"t\":11,\"s\":[71,71,100]},{\"t\":14,\"s\":[78,78,100]}],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,7.48],[5.712,5.712],[6.359,0.715],[6.55,-6.556],[0,0],[0,0],[7.48,0],[5.712,-5.712],[-11.437,-11.425],[0,0]],\"o\":[[5.712,-5.712],[0,-7.492],[-4.875,-4.88],[-8.543,-0.961],[0,0],[0,0],[-5.712,-5.712],[-7.492,0],[-11.437,11.425],[0,0],[0,0]],\"v\":[[45.26,0.106],[53.84,-20.578],[45.26,-41.274],[27.857,-49.667],[0.067,-35.985],[0.032,-35.95],[-0.003,-35.985],[-24.887,-48.893],[-45.583,-40.312],[-45.583,1.067],[-0.001,45.688]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":0,\"ix\":1},\"e\":{\"a\":0,\"k\":16,\"ix\":2},\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0],\"y\":[1]},\"o\":{\"x\":[0.342],\"y\":[0.163]},\"t\":0,\"s\":[-233]},{\"t\":21,\"s\":[-593],\"h\":1}],\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.070588235294,0.074509803922,0.192156862745,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":4.2,\"ix\":5,\"x\":\"var $bm_rt;\\n$bm_rt = $bm_mul($bm_div(value, 70), comp('20-love-heart-gradient').layer('Color & Stroke Change').effect('Stroke')('Slider'));\"},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Warstwa 2\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[60,60,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1,\"l\":2},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":0,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":5,\"s\":[90,90,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":8,\"s\":[100,100,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0]},\"t\":11,\"s\":[90,90,100]},{\"t\":14,\"s\":[100,100,100]}],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,7.48],[5.712,5.712],[6.359,0.715],[6.55,-6.556],[0,0],[0,0],[7.48,0],[5.712,-5.712],[-11.437,-11.425],[0,0]],\"o\":[[5.712,-5.712],[0,-7.492],[-4.875,-4.88],[-8.543,-0.961],[0,0],[0,0],[-5.712,-5.712],[-7.492,0],[-11.437,11.425],[0,0],[0,0]],\"v\":[[41.413,4.273],[49.994,-16.411],[41.413,-37.107],[24.011,-45.5],[0.034,-37.107],[-0.001,-37.072],[-0.037,-37.107],[-20.721,-45.688],[-41.416,-37.107],[-41.416,4.273],[-0.001,45.688]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.070588235294,0.074509803922,0.192156862745,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":3.5,\"ix\":5,\"x\":\"var $bm_rt;\\n$bm_rt = $bm_mul($bm_div(value, 70), comp('20-love-heart-gradient').layer('Color & Stroke Change').effect('Stroke')('Slider'));\"},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0}]}],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"watermark\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11,\"x\":\"var $bm_rt;\\nvar checkbox = thisComp.layer('02092020').effect('02092020002')('Checkbox');\\nif (checkbox == 1) {\\n    $bm_rt = 20;\\n} else {\\n    $bm_rt = 0;\\n}\\n;\"},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[249.934,481.369,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[79.934,0.369,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[265.159,265.159,100],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[1.415,0],[11.014,0],[11.014,-2.523],[4.656,-2.523],[4.656,-14.809],[1.415,-14.809]],\"c\":true},\"ix\":2},\"nm\":\"l\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-3.938],[-1.62,-1.723],[-1.949,0],[-1.641,1.846],[0,2.154],[1.579,1.805],[1.579,0]],\"o\":[[0,1.354],[1.354,1.415],[1.231,0],[1.21,-1.354],[0,-1.456],[-1.456,-1.641],[-5.333,0]],\"v\":[[11.167,-7.199],[12.992,-1.661],[18.243,0.369],[23.514,-1.743],[25.381,-7.548],[23.494,-13.127],[18.284,-15.137]],\"c\":true},\"ix\":2},\"nm\":\"o\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,1.415],[-0.841,1.026],[-1.19,0],[-0.615,-1.825],[0,-0.718],[0.492,-0.738],[1.292,0],[0.451,0.615]],\"o\":[[0,-1.682],[0.595,-0.759],[1.518,0],[0.308,0.902],[0,2.359],[-0.595,0.923],[-1.477,0],[-0.882,-1.149]],\"v\":[[14.49,-7.302],[15.577,-11.609],[18.305,-12.86],[21.689,-10.235],[22.058,-7.589],[21.053,-3.343],[18.284,-1.969],[15.597,-3.159]],\"c\":true},\"ix\":2},\"nm\":\"o\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":3,\"ty\":\"sh\",\"ix\":4,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[-0.287,-0.841],[-0.144,-0.82],[0,0],[0.164,0.656],[0.226,1.743],[2.236,0.205],[0,2.769],[0.923,0.8],[1.641,-0.021],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0.533,0],[0.205,0.574],[0,0],[-0.164,-0.246],[-0.103,-0.41],[-0.267,-1.928],[0.718,-0.205],[0,-0.964],[-1.19,-1.026],[0,0],[0,0]],\"v\":[[27.381,0],[30.622,0],[30.622,-5.989],[33.411,-5.989],[35.011,-5.148],[35.811,0],[39.318,0],[38.867,-1.067],[38.416,-3.938],[35.749,-7.343],[38.847,-10.973],[37.554,-13.824],[33.063,-14.829],[27.381,-14.829]],\"c\":true},\"ix\":2},\"nm\":\"r\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":4,\"ty\":\"sh\",\"ix\":5,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-0.492,-0.349],[0,-1.005],[0.226,-0.164],[0.369,0],[0,0]],\"o\":[[0,0],[1.005,0],[0.287,0.185],[0,1.046],[-0.513,0.41],[0,0],[0,0]],\"v\":[[30.519,-12.491],[32.652,-12.491],[34.744,-12.142],[35.524,-10.481],[34.703,-8.758],[33.083,-8.348],[30.519,-8.348]],\"c\":true},\"ix\":2},\"nm\":\"r\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":5,\"ty\":\"sh\",\"ix\":6,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-0.554,0.103],[0,4.553],[1.866,1.374],[0.82,0],[0,0]],\"o\":[[0,0],[1.497,0],[2.81,-0.513],[0,-2.113],[-1.784,-1.313],[0,0],[0,0]],\"v\":[[41.068,0],[45.683,0],[48.349,-0.164],[53.6,-7.609],[51.077,-13.434],[45.97,-14.768],[41.068,-14.788]],\"c\":true},\"ix\":2},\"nm\":\"d\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":6,\"ty\":\"sh\",\"ix\":7,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.656,-0.185],[0,-2.092],[1.251,-1.251],[1.354,0],[0.349,0.021]],\"o\":[[1.825,-0.082],[1.99,0.554],[0,0.718],[-0.923,0.923],[-0.369,0],[0,0]],\"v\":[[44.288,-12.388],[47.611,-12.183],[50.318,-7.609],[48.985,-3.425],[45.539,-2.4],[44.288,-2.441]],\"c\":true},\"ix\":2},\"nm\":\"d\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":7,\"ty\":\"sh\",\"ix\":8,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[55.669,0],[58.849,0],[58.849,-14.87],[55.669,-14.87]],\"c\":true},\"ix\":2},\"nm\":\"i\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":8,\"ty\":\"sh\",\"ix\":9,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[3.241,0],[0,-4.697],[-5.107,0],[-1.313,1.354],[-0.062,0.882],[0,0],[1.333,0],[0,0.882],[-2.359,0],[-0.062,-0.513]],\"o\":[[0,-2.954],[-4.164,0],[0,3.671],[1.354,0],[1.19,-1.231],[0,0],[-0.062,1.969],[-3.097,0],[0,-3.056],[2.154,0],[0,0]],\"v\":[[73.104,-9.989],[67.587,-14.911],[60.798,-7.097],[67.566,0.349],[71.894,-1.313],[73.227,-4.799],[69.884,-4.799],[67.218,-1.99],[64.121,-7.076],[67.464,-12.593],[69.864,-9.989]],\"c\":true},\"ix\":2},\"nm\":\"c\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":9,\"ty\":\"sh\",\"ix\":10,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-3.938],[-1.62,-1.723],[-1.949,0],[-1.641,1.846],[0,2.154],[1.579,1.805],[1.579,0]],\"o\":[[0,1.354],[1.354,1.415],[1.231,0],[1.21,-1.354],[0,-1.456],[-1.456,-1.641],[-5.333,0]],\"v\":[[74.546,-7.199],[76.372,-1.661],[81.622,0.369],[86.894,-1.743],[88.76,-7.548],[86.873,-13.127],[81.663,-15.137]],\"c\":true},\"ix\":2},\"nm\":\"o\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":10,\"ty\":\"sh\",\"ix\":11,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,1.415],[-0.841,1.026],[-1.19,0],[-0.615,-1.825],[0,-0.718],[0.492,-0.738],[1.292,0],[0.451,0.615]],\"o\":[[0,-1.682],[0.595,-0.759],[1.518,0],[0.308,0.902],[0,2.359],[-0.595,0.923],[-1.477,0],[-0.882,-1.149]],\"v\":[[77.869,-7.302],[78.956,-11.609],[81.684,-12.86],[85.068,-10.235],[85.437,-7.589],[84.432,-3.343],[81.663,-1.969],[78.977,-3.159]],\"c\":true},\"ix\":2},\"nm\":\"o\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":11,\"ty\":\"sh\",\"ix\":12,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[91.007,0],[94.001,0],[94.001,-12.306],[99.744,0],[104.113,0],[104.113,-14.829],[101.159,-14.829],[101.159,-3.159],[95.601,-14.829],[91.007,-14.829]],\"c\":true},\"ix\":2},\"nm\":\"n\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":12,\"ty\":\"sh\",\"ix\":13,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[106.893,0],[109.497,0],[109.497,-2.728],[106.893,-2.728]],\"c\":true},\"ix\":2},\"nm\":\".\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":13,\"ty\":\"sh\",\"ix\":14,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[3.241,0],[0,-4.697],[-5.107,0],[-1.313,1.354],[-0.062,0.882],[0,0],[1.333,0],[0,0.882],[-2.359,0],[-0.062,-0.513]],\"o\":[[0,-2.954],[-4.164,0],[0,3.671],[1.354,0],[1.19,-1.231],[0,0],[-0.062,1.969],[-3.097,0],[0,-3.056],[2.154,0],[0,0]],\"v\":[[124.04,-9.989],[118.523,-14.911],[111.734,-7.097],[118.502,0.349],[122.83,-1.313],[124.163,-4.799],[120.82,-4.799],[118.154,-1.99],[115.057,-7.076],[118.4,-12.593],[120.8,-9.989]],\"c\":true},\"ix\":2},\"nm\":\"c\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":14,\"ty\":\"sh\",\"ix\":15,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-3.938],[-1.62,-1.723],[-1.949,0],[-1.641,1.846],[0,2.154],[1.579,1.805],[1.579,0]],\"o\":[[0,1.354],[1.354,1.415],[1.231,0],[1.21,-1.354],[0,-1.456],[-1.456,-1.641],[-5.333,0]],\"v\":[[125.482,-7.199],[127.308,-1.661],[132.558,0.369],[137.829,-1.743],[139.696,-7.548],[137.809,-13.127],[132.599,-15.137]],\"c\":true},\"ix\":2},\"nm\":\"o\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":15,\"ty\":\"sh\",\"ix\":16,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,1.415],[-0.841,1.026],[-1.19,0],[-0.615,-1.825],[0,-0.718],[0.492,-0.738],[1.292,0],[0.451,0.615]],\"o\":[[0,-1.682],[0.595,-0.759],[1.518,0],[0.308,0.902],[0,2.359],[-0.595,0.923],[-1.477,0],[-0.882,-1.149]],\"v\":[[128.805,-7.302],[129.892,-11.609],[132.62,-12.86],[136.004,-10.235],[136.373,-7.589],[135.368,-3.343],[132.599,-1.969],[129.912,-3.159]],\"c\":true},\"ix\":2},\"nm\":\"o\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":16,\"ty\":\"sh\",\"ix\":17,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[141.696,0],[144.67,0],[144.67,-12.716],[148.629,0],[151.254,0],[155.295,-12.716],[155.295,0],[158.453,0],[158.453,-14.829],[153.408,-14.829],[150.024,-4.041],[146.885,-14.829],[141.696,-14.829]],\"c\":true},\"ix\":2},\"nm\":\"m\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false}],\"ip\":1,\"op\":10,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":3,\"nm\":\"02092020\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":0,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[-105,15,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[60,60,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2}},\"ao\":0,\"ef\":[{\"ty\":5,\"nm\":\"02092020002\",\"np\":3,\"mn\":\"ADBE Checkbox Control\",\"ix\":1,\"en\":1,\"ef\":[{\"ty\":7,\"nm\":\"Checkbox\",\"mn\":\"ADBE Checkbox Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":0,\"ix\":1}}]}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":3,\"nm\":\"Color & Stroke Change\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":0,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[250,250,0],\"ix\":2,\"l\":2,\"x\":\"var $bm_rt;\\n$bm_rt = effect('Axis')('Point');\"},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2,\"x\":\"var $bm_rt;\\nvar temp;\\ntemp = effect('Scale')('Slider');\\n$bm_rt = [\\n    temp,\\n    temp\\n];\"}},\"ao\":0,\"ef\":[{\"ty\":5,\"nm\":\"Stroke\",\"np\":3,\"mn\":\"ADBE Slider Control\",\"ix\":1,\"en\":1,\"ef\":[{\"ty\":0,\"nm\":\"Slider\",\"mn\":\"ADBE Slider Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":70,\"ix\":1}}]},{\"ty\":5,\"nm\":\"Axis\",\"np\":3,\"mn\":\"ADBE Point Control\",\"ix\":2,\"en\":1,\"ef\":[{\"ty\":3,\"nm\":\"Point\",\"mn\":\"ADBE Point Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":[250,250],\"ix\":1}}]},{\"ty\":5,\"nm\":\"Scale\",\"np\":3,\"mn\":\"ADBE Slider Control\",\"ix\":3,\"en\":1,\"ef\":[{\"ty\":0,\"nm\":\"Slider\",\"mn\":\"ADBE Slider Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":100,\"ix\":1}}]},{\"ty\":5,\"nm\":\"Primary\",\"np\":3,\"mn\":\"ADBE Color Control\",\"ix\":4,\"en\":1,\"ef\":[{\"ty\":2,\"nm\":\"Color\",\"mn\":\"ADBE Color Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":[0.29411765933,0.882352948189,0.92549020052,1],\"ix\":1}}]},{\"ty\":5,\"nm\":\"Secondary\",\"np\":3,\"mn\":\"ADBE Color Control\",\"ix\":5,\"en\":1,\"ef\":[{\"ty\":2,\"nm\":\"Color\",\"mn\":\"ADBE Color Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":[0.796078443527,0.368627458811,0.933333337307,1],\"ix\":1}}]}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":0,\"nm\":\"mask\",\"parent\":3,\"td\":1,\"refId\":\"comp_0\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[0,0,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[250,250,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2}},\"ao\":0,\"w\":500,\"h\":500,\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"gradient\",\"parent\":3,\"tt\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.4],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":0,\"s\":[-94]},{\"t\":25,\"s\":[266]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[21.941,20.46,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[240,240,100],\"ix\":6,\"l\":2}},\"ao\":0,\"ef\":[{\"ty\":29,\"nm\":\"Gaussian Blur\",\"np\":5,\"mn\":\"ADBE Gaussian Blur 2\",\"ix\":1,\"en\":1,\"ef\":[{\"ty\":0,\"nm\":\"Blurriness\",\"mn\":\"ADBE Gaussian Blur 2-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":175,\"ix\":1}},{\"ty\":7,\"nm\":\"Blur Dimensions\",\"mn\":\"ADBE Gaussian Blur 2-0002\",\"ix\":2,\"v\":{\"a\":0,\"k\":1,\"ix\":2}},{\"ty\":7,\"nm\":\"Repeat Edge Pixels\",\"mn\":\"ADBE Gaussian Blur 2-0003\",\"ix\":3,\"v\":{\"a\":0,\"k\":1,\"ix\":3}}]}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-97.478,0],[0,-97.478],[97.478,0],[30.894,26.574],[0,53.531]],\"o\":[[97.478,0],[0,97.478],[-43.948,0],[-37.631,-32.369],[0,-97.478]],\"v\":[[0,-176.5],[176.5,0],[0,176.5],[-105.29,115.869],[-176.5,0]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.796078443527,0.368627458811,0.933333337307,1],\"ix\":4,\"x\":\"var $bm_rt;\\n$bm_rt = comp('20-love-heart-gradient').layer('Color & Stroke Change').effect('Secondary')('Color');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[113.242,-118.884],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"primary.design\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"cl\":\"design\"},{\"ty\":\"gr\",\"it\":[{\"d\":1,\"ty\":\"el\",\"s\":{\"a\":0,\"k\":[500,500],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"nm\":\"Ellipse Path 1\",\"mn\":\"ADBE Vector Shape - Ellipse\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.29411765933,0.882352948189,0.92549020052,1],\"ix\":4,\"x\":\"var $bm_rt;\\n$bm_rt = comp('20-love-heart-gradient').layer('Color & Stroke Change').effect('Primary')('Color');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"secondary.design\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"cl\":\"design\"}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0}],\"markers\":[]}"));}),
"[project]/src/assets/lordicon/lpddubrl.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"v\":\"5.8.1\",\"fr\":100,\"ip\":0,\"op\":106,\"w\":500,\"h\":500,\"nm\":\"146-basket-trolley-shopping-card-gradient\",\"ddd\":0,\"assets\":[{\"id\":\"comp_0\",\"nm\":\"mask\",\"fr\":100,\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":3,\"nm\":\"NULL\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":0,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[250,250,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[60,60,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[370,370,100],\"ix\":6,\"l\":2}},\"ao\":0,\"ip\":0,\"op\":500,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Shape Layer 2\",\"parent\":3,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.3],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.7],\"y\":[0]},\"t\":10,\"s\":[6]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":29,\"s\":[-6]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":44,\"s\":[-6]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":49,\"s\":[7.789]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":61,\"s\":[-6]},{\"i\":{\"x\":[0.667],\"y\":[0.739]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":71,\"s\":[5.364]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[-0.583]},\"t\":82,\"s\":[-2]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":92,\"s\":[1]},{\"t\":105,\"s\":[0]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[-26.474,18.188,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[-26.474,18.188,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[1.028,-1.275]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-1.61,1.996]],\"v\":[[-30.939,-28.027],[45.5,-28],[46.75,-28],[46.263,-26.319],[35.625,10.375],[-23.625,17.125],[-26.944,18.694]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-47,-38],[-33.25,-38],[-24,17]],\"c\":false},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"rd\",\"nm\":\"Round Corners 1\",\"r\":{\"a\":0,\"k\":10,\"ix\":1},\"ix\":3,\"mn\":\"ADBE Vector Filter - RC\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.070588238537,0.074509806931,0.192156881094,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":3.5,\"ix\":5,\"x\":\"var $bm_rt;\\n$bm_rt = $bm_mul($bm_div(value, 70), comp('146-basket-trolley-shopping-card-gradient').layer('Color & Stroke Change').effect('Stroke')('Slider'));\"},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":500,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Shape Layer 1\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.28],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":10,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.72],\"y\":[0]},\"t\":29,\"s\":[-7]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":49,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":61,\"s\":[3]},{\"t\":71,\"s\":[0]}],\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.28,\"y\":1},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":10,\"s\":[57.276,60.438,0],\"to\":[5.625,0.229,0],\"ti\":[-0.833,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.72,\"y\":0},\"t\":29,\"s\":[63.276,49.438,0],\"to\":[0.833,0,0],\"ti\":[-0.167,-1.708,0]},{\"i\":{\"x\":0.259,\"y\":0.591},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":49,\"s\":[62.276,60.438,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.823,\"y\":0.347},\"t\":61,\"s\":[61.401,55.688,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.565,\"y\":0.87},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":71,\"s\":[59.401,60.438,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.917},\"o\":{\"x\":0.64,\"y\":0.148},\"t\":82,\"s\":[58.151,59.188,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.312,\"y\":0.508},\"t\":92,\"s\":[56.588,60.438,0],\"to\":[0,0,0],\"ti\":[-0.212,-0.288,0]},{\"t\":105,\"s\":[57.276,60.438,0]}],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[-0.224,0.438,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"d\":1,\"ty\":\"el\",\"s\":{\"a\":0,\"k\":[15,15],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"nm\":\"Ellipse Path 1\",\"mn\":\"ADBE Vector Shape - Ellipse\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.070588238537,0.074509806931,0.192156881094,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":3.5,\"ix\":5,\"x\":\"var $bm_rt;\\n$bm_rt = $bm_mul($bm_div(value, 70), comp('146-basket-trolley-shopping-card-gradient').layer('Color & Stroke Change').effect('Stroke')('Slider'));\"},\"lc\":1,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[25,31.5],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Ellipse 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"d\":1,\"ty\":\"el\",\"s\":{\"a\":0,\"k\":[15,15],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"nm\":\"Ellipse Path 1\",\"mn\":\"ADBE Vector Shape - Ellipse\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.070588238537,0.074509806931,0.192156881094,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":3.5,\"ix\":5,\"x\":\"var $bm_rt;\\n$bm_rt = $bm_mul($bm_div(value, 70), comp('146-basket-trolley-shopping-card-gradient').layer('Color & Stroke Change').effect('Stroke')('Slider'));\"},\"lc\":1,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-19.375,31.5],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Ellipse 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[1.028,-1.275],[-5.645,0],[0,0]],\"o\":[[0,0],[-1.61,1.996],[9.25,0],[0,0]],\"v\":[[-23.625,17.125],[-26.944,18.694],[-22.875,24],[24.5,24]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0]],\"o\":[[0,0]],\"v\":[[-24,17]],\"c\":false},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"rd\",\"nm\":\"Round Corners 1\",\"r\":{\"a\":0,\"k\":10,\"ix\":1},\"ix\":3,\"mn\":\"ADBE Vector Filter - RC\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.070588238537,0.074509806931,0.192156881094,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":3.5,\"ix\":5,\"x\":\"var $bm_rt;\\n$bm_rt = $bm_mul($bm_div(value, 70), comp('146-basket-trolley-shopping-card-gradient').layer('Color & Stroke Change').effect('Stroke')('Slider'));\"},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":500,\"st\":0,\"bm\":0}]}],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"watermark\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11,\"x\":\"var $bm_rt;\\nvar checkbox = thisComp.layer('02092020').effect('02092020002')('Checkbox');\\nif (checkbox == 1) {\\n    $bm_rt = 20;\\n} else {\\n    $bm_rt = 0;\\n}\\n;\"},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[249.934,481.369,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[79.934,0.369,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[265.159,265.159,100],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[1.415,0],[11.014,0],[11.014,-2.523],[4.656,-2.523],[4.656,-14.809],[1.415,-14.809]],\"c\":true},\"ix\":2},\"nm\":\"l\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-3.938],[-1.62,-1.723],[-1.949,0],[-1.641,1.846],[0,2.154],[1.579,1.805],[1.579,0]],\"o\":[[0,1.354],[1.354,1.415],[1.231,0],[1.21,-1.354],[0,-1.456],[-1.456,-1.641],[-5.333,0]],\"v\":[[11.167,-7.199],[12.992,-1.661],[18.243,0.369],[23.514,-1.743],[25.381,-7.548],[23.494,-13.127],[18.284,-15.137]],\"c\":true},\"ix\":2},\"nm\":\"o\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,1.415],[-0.841,1.026],[-1.19,0],[-0.615,-1.825],[0,-0.718],[0.492,-0.738],[1.292,0],[0.451,0.615]],\"o\":[[0,-1.682],[0.595,-0.759],[1.518,0],[0.308,0.902],[0,2.359],[-0.595,0.923],[-1.477,0],[-0.882,-1.149]],\"v\":[[14.49,-7.302],[15.577,-11.609],[18.305,-12.86],[21.689,-10.235],[22.058,-7.589],[21.053,-3.343],[18.284,-1.969],[15.597,-3.159]],\"c\":true},\"ix\":2},\"nm\":\"o\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":3,\"ty\":\"sh\",\"ix\":4,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[-0.287,-0.841],[-0.144,-0.82],[0,0],[0.164,0.656],[0.226,1.743],[2.236,0.205],[0,2.769],[0.923,0.8],[1.641,-0.021],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0.533,0],[0.205,0.574],[0,0],[-0.164,-0.246],[-0.103,-0.41],[-0.267,-1.928],[0.718,-0.205],[0,-0.964],[-1.19,-1.026],[0,0],[0,0]],\"v\":[[27.381,0],[30.622,0],[30.622,-5.989],[33.411,-5.989],[35.011,-5.148],[35.811,0],[39.318,0],[38.867,-1.067],[38.416,-3.938],[35.749,-7.343],[38.847,-10.973],[37.554,-13.824],[33.063,-14.829],[27.381,-14.829]],\"c\":true},\"ix\":2},\"nm\":\"r\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":4,\"ty\":\"sh\",\"ix\":5,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-0.492,-0.349],[0,-1.005],[0.226,-0.164],[0.369,0],[0,0]],\"o\":[[0,0],[1.005,0],[0.287,0.185],[0,1.046],[-0.513,0.41],[0,0],[0,0]],\"v\":[[30.519,-12.491],[32.652,-12.491],[34.744,-12.142],[35.524,-10.481],[34.703,-8.758],[33.083,-8.348],[30.519,-8.348]],\"c\":true},\"ix\":2},\"nm\":\"r\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":5,\"ty\":\"sh\",\"ix\":6,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-0.554,0.103],[0,4.553],[1.866,1.374],[0.82,0],[0,0]],\"o\":[[0,0],[1.497,0],[2.81,-0.513],[0,-2.113],[-1.784,-1.313],[0,0],[0,0]],\"v\":[[41.068,0],[45.683,0],[48.349,-0.164],[53.6,-7.609],[51.077,-13.434],[45.97,-14.768],[41.068,-14.788]],\"c\":true},\"ix\":2},\"nm\":\"d\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":6,\"ty\":\"sh\",\"ix\":7,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.656,-0.185],[0,-2.092],[1.251,-1.251],[1.354,0],[0.349,0.021]],\"o\":[[1.825,-0.082],[1.99,0.554],[0,0.718],[-0.923,0.923],[-0.369,0],[0,0]],\"v\":[[44.288,-12.388],[47.611,-12.183],[50.318,-7.609],[48.985,-3.425],[45.539,-2.4],[44.288,-2.441]],\"c\":true},\"ix\":2},\"nm\":\"d\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":7,\"ty\":\"sh\",\"ix\":8,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[55.669,0],[58.849,0],[58.849,-14.87],[55.669,-14.87]],\"c\":true},\"ix\":2},\"nm\":\"i\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":8,\"ty\":\"sh\",\"ix\":9,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[3.241,0],[0,-4.697],[-5.107,0],[-1.313,1.354],[-0.062,0.882],[0,0],[1.333,0],[0,0.882],[-2.359,0],[-0.062,-0.513]],\"o\":[[0,-2.954],[-4.164,0],[0,3.671],[1.354,0],[1.19,-1.231],[0,0],[-0.062,1.969],[-3.097,0],[0,-3.056],[2.154,0],[0,0]],\"v\":[[73.104,-9.989],[67.587,-14.911],[60.798,-7.097],[67.566,0.349],[71.894,-1.313],[73.227,-4.799],[69.884,-4.799],[67.218,-1.99],[64.121,-7.076],[67.464,-12.593],[69.864,-9.989]],\"c\":true},\"ix\":2},\"nm\":\"c\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":9,\"ty\":\"sh\",\"ix\":10,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-3.938],[-1.62,-1.723],[-1.949,0],[-1.641,1.846],[0,2.154],[1.579,1.805],[1.579,0]],\"o\":[[0,1.354],[1.354,1.415],[1.231,0],[1.21,-1.354],[0,-1.456],[-1.456,-1.641],[-5.333,0]],\"v\":[[74.546,-7.199],[76.372,-1.661],[81.622,0.369],[86.894,-1.743],[88.76,-7.548],[86.873,-13.127],[81.663,-15.137]],\"c\":true},\"ix\":2},\"nm\":\"o\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":10,\"ty\":\"sh\",\"ix\":11,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,1.415],[-0.841,1.026],[-1.19,0],[-0.615,-1.825],[0,-0.718],[0.492,-0.738],[1.292,0],[0.451,0.615]],\"o\":[[0,-1.682],[0.595,-0.759],[1.518,0],[0.308,0.902],[0,2.359],[-0.595,0.923],[-1.477,0],[-0.882,-1.149]],\"v\":[[77.869,-7.302],[78.956,-11.609],[81.684,-12.86],[85.068,-10.235],[85.437,-7.589],[84.432,-3.343],[81.663,-1.969],[78.977,-3.159]],\"c\":true},\"ix\":2},\"nm\":\"o\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":11,\"ty\":\"sh\",\"ix\":12,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[91.007,0],[94.001,0],[94.001,-12.306],[99.744,0],[104.113,0],[104.113,-14.829],[101.159,-14.829],[101.159,-3.159],[95.601,-14.829],[91.007,-14.829]],\"c\":true},\"ix\":2},\"nm\":\"n\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":12,\"ty\":\"sh\",\"ix\":13,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[106.893,0],[109.497,0],[109.497,-2.728],[106.893,-2.728]],\"c\":true},\"ix\":2},\"nm\":\".\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":13,\"ty\":\"sh\",\"ix\":14,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[3.241,0],[0,-4.697],[-5.107,0],[-1.313,1.354],[-0.062,0.882],[0,0],[1.333,0],[0,0.882],[-2.359,0],[-0.062,-0.513]],\"o\":[[0,-2.954],[-4.164,0],[0,3.671],[1.354,0],[1.19,-1.231],[0,0],[-0.062,1.969],[-3.097,0],[0,-3.056],[2.154,0],[0,0]],\"v\":[[124.04,-9.989],[118.523,-14.911],[111.734,-7.097],[118.502,0.349],[122.83,-1.313],[124.163,-4.799],[120.82,-4.799],[118.154,-1.99],[115.057,-7.076],[118.4,-12.593],[120.8,-9.989]],\"c\":true},\"ix\":2},\"nm\":\"c\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":14,\"ty\":\"sh\",\"ix\":15,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-3.938],[-1.62,-1.723],[-1.949,0],[-1.641,1.846],[0,2.154],[1.579,1.805],[1.579,0]],\"o\":[[0,1.354],[1.354,1.415],[1.231,0],[1.21,-1.354],[0,-1.456],[-1.456,-1.641],[-5.333,0]],\"v\":[[125.482,-7.199],[127.308,-1.661],[132.558,0.369],[137.829,-1.743],[139.696,-7.548],[137.809,-13.127],[132.599,-15.137]],\"c\":true},\"ix\":2},\"nm\":\"o\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":15,\"ty\":\"sh\",\"ix\":16,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,1.415],[-0.841,1.026],[-1.19,0],[-0.615,-1.825],[0,-0.718],[0.492,-0.738],[1.292,0],[0.451,0.615]],\"o\":[[0,-1.682],[0.595,-0.759],[1.518,0],[0.308,0.902],[0,2.359],[-0.595,0.923],[-1.477,0],[-0.882,-1.149]],\"v\":[[128.805,-7.302],[129.892,-11.609],[132.62,-12.86],[136.004,-10.235],[136.373,-7.589],[135.368,-3.343],[132.599,-1.969],[129.912,-3.159]],\"c\":true},\"ix\":2},\"nm\":\"o\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":16,\"ty\":\"sh\",\"ix\":17,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[141.696,0],[144.67,0],[144.67,-12.716],[148.629,0],[151.254,0],[155.295,-12.716],[155.295,0],[158.453,0],[158.453,-14.829],[153.408,-14.829],[150.024,-4.041],[146.885,-14.829],[141.696,-14.829]],\"c\":true},\"ix\":2},\"nm\":\"m\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false}],\"ip\":4.16666666666667,\"op\":41.6666666666667,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":3,\"nm\":\"02092020\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":0,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[-105,15,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[60,60,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2}},\"ao\":0,\"ef\":[{\"ty\":5,\"nm\":\"02092020002\",\"np\":3,\"mn\":\"ADBE Checkbox Control\",\"ix\":1,\"en\":1,\"ef\":[{\"ty\":7,\"nm\":\"Checkbox\",\"mn\":\"ADBE Checkbox Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":0,\"ix\":1}}]}],\"ip\":0,\"op\":500,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":3,\"nm\":\"Color & Stroke Change\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":0,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[250,250,0],\"ix\":2,\"l\":2,\"x\":\"var $bm_rt;\\n$bm_rt = effect('Axis')('Point');\"},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2,\"x\":\"var $bm_rt;\\nvar temp;\\ntemp = effect('Scale')('Slider');\\n$bm_rt = [\\n    temp,\\n    temp\\n];\"}},\"ao\":0,\"ef\":[{\"ty\":5,\"nm\":\"Stroke\",\"np\":3,\"mn\":\"ADBE Slider Control\",\"ix\":1,\"en\":1,\"ef\":[{\"ty\":0,\"nm\":\"Slider\",\"mn\":\"ADBE Slider Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":70,\"ix\":1}}]},{\"ty\":5,\"nm\":\"Axis\",\"np\":3,\"mn\":\"ADBE Point Control\",\"ix\":2,\"en\":1,\"ef\":[{\"ty\":3,\"nm\":\"Point\",\"mn\":\"ADBE Point Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":[250,250],\"ix\":1}}]},{\"ty\":5,\"nm\":\"Scale\",\"np\":3,\"mn\":\"ADBE Slider Control\",\"ix\":3,\"en\":1,\"ef\":[{\"ty\":0,\"nm\":\"Slider\",\"mn\":\"ADBE Slider Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":100,\"ix\":1}}]},{\"ty\":5,\"nm\":\"Primary\",\"np\":3,\"mn\":\"ADBE Color Control\",\"ix\":4,\"en\":1,\"ef\":[{\"ty\":2,\"nm\":\"Color\",\"mn\":\"ADBE Color Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":[0.29411765933,0.882352948189,0.92549020052,1],\"ix\":1}}]},{\"ty\":5,\"nm\":\"Secondary\",\"np\":3,\"mn\":\"ADBE Color Control\",\"ix\":5,\"en\":1,\"ef\":[{\"ty\":2,\"nm\":\"Color\",\"mn\":\"ADBE Color Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":[0.796078443527,0.368627458811,0.933333337307,1],\"ix\":1}}]}],\"ip\":0,\"op\":500,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":0,\"nm\":\"mask\",\"parent\":3,\"td\":1,\"refId\":\"comp_0\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[0,0,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[250,250,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2}},\"ao\":0,\"w\":500,\"h\":500,\"ip\":0,\"op\":500,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"gradient\",\"parent\":3,\"tt\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.4],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":0,\"s\":[-94]},{\"t\":106,\"s\":[266]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[21.941,20.46,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[240,240,100],\"ix\":6,\"l\":2}},\"ao\":0,\"ef\":[{\"ty\":29,\"nm\":\"Gaussian Blur\",\"np\":5,\"mn\":\"ADBE Gaussian Blur 2\",\"ix\":1,\"en\":1,\"ef\":[{\"ty\":0,\"nm\":\"Blurriness\",\"mn\":\"ADBE Gaussian Blur 2-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":175,\"ix\":1}},{\"ty\":7,\"nm\":\"Blur Dimensions\",\"mn\":\"ADBE Gaussian Blur 2-0002\",\"ix\":2,\"v\":{\"a\":0,\"k\":1,\"ix\":2}},{\"ty\":7,\"nm\":\"Repeat Edge Pixels\",\"mn\":\"ADBE Gaussian Blur 2-0003\",\"ix\":3,\"v\":{\"a\":0,\"k\":1,\"ix\":3}}]}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-97.478,0],[0,-97.478],[97.478,0],[30.894,26.574],[0,53.531]],\"o\":[[97.478,0],[0,97.478],[-43.948,0],[-37.631,-32.369],[0,-97.478]],\"v\":[[0,-176.5],[176.5,0],[0,176.5],[-105.29,115.869],[-176.5,0]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.796078443527,0.368627458811,0.933333337307,1],\"ix\":4,\"x\":\"var $bm_rt;\\n$bm_rt = comp('146-basket-trolley-shopping-card-gradient').layer('Color & Stroke Change').effect('Secondary')('Color');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[113.242,-118.884],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"primary.design\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"cl\":\"design\"},{\"ty\":\"gr\",\"it\":[{\"d\":1,\"ty\":\"el\",\"s\":{\"a\":0,\"k\":[500,500],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"nm\":\"Ellipse Path 1\",\"mn\":\"ADBE Vector Shape - Ellipse\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.29411765933,0.882352948189,0.92549020052,1],\"ix\":4,\"x\":\"var $bm_rt;\\n$bm_rt = comp('146-basket-trolley-shopping-card-gradient').layer('Color & Stroke Change').effect('Primary')('Color');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"secondary.design\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false,\"cl\":\"design\"}],\"ip\":0,\"op\":500,\"st\":0,\"bm\":0}],\"markers\":[{\"tm\":12.5,\"cm\":\"1\",\"dr\":0},{\"tm\":29.16796875,\"cm\":\"2\",\"dr\":0},{\"tm\":45.83203125,\"cm\":\"3\",\"dr\":0},{\"tm\":95.83203125,\"cm\":\"4\",\"dr\":0}]}"));}),
"[project]/src/assets/lordicon/bell-notification.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"v\":\"5.12.1\",\"fr\":60,\"ip\":0,\"op\":291,\"w\":500,\"h\":500,\"nm\":\"system-regular-46-notification-bell\",\"ddd\":0,\"assets\":[{\"id\":\"comp_0\",\"nm\":\"in-bell\",\"fr\":60,\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":3,\"nm\":\"NULL \",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":0,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":13,\"s\":[0]},{\"i\":{\"x\":[0.46],\"y\":[1]},\"o\":{\"x\":[0.706],\"y\":[0]},\"t\":22,\"s\":[17]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":41,\"s\":[-13]},{\"i\":{\"x\":[0.252],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":58.299,\"s\":[10]},{\"t\":74.298828125,\"s\":[0]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[250,84,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[50,50,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2}},\"ao\":0,\"ip\":0,\"op\":300,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\".primary.design\",\"cl\":\"primary design\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"t\":0,\"s\":[100],\"h\":1},{\"t\":27,\"s\":[0],\"h\":1}],\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":21,\"s\":[0]},{\"t\":34,\"s\":[0]}],\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.137,\"y\":1},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":0,\"s\":[50,174,0],\"to\":[0,-11.333,0],\"ti\":[0,-7.833,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":21,\"s\":[50,106,0],\"to\":[0,7.833,0],\"ti\":[0,-8,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":34,\"s\":[50,221,0],\"to\":[0,8,0],\"ti\":[0,4.5,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":50,\"s\":[50,154,0],\"to\":[0,-4.5,0],\"ti\":[0,-3.333,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":64,\"s\":[50,194,0],\"to\":[0,3.333,0],\"ti\":[0,3.333,0]},{\"t\":81,\"s\":[50,174,0]}],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[0,-42,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0,\"y\":1},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":0,\"s\":[{\"i\":[[-2.209,0],[0,-2.209],[0.001,-0.045],[2.164,0],[0.038,0.001],[0.06,2.118],[0,0.039]],\"o\":[[2.209,0],[0,0.045],[-0.071,2.147],[-0.039,0],[-2.118,-0.06],[-0.001,-0.038],[0,-2.209]],\"v\":[[6,5],[10,9],[9.998,9.135],[6,13],[5.885,12.998],[2.002,9.115],[2,9]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0},\"t\":21,\"s\":[{\"i\":[[-60.475,0],[0,-60.475],[0.041,-1.226],[59.24,0],[1.047,0.03],[1.639,57.97],[0,1.054]],\"o\":[[60.475,0],[0,1.236],[-1.947,58.766],[-1.054,0],[-57.97,-1.639],[-0.03,-1.047],[0,-60.475]],\"v\":[[6,-100.5],[115.5,9],[115.439,12.692],[6,118.5],[2.847,118.455],[-103.455,12.152],[-103.5,9]],\"c\":true}]},{\"t\":27,\"s\":[{\"i\":[[-60.475,0],[0,-60.475],[0,-0.008],[0.393,0],[0,0],[0,-0.007],[0,1.003]],\"o\":[[60.475,0],[0,1.176],[-0.012,0.39],[-0.007,0],[0.007,0],[0,0],[0,-60.475]],\"v\":[[6,-100.5],[115.5,9],[115.495,89.048],[114.77,89.75],[-103.486,89.737],[-103.473,89.75],[-103.5,9]],\"c\":true}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.070588235294,0.074509803922,0.192156862745,1],\"ix\":3,\"x\":\"var $bm_rt;\\n$bm_rt = comp('system-regular-46-notification-bell').layer('control').effect('primary')('Color');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":31.3,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\".primary\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false,\"cl\":\"primary\"},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-6,-51],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Ellipse 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":1,\"op\":35,\"st\":0,\"ct\":1,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\".primary.design\",\"cl\":\"primary design\",\"parent\":2,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[-0.002,-182.666,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[249.998,67.334,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.3,\"y\":1},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":27,\"s\":[{\"i\":[[0,0],[0,6.468],[0,0],[60.406,0],[0,0],[0,-60.406],[0,0],[0.004,-5.786],[0,0],[0,0]],\"o\":[[0,-5.786],[0,0],[0,-60.406],[0,0],[-60.406,0],[0,0],[0,6.468],[0,0],[0,0],[0,0]],\"v\":[[109.002,55.671],[109.002,37.038],[109.375,-20.834],[0.001,-130.21],[-0.001,-130.21],[-109.375,-20.834],[-109.375,37.038],[-109.381,55.671],[-109.241,65.71],[109.197,65.71]],\"c\":true}]},{\"t\":47,\"s\":[{\"i\":[[0,0],[0,6.468],[0,0],[60.406,0],[0,0],[0,-60.406],[0,0],[2.893,-5.786],[0,0],[0,0]],\"o\":[[-2.893,-5.786],[0,0],[0,-60.406],[0,0],[-60.406,0],[0,0],[0,6.468],[0,0],[0,0],[0,0]],\"v\":[[113.773,55.671],[109.375,37.038],[109.375,-20.834],[0.001,-130.21],[-0.001,-130.21],[-109.375,-20.834],[-109.375,37.038],[-113.773,55.671],[-151.042,130.21],[151.042,130.21]],\"c\":true}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.070588235294,0.074509803922,0.192156862745,1],\"ix\":3,\"x\":\"var $bm_rt;\\n$bm_rt = comp('system-regular-46-notification-bell').layer('control').effect('primary')('Color');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":31.3,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\".primary\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false,\"cl\":\"primary\"},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[249.998,229.166],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.3,\"y\":1},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":27,\"s\":[{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[0,21.168],[0,20.832]],\"c\":false}]},{\"t\":47,\"s\":[{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[0,-20.832],[0,20.832]],\"c\":false}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.070588235294,0.074509803922,0.192156862745,1],\"ix\":3,\"x\":\"var $bm_rt;\\n$bm_rt = comp('system-regular-46-notification-bell').layer('control').effect('primary')('Color');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":31.3,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\".primary\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false,\"cl\":\"primary\"},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[249.998,78.125],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":27,\"op\":90,\"st\":0,\"ct\":1,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\".primary.design\",\"cl\":\"primary design\",\"parent\":3,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":30,\"s\":[14.177]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":34,\"s\":[15.987]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":39,\"s\":[-27]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":55,\"s\":[26]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":72,\"s\":[-8]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"t\":82,\"s\":[5]},{\"t\":89,\"s\":[0]}],\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":30,\"s\":[249.998,36.041,0],\"to\":[0,11.083,0],\"ti\":[0,-27.577,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":34,\"s\":[249.998,119.93,0],\"to\":[0,32.967,0],\"ti\":[0,-13.25,0]},{\"t\":39,\"s\":[249.998,182.041,0]}],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[0,-219,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-25.889,0],[0,25.889],[0,0]],\"o\":[[0,0],[0,25.889],[25.888,0],[0,0],[0,0]],\"v\":[[-46.751,-119.666],[-46.875,-5.21],[0.001,41.666],[46.875,-5.21],[46.998,-119.666]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.070588235294,0.074509803922,0.192156862745,1],\"ix\":3,\"x\":\"var $bm_rt;\\n$bm_rt = comp('system-regular-46-notification-bell').layer('control').effect('primary')('Color');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":31.3,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\".primary\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false,\"cl\":\"primary\"},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":30,\"s\":[47.538]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":34,\"s\":[38.427]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":39,\"s\":[18.538]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":47,\"s\":[22.538]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":55,\"s\":[30.538]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":63.529,\"s\":[22.538]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":72,\"s\":[21.538]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"t\":82,\"s\":[24.538]},{\"t\":89,\"s\":[23.538]}],\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":30,\"s\":[49.077]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":34,\"s\":[68.521]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":39,\"s\":[69.077]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":47,\"s\":[78.077]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":55,\"s\":[80.077]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":63.529,\"s\":[78.077]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":72,\"s\":[77.077]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"t\":82,\"s\":[80.077]},{\"t\":89,\"s\":[79.077]}],\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":34,\"op\":90,\"st\":0,\"ct\":1,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\".primary.design\",\"cl\":\"primary design\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[250.038,250.002,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[2083,2083,100],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0.43],[0,0],[-2.48,0],[0,-2.48],[0,0],[-0.19,-0.38],[0,0]],\"o\":[[0,0],[0.19,-0.38],[0,0],[0,-2.48],[2.48,0],[0,0],[0,0.42],[0,0],[0,0]],\"v\":[[-6.042,4.5],[-4.792,2.01],[-4.502,0.78],[-4.502,-2],[-0.002,-6.5],[4.498,-2],[4.498,0.78],[4.788,2.01],[6.038,4.5]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0.19],[0,0],[2.96,0.37],[0,0],[0.41,0],[0,-0.41],[0,0],[0,-3.05],[0,0],[0.08,-0.17],[0,0],[-0.13,-0.22],[-0.26,0],[0,0],[-0.14,0.23],[0.12,0.23]],\"o\":[[-0.08,-0.18],[0,0],[0,-3.05],[0,0],[0,-0.41],[-0.41,0],[0,0],[-2.96,0.37],[0,0],[0,0.19],[0,0],[-0.12,0.23],[0.14,0.22],[0,0],[0.26,0],[0.14,-0.22],[0,0]],\"v\":[[6.128,1.34],[5.998,0.78],[5.998,-2],[0.748,-7.95],[0.748,-9.25],[-0.002,-10],[-0.752,-9.25],[-0.752,-7.95],[-6.002,-2],[-6.002,0.78],[-6.132,1.34],[-7.922,4.92],[-7.892,5.65],[-7.252,6],[7.248,6],[7.888,5.64],[7.918,4.91]],\"c\":true},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.070588235294,0.074509803922,0.192156862745,1],\"ix\":4,\"x\":\"var $bm_rt;\\n$bm_rt = comp('system-regular-46-notification-bell').layer('control').effect('primary')('Color');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\".primary\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"cl\":\"primary\"},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":90,\"op\":300,\"st\":0,\"ct\":1,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":4,\"nm\":\".primary.design\",\"cl\":\"primary design\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[250.038,250.002,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[2083,2083,100],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.83,0],[0,0.83],[0,0],[0,0]],\"o\":[[0,0.83],[-0.83,0],[0,0],[0,0],[0,0]],\"v\":[[1.498,7],[-0.002,8.5],[-1.502,7],[-1.501,5.544],[1.499,5.544]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-1.65,0],[0,1.65],[0,0]],\"o\":[[0,0],[0,1.65],[1.65,0],[0,0],[0,0]],\"v\":[[-3.001,5.088],[-3.002,7],[-0.002,10],[2.998,7],[2.999,5.088]],\"c\":true},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.070588235294,0.074509803922,0.192156862745,1],\"ix\":4,\"x\":\"var $bm_rt;\\n$bm_rt = comp('system-regular-46-notification-bell').layer('control').effect('primary')('Color');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\".primary\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"cl\":\"primary\"},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":90,\"op\":300,\"st\":0,\"ct\":1,\"bm\":0}]},{\"id\":\"comp_1\",\"nm\":\"hover-bell\",\"fr\":60,\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\".primary.design\",\"cl\":\"primary design\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.231],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":0,\"s\":[0]},{\"i\":{\"x\":[0.313],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":7.041,\"s\":[5]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":19,\"s\":[-53]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":29,\"s\":[-20]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":39,\"s\":[-62]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":49,\"s\":[-20]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":58,\"s\":[-62]},{\"i\":{\"x\":[0.283],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":69.713,\"s\":[14]},{\"t\":79,\"s\":[0]}],\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.231,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":0,\"s\":[249.998,67.334,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.313,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":7.041,\"s\":[269.998,67.334,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":19,\"s\":[111.998,67.334,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.313,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":29,\"s\":[121.998,67.334,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":39,\"s\":[111.998,67.334,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":49,\"s\":[121.998,67.334,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":58,\"s\":[111.998,67.334,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.283,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":69.713,\"s\":[261.998,67.334,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"t\":79,\"s\":[249.998,67.334,0]}],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[249.998,67.334,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,6.468],[0,0],[60.406,0],[0,0],[0,-60.406],[0,0],[2.893,-5.786],[0,0],[0,0]],\"o\":[[-2.893,-5.786],[0,0],[0,-60.406],[0,0],[-60.406,0],[0,0],[0,6.468],[0,0],[0,0],[0,0]],\"v\":[[113.773,55.671],[109.375,37.038],[109.375,-20.834],[0.001,-130.21],[-0.001,-130.21],[-109.375,-20.834],[-109.375,37.038],[-113.773,55.671],[-151.042,130.21],[151.042,130.21]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.070588235294,0.074509803922,0.192156862745,1],\"ix\":3,\"x\":\"var $bm_rt;\\n$bm_rt = comp('system-regular-46-notification-bell').layer('control').effect('primary')('Color');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":31.3,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\".primary\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false,\"cl\":\"primary\"},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[249.998,229.166],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[0,-20.832],[0,20.832]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.070588235294,0.074509803922,0.192156862745,1],\"ix\":3,\"x\":\"var $bm_rt;\\n$bm_rt = comp('system-regular-46-notification-bell').layer('control').effect('primary')('Color');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":31.3,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\".primary\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false,\"cl\":\"primary\"},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[249.998,78.125],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":1,\"op\":90,\"st\":0,\"ct\":1,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\".primary.design\",\"cl\":\"primary design\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":11,\"s\":[27]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":24,\"s\":[-26]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":32,\"s\":[29]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":42,\"s\":[-28]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":52,\"s\":[29]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":61,\"s\":[-28]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":73,\"s\":[29]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":83,\"s\":[-6]},{\"t\":90,\"s\":[0]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[249.998,182.041,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[0,-219,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-25.889,0],[0,25.889],[0,0]],\"o\":[[0,0],[0,25.889],[25.888,0],[0,0],[0,0]],\"v\":[[-46.751,-119.666],[-46.875,-5.21],[0.001,41.666],[46.875,-5.21],[46.998,-119.666]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.070588235294,0.074509803922,0.192156862745,1],\"ix\":3,\"x\":\"var $bm_rt;\\n$bm_rt = comp('system-regular-46-notification-bell').layer('control').effect('primary')('Color');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":31.3,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\".primary\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false,\"cl\":\"primary\"},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":1,\"s\":[23]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":11,\"s\":[33]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":18,\"s\":[22.538]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":24,\"s\":[21]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":28,\"s\":[22.538]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":32,\"s\":[33]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":37,\"s\":[22.538]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":42,\"s\":[21]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":47,\"s\":[22.538]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":52,\"s\":[33]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":57,\"s\":[22.538]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":61,\"s\":[21]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":67,\"s\":[22.538]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":73,\"s\":[33]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":78,\"s\":[22.538]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":83,\"s\":[21]},{\"t\":90,\"s\":[22.538]}],\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":11,\"s\":[79]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":18,\"s\":[77.077]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":24,\"s\":[68]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":28,\"s\":[77.077]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":32,\"s\":[79]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":37,\"s\":[77.077]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":42,\"s\":[68]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":47,\"s\":[77.077]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":52,\"s\":[79]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":57,\"s\":[77.077]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":61,\"s\":[68]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":67,\"s\":[77.077]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":73,\"s\":[79]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":78,\"s\":[77.077]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":83,\"s\":[75]},{\"t\":90,\"s\":[77.077]}],\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":1,\"op\":90,\"st\":0,\"ct\":1,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\".primary.design\",\"cl\":\"primary design\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[250.038,250.002,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[2083,2083,100],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0.43],[0,0],[-2.48,0],[0,-2.48],[0,0],[-0.19,-0.38],[0,0]],\"o\":[[0,0],[0.19,-0.38],[0,0],[0,-2.48],[2.48,0],[0,0],[0,0.42],[0,0],[0,0]],\"v\":[[-6.042,4.5],[-4.792,2.01],[-4.502,0.78],[-4.502,-2],[-0.002,-6.5],[4.498,-2],[4.498,0.78],[4.788,2.01],[6.038,4.5]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0.19],[0,0],[2.96,0.37],[0,0],[0.41,0],[0,-0.41],[0,0],[0,-3.05],[0,0],[0.08,-0.17],[0,0],[-0.13,-0.22],[-0.26,0],[0,0],[-0.14,0.23],[0.12,0.23]],\"o\":[[-0.08,-0.18],[0,0],[0,-3.05],[0,0],[0,-0.41],[-0.41,0],[0,0],[-2.96,0.37],[0,0],[0,0.19],[0,0],[-0.12,0.23],[0.14,0.22],[0,0],[0.26,0],[0.14,-0.22],[0,0]],\"v\":[[6.128,1.34],[5.998,0.78],[5.998,-2],[0.748,-7.95],[0.748,-9.25],[-0.002,-10],[-0.752,-9.25],[-0.752,-7.95],[-6.002,-2],[-6.002,0.78],[-6.132,1.34],[-7.922,4.92],[-7.892,5.65],[-7.252,6],[7.248,6],[7.888,5.64],[7.918,4.91]],\"c\":true},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.070588235294,0.074509803922,0.192156862745,1],\"ix\":4,\"x\":\"var $bm_rt;\\n$bm_rt = comp('system-regular-46-notification-bell').layer('control').effect('primary')('Color');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\".primary\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"cl\":\"primary\"},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":1,\"st\":0,\"ct\":1,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\".primary.design\",\"cl\":\"primary design\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[250.038,250.002,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[2083,2083,100],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.83,0],[0,0.83],[0,0],[0,0]],\"o\":[[0,0.83],[-0.83,0],[0,0],[0,0],[0,0]],\"v\":[[1.498,7],[-0.002,8.5],[-1.502,7],[-1.501,5.544],[1.499,5.544]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-1.65,0],[0,1.65],[0,0]],\"o\":[[0,0],[0,1.65],[1.65,0],[0,0],[0,0]],\"v\":[[-3.001,5.088],[-3.002,7],[-0.002,10],[2.998,7],[2.999,5.088]],\"c\":true},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.070588235294,0.074509803922,0.192156862745,1],\"ix\":4,\"x\":\"var $bm_rt;\\n$bm_rt = comp('system-regular-46-notification-bell').layer('control').effect('primary')('Color');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\".primary\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"cl\":\"primary\"},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":1,\"st\":0,\"ct\":1,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\".primary.design\",\"cl\":\"primary design\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[250.038,250.002,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[2083,2083,100],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0.43],[0,0],[-2.48,0],[0,-2.48],[0,0],[-0.19,-0.38],[0,0]],\"o\":[[0,0],[0.19,-0.38],[0,0],[0,-2.48],[2.48,0],[0,0],[0,0.42],[0,0],[0,0]],\"v\":[[-6.042,4.5],[-4.792,2.01],[-4.502,0.78],[-4.502,-2],[-0.002,-6.5],[4.498,-2],[4.498,0.78],[4.788,2.01],[6.038,4.5]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0.19],[0,0],[2.96,0.37],[0,0],[0.41,0],[0,-0.41],[0,0],[0,-3.05],[0,0],[0.08,-0.17],[0,0],[-0.13,-0.22],[-0.26,0],[0,0],[-0.14,0.23],[0.12,0.23]],\"o\":[[-0.08,-0.18],[0,0],[0,-3.05],[0,0],[0,-0.41],[-0.41,0],[0,0],[-2.96,0.37],[0,0],[0,0.19],[0,0],[-0.12,0.23],[0.14,0.22],[0,0],[0.26,0],[0.14,-0.22],[0,0]],\"v\":[[6.128,1.34],[5.998,0.78],[5.998,-2],[0.748,-7.95],[0.748,-9.25],[-0.002,-10],[-0.752,-9.25],[-0.752,-7.95],[-6.002,-2],[-6.002,0.78],[-6.132,1.34],[-7.922,4.92],[-7.892,5.65],[-7.252,6],[7.248,6],[7.888,5.64],[7.918,4.91]],\"c\":true},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.070588235294,0.074509803922,0.192156862745,1],\"ix\":4,\"x\":\"var $bm_rt;\\n$bm_rt = comp('system-regular-46-notification-bell').layer('control').effect('primary')('Color');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\".primary\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"cl\":\"primary\"},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":90,\"op\":300,\"st\":0,\"ct\":1,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":4,\"nm\":\".primary.design\",\"cl\":\"primary design\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[250.038,250.002,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[2083,2083,100],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.83,0],[0,0.83],[0,0],[0,0]],\"o\":[[0,0.83],[-0.83,0],[0,0],[0,0],[0,0]],\"v\":[[1.498,7],[-0.002,8.5],[-1.502,7],[-1.501,5.544],[1.499,5.544]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-1.65,0],[0,1.65],[0,0]],\"o\":[[0,0],[0,1.65],[1.65,0],[0,0],[0,0]],\"v\":[[-3.001,5.088],[-3.002,7],[-0.002,10],[2.998,7],[2.999,5.088]],\"c\":true},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.070588235294,0.074509803922,0.192156862745,1],\"ix\":4,\"x\":\"var $bm_rt;\\n$bm_rt = comp('system-regular-46-notification-bell').layer('control').effect('primary')('Color');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\".primary\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false,\"cl\":\"primary\"},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":90,\"op\":300,\"st\":0,\"ct\":1,\"bm\":0}]},{\"id\":\"comp_2\",\"nm\":\"loop-bell\",\"fr\":60,\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\".primary.design\",\"cl\":\"primary design\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":11.25,\"s\":[16]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":33.75,\"s\":[-16]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":56.25,\"s\":[16]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":78.75,\"s\":[-16]},{\"t\":90,\"s\":[0]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[249.998,67.334,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[249.998,67.334,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,6.468],[0,0],[60.406,0],[0,0],[0,-60.406],[0,0],[2.893,-5.786],[0,0],[0,0]],\"o\":[[-2.893,-5.786],[0,0],[0,-60.406],[0,0],[-60.406,0],[0,0],[0,6.468],[0,0],[0,0],[0,0]],\"v\":[[113.773,55.671],[109.375,37.038],[109.375,-20.834],[0.001,-130.21],[-0.001,-130.21],[-109.375,-20.834],[-109.375,37.038],[-113.773,55.671],[-151.042,130.21],[151.042,130.21]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.070588235294,0.074509803922,0.192156862745,1],\"ix\":3,\"x\":\"var $bm_rt;\\n$bm_rt = comp('system-regular-46-notification-bell').layer('control').effect('primary')('Color');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":31.3,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\".primary\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false,\"cl\":\"primary\"},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[249.998,229.166],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[0,-20.832],[0,20.832]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.070588235294,0.074509803922,0.192156862745,1],\"ix\":3,\"x\":\"var $bm_rt;\\n$bm_rt = comp('system-regular-46-notification-bell').layer('control').effect('primary')('Color');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":31.3,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\".primary\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false,\"cl\":\"primary\"},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[249.998,78.125],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":197,\"st\":0,\"ct\":1,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\".primary.design\",\"cl\":\"primary design\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[-2]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":16,\"s\":[29]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":42,\"s\":[-29]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":63,\"s\":[29]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":83,\"s\":[-27.481]},{\"t\":90,\"s\":[-10]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[249.998,182.041,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[0,-219,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-25.889,0],[0,25.889],[0,0]],\"o\":[[0,0],[0,25.889],[25.888,0],[0,0],[0,0]],\"v\":[[-46.751,-119.666],[-46.875,-5.21],[0.001,41.666],[46.875,-5.21],[46.998,-119.666]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.070588235294,0.074509803922,0.192156862745,1],\"ix\":3,\"x\":\"var $bm_rt;\\n$bm_rt = comp('system-regular-46-notification-bell').layer('control').effect('primary')('Color');\"},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":31.3,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\".primary\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false,\"cl\":\"primary\"},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[23]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":16,\"s\":[34]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":29,\"s\":[23]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":42,\"s\":[22]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":52,\"s\":[21]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":63,\"s\":[34]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":73,\"s\":[22]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":83,\"s\":[23]},{\"t\":90,\"s\":[19]}],\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[79]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":16,\"s\":[78]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":29,\"s\":[79]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":42,\"s\":[66]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":52,\"s\":[78]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":63,\"s\":[78]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":73,\"s\":[78]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":83,\"s\":[67]},{\"t\":90,\"s\":[75]}],\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":0,\"op\":197,\"st\":0,\"ct\":1,\"bm\":0}]}],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":3,\"nm\":\"control\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":0,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2}},\"ao\":0,\"ef\":[{\"ty\":5,\"nm\":\"primary\",\"np\":3,\"mn\":\"ADBE Color Control\",\"ix\":1,\"en\":1,\"ef\":[{\"ty\":2,\"nm\":\"Color\",\"mn\":\"ADBE Color Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":[0.070588238537,0.074509806931,0.192156866193,1],\"ix\":1}}]}],\"ip\":0,\"op\":291,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":0,\"nm\":\"in-bell\",\"refId\":\"comp_0\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[250,250,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[250,250,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2}},\"ao\":0,\"w\":500,\"h\":500,\"ip\":0,\"op\":100,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":0,\"nm\":\"hover-bell\",\"refId\":\"comp_1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[250,250,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[250,250,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2}},\"ao\":0,\"w\":500,\"h\":500,\"ip\":100,\"op\":200,\"st\":100,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":0,\"nm\":\"loop-bell\",\"refId\":\"comp_2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[250,250,0],\"ix\":2,\"l\":2},\"a\":{\"a\":0,\"k\":[250,250,0],\"ix\":1,\"l\":2},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6,\"l\":2}},\"ao\":0,\"w\":500,\"h\":500,\"ip\":200,\"op\":300,\"st\":200,\"bm\":0}],\"markers\":[{\"tm\":0,\"cm\":\"in-bell\",\"dr\":90},{\"tm\":100,\"cm\":\"default:hover-bell\",\"dr\":90},{\"tm\":200,\"cm\":\"loop-bell\",\"dr\":90}],\"props\":{}}"));}),
"[project]/src/components/features/header/RightSideNavTop.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ImageError.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$provider$2f$AuthProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/provider/AuthProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$notification$2f$NotificationHoverSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/notification/NotificationHoverSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
"use client";
;
;
;
;
;
;
;
const LordIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/src/components/ui/icons/LordIcon.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: 30,
                height: 30,
                display: 'inline-block'
            }
        }, void 0, false, {
            fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
            lineNumber: 15,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
function RightSideNavTop() {
    // const [user, setUser] = useState<any>(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])(); // Router từ next/navigation có refresh()
    const { hasAuth, setHasAuth, numberOfItemsInWishlist, numberOfStoreInCart, handleLogout, cart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$provider$2f$AuthProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthContext"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rightside-box",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "search-full d-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "input-group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "input-group-text",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LordIcon, {
                                icon: __turbopack_context__.r("[project]/src/assets/lordicon/msoeawqm.json (json)"),
                                primary: "#ffffff",
                                secondary: "#ffffff"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            className: "form-control search-type",
                            placeholder: "Tìm kiếm"
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "input-group-text close-search",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-light fa-x font-light"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "right-side-menu d-none d-md-flex",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "right-side d-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "delivery-login-box",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "delivery-icon",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "search-box",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LordIcon, {
                                        icon: __turbopack_context__.r("[project]/src/assets/lordicon/msoeawqm.json (json)"),
                                        primary: "#ffffff",
                                        secondary: "#ffffff"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                        lineNumber: 46,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "right-side",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/customers/wishlist",
                            className: "btn p-0 position-relative header-wishlist header-icon boxWishlist",
                            "aria-label": "Sản phẩm yêu thích",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LordIcon, {
                                    icon: __turbopack_context__.r("[project]/src/assets/lordicon/ytuosppc.json (json)"),
                                    primary: "#f58233",
                                    secondary: "#f58233"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                hasAuth && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "position-absolute top-0 start-100 translate-middle badge shoppingWishlist",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "numberWishlist",
                                            children: numberOfItemsInWishlist || 0
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                            lineNumber: 55,
                                            columnNumber: 118
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "visually-hidden",
                                            children: "unread messages"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                    lineNumber: 55,
                                    columnNumber: 26
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "right-side",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/customers/cart",
                            className: "btn p-0 position-relative header-wishlist header-icon boxCartCount onhover-dropdown",
                            "aria-label": "Giỏ hàng",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LordIcon, {
                                    icon: __turbopack_context__.r("[project]/src/assets/lordicon/lpddubrl.json (json)"),
                                    primary: "#f58233",
                                    secondary: "#f58233"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                hasAuth && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "position-absolute top-0 start-100 translate-middle badge shoppingCart",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "numberCart",
                                            children: cart?.list.length || 0
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                            lineNumber: 64,
                                            columnNumber: 114
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "visually-hidden",
                                            children: "unread messages"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                    lineNumber: 64,
                                    columnNumber: 26
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "right-side onhover-dropdown boxHeaderNotifi",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/customers/notifications",
                                className: "btn p-0 position-relative header-icon boxNotifications",
                                "aria-label": "Thông báo",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LordIcon, {
                                        icon: __turbopack_context__.r("[project]/src/assets/lordicon/bell-notification.json (json)"),
                                        primary: "#f58233",
                                        secondary: "#f58233"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "position-absolute top-0 start-100 translate-middle badge d-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "numberNotifi",
                                                children: "0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                                lineNumber: 73,
                                                columnNumber: 95
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "visually-hidden",
                                                children: "unread messages"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                                lineNumber: 74,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "onhover-div",
                                style: {
                                    "width": "400px"
                                },
                                children: !hasAuth ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "notLogin d-flex flex-column",
                                    style: {
                                        "minHeight": "300px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-fill d-flex flex-column justify-content-center align-items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    width: 100,
                                                    height: 100,
                                                    src: "/styles/logo.png",
                                                    alt: "",
                                                    className: "h-45 w-45 mb-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "fs-6 fw-500",
                                                    children: "Đăng nhập để xem thông báo"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "d-flex mt-auto w-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "btn btn-sm btn-secondary flex-1 border me-1",
                                                    href: "/customers/register",
                                                    children: "Đăng ký"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "btn btn-sm btn-animation flex-1 ms-1",
                                                    href: "/customers/login",
                                                    children: "Đăng nhập"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                    lineNumber: 78,
                                    columnNumber: 26
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$notification$2f$NotificationHoverSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "right-side onhover-dropdown boxHeaderUser",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "delivery-login-box",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "delivery-icon",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "btn p-0 header-icon notLogin",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LordIcon, {
                                                icon: __turbopack_context__.r("[project]/src/assets/lordicon/ljvjsnvh.json (json)"),
                                                primary: "#f58233",
                                                secondary: "#f58233"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                                lineNumber: 99,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "header-icon hasLogin d-none p-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                width: 100,
                                                height: 100,
                                                className: "object-fit-cover h-100 w-100 rounded-circle",
                                                src: "/styles/avatar.jpg",
                                                alt: "Tài khoản"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                                lineNumber: 103,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "onhover-div onhover-div-login",
                                style: {
                                    "width": "205px"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "user-box-name",
                                    children: [
                                        !hasAuth && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "mb-1 notLogin",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/customers/login",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "me-1 mb-1 fa-regular fa-right-to-bracket",
                                                                style: {
                                                                    "width": "16px",
                                                                    "height": "16px"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                                                lineNumber: 112,
                                                                columnNumber: 51
                                                            }, this),
                                                            "Đăng nhập"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "mb-1 notLogin",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/customers/register",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "me-1 mb-1 fa-regular fa-user",
                                                                style: {
                                                                    "width": "16px",
                                                                    "height": "16px"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                                                lineNumber: 115,
                                                                columnNumber: 54
                                                            }, this),
                                                            "Đăng ký"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "mb-1 notLogin",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/customers/forgotPassword",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "me-1 mb-1 fa-regular fa-lock",
                                                                style: {
                                                                    "width": "16px",
                                                                    "height": "16px"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                                                lineNumber: 118,
                                                                columnNumber: 60
                                                            }, this),
                                                            "Quên mật khẩu"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "mb-1 notLogin",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "/storeAccount/login",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "me-1 mb-1 fa-regular fa-store-alt",
                                                                style: {
                                                                    "width": "16px",
                                                                    "height": "16px"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                                                lineNumber: 122,
                                                                columnNumber: 51
                                                            }, this),
                                                            "Kênh bán hàng"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true),
                                        hasAuth && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "mb-1 hasLogin",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/customers/profile",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "me-1 mb-1 fa-regular fa-user",
                                                                style: {
                                                                    "width": "16px",
                                                                    "height": "16px"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                                                lineNumber: 128,
                                                                columnNumber: 53
                                                            }, this),
                                                            "Thông tin tài khoản"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "mb-1 hasLogin",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/customers/orders",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "me-1 mb-1 fa-regular fa-bag-shopping",
                                                                style: {
                                                                    "width": "16px",
                                                                    "height": "16px"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                                                lineNumber: 131,
                                                                columnNumber: 52
                                                            }, this),
                                                            "Đơn hàng của tôi"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "mb-1 hasLogin",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/customers/vouchers",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "me-1 mb-1 fa-regular fa-badge-percent",
                                                                style: {
                                                                    "width": "16px",
                                                                    "height": "16px"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                                                lineNumber: 134,
                                                                columnNumber: 54
                                                            }, this),
                                                            "Mã giảm giá"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "mb-1 hasLogin",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/customers/customerAddress",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "me-1 mb-1 fa-regular fa-map-pin",
                                                                style: {
                                                                    "width": "16px",
                                                                    "height": "16px"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                                                lineNumber: 138,
                                                                columnNumber: 61
                                                            }, this),
                                                            "Địa chỉ giao hàng"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "hasLogin cursor-pointer",
                                                    onClick: handleLogout,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "me-1 mb-1 fa-regular fa-right-from-bracket",
                                                                style: {
                                                                    "width": "16px",
                                                                    "height": "16px"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                                                lineNumber: 141,
                                                                columnNumber: 24
                                                            }, this),
                                                            "Đăng xuất"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/header/RightSideNavTop.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = RightSideNavTop;
}),
"[project]/src/components/ui/icons/LordIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lordicon$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@lordicon/react/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lordicon$2f$react$2f$dist$2f$player$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@lordicon/react/dist/player.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function LordIcon({ icon, primary, secondary, tertiary, size = 30 }) {
    // const ICON = require(link)
    const iconRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const iconElement = iconRef.current;
        const containerElement = containerRef.current;
        if (iconElement && containerElement) {
            const handleMouseEnter = ()=>{
                iconElement.playFromBeginning();
            };
            const handleMouseLeave = ()=>{
                iconElement.goToLastFrame();
            };
            containerElement.addEventListener("mouseenter", handleMouseEnter);
            containerElement.addEventListener("mouseleave", handleMouseLeave);
            return ()=>{
                containerElement.removeEventListener("mouseenter", handleMouseEnter);
                containerElement.removeEventListener("mouseleave", handleMouseLeave);
            };
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lordicon$2f$react$2f$dist$2f$player$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Player"], {
            icon: icon,
            ref: iconRef,
            colors: `outline:#121331,primary:${primary},secondary:${secondary}, tertiary:${tertiary}`,
            size: size
        }, void 0, false, {
            fileName: "[project]/src/components/ui/icons/LordIcon.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/icons/LordIcon.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = LordIcon;
}),
"[project]/src/components/features/header/HeaderSearchMain.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icons$2f$LordIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/icons/LordIcon.tsx [app-ssr] (ecmascript)");
;
;
function HeaderSearchMain() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        action: "/search",
        className: "search-box flex-fill me-xl-4 me-3",
        method: "GET",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "input-group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "search",
                    className: "form-control",
                    placeholder: "Nhập tên sản phẩm...",
                    name: "s"
                }, void 0, false, {
                    fileName: "[project]/src/components/features/header/HeaderSearchMain.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "btn",
                    type: "submit",
                    "aria-label": "Tìm kiếm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icons$2f$LordIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        size: 30,
                        icon: __turbopack_context__.r("[project]/src/assets/lordicon/msoeawqm.json (json)"),
                        primary: "#ffffff",
                        secondary: "#ffffff"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/header/HeaderSearchMain.tsx",
                        lineNumber: 11,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/features/header/HeaderSearchMain.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/header/HeaderSearchMain.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/features/header/HeaderSearchMain.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = HeaderSearchMain;
}),
"[project]/src/components/features/header/NavTop.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ImageError.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$header$2f$HeaderStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/header/HeaderStore.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$header$2f$RightSideNavTop$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/header/RightSideNavTop.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$header$2f$HeaderNavLeft$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/header/HeaderNavLeft.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$provider$2f$ConfigProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/provider/ConfigProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$header$2f$HeaderSearchMain$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/header/HeaderSearchMain.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/config.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function NavTop() {
    const { config } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$provider$2f$ConfigProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConfig"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "top-nav top-header sticky-header d-none d-md-block py-0",
        style: {
            zIndex: 1001
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-fluid-lg py-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "row",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "navbar-top",
                        style: {
                            zIndex: 1001
                        },
                        children: [
                            config?.logo || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fixedSiteConfig"]?.logo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/",
                                className: "web-logo nav-logo d-md-block d-none me-xl-4 me-3",
                                children: (config?.logo || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fixedSiteConfig"]?.logo) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImageError$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    width: 400,
                                    height: 400,
                                    src: config?.logo || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fixedSiteConfig"]?.logo,
                                    className: "img-fluid lazyload",
                                    alt: config?.name_1 || "Honey net"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/header/NavTop.tsx",
                                    lineNumber: 26,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/header/NavTop.tsx",
                                lineNumber: 24,
                                columnNumber: 59
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "middle-box flex-fill",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "header-nav me-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$header$2f$HeaderNavLeft$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/src/components/features/header/NavTop.tsx",
                                            lineNumber: 32,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/header/NavTop.tsx",
                                        lineNumber: 31,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$header$2f$HeaderStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/src/components/features/header/NavTop.tsx",
                                        lineNumber: 35,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$header$2f$HeaderSearchMain$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/src/components/features/header/NavTop.tsx",
                                        lineNumber: 37,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/header/NavTop.tsx",
                                lineNumber: 30,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$header$2f$RightSideNavTop$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/components/features/header/NavTop.tsx",
                                lineNumber: 39,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/header/NavTop.tsx",
                        lineNumber: 20,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/features/header/NavTop.tsx",
                    lineNumber: 19,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/features/header/NavTop.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/features/header/NavTop.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/features/header/NavTop.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = NavTop;
}),
"[project]/src/components/features/header/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$header$2f$HeaderTop$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/header/HeaderTop.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$header$2f$NavTop$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/header/NavTop.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Header() {
    const [isActive, setIsActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const headerTopRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        const handleScroll = ()=>{
            if (headerTopRef.current) {
                const headerTopHeight = headerTopRef.current.offsetHeight;
                setIsActive(window.scrollY > headerTopHeight);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `pb-0 ${isActive ? 'active' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$header$2f$HeaderTop$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                ref: headerTopRef
            }, void 0, false, {
                fileName: "[project]/src/components/features/header/Header.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$header$2f$NavTop$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/features/header/Header.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/header/Header.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Header;
}),
];

//# sourceMappingURL=src_e3f8615a._.js.map