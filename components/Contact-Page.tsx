import styles from '../styles/Contact-Page.module.scss';

export default function Contact() {
    return (
        <div className={styles.contact_container}>
            <h1>Contact</h1>
            <p>Use this form to contact us with questions or comments about your order.</p>
            <form className={styles.form}
                action="https://formspree.io/f/xayavgea"
                method="POST"
            >
                <label>
                    Email
                </label>
                <input type="email" name="email" className={styles.input}>
                </input>
                <label>
                    Message
                </label>
                <textarea className={styles.textarea} name="message"></textarea>
                <button className={styles.input} type="submit">Send</button>
            </form>
        </div>
    )
}