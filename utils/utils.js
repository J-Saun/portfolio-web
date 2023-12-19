import { createClient, groq } from "next-sanity";
import { set } from "sanity";

const clientConfig = {
  projectId: "9nfj568a",
  dataset: "production",
  apiVersion: "2023-11-12",
  useCdn: false,
};

export const useClient = () => createClient(clientConfig);

export async function fetchThemeFromServer() {
  const client = useClient();

  const response = await client.fetch(
    groq`*[_type == "theme"][0]{
        themeName,
        clrTxt,
        clrBg,
        clrPrimary,
        clrPrimaryLt,
        clrPrimaryText,
        clrGrayLt,
        clrGrayMd,
        clrGrayDk,
    }`
  );
  // console.log("Theme:", response);

  return response;
}

export async function getPosts() {
  const client = useClient();
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

  // console.log("Get Posts:", response);

  return response;
}

export async function getPostData(slug) {
  const client = useClient();

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

  // console.log("Get Post Data:", response);

  return response;
}
