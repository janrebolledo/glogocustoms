import styles from "../styles/Collections.module.scss";
import Link from "next/link";
import Image from "next/image";
import collectionImage from "../public/lightboxes/_MG_2398.jpg";

export default function CollectionsSection() {
  return (
    <div className={styles.collections_container}>
      {/* <div className={styles.collection1}>
                <div className={styles.collection_overlay}>
                    <h3>SHOP LIGHTBOXES</h3>
                    <Link href="/shop"><a className={styles.collection_button}>VIEW COLLECTION</a></Link>
                </div>
                <Image alt="" src={collectionImage} className={styles.collection_image}></Image>
            </div> */}
      <div className={styles.collection2}>
        <div className={styles.collection_overlay}>
          <h3>SHOP GLOGO</h3>
          <Link href="/products/glogo">
            <a className={styles.collection_button}>BUY NOW</a>
          </Link>
        </div>
        <Image
          alt=""
          src={collectionImage}
          className={styles.collection_image}
        ></Image>
      </div>
    </div>
  );
}
