// //Call AJAX
// const callAjax = (href,data={},type = "GET",ctype='json') => {
//     return new Promise((resolve) => {
//         $.ajax({
//             type: type,
//             url: href,
//             data: data,
//             dataType: ctype,
//             success: function (response) {
//                 if(typeof response.logout != 'undefined'){
//                     window.location.reload();
//                 }else{
//                     if (typeof response.error == 'undefined') {
//                         if(typeof response.token != 'undefined'){
//                             $('.tokenCSRF').val(response.token.value);
//                             $('.tokenCSRF').attr('name', response.token.key);
//                         }
//                         resolve(response);
//                     } else {
//                         showErrorAjax(response);
//                     }
//                 }
//                 $('[data-tooltip="tooltip"]').tooltip()
//             },
//             error: function (error) {
//                 showSweetAlertError('Thất bại');
//             }
//         });
//     })
// }
// //AJAX GET DATA
// const ajaxS2GetStateByCountryId = (countryId) => {
//     return new Promise((resolve, reject) => {
//         callAjax(`/ajaxS2GetStateByCountryId`,{countryId}).then((response)=>{
//             resolve(response);
//         })
//     })
// }
// const ajaxS2GetCityByStateId = (stateId) => {
//     return new Promise((resolve, reject) => {
//         callAjax(`/ajaxS2GetCityByStateId`,{stateId}).then((response)=>{
//             resolve(response);
//         })
//     })
// }
// const ajaxS2GetWardByCityId = ({countryId,cityId}) => {
//     return new Promise((resolve, reject) => {
//         callAjax(`/ajaxS2GetWardByCityId`,{countryId,cityId}).then((response)=>{
//             resolve(response);
//         })
//     })
// }
// const ajaxGeShippingPrice = (storeId,addressId) => {
//     storeId = storeId ? parseInt(storeId) : 0;
//     addressId = addressId ? parseInt(addressId) : 0;
//     return new Promise((resolve, reject) => {
//         callAjax(`/ajaxGeShippingPrice?store_id=${storeId}&address_id=${addressId}`).then((response)=>{
//             resolve(response);
//         })
//     })
// }
