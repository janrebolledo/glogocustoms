import styles from '../styles/Carousel.module.scss';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import Image from 'next/image';
import carouselImage1 from '../public/lightboxes/_MG_2398.jpg';
import carouselImage2 from '../public/lightboxes/_MG_2337.jpg';
import carouselImage3 from '../public/lightboxes/_MG_2377.jpg';
import carouselImage4 from '../public/lightboxes/_MG_2503.jpg';

import Jumbotron from "../components/Jumbotron";


import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper';

SwiperCore.use([Autoplay,Pagination,Navigation]);

export default function Carousel() {
  return (
    <div className={styles.carousel}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        // navigation
        pagination={{
          "clickable": true
        }}
        className="mySwiper"
        autoplay
      >
        <SwiperSlide><div className={styles.carousel__imageContainer}><img className={styles.carousel__image} alt="" src={carouselImage1.src} /></div></SwiperSlide>
        <SwiperSlide><div className={styles.carousel__imageContainer}><img alt="" src={carouselImage2.src} /></div></SwiperSlide>
        <SwiperSlide><div className={styles.carousel__imageContainer}><img alt="" src={carouselImage3.src} /></div></SwiperSlide>
        <SwiperSlide><div className={styles.carousel__imageContainer}><img alt="" src={carouselImage4.src} /></div></SwiperSlide>
      </Swiper>
    </div>
  )
}