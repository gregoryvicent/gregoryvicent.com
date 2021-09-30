import styles from '../styles/card.module.css'

export default function Card(props) {
  return(
    <div className={`${styles.card} ${props.image}`}>
      <div className={styles.infoBox}>
        <p className={styles.title}>{props.title}</p>
        <div className={styles.buttonBox}>
          <a href={props.webSite} target="_blank">Ver Proyecto</a>
          <a href={props.gitHub} target="_blank">Más Detalles</a>
        </div>
      </div>
    </div>
  )
}
