// Next.js imports
import Link from 'next/link'
// Styles imports
import style from '../styles/nav.module.css'
// Nav component that represent the right menu
export default function Nav({ className }) {
  return (
    <nav className={ style.nav }>
      <Link href="/blog">
        <div className={ className } >
          <h4 className={ style.nav_title }>Blog &#8658;</h4>
          <p className={ style.nav_text }>Visita mi blog, aquí divago y hablo de cosas que captan mi atención, tal vez algún post llame tu interés 😉</p>
        </div>
      </Link>
      <Link href="/tutoriales">
        <div className={ className } >
          <h4 className={ style.nav_title }>Tutoriales &#8658;</h4>
          <p className={ style.nav_text }>Algúnos tutoriales para poner en practica diversas tecnologías, ¡No hay mejor forma de aprender que enseñando 👨‍💻!</p>
        </div>
      </Link>
      <Link href="/juguetes">
        <div className={ className } >
          <h4 className={ style.nav_title }>Juguetes &#8658;</h4>
          <p className={ style.nav_text }>Mis trabajos, proyectos y juguetes más destacados referentes al mundo del código 👾</p>
        </div>
      </Link>
    </nav>
  )
}