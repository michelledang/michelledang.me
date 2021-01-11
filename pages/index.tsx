import Head from 'next/head';
import Layout, { name } from '../components/layout';
import styled from 'styled-components';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Home | {name}</title>
      </Head>
      <section>
        <StyledP>hi!</StyledP>
      </section>
    </Layout>
  );
}

const StyledP = styled.p`
  color: black;
`;
