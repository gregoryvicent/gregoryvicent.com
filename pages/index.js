// Next.js imports
import Head from "next/head";
import Image from "next/image"
import Link from "next/link"
// My components imports
import Layout from "../components/layout";
import Card from "../components/card" 
// Style imports
import style from "../styles/home.module.css"
import styles from "../styles/card.module.css"
import utiles from "../styles/utils.module.css"
// Representation of the Home section
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Home | Gregory Vicent</title>
        <meta name="description" content="Hola, soy Gregory Vicent y te doy la bienvenida a mi sitio web personal, aqui podras encontrar blogs, videos y mi propio trabajo en el mundo del código."/>

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home | Gregory Vicent" />
        <meta property="og:description" content="Hola, soy Gregory Vicent y te doy la bienvenida a mi sitio web personal, aqui podras encontrar blogs, videos y mi propio trabajo en el mundo del código." />
        <meta property="og:image" content="https://gregoryvicent.com/LOGO_negative_small.png" />
        <meta property="og:url" content="https://gregoryvicent.com" />
        <meta property="og:site_name" content="gregoryvicent.com" />

        <meta name="twitter:title" content="Home | Gregory Vicent" />
        <meta name="twitter:description" content="Hola, soy Gregory Vicent y te doy la bienvenida a mi sitio web personal, aqui podras encontrar blogs, videos y mi propio trabajo en el mundo del código." />
        <meta name="twitter:image" content="https://gregoryvicent.com/LOGO_negative_small.png" />
        <meta name="twitter:site" content="@vicentgregory" />
        <meta name="twitter:creator" content="@vicentgregory" />
      </Head>

      <section className={style.homeHeader}>
        <div className={style.avatar_box}>
          <Image
            className={style.avatar}
            src="/img/gregoryvicent.jpg"
            alt="Gregory Vicent"
            width="180"
            height="180"
          />
        </div>
        <h1 className={style.title}>Gregory Vicent</h1>
        <p className={style.subtitle}>Amante de la Tecnología y Creador de Contenido</p>
        <hr />
      </section>

      <section>

        <div className={utiles.container} >

          <ul className={utiles.myList}>
            <li><Link href={"#sobre-mi"}>Un poco sobre mí</Link></li>
            <li><Link href={"#proyectos"}>Algunos proyectos interesantes</Link></li>
          </ul>

        </div>

        <br />

        <h2 id="sobre-mi">Un poco sobre mí</h2>

        <br />

        <p className={style.firstText}><b>Hola querido ser del otro lado de la pantalla</b> muchas gracias por visitar este humilde sitio web... </p>

        <br /> 

        <p>Desde hace un tiempo me enamore del código y todo lo relacionado con el mundo de la informática así que hice lo que toda persona enamorada haría:</p>

        <br /> 

        <p><b>Me entregue por completo a mi pasión.</b></p>

        <br /> 

        <p>De esta forma en la actualidad me dedico principalmente a tres cosas:</p>

        <br /> 

        <p><b>Mejorar mi marca personal:</b> Consolido mi imagen como un profesional en el mundo del código, enfocado en el desarrollo web pero con perspectiva a futuro de abarcar nuevos y emocionantes campos.</p>

        <br /> 

        <p><b>Creación de contenido:</b> “No hay mejor forma de aprender que enseñando”. Con esto en mente me gusta pasar mi tiempo libre escribiendo en el <Link href={"/blog"}>blog</Link> que vive en este mismo sitio web y creando <Link href={"/juguetes"}>videos</Link> donde desarrollo proyectos con diferentes tecnologías para poner manos a la obra.</p>

        <br /> 

        <p><b>Trabajos como Freelancer:</b> Equilibrar una carrera universitaria con el trabajo no es fácil y es por esto que me agrada ser freelancer, puedo colaborar en interesantes proyectos teniendo la flexibilidad de cumplir con los deberes de una carrera.</p>

        <br />
        
        <p>Si quires saber más sobre mí haz click <Link href={"/sobre-mi"}>aquí</Link>.</p>

        <br /> 

      </section>

      <section className={utiles.container}>
        <h2 id="proyectos">Proyectos</h2> 

        <p>Algunas de las cosas que he hecho:</p>

        <br />

        <div>
          <Card
            src="/img/mitfflix.png"
            title="Mitflix"
            image={styles.cardImage_1}
            webSite={"https://gregory142000.github.io/Mittflix/"}
            gitHub={"https://github.com/Gregory142000/Mittflix"}
          /> 
          <Card
            src="/img/gregoryvicent.png"
            title="Este sitio web"
            image={styles.cardImage_2}
            webSite={"https://gregoryvicent.com"}
            gitHub={"https://github.com/Gregory142000/gregoryvicent.com"}
          /> 
        </div>
      </section>
    </Layout>
  );
}
