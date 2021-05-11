import Head from "next/head";
import Main from "../components/Main";

import { getAllArticles, getAllGalleries } from "../lib/api";

function Home({ allPosts, gallery }) {
  return (
    <>
      <Head />
      <Main allPosts={allPosts} gallery={gallery} />
    </>
  );
}

Home.getInitialProps = async (ctx) => {
  const allPosts = await getAllArticles(false);
  const gallery = await getAllGalleries(false);
  return { allPosts, gallery };
};

export default Home;
