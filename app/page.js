import styles from "./page.module.scss";
import { getPosts } from "@/utils";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className={`main-content ${styles.home}`}>
      <section>
        <div className="container">
          {" "}
          <h1>Hello, Im Joshua.</h1>
          <p>
            Im a web developer, and passionate about building things for the
            web.
          </p>
          <div>
            <h2 className="sr-only">Social Media Links</h2>
            <ul>
              <a href="https://github.com/J-Saun/J-Saun">
                <object data="github.svg" type="image/svg+xml"></object>
                <span className="sr-only">Github</span>
              </a>
              <a href="https://www.linkedin.com/in/joshua-a-saunders/">
                <object data="linkedin.svg" type="image/svg+xml"></object>
                <span className="sr-only">LinkedIn</span>
              </a>
              <object data="envelope-regular.svg" type="image/svg+xml"></object>
              <a href="#"></a>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <h2>Interested in working together?</h2>
          <a href="#" className="btn">
            Say Hello <span className="sr-only">via email</span>
            <object
              data="envelope-regular.svg"
              type="image/svg+xml"
              aria-hidden="true"
            ></object>
          </a>
        </div>
      </section>
      <footer>
        <div className="container">
          <p>Joshua Saunders @copy</p>
          <a href="https://github.com/J-Saun/J-Saun">View on Github</a>
        </div>
      </footer>
    </main>
  );
}
