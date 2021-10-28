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

// const button = document.querySelector('#starry-night')
// const quantity = document.querySelector('#quantity')
// quantity.addEventListener('change', () => {
//   // Sets the default quantity when adding the item
//   button.setAttribute('data-item-quantity', quantity.value)
// })
// const select = document.querySelector('#frame_color')
// select.addEventListener('change', () => {
//   // Sets the default frame color when adding the item
//   button.setAttribute("data-item-custom1-value", select.value)
// })

const Product = (props: IProductProps) => {
    return (
        <div className={styles.product}>
            <img className={styles.product__image} src={props.product.image.src} alt={props.product.image.src} />
            <div className={styles.product__info}>
                <h2 className={styles.product__title}>{props.product.name}</h2>
                <p className={styles.product__description}>{props.product.description}</p>
                <div className={styles.product__options}>
                    <label>Frame color</label>
                    <select id="frame_color">
                        <option value="Black">Black</option>
                        <option value="White">White</option>
                    </select>
                    <label>Glass Color</label>
                    <select id="glass_color">
                        <option value="Black">Black</option>
                        <option value="White">White</option>
                    </select>
                </div>
                <div className="product__price-button-container">
                    <div className={styles.product__price}>${props.product.price.toFixed(2)}</div>
                    <button
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