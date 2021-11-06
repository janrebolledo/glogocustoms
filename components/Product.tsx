import Image from 'next/image'
import styles from '../styles/Product.module.scss';

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
        <div className={styles.product}>
            <img className={styles.product__image} src={props.product.image.src} alt={props.product.image.src} />
            <div className={styles.product__info}>
                <h2 className={styles.product__title}>{props.product.name}</h2>
                <p className={styles.product__description}>{props.product.description}</p>
                <div className="product__price-button-container">
                    <div className={styles.product__price}>${props.product.price.toFixed(2)}</div>
                    <button
                        id="snipcart-product"
                        className={`snipcart-add-item ${styles.product__button}`}
                        data-item-id={props.product.id}
                        data-item-name={props.product.name}
                        data-item-price={props.product.price}
                        data-item-url={props.product.url}
                        data-item-image={props.product.image.src}
                        data-item-custom1-name="Frame Color"
                        data-item-custom1-options="Black|White"
                        data-item-custom2-name="Glass Color"
                        data-item-custom2-options="Black|White"
                        data-item-custom3-name="DISCLAIMER"
                        data-item-custom3-type="readonly"
                        data-item-custom3-value="Read our FAQ for info on colors and more."
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product