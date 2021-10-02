// Next.js imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image"
// My components imports
import Layout from "../components/layout";
// My styles
import styles from "../styles/sobre-mi.module.css";
import utils from "../styles/utils.module.css"

function Technologies(props) {
  return(
    <figure className={styles.figure}>
      <Image 
        src={props.src}
        alt={props.technology}
        width="50"
        height="50"
        title={props.technology}
      />
      <figcaption className={styles.figcaption}>{props.technology}</figcaption>
    </figure>
  )
}

// Representation of the Tutoriales section
export default function Sobre_Mi() {
  return (
    <Layout>
      <Head>
        <title>Sobre Mí | Gregory Vicent</title>
        <meta name="description" content="Aquí podras saber un poco más sobre Gregory Vicent como profesional en el mundo del desarrollo web y apasionado programador."/>

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sobre mí | Gregory Vicent" />
        <meta property="og:description" content="Aquí podras saber un poco más sobre Gregory Vicent como profesional en el mundo del desarrollo web y apasionado programador." />
        <meta property="og:image" content="https://gregoryvicent.com/LOGO_negative.svg" />
        <meta property="og:url" content="https://gregoryvicent.com/sobre-mi" />
        <meta property="og:site_name" content="gregoryvicent.com" />

        <meta name="twitter:title" content="Sobre mí | Gregory Vicent" />
        <meta name="twitter:description" content="Aquí podras saber un poco más sobre Gregory Vicent como profesional en el mundo del desarrollo web y apasionado programador." />
        <meta name="twitter:image" content="https://gregoryvicent.com/LOGO_negative.svg" />
        <meta name="twitter:site" content="@vicentgregory" />
        <meta name="twitter:creator" content="@vicentgregory" />
      </Head>
      <section>
        <h1>Sobre Mí 🦾</h1>
        
        <div className={styles.imageBox}>
          <div>
            <Image 
              src="/img/gregoryvicent.jpg"
              alt="Gregory Vicent"
              width="180"
              height="180"
              className={styles.image}
            />
          </div>
          <Link href="/assets/Gregory_Vicent_Curriculum.pdf">CV para imprimir</Link>
        </div>

        <br />

        <div className={utils.container}>
          <ul className={styles.navList}>
            <li><Link href="#acerca-de">Acerca de</Link></li>
            <li><Link href="#contacto">Contacto</Link></li>
            <li><Link href="#experiencia">Experiencia</Link></li>
            <li><Link href="#educacion">Educación</Link></li>
            <li><Link href="#habilidades">Habilidades</Link></li>
            <li><Link href="#tecnologias">Tecnologías</Link></li>
            <li><Link href="#otros">Otros Intereses</Link></li>
          </ul>
        </div>

        <br />

        <h2 className={styles.subtitle} id="acerca-de">Acerca de:</h2>

        <p>Llevo aproximadamente 4 años enfocado en el desarrollo web trabajando tanto en la construcción de arquitectura en el back-end como en el diseño, maquetación y programación de la interactividad en el Front-end.</p>

        <br />

        <p>Tengo experiencia y disfruto del diseño e implementación de bases de datos o aplicando el consumo de API REST directamente en las aplicaciones web.</p>

        <br />

        <p>Ademas de mantenerme en continuo aprendizaje y trabajando en proyectos como freelancer o en colaboración con alguna organización también dedico mi tiempo a escribir y hacer contenido digital sobre tecnología o cualquier tema que considere que puede influir de forma positiva a la vida de los espectadores.</p>

        <br />

        <p>Aunque disfruto de la libertad de encarar un proyecto de forma independiente como freelancer también he aprendido lo provechoso de la colaboración con un equipo de trabajo manteniendo una comunicación efectiva en donde todos podamos ayudarnos y aprender mutuamente.</p>
       
        <br />

        <h2 className={styles.subtitle} id="contacto">Contacto:</h2> 

        <ul className={styles.listContact}>
          <li>Me encuentro viviendo en Caracas, Venezuela.</li>
          <li>gregory.work14@gmail.com</li>
          <li>(426) 519 1440 / (212) 442 2842</li>
          <li>https://gregoryvicent.com</li>
        </ul>
    
        <br />

        <h2 className={styles.subtitle} id="experiencia">Experiencia:</h2>

        <ul className={styles.listContact}>
          <li>Programador Front-end en la start-up "PeekAll".</li>
          <li>Programador Web en la alcaldía de Caracas como parte del equipo encargado del desarrollo de servicios y aplicaciones web.</li>
          <li>Experiencia en diversos proyectos como freelancer.</li>
        </ul>

        <br />

        <h2 className={styles.subtitle} id="educacion">Educación:</h2>

        <ul className={styles.listContact}>
          <li>Educación autodidacta permanente y continua.</li>
          <li>Actualmente estudio en la Universidad Central de Venezuela Lic. Ciencias Actuariales</li>
          <li>Curso de programación en React.Js impartido por la plataforma de 
'Platzi'(Código: 93d14672-f495-41be-8974-Seódbff7b165)</li>
          <li>Introducción al Desarrollo Web impartido por 'Google Activate'(Id: S4Z 2N8 
JYQ)</li>
          <li>Más de mis certificados en: <a href="https://www.linkedin.com/in/gregory-vicent-401883202/" target="_blank">https://www.linkedin.com/in/gregory-vicent-401883202/</a></li>
        </ul>

        <br />

        <h2 className={styles.subtitle} id="habilidades">Habilidades:</h2>

        <ul className={styles.listContact}>
          <li>Programación Front-end.</li>
          <li>Programación Back-end.</li>
          <li>Diseño y Maquetación Web.</li>
          <li>Asesoramiento.</li>
          <li>Aprendizaje Autodidacta Efectivo.</li>
          <li>Ingles Intermedio (y mejorando)</li>
        </ul>

        <br />

        <div className={utils.container}>
          
          <h2 className={styles.subtitle} id="tecnologias">Tecnologías:</h2>

          <div className={styles.technologyBox}>
            
            <Technologies src="/img/html5.svg" technology="HTML 5"/>
            <Technologies src="/img/css3.svg" technology="CSS 3"/>
            <Technologies src="/img/javascript.svg" technology="JavasScript"/>
            <Technologies src="/img/react.svg" technology="React.js"/>
            <Technologies src="/img/nextdotjs.svg" technology="Next.js"/>
            <Technologies src="/img/nodedotjs.svg" technology="Node"/>
            <Technologies src="/img/express.svg" technology="Express"/>
            <Technologies src="/img/php.svg" technology="PHP"/>
            <Technologies src="/img/mysql.svg" technology="MySql"/>
            <Technologies src="/img/git.svg" technology="Git"/>
          </div>

        </div>

        <br />
        
        <h2 className={styles.subtitle} id="otros">Otros Intereses:</h2>

        <ul className={styles.listContact}>
          <li>Artes marciales y defensa personal.</li>
          <li>Aprendizaje autodidacta.</li>
          <li>Emprendimiento.</li>
          <li>Apasionado de los videojuegos desde que tengo uso de razón.</li>
          <li>Finanzas y economía.</li>
          <li>Crecimiento personal.</li>
        </ul>

        <br />
      </section>

    </Layout>
  );
}
