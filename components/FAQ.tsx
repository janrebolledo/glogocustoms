import styles from '../styles/Faq.module.scss';
import Image from 'next/dist/client/image';

import Works1 from '../public/FAQ Images/Will Work 1.png';
import Works2 from '../public/FAQ Images/Will Work 2.png';
import Works3 from '../public/FAQ Images/Will Work 3.png';
import Works4 from '../public/FAQ Images/Will Work 4.png';
import Works5 from '../public/FAQ Images/Will Work 5.png';

import WontWork1 from '../public/FAQ Images/Wont Work 1.png';
import WontWork2 from '../public/FAQ Images/Wont Work 2.png';

import Colors from '../public/FAQ Images/Color Palette.png';

export default function Faq() {
    return (
        <div className={styles.faq}>
            <h2 className={styles.faq__title}><span className={styles.colored}>FAQ</span></h2>
            <p className={styles.faq__paragraph}>We strive for high quality products here at glogo customs. Read below on frequently asked questions and what to expect from custom lighting.</p>
            <h3 className={styles.faq__title}>Custom lightboxes</h3>
            <p className={styles.faq__paragraph}>Our lazer engraving only works on flat, digitized images. View below examples of what does and what does not work.</p>
            <h4 className={styles.faq__title}>Examples of what works</h4>
            <div className={styles.faq__examples}>
                <Image alt="" src={Works1} width="200" />
                <Image alt="" src={Works2} width="200" />
                <Image alt="" src={Works3} width="200" />
                <Image alt="" src={Works4} width="200" />
                <Image alt="" src={Works5} width="200" />
            </div>
            <h4 className={styles.faq__title}>Examples of what does not work</h4>
            <div className={styles.faq__examples}>
                <Image alt="" src={WontWork1} width="200" />
                <Image alt="" src={WontWork2} width="200" />
            </div>
            <p className={styles.faq__paragraph}><i>All images go to respective owners.</i></p>
            <h3 className={styles.faq__title}>Color options</h3>
            <p className={styles.faq__paragraph}>All color glass color options are below.</p>
            <img alt="" src={Colors.src} className={styles.faq__colors}/>
        </div>
    )
}
