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
                <img alt="" src={Website.src} width="32" height="32" />
              </a>
            </Link>
            <Link href="https://twitter.com/CarterPulse">
              <a>
                <img alt="" src={Twitter.src} width="32" height="32" />
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
                <img alt="" src={Website.src} width="32" height="32" />
              </a>
            </Link>
            <Link href="https://instagram.com/janconcepts">
              <a>
                <img alt="" src={Instagram.src} width="32" height="32" />
              </a>
            </Link>
            <Link href="https://twitter.com/janconcepts">
              <a>
                <img alt="" src={Twitter.src} width="32" height="32" />
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
                <img alt="" src={Twitter.src} width="32" height="32" />
              </a>
            </Link>
            <Link href="https://www.youtube.com/user/Imfrostizy">
              <a>
                <img alt="" src={YouTube.src} width="32" height="32" />
              </a>
            </Link>
            <Link href="https://www.twitch.tv/frostizy">
              <a>
                <img alt="" src={Twitch.src} width="32" height="32" />
              </a>
            </Link>
            <Link href="https://discord.gg/ez6DqeB">
              <a>
                <img alt="" src={Discord.src} width="32" height="32" />
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
                <img alt="" src={Instagram.src} width="32" height="32" />
              </a>
            </Link>
            <Link href="https://www.twitter.com/gnwop/">
              <a>
                <img alt="" src={Twitter.src} width="32" height="32" />
              </a>
            </Link>
            <Link href="https://www.youtube.com/channel/UCc3VcxPP9L7kcNoWjgAZN8Q">
              <a>
                <img alt="" src={YouTube.src} width="32" height="32" />
              </a>
            </Link>
            <Link href="https://www.twitch.tv/guwop1x">
              <a>
                <img alt="" src={Twitch.src} width="32" height="32" />
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
                <img alt="" src={Instagram.src} width="32" height="32" />
              </a>
            </Link>
            <Link href="https://twitter.com/ImGirlyTV">
              <a>
                <img alt="" src={Twitter.src} width="32" height="32" />
              </a>
            </Link>
            <Link href="https://www.tiktok.com/@imgirlytv?">
              <a>
                <img alt="" src={TikTok.src} width="32" height="32" />
              </a>
            </Link>
            <Link href="https://www.twitch.tv/imgirlytv">
              <a>
                <img alt="" src={Twitch.src} width="32" height="32" />
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
                <img alt="" src={Twitter.src} width="32" height="32" />
              </a>
            </Link>
            <Link href="https://www.youtube.com/channel/UC8QAjn64hfQgg9PVMxR4VuA">
              <a>
                <img alt="" src={YouTube.src} width="32" height="32" />
              </a>
            </Link>
            <Link href="https://www.tiktok.com/@adrianahlee?">
              <a>
                <img alt="" src={TikTok.src} width="32" height="32" />
              </a>
            </Link>
            <Link href="https://www.twitch.tv/adrianahlee">
              <a>
                <img alt="" src={Twitch.src} width="32" height="32" />
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
                <img alt="" src={Twitter.src} width="32" height="32" />
              </a>
            </Link>
            <Link href="https://www.youtube.com/c/auroralight">
              <a>
                <img alt="" src={YouTube.src} width="32" height="32" />
              </a>
            </Link>
            <Link href="https://www.twitch.tv/auroralight">
              <a>
                <img alt="" src={Twitch.src} width="32" height="32" />
              </a>
            </Link>
            <Link href="https://www.tiktok.com/@aurora_lightzz?lang=en">
              <a>
                <img alt="" src={TikTok.src} width="32" height="32" />
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
                <img alt="" src={Instagram.src} width="32" height="32" />
              </a>
            </Link>
            <Link href="https://twitter.com/ClearSolstice">
              <a>
                <img alt="" src={Twitter.src} width="32" height="32" />
              </a>
            </Link>
            <Link href="https://www.youtube.com/channel/Solsticeahah">
              <a>
                <img alt="" src={YouTube.src} width="32" height="32" />
              </a>
            </Link>
            <Link href="https://www.twitch.tv/clearsolstice">
              <a>
                <img alt="" src={Twitch.src} width="32" height="32" />
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
                <img alt="" src={Instagram.src} width="32" height="32" />
              </a>
            </Link>
            <Link href="https://twitter.com/GhostHQtv">
              <a>
                <img alt="" src={Twitter.src} width="32" height="32" />
              </a>
            </Link>
            <Link href="https://www.tiktok.com/@ghosthq?">
              <a>
                <img alt="" src={TikTok.src} width="32" height="32" />
              </a>
            </Link>
            <Link href="https://www.twitch.tv/ghosthq">
              <a>
                <img alt="" src={Twitch.src} width="32" height="32" />
              </a>
            </Link>
          </div>
        </div>
        {/* <div className={styles.partners__card}>
                    <img alt="" src={exampleImage.src} />
                    <h5><b>Partner</b> <i>Launch Partner</i></h5>
                    <p>Code: Code</p>
                    <div className={styles.partners__socials}>
                        <Link href="https://instagram.com"><a><img alt="" src={Instagram.src} width="32" height="32"  /></a></Link>
                        <Link href="https://twitter.com"><a><img alt="" src={Twitter.src} width="32" height="32"  /></a></Link>
                        <Link href="https://youtube.com"><a><img alt="" src={YouTube.src} width="32" height="32"  /></a></Link>
                        <Link href="https://twitch.tv"><a><img alt="" src={Twitch.src} width="32" height="32"  /></a></Link>
                    </div>
                </div> */}
      </div>
    </div>
  );
}
