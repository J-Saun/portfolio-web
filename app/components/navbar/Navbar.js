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
                <object
                  aria-hidden="true"
                  tabIndex="-1"
                  data="arrow-up-right-from-square-solid.svg"
                  type="image/svg+xml"
                ></object>
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <button type="button" aria-controls="primary-nav">
          <object
            data="bars-solid.svg"
            type="image/svg+xml"
            aria-hidden="true"
          ></object>
          <span className="sr-only">Toggle Navigation Menu</span>
        </button>
      </div>
    </div>
  );
}
