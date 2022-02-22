import Head from "next/head";

import styles from "../styles/Contact.module.css";
import Link from "next/link";

export default function Contact() {
  return (
    <main>
      <Head>
        <title>Contact — Glogo Customs</title>
        <link
          rel="icon"
          href="https://www.glogocustoms.com/favicon.ico"
          type="image/x-icon"
        />
        <meta name="title" content="Glogo Customs"></meta>
        <meta
          name="description"
          content="Contact us with questions or comments about your order."
        ></meta>
        <meta
          name="keywords"
          content="glogo customs, glogocustoms, lightbox, custom lights"
        ></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta name="language" content="English"></meta>
        <meta name="revisit-after" content="12 days"></meta>
      </Head>
      <section className={styles.contact__section}>
        <h1>Contact</h1>
        <p>
          Use this form to contact us with questions or comments about your
          order.
        </p>

        <form
          className={styles.form}
          action="https://formspree.io/f/xayavgea"
          method="POST"
        >
          <label>Email</label>
          <input
            type="email"
            name="email"
            className={styles.input}
            placeholder="example@email.com"
          ></input>
          <label>Message</label>
          <textarea
            className={styles.textarea}
            name="message"
            placeholder="Message"
          ></textarea>
          <button className="button" type="submit">
            Send
          </button>
        </form>

        <p>OR</p>
        <div className={styles.contactbuttons}>
          <Link href="mailto:glogocustoms@gmail.com">
            <a className="button">Email Us</a>
          </Link>
          <Link href="https://twitter.com/glogo_customs">
            <a className="button">DM Us On Instagram</a>
          </Link>
          <Link href="https://twitter.com/GlogoCustoms">
            <a className="button">DM Us On Twitter</a>
          </Link>
          <Link href="https://discord.gg/ahgs2HqbeK">
            <a className="button">Join the Glogo Discord</a>
          </Link>
        </div>
      </section>
    </main>
  );
}
