import { Autoplay, Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import styles from "../styles/Carousel.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import carouselImage1 from "../public/lightboxes/_MG_2398.jpg";
import carouselImage2 from "../public/lightboxes/_MG_2337.jpg";
import carouselImage3 from "../public/lightboxes/_MG_2377.jpg";
import carouselImage4 from "../public/lightboxes/_MG_2503.jpg";

export default function Carousel() {
  return (
    <div className={styles.carousel}>
      <Swiper
        // install Swiper modules
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={500}
        loop={true}
      >
        <SwiperSlide>
          <img
            src={carouselImage1.src}
            className={styles.carousel__image}
            alt="Glogo Example"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={carouselImage2.src}
            className={styles.carousel__image}
            alt="Glogo Example"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={carouselImage3.src}
            className={styles.carousel__image}
            alt="Glogo Example"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={carouselImage4.src}
            className={styles.carousel__image}
            alt="Glogo Example"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
