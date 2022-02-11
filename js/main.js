$(function(){

   $('.header-slider').slick({
      dots: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg" alt=""></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg" alt=""></button>',
      vertical: true,
      responsive: [
         {
         breakpoint: 361,
         settings: {
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
         }   
         }
         
      ]
   });

   $('.product__name').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      focusOnSelect: true,
      prevArrow: '<button type="button" class="product-prev"><img src="images/product-prev.svg" alt=""></button>',
      nextArrow: '<button type="button" class="product-next"><img src="images/product-next.svg" alt=""></button>',      
      asNavFor: '.product__content',
      centerMode:true,
      vertical:true,
      responsive: [
         {
         breakpoint: 891,
         settings: {             
            vertical: false,
            slidesToShow: 3,
            arrows: false,
            dots: true
         },
         breakpoint: 471,
         settings: {           
            vertical: false,
            slidesToShow: 1,
            arrows: false,
            dots: true
            }
         } 
      ]
    });
    $('.product__content').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.product__name',      
     fade: true,
     
     arrows: false
    });

    $('.menu__btn').on('click', function(){
       $('.menu__list').toggleClass('menu__list--active');
    });

});