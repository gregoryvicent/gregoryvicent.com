// Next.js imports
import Head from 'next/head'
// My components imports
import Layout from '../../components/layout'
import Date from '../../components/date'
// Function that return the blog posts
import { getAllIds, getData } from '../../lib/handleFS'
// Style imports
import utilStyles from '../../styles/utils.module.css'

var filesDir = 'tutorials/linux'

export async function getStaticProps({ params }) {
  const postData = await getData(params.id, filesDir)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllIds(filesDir)
  return {
    paths,
    fallback: false
  }
}
// Post component
export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.description} />
        <meta name="keywords" content={postData.keywords} />
      </Head>
      <article>
        <div className={utilStyles.titleBox}>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}
