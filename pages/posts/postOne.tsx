import Link from "next/link"
import Head from "next/head"

export default function PostOne() {
  return (
    <main>
      <Head>
	<title>First Post</title>
      </Head>

      <h1>This is my first post</h1>
      <Link href="/">Go Back</Link>
    </main>
  )
}
