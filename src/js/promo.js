const swiper = new Swiper(".gallerySwiper", {
  loop: true,
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
});
