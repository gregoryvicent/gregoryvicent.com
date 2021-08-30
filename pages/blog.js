// Next.js imports
import Head from "next/head";
import Link from "next/link";
// My components imports
import Date from "../components/date";
import Layout from "../components/layout";
// Styles imports
import utilStyles from "../styles/utils.module.css";
// Function that return the blog posts
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

// Representation of the Blog section
export default function Blog({ allPostsData }) {
  return (
    <Layout>

      <Head>
        <title>Gregory Vicent | Blog</title>
      </Head>
      <h1>Blog</h1>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      
    </Layout>
  );
}
