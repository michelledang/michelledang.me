import Head from 'next/head';
import Layout, { name } from '../../components/layout';
import ProjectsFooter from '../../components/projectsFooter';

export default function mdwav() {
  return (
    <Layout projects>
      <Head>
        <title>md.wav | {name}</title>
      </Head>
      <section>
        <p>coming soon!</p>
      </section>
      <ProjectsFooter />
    </Layout>
  );
}
