import gsap from "gsap";

function header() {
  let header = $('.header');
  let downFlag = false;
  let upFlag = false;
  let prevScrollpos = $(window).scrollTop();
  $(window).on('scroll', function() {
    let currentScrollPos = $(window).scrollTop();
    if ($(window).scrollTop() > $('.hero-main').outerHeight() && !downFlag) {
      header
        .css('position', 'fixed').addClass('scrolled').addClass('active');
        gsap
          .fromTo(
            header,
            0.3,
            { top: '-175px' },
            { top: 0 }
          )
      upFlag = false;
      downFlag = true;
    }
    if (prevScrollpos > currentScrollPos && $(window).scrollTop() < $('.hero-main').outerHeight() && !upFlag) {
      header.css('position', 'absolute').css('top', '0').removeClass('scrolled').removeClass('active');
      upFlag = true;
      downFlag = false;
    }
    prevScrollpos = currentScrollPos;
  });
}
if (window.location.pathname == '/') {
  header();
} else {
  $('header').addClass('scrolled').css('position', 'fixed');
  let header = $('header');
  function checker() {
    if (window.pageYOffset !== 0) {
      header.addClass('active');
    } else {
      header.removeClass('active');
    }
  }
  checker();
  $(window).on('scroll', function() {
    checker();
  })
}