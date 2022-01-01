import styles from "../styles/ProductList.module.scss";
import Link from "next/dist/client/link";

export default function ShopCollection() {
  return (
    <>
      <div className={styles.shopcollection}>
        <div className={styles.shopcollection__heading}>
          <h2>Shop</h2>
        </div>
      </div>
    </>
  );
}
