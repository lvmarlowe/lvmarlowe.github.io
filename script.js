var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  centerSlide: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    800: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
