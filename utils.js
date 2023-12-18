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
        'author_img': author->image.asset->url,
        'image': mainImage.asset->url,
        'slug': slug.current,

    }`
  );

  return response;
}

export async function getPostData(slug) {
  const client = createClient(clientConfig);

  // Log the slug parameter
  console.log("Slug:", slug);

  const response = await client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{ 
        _createdAt,
        title,
        'image': mainImage.asset->url,
        'slug': slug.current,
        "content": body
    }`,
    { slug }
  );
  // Log the response from the Sanity client
  console.log("Response:", response);

  return response;
}
