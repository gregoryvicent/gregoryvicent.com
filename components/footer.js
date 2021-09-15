import Image from 'next/image'

import styles from '../styles/footer.module.css'

export default function Footer() {
  return(
    <footer className={styles.footer}>
      <div className={styles.footer_imageBox}>
        <Image
          src="/img/gregoryvicent.jpg"
          alt="Gregory Vicent"
          title="Gregory Vicent"
          width="150"
          height="150"
          className={styles.footer_image}
        />
      </div>
      <div className={styles.footer_infoBox}>
        <h4 className={styles.footer_myName}>Gregory Vicent</h4>
        <p className={styles.footer_description}>Soy un apasionado emprendedor y un irremediable amante de la tecnología, en la actualidad me dedico investigar, aprender y compartir temas relacionados al mundo del código mientras termino mis estudios.</p>
      </div>
    </footer>
  )
}