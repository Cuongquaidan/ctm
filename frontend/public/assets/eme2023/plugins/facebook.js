// appId: '543871944955281',
// version: 'v21.0' // Specify the Graph API version to use
const loginFacebook = (accessToken, csrfToken) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "POST",
            url: "/ajaxLoginFacebook",
            data: { credential: accessToken, csrf_token: csrfToken },
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
window.fbAsyncInit = function () {
    FB.init({
        appId: "543871944955281",
        cookie: true, // enable cookies to allow the server to access
        // the session
        xfbml: false, // parse social plugins on this page
        version: "v21.0", // Specify the Graph API version to use
    });
    FB.AppEvents.logPageView();
    // FB.getLoginStatus(function (response) {
    //     console.log(response);
    // });
    // FB.Event.subscribe('auth.login', function(response) {
    //     console.log(response);
    // });
    $(".btnLoginFacebook").click(function (e) {
        e.preventDefault();
        FB.getLoginStatus(function (resStatus) {
            if (resStatus.status === "connected") FB.logout();
            FB.login(function (response) {
                if (response.status === "connected") {
                    $("body")
                        .prepend(`<div class="boxSpinner rounded"><div class="spinner">
                        <div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div><div class="rect6"></div><div class="rect7"></div>
                    </div></div>`);
                    // console.log(response);
                    let accessToken = response?.authResponse?.accessToken;
                    let csrfToken = $(
                        '#frmLogin input[name="csrf_token"],#frmRegister input[name="csrf_token"]'
                    ).val();
                    if (csrfToken && accessToken) {
                        loginFacebook(accessToken, csrfToken).then((res) => {
                            if (
                                res.status == 400 &&
                                res.error == "invalid_register_not_yet"
                            ) {
                                let pathname = window.location.pathname;
                                let redirect = window.location.href;
                                window.location.href =
                                    window.location.origin +
                                    `/customers/registerFacebook?code=` +
                                    accessToken +
                                    ([
                                        "/customers/register",
                                        "/customers/login",
                                    ].includes(pathname)
                                        ? ""
                                        : `&redirect=${redirect}`);
                            } else if (
                                res.status == 400 &&
                                res.error &&
                                res.token
                            ) {
                                $("body .boxSpinner").remove();
                                if (typeof res.token != "undefined") {
                                    $(".tokenCSRF").val(res.token);
                                }
                                console.log(res.error);
                            } else {
                                window.location.reload();
                            }
                        });
                    } else {
                        console.log("Csrf hoặc Token không hợp lệ");
                    }
                } else {
                    console.log("disconnected");
                }
            });
        });
    });
};
(function (d, s, id) {
    var js,
        fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode?.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");
