const formatter = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
  // These options can be used to round to whole numbers.
  trailingZeroDisplay: 'stripIfInteger',
  //minimumFractionDigits: 0, // This suffices for whole numbers, but will
                              // print 2500.10 as $2,500.1
  //maximumFractionDigits: 0, // Causes 2500.99 to be printed as $2,501
});

const boxSpinnerLoader = (box,action=true) => {
    if(action){
        $(box).prepend(`<div class="boxSpinner rounded">
                            <div class="spinner">
                                <div class="rect1"></div>
                                <div class="rect2"></div>
                                <div class="rect3"></div>
                                <div class="rect4"></div>
                                <div class="rect5"></div>
                                <div class="rect6"></div>
                                <div class="rect7"></div>
                            </div>
                        </div>`);
    }else {
        $(box).find('.boxSpinner').remove();
    }
}
const jqSpinnerLoader = ($box,action=true) => {
    if(action){
        $box.prepend(`<div class="boxSpinner rounded">
                            <div class="spinner">
                                <div class="rect1"></div>
                                <div class="rect2"></div>
                                <div class="rect3"></div>
                                <div class="rect4"></div>
                                <div class="rect5"></div>
                                <div class="rect6"></div>
                                <div class="rect7"></div>
                            </div>
                        </div>`);
    }else {
        $box.find('.boxSpinner').remove();
    }
}
const checkUploadFile = (files, size = 20,type=false) => {
    type = type ? type : (/\.(jpg|jpeg|png|jfif|doc|docx|xls|xlsx|pdf)$/i);
    return new Promise((resolve) => {
        for (let i = 0; i < files.length; i++) {
            if (typeof files[i] != 'undefined') {
                if (type.test(files[i].name)) {
                    if (files[i].size >= size * 1024 * 1024) {
                        showSweetAlertError(`Tập tin tải lên không quá ${size}M`);
                        return false;
                    }
                } else {
                    showSweetAlertError(`Tập tin không hợp lệ`);
                    return false;
                }
            }else {
                showSweetAlertError(`Tập tin không tồn tại`);
                return false;
            }
        }
        resolve(this);
    })
}
const s2Option = ($el=false,data=false) => {
    let obj2 = {
        minimumResultsForSearch: 10,
        language: "vi",
        placeholder: "Chọn"
    }
    let modal = $el.parents('.modal');
    if($el && $el.parents('.modal').length) obj2.dropdownParent = modal
    if(data !== false) obj2.data = data
    return obj2;
}
const getObjValue = (objItem,key,df="") => {
    return typeof objItem[key] !== 'undefined' ? objItem[key] : df;
}
const baseName = (str) => {
    let base = new String(str).substring(str.lastIndexOf('/') + 1); 
    if(base.lastIndexOf(".") != -1)       
         base = base.substring(0, base.lastIndexOf("."));
    return base;
}
const getParams = (name = false) => {
    let url_string = window.location.href;
    let url = new URL(url_string);
    if (!name) {
        return url.searchParams.toString();
    } else if (Array.isArray(name)) {
        data = {};
        name.forEach(element => {
            data[element] = url.searchParams.get(element);
        });
        return data;
    } else {
        return url.searchParams.get(name);
    }
}
const setParam = (name,val) => {
    // let url = new URL(window.location.href);
    // console.log(window.location.search);
    let params = new URLSearchParams(window.location.search);
    params.set(name,val);
    return params.toString();
}
const removeParam = (name) => {
    // let url = new URL(window.location.href);
    // console.log(window.location.search);
    let params = new URLSearchParams(window.location.search);
    if(Array.isArray(name)){
        name.forEach(na => {
            params.delete(na);
        });
    }else{
        params.delete(name);
    }

    return params.toString();
}
//Show Alert
const showSweetAlert = (cb = () => {}, text = "Bạn có chắc muốn thực hiện thao tác này ?") => {
    Swal.fire({
        title: 'Xác nhận',
        text: text,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#4CAF50',
        cancelButtonColor: '#F44336',
        confirmButtonText: 'Đồng ý',
        cancelButtonText: 'Hủy',
        position: 'top',
    }).then((result) => {
        if (result.value) {
            cb();
        }
    })
}
//showSweetAlertOk
const showSweetAlertOk = (title) => {
    Swal.fire({
        type: 'success',
        title: title,
        showConfirmButton: false,
        timer: 1500
    });
}
//showSweetAlertWarning
const showSweetAlertWarning = (title,text = "",timer = 10000) => {
    Swal.fire({
        type: 'warning',
        title: title,
        text: text,
        showConfirmButton: false
    });
}
//showSweetAlertError
const showSweetAlertError = (title) => {
    Swal.fire({
        type: 'error',
        position: 'top',
        title: title,
        showConfirmButton: false,
    });
}
//Show Alert Error
const showErrorAjax = (res) => {
    dataError = Array.isArray(res.error) ? res.error.join(',') : res.error;
    Swal.fire({
        position: 'top',
        type: 'error',
        title: dataError,
        showConfirmButton: false,
    });
    if (typeof res.token != 'undefined') {
        $('.tokenCSRF').val(res.token);
    }
}
//Imask loader
const imaskDateTime = (className,format = 'DD/MM/YYYY HH:mm:ss') => {
    let elms = document.getElementsByClassName(className);
    for (let i = 0; i < elms.length; i++) {
        IMask(elms[i], {
            mask: Date,
            pattern: format,
            lazy: false,
            min: new Date(1970, 0, 1),
            max: new Date(2030, 0, 1),
    
            format: function (date) {
                return moment(date).format(format);
            },
            parse: function (str) {
                return moment(str, format);
            },
            blocks: {
                YYYY: {
                    mask: IMask.MaskedRange,
                    from: 1970,
                    to: 2099
                },
                MM: {
                    mask: IMask.MaskedRange,
                    from: 1,
                    to: 12
                },
                DD: {
                    mask: IMask.MaskedRange,
                    from: 1,
                    to: 31
                },
                HH: {
                    mask: IMask.MaskedRange,
                    from: 0,
                    to: 23
                },
                mm: {
                    mask: IMask.MaskedRange,
                    from: 0,
                    to: 59
                },
                ss: {
                    mask: IMask.MaskedRange,
                    from: 0,
                    to: 59
                }
            }
        });
    }
}
const maskDateLoader = (box = false) => {
    imaskDateTime('maskDate','DD/MM/YYYY');
}
//DateTime loader
const maskDateTimeLoader = (box = false) => {
    imaskDateTime('maskDateTime');
}
const maskTimeLoader = (box = false) => {
    imaskDateTime('maskTime','HH:mm:ss');
}
const maskMonthTimeLoader = (box = false) => {
    imaskDateTime('maskMonthTime','DD/MM HH:mm:ss');
}
const select2Loader = (box = false) => {
    let orderSortedValues = (s2,ul) => {
        let data = [];
        let dataOp = [];
        $(ul).find('li').each((index,item)=>{
            let title = $(item).attr('title');
            let op = $(s2).find(`option:contains('`+title+`')`);
            if(op.length){
                dataOp.unshift(op.clone());
                op.remove();
                data.push(op.attr('value'))
            }
        })
        dataOp.forEach(op => {
            $(s2).prepend(op);
        });
        $(s2).val(data).trigger('change');
    }
    //Loader Select2 default
    let formatText = (icon) => {
        return $('<span><i class="' + $(icon.element).data('icon') + '"></i> ' + icon.text + '</span>');
    }
    if(box){
        $(box).find('select:not(.noS2Loader,.swal2-select,.custom-icon,.goog-te-combo,[multiple])').select2(s2Option($(box).find('select:not(.noS2Loader,.custom-icon,.goog-te-combo,[multiple])')));
        $(box).find('select.custom-icon').select2({
            minimumResultsForSearch: 10,
            language: "vi",
            placeholder: "Chọn",
            templateSelection: formatText,
            templateResult: formatText
        });
        $(box).find('select[multiple]').each((index,s2)=>{
            $(s2).select2({
                minimumResultsForSearch: 10,
                language: "vi",
                placeholder: "Chọn"
            }).parent().find("ul.select2-selection__rendered").sortable({
                containment: 'parent',
                update: function() {
                    orderSortedValues(s2,this);
                }
            });
        })
    }else{
        $('select:not(.noS2Loader,.swal2-select,.custom-icon,.goog-te-combo,[multiple])').select2(s2Option($('select:not(.noS2Loader,.custom-icon,.goog-te-combo,[multiple])')));
        $('select.custom-icon').select2({
            minimumResultsForSearch: 10,
            language: "vi",
            placeholder: "Chọn",
            templateSelection: formatText,
            templateResult: formatText
        });
        $('select[multiple]').each((index,s2)=>{
            $(s2).select2(s2Option($(s2))).parent().find("ul.select2-selection__rendered").sortable({
                containment: 'parent',
                update: function() {
                    orderSortedValues(s2,this);
                }
            });
        })
    }
}
//Show Selet2
const showS2 = function($select,nameApi,valApi,selectValue=false,optionCus=false){
    return new Promise((resolve) => {
        let option = {dataF:false,disabled:false}
        option = optionCus ? {...option,...optionCus} : option;
        nameApi(valApi).then((data) => {
            $select.find('option:not(.noRemove)').remove();
            if(data.length){
                if(option.dataF){data = option.dataF.concat(data)}
                if(option.disabled) {$select.prop("disabled", false);}
            }else{
                if(option.dataF){data = option.dataF} 
                if(option.disabled){$select.prop("disabled", true).trigger('change')} 
            }
            $select.select2(s2Option($select,data));
            if(selectValue !== false && data.findIndex(x => x.id == selectValue) != -1){
                $select.val(selectValue).trigger('change');
            }
            resolve();
        })
    });
}
//Call Ajax Form
const sendAjax = (href, data = {}, type = "GET", ctype = 'json') => {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: type,
            url: href,
            data: data,
            dataType: ctype,
            processData: false,
            contentType: false,
            success: function (res) {
                if (typeof res.token != 'undefined') {
                    $('.tokenCSRF').val(res.token);
                }
                if (typeof res.error == 'undefined') {
                    Swal.close();
                    resolve(res);
                } else {
                    showErrorAjax(res);
                    reject(res)
                }
                $('[data-tooltip="tooltip"]').tooltip();
            },
            error: function (res) {
                showSweetAlertError('Thất bại');
                if (typeof res.token != 'undefined') {
                    $('.tokenCSRF').val(res.token);
                }
                reject(res)
            }
        });
    })
}
//Send Ajax
const sendAjaxForm = ($form, type = "GET") => {
    return new Promise((resolve, reject) => {
        let $loader =  $form.parents('.modal-content');
        let href = $form.attr('action');
        let data = new FormData($form[0]);
        jqSpinnerLoader($loader)
        sendAjax(href, data, type).then(res => {
            resolve(res);
            jqSpinnerLoader($loader,false)
        }).catch(error => {
            reject(error)
            jqSpinnerLoader($loader,false)
        })
    })
}
//FORM
//focus input, textarea first
const fousFirstForm = (form) => {
    $(form).find('input:not([type="file"]),textarea').first().focus();
}
//Reset Form
const resetForm = (form) => {
    form.find(`input:not([type="hidden"],[type="checkbox"],[type="radio"],.noReset),textarea`).val('');
    form.find('select:not(.noReset) option[value=""]').prop('selected', true).trigger('change');
    // form.find('select:not(.noReset) option:eq(0)').prop('selected', true).trigger('change');
    form.find('input[type="checkbox"]:not(.noReset)').prop('checked', false).trigger('change');
    form.find('input[type="radio"]:not(.noReset)').prop('checked', false).trigger('change');
    form.validator('destroy');
    return form;
}
//Map Data Form
const mapDataForm = (form, data, hidden = false) => {
    return new Promise((resolve, reject) => {
        for (let item in data) {
            let inputElement = form.find(`[name="${item}"]:not([type="file"],.noMapping)`);
            let inputType = inputElement.attr('type');
            if (data[item] && inputElement.length && !['checkbox', 'radio'].includes(inputType)) {
                if (moment(data[item], "YYYY-MM-DD", true).isValid()) {
                    inputElement.val(moment(data[item], "YYYY-MM-DD").format('DD/MM/YYYY'));
                } else if (moment(data[item], "YYYY-MM-DD HH:mm:ss", true).isValid()) {
                    inputElement.val(moment(data[item], "YYYY-MM-DD HH:mm:ss").format('DD/MM/YYYY HH:mm'));
                } else {
                    inputElement.val(data[item]);
                }
                form.find(`select[name="${item}"]`).trigger('change');
                // form.find(`input[name="${item}"].numberPrice`).trigger('change');
            } else if (['checkbox'].includes(inputType)) {
                if (parseInt(data[item])) {
                    inputElement.prop("checked", true);
                } else {
                    inputElement.prop("checked", false);
                }
                inputElement.trigger('change');
            } else if (['radio'].includes(inputType)) {
                inputElement.prop("checked", false);
                if (parseInt(data[item])) {
                    inputElement.each(function () {
                        if ($(this).val() == parseInt(data[item])) {
                            $(this).prop("checked", true)
                        }
                    })
                }
                inputElement.trigger('change');
            } else {
                if (hidden && inputElement.length) {
                    inputElement.parents('.form-group').addClass('hidden');
                }
            }
        }
        form.validator('destroy').validator('update');
        resolve(data);
    })

}
//Get Data Form API
const getDataFormApi = (url, typeAjax = "GET") => {
    return new Promise((resolve) => {
        if (url) {
            $.ajax({
                type: typeAjax,
                url: url,
                data: null,
                dataType: "json",
                success: function (res) {
                    if (typeof res.logout != 'undefined') {
                        window.location.reload();
                    } else {
                        if (typeof res.error == 'undefined') {
                            if (typeof res.token != 'undefined') {
                                $('.tokenCSRF').val(res.token.value);
                            }
                            resolve(res);
                        } else {
                            resolve()
                            showErrorAjax(res);
                        }
                    }
                }
            });
        } else {
            resolve()
        }
    });
}
//Modal Form
const showModalForm = (modal,cbSubmit=false,cbShow=()=>{},cbHite=()=>{},hasHide = true) => {
    let $form = $(modal).find('form');
    $(modal).on('shown.bs.modal', function (e) {
        e.preventDefault();
        fousFirstForm($form);
        let $btnAction = $(e.relatedTarget);
        let urlAction = $btnAction.data('action');
        let urlGet = $btnAction.data('get');
        let typeAjax = $btnAction.data('type');
        typeAjax = typeAjax ? typeAjax : 'GET';
        if (urlGet && typeAjax) {
            getDataFormApi(urlGet, typeAjax).then((res) => {
                if(res.status == 200){
                    mapDataForm($form, res.data).then(() => {
                        cbShow(res.data,modal,$btnAction);
                        $form.validator('destroy').validator('update');
                        // inputGroupLoader();
                    });
                }
            })
        } else {
            cbShow(false,modal,$btnAction);
            $form.validator('destroy').validator('update');
        }
        if (typeof cbSubmit === "function" && urlAction) {
            $form.attr('action',urlAction);
            $form.off('submit').validator().on('submit', function (e) {
                if ($form.find(`[type="submit"],.submitAjax`).hasClass('disabled')) {
                    e.preventDefault();
                } else {
                    if (e.isDefaultPrevented()) return;
                    e.preventDefault();
                    sendAjaxForm($form, 'POST').then(data => {
                        cbSubmit(data);
                        if (hasHide) {
                            $(modal).modal('hide');
                        }
                    })
                }
            })
            $form.off('click','.submitAjax').on('click','.submitAjax',function (e) {
                e.preventDefault();
                $form.trigger('submit');
            })
        }
    });
    $(modal).on('hidden.bs.modal', function (e) {
        e.preventDefault();
        resetForm($form);
        cbHite();
    });
}
const showModalView = (modal, cbShow = () => {}, cbHite = () => {}) => {
    $(modal).on('shown.bs.modal', function (e) {
        e.preventDefault();
        let $btnAction = $(e.relatedTarget);
        let urlGet = $btnAction.data('get');
        let typeAjax = $btnAction.data('type');
        if (urlGet && typeAjax) {
            getDataFormApi(urlGet, typeAjax).then((res) => {
                if(res.status == 200){
                    cbShow(res.data,modal,$btnAction);
                }
            })
        } else {
            cbShow(false,modal,$btnAction);
        }
    });
    $(modal).on('hidden.bs.modal', function (e) {
        e.preventDefault();
        cbHite();
    });
}
//Upload File
const uploadFile = (filename, type = (/\.(xlsx|xls)$/i), size = 2) => {
    return new Promise((resolve, reject) => {
        if ($(filename).length) {
            $(filename).unbind('change').change(function (e) {
                e.preventDefault();
                let _this = this;
                let files = $(_this)[0].files;
                let textfile = [];
                for (let i = 0; i < files.length; i++) {
                    if (typeof files[i] != undefined) {
                        let importfile = files[i];
                        // let importfile = $(_this)[0].files[0];
                        // console.log($(_this)[0].files.length);
                        if (importfile.size <= size * 1024 * 1024) {
                            if (type.test(importfile.name)) {
                                textfile.push(importfile.name);
                                // $(_this).parents('.custom-file').find('.custom-file-label').
                            } else {
                                showSweetAlertError(`Tập tin không đúng định dạng`);
                                $(_this).parents('.custom-file').find('.custom-file-label').text('(scan ảnh hoặc file pdf)');
                                reject(this);
                            }
                        } else {
                            showSweetAlertError(`Tập tin không tải lên không quá ${size}M`);
                            $(_this).parents('.custom-file').find('.custom-file-label').text('(scan ảnh hoặc file pdf)');
                            reject(this);
                        }
                    }
                }
                if (textfile.length) {
                    $(_this).parents('.custom-file').find('.custom-file-label').text(textfile.join(", "));
                }
                resolve(this);
            });
        }
    })
}
const tableDataRow = (boxTable) =>  {
	let reloadTable = () => {
		let rows = $(boxTable).find('table tbody tr:not(.d-none)');
		if(rows.length){
			rows.each((index,item) => {
				$(item).find('td:first').text(index + 1);
				$(item).find('input,select').each(function (i,input) {
					let name = $(input).data('name');
					$(input).removeClass('noS2Loader').prop('required',true);
					$(input).attr('name',`${name}[${index}]`);
				});
			})
		}
		select2Loader(boxTable);
	}
	$(boxTable).on('click','.addNewRow', function (e) {
		e.preventDefault();
		let table = $(boxTable).find('table');
		let newRow = $(boxTable).find('table tbody tr.d-none:first').clone();
		newRow.removeClass('d-none');
		table.append(newRow);
		reloadTable();
	});
	// Delete row on delete button click
	$(boxTable).on("click",".deleteRow", function(e){
		e.preventDefault();
		let table = $(boxTable).find('table');
		if(table.find('tbody tr:not(.d-none)').length > 0){
			$(this).parents("tr").remove();
		}
		reloadTable();
	});
}
//
const boxUploadFile = (box, fileType=(/\.(png|jpg)$/i)) => {
    if(document.querySelector(box)){
        let dragDropText = document.querySelector(`${box} .dynamic-message`);
        let inputFile = document.querySelector(`${box} .default-file-input`);
        let uploadedFile = document.querySelector(`${box} .file-block`);
        let label = document.querySelector(`${box} .label`);
        let dataTransfer = new DataTransfer();
        let transferRemove = (nameFile) => {
            let files = dataTransfer.files;
            for (let i = 0; i < files.length; i++) {
                if(typeof files[i] != 'undefined'){
                    if(files[i].name == nameFile){
                        dataTransfer.items.remove(i);
                    }
                }                
            }
            return dataTransfer;
        }
        let isAdvancedUpload = function() {
            let div = document.createElement('div');
            return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
        }();
        $(box).off('change','.default-file-input').on('change','.default-file-input', function (e) {
            e.preventDefault();
            let files = inputFile.files;
            checkUploadFile(files,10,fileType).then(()=>{
                uploadedFile.innerHTML="";
                inputFile.files = dataTransfer.files;
                for (let i = 0; i < files.length; i++) {
                    if(typeof files[i] != 'undefined'){
                        let file = files[i];
                        let boxClone = document.querySelector(`${box} .boxClone`).cloneNode(true);
                        boxClone.querySelector('.file-name').innerHTML = file.name;
                        boxClone.querySelector('.file-size').innerHTML = (file.size/1024).toFixed(1) + " KB";
                        boxClone.classList.remove('boxClone','d-none');
                        uploadedFile.appendChild(boxClone);
                        dataTransfer.items.add(file);
                    }
                }
                inputFile.files = dataTransfer.files;
                dragDropText.innerHTML = 'Thêm tập tin';
                label.innerHTML = `hoặc kéo thả`;
                console.log(inputFile.files);
            })
        });
        if(isAdvancedUpload) {
            $(box).off("drag dragstart dragend dragleave",'.drag-file-area').on("drag dragstart dragend dragleave",'.drag-file-area', (e) => {
                e.preventDefault();
                e.stopPropagation();
            });
            $(box).off('dragover dragenter','.drag-file-area').on('dragover dragenter','.drag-file-area', (e) => {
                e.preventDefault();
                e.stopPropagation();
                dragDropText.innerHTML = 'Thả tập tin vào đây';
                label.innerHTML = '';
            });
            $(box).off('click','.remove-file-icon').on('click','.remove-file-icon', function(e) {
                e.preventDefault();
                let inputClone = $(this).parents('.inputClone');
                let nameFile = inputClone.find('.file-name').text();
                dataTransfer = transferRemove(nameFile);
                inputFile.files = dataTransfer.files;
                inputClone.remove();
                console.log(inputFile.files);
            });
            $(box).off('drop','.drag-file-area').on('drop','.drag-file-area', (e) => {
                e.preventDefault();
                e.stopPropagation();
                let files = e.originalEvent.dataTransfer.files;
                checkUploadFile(files,10,fileType).then(()=>{
                    uploadedFile.innerHTML="";
                    let dataTransfer = new DataTransfer ();
                    inputFile.files = dataTransfer.files;
                    for (let i = 0; i < files.length; i++) {
                        if(typeof files[i] != 'undefined'){
                            let file = files[i];
                            let boxClone = document.querySelector(`${box} .boxClone`).cloneNode(true);
                            boxClone.querySelector('.file-name').innerHTML = file.name;
                            boxClone.querySelector('.file-size').innerHTML = (file.size/1024).toFixed(1) + " KB";
                            boxClone.classList.remove('boxClone','d-none');
                            uploadedFile.appendChild(boxClone);
                            dataTransfer.items.add(file);
                        }
                    }
                    inputFile.files = dataTransfer.files;
                    console.log(inputFile.files);
                })
                dragDropText.innerHTML = 'Thêm tập tin';
                label.innerHTML = `hoặc kéo thả`;
            })
        }
    }
}
// getBrowserName
const getBrowserName = (userAgent) => {
    // The order matters here, and this may report false positives for unlisted browsers.
    if (userAgent.includes("Firefox")) {
        // "Mozilla/5.0 (X11; Linux i686; rv:104.0) Gecko/20100101 Firefox/104.0"
        return "Mozilla Firefox";
    } else if (userAgent.includes("SamsungBrowser")) {
        // "Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-G955F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.4 Chrome/67.0.3396.87 Mobile Safari/537.36"
        return "Samsung Internet";
    } else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
        // "Mozilla/5.0 (Macintosh; Intel Mac OS X 12_5_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36 OPR/90.0.4480.54"
        return "Opera";
    } else if (userAgent.includes("Edge")) {
        // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
        return "Microsoft Edge (Legacy)";
    } else if (userAgent.includes("Edg")) {
        // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36 Edg/104.0.1293.70"
        return "Microsoft Edge (Chromium)";
    } else if (userAgent.includes("Chrome")) {
        // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"
        return "Google Chrome or Chromium";
    } else if (userAgent.includes("Safari")) {
        // "Mozilla/5.0 (iPhone; CPU iPhone OS 15_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6 Mobile/15E148 Safari/604.1"
        return "Apple Safari";
    } else {
        return "unknown";
    }
}
//copyToClipboard
const copyToClipboard = (btn = '.copyToClipboard') => {
    $(btn).click(async function (e) { 
        e.preventDefault();
        let $this = $(this);
        let clipboard = new ClipboardJS(btn);
        clipboard.on('success', function (e) {
            e.clearSelection();
            $this.find('span').text('Đã sao chép');
            $this.find('i').removeClass('fa-copy').addClass('fa-clipboard-check');
        });
        clipboard.on('error', function (e) {
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
        });
    });
}
//btnShareUrl
const btnShareUrl = (btn = '.btnShareUrl') => {
    $(btn).click(async function (e) { 
        e.preventDefault();
        let $this = $(this);
        let link = $this.attr('data-url');
        if(!navigator.share) return;
        let shareData = {
            title: "",
            text: "",
            url: link,
        };
        await navigator.share(shareData);
    });
}
//
const deleteSingle = (button=".deleteItem") => {
    $(button).click(function (e) {
        let link = $(this).data('href');
        e.preventDefault();
        showSweetAlert(()=>{
            sendAjax(link,[],'POST').then(()=>{
                window.location.reload();
            })
        })
    });
}