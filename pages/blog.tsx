import Head from "next/head"

import Layout from "../components/Layout"

export default function Blog(): JSX.Element {
  return(
    <>
      <Head>
	<title>Blog | Gregory Vicent</title>
      </Head>
      <Layout>
	<h1>This is Blog</h1>
      </Layout>
    </>
  )
}
