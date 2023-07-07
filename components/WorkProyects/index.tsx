import ProyectBox from "../ProyectBox"

import stylesGeneric from "../../styles/Generics.module.css"
import styles from "../../styles/WorkProyects.module.css"

import gvc from "../../img/perfil_code.png"
import miCara from "../../img/micara.jpg"

export default function WorkProyects(): JSX.Element {
    return (
        <>
            <h2 className={stylesGeneric.titles}>Proyectos<br /> Actuales</h2>
            <div>
                <p className={stylesGeneric.textNormal}>Estos son los proyectos en los que me encuentro invirtiendo mi tiempo en la actualidad:</p>
                <div>
                    <ProyectBox
                        title="Gregory Vicent Code"
                        src={gvc}
                        alt="Gregory Vicent Code logo"
                        text="Un canal de youtube dedicado a compartir conocimiento referente al mundo del código."
                        link="https://www.youtube.com/@GregoryVicent"
                    />
                    <ProyectBox
                        title="Este mismo sitio web"
                        src={miCara}
                        alt="Gregory Vicent Foto"
                        text="Aquí construyo mi pequeño espacio en internet usando el poder Javascript y Next.js"
                        link="https://gregoryvicent.com"
                    />
                </div>
                <div className={styles.WorkProyectsExperienseSection}>
                    <h3 className={styles.WorkProyectsExperienseTitle}>Otras<br /> Experiencias</h3>
                    <div>
                        <hr className={styles.WorkProyectsExperienseLine}/>
                        <h4 className={styles.WorkProyectsExperienseSubtitle}>Freelancer</h4>
                        <p className={styles.WorkProyectsExperienseText}>Actualmente sigo trabajando como programador independiente apoyando a individuos y empresas en sus proyectos de software.</p>
                        <span><small className={styles.WorkProyectsExperienseYears}>(2021-Actualidad)</small></span>
                        <hr className={styles.WorkProyectsExperienseLine}/>
                        <br />
                        <hr className={styles.WorkProyectsExperienseLine}/>
                        <h4 className={styles.WorkProyectsExperienseSubtitle}>Frontend Web Developer en PeekAll</h4>
                        <p className={styles.WorkProyectsExperienseText}>Trabaje en una pequeña startup que conecta deportistas con coaches desenvolviendo el papel de Frontend con Next.js y Typescript.</p>
                        <span><small className={styles.WorkProyectsExperienseYears}>(2022-2022)</small></span>
                        <hr className={styles.WorkProyectsExperienseLine}/>
                        <br />
                        <hr className={styles.WorkProyectsExperienseLine}/>
                        <h4 className={styles.WorkProyectsExperienseSubtitle}>Programador PHP en la Alcaldía de Caracas</h4>
                        <p className={styles.WorkProyectsExperienseText}>Serví como programador PHP en el equipo encargado de desarrollar aplicaciones web tanto para uso interno como público en la Alcaldía de Caracas.</p>
                        <span><small className={styles.WorkProyectsExperienseYears}>(2018-2022)</small></span>
                        <hr className={styles.WorkProyectsExperienseLine}/>
                    </div>
                </div>
            </div>
        </>
    )
}