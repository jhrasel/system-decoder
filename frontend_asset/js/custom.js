$(function() {

    // Dropdown Menu
    $('.dropdown').hover(function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
        },
        function()
        {
            $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
        }
   );

    //banner
    $('.owl-carousel.banner_slider').owlCarousel({
        loop:true,
        margin:0,
        autoplay: true,
        autoPlaySpeed: 1000,
        autoPlayTimeout: 1000,
        center: true,
        nav:false,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            }
        }
    });



    //Category
    $('.owl-carousel.category_slier_item').owlCarousel({
        loop:true,
        margin:0,
        autuplay: true,
        center: false,
        nav:true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:6
            },
            1000:{
                items:8
            },
            1800:{
                items:10,
                margin:5,
            },
        }
    });


    //free_delivar_item
    $('.owl-carousel.free_delivar_slider').owlCarousel({
        loop:true,
        margin:10,
        autuplay: true,
        center: true,
        nav:false,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            },
            1280:{
                items:5
            }
        }
    });


    // Sticky Menu
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('.navbar').addClass('sticky')
        } else{
            $('.navbar').removeClass('sticky')
        }
    });

    // BACK TO TOP

    let toTopBtn = document.getElementById('back-top__content--desk');

    toTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: "smooth"});
    });

    //hide/show button on scroll up/down
    let scrollPos = 0;

    window.addEventListener('scroll', function(){

    // detects new state and compares it with the new one
    if ((document.body.getBoundingClientRect()).top > scrollPos) {
        console.log('scrolling down')

        document.getElementById('back-top').classList.remove('active');

    } else {
            document.getElementById('back-top').classList.add('active');
        console.log('scrolling up')
    }
    // saves the new position for iteration.
    scrollPos = (document.body.getBoundingClientRect()).top;
    });





});
