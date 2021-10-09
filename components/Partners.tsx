import styles from '../styles/Partners.module.scss';
import Link from 'next/link'
import Image from 'next/dist/client/image';
import exampleImage from '../public/Example Profile Picture.jpg'
import instagram from '../public/instagram.png'
import twitter from '../public/twitter.png'
import twitch from '../public/Twitch.png'
import youtube from '../public/Youtube.png'

export default function Partners() {
    return (
        <div className={styles.partners}>
            <h1>Partners</h1>
            <div className={styles.partners__container}>
                <div className={styles.partners__card}>
                    <Image alt="" src={exampleImage} width="180" height="180" ></Image>
                    <h5><b>Partner</b> <i>Launch Partner</i></h5>
                    <div className={styles.partners__socials}>
                        <Link href="https://instagram.com"><a><Image alt="" src={instagram} width="32" height="32" ></Image></a></Link>
                        <Link href="https://twitter.com"><a><Image alt="" src={twitter} width="32" height="32" ></Image></a></Link>
                        <Link href="https://youtube.com"><a><Image alt="" src={youtube} width="32" height="32" ></Image></a></Link>
                        <Link href="https://twitch.tv"><a><Image alt="" src={twitch} width="32" height="32" ></Image></a></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
