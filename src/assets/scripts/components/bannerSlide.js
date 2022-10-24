import Swiper, { FreeMode } from 'swiper';

export default class BannerSlide {
  constructor() {
    this.init();
  }
  init() {
    var slide = new Swiper('.js-bannerSwiper', {
      modules: [FreeMode],
      spaceBetween: 8,
      initialSlide: 0,
      slidesPerView: 'auto',
      freeMode: {
        enabled: true,
      }, 
      breakpoints: {
        768: {
          spaceBetween: 16,
        },
      }
    });
  }
}