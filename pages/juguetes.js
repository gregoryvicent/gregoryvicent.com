// Next.js imports
import Head from "next/head";
// My components imports
import Layout from "../components/layout";
// Representation of the Juguetes section
export default function Juguetes() {
  return (
    <Layout>
      <Head>
        <title>Juguetes | Gregory Vicent</title>
      </Head>
      
        <h1>Juguetes 🤖</h1>
  
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
