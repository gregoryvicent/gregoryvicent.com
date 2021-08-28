import Head from "next/head";
import Image from "next/image"

import Layout from "../components/layout";

import style from "../styles/home.module.css"

import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Gregory Vicent | Home</title>
      </Head>

      <div className={style.avatar_box}>
        <Image
          className={style.avatar}
          src="/img/gregoryvicent.jpg"
          alt="Gregory Vicent"
          width="150"
          height="150"
        />
      </div>
      <h1>Gregory Vicent</h1>
      <h2 className={style.h2}>Programador Web y Creador de Contenido</h2>
      <hr />
      <article>
        <p>
          Hola mi querido ser del otro lado de la pantalla, muchas gracias por
          visitar este humilde sitio web.
        </p>
        <br />
        <p>
          Soy Gregory Vicent un apasionado programador que actualmente se
          especializa en el desarrollo web, me entusiasma el crecimiento
          personal y compartir algunas de las cosas que he aprendido en espacios
          como este.
        </p>
        <br />
        <p>
          Ademas me declaro un amante incondicional de las tecnologías oscuras y
          misteriosas que construyen nuestro mundo actual.
        </p>
        <br />
        <p>
          Aunque siempre estoy aprendiendo nuevas cosas puedo decir que estos
          son mis lenguajes más fuertes a día de hoy:
        </p>
      </article>
    </Layout>
  );
}
