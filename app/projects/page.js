import styles from "./projects.module.scss";
import { getPosts } from "@/utils";

export default async function Projects() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <section className={styles.projects}>
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
                <h4 className="sr-only">Tech Stack</h4>
                <ul className="badge-list badge-list-transparent">
                  <li>Javascript</li>
                  <li>React</li>
                  <li>Express</li>
                  <li>Vercel</li>
                  <li>Font Awesome</li>
                  <li>GSAP</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      {posts.map((post) => (
        <a href={`/post/${post.slug}`} key={post.id}>
          <img src={post.image} alt="" />
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          {/* <p>{new Date(post.createdAt).toLocaleDateString()}</p> */}
        </a>
      ))}
    </section>
  );
}
