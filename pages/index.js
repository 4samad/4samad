import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey, I am Abdul Samad, a Javascript Developer.</p>
        <p>
          You're probably here to help me quit freelancing and invite me to an awesome work life. (thanks)
        </p>        
        <p>
          Email me: <a href="mailto:4samad@protonmail.com" target="_blank">4samad@protonmail.com</a>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Latest works:</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
          <li className={`${utilStyles.listItem} card`} key={id}>

            <Link href={`/posts/${id}`}>
              <a><h3>{title}</h3></a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>

          </li>
          
          ))}
        </ul>
      </section>
    </Layout>
  )
}