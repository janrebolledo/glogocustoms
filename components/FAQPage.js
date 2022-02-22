import styles from "../styles/FAQ.module.css";

import Works1 from "../public/FAQ Images/WillWork1.png";
import Works2 from "../public/FAQ Images/WillWork2.png";
import Works3 from "../public/FAQ Images/WillWork3.png";
import Works4 from "../public/FAQ Images/WillWork4.png";
import Works5 from "../public/FAQ Images/WillWork5.png";
import Works6 from "../public/FAQ Images/WillWork6.png";
import Works7 from "../public/FAQ Images/WillWork7.png";
import Works8 from "../public/FAQ Images/WillWork8.png";

import WontWork1 from "../public/FAQ Images/WontWork1.png";
import WontWork2 from "../public/FAQ Images/WontWork2.png";
import WontWork3 from "../public/FAQ Images/WontWork3.png";

import ColorOptions from "./ColorOptions";

export default function FAQPage() {
  return (
    <section className={styles.faq}>
      <h2 className={styles.faq__title}>
        <span className={styles.colored}>FAQ</span>
      </h2>
      <p className={styles.faq__paragraph}>
        We strive for high quality products here at glogo customs. Read below on
        frequently asked questions and what to expect from custom lighting.
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
      <ColorOptions />
    </section>
  );
}
