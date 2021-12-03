import styles from '../styles/Contact.module.scss';
import Link from 'next/link'

export default function Contact() {
    return (
        <div className={styles.contact}>
            <h2 className={styles.contact__title}>Unsure if your custom image will work?
            </h2>
            <p className={styles.contact__paragraph}>Ask in our Discord and find out.</p>
            <Link href="https://discord.gg/ahgs2HqbeK">
                <button>Join the Glogo Discord</button>
            </Link>
        </div>
    )
}
