if($('.tokenCSRF').length){
    callAjax('/ajaxGetCSRF',null,'GET').then(res=> {
        if (typeof res.token != 'undefined') {
            $('.tokenCSRF').val(res.token);
        }
    });
}
$('#otp input').on('input', function () {
    let $this = $(this);
    let number = $this.val();
    if(number) {
        $this.next().val("").focus();
    }
});
boxUploadFile('.boxContractFile',(/\.(pdf)$/i));
$('#otp input').on('input', function () {
    let $this = $(this);
    let number = $this.val();
    if(number) {
        $this.next().val("").focus();
    }
});