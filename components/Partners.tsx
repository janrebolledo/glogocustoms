import styles from '../styles/Partners.module.scss';
import Link from 'next/link'
import Image from 'next/dist/client/image';
import exampleImage from '../public/Example Profile Picture.jpg'
import instagram from '../public/instagram.png'
import twitter from '../public/twitter.png'
import twitch from '../public/Twitch.png'
import tiktok from '../public/tiktok.png'
import youtube from '../public/Youtube.png'
import discord from '../public/discord.png'
import website from '../public/Website Icon.png'

// PARTNER IMAGES

import CarterPulse from '../public/partners/CPLogo.png'
import Jan from '../public/partners/Jan.jpg'

export default function Partners() {
    return (
        <div className={styles.partners}>
            <h1>Partners</h1>
            <div className={styles.partners__container}>
            <div className={styles.partners__card}>
                    <Image alt="" src={CarterPulse} width="180" height="180" ></Image>
                    <h5><b>Carter Pulse</b> <i>Launch Partner</i></h5>
                    <div className={styles.partners__socials}>
                        <Link href="https://carterpulse.com"><a><Image alt="" src={website} width="32" height="32" ></Image></a></Link>
                        <Link href="https://twitter.com/CarterPulse"><a><Image alt="" src={twitter} width="32" height="32" ></Image></a></Link>
                    </div>
                </div>
                <div className={styles.partners__card}>
                    <Image alt="" src={Jan} width="180" height="180" ></Image>
                    <h5><b>Jan</b> <i>Launch Partner</i></h5>
                    <div className={styles.partners__socials}>
                        <Link href="https://janrebolledo.com"><a><Image alt="" src={website} width="32" height="32" ></Image></a></Link>
                        <Link href="https://instagram.com/janconcepts"><a><Image alt="" src={instagram} width="32" height="32" ></Image></a></Link>
                        <Link href="https://twitter.com/janconcepts"><a><Image alt="" src={twitter} width="32" height="32" ></Image></a></Link>
                    </div>
                </div>
                <div className={styles.partners__card}>
                    <Image alt="" src={exampleImage} width="180" height="180" ></Image>
                    <h5><b>Jeff</b> <i>Launch Partner</i></h5>
                    <div className={styles.partners__socials}>
                        <Link href="https://twitter.com/jeffthemvp"><a><Image alt="" src={twitter} width="32" height="32" ></Image></a></Link>
                        <Link href="https://www.youtube.com/channel/UC8ei2fsnEytL-D5UJa1CaYw"><a><Image alt="" src={youtube} width="32" height="32" ></Image></a></Link>
                        <Link href="https://www.twitch.tv/xtrajeff"><a><Image alt="" src={twitch} width="32" height="32" ></Image></a></Link>
                        <Link href="https://www.tiktok.com/@jefftheqt"><a><Image alt="" src={tiktok} width="32" height="32" ></Image></a></Link>
                    </div>
                </div>
                <div className={styles.partners__card}>
                    <Image alt="" src={exampleImage} width="180" height="180" ></Image>
                    <h5><b>Frostizy</b> <i>Launch Partner</i></h5>
                    <div className={styles.partners__socials}>
                        <Link href="https://twitter.com/Frostizy"><a><Image alt="" src={twitter} width="32" height="32" ></Image></a></Link>
                        <Link href="https://www.youtube.com/user/Imfrostizy"><a><Image alt="" src={youtube} width="32" height="32" ></Image></a></Link>
                        <Link href="https://www.twitch.tv/frostizy"><a><Image alt="" src={twitch} width="32" height="32" ></Image></a></Link>
                        <Link href="https://discord.gg/ez6DqeB"><a><Image alt="" src={discord} width="32" height="32" ></Image></a></Link>
                    </div>
                </div>
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
