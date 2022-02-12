$(function() {


     // Testimonials_slider
    $('.owl-carousel.Our_Lovely_Client_slider_item').owlCarousel({
        loop:true,
        margin:30,
        autuplay: true,
        center: true,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            }
        }
    });

    // Our Service
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });



   





});
