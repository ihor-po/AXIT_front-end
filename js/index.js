$(document).ready(function(){
    $("#humburger").click(function () {

        if ($(".header__menu").is(":hidden"))
        {
            $(".header__menu").show(100);
        }
        else
        {
            $(".header__menu").hide(100);
        }

    })
});