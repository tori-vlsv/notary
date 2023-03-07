import Swiper  from 'swiper'

function questionsSlider() {
  new Swiper('.questions__slider__container', {
    allowTouchMove: true,
    slidesPerView: 1,
    speed: 600,
    grabCursor: true,
    spaceBetween: 16,
    breakpoints: {
      768: {
        allowTouchMove: false,
        grabCursor: false,
        spaceBetween: 24,
        slidesPerView: 3,
      },
      1360: {
        allowTouchMove: false,
        grabCursor: false,
        spaceBetween: 90,
        slidesPerView: 3,
      }
    }
  })
}
questionsSlider();