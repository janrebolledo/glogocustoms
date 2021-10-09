import styles from '../styles/Collections.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import sampleImage from '../public/halfmoon.jpg'

export default function CollectionsSection() {
    return (
        <div className={styles.collections_container}>
            <div className={styles.collection1}>
                <div className={styles.collection_overlay}>
                    <h3>SHOP LIGHTBOXES</h3>
                    <Link href=""><a className={styles.collection_button}>VIEW COLLECTION</a></Link>
                </div>
                <Image src={sampleImage} className={styles.collection_image}></Image>
            </div>
            <div className={styles.collection2}>
                <div className={styles.collection_overlay}>
                    <h3>SHOP ALL</h3>
                    <Link href=""><a className={styles.collection_button}>VIEW COLLECTION</a></Link>
                </div>
                <Image src={sampleImage} className={styles.collection_image}></Image>
            </div>
        </div>
        
    )
}