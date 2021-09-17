// Next.js imports
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// My components imports
import Date from "../../components/date";
import Layout from "../../components/layout";
// Styles imports
import utilStyles from "../../styles/utils.module.css";
// Function that return the blog posts
import { getSortedData } from "../../lib/handleFS";

export async function getStaticProps() {
  const allPostsData = await getSortedData('tutorials/linux');
  return {
    props: {
      allPostsData,
    },
  };
}

// Representation of the Blog section
export default function Linux({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Linux | Gregory Vincet</title>
      </Head>
      
      <div className={utilStyles.header}>
        <Image
          src="/img/linux.svg"
          alt="Linux Icon"
          title="Linux"
          width="100"
          height="100"
        />
        <h1 className={utilStyles.header_title}>Linux</h1>
      </div>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/linux/${id}`}>
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
