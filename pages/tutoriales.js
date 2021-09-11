// Next.js imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image"
// My components imports
import Layout from "../components/layout";
// My styles
import styles from "../styles/tutorials.module.css";

// Representation of the Tutoriales section
export default function Tutoriales({ allTutorialsData }) {
  return (
    <Layout>
      <Head>
        <title>Gregory Vicent | Tutoriales</title>
      </Head>
      <h1>Tutoriales 🦾</h1>

      <section className={styles.gridContent}>

      <Link href="/post?subject=node">
        <figure className={styles.figure}>
          <Image 
            src="/img/node.svg"
            alt="Node.js Icon"
            width="50"
            height="50"
          />
          <figcaption className={styles.figcaption}>Node.JS</figcaption>
        </figure>
      </Link>

      <Link href="/">
        <figure className={styles.figure}>
          <Image 
            src="/img/node.svg"
            alt="Node.js Icon"
            width="50"
            height="50"
          />
          <figcaption className={styles.figcaption}>Node.JS</figcaption>
        </figure>
      </Link>

      <Link href="/">
        <figure className={styles.figure}>
          <Image 
            src="/img/node.svg"
            alt="Node.js Icon"
            width="50"
            height="50"
          />
          <figcaption className={styles.figcaption}>Node.JS</figcaption>
        </figure>
      </Link>

      <Link href="/">
        <figure className={styles.figure}>
          <Image 
            src="/img/node.svg"
            alt="Node.js Icon"
            width="50"
            height="50"
          />
          <figcaption className={styles.figcaption}>Node.JS</figcaption>
        </figure>
      </Link>

 
      <Link href="/">
        <figure className={styles.figure}>
          <Image 
            src="/img/node.svg"
            alt="Node.js Icon"
            width="50"
            height="50"
          />
          <figcaption className={styles.figcaption}>Node.JS</figcaption>
        </figure>
      </Link>

 
      <Link href="/">
        <figure className={styles.figure}>
          <Image 
            src="/img/node.svg"
            alt="Node.js Icon"
            width="50"
            height="50"
          />
          <figcaption className={styles.figcaption}>Node.JS</figcaption>
        </figure>
      </Link>

      </section>
    </Layout>
  );
}
