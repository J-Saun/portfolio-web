import styles from "./page.module.scss";
// import { getPosts } from "@/utils";
import Header from "./components/header/Header";
// import BadgeList from "./components/badges/BadgeList";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";

export default async function Home() {
  // const posts = await getPosts();

  return (
    <section id="home" className={`${styles.home}`}>
      <div className={`${styles.container}`}>
        <Header />
        <About />
        <Projects />
        <Contact />
      </div>
    </section>
  );
}
