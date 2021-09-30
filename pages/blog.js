// Next.js imports
import Head from "next/head";
import Link from "next/link";
// My components imports
import Date from "../components/date";
import Layout from "../components/layout";
// Styles imports
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/blog.module.css";
// Function that return the blog posts
import { getSortedData } from "../lib/handleFS";

export async function getStaticProps() {
  const allPostsData = await getSortedData('posts');
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
        <title>Blog | Gregory Vicent</title>
      </Head>
      <h1 className={styles.h1}>Blog 😄</h1>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${styles.section}`}>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={`${utilStyles.lightText} ${styles.small}`}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
