import styles from '../styles/Carousel.module.scss';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image'
import sampleImage from '../public/halfmoon.jpg'

import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper';

SwiperCore.use([Autoplay,Pagination,Navigation]);

export default function Carousel() {
  return (
    <div className={styles.carousel_container}>
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
        <SwiperSlide><Image src={sampleImage} width="1200" height="800"></Image></SwiperSlide>
        <SwiperSlide><Image src={sampleImage} width="1200" height="800"></Image></SwiperSlide>
        <SwiperSlide><Image src={sampleImage} width="1200" height="800"></Image></SwiperSlide>
        <SwiperSlide><Image src={sampleImage} width="1200" height="800"></Image></SwiperSlide>
      </Swiper>
    </div>
  )
}