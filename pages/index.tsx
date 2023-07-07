import Head from 'next/head'

import Presentation from '../components/Presentation'
import Contacts from '../components/Contacts'
import Layout from '../components/Layout'

export default function index(): JSX.Element {
  return (
    <>
      <Head>
	      <title>Home | Gregory Vicent</title>
      </Head>
      <Layout>
	      <section>
	        <Presentation />
	      </section>
	      <section>
	        <Contacts />
	      </section>
      </Layout>
    </>
  )
}
