import styles from "../styles/Contact-Page.module.scss";
import Link from "next/dist/client/link";

export default function Contact() {
  return (
    <div className={styles.contact_container}>
      <h1>Contact</h1>
      <p>
        Use this form to contact us with questions or comments about your order.
      </p>
      <form
        className={styles.form}
        action="https://formspree.io/f/xayavgea"
        method="POST"
      >
        <label>Email</label>
        <input type="email" name="email" className={styles.input}></input>
        <label>Message</label>
        <textarea className={styles.textarea} name="message"></textarea>
        <button className={styles.input} type="submit">
          Send
        </button>
      </form>
      <p>OR</p>
      <div className={styles.contactbuttons}>
        <Link href="mailto:glogocustoms@gmail.com">
          <button>Email Us</button>
        </Link>
        <Link href="https://twitter.com/glogo_customs">
          <button>DM Us On Instagram</button>
        </Link>
        <Link href="https://twitter.com/GlogoCustoms">
          <button>DM Us On Twitter</button>
        </Link>
        <Link href="https://discord.gg/ahgs2HqbeK">
          <button>Join the Glogo Discord</button>
        </Link>
      </div>
    </div>
  );
}
