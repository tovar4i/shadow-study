const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 110,
  loop: true,

  centeredSlides: 3,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 110,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
