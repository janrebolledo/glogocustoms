import Product, { IProduct } from "./Product-List-View";
import styles from '../styles/ProductList.module.scss';

interface IProductListProps {
    products: IProduct[]
}

const ProductList = (props: IProductListProps) => {
    return (
        <>
            <div className={styles.shop}>
                <div className={styles.productlist2}>
                    {props.products.map((product, index) => <Product product={product} key={index} />)}
                </div>
            </div>
        </>
    )
}


export default ProductList