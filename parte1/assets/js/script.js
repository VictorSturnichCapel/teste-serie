$(function() {
    $('.fullbanner').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    });
});

$(function() {

    $('#mobile-menu').click(function() {
        $("div.menu").toggleClass("dropoff");
    });
    $('#dropdown-show').click(function() {
        $("#first-menu").toggleClass("dropoff").toggleClass("dropdown");
    });
    $('#subdropdown-show').click(function() {
        $("#second-menu").toggleClass("dropoff").toggleClass("sub-dropdown");
    });

    $('#mobile-search').click(function() {
        $("#search-input").toggleClass("dropoff");
    });
});
$(window).on('scroll', function () {
    var top = $(this).scrollTop()
    var $header = $('.header');

    if (top > 160) {
        $header.addClass('fixed');
    } else {
        $header.removeClass('fixed');
    }
});