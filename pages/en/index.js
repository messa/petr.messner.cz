import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'

export default function Home() {
  return (
    <Layout lang='en' home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm <b>Petr</b>. I'm a software developer and startup cofounder.
        </p>
      </section>
    </Layout>
  )
}
