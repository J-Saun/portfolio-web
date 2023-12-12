import styles from "./page.module.scss";
import { getPosts } from "@/utils";

export default async function Home() {
  const posts = await getPosts();
  console.log(posts);

  return (
    <main className={styles.main}>
      {posts.map((post) => (
        <h2>{post.title}</h2>
      ))}
    </main>
  );
}
