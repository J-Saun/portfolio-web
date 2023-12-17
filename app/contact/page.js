import styles from "./page.module.scss";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={`container ${styles.container}`}>
        <h2>Interested in working together?</h2>
        <a href="#" className="btn">
          Say Hello <span className="sr-only">Via Email</span>
          <object
            data="envelope-regular.svg"
            type="image/svg+xml"
            aria-hidden="true"
            role="presentation"
          />
        </a>
      </div>
    </section>
  );
};
export default Contact;
