import styles from '../styles/Carousel.module.scss';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image'
import carouselImage1 from '../public/lightboxes/image0.jpg'
import carouselImage2 from '../public/lightboxes/PXL_20210925_010154795.jpg'
import carouselImage3 from '../public/lightboxes/PXL_20211006_053135011.jpg'
import carouselImage4 from '../public/lightboxes/PXL_20211006_235910478.jpg'

import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper';

SwiperCore.use([Autoplay,Pagination,Navigation]);

export default function Carousel() {
  return (
    <div className={styles.carousel_container}>
      <h1>Gallery</h1>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        navigation={true}
        pagination={{
          "clickable": true
        }}
        className="mySwiper"
      >
        <SwiperSlide><Image alt="" src={carouselImage1} width="1200" height="1400"></Image></SwiperSlide>
        <SwiperSlide><Image alt="" src={carouselImage2} width="1200" height="1400"></Image></SwiperSlide>
        <SwiperSlide><Image alt="" src={carouselImage3} width="1200" height="1400"></Image></SwiperSlide>
        <SwiperSlide><Image alt="" src={carouselImage4} width="1200" height="1400"></Image></SwiperSlide>
      </Swiper>
    </div>
  )
}