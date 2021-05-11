import client, { previewClient } from "./sanity";

const getUniquePosts = (posts) => {
  const slugs = new Set();
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false;
    } else {
      slugs.add(post.slug);
      return true;
    }
  });
};

const postFields = `
  _id,
  title,
  img,
  badge,
  approved,
  'categorie': categorie,
  "relatedMovies": *[_type=='category' && ]{ 
  	title,
  
	},
  subtitle,
  'date': publishedAt,
  'slug': slug.current,
`;

const getClient = (preview) => (preview ? previewClient : client);

export async function getPreviewPostBySlug(slug) {
  const data = await getClient(true).fetch(
    `*[_type == "post" && slug.current == $slug] | order(publishedAt desc){
      ${postFields}
      body
    }`,
    { slug }
  );
  return data[0];
}

export async function getAllPostsWithSlug() {
  const data = await client.fetch(`*[_type == "post"]{ 'slug': slug.current }`);
  return data;
}

export async function getAllPostsForHome(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "post"] &&  | order(publishedAt desc){
      _id,
      title,
      img,
      badge,
      approved,
      'categorie': categorie,
      "relatedMovies": *[_type=='category' && ]{ 
        title,
      
      },
      subtitle,
      'date': publishedAt,
      'slug': slug.current,
        }
    `);
  return getUniquePosts(results);
}

export async function getAllArticles(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "category"] | order(publishedAt desc){
    _id,
    title,
    type,
    "articles": *[_type=='article' && references(^._id)]{ 
      _id,
      title,
      img,
      badge,
      approved,
      subtitle,
      'date': publishedAt,
      'slug': slug.current,
    }
}`);
  return results;
}

export async function getAllGalleries(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "gallery"] | order(publishedAt desc){
    _id,
    title,
    img,
    'date': publishedAt,
    'slug': slug.current,
}`);
  return results;
}

export async function getPostAndMorePosts(slug, preview) {
  const curClient = getClient(preview);
  const [post, morePosts] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        body,
        'comments': *[
                      _type == "comment" && 
                      post._ref == ^._id && 
                      approved == true] {
          _id, 
          name, 
          email, 
          comment, 
          _createdAt
        }
      }`,
        { slug }
      )
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == "post" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc){
        ${postFields}
        body,
      }[0...2]`,
      { slug }
    ),
  ]);
  return { post, morePosts: getUniquePosts(morePosts) };
}
