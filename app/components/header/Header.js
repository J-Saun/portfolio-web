import styles from "./header.module.scss";

export const metadata = {
  // title: "JS | Portfolio",
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
        <div>
          <h2 className="sr-only">Social Media Links</h2>
          <ul>
            <li>
              <a href="https://github.com/J-Saun/J-Saun">
                <object
                  data="github.svg"
                  type="image/svg+xml"
                  tabIndex="-1"
                  alt=""
                />
                <span className="sr-only">Github</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/joshua-a-saunders/">
                <object
                  data="linkedin.svg"
                  type="image/svg+xml"
                  tabIndex="-1"
                  alt=""
                />
                <span className="sr-only">LinkedIn</span>
              </a>
            </li>

            <li>
              <a href="#" aria-label="Email">
                <object
                  data="envelope-regular.svg"
                  type="image/svg+xml"
                  tabIndex="-1"
                  alt=""
                  role="presentation"
                />
                <span className="sr-only">Via Email</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
