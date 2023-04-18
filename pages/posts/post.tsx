import Link from "next/link"
import Head from "next/head"

export default function PostOne(): JSX.Element {
  return (
    <main>
      <Head>
	<title>Posts</title>
      </Head>

      <h1>Proximamente</h1>
      <Link href="/">Go Back</Link>
    </main>
  )
}
