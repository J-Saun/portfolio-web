import styles from "./header.module.scss";
import { GitHubSVG, LinkedInSVG, EnvelopeSVG } from "../elements/buttons/icons";
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
                {/* <img src="github.svg" tabIndex="-1" alt="github logo" /> */}
                <GitHubSVG className={`${styles.icon}`} />
                <span className="sr-only">Github</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/joshua-a-saunders/">
                <LinkedInSVG className={`${styles.icon}`} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </li>

            <li>
              <a href="#" aria-label="Email">
                <EnvelopeSVG className={`${styles.icon}`} opacity="1" />

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
