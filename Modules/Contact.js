import styles from "../styles/Jumbotron.module.css";

import Link from "next/link";

export default function contact() {
  return (
    <section className={styles.jumbotron}>
      <h2>
        Any questions? <span>Contact us.</span>
      </h2>
      <p>
        We are looking forward to hearing from you. Feel free to contact us if
        you have any questions!
      </p>
      <Link href="/contact">
        <a className="button">Contact Us</a>
      </Link>
    </section>
  );
}
