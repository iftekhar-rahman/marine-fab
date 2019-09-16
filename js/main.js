jQuery(document).ready(function($){

    $(".menu-bars").on('click', function(){
        $('.mainmenu').addClass('active');
    });
    $(".close-btn").on('click', function(){
        $('.mainmenu').removeClass('active');
    });

    // $('#menu').slicknav();

    $(".header-area").sticky({ topSpacing: 0 });

    $(".mainmenu ul li").on('click', function(){
        $('.mainmenu ul li').removeClass('active');
        $(this).addClass('active');
    });


    $(".companies-logo-carousel").owlCarousel({
        items: 4,
        loop: true,
        nav: true,
        dots: false,
        autoplay: false,
        margin: 15,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1,
                margin: 10,
            },
            // breakpoint from 480 up
            480 : {
                items: 2,
            },
            // breakpoint from 768 up
            768 : {
                items: 3,
            },
            991 : {
                items: 4,
            }
        }
    });

    

    

    

});