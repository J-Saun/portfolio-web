import styles from "./page.module.scss";
import { getPosts } from "@/utils";
import Header from "./components/header/Header";
export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <section className={`main-content ${styles.home}`}>
        <div className="container">
          <Header />
          <div>
            <h2 className="sr-only">Social Media Links</h2>
            <ul>
              <li>
                <a href="https://github.com/J-Saun/J-Saun">
                  <object data="github.svg" type="image/svg+xml" alt="" />
                  <span className="sr-only">Github</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/joshua-a-saunders/">
                  <object data="linkedin.svg" type="image/svg+xml" alt="" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </li>

              <li>
                <a href="#" aria-label="Email">
                  <object
                    data="envelope-regular.svg"
                    type="image/svg+xml"
                    alt=""
                    role="presentation"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

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
