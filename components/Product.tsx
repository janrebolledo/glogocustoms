import Image from 'next/image'
import styles from '../styles/Product.module.scss';
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
    weight: number
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
            {/* <img className={styles.product__image} /> */}
            <div className={styles.product__info}>
                <h2 className={styles.product__title}>{props.product.name}</h2>
                <p className={styles.product__description}>{props.product.description}</p>
                <div className="product__price-button-container">
                    <div className={styles.product__price}>${props.product.price.toFixed(2)}</div>
                    <button
                        id="snipcart-product"
                        className={`snipcart-add-item ${styles.product__button}`}
                        data-item-id={props.product.id}
                        data-item-name={props.product.name}
                        data-item-price={props.product.price}
                        data-item-url={props.product.url}
                        data-item-image={props.product.image.src}
                        data-item-weight={props.product.weight}
                        data-item-custom1-name="Frame Color"
                        data-item-custom1-options="Black|White"
                        data-item-custom2-name="Glass Color"
                        data-item-custom2-options="Sweet Pea|Vintage Blush|Apple Red|Poppy Red|Paprika|Colonial Red|Magenta|Claret Wine|Cinnamon|Harvest Peach|Rustic Orange|Fire Orange|Strawflower|Summer Squash|Lemon Grass|Green Apple|Leafy Green|Moss Green|Eden|Oregano|Hunt Club Green|Deep Forest|Vintage Teal|Seaside|Aqua|French Blue|Oasis Blue|Lagoon|Midnight Blue|Slate Blue|Windflower Blue|Ink Blue|French Lilac|Silver Lilac|Augbergine|Blossim White|Heirloom White|Ivory Silk|Smokey Beige|Fossil|Stone Gray|Granite|Charcoal Gray|London Gray|Warm Caramel|Nutmeg|Espresso|Dark Walnut|Canyon Black"
                        data-item-custom3-name="DISCLAIMER"
                        data-item-custom3-type="readonly"
                        data-item-custom3-value="Read our FAQ for info on colors and more."
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product