import styles from '../styles/Modal.module.scss';

export default function Modal() {
    return (
        <div className={styles.modal}>
            <div className={styles.modal__container}>
                <h3>Support a creator</h3>
                <h1>GET 5% OFF</h1>
                <p>Enter a creator code at checkout.</p>
            </div>
        </div>
    )
}