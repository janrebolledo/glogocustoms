import styles from '../styles/ViewShopBtn.module.scss';
import Link from 'next/dist/client/link'

export default function ViewMore() {
    return (
        <div className={styles.viewmore}>
            <Link href="/shop">
                <a className={styles.viewmore_button}>View More</a>
            </Link>
        </div>
    )
}