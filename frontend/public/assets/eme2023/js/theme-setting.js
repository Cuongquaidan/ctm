/*=====================
      Color Picker
==========================*/
var color_picker1 = document.getElementById("colorPick").value;
document.getElementById("colorPick").onchange = function () {
    color_picker1 = this.value;
    document.body.style.setProperty("--theme-color", color_picker1);
    document.body.style.setProperty("--theme-color-rgb", color_picker1);
};

/*========================
 Dark setting js
 ==========================*/


/*========================
   RTL setting js
   ==========================*/
$(".rtl").on("click", function () {
    if ($("body").hasClass("ltr")) {
        $("html").attr("dir", "rtl");
        $("body").removeClass("ltr");
        $("body").addClass("rtl");
        $("#rtl-link").attr("href", "assets/css/vendors/bootstrap.rtl.css");
    } else {
        $("html").attr("dir", "");
        $("body").removeClass("rtl");
        $("body").addClass("ltr");
        $("#rtl-link").attr("href", "assets/plugins/bootstrap/css/bootstrap.min.css");
    }
});
