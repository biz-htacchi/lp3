//==============================================//
// Swiper
//==============================================//
var swiper = new Swiper('.swiper', {
  loop: false,

  initialSlide: 2, // 初期表示のスライドを2番目に設定

  // SP
  slidesPerView: 1,
  spaceBetween: 15,
  //PC
  breakpoints: {
    768: {
      slidesPerView: 3,
      slidesPerGroup: 1, // 1つずつスライドを送る
      spaceBetween: 15,
    },
  },

  watchOverflow: true,
  centeredSlides: true, // 中央寄せ

  pagination: {
    el: '.swiper-pagination',
    clickable: true,

    renderBullet: function (index, className) {
      const realSlidesCount = this.el.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)').length;

      // 最初のドット（indexが0）と最後のドットを非表示にする
      if (index === 0 || index === (realSlidesCount - 1)) {
        return '<span class="' + className + ' my-hidden-bullet"></span>';
      }
      return '<span class="' + className + '"></span>';
    },
  },

});

