import { disablePageScroll, enablePageScroll } from "scroll-lock";

function popupItems() {
  let button = $('.call-popup');
  let popup = $('.popup');
  let close = $('.popup__close');
  let bg = $('.popup__bg');
  let scrollableElement = document.querySelector('.popup form');
  button.on('click', function() {
    popup.toggleClass('active');
    bg.toggleClass('active');
    disablePageScroll(scrollableElement);
  });
  close.on('click', function() {
    popup.removeClass('active');
    bg.removeClass('active');
    $('.dropdown').removeClass('active');
    $('.popup__dropdown__body').hide();
    enablePageScroll();
  });
  bg.on('click', function() {
    popup.removeClass('active');
    bg.removeClass('active');
    $('.dropdown').removeClass('active');
    $('.popup__dropdown__body').hide();
    enablePageScroll();
  });
  
}
popupItems();