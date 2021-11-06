import Image from 'next/image'
import styles from '../styles/ProductListView.module.scss';
import Link from 'next/dist/client/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export interface IProduct {
    id: string
    name: string
    price: number
    url: string
    description: string
    image: StaticImageData
    image2: StaticImageData
}

interface IProductProps {
    product: IProduct
}

import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper';

SwiperCore.use([Autoplay,Pagination,Navigation]);

const Product = (props: IProductProps) => {
    return (
        <Link href={props.product.url}>
            <div className={styles.product}>
            <div className={styles.carousel}>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    navigation
                    pagination={{ clickable: true }}
                    className="mySwiper"
                >
                    <SwiperSlide><div className={styles.carousel__imageContainer}><img src={props.product.image.src} alt={props.product.image.src} /></div></SwiperSlide>
                    <SwiperSlide><div className={styles.carousel__imageContainer}><img src={props.product.image2.src} alt={props.product.image2.src} /></div></SwiperSlide>
                </Swiper>
            </div>
                <div className={styles.product__info}>
                    <h2 className={styles.product__title}>{props.product.name}</h2>
                    <div className={styles.product__price}>${props.product.price.toFixed(2)}</div>
                </div>
            </div>
        </Link>
    )
}

export default Product