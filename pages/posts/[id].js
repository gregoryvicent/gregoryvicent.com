// Next.js imports
import Head from 'next/head'
import Image from 'next/image'
// My components imports
import Layout from '../../components/layout'
import Footer from '../../components/footer'
import Date from '../../components/date'
// Function that return the blog posts
import { getAllIds, getData } from '../../lib/handleFS'
// Style imports
import utilStyles from '../../styles/utils.module.css'

var filesDir = 'posts'

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

        <meta property="og:type" content="article" />
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={postData.description} />
        <meta property="og:image" content={`https://gregoryvicent.com/banners/${postData.image}.png`} />
        <meta property="og:url" content={`https://gregoryvicent.com/posts/${postData.fileName}`} />
        <meta property="og:site_name" content="gregoryvicent.com" />

        <meta name="twitter:title" content={postData.title} />
        <meta name="twitter:description" content={postData.description} />
        <meta name="twitter:image" content={`https://gregoryvicent.com/banners/${postData.image}.png`} />
        <meta name="twitter:site" content="@gregoryvicent" />
        <meta name="twitter:creator" content="@vicentgregory" />
      </Head>

      <article>
        <div className={utilStyles.titleBox}>
          <div className={utilStyles.imageBox}>
            <Image 
              src={`/banners/${postData.image}.png`}
              alt={postData.title}
              width="500"
              height="250"
              className={utilStyles.image}
            />
          </div>
          <div className={utilStyles.container}>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
              <Date dateString={postData.date} />
            </div>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <Footer />
    </Layout>
  )
}
