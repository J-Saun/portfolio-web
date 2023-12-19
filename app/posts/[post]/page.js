import { getPostData } from "@/utils/utils";

export default async function Post({ params }) {
  const slug = params.post;
  const post = await getPostData(slug);
  // console.log(post);

  return <div>{post.title}</div>;
}
