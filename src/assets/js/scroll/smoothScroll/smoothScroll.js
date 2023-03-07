import SmoothScroll from "smooth-scroll";

function smoothScroll() {
  let offset;
  if ($(window).width() < 1360) {
    offset = 120;
  } else {
    offset = 200;
  }
  new SmoothScroll('a[href*="#"]', {
    speed: 1500,
    after: function () {
      $("body").css("overflow", "");
    },
    offset: offset
  });
}
smoothScroll();
