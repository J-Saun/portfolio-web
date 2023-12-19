import styles from "./page.module.scss";

import Header from "./components/header/Header";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Footer from "./components/footer/Footer";

export default async function Home() {
  return (
    <section id="home" className={`${styles.home}`}>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </section>
  );
}
