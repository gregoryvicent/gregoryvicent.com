import Link from 'next/link'
import Head from 'next/head'

import styles from '../styles/index.module.css'

export default function Home() {
  return (
    <main>
      <Head>
	<title>Gregory Vicent</title>
      </Head>
      <h1 className={styles.title} >GregoryVicent.com</h1>
      <Link href="/posts/postOne">First Post</Link>
    </main>
  )
}
