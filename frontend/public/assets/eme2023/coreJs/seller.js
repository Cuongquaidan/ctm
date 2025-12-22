showSweetAlertWarning("Thông báo","Website đang hoạt động thử nghiệm và đang trong quá trình đăng ký Bộ Công Thương");
if($('.tokenCSRF').length){
    callAjax('/ajaxGetCSRF',null,'GET').then(res=> {
        if (typeof res.token != 'undefined') {
            $('.tokenCSRF').val(res.token);
        }
    });
}
const getSellerId = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: "/ajaxGetSellerId",
            data: null,
            dataType: "json",
            success: function (res) {
                if(res.status == 200){
                    sessionStorage.setItem('sellerId',res?.data?.sellerId ? parseInt(res.data.sellerId) : 0 );
                    sessionStorage.setItem('hasAuthSeller',true);
                }
                resolve(res);
            },
            error: function(err){
                reject(err)
            }
        });
    });
}
const hasSeller = async (popup = false) => {
    let sellerId = parseInt(sessionStorage.getItem('sellerId'));
    if(!sellerId && !sessionStorage.getItem('hasAuthSeller')){
        let res = await getSellerId();
        sellerId = res?.data?.sellerId ? parseInt(res?.data?.sellerId) : 0;
    }
    if(!sellerId && popup){
        // window.location.href="/sellers/login";
        $('#modalSellerLogin').modal({
            backdrop: 'static',
            keyboard: false
        }).modal('show');
        return false;
    }    
    return sellerId;
}
const getProduct = (_this) => {
    let productBox = $(_this).parents('.productBox');
    let img = productBox.find('.product-image img').attr('strc');
    let name = productBox.find('.product-detail .name').text();
    let des = productBox.find('.product-detail .product_des').text();
    let priceHtml = productBox.find('.box-price').html();
    let price = productBox.find('.box-price .price').text();
    let link = productBox.find('.product-detail a').attr('href');
    let pId = productBox.attr('data-id');
    let ppId = productBox.attr('data-price');
    return {
        'img': img,
        'name': name,
        'des': des,
        'priceHtml': priceHtml,
        'price': price,
        'link': link,
        'pId': pId,
        'ppId': ppId
    }
}
$(document).ready(async function () {
    boxSpinnerLoader('body',false);
    copyToClipboard();
    btnShareUrl();
    maskDateLoader();
    maskDateTimeLoader();
    maskTimeLoader();
    maskMonthTimeLoader();
    select2Loader();
    //
    boxUploadFile('.boxCccdFront');
    boxUploadFile('.boxCccdBack');
    boxUploadFile('.boxPassportImg');
    boxUploadFile('.boxUserImg');
    boxUploadFile('.boxBusinessFile',(/\.(pdf)$/i));
    boxUploadFile('.boxContractFile',(/\.(pdf)$/i));
    let countryId = 240;
    $('#frmSellerRegisterStep2').on('change','[name="province_id"]',function (e) {
        e.preventDefault()
        showS2($(`#frmSellerRegisterStep2 [name="district_id"]`),ajaxS2GetCityByStateId,$(this).val())
    })
    $('#frmSellerRegisterStep2').on('change','[name="district_id"]',function (e) {
        e.preventDefault();
        showS2($(`#frmSellerRegisterStep2 [name="ward_id"]`),ajaxS2GetWardByCityId,{countryId,'cityId':$(this).val()})
    })
    $('#btnNextStep').click(function (e) { 
        e.preventDefault();
        let $this = $(this);
        let $form = $(this).parents('form');
        if (!$this.hasClass('disabled')) {         
            let href = window.location.href;
            let data = new FormData($form[0]);
            data.append('stepType', 1);
            sendAjax(href + '?typeReq=1', data, 'POST').then(res => {
                if(res.status == 200){
                    window.location.reload();
                }
            }).catch(error => {
                console.log(error);
            })
        }
    });
    $('#btnPrevStep').click(function (e) { 
        e.preventDefault();
        let $this = $(this);
        let $form = $(this).parents('form');
        if (!$this.hasClass('disabled')) {         
            let href = window.location.href;
            let data = new FormData();
            let csrfToken = $form.find('[name="csrf_token"]').val();
            data.append('stepType', 2);
            data.append('csrf_token', csrfToken);
            sendAjax(href + '?typeReq=1', data, 'POST').then(res => {
                if(res.status == 200){
                    window.location.reload();
                }
            }).catch(error => {
                console.log(error);
            })
        }
    });
    $('#btnDoneStep').click(function (e) { 
        e.preventDefault();
        let $this = $(this);
        let $form = $(this).parents('form');
        if (!$this.hasClass('disabled')) {  
            showSweetAlert(()=>{
            let href = window.location.href;
            let data = new FormData($form[0]);
            data.append('stepType', 1);
            sendAjax(href + '?typeReq=1', data, 'POST').then(res => {
                if(res.status == 200){
                    window.location.reload();
                }
            }).catch(error => {
                console.log(error);
            })
            }, 'Bạn vui lòng kiểm tra thông tin một cách đầy đủ, vì khi xác nhận hoàn tất đăng ký bạn không thể thay đổi thông tin cho đến khi CTM hoàn tất xét duyệt yêu cầu của bạn. Xin cảm ơn!')       
        }
    });
    // =====================
    // PROFILE
    // =====================
    showModalForm('#editProfileModal',(res)=>{
        if(res.status == 200){
            window.location.reload();
        }
    }, async (data,modal) => {
        
    });
    showModalForm('#changePasswordModal',(res)=>{
        if(res.status == 200){
        showSweetAlertOk('Đổi mật khẩu thành công')
            $('#changePasswordModal').modal('hide');
        }
    }, (data,modal) => {

    });
    // =====================
    // PRODUCT
    // =====================
    $(".btnSaveProduct").click(async function (e) {
        e.preventDefault();
        if(await hasSeller(true)){
            let $this = $(this);
            let productId = $this.attr('data-id');
            let productSellerId = $this.attr('data-seller');
            $this.addClass('spinner-xs');
            jqSpinnerLoader($this);
            if(productId && productSellerId){
                callAjax(`/sellerAdcp/ajaxSaveProduct`,{productId,productSellerId},'POST').then((res)=>{
                    if(res.status == 200 && res.data) {
                        let data = res.data;
                        $.notify({
                            icon: "fa fa-check",
                            title: "Thành công ",
                            message: "thêm sản phẩm vào cửa hàng của bạn",
                        });
                        $this.removeClass('btnSaveProduct');
                        $this.addClass('disabled');
                        $this.text('Đã lưu');
                        $this.unbind();
                    }
                    jqSpinnerLoader($this,false);
                })
            }
        }
    });
    $(".btnRemoveProduct").click(async function (e) {
        e.preventDefault();
        if(await hasSeller(true)){
            let $this = $(this);
            let productSellerId = $(this).attr('data-seller');
            let $productBox = $this.parents('.productBox');
            $productBox.addClass('spinner-sm');
            jqSpinnerLoader($productBox);
            if(productSellerId){
                callAjax(`/sellerAdcp/ajaxRemoveProduct/${productSellerId}`,{},'GET').then((res)=>{
                    if(res.status == 200 && res.data) {
                        $this.closest(".productBox").fadeOut("slow", function () {
                            $productBox.remove();
                        });
                        $this.unbind();
                    }
                })
            }

        }
    });
    // ==================
    // FILTER
    // ==================
    $('.product_sort').click(function (e){
        e.preventDefault();
        let sort = $(this).attr('data-sort');
        window.location.assign(window.location.origin+window.location.pathname+'?'+setParam('sort',sort));
    });
    $('.fcatid').click(function (e){
        if(this.checked) {
            let fcatid = $(this).val();
            window.location.assign(window.location.origin+window.location.pathname+'?'+setParam('fcatid',fcatid));
        }
    });
    $('.frating').click(function (e){
        if(this.checked) {
            let frating = $(this).val();
            window.location.assign(window.location.origin+window.location.pathname+'?'+setParam('frating',frating));
        }
    });
    $('.fprice').click(function (e){
        e.preventDefault();
        let fprice = $(this).attr('data-val');
        window.location.assign(window.location.origin+window.location.pathname+'?'+setParam('fprice',fprice));
    });
    $('.clearAllFilter').click(function (e){
        e.preventDefault();
        window.location.assign(window.location.origin+window.location.pathname+'?'+removeParam(['fprice','frating','fcatid']));
    });
    $('.clearFilterRating').click(function (e){
        e.preventDefault();
        window.location.assign(window.location.origin+window.location.pathname+'?'+removeParam('frating'));
    });
    $('.clearFilterPrice').click(function (e){
        e.preventDefault();
        window.location.assign(window.location.origin+window.location.pathname+'?'+removeParam('fprice'));
    });
    $('.clearFilterCatId').click(function (e){
        e.preventDefault();
        window.location.assign(window.location.origin+window.location.pathname+'?'+removeParam('fcatid'));
    });
    // ==================
    // SELLER PAY
    // ==================
    showModalForm('#sellerBankInfoModal',(res)=>{
        console.log(res);
        if(res.status == 200){
            window.location.reload();
        }
    }, async (data,modal) => {
        
    });
    deleteSingle();
    showModalForm('#sellerPayInModal',(res)=>{
        console.log(res);
        if(res.status == 200){
            let data = res.data;
            if(data?.payUrl){
                window.location.href = data?.payUrl;
            }else{
                window.location.reload();
            }
        }
    }, async (data,modal) => {
    

    });
    showModalForm('#sellerPayOutModal',(res)=>{
        console.log(res);
        if(res.status == 200){
            window.location.reload();
        }
    }, async (data,modal) => {
    

    });
    callAjax(`/sellerAdcp/ajaxReloadPayInPendding`,{},"GET");
});