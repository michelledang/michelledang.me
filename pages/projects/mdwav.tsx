import Head from 'next/head';
import Link from 'next/link';
import Layout, { name } from '../../components/layout';
import { StyledA } from '../../components/common';

export default function mdwav() {
  return (
    <Layout projects>
      <Head>
        <title>md.wav | {name}</title>
      </Head>
      <section>
        <p>coming soon!</p>
      </section>
      <Link href="/projects">
        <StyledA>🠔 Back to all projects</StyledA>
      </Link>
    </Layout>
  );
}
