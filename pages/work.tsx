import Head from "next/head"

import Layout from "../components/Layout"
import WorkPresentation from "../components/WorkPresentation"
import WorkProyects from "../components/WorkProyects"
import WorkTech from "../components/WorkTech"

import styles from "../styles/Generics.module.css"

export default function Work(): JSX.Element {
    return (
        <>
            <Head>
                <title>Work | Gregory Vicent</title>
            </Head>
            <Layout>
                <section>
                    <WorkPresentation />
                </section>
                <hr className={styles.lineH} />
                <section>
                    <WorkProyects />  
                </section>
                <br />
                <hr className={styles.lineH} />
                <section>
                    <WorkTech />
                </section>
            </Layout>
        </>
    )
}