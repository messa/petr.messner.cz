import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'

export default function Home() {
  return (
    <Layout lang='cs' home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Ahoj. Jsem softwarový vývojář a startupista.
        </p>
      </section>
    </Layout>
  )
}
