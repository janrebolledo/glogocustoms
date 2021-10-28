import Image from 'next/image'
import styles from '../styles/Footer.module.scss'
import logo from '../public/Logo 2.png'
import instagram from '../public/instagram.png'
import twitter from '../public/twitter.png'
import tiktok from '../public/tiktok.png'
import twitch from '../public/Twitch.png'
import Link from 'next/link'

export default function Footer(){
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <Link href="/">
                    <div className={styles.footer__logo_container}>
                        <img src={logo.src} alt=""/>
                    </div>
                </Link>
                <div className={styles.footer__list}>
                    <h5>Navigation</h5>
                    <Link href="/">HOME</Link>
                    <Link href="/shop">SHOP</Link>
                    <Link href="/partners">PARTNERS</Link>
                    <Link href="/contact">CONTACT</Link>
                    <Link href="/faq">FAQ</Link>
                </div>
                <div className={styles.footer__list}>
                    <h5>Follow us on social media</h5>
                    <div className={styles.footer__socials}>
                    <Link href="https://instagram.com/Glogo_Customs">
                            <a className={styles.footer__social_link}>
                            <img className={styles.footer__social} src={instagram.src} alt=""/>
                            </a>
                        </Link>
                        <Link href="https://twitter.com/GlogoCustoms">
                            <a className={styles.footer__social_link}>
                            <img className={styles.footer__social} src={twitter.src} alt=""/>
                            </a>
                        </Link>
                        <Link href="https://www.tiktok.com/@glogocustoms?">
                            <a className={styles.footer__social_link}>
                            <img className={styles.footer__social} src={tiktok.src} alt=""/>
                            </a>
                        </Link>
                        <Link href="https://www.twitch.tv/glogocustoms">
                            <a className={styles.footer__social_link}>
                            <img className={styles.footer__social} src={twitch.src} alt=""/>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}