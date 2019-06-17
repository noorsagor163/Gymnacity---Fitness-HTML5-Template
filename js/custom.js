$(function () {

  "use strict";

  // =================== Preloader Js Start ===============

  $(window).on('load', function () {
    $(".holder").delay(500).fadeOut(500);
  });

  // =================== Preloader Js End ===============

  // ================== Background Video Js Start ==================

  jQuery(".player").YTPlayer();

  // ================== Background Video Js End ==================

  // ============= Closes responsive menu when a scroll link is clicked Start =========

  $('.nav-link').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });

  // ============= Closes responsive menu when a scroll link is clicked End =========

  // ================== Search Hide/Show Js Start ==================

  $(".search").on('click', function () {
    $(".menu-item").addClass("hide");
    $(".search-form").addClass("show");
    $(".search-close").addClass("show");
    $(".search").fadeOut(500);
  });
  $(".search-close").on('click', function () {
    $(".menu-item").removeClass("hide");
    $(".search-form").removeClass("show");
    $(".search-close").removeClass("show");
    $(".search").fadeIn(500);
  });

  // ================== Search Hide/Show Js End ==================

  //==================Animated Scroll Start==================

  var html_body = $('html, body');
  $('nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        html_body.animate({
          scrollTop: target.offset().top - 50
        }, 1500);
        return false;
      }
    }
  });

  //==================Animated Scroll End==================

  // ================== Banner Slide Js Start ==================

  $('.banner-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    fade: false,
    dots: true,
    prevArrow: '.left',
    nextArrow: '.right',
    speed: 1500,
    autoplaySpeed: 2500,
    pauseOnHover: true,
  });

  // ================== Banner Slide Js End ==================

  // ================== Venobox Js Start ==================

  $('.venobox').venobox();

  // ================== Venobox Js End ==================

  // ================== Classes Slide Js Start ==================

  $('.classes-slide').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    fade: false,
    dots: false,
    prevArrow: '.cleft',
    nextArrow: '.cright',
    speed: 1500,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // ================== Classes Slide Js End ==================

  // ================== Trainers Slide Js Start ==================

  $('.trainers-slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    fade: false,
    dots: false,
    prevArrow: '.tleft',
    nextArrow: '.tright',
    speed: 1500,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // ================== Trainers Slide Js End ==================

  //==================Counter JS Start==================

  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  //==================Counter JS End==================

  // ================== Testimonial Slide Js Start ==================

  $('.test-slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    fade: false,
    dots: false,
    prevArrow: '.teleft',
    nextArrow: '.teright',
    speed: 1500,
    autoplaySpeed: 1500,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // ================== Testimonial Slide Js End ==================

  // ================== Back To Top Js Start ==================

  $(".back2top").on("click", function () {
    $("html, body").animate({
      scrollTop: 0
    }, 700);
  });
  $(window).on("scroll", function () {
    var scrolling = $(this).scrollTop();
    if (scrolling >= 300)
      $(".back2top").fadeIn(500);
    else
      $(".back2top").fadeOut(500);
  });

  // ================== Back To Top Js Start ==================

});