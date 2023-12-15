import styles from "./header.module.scss";

export const metadata = {
  title: "JS | Portfolio",
  greeting: "Hello, I'm Joshua.",
  description:
    "I'm a web developer, and passionate about building things for the web.",
};

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div>
          <p>{metadata.title}</p>
        </div>
        <h1>{metadata.greeting}</h1>
        <p>{metadata.description}</p>
      </div>
    </header>
  );
};

export default Header;
