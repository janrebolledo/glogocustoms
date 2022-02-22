import Head from "next/head";

import styles from "../../styles/Product.module.css";

import { Autoplay, Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import GlogoImg from "../../public/Glogo Black Frame Mockup.gif";
import GlogoImg2 from "../../public/Glogo White Frame Mockup.gif";

import WorksWith from "../../public/Works With.png";
import ColorOptions from "../../Modules/ColorOptions";

export default function Glogo() {
  function sizeSelect() {
    var e = document.getElementById("product__size-select");
    var selectedSize = document.getElementById("product__size-select").value;

    var snipcartBtn = document.getElementById("snipcart-product");

    snipcartBtn.setAttribute("data-item-custom1-value", selectedSize);
  }
  function frameSelect() {
    var e = document.getElementById("product__frame-select");
    var selectedFrame = document.getElementById("product__frame-select").value;

    var snipcartBtn = document.getElementById("snipcart-product");

    snipcartBtn.setAttribute("data-item-custom2-value", selectedFrame);
  }
  function colorSelect() {
    var e = document.getElementById("product__color-select");
    var selectedColor = document.getElementById("product__color-select").value;

    var snipcartBtn = document.getElementById("snipcart-product");

    snipcartBtn.setAttribute("data-item-custom3-value", selectedColor);
  }
  return (
    <main>
      <Head>
        <title>Glogo — Glogo Customs</title>
        <link
          rel="icon"
          href="https://www.glogocustoms.com/favicon.ico"
          type="image/x-icon"
        />
        <meta name="title" content="Glogo Customs"></meta>
        <meta
          name="description"
          content="Customized light products made in the U.S.A"
        ></meta>
        <meta
          name="keywords"
          content="glogo customs, glogocustoms, lightbox, custom lights"
        ></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta name="language" content="English"></meta>
        <meta name="revisit-after" content="12 days"></meta>

        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://www.glogocustoms.com/"></meta>
        <meta property="og:title" content="Glogo Customs"></meta>
        <meta
          property="og:description"
          content="Customized light products made in the U.S.A"
        ></meta>
        <meta
          property="og:image"
          content="https://www.glogocustoms.com/Social-Image.png"
        ></meta>

        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta
          property="twitter:url"
          content="https://www.glogocustoms.com/"
        ></meta>
        <meta property="twitter:title" content="Glogo Customs"></meta>
        <meta
          property="twitter:description"
          content="Customized light products made in the U.S.A"
        ></meta>
        <meta
          property="twitter:image"
          content="https://www.glogocustoms.com/Social-Image.png"
        ></meta>
      </Head>
      <section className={styles.product__section}>
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
                  <img src={GlogoImg.src} alt="Glogo Black" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.carousel__imageContainer}>
                  <img src={GlogoImg2.src} alt="Glogo White" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={styles.product__info}>
            <h2 className={styles.product__title}>Glogo</h2>
            <p className={styles.product__description}>
              Made in the U.S. Compatible with Google Assistant, Alexa, and
              Siri.
              <img
                src={WorksWith.src}
                alt="Works With"
                className={styles.product__workswith}
              />
            </p>
            <div className={styles.product__pricebuttoncontainer}>
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
                data-item-id="Glogo"
                data-item-name="Glogo"
                data-item-price="100.00"
                data-item-url="/products/glogo"
                data-item-image={GlogoImg.src}
                data-item-weight="1814.37"
                data-item-custom1-name="Size"
                data-item-custom1-options="8″x8″|12″x12″[+50.00]"
                data-item-custom2-name="Frame Color"
                data-item-custom2-options="Black|White"
                data-item-custom3-name="Glass Color"
                data-item-custom3-options="Sweet Pea|Vintage Blush|Apple Red|Poppy Red|Paprika|Colonial Red|Magenta|Claret Wine|Cinnamon|Harvest Peach|Rustic Orange|Fire Orange|Strawflower|Summer Squash|Lemon Grass|Green Apple|Leafy Green|Moss Green|Eden|Oregano|Hunt Club Green|Deep Forest|Vintage Teal|Seaside|Aqua|French Blue|Oasis Blue|Lagoon|Midnight Blue|Slate Blue|Windflower Blue|Ink Blue|French Lilac|Silver Lilac|Augbergine|Blossom White|Heirloom White|Ivory Silk|Smokey Beige|Fossil|Stone Gray|Granite|Charcoal Gray|London Gray|Warm Caramel|Nutmeg|Espresso|Dark Walnut|Canyon Black"
                data-item-custom4-name="DISCLAIMER"
                data-item-custom4-type="readonly"
                data-item-custom4-value="We will reach out via purchasing email within 24 hours to receive
            your image. We reserve the right to deny any image. All denied
            images will be refunded."
              >
                Add to cart
              </button>
              <p className={styles.product__disclaimer}>
                *We will reach out via purchasing email within 24 hours to
                receive your image. We reserve the right to deny any image. All
                Denied images will be refunded.
              </p>
            </div>
          </div>
        </div>
        <ColorOptions />
      </section>
    </main>
  );
}
