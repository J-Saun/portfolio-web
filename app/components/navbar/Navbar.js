import Link from "next/link";
import styles from "./Navbar.module.scss";
import { ArrowUpRightSVG, BarsSolidSVG, XSVG } from "../elements/buttons/icons";

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
                <ArrowUpRightSVG className={`btn btn--small ${styles.icon}`} />
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <button className="" type="button" aria-controls="primary-nav">
          {/* <img src="bars-solid.svg" aria-hidden="true" /> */}
          <BarsSolidSVG className={`${styles.icon}`} />
          <span className="sr-only">Toggle Navigation Menu</span>
        </button>
      </div>
    </div>
  );
}
