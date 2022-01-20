import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hey, I'm Dom. I'm a technical co-founder working on new features at BiopharmIQ. Feel free to connect on
          {' '}<a href="https://twitter.com/domvacchiano" target="_blank">Twitter</a>.
        </p>
      </section>
    </Layout>
  )
}
