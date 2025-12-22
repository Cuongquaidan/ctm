$(document).ready(function () {
    if($('.tokenCSRF').length){
        callAjax('/ajaxGetCSRF',null,'GET').then(res=> {
            if (typeof res.token != 'undefined') {
                $('.tokenCSRF').val(res.token);
            }
        });
    }
    select2Loader();
    boxUploadFile('.boxCccdFront');
    boxUploadFile('.boxCccdBack');
    boxUploadFile('.boxPassportImg');
    boxUploadFile('.boxUserImg');
    boxUploadFile('.boxBusinessFile',(/\.(pdf)$/i));
    boxUploadFile('.boxContractFile',(/\.(pdf)$/i));
    maskDateLoader();
    maskDateTimeLoader();
    maskTimeLoader();
    maskMonthTimeLoader();
    let countryId = 240;
    $('#frmStoreRegisterStep1').on('change','[name="province_id"]',function (e) {
        e.preventDefault()
        showS2($(`#frmStoreRegisterStep1 [name="district_id"]`),ajaxS2GetCityByStateId,$(this).val())
    })
    $('#frmStoreRegisterStep1').on('change','[name="district_id"]',function (e) {
        e.preventDefault();
        showS2($(`#frmStoreRegisterStep1 [name="ward_id"]`),ajaxS2GetWardByCityId,{countryId,'cityId':$(this).val()})
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
});