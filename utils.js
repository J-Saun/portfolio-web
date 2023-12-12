import { createClient, groq } from "next-sanity";

const clientConfig = {
  projectId: "9nfj568a",
  dataset: "production",
  apiVersion: "2023-11-12",
  useCdn: false,
};

export async function getPosts() {
  const client = createClient(clientConfig);
  const response = await client.fetch(
    groq`*[_type == "post"]{
        _id,
        _createdAt,
        title,
        'author': author->name,
        'image': mainImage.asset->url,
        'slug': slug.current,
    }`
  );

  return response;
}
