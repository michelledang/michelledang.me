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
  @media only screen and (max-width: 768px) {
    display: block;
    margin-bottom: 64px;
  }
  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;

const DescriptionWrapper = styled.div`
  @media only screen and (min-width: 768px) {
    margin-right: 40px;
  }
`;

const StyledImg = styled.img`
  height: 266px;
  @media only screen and (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
