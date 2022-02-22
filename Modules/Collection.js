import Link from "next/link";
import styles from "../styles/Collection.module.css";

// import CollectionImage from "";

export default function Collection() {
  return (
    <section className={styles.collection}>
      <div className={styles.collectionContainer}>
        <div>
          <h2>SHOP GLOGO</h2>
          <Link href="/products/glogo">
            <a className="button">BUY</a>
          </Link>
        </div>
      </div>
    </section>
  );
}
