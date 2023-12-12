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
      <section id="work">
        <div className="container">
          <h2>Recent Work</h2>

          {posts.map((post) => (
            // <a href={`/post/${post.slug}`} key={post.id}>
            <a href="#">
              <div className="project-card">
                <div className="project-card-preview"></div>
                <img src={post.image} alt="" />
                <div className="project-card__desc">
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  {/* <p>{new Date(post.createdAt).toLocaleDateString()}</p> */}
                </div>
              </div>
            </a>
          ))}

          <div className="project-card">
            <div className="project-card-preview">
              <img src=""></img>
              <div className="project-card__desc">
                <h3>Project name</h3>
                <p>Project description</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
