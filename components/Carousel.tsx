import styles from '../styles/Carousel.module.scss';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';
import carouselImage1 from '../public/lightboxes/image0.jpg';
import carouselImage2 from '../public/lightboxes/PXL_20210925_010154795.jpg';
import carouselImage3 from '../public/lightboxes/PXL_20211006_053135011.jpg';
import carouselImage4 from '../public/lightboxes/PXL_20211006_235910478.jpg';

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
      >
        <SwiperSlide><Jumbotron /><img className={styles.carousel__image} alt="" src={carouselImage1.src} /></SwiperSlide>
        <SwiperSlide><img alt="" src={carouselImage2.src} /></SwiperSlide>
        <SwiperSlide><img alt="" src={carouselImage3.src} /></SwiperSlide>
        <SwiperSlide><img alt="" src={carouselImage4.src} /></SwiperSlide>
      </Swiper>
    </div>
  )
}