import Image from 'next/image'
import styles from '../styles/ProductListView.module.scss';
import Link from 'next/dist/client/link';

export interface IProduct {
    id: string
    name: string
    price: number
    url: string
    description: string
    image: StaticImageData
}

interface IProductProps {
    product: IProduct
}

const Product = (props: IProductProps) => {
    return (
        <Link href={props.product.url}>
            <div className={styles.product}>
                <img className={styles.product__image} src={props.product.image.src} alt={props.product.image.src} />
                <div className={styles.product__info}>
                    <h2 className={styles.product__title}>{props.product.name}</h2>
                    <div className={styles.product__price}>${props.product.price.toFixed(2)}</div>
                </div>
            </div>
        </Link>
    )
}

export default Product