const swiper = new Swiper('.team__swiper', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,

    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      }
    }
  });