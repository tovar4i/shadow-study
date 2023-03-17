const slider = document.querySelector(".swiper-container");

const swiper = new Swiper(slider, {
  slidesPerView: 3,
  spaceBetween: 80,
  // autoplay: {
  //   delay: 2000,
  // },
  centeredSlides: true,
  loop: true,
});
