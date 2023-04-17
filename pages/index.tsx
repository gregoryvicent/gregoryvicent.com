import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <main>
      <Head>
	<title>Gregory Vicent</title>
      </Head>
      <h1>GregoryVicent.com</h1>
      <Link href="/posts/postOne">First Post</Link>
    </main>
  )
}
