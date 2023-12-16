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
                  <object
                    data="github.svg"
                    type="image/svg+xml"
                    tabindex="-1"
                    alt=""
                  />
                  <span className="sr-only">Github</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/joshua-a-saunders/">
                  <object
                    data="linkedin.svg"
                    type="image/svg+xml"
                    tabindex="-1"
                    alt=""
                  />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </li>

              <li>
                <a href="#" aria-label="Email">
                  <object
                    data="envelope-regular.svg"
                    type="image/svg+xml"
                    tabindex="-1"
                    alt=""
                    role="presentation"
                  />
                  <span className="sr-only">Via Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="container">
          <div>
            Hey there! I'm a coding enthusiast who's really into JavaScript and
            React. I haven't worked in tech yet, but I'm super excited to dive
            in. Apart from coding, you'll often find me outdoors, soaking up the
            sun and enjoying nature. It's my way of balancing the screen time
            and keeping things real. Even though I haven't had a tech job yet,
            don't let that fool you. I'm all geared up to bring my A-game to the
            tech world. Can't wait to see where this journey takes me!
          </div>
          <div>
            <h2>A few technologies I've been working with lately:</h2>
            <ul className="badge-list badge-list-purple">
              <li>Javascript</li>
              <li>SCSS</li>
              <li>React</li>
              <li>Node.js</li>
              <li>PHP</li>
              <li>Netlify</li>
              <li>Vercel</li>
              <li>GIT</li>
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
