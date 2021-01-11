import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';
import Layout, { name } from '../components/layout';

export default function Projects() {
  return (
    <Layout projects>
      <Head>
        <title>Projects | {name}</title>
      </Head>
      <section>
        <p>Coming soon!</p>
      </section>
    </Layout>
  );
}

const StyledImg = styled.img`
  width: 300px;
`;
