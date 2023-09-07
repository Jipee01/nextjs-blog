import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[University of the Assumption: Student/Teacher's Evaluation]</p>
        <p>
        My hobbies include playing and watching various activities, and I have a penchant for "Your Song" by Parokya ni Edgar and dinuguan. I decided to pursue IT due to my curiosity and aspire to become a web developer in the near future. I'm looking forward to expanding my knowledge in system integration and architecture, and my only request is to maintain specificity in our discussions.
{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}