import Swiper from "swiper";
import "swiper/css";

const swiper = new Swiper(".swiper-container", {
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",
  slideToClickedSlide: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    slideShadows: false,
    stretch: 70,
  },
});
