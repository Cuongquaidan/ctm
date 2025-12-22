const loginGoogle = (resGg, csrfToken) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "POST",
            url: "/ajaxLoginGoogle",
            data: { credential: resGg.credential, csrf_token: csrfToken },
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
window.onload = function () {
    const client = google.accounts.id;
    client.initialize({
        client_id:
            "534901325764-46nfc6kir84itg2jpmo6026lqhoih682.apps.googleusercontent.com",
        callback: async function (resGg) {
            $("body")
                .prepend(`<div class="boxSpinner rounded"><div class="spinner">
                                <div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div><div class="rect6"></div><div class="rect7"></div>
                            </div></div>`);
            let csrfToken = $(
                '#frmLogin input[name="csrf_token"],#frmRegister input[name="csrf_token"]'
            ).val();
            if (csrfToken) {
                let res = await loginGoogle(resGg, csrfToken);
                if (
                    res.status == 400 &&
                    res.error == "invalid_register_not_yet"
                ) {
                    let pathname = window.location.pathname;
                    let redirect = window.location.href;
                    window.location.href =
                        window.location.origin +
                        `/customers/registerGoogle?code=` +
                        resGg.credential +
                        (["/customers/register", "/customers/login"].includes(
                            pathname
                        )
                            ? ""
                            : `&redirect=${redirect}`);
                } else if (res.status == 400 && res.error && res.token) {
                    $("body .boxSpinner").remove();
                    if (typeof res.token != "undefined") {
                        $(".tokenCSRF").val(res.token);
                    }
                    console.log(res.error);
                } else {
                    window.location.reload();
                }
            } else {
                console.log("Csrf không hợp lệ");
            }
        },
    });
    let btnGoogle = document.getElementsByClassName("divLoginGoogle");
    for (let i = 0; i < btnGoogle.length; i++) {
        client.renderButton(btnGoogle[i], {
            size: "large",
            text: "Google",
            type: "icon",
        });
    }
    $(".btnLoginGoogle").click(function (e) {
        e.preventDefault();
        $(this).next().find(`[role="button"]`).trigger("click");
    });
};
(function (d, s, id) {
    var js,
        fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://accounts.google.com/gsi/client";
    fjs.parentNode?.insertBefore(js, fjs);
})(document, "script", "google-jssdk");
