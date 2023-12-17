import styles from "./projects.module.scss";
import { getPosts } from "@/utils";
import Card from "../components/card/Card";

export default async function Projects() {
  const posts = await getPosts();
  console.log(posts);

  return (
    <section id="work" className={styles.projects}>
      <div className="container">
        <h2>Recent Projects</h2>
        {posts.map((post) => {
          return (
            <a href={`/posts/${post.slug}`} key={post._id}>
              <Card
                title={post.title}
                image={post.image}
                author={post.author}
                author_img={post.author_img}
                createdAt={new Date(post._createdAt).toLocaleDateString()}
                description={post.body}
                badges={[
                  "Javascript",
                  "React",
                  "Express",
                  "Vercel",
                  "Font Awesome",
                  "GSAP",
                ]}
              />
            </a>
          );
        })}
      </div>
    </section>
  );
}
// 146

/* <div className="project-card">
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
</div> */

// {posts.map((post) => (
//   // <a href={`/post/${post.slug}`} key={post.id}>
//   <a href="#">
//     <div className={styles.projectCard}>
//       <div className={styles.projectCard__preview}></div>
//       <img src={post.image} alt="" />
//       <div className="project-card__desc">
//         <h3>{post.title}</h3>
//         <p>{post.description}</p>
//         {/* <p>{new Date(post.createdAt).toLocaleDateString()}</p> */}
//       </div>
//     </div>
//   </a>
// ))}
