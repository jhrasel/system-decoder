$(function() {


    // Preloader

    
    $(window).on('load',function(){
        $('.preloader').delay(100).fadeOut(100);
    });  


    //    ================= BACK TO TOP PART ============

     $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop:0}, 100);
    });
    
    //    ================= SCROLLING PART ============
  
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 200) {
            $('.back-to-top').fadeIn(800);
        } 
	else {
            $('.back-to-top').fadeOut(800);
        }
	
//    ================= ADD CLASS STICKY MENU PART ============

        if (scrolling > 300) {
            $('.navbar').addClass('bg');
        } else {
            $('.navbar').removeClass('bg'); 
        }
    });
    
    //animation scroll js

    var html_body = $('html, body');
    $('.navbar a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }
    });


    // service_slider
    $('.owl-carousel.service_slider').owlCarousel({
        // loop:true,
        margin:30,
        autoPlay: true,
        slideBy:2,
        dots:true,
        navs:false,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            1000:{
                items:1,
                loop:false
            },
            1200:{
                items:2,
                loop:false
            }
        }
    });

    // case_slider
    $('.owl-carousel.case_slider').owlCarousel({
        loop:true,
        margin:30,
        autoplay:false,
        dots:true,
        navs:false,
        slideBy:2,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        center: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1.1,
            },
            600:{
                items:2,
            },
            1000:{
                items:2.5,
            },
            1200:{
                items:4,
            }
        }
    });

    // blog Slider
    $('.owl-carousel.blog_slider').owlCarousel({
        loop:true,
        margin:30,
        dots:true,
        navs:false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            1000:{
                items:2,
            },
            1100:{
                items:3,
            }
        }
    });


    // our_clients_slider
    $('.owl-carousel.our_clients_slider_part').owlCarousel({
        loop:true,
        margin:30,
        autoplay:true,
        dots:true,
        navs:false,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            },
            1200:{
                items:3
            }
        }
    })





});
