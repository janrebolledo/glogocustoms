import Image from 'next/image'
import styles from '../styles/Footer.module.scss'
import logo from '../public/Logo 2.png'
import instagram from '../public/instagram.png'
import twitter from '../public/twitter.png'
import Link from 'next/link'

export default function Footer(){
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <Link href="/">
                    <div className={styles.footer__logo_container}>
                    <Image src={logo} alt="" width="120" height="120" />
                    </div>
                </Link>
                <div className={styles.footer__list}>
                    <h5>Navigation</h5>
                    <Link href="/">HOME</Link>
                    <Link href="/shop">SHOP</Link>
                    <Link href="/partners">PARTNERS</Link>
                    <Link href="/contact">CONTACT</Link>
                </div>
                <div className={styles.footer__list}>
                    <h5>Follow us on social media</h5>
                    <div className={styles.footer__socials}>
                        <Link href="/">
                            <a className={styles.footer__social_link} href="">
                            <Image className={styles.footer__social} src={instagram} alt="" width="32" height="32" />
                            </a>
                        </Link>
                        <Link href="/">
                            <a className={styles.footer__social_link}>
                            <Image className={styles.footer__social} src={twitter} alt="" width="32" height="32" />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}