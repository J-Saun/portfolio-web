import { EnvelopeSVG } from "../components/elements/buttons/icons";
import styles from "./page.module.scss";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={`container ${styles.container}`}>
        <h2>Interested in working together?</h2>
        <a href="#" className="btn">
          Say Hello <span className="sr-only">Via Email</span>
          <EnvelopeSVG className={`${styles.icon}`} />
        </a>
      </div>
    </section>
  );
};
export default Contact;
