import Head from "next/head";

import styles from "../styles/Shop.module.css";
import Link from "next/dist/client/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

import GlogoImg from "../public/Glogo Black Frame Mockup.gif";
import GlogoImg2 from "../public/Glogo White Frame Mockup.gif";

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Shop() {
  return (
    <main>
      <Head>
        <title>Shop — Glogo Customs</title>
        <link rel="shortcut icon" href="/favicon.ico" />
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
      <section className={styles.shop}>
        <h1>Shop</h1>
        <div className={styles.products}>
          <Link href="./products/glogo">
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
                    <img
                      className={styles.carousel__imageContainer}
                      src={GlogoImg.src}
                      alt="Glogo Black"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      className={styles.carousel__imageContainer}
                      src={GlogoImg2.src}
                      alt="Glogo White"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className={styles.product__info}>
                <h2 className={styles.product__title}>Glogo</h2>
                <p className={styles.product__price}>$100 - $150</p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
