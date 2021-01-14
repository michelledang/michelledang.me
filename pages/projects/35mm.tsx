import Head from 'next/head';
import Layout, { name } from '../../components/layout';
import ProjectsFooter from '../../components/projectsFooter';

export default function thirtyfivemm() {
  return (
    <Layout projects>
      <Head>
        <title>35mm | {name}</title>
      </Head>
      <section>
        <p>coming soon!</p>
      </section>
      <ProjectsFooter />
    </Layout>
  );
}
