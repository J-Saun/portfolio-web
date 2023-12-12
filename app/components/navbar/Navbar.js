import Link from "next/link";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav id="primary-nav" className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/projects">Resume</Link>
      <button href="#" className="btn btn--small" aria-hidden="true">
        <object
          data="arrow-up-right-from-square-solid.svg"
          type="image/svg+xml"
        ></object>
        Resume
      </button>
    </nav>
  );
}
