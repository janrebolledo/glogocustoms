import Product, {IProduct} from "./Product";
import styles from '../styles/ProductList.module.scss';

interface IProductListProps {
    products: IProduct[]
}

const ProductList = (props: IProductListProps) => {
    return (
        <div className={styles.productlist}>
            {props.products.map((product, index) => <Product product={product} key={index}/>)}
        </div>
    )
}


export default ProductList