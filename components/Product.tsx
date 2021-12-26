import Image from "next/image";
import styles from "../styles/Product.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface IProduct {
  id: string;
  name: string;
  price: number;
  url: string;
  description: string;
  image: StaticImageData;
  image2: StaticImageData;
  weight: number;
}

interface IProductProps {
  product: IProduct;
}

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Product = (props: IProductProps) => {
  function sizeSelect() {
    var e = document.getElementById("product__size-select");
    var selectedSize = e.value;

    var snipcartBtn = document.getElementById("snipcart-product");

    snipcartBtn.setAttribute("data-item-custom1-value", selectedSize);

    var productPrice = document.querySelector("product-price");
  }
  function frameSelect() {
    var e = document.getElementById("product__frame-select");
    var selectedFrame = e.value;

    var snipcartBtn = document.getElementById("snipcart-product");

    snipcartBtn.setAttribute("data-item-custom2-value", selectedFrame);

    var productPrice = document.querySelector("product-price");
  }
  function colorSelect() {
    var e = document.getElementById("product__color-select");
    var selectedColor = e.value;

    var snipcartBtn = document.getElementById("snipcart-product");

    snipcartBtn.setAttribute("data-item-custom3-value", selectedColor);

    var productPrice = document.querySelector("product-price");
  }
  return (
    <div className={styles.product}>
      <div className={styles.carousel}>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={styles.carousel__imageContainer}>
              <img
                src={props.product.image.src}
                alt={props.product.image.src}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.carousel__imageContainer}>
              <img
                src={props.product.image2.src}
                alt={props.product.image2.src}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* <img className={styles.product__image} /> */}
      <div className={styles.product__info}>
        <h2 className={styles.product__title}>{props.product.name}</h2>
        <p className={styles.product__description}>
          {props.product.description}
        </p>
        <div className="product__price-button-container">
          {/* <div id="product-price" className={styles.product__price}>${props.product.price}</div> */}
          <label>Size</label>
          <select id="product__size-select" onInput={sizeSelect}>
            <option value="8″x8″">8″x8″</option>
            <option value="12″x12″">12″x12″</option>
          </select>
          <label>Frame Color</label>
          <select id="product__frame-select" onInput={frameSelect}>
            <option value="Black">Black</option>
            <option value="White">White</option>
          </select>
          <label>Glass Color</label>
          <select id="product__color-select" onInput={colorSelect}>
            <option value="Sweet Pea">Sweet Pea</option>
            <option value="Vintage Blush">Vintage Blush</option>
            <option value="Poppy Red">Poppy Red</option>
            <option value="Paprika">Paprika</option>
            <option value="Colonial Red">Colonial Red</option>
            <option value="Magenta">Magenta</option>
            <option value="Claret Wine">Claret Wine</option>
            <option value="Cinnamon">Cinnamon</option>
            <option value="Harvest Peach">Harvest Peach</option>
            <option value="Rustic Orange">Rustic Orange</option>
            <option value="Fire Orange">Fire Orange</option>
            <option value="Strawflower">Strawflower</option>
            <option value="Summer Squash">Summer Squash</option>
            <option value="Lemon Grass">Lemon Grass</option>
            <option value="Green Apple">Green Apple</option>
            <option value="Leafy Apple">Leafy Apple</option>
            <option value="Moss Green">Moss Green</option>
            <option value="Eden">Eden</option>
            <option value="Hunt Club Green">Hunt Club Green</option>
            <option value="Deep Forest">Deep Forest</option>
            <option value="Vintage Teal">Vintage Teal</option>
            <option value="Seaside">Seaside</option>
            <option value="Aqua">Aqua</option>
            <option value="French Blue">French Blue</option>
            <option value="Oasis Blue">Oasis Blue</option>
            <option value="Lagoon">Lagoon</option>
            <option value="Midnight Blue">Midnight Blue</option>
            <option value="Slate Blue">Slate Blue</option>
            <option value="Windflower Blue">Windflower Blue</option>
            <option value="Ink Blue">Ink Blue</option>
            <option value="French Lilac">French Lilac</option>
            <option value="Silver Lilac">Silver Lilac</option>
            <option value="Augbergine">Augbergine</option>
            <option value="Blossom White">Blossom White</option>
            <option value="Heirloom White">Heirloom White</option>
            <option value="Ivory Silk">Ivory Silk</option>
            <option value="Smokey Beige">Smokey Beige</option>
            <option value="Fossil">Fossil</option>
            <option value="Stone Gray">Stone Gray</option>
            <option value="Granite">Granite</option>
            <option value="Charcoal Gray">Charcoal Gray</option>
            <option value="London Gray">London Gray</option>
            <option value="Warm Caramel">Warm Caramel</option>
            <option value="Nutmeg">Nutmeg</option>
            <option value="Espresso">Espresso</option>
            <option value="Dark Walnut">Dark Walnut</option>
            <option value="Canyon Black">Canyon Black</option>
          </select>
          <button
            id="snipcart-product"
            className={`snipcart-add-item ${styles.product__button}`}
            data-item-id={props.product.id}
            data-item-name={props.product.name}
            data-item-price={props.product.price}
            data-item-url={props.product.url}
            data-item-image={props.product.image.src}
            data-item-weight={props.product.weight}
            data-item-custom1-name="Size"
            data-item-custom1-options="8″x8″|12″x12″[+50.00]"
            data-item-custom2-name="Frame Color"
            data-item-custom2-options="Black|White"
            data-item-custom3-name="Glass Color"
            data-item-custom3-options="Sweet Pea|Vintage Blush|Apple Red|Poppy Red|Paprika|Colonial Red|Magenta|Claret Wine|Cinnamon|Harvest Peach|Rustic Orange|Fire Orange|Strawflower|Summer Squash|Lemon Grass|Green Apple|Leafy Green|Moss Green|Eden|Oregano|Hunt Club Green|Deep Forest|Vintage Teal|Seaside|Aqua|French Blue|Oasis Blue|Lagoon|Midnight Blue|Slate Blue|Windflower Blue|Ink Blue|French Lilac|Silver Lilac|Augbergine|Blossom White|Heirloom White|Ivory Silk|Smokey Beige|Fossil|Stone Gray|Granite|Charcoal Gray|London Gray|Warm Caramel|Nutmeg|Espresso|Dark Walnut|Canyon Black"
            data-item-custom4-name="DISCLAIMER"
            data-item-custom4-type="readonly"
            data-item-custom4-value="Read our FAQ for info on colors and more."
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
