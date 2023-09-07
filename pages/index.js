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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec turpis vel elit sodales fringilla. Fusce non augue nec sapien ullamcorper vestibulum. Sed bibendum ipsum sed nunc tristique, eu volutpat tortor iaculis. Aenean
{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}