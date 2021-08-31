// Next.js imports
import Head from 'next/head'
// My components imports
import Layout from '../../components/layout'
import Date from '../../components/date'
// Function that return the blog posts
import { getAllTutorialsIds, getTutorialData } from '../../lib/tutorials'
// Style imports
import utilStyles from '../../styles/utils.module.css'

export async function getStaticProps({ params }) {
  const tutorialData = await getTutorialData(params.id)
  return {
    props: {
      tutorialData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllTutorialsIds()
  return {
    paths,
    fallback: false
  }
}
// Post component
export default function Post({ tutorialData }) {
  return (
    <Layout>
      <Head>
        <title>{tutorialData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{tutorialData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={tutorialData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: tutorialData.contentHtml }} />
      </article>
    </Layout>
  )
}