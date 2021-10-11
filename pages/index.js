import Head from "next/head"
import Layout, { siteTitle } from "../components/layout"
import utilStyles from "../styles/utils.module.css"
import Link from 'next/link'
import Date from '../components/date'

import { getSortedPostsData } from "../lib/posts"

// import someDatabaseSDK from 'someDataBaseSDK'
// const databaseClient = someDatabaseSDK.createClient(...)

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }

  // fetch post data form an external API endpoint
  // const res = swait fetch('..')
  // return res.json()
  // Next.js`fetch()`在客户端和服务器上都使用polyfill，不需要在导入它

  // 直接查询数据库
  // return databaseClient.query('SELECT posts...')
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      {/* Keep the existing code here */}
      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br/>
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
