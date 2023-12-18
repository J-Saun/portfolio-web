import Link from "next/link";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <div className={`container ${styles.navbar}`}>
      <div className={`container ${styles.container}`}>
        <a href="/" className={`${styles.homeLink}`}>
          <abbr title="Joshua Saunders">JS</abbr>
          <span className="sr-only">Portfolio Home Page</span>
        </a>

        <nav
          id="primary-nav"
          className={`${styles.primaryNav}`}
          data-mobile-visible="false"
        >
          <ul>
            <li>
              <Link href="/" id="home-link">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <a href="#" className={`btn btn--small`}>
                <img
                  tabIndex="-1"
                  src={"arrow-up-right-from-square-solid.svg"}
                  aria-hidden="true"
                />
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <button type="button" aria-controls="primary-nav">
          <img src={"bars-solid.svg"} aria-hidden="true" />
          <span className="sr-only">Toggle Navigation Menu</span>
        </button>
      </div>
    </div>
  );
}
