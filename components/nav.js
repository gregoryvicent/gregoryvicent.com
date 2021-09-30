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
          <p className={ style.nav_text }>Visita el blog, aquí divago y hablo de cosas que captan mi atención, tal vez algún post llame tu interés 😉</p>
        </div>
      </Link>
      <Link href="/juguetes">
        <div className={ className } >
          <h4 className={ style.nav_title }>Juguetes &#8658;</h4>
          <p className={ style.nav_text }>Algunos proyectos interesantes para poner manos sobre el código y crear cosas chulas 👾</p>
        </div>
      </Link>
      <Link href="/sobre-mi">
        <div className={ className } >
          <h4 className={ style.nav_title }>Sobre Mí &#8658;</h4>
          <p className={ style.nav_text }>Si quieres saber un poco más sobre mi como profesional, mis proyectos y mis contactos 👨‍💻</p>
        </div>
      </Link>
    </nav>
  )
}
