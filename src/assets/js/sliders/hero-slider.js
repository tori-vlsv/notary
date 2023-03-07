import Swiper, { Pagination, Autoplay } from 'swiper'

function heroSlider() {
  new Swiper('.hero__slider', {
    modules: [Pagination, Autoplay],
    speed: 800,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    grabCursor: true,
    spaceBetween: 20,
    pagination: {
      el: '.hero__wrapper .swiper-pagination',
      clickable: 'true',
      renderBullet: function (index, className) {
        return '<span class="'+ className +'">' + ++index + '</span>';
      },
    },
  });
}
heroSlider();