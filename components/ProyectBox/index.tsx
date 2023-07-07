import Image from "next/image"

import ProyectBoxInterface from "../../interfaces/proyectBoxInterface"

import styles from "../../styles/ProyectBox.module.css"

const ProyectBox: React.FC<ProyectBoxInterface> = ({
    title,
    src,
    alt,
    text,
    link
}) => {
    return (
        <article className={styles.ProyectBox}>
            <h3 className={styles.ProyectBoxTitle}>{title}</h3>
            <div className={styles.ProyectBoxInfo}>
                <Image src={src} alt={alt} className={styles.ProyectBoxImage}/>
                <p className={styles.ProyectBoxText}>{text}</p>
            </div>
            <div className={styles.ProyectBoxLinks}>
                <a href={link} target="_blank" className={styles.ProyectBoxLink}>Ir al proyecto</a>
            </div>
        </article>
    )
}

export default ProyectBox