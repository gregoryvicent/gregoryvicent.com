import styles from '../../styles/Presentation.module.css'

export default function Presentation(): JSX.Element {
  return (
    <div className={styles.Presentation}>
      <p className={styles.PresentationText}>Hola, soy</p>
      <h1 className={styles.PresentationMyName}>Gregory Vicent</h1>
      <p>Web Developer</p>
    </div>
  )
}
