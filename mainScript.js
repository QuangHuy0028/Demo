$(document).ready(function() {
    $('.carousel').carousel();
    $(this).scroll(function () {
        let heightTop = $(this).scrollTop();
        $('.carousel-image').css({
            'transform' : `translateY(${heightTop}px)`
        })
    });
    $('.btn-back-top').click(function() {
       $(window).scrollTop(0);
    });
})