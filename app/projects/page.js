import styles from "./projects.module.scss";
import { getPosts } from "@/utils";

export default async function Projects() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <section className={styles.projects}>
      {" "}
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
