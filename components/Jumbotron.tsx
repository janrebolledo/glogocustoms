import Image from 'next/image'
import styles from '../styles/Jumbotron.module.scss'

const Jumbotron = () => {
    return (< >
        <div className={styles.promotionalmessage}>
            <h3>CUSTOMIZED</h3>
            <h2>LIGHTING</h2>
            <p>For <strong>everyone</strong>.</p>
        </div>
    </>)
}
export default Jumbotron;