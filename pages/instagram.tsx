import Head from 'next/head';
import styled from 'styled-components';
import Layout from '../components/layout';

export default function Instagram() {
  return (
    <Layout>
      <Head>
        <title>Instagram | {name}</title>
      </Head>
      <section>
        <p>Instagram</p>
        <p>Links from IG:</p>
      </section>
    </Layout>
  );
}

const StyledH1 = styled.h1`
  color: red;
`;
