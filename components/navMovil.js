import style from "../styles/navMovil.module.css"

export default function NavMovil({ handleNavMovil, isActive }) {

  return (
    <button onClick={ handleNavMovil } className={`hamburger ${style.button} hamburger--collapse ${isActive}`} type="button">
      <span className="hamburger-box">
          <span className="hamburger-inner"></span>
       </span>
    </button>
  )
}
