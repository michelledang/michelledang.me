import Head from 'next/head';
import styled from 'styled-components';
import Layout, { name } from '../components/layout';

export default function About() {
  return (
    <Layout about>
      <Head>
        <title>About | {name}</title>
      </Head>
      <section>
        <AboutWrapper>
          <DescriptionWrapper>
            <p>Hi! I'm Michelle, a software engineer from Toronto, Canada.</p>
            <p>
              I am currently studying computer science at the University of
              Waterloo.
            </p>
            <p>
              Outside of coding, I enjoy photography, baking, reading, and all
              things music!
            </p>
          </DescriptionWrapper>
          <StyledImg src="/images/profile2.jpg" alt={name} />
        </AboutWrapper>
      </section>
    </Layout>
  );
}

const AboutWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const DescriptionWrapper = styled.div`
  margin-right: 20px;
`;

const StyledImg = styled.img`
  height: 266px;
`;
