import Image from 'next/image'
import styles from '../styles/Footer.module.scss'
import logo from '../public/Logo 2.png'
import instagram from '../public/instagram.png'
import twitter from '../public/twitter.png'

export default function Footer(){
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <a href="http://localhost:3000">
                    <Image src={logo} alt="" width="120" height="120" />
                </a>
                <div className={styles.footer__list}>
                    <h5>Navigation</h5>
                    <a href="/">HOME</a>
                    <a href="/shop">SHOP</a>
                    <a href="/partners">PARTNERS</a>
                    <a href="/contact">CONTACT</a>
                </div>
                <div className={styles.footer__list}>
                    <h5>Follow us on social media</h5>
                    <div>
                        <a className={styles.footer__social_link} href="/">
                            <Image className={styles.footer__social} src={instagram} alt="" width="32" height="32" />
                        </a>
                        <a className={styles.footer__social_link} href="/">
                            <Image className={styles.footer__social} src={twitter} alt="" width="32" height="32" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}