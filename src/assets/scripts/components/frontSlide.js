import Swiper, { Navigation, Autoplay } from 'swiper';

export default class FrontSlide {
  constructor() {
    this.init();
  }
  init() {
    var slide = new Swiper('.js-mainSwiper', {
      modules: [Navigation, Autoplay],
      speed: 800,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 28,
      centeredSlides: true,
      initialSlide: 1,
      effect: 'coverflow',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          spaceBetween: 80,
        },
        992: {
          spaceBetween: 166,
        },
      }
    });

  }
}