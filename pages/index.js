// Next.js imports
import Head from "next/head";
import Image from "next/image"
import Link from "next/link"
// My components imports
import Layout from "../components/layout";
// Style imports
import style from "../styles/home.module.css"
// Representation of the Home section
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
      <h1 className={style.title}>Gregory Vicent</h1>
      <p className={style.subtitle}>Amante de la Tecnología y Empedernido Emprendedor</p>
      <hr />
      <article>
        <h3>Leeme, por favor 😁...</h3>
        <p>
          Hola mi querido ser del otro lado de la pantalla, muchas gracias por
          visitar este humilde sitio web.
        </p>
        <br />
        <p>
          Lo sé, este podría parecer un típico portafolio de trabajo, y siendo honesto comenzó como eso, sin embargo, mientras desarrollaba este espacio en internet decidí dar un giro en el objetivo del proyecto para crear algo que ayude a los ademas y no unicamente a mis intereses. 
        </p>
        <br />
        <p>
          No soy un gurú del software ni empece a programar a los 9 años, soy un joven adulto como cualquier otro. Un adulto joven que se enamoro 💕 irremediablemente como pasa tanto en esta edad, solo que yo me encontré con el amor al código 🧑‍💻.
        </p>
        <br />
        <p>
          Mi intención no es aburrirte con la historia de mi vida <i>(eso lo puedo hacer en alguna entrada del blog </i>😆<i>)</i>, solo busco que se entienda la meta de este proyecto la cual es divulgar información que ayude a todos los que amamos este mundo de la tecnología.
        </p>
        <br/>
        <p>
          Este es un proyecto vivo al que con el tiempo 🕰 tengo planeado integrar nuevas funcionalidades para que entre todos podamos interactuar y ayudarnos como comunidad ❤️‍🔥
        </p>
        <br/>
        <p>
          Y si, que este sitio web se llame <b>gregoryvicent.com</b> <i>(mi nombre)</i> también me parece bastante egocéntrico de mi parte, pero ya había comprado el dominio y debo sacarle partido.
        </p>
        <br/>
        <p>
          Con esta breve introducción dejo que sigas explorando 🧭 el contenido que se alberga aquí, y si quieres conocer un poco más de mi historia seria un honor que leyeras <Link href="posts/gregory-vicent">este articulo</Link> del blog.
        </p>
      </article>

      <article className={style.news_section}>
        <h3>Versión 0.0.1 🌠:</h3>
        <p>
          En estos momentos <b>gregoryvicent.com</b> se encuentra en su versión 0.0.1, es decir, es un proyecto en pañales 👶.
        </p>
        <br />
        <p>
          El objetivo de esta versión era tener un producto mínimo viable que fuese funcional y que agradara a nuestra hermosa 😍 comunidad.
        </p>
        <br/>
        <p>
          Como se dijo antes este es un proyecto que continuara creciendo e integrando más funcionalidades, pero de momento nos centraremos en mejorar lo máximo posible las bases principales que ya se tienen:
        </p>
        <br/>
        <ul>
          <li><Link href="/blog">Sección de Blog</Link></li>
          <li><Link href="/tutoriales">Sección de Tutoriales</Link></li>
          <li><Link href="/juguetes">Sección de Juguetes</Link></li>
        </ul>
        <br/>
        <p>
          Como se puede apreciar de momento <b>gregoryvicent.com</b> no es más que un sitio web de blogs como cualquier otro <i>(eso no quiere decir que no le este poniendo cariño desde el inicio </i>😑<i>)</i>, y eso es lo que busco para estos comienzos.
        </p>
        <br/>
        <p>
          Sin embargo quiero desarrollar nuevas y mejores maneras de fomentar la divulgación de conocimientos por lo que pronto llegaran nuevas actualizaciones con más funcionalidades que apoyen este fin.
        </p>
        <a target="_blank" href="https://github.com/Gregory142000/gregoryvicent.com" className={style.link_button}>Si quieres contribuir <i className="fab fa-github"></i></a>
        <a target="_blank" href="mailto:gregory.work14@gmail.com" className={style.link_button}>Si quieres contactarme 💌</a>
      </article>
    </Layout>
  );
}
