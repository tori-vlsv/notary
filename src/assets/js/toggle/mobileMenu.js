import { disablePageScroll, enablePageScroll } from "scroll-lock";

function mobileMenu() {
  let menu = $('.menu');
  let button = $('.header__burger');
  let close = $('.menu__close');
  let scrollableElement = document.querySelector('.menu__inner');
  button.on('click', function() {
    menu.show();
    disablePageScroll(scrollableElement);
  });
  close.on('click', function() {
    menu.hide();
    enablePageScroll();
  });
}
mobileMenu();