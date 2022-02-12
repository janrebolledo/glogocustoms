import styles from "../styles/Contact.module.scss";
import Link from "next/link";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h2 className={styles.contact__title}>
        Unsure if your custom image will work?
      </h2>
      <p className={styles.contact__paragraph}>Reach out to us!</p>
      <Link href="/contact" passHref>
        <button>Contact Us</button>
      </Link>
    </div>
  );
}
