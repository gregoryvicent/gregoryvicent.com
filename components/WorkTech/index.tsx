import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faJs,
    faPython,
    faPhp,
    faReact,
    faNode,
    faLinux,
    faGit,
    faDocker
} from "@fortawesome/free-brands-svg-icons"

import stylesGeneric from "../../styles/Generics.module.css"
import styles from "../../styles/WorkTech.module.css"

export default function WorkTech(): JSX.Element {
    return (
        <>
            <h2 className={stylesGeneric.titles}>Mis<br />Tecnologías</h2>
            <div>
                <p className={stylesGeneric.textNormal}>Como programador soy un apasionado por la tecnología y estas son algunas de las que mejor manejo:</p>
                <div className={styles.WorkTechIconsBox}>
                    <div className={styles.WorkTechIconBox}>
                        <FontAwesomeIcon icon={faJs} className={styles.WorkTechIcon} />
                        <span className={styles.WorkTechIconName}>JavaScript</span>
                    </div>
                    <div className={styles.WorkTechIconBox}>
                        <FontAwesomeIcon icon={faPython} className={styles.WorkTechIcon} />
                        <span className={styles.WorkTechIconName}>Python</span>
                    </div>
                    <div className={styles.WorkTechIconBox}>
                        <FontAwesomeIcon icon={faPhp} className={styles.WorkTechIcon} />
                        <span className={styles.WorkTechIconName}>PHP</span>
                    </div>
                    <div className={styles.WorkTechIconBox}>
                        <FontAwesomeIcon icon={faReact} className={styles.WorkTechIcon} />
                        <span className={styles.WorkTechIconName}>React.js</span>
                    </div>
                    <div className={styles.WorkTechIconBox}>
                        <FontAwesomeIcon icon={faNode} className={styles.WorkTechIcon} />
                        <span className={styles.WorkTechIconName}>Node.js</span>
                    </div>
                    <div className={styles.WorkTechIconBox}>
                        <FontAwesomeIcon icon={faLinux} className={styles.WorkTechIcon} />
                        <span className={styles.WorkTechIconName}>Linux</span>
                    </div>
                    <div className={styles.WorkTechIconBox}>
                        <FontAwesomeIcon icon={faGit} className={styles.WorkTechIcon} />
                        <span className={styles.WorkTechIconName}>Git</span>
                    </div>
                    <div className={styles.WorkTechIconBox}>
                        <FontAwesomeIcon icon={faDocker} className={styles.WorkTechIcon} />
                        <span className={styles.WorkTechIconName}>Docker</span>
                    </div>
                </div>
            </div>
        </>
    )
}