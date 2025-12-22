showSweetAlertWarning(
    "Thông báo",
    "Website đang hoạt động thử nghiệm và đang trong quá trình đăng ký Bộ Công Thương"
);
if ($(".tokenCSRF").length) {
    callAjax("/ajaxGetCSRF", null, "GET").then((res) => {
        if (typeof res.token != "undefined") {
            $(".tokenCSRF").val(res.token);
        }
    });
}
const dateTimeVn = (dtime) => {
    return dtime
        ? moment(dtime, "YYYY-MM-DD HH:mm:ss").format("HH:mm DD/MM/YYYY")
        : "";
};
const getCustomerId = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: "https://ca-ctm.systems.com.vn/ajaxGetCustomerId",
            data: null,
            dataType: "json",
            success: function (res) {
                if (res.status == 200) {
                    sessionStorage.setItem(
                        "customerId",
                        res?.data?.customerId
                            ? parseInt(res.data.customerId)
                            : 0
                    );
                    sessionStorage.setItem("hasAuth", true);
                }
                resolve(res);
            },
            error: function (err) {
                console.log("Day ne");

                // reject(err);
            },
        });
    });
};
const hasCustomer = async (popup = false) => {
    let customerId = parseInt(sessionStorage.getItem("customerId"));
    if (!customerId && !sessionStorage.getItem("hasAuth")) {
        let res = await getCustomerId();
        customerId = res?.data?.customerId
            ? parseInt(res?.data?.customerId)
            : 0;
    }
    if (!customerId && popup) {
        // window.location.href="/customers/login";
        $("#modalLogin")
            .modal({
                backdrop: "static",
                keyboard: false,
            })
            .modal("show");
        return false;
    }
    return customerId;
};
const getProduct = (_this) => {
    let productBox = $(_this).parents(".productBox");
    let img = productBox.find(".product-image img").attr("strc");
    let name = productBox.find(".product-detail .name").text();
    let des = productBox.find(".product-detail .product_des").text();
    let priceHtml = productBox.find(".box-price").html();
    let price = productBox.find(".box-price .price").text();
    let link = productBox.find(".product-detail a").attr("href");
    let pId = productBox.attr("data-id");
    let ppId = productBox.attr("data-price");
    let seller = productBox.attr("data-seller");
    return {
        img: img,
        name: name,
        des: des,
        priceHtml: priceHtml,
        price: price,
        link: link,
        pId: pId,
        ppId: ppId,
        seller: seller,
    };
};
const plusCart = () => {
    let numberCart = $(".numberCart").text();
    numberCart = numberCart ? parseInt(numberCart) : 0;
    $(".shoppingCart").removeClass("d-none");
    $(".numberCart").text(numberCart + 1);
};
const minusCart = () => {
    let numberCart = $(".numberCart").text();
    numberCart = numberCart ? parseInt(numberCart) : 0;
    if (numberCart - 1 > 0) {
        $(".shoppingCart").removeClass("d-none");
        $(".numberCart").text(numberCart - 1);
    } else {
        $(".shoppingCart").addClass("d-none");
        $(".numberCart").text(0);
    }
};
const changeQtyInput = (productPriceId, number) => {
    if (number) {
        $(`.productBox[data-price="${productPriceId}"] .cart_qty`).addClass(
            "open"
        );
    } else {
        $(`.productBox[data-price="${productPriceId}"] .cart_qty`).removeClass(
            "open"
        );
    }
    $(`.productBox[data-price="${productPriceId}"] .qty-input`).val(number);
};
const loadCheckbox = () => {
    if (!$(".cartTable input.cartCheck:not(:checked)").length) {
        $(".cartCheckAll").prop("checked", true);
        $(".storeCheckbox").prop("checked", true);
    } else {
        $(".cartCheckAll").prop("checked", false);
        $(".storeCheckbox")
            .parents(".cartTable")
            .each(function (index, table) {
                $(table)
                    .find(".storeCheckbox")
                    .prop(
                        "checked",
                        $(table).find(".productBox").length ==
                            $(table).find(".cartCheck:checked").length
                    );
            });
    }
};
const filterVoucher = (voucher, subtotal) => {
    let discount = parseFloat(getObjValue(voucher, "discount", 0));
    let costLimit = parseFloat(getObjValue(voucher, "cost_limit", 0));
    let image = getObjValue(voucher, "image");
    let discountType = getObjValue(voucher, "discount_type");
    if (discountType == "P") {
        voucher.name =
            "Giảm " +
            discount +
            "% tối đa " +
            currency(costLimit, { precision: 0, symbol: "" }).format() +
            "đ";
        voucher.discountValue = (subtotal * discount) / 100;
        voucher.discountValue =
            voucher.discountValue > costLimit
                ? costLimit
                : voucher.discountValue;
    } else {
        voucher.name =
            "Giảm " +
            currency(discount, { precision: 0, symbol: "" }).format() +
            "đ";
        voucher.discountValue = discount;
    }
    voucher.id = getObjValue(voucher, "id");
    voucher.voucher_used = parseInt(getObjValue(voucher, "voucher_used"));
    voucher.image = image ? "/static/".image : "/styles/default.jpg";
    return voucher;
};
const reloadCartTotalBox = (box = ".cartTotalBox") => {
    // let shipping = $(`.shippingValue`).text();
    // shipping = shipping ? parseFloat(shipping.replace(/,|đ/g, "")) : 0;
    let shipping = 0;
    let cbserviceIds = $(".cbserviceId:checked");
    cbserviceIds.each(function () {
        let val = $(this).attr("data-value");
        shipping += val ? parseFloat(val) : 0;
    });
    return new Promise((resolve, reject) => {
        if ($(box).length) {
            $.ajax({
                type: "GET",
                url: "/ajaxCartTotalBox",
                data: { shipping },
                dataType: "html",
                success: function (html) {
                    $(box).html(html);
                    resolve();
                },
            });
        }
    });
};
const reloadCartStoreVoucherBox = (storeId, box = ".blockStoreVoucherBox") => {
    return new Promise((resolve, reject) => {
        if ($(box).length) {
            $.ajax({
                type: "GET",
                url: "/ajaxCartStoreVoucherBox/" + storeId,
                data: {},
                dataType: "html",
                success: function (html) {
                    $(box).html(html);
                    resolve();
                },
            });
        }
    });
};
const reloadModalStoreVoucherBox = (storeId, box = ".storeVoucherModalBox") => {
    let createVoucherItem = (voucher, voucherId) => {
        return `<div class="border rounded p-0 mb-3 voucherItem ${
            voucher.verified ? "" : "disabled"
        } ${voucher.id == voucherId ? "isUsed" : ""}" data-id="${
            voucher.id
        }" data-store="${storeId}">
                    <div class="d-flex align-items-center p-2">
                        <div class="w-55 h-55 d-flex me-2 bg-white rounded">
                            <img class="object-fit-contain w-55 h-55 rounded" src="${
                                voucher.image
                            }" alt="${voucher.name}">
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-2">${voucher.name}</h6>
                            <h6>HSD: ${moment(voucher.end_date).format(
                                "DD/MM/YYYY"
                            )}</h6>
                        </div>
                    </div>
                </div>`;
    };
    return new Promise((resolve, reject) => {
        if ($(box).length) {
            jqSpinnerLoader($(box));
            callAjax(`/ajaxStoreVoucherMaybeApply/${storeId}`, {}, "GET").then(
                (res) => {
                    let data = res.data;
                    let lists = data?.list;
                    $(box).html("");
                    if (lists?.length) {
                        let voucherId = data?.voucher_id;
                        lists = lists.sort((a, b) => {
                            return a.discount_value > b.discount_value ? 1 : -1;
                        });
                        lists = lists.sort((a, b) => {
                            return a.verified ? -1 : 1;
                        });
                        lists.forEach((voucher) => {
                            $(box).append(
                                createVoucherItem(voucher, voucherId)
                            );
                        });
                    } else {
                        $(box).html(
                            `<div class="mb-0"><i>Chưa có mã giảm giá phù hợp</i></div>`
                        );
                    }
                    resolve(res);
                }
            );
        }
    });
};
const reloadCartVoucherBox = (box = ".blockVoucherBox") => {
    return new Promise((resolve, reject) => {
        if ($(box).length) {
            $.ajax({
                type: "GET",
                url: "/ajaxCartVoucherBox",
                data: {},
                dataType: "html",
                success: function (html) {
                    $(box).html(html);
                    resolve();
                },
            });
        }
    });
};
const reloadAhaServiceBox = (box = ".ahaServiceBox") => {
    return new Promise((resolve, reject) => {
        $(box).each(function (ind) {
            let $this = $(this);
            let storeId = $this.attr("data-store");
            if (parseInt(storeId)) {
                jqSpinnerLoader($this);
                boxSpinnerLoader(".cartTotalBox");
                $.ajax({
                    type: "GET",
                    url: "/ajaxAhaServiceBox/" + storeId,
                    data: {},
                    dataType: "html",
                    success: function (html) {
                        let $html = $(html);
                        let shipping = 0;
                        let cbserviceIds = $html.find(".cbserviceId:checked");
                        cbserviceIds.each(function () {
                            let val = $(this).attr("data-value");
                            shipping += val ? parseFloat(val) : 0;
                        });
                        $this.html(html);
                        if (ind == $(box).length - 1) {
                            let totalPrice = parseFloat($(".totalPrice").val());
                            $(".shippingPrice").text(
                                formatter.format(shipping)
                            );
                            if (totalPrice) {
                                $(".totalPrice").val(totalPrice + shipping);
                                $(".totalTextPrice").text(
                                    formatter.format(totalPrice + shipping)
                                );
                            }
                            $(".totalPrice").text(formatter.format(shipping));
                        }
                        resolve();
                        jqSpinnerLoader($this, false);
                        boxSpinnerLoader(".cartTotalBox", false);
                    },
                });
            }
        });
    });
};
const reloadModalVoucherBox = (box = ".voucherModalBox") => {
    let createVoucherItem = (voucher, voucherId) => {
        return `<div class="border rounded p-0 mb-3 voucherItem ${
            voucher.verified ? "" : "disabled"
        } ${voucher.id == voucherId ? "isUsed" : ""}" data-id="${voucher.id}">
                    <div class="d-flex align-items-center p-2">
                        <div class="w-55 h-55 d-flex me-2 bg-white rounded">
                            <img class="object-fit-contain w-55 h-55 rounded" src="${
                                voucher.image
                            }" alt="${voucher.name}">
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-2">${voucher.name}</h6>
                            <h6>HSD: ${moment(voucher.end_date).format(
                                "DD/MM/YYYY"
                            )}</h6>
                        </div>
                    </div>
                </div>`;
    };
    return new Promise((resolve, reject) => {
        if ($(box).length) {
            jqSpinnerLoader($(box));
            callAjax(`/ajaxVoucherMaybeApply`, {}, "GET").then((res) => {
                let data = res.data;
                let lists = data?.list;
                $(box).html("");
                if (lists?.length) {
                    let voucherId = data?.voucher_id;
                    lists = lists.sort((a, b) => {
                        return a.discount_value > b.discount_value ? 1 : -1;
                    });
                    lists = lists.sort((a, b) => {
                        return a.verified ? -1 : 1;
                    });
                    lists.forEach((voucher) => {
                        $(box).append(createVoucherItem(voucher, voucherId));
                    });
                } else {
                    $(box).html(
                        `<div class="mb-0"><i>Chưa có mã giảm giá phù hợp</i></div>`
                    );
                }
                resolve(res);
            });
        }
    });
};
const ajaxCartEditProduct = (
    productId,
    productPriceId,
    quantity,
    seller = ""
) => {
    return new Promise((resolve, reject) => {
        callAjax(
            `/ajaxCartEditProduct`,
            { productId, productPriceId, quantity, seller },
            "POST"
        ).then((response) => {
            resolve(response);
        });
    });
};
const ajaxCartToggleProduct = (cartItemIds, isOrder) => {
    return new Promise((resolve, reject) => {
        callAjax(
            `/ajaxCartToggleProduct`,
            { cartItemIds, isOrder },
            "POST"
        ).then((response) => {
            resolve(response);
        });
    });
};
const ajaxCartRemoveProduct = (productPriceIds) => {
    return new Promise((resolve, reject) => {
        callAjax(`/ajaxCartRemoveProduct`, { productPriceIds }, "POST").then(
            (response) => {
                resolve(response);
            }
        );
    });
};
const ajaxToggleWishlist = (productId) => {
    return new Promise((resolve, reject) => {
        callAjax(`/ajaxToggleWishlist/${productId}`, {}, "GET").then(
            (response) => {
                resolve(response);
            }
        );
    });
};
const fixButtonHeights = () => {
    if (window.matchMedia("(min-width: 320px)").matches) {
        var heights = new Array();
        $(".product-section .product-box .product-detail h6.name").each(
            function () {
                $(this).css("min-height", "0");
                $(this).css("max-height", "none");
                $(this).css("height", "auto");
                heights.push($(this).height());
            }
        );
        var max = Math.max.apply(Math, heights);
        $(".product-section .product-box .product-detail h6.name").each(
            function () {
                $(this).css("height", max + "px");
            }
        );
    }
};
const fixBankHeights = () => {
    if (window.matchMedia("(min-width: 320px)").matches) {
        var heights = new Array();
        $(".bank-header .bank-name h2").each(function () {
            $(this).css("min-height", "0");
            $(this).css("max-height", "none");
            $(this).css("height", "auto");
            heights.push($(this).height());
        });
        var max = Math.max.apply(Math, heights);
        $(".bank-header .bank-name h2").each(function () {
            $(this).css("height", max + "px");
        });
    }
};
const getCountWishlist = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: "/ajaxCountWishlist",
            data: null,
            dataType: "json",
            success: function (res) {
                resolve(res);
            },
            error: function (err) {
                reject(err);
            },
        });
    });
};
const getCartCountProduct = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: "/ajaxCartCountProduct",
            data: null,
            dataType: "json",
            success: function (res) {
                resolve(res);
            },
            error: function (err) {
                reject(err);
            },
        });
    });
};
const getCustomerProduct = (productId) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: "/ajaxGetCustomerProduct/" + productId,
            data: null,
            dataType: "json",
            success: function (res) {
                resolve(res);
            },
            error: function (err) {
                reject(err);
            },
        });
    });
};
const getPublicProduct = (productId) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: "/ajaxGetPublicProduct/" + productId,
            data: null,
            dataType: "json",
            success: function (res) {
                resolve(res);
            },
            error: function (err) {
                reject(err);
            },
        });
    });
};
const createNotify = (notifi) => {
    return notifi
        ? `<a href="${notifi.link}" class="d-flex align-items-center mb-3">
                <img src="${
                    notifi.image
                }" class="w-45 h-45 me-2 rounded-circle object-fit-cover" alt="${
              notifi.name
          }">
                <div class="d-flex flex-column flex-fill">
                    <span class="fw-400 text-theme text-1-line">${
                        notifi.excerpt
                    }</span>
                    <span class="fw-400 text-body">${dateTimeVn(
                        notifi.nofi_date
                    )}</span>
                </div>
            </a>`
        : "";
};
const notifiGetList = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: "/ajaxNotifiGetList",
            data: null,
            dataType: "json",
            success: function (res) {
                resolve(res);
            },
            error: function (err) {
                reject(err);
            },
        });
    });
};
const reloadPublicProductBox = () => {
    $(".productReload").each((ind, item) => {
        let $item = $(item);
        let productId = $item.attr("data-id");
        if (productId) {
            $item.addClass("spinner-sm");
            jqSpinnerLoader($item);
            getPublicProduct(productId).then((res) => {
                if (res.status == 200) {
                    let data = res.data;
                    if (data) {
                        $item.attr("data-price", data.pPrice.id);
                        if (data.review_total) {
                            $item.find(".boxReview").removeClass("d-none");
                            $item
                                .find(".boxReview .reviewNumber")
                                .text(data.review_total);
                        }
                        if (data.sold) {
                            $item.find(".boxSold").removeClass("d-none");
                            $item.find(".boxSold .soldNumber").text(data.sold);
                        }
                        $item.find(".box-price").html(data.htmlPrice);
                        if (data.review_point) {
                            $item
                                .find(".product-rating .rating > li > i")
                                .each((ili, li) => {
                                    if (ili < data.review_point) {
                                        $(li)
                                            .addClass("fa-solid")
                                            .removeClass("fa-regular");
                                    }
                                });
                        }
                        if (data?.saleOf?.flash_type) {
                            $item
                                .find(".flash_sale")
                                .removeClass("d-none")
                                .addClass("d-flex");
                        }
                        if (data?.saleOf?.percent) {
                            $item
                                .find(".discount_box")
                                .removeClass("d-none")
                                .addClass("d-flex")
                                .find("label")
                                .text(data.saleOf.percent);
                        }
                        if (
                            data?.saleOf?.remaining_quantity &&
                            data.saleOf.remaining_quantity != -1
                        ) {
                            $item
                                .find(".input-number.qty-input")
                                .attr(
                                    "data-max",
                                    data?.saleOf?.remaining_quantity
                                );
                            let usedQty = data.saleOf.used_quantity;
                            let qty = data.saleOf.quantity;
                            let percent = qty
                                ? (usedQty / qty) * 100 + "%"
                                : "50%";
                            $item
                                .find(".flash-sale .progress-bar")
                                .css("width", percent);
                        }
                        jqSpinnerLoader($item, false);
                        $item.removeClass("productReload");
                    }
                }
                productBoxSlider($item.parents(".product-box-slider"));
                productCategorySlider($item.parents(".product-category-1"));
            });
        }
    });
    // return new Promise((resolve, reject) => {
    //     $.ajax({
    //         type: "GET",
    //         url: "/ajaxCartCountProduct",
    //         data: null,
    //         dataType: "json",
    //         success: function (res) {
    //             if(res.status == 200){
    //                 $('')
    //             }
    //             resolve(res);
    //         },
    //         error: function(err){
    //             reject(err)
    //         }
    //     });
    // });
};
const reloadCustomerProductBox = () => {
    $(".productReload").each((ind, item) => {
        let $item = $(item);
        let productId = $item.attr("data-id");
        if (productId) {
            $item.addClass("spinner-sm");
            jqSpinnerLoader($item);
            getCustomerProduct(productId).then((res) => {
                if (res.status == 200) {
                    let data = res.data;
                    if (data) {
                        $item.attr("data-price", data.pPrice.id);
                        if (data.review_total) {
                            $item.find(".boxReview").removeClass("d-none");
                            $item
                                .find(".boxReview .reviewNumber")
                                .text(data.review_total);
                        }
                        if (data.sold) {
                            $item.find(".boxSold").removeClass("d-none");
                            $item.find(".boxSold .soldNumber").text(data.sold);
                        }
                        $item.find(".box-price").html(data.htmlPrice);
                        if (data.review_point) {
                            $item
                                .find(".product-rating .rating > li > i")
                                .each((ili, li) => {
                                    if (ili < data.review_point) {
                                        $(li)
                                            .addClass("fa-solid")
                                            .removeClass("fa-regular");
                                    }
                                });
                        }
                        if (data?.cartQuatity) {
                            $item.find(".cart_qty.qty-box").addClass("open");
                            $item
                                .find(
                                    ".cart_qty.qty-box .input-number.qty-input"
                                )
                                .val(data?.cartQuatity);
                        }
                        if (data?.isWishlit) {
                            $item
                                .find(".boxLabel .btnWishlist")
                                .removeClass("btnWishlist");
                            $item
                                .find(".boxLabel .notifi-wishlist i")
                                .addClass("fa-sharp fa-solid");
                            $item
                                .find(".boxLabel .notifi-wishlist i")
                                .removeClass("fa-light");
                        }
                        if (data?.saleOf?.flash_type) {
                            $item
                                .find(".flash_sale")
                                .removeClass("d-none")
                                .addClass("d-flex");
                        }
                        if (data?.saleOf?.percent) {
                            $item
                                .find(".discount_box")
                                .removeClass("d-none")
                                .addClass("d-flex")
                                .find("label")
                                .text(data.saleOf.percent);
                        }
                        if (
                            data?.saleOf?.remaining_quantity &&
                            data.saleOf.remaining_quantity != -1
                        ) {
                            $item
                                .find(".input-number.qty-input")
                                .attr(
                                    "data-max",
                                    data?.saleOf?.remaining_quantity
                                );
                            let usedQty = data.saleOf.used_quantity;
                            let qty = data.saleOf.quantity;
                            let percent = qty
                                ? (usedQty / qty) * 100 + "%"
                                : "50%";
                            $item
                                .find(".flash-sale .progress-bar")
                                .css("width", percent);
                        }
                        jqSpinnerLoader($item, false);
                        $item.removeClass("productReload");
                    }
                }
                productBoxSlider($item.parents(".product-box-slider"));
                productCategorySlider($item.parents(".product-category-1"));
            });
        }
    });
    // return new Promise((resolve, reject) => {
    //     $.ajax({
    //         type: "GET",
    //         url: "/ajaxCartCountProduct",
    //         data: null,
    //         dataType: "json",
    //         success: function (res) {
    //             if(res.status == 200){
    //                 $('')
    //             }
    //             resolve(res);
    //         },
    //         error: function(err){
    //             reject(err)
    //         }
    //     });
    // });
};
const ajaxCartPaymentMethod = (methodId) => {
    return new Promise((resolve, reject) => {
        callAjax(`/ajaxCartPaymentMethod`, { methodId }, "POST").then(
            (response) => {
                resolve(response);
            }
        );
    });
};
const ajaxReloadPaymentPendding = () => {
    callAjax(`/ajaxReloadPaymentPendding`, {}, "GET");
    callAjax(`/ajaxReloadPayInPendding`, {}, "GET");
    callAjax(`/ajaxReloadAhamovePendding`, {}, "GET");
};
const ajaxGetAhamoveShippingPrice = (storeId, serviceId) => {
    if (storeId && serviceId) {
        return new Promise((resolve, reject) => {
            callAjax(
                `/ajaxGetAhamoveShippingPrice?store_id=${storeId}&service_id=${serviceId}`
            ).then((response) => {
                resolve(response);
            });
        });
    }
};
$(document).ready(async function () {
    boxSpinnerLoader("body", false);
    // =====================
    // LOAD DATA
    // =====================
    sessionStorage.removeItem("customerId");
    sessionStorage.removeItem("hasAuth");
    if (await hasCustomer()) {
        reloadCustomerProductBox();
        reloadAhaServiceBox();
        getCountWishlist().then((res) => {
            if (res.status == 200 && res.data?.count) {
                $(".boxWishlist > span").removeClass("d-none");
                $(".boxWishlist > span > .numberWishlist").text(
                    res.data?.count
                );
            }
        });
        getCartCountProduct().then((res) => {
            if (res.status == 200 && res.data?.count) {
                $(".boxCartCount > span").removeClass("d-none");
                $(".boxCartCount > span > .numberCart").text(res.data?.count);
            }
        });
        notifiGetList().then((res) => {
            if (res.status == 200) {
                let data = res.data;
                let list = data?.list?.items;
                if (list.length) {
                    $("#pills-0 .notifyBody").removeClass("d-none");
                    list.forEach((notify) => {
                        $("#pills-0 .notifyBodyList").append(
                            createNotify(notify)
                        );
                    });
                    $("#pills-0 .emptyNotifi").addClass("d-none");
                }
                let personal = data?.personal?.items;
                if (personal.length) {
                    $("#pills-1 .notifyBody").removeClass("d-none");
                    personal.forEach((notify) => {
                        $("#pills-1 .notifyBodyList").append(
                            createNotify(notify)
                        );
                    });
                    $("#pills-1 .emptyNotifi").addClass("d-none");
                }
                let promotion = data?.promotion?.items;
                if (promotion.length) {
                    $("#pills-2 .notifyBody").removeClass("d-none");
                    promotion.forEach((notify) => {
                        $("#pills-2 .notifyBodyList").append(
                            createNotify(notify)
                        );
                    });
                    $("#pills-2 .emptyNotifi").addClass("d-none");
                }
            }
        });
        $(".boxHeaderUser .notLogin,.boxHeaderNotifi .notLogin").addClass(
            "d-none"
        );
        $(".boxHeaderUser .hasLogin,.boxHeaderNotifi .hasLogin").removeClass(
            "d-none"
        );
        ajaxReloadPaymentPendding();
    } else {
        $(".boxHeaderUser .notLogin").removeClass("d-none");
        $(".boxHeaderUser .hasLogin").addClass("d-none");
        reloadPublicProductBox();
    }
    // =====================
    // PROFILE
    // =====================
    showModalForm(
        "#editProfileModal",
        (res) => {
            if (res.status == 200) {
                window.location.reload();
            }
        },
        async (data, modal) => {}
    );
    showModalForm(
        "#changePasswordModal",
        (res) => {
            if (res.status == 200) {
                showSweetAlertOk("Đổi mật khẩu thành công");
                $("#changePasswordModal").modal("hide");
            }
        },
        (data, modal) => {}
    );
    showModalForm(
        "#changeUsernameModal",
        (res) => {
            if (res.status == 200) {
                window.location.reload();
            }
        },
        (data, modal) => {}
    );
    // =====================
    // WISHLIST
    // =====================
    $(".productBox").on("click", ".btnWishlist", async function (e) {
        e.preventDefault();
        if (await hasCustomer(true)) {
            let prods = getProduct(this);
            let $this = $(this);
            ajaxToggleWishlist(prods.pId).then((res) => {
                if (
                    typeof res.data.status !== "undefined" &&
                    res.data.status == 1
                ) {
                    $.notify({
                        icon: "fa fa-check",
                        title: "Thành công ",
                        message: "thêm sản phẩm vào danh mục yêu thích",
                    });
                    $this.removeClass("btnWishlist");
                    $this.find("i").addClass("fa-sharp fa-solid");
                    $this.find("i").removeClass("fa-light");
                    $this.unbind();
                }
            });
        }
    });
    $(".wishlist-button.close_button").click(async function (e) {
        e.preventDefault();
        if (await hasCustomer(true)) {
            let prods = getProduct(this);
            let $this = $(this);
            ajaxToggleWishlist(prods.pId).then((data) => {
                if (
                    typeof data.data.status !== "undefined" &&
                    data.data.status == 0
                ) {
                    $this.closest(".productBox").fadeOut("slow", function () {
                        $(this).closest(".productBox").remove();
                    });
                    $this.unbind();
                }
            });
        }
    });
    // =====================
    // ADD TO CART && CART
    // =====================
    $(".productBox .addcart-button").click(async function (e) {
        e.preventDefault();
        if (await hasCustomer(true)) {
            let addToCart = $(this).parents(".add-to-cart-box");
            addToCart.addClass("spinner-xs");
            jqSpinnerLoader(addToCart);
            let prods = getProduct(this);
            ajaxCartEditProduct(prods.pId, prods.ppId, 1, prods.seller).then(
                (data) => {
                    jqSpinnerLoader(addToCart, false);
                    changeQtyInput(prods.ppId, 1);
                    plusCart();
                }
            );
        }
    });
    $(".productBox .product-packege .select-packege li a").click(function (e) {
        e.preventDefault();
        $productBox = $(this).parents(".productBox");
        let priceId = $(this).attr("data-price");
        let priceNowId = $productBox.attr("data-price");
        console.log(priceId);
        console.log(priceNowId);
        if (priceId && priceNowId & (priceNowId != priceId)) {
            $productBox.addClass("d-none");
            let $productBoxTarget = $(
                `.productBox.product-detail[data-price="${priceId}"]`
            );
            if ($productBoxTarget.length) {
                $productBoxTarget.removeClass("d-none");
                $productBoxTarget
                    .find(".select-packege li a")
                    .removeClass("active");
                $productBoxTarget
                    .find(`.select-packege li a[data-price="${priceId}"]`)
                    .addClass("active");
            }
        }
        // $(this).parents('.select-packege').find('a').removeClass("active");
        // $(this).addClass("active");
    });
    $(".productBox .qty-left-minus").on("click", async function (e) {
        e.preventDefault();
        if (await hasCustomer(true)) {
            let $this = $(this);
            let prods = getProduct(this);
            let $qty = $this.siblings(".qty-input");
            let _val = $qty.val();
            if (_val > 0) {
                let currentVal = parseInt($qty.val());
                if (!isNaN(currentVal) && currentVal > 0) {
                    let addToCart = $(this).parents(".cart_qty");
                    addToCart.addClass("spinner-xs");
                    jqSpinnerLoader(addToCart);
                    boxSpinnerLoader(".cartTotalBox");
                    ajaxCartEditProduct(
                        prods.pId,
                        prods.ppId,
                        currentVal - 1,
                        prods.seller
                    ).then((res) => {
                        if (res.status == 200) {
                            changeQtyInput(prods.ppId, currentVal - 1);
                            let productBox = $this.parents(".productBox");
                            let price = parseFloat(currency(prods.price));
                            productBox.find(".subtotal > *").text(
                                currency(price * (currentVal - 1), {
                                    precision: 0,
                                    symbol: "",
                                }).format()
                            );
                            reloadCartVoucherBox();
                            let storeId = $this
                                .parents(".cartTable")
                                .attr("data-store");
                            if (storeId) {
                                reloadCartStoreVoucherBox(
                                    storeId,
                                    `.blockStoreVoucherBox[data-id="${storeId}"]`
                                );
                            }
                            reloadCartTotalBox();
                            jqSpinnerLoader(addToCart, false);
                        }
                    });
                }
            }
        }
    });
    $(".productBox .qty-right-plus").on("click", async function (e) {
        e.preventDefault();
        if (await hasCustomer(true)) {
            let $input = $(this).prev();
            let qty = $input.val();
            let maxQty = $input.attr("data-max");
            if (qty < 1000 && (maxQty == -1 || qty < maxQty)) {
                let addToCart = $(this).parents(".cart_qty");
                addToCart.addClass("spinner-xs");
                jqSpinnerLoader(addToCart);
                let $this = $(this);
                let prods = getProduct(this);
                let numP = parseInt(+qty + 1);
                boxSpinnerLoader(".cartTotalBox");
                ajaxCartEditProduct(
                    prods.pId,
                    prods.ppId,
                    numP,
                    prods.seller
                ).then((res) => {
                    if (res.status == 200) {
                        changeQtyInput(prods.ppId, numP);
                        let productBox = $this.parents(".productBox");
                        let price = parseFloat(currency(prods.price));
                        productBox.find(".subtotal > *").text(
                            currency(price * numP, {
                                precision: 0,
                                symbol: "",
                            }).format()
                        );
                        reloadCartVoucherBox();
                        let storeId = $this
                            .parents(".cartTable")
                            .attr("data-store");
                        if (storeId) {
                            reloadCartStoreVoucherBox(
                                storeId,
                                `.blockStoreVoucherBox[data-id="${storeId}"]`
                            );
                        }
                        reloadCartTotalBox();
                        jqSpinnerLoader(addToCart, false);
                    }
                });
            }
        }
    });
    $(".productBox .qty-input").keyup(async function (e) {
        e.preventDefault();
        if (await hasCustomer(true)) {
            let $this = $(this);
            let numP = parseInt($this.val());
            let maxQty = $this.attr("data-max");
            if (numP < 1000) {
                if (numP > maxQty && maxQty != -1) {
                    $this.val(maxQty);
                    numP = maxQty;
                }
                let addToCart = $(this).parents(".cart_qty");
                addToCart.addClass("spinner-xs");
                jqSpinnerLoader(addToCart);
                let prods = getProduct(this);
                boxSpinnerLoader(".cartTotalBox");
                ajaxCartEditProduct(
                    prods.pId,
                    prods.ppId,
                    numP,
                    prods.seller
                ).then((res) => {
                    if (res.status == 200) {
                        changeQtyInput(prods.ppId, numP);
                        let productBox = $this.parents(".productBox");
                        let price = parseFloat(currency(prods.price));
                        productBox.find(".subtotal > *").text(
                            currency(price * numP, {
                                precision: 0,
                                symbol: "",
                            }).format()
                        );
                        reloadCartVoucherBox();
                        reloadCartTotalBox();
                        let storeId = $this
                            .parents(".cartTable")
                            .attr("data-store");
                        if (storeId) {
                            reloadCartStoreVoucherBox(
                                storeId,
                                `.blockStoreVoucherBox[data-id="${storeId}"]`
                            );
                        }
                        jqSpinnerLoader(addToCart, false);
                    }
                });
            }
        }
    });
    $(".cartTable").on(
        "click",
        ".removeItem,.cartRemoveAll,.storeRemove",
        function (e) {
            e.preventDefault();
            showSweetAlert(async () => {
                if (await hasCustomer(true)) {
                    let productPriceIds = [];
                    let $this = $(this);
                    if ($this.hasClass("removeItem")) {
                        let productBox = $this.parents(".productBox");
                        let productPriceId = productBox.attr("data-price");
                        productPriceIds = [productPriceId];
                    } else if ($this.hasClass("storeRemove")) {
                        let $productBoxs = $this
                            .parents(".cartTable")
                            .find(".productBox");
                        productPriceIds = $productBoxs
                            .map(function () {
                                return $(this).attr("data-price");
                            })
                            .get();
                    } else if ($this.hasClass("cartRemoveAll")) {
                        let $productBoxs = $(".cartTable").find(".productBox");
                        productPriceIds = $productBoxs
                            .map(function () {
                                return $(this).attr("data-price");
                            })
                            .get();
                    }
                    if (productPriceIds.length) {
                        boxSpinnerLoader(".cartTotalBox");
                        ajaxCartRemoveProduct(productPriceIds).then((res) => {
                            if (res.status == 200) {
                                productPriceIds.forEach((productPriceId) => {
                                    $(".cartTable")
                                        .find(
                                            '.productBox[data-price="' +
                                                productPriceId +
                                                '"]'
                                        )
                                        .remove();
                                });
                                reloadCartVoucherBox();
                                let storeId = $this
                                    .parents(".cartTable")
                                    .attr("data-store");
                                if (storeId) {
                                    reloadCartStoreVoucherBox(
                                        storeId,
                                        `.blockStoreVoucherBox[data-id="${storeId}"]`
                                    );
                                }
                                reloadCartTotalBox();
                                minusCart();
                            }
                        });
                    }
                }
            }, "Bạn có muốn xóa sản phẩm đang chọn?");
        }
    );
    $(".cartTable").on(
        "change",
        ".cartCheck,.storeCheckbox,.cartCheckAll",
        async function (e) {
            e.preventDefault();
            if (await hasCustomer(true)) {
                let $this = $(this);
                let cartItemIds = [];
                let isOrder = $this.is(":checked") == true ? 1 : 0;
                if ($this.hasClass("cartCheck")) {
                    let cartItemId = this.value;
                    cartItemIds = [cartItemId];
                } else if ($this.hasClass("storeCheckbox")) {
                    let $cartCheck = $(this)
                        .parents(".cartTable")
                        .find(".cartCheck");
                    $cartCheck.prop("checked", isOrder);
                    cartItemIds = $cartCheck
                        .map(function () {
                            return this.value;
                        })
                        .get();
                } else if ($this.hasClass("cartCheckAll")) {
                    let $cartCheck = $(".cartTable input.cartCheck");
                    $cartCheck.prop("checked", this.checked);
                    cartItemIds = $cartCheck
                        .map(function () {
                            return this.value;
                        })
                        .get();
                }
                if (cartItemIds.length) {
                    boxSpinnerLoader(".cartTotalBox");
                    ajaxCartToggleProduct(cartItemIds, isOrder).then((res) => {
                        if (res.status == "200") {
                            loadCheckbox();
                            reloadCartVoucherBox();
                            let storeId = $this
                                .parents(".cartTable")
                                .attr("data-store");
                            if (storeId) {
                                reloadCartStoreVoucherBox(
                                    storeId,
                                    `.blockStoreVoucherBox[data-id="${storeId}"]`
                                );
                            }
                            reloadCartTotalBox();
                        }
                    });
                }
            }
        }
    );
    //VOUCHER
    $("#voucherModal").on("shown.bs.modal", function (e) {
        e.preventDefault();
        let $btnAction = $(e.relatedTarget);
        reloadModalVoucherBox();
    });
    $("#voucherModal").on(
        "click",
        ".voucherItem:not(.disabled)",
        async function (e) {
            e.preventDefault();
            if (await hasCustomer(true)) {
                let $this = $(this);
                let voucherId = $this.attr("data-id");
                if (voucherId) {
                    boxSpinnerLoader(".cartTotalBox");
                    boxSpinnerLoader(".blockVoucherBox");
                    callAjax(`/ajaxCartUseVoucher`, { voucherId }, "POST").then(
                        (res) => {
                            if (res.status == 200) {
                                reloadCartVoucherBox();
                                reloadCartTotalBox();
                            }
                            $("#voucherModal").modal("hide");
                        }
                    );
                }
            }
        }
    );
    $(".blockVoucherBox").on("click", ".btnNoUseVoucher", async function (e) {
        e.preventDefault();
        if (await hasCustomer(true)) {
            let $this = $(this);
            boxSpinnerLoader(".cartTotalBox");
            boxSpinnerLoader(".blockVoucherBox");
            callAjax(`/ajaxCartNotUseVoucher`, {}, "GET").then((res) => {
                if (res.status == 200) {
                    reloadCartVoucherBox();
                    reloadCartTotalBox();
                }
            });
        }
    });
    //STORE VOUCHER
    $("#storeVoucherModal").on("shown.bs.modal", function (e) {
        e.preventDefault();
        let $btnAction = $(e.relatedTarget);
        let storeId = $btnAction.attr("data-id");
        reloadModalStoreVoucherBox(storeId);
    });
    $("#storeVoucherModal").on(
        "click",
        ".voucherItem:not(.disabled)",
        async function (e) {
            e.preventDefault();
            if (await hasCustomer(true)) {
                let $this = $(this);
                let storeId = $this.attr("data-store");
                let voucherId = $this.attr("data-id");
                if (voucherId && storeId) {
                    boxSpinnerLoader(".cartTotalBox");
                    boxSpinnerLoader(
                        `.blockStoreVoucherBox[data-id="${storeId}"]`
                    );
                    callAjax(
                        `/ajaxCartUseStoreVoucher`,
                        { voucherId, storeId },
                        "POST"
                    ).then((res) => {
                        if (res.status == 200) {
                            reloadCartStoreVoucherBox(
                                storeId,
                                `.blockStoreVoucherBox[data-id="${storeId}"]`
                            );
                            reloadCartTotalBox();
                        }
                        $("#storeVoucherModal").modal("hide");
                    });
                }
            }
        }
    );
    $(".blockStoreVoucherBox").on(
        "click",
        ".btnNoUseStoreVoucher",
        async function (e) {
            e.preventDefault();
            if (await hasCustomer(true)) {
                let $this = $(this);
                let voucherId = $this.attr("data-id");
                let storeId = $this.attr("data-store");
                if (voucherId && storeId) {
                    boxSpinnerLoader(".cartTotalBox");
                    boxSpinnerLoader(
                        `.blockStoreVoucherBox[data-id="${storeId}"]`
                    );
                    callAjax(
                        `/ajaxCartNotUseStoreVoucher/${storeId}`,
                        { voucherId },
                        "POST"
                    ).then((res) => {
                        if (res.status == 200) {
                            reloadCartStoreVoucherBox(
                                storeId,
                                `.blockStoreVoucherBox[data-id="${storeId}"]`
                            );
                            reloadCartTotalBox();
                        }
                    });
                }
            }
        }
    );
    //ADDRESS
    showModalForm(
        "#updateAddressModal",
        (res) => {
            console.log(res);
            if (res.status == 200) {
                window.location.reload();
            }
        },
        async (data, modal) => {
            let countryId = 240;
            $(modal).off("change", '[name="province_id"]');
            $(modal).off("change", '[name="district_id"]');
            if (data) {
                let provinceId = getObjValue(data, "province_id");
                let cityId = getObjValue(data, "district_id");
                let wardId = getObjValue(data, "ward_id");
                $(`${modal} [name="province_id"]`)
                    .val(provinceId)
                    .trigger("change");
                await showS2(
                    $(`${modal} [name="district_id"]`),
                    ajaxS2GetCityByStateId,
                    provinceId,
                    cityId
                );
                await showS2(
                    $(`${modal} [name="ward_id"]`),
                    ajaxS2GetWardByCityId,
                    { countryId, cityId },
                    wardId
                ).then(() => {
                    $(modal).on("change", '[name="province_id"]', function (e) {
                        e.preventDefault();
                        showS2(
                            $(`${modal} [name="district_id"]`),
                            ajaxS2GetCityByStateId,
                            $(this).val()
                        );
                    });
                    $(modal).on("change", '[name="district_id"]', function (e) {
                        e.preventDefault();
                        showS2(
                            $(`${modal} [name="ward_id"]`),
                            ajaxS2GetWardByCityId,
                            { countryId, cityId: $(this).val() }
                        );
                    });
                });
            } else {
                $(modal).on("change", '[name="province_id"]', function (e) {
                    e.preventDefault();
                    showS2(
                        $(`${modal} [name="district_id"]`),
                        ajaxS2GetCityByStateId,
                        $(this).val()
                    );
                });
                $(modal).on("change", '[name="district_id"]', function (e) {
                    e.preventDefault();
                    showS2(
                        $(`${modal} [name="ward_id"]`),
                        ajaxS2GetWardByCityId,
                        { countryId, cityId: $(this).val() }
                    );
                });
            }
        }
    );
    $(".btnAddressDel").click(function (e) {
        e.preventDefault();
        let link = $(this).data("href");
        let addressBox = $(this).parents(".col-xl-6");
        showSweetAlert(() => {
            sendAjax(link, [], "GET").then(() => {
                addressBox.remove();
            });
        }, "Bạn muốn xoá địa chỉ này ra khỏi sổ địa chỉ?");
    });
    $(".btnAddressDefault").click(function (e) {
        e.preventDefault();
        let link = $(this).data("href");
        sendAjax(link, [], "GET").then(() => {
            window.location.reload();
        });
    });
    $(".btnPurchase").on("click", function (e) {
        e.preventDefault();
        if ($(".cartTable .cartCheck:checked").length) {
            window.location.href = $(this).data("href");
        } else {
            showSweetAlertWarning("Bạn vẫn chưa chọn sản phẩm nào để mua");
        }
    });
    //PAYMENT
    $("#boxPaymentMethod").on(
        "change",
        '[name="payment_method_id"]',
        function (e) {
            e.preventDefault();
            let methodId = $(this).val();
            boxSpinnerLoader(".cartTotalBox");
            if (methodId)
                ajaxCartPaymentMethod(methodId).then(() => {
                    reloadCartTotalBox();
                });
        }
    );
    // =====================
    // Filter Sidebar js
    // =====================
    $(".filter-button").click(function () {
        $(".bg-overlay, .left-box").addClass("show");
    });
    $(".back-button, .bg-overlay").click(function () {
        $(".bg-overlay, .left-box").removeClass("show");
    });
    // =====================
    // purchase js
    // =====================
    // $('#frmPurchase [name="store_id"],#frmPurchase [name="address_id"]').change(function (e) {
    //     e.preventDefault();
    //     let storeId = $('#frmPurchase [name="store_id"]:checked').val();
    //     let addressId = $('#frmPurchase [name="address_id"]:checked').val();
    //     ajaxGeShippingPrice(storeId,addressId).then(data => {
    //         let shipping = parseFloat(data.price);
    //         let subtotal = $('#frmPurchase .summery-total .list-subtotal h4:eq(1)').text();
    //         subtotal = parseFloat(currency(subtotal));
    //         let voucher = $('#frmPurchase .summery-total .list-voucher h4:eq(1)').text();
    //         voucher = parseFloat(currency(voucher));
    //         $('#frmPurchase .summery-total .list-shipping h4:eq(1)').text('+ ' + currency(shipping,{ precision: 0, symbol: '' }).format());
    //         $('#frmPurchase .summery-total .list-total h4:eq(1)').text(currency(subtotal + shipping - voucher,{ precision: 0, symbol: '' }).format());
    //     });
    // });
    $("#frmPurchase").on("change", ".cbserviceId", function (e) {
        e.preventDefault();
        let serviceId = $(this).val();
        let storeId = $(this).attr("data-storeId");
        console.log(serviceId);
        console.log(storeId);
        boxSpinnerLoader(".cartTotalBox");
        ajaxGetAhamoveShippingPrice(storeId, serviceId).then((data) => {
            reloadCartTotalBox();
            // window.location.reload();
        });
    });
    // ==================
    // Modal View Product
    // ==================
    $("#modalView").on("shown.bs.modal", function (e) {
        e.preventDefault();
        let prods = getProduct(e.relatedTarget);
        $("#modalView .title-name").html(prods.name);
        $("#modalView .slider-image img").attr("src", prods.img);
        $("#modalView .price").html(prods.priceHtml);
        $("#modalView .view-button").attr("href", prods.link);
        $("#modalView .product-detail p").text(prods.des);
    });
    // ==================
    // Modal View Product
    // ==================
    boxUploadFile(".boxUploadReview");
    showModalForm(
        "#reviewModal",
        (res) => {
            if (res.status == 200) {
                window.location.reload();
            }
        },
        async (data, modal, $btn) => {
            let hrefGet = $btn.attr("data-hrefGet");
            if (hrefGet) {
                $.ajax({
                    type: "GET",
                    url: hrefGet,
                    data: null,
                    dataType: "json",
                    success: function (res) {
                        let prods = res.data;
                        $(modal)
                            .find("#reviewModalLabel")
                            .text(getObjValue(prods, "name"));
                    },
                });
            }
        }
    );
    // Review Store
    boxUploadFile(".boxUploadStoreReview");
    showModalForm(
        "#storeReviewModal",
        (res) => {
            if (res.status == 200) {
                window.location.reload();
            }
        },
        async (data, modal, $btn) => {
            let hrefGet = $btn.attr("data-hrefGet");
            if (hrefGet) {
                $.ajax({
                    type: "GET",
                    url: hrefGet,
                    data: null,
                    dataType: "json",
                    success: function (res) {
                        let item = res.data;
                        $(modal)
                            .find("#storeReviewModalLabel")
                            .text(getObjValue(item, "name"));
                    },
                });
            }
        }
    );
    $(".sort-by-button").click(function () {
        $(".top-filter-menu").toggleClass("show");
    });
    loadCheckbox();
    $(".product_sort").click(function (e) {
        e.preventDefault();
        let sort = $(this).attr("data-sort");
        window.location.assign(
            window.location.origin +
                window.location.pathname +
                "?" +
                setParam("sort", sort)
        );
    });
    $(".btnLanguage").click(function (e) {
        let link = $(this).data("href");
        e.preventDefault();
        sendAjax(link, [], "GET").then(() => {
            window.location.reload();
        });
    });
    // ==================
    // CUSTOMER PAY
    // ==================
    showModalForm(
        "#customerBankInfoModal",
        (res) => {
            console.log(res);
            if (res.status == 200) {
                window.location.reload();
            }
        },
        async (data, modal) => {}
    );
    deleteSingle();
    showModalForm(
        "#customerPayInModal",
        (res) => {
            console.log(res);
            if (res.status == 200) {
                let data = res.data;
                if (data?.payUrl) {
                    window.location.href = data?.payUrl;
                } else {
                    window.location.reload();
                }
            }
        },
        async (data, modal) => {}
    );
    showModalForm(
        "#customerPayOutModal",
        (res) => {
            console.log(res);
            if (res.status == 200) {
                window.location.reload();
            }
        },
        async (data, modal) => {}
    );
    // ==================
    // FILTER
    // ==================
    $(".fcatid").click(function (e) {
        if (this.checked) {
            let fcatid = $(this).val();
            window.location.assign(
                window.location.origin +
                    window.location.pathname +
                    "?" +
                    setParam("fcatid", fcatid)
            );
        }
    });
    $(".frating").click(function (e) {
        if (this.checked) {
            let frating = $(this).val();
            window.location.assign(
                window.location.origin +
                    window.location.pathname +
                    "?" +
                    setParam("frating", frating)
            );
        }
    });
    $(".fprice").click(function (e) {
        e.preventDefault();
        let fprice = $(this).attr("data-val");
        window.location.assign(
            window.location.origin +
                window.location.pathname +
                "?" +
                setParam("fprice", fprice)
        );
    });
    $(".clearAllFilter").click(function (e) {
        e.preventDefault();
        window.location.assign(
            window.location.origin +
                window.location.pathname +
                "?" +
                removeParam(["fprice", "frating", "fcatid"])
        );
    });
    $(".clearFilterRating").click(function (e) {
        e.preventDefault();
        window.location.assign(
            window.location.origin +
                window.location.pathname +
                "?" +
                removeParam("frating")
        );
    });
    $(".clearFilterPrice").click(function (e) {
        e.preventDefault();
        window.location.assign(
            window.location.origin +
                window.location.pathname +
                "?" +
                removeParam("fprice")
        );
    });
    $(".clearFilterCatId").click(function (e) {
        e.preventDefault();
        window.location.assign(
            window.location.origin +
                window.location.pathname +
                "?" +
                removeParam("fcatid")
        );
    });
    // ==================
    // NORMAL LOAD
    // ==================
    maskDateLoader();
    maskDateTimeLoader();
    maskTimeLoader();
    maskMonthTimeLoader();
});
window.addEventListener("load", function () {
    select2Loader();
    setTimeout(function () {
        fixButtonHeights();
        fixBankHeights();
    }, 120);
});
