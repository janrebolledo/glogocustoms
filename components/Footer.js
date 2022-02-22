import Logo from "../public/Logo 2.png";

import styles from "../styles/Footer.module.css";
import Link from "next/link";

import Instagram from "../public/Instagram.png";
import Twitter from "../public/Twitter.png";
import Twitch from "../public/Twitch.png";
import TikTok from "../public/TikTok.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={Logo.src} alt="Logo" className={styles.footer__logo} />
      <div className={styles.footer__list}>
        <h4>Navigation</h4>
        <Link href="/">
          <a className={styles.footer__link}>HOME</a>
        </Link>
        <Link href="/shop">
          <a className={styles.footer__link}>SHOP</a>
        </Link>
        <Link href="/partners">
          <a className={styles.footer__link}>PARTNERS</a>
        </Link>
        <Link href="/contact">
          <a className={styles.footer__link}>CONTACT</a>
        </Link>
        <Link href="/faq">
          <a className={styles.footer__link}>FAQ</a>
        </Link>
      </div>
      <div className={styles.footer__socialList}>
        <h4>Social Media</h4>
        <div>
          <Link href="https://instagram.com/glogo_customs">
            <a className={styles.footer__social}>
              <img src={Instagram.src} alt="Instagram" />
            </a>
          </Link>
          <Link href="https://twitter.com/glogocustoms">
            <a className={styles.footer__social}>
              <img src={Twitter.src} alt="Twitter" />
            </a>
          </Link>
          <Link href="https://twitch.tv/glogocustoms">
            <a className={styles.footer__social}>
              <img src={Twitch.src} alt="Twitch" />
            </a>
          </Link>
          <Link href="https://tiktok.com/@glogocustoms?">
            <a className={styles.footer__social}>
              <img src={TikTok.src} alt="TikTok" />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
