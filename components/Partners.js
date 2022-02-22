import styles from "../styles/Partners.module.css";
import Link from "next/link";
import Image from "next/image";
import Instagram from "../public/instagram.png";
import Twitter from "../public/twitter.png";
import Twitch from "../public/Twitch.png";
import TikTok from "../public/tiktok.png";
import YouTube from "../public/Youtube.png";
import Discord from "../public/discord.png";
import Website from "../public/Website Icon.png";

// PARTNER IMAGES

import CarterPulse from "../public/partners/CPLogo.png";
import Jan from "../public/partners/Jan.jpg";
import Guwop from "../public/partners/Guwop.jpg";
import Frostizy from "../public/partners/Frostizy.jpg";
import Girly from "../public/partners/Girly.png";
import Aurora from "../public/partners/Aurora.png";
import Solstice from "../public/partners/Solstice.jpg";
import GhostHQ from "../public/partners/GhostHQ.png";
import AdrianahLee from "../public/partners/AdrianahLee.jpg";

export default function PartnersPage() {
  return (
    <div className={styles.partners}>
      <h1>Partners</h1>
      <div className={styles.partners__container}>
        <div className={styles.partners__card}>
          <img alt="" src={CarterPulse.src} />
          <h5>
            <b>Carter Pulse</b> <i>Launch Partner</i>
          </h5>
          <p>Code: CARTERPULSE</p>
          <div className={styles.partners__socials}>
            <Link href="https://carterpulse.com">
              <a>
                <Image alt="" src={Website} width="32" height="32"></Image>
              </a>
            </Link>
            <Link href="https://twitter.com/CarterPulse">
              <a>
                <Image alt="" src={Twitter} width="32" height="32"></Image>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.partners__card}>
          <img alt="" src={Jan.src} />
          <h5>
            <b>Jan</b> <i>Launch Partner</i>
          </h5>
          <p>Code: JAN</p>
          <div className={styles.partners__socials}>
            <Link href="https://janrebolledo.com">
              <a>
                <Image alt="" src={Website} width="32" height="32"></Image>
              </a>
            </Link>
            <Link href="https://instagram.com/janconcepts">
              <a>
                <Image alt="" src={Instagram} width="32" height="32"></Image>
              </a>
            </Link>
            <Link href="https://twitter.com/janconcepts">
              <a>
                <Image alt="" src={Twitter} width="32" height="32"></Image>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.partners__card}>
          <img alt="" src={Frostizy.src} />
          <h5>
            <b>Frostizy</b> <i>Launch Partner</i>
          </h5>
          <p>Code: FROSTIZY</p>
          <div className={styles.partners__socials}>
            <Link href="https://twitter.com/Frostizy">
              <a>
                <Image alt="" src={Twitter} width="32" height="32"></Image>
              </a>
            </Link>
            <Link href="https://www.youtube.com/user/Imfrostizy">
              <a>
                <Image alt="" src={YouTube} width="32" height="32"></Image>
              </a>
            </Link>
            <Link href="https://www.twitch.tv/frostizy">
              <a>
                <Image alt="" src={Twitch} width="32" height="32"></Image>
              </a>
            </Link>
            <Link href="https://discord.gg/ez6DqeB">
              <a>
                <Image alt="" src={Discord} width="32" height="32"></Image>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.partners__card}>
          <img alt="" src={Guwop.src} />
          <h5>
            <b>Guwop</b> <i>Launch Partner</i>
          </h5>
          <p>Code: GUWOP</p>
          <div className={styles.partners__socials}>
            <Link href="https://www.instagram.com/jamescameron_00/">
              <a>
                <Image alt="" src={Instagram} width="32" height="32"></Image>
              </a>
            </Link>
            <Link href="https://www.twitter.com/gnwop/">
              <a>
                <Image alt="" src={Twitter} width="32" height="32"></Image>
              </a>
            </Link>
            <Link href="https://www.youtube.com/channel/UCc3VcxPP9L7kcNoWjgAZN8Q">
              <a>
                <Image alt="" src={YouTube} width="32" height="32"></Image>
              </a>
            </Link>
            <Link href="https://www.twitch.tv/guwop1x">
              <a>
                <Image alt="" src={Twitch} width="32" height="32"></Image>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.partners__card}>
          <img alt="" src={Girly.src} />
          <h5>
            <b>Girly</b> <i>Launch Partner</i>
          </h5>
          <p>Code: GIRLY</p>
          <div className={styles.partners__socials}>
            <Link href="https://www.instagram.com/imgirlytv/">
              <a>
                <Image alt="" src={Instagram} width="32" height="32"></Image>
              </a>
            </Link>
            <Link href="https://twitter.com/ImGirlyTV">
              <a>
                <Image alt="" src={Twitter} width="32" height="32"></Image>
              </a>
            </Link>
            <Link href="https://www.tiktok.com/@imgirlytv?">
              <a>
                <Image alt="" src={TikTok} width="32" height="32"></Image>
              </a>
            </Link>
            <Link href="https://www.twitch.tv/imgirlytv">
              <a>
                <Image alt="" src={Twitch} width="32" height="32"></Image>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.partners__card}>
          <img alt="" src={AdrianahLee.src} />
          <h5>
            <b>Adrianah Lee</b> <i>Launch Partner</i>
          </h5>
          <p>Code: ADRIANAHLEE</p>
          <div className={styles.partners__socials}>
            <Link href="https://twitter.com/AdrianahLee">
              <a>
                <Image alt="" src={Twitter} width="32" height="32"></Image>
              </a>
            </Link>
            <Link href="https://www.youtube.com/channel/UC8QAjn64hfQgg9PVMxR4VuA">
              <a>
                <Image alt="" src={YouTube} width="32" height="32"></Image>
              </a>
            </Link>
            <Link href="https://www.tiktok.com/@adrianahlee?">
              <a>
                <Image alt="" src={TikTok} width="32" height="32"></Image>
              </a>
            </Link>
            <Link href="https://www.twitch.tv/adrianahlee">
              <a>
                <Image alt="" src={Twitch} width="32" height="32"></Image>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.partners__card}>
          <img alt="" src={Aurora.src} />
          <h5>
            <b>Aurora</b> <i>Launch Partner</i>
          </h5>
          <p>Code: AURORA</p>
          <div className={styles.partners__socials}>
            <Link href="https://twitter.com/AuroraaTW">
              <a>
                <Image alt="" src={Twitter} width="32" height="32"></Image>
              </a>
            </Link>
            <Link href="https://www.youtube.com/c/auroralight">
              <a>
                <Image alt="" src={YouTube} width="32" height="32"></Image>
              </a>
            </Link>
            <Link href="https://www.twitch.tv/auroralight">
              <a>
                <Image alt="" src={Twitch} width="32" height="32"></Image>
              </a>
            </Link>
            <Link href="https://www.tiktok.com/@aurora_lightzz?lang=en">
              <a>
                <Image alt="" src={TikTok} width="32" height="32"></Image>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.partners__card}>
          <img alt="" src={Solstice.src} />
          <h5>
            <b>ClearSolstice</b> <i>Launch Partner</i>
          </h5>
          <p>Code: SOLSTICE</p>
          <div className={styles.partners__socials}>
            <Link href="https://www.instagram.com/clearsolstice/">
              <a>
                <Image alt="" src={Instagram} width="32" height="32"></Image>
              </a>
            </Link>
            <Link href="https://twitter.com/ClearSolstice">
              <a>
                <Image alt="" src={Twitter} width="32" height="32"></Image>
              </a>
            </Link>
            <Link href="https://www.youtube.com/channel/Solsticeahah">
              <a>
                <Image alt="" src={YouTube} width="32" height="32"></Image>
              </a>
            </Link>
            <Link href="https://www.twitch.tv/clearsolstice">
              <a>
                <Image alt="" src={Twitch} width="32" height="32"></Image>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.partners__card}>
          <img alt="" src={GhostHQ.src} />
          <h5>
            <b>GhostHQ</b> <i>Launch Partner</i>
          </h5>
          <p>Code: GHOSTHQ</p>
          <div className={styles.partners__socials}>
            <Link href="https://www.instagram.com/ghosthq.tv/">
              <a>
                <Image alt="" src={Instagram} width="32" height="32"></Image>
              </a>
            </Link>
            <Link href="https://twitter.com/GhostHQtv">
              <a>
                <Image alt="" src={Twitter} width="32" height="32"></Image>
              </a>
            </Link>
            <Link href="https://www.tiktok.com/@ghosthq?">
              <a>
                <Image alt="" src={TikTok} width="32" height="32"></Image>
              </a>
            </Link>
            <Link href="https://www.twitch.tv/ghosthq">
              <a>
                <Image alt="" src={Twitch} width="32" height="32"></Image>
              </a>
            </Link>
          </div>
        </div>
        {/* <div className={styles.partners__card}>
                    <img alt="" src={exampleImage.src} />
                    <h5><b>Partner</b> <i>Launch Partner</i></h5>
                    <p>Code: Code</p>
                    <div className={styles.partners__socials}>
                        <Link href="https://instagram.com"><a><Image alt="" src={Instagram} width="32" height="32" ></Image></a></Link>
                        <Link href="https://twitter.com"><a><Image alt="" src={Twitter} width="32" height="32" ></Image></a></Link>
                        <Link href="https://youtube.com"><a><Image alt="" src={YouTube} width="32" height="32" ></Image></a></Link>
                        <Link href="https://twitch.tv"><a><Image alt="" src={Twitch} width="32" height="32" ></Image></a></Link>
                    </div>
                </div> */}
      </div>
    </div>
  );
}
