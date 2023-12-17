import styles from "./page.module.scss";
import { getPosts } from "@/utils";
import Header from "./components/header/Header";
// import BadgeList from "./components/badges/BadgeList";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./projects/page";

export default async function Home() {
  // const posts = await getPosts();

  return (
    <>
      <section id="home" className={`${styles.home}`}>
        <div className={`${styles.container}`}>
          <Header />
        </div>
      </section>
      <About />
      <Projects />
      <Contact />
      <section id="contact">
        <div className="container">
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
    </>
  );
}
