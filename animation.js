$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".navbar-right , .navbar-brand").css({
                "padding": "10px",
                "font-size": "14px"
            })
        } else {
            $(".navbar-right , .navbar-brand").css({
                "padding": "15px",
                "font-size": "19px"
            })

        }
    })
})


$(document).ready(function () {
    $(".navbar").animate({
        top: '80px',
        opacity: '1'
    }, 1000)


})

$(document).ready(function () {
    setInterval(function () {
        $(".jumbotron i").fadeOut(function () {

            $(this).fadeIn();

        });
    }, 1000)
});