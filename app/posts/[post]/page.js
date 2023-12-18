import { PortableText } from "@portabletext/react";
import { getPostData } from "@/utils";
import styles from "./page.module.scss";

export default async function Post({ params }) {
  const slug = params.post;
  const post = await getPostData(slug);
  console.log(post);

  return (
    <section id="home" className={`${styles.post}`}>
      <div className={`${styles.container}`}>
        <h1>{post.title}</h1>
        <img src={post.image} alt={`Sample image of ${post.slug} code`} />
      </div>
      <PortableText value={post.content} />
    </section>
  );
}
