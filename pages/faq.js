import Head from "next/head";

import styles from "../styles/FAQ.module.css";

import Works1 from "../public/FAQ Images/Will Work 1.png";
import Works2 from "../public/FAQ Images/Will Work 2.png";
import Works3 from "../public/FAQ Images/Will Work 3.png";
import Works4 from "../public/FAQ Images/Will Work 4.png";
import Works5 from "../public/FAQ Images/Will Work 5.png";
import Works6 from "../public/FAQ Images/Will Work 6.png";
import Works7 from "../public/FAQ Images/Will Work 7.png";
import Works8 from "../public/FAQ Images/Will Work 8.png";

import WontWork1 from "../public/FAQ Images/Wont Work 1.png";
import WontWork2 from "../public/FAQ Images/Wont Work 2.png";
import WontWork3 from "../public/FAQ Images/Wont Work 3.png";

import Colors from "../public/FAQ Images/Color Palette.png";

export default function Faq() {
  return (
    <main>
      <Head>
        <title>Glogo Customs</title>
        <link
          rel="icon"
          href="https://www.glogocustoms.com/favicon.ico"
          type="image/x-icon"
        />
        <meta name="title" content="Glogo Customs"></meta>
        <meta
          name="description"
          content="Frequently asked questions about our Glogos."
        ></meta>
        <meta
          name="keywords"
          content="glogo customs, glogocustoms, lightbox, custom lights"
        ></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta name="language" content="English"></meta>
        <meta name="revisit-after" content="12 days"></meta>
      </Head>
      <section className={styles.faq}>
        <h2 className={styles.faq__title}>
          <span className={styles.colored}>FAQ</span>
        </h2>
        <p className={styles.faq__paragraph}>
          We strive for high quality products here at glogo customs. Read below
          on frequently asked questions and what to expect from custom lighting.
        </p>
        <h3 className={styles.faq__title}>Custom lightboxes</h3>
        <p className={styles.faq__paragraph}>
          Our lazer engraving only works on flat, digitized images. View below
          examples of what does and what does not work.
        </p>
        <h4 className={styles.faq__title}>Examples of what works</h4>
        <div className={styles.faq__examples}>
          <img alt="" src={Works1.src} />
          <img alt="" src={Works2.src} />
          <img alt="" src={Works3.src} />
          <img alt="" src={Works4.src} />
          <img alt="" src={Works5.src} />
          <img alt="" src={Works6.src} />
          <img alt="" src={Works7.src} />
          <img alt="" src={Works8.src} />
        </div>
        <h4 className={styles.faq__title}>Examples of what does not work</h4>
        <div className={styles.faq__examples}>
          <img alt="" src={WontWork1.src} />
          <img alt="" src={WontWork2.src} />
          <img alt="" src={WontWork3.src} />
        </div>
        <p className={styles.faq__paragraph}>
          <i>All images go to respective owners.</i>
        </p>
        <h3 className={styles.faq__title}>Color options</h3>
        <p className={styles.faq__paragraph}>
          All color glass color options are below.
        </p>
        <img alt="" src={Colors.src} className={styles.faq__colors} />
      </section>
    </main>
  );
}
