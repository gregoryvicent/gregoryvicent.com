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
        <meta name="description" content="Gracias por mirar mi blog, confio en que encuentres algo que te interese entre los post que he escrito."/>

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog | Gregory Vicent" />
        <meta property="og:description" content="Gracias por mirar mi blog, confio en que encuentres algo que te interese entre los post que he escrito." />
        <meta property="og:image" content="https://gregoryvicent.com/LOGO_negative_small.png" />
        <meta property="og:url" content="https://gregoryvicent.com/blog" />
        <meta property="og:site_name" content="gregoryvicent.com" />

        <meta name="twitter:title" content="Blog | Gregory Vicent" />
        <meta name="twitter:description" content="Gracias por mirar mi blog, confio en que encuentres algo que te interese entre los post que he escrito." />
        <meta name="twitter:image" content="https://gregoryvicent.com/LOGO_negative_small.png" />
        <meta name="twitter:site" content="@vicentgregory" />
        <meta name="twitter:creator" content="@vicentgregory" />
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
