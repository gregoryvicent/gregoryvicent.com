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
        <title>Sobre Mí | Gregory Vicent</title>
      </Head>
      <h1>Sobre Mí 🦾</h1>
     <h2
        style={{
          fontSize: "2.5rem",
          textAlign: "center",
          marginTop: "15vh",
          marginButton: "20vh",
          backgroundColor: "yellow",
          borderRadius: "15px"
        }}
      >
        Estamos trabajando para construir algo increíble aquí 🧑‍🔧...
      </h2>

    </Layout>
  );
}
