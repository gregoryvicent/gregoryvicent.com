// Next.js imports
import Head from "next/head";
import Link from "next/link";
// My components imports
import Layout from "../components/layout";
import Date from "../components/date";

import utilStyles from "../styles/utils.module.css";

import { getSortedTutorialsData } from "../lib/tutorials";

export async function getStaticProps() {
  const allTutorialsData = await getSortedTutorialsData();
  return {
    props: {
      allTutorialsData,
    },
  };
}

// Representation of the Tutoriales section
export default function Tutoriales({ allTutorialsData }) {
  return (
    <Layout>
      <Head>
        <title>Gregory Vicent | Tutoriales</title>
      </Head>
      <h1>Tutoriales 🦾</h1>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {allTutorialsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/tutorials/${id}`}>
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
