import Image from "next/image"

import me from "../../img/micara.jpg"

import styles from "../../styles/WorkPresentation.module.css"
import stylesGeneric from "../../styles/Generics.module.css"

export default function WorkPresentation(): JSX.Element {
    return (
        <>
            <figure className={styles.WorkPresentationImageBox}>
                <Image src={me} alt="Gregory Vicent Foto" className={styles.WorkPresentationImage} />
                <figcaption className={styles.WorkPresentationImageName}>Gregory Vicent</figcaption>
            </figure>
            <div>
                <h1 className={stylesGeneric.titles}>
                    Trabajemos
                    <br />
                    Juntos
                </h1>
                <div>
                    <p className={stylesGeneric.textNormal} >
                        Hola mi querido ser del otro lado de la pantalla.
                    </p>
                    <p className={stylesGeneric.textNormal}>Mi nombre es <strong style={{fontWeight: 800}}>Gregory Vicent</strong>, programador web, y estoy listo para hacer realidad tus proyectos de software.
                    </p>
                    <p className={stylesGeneric.textNormal}>Contactame y cuentame que quieres que construyamos juntos:</p>
                    <p className={styles.WorkPresentationEmail}>gregoryvicent.dev@gmail.com</p>
                </div>
            </div>
        </>
    )
}

