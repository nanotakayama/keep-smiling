export default class gnavi {
  constructor() {
    this.init();
  }
  init() {
    let ham = document.querySelector('.js-humBtn');
    let gnav = document.querySelector('.js-gnav');
    let gnavBg = document.querySelector('.js-gnavBg');
    let spNav = document.querySelector('.p-header');
    let headLogo = document.querySelector('.p-header__logo');
    let state = false;
    let pos;
    
    if(ham){
      ham.addEventListener('click', function () {
        ham.classList.toggle('is-active');
        gnav.classList.toggle('is-open');
        gnavBg.classList.toggle('is-open');
        gnav.classList.toggle('is-trans');
        spNav.classList.toggle('is-hide');
        headLogo.classList.toggle('is-hide');

        if (state == false) {
          pos = $(window).scrollTop();
          $('body').addClass('is-fixed').css({'top': -pos});
          state = true;
        } else {
          $('body').removeClass('is-fixed').css({'top': 0});
          window.scrollTo(0, pos);
          state = false;
        }
      });

      $(window).on("scroll", function() {
        if ($(this).scrollTop() > 40) {
          $(".js-headerColor").addClass("is-color");
        } else {
          $(".js-headerColor").removeClass("is-color");
        }
      });

      $('.js-pageLink a[href*="#"]').click(function () {
        $(ham).removeClass('is-active');
        $(gnav).removeClass('is-open');
        $(gnavBg).removeClass('is-open');
        $(gnav).removeClass('is-trans');
        $(spNav).removeClass('is-hide');
        $(headLogo).removeClass('is-hide');
        $('body').removeClass('is-fixed').css({'top': 0});

        // var elmHash = $(this).attr('href');
        // var pos = $(elmHash).offset().top;
        // $('body,html').animate({scrollTop: pos}, 500);
        // return false;
      });
    }
  }
}