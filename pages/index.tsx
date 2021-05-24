import Head from 'next/head';
import styled from 'styled-components';
import Layout, { name } from '../components/layout';
import { colors } from '../components/constants';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Home | {name}</title>
      </Head>
      <section>
        <StyledImg src="/images/cover.jpg" alt={name} />
        <CoverText>
          <CoverTextSpan>
            Hi! I'm Michelle, a software engineer based in Toronto and New York.
          </CoverTextSpan>
        </CoverText>
      </section>
    </Layout>
  );
}

const CoverText = styled.h3`
  transform: translateY(-124px) translateX(20px);
  width: 60%;
  min-width: 250px;
  text-align: end;
  line-height: 1.6;
  margin-right: 0;
  margin-left: auto;
  margin-bottom: -64px;
  @media only screen and (max-width: 768px) {
    transform: translateY(-124px);
    margin-bottom: -96px;
  }
`;

const CoverTextSpan = styled.span`
  background-color: ${colors.background};
`;

const StyledImg = styled.img`
  @media only screen and (min-width: 768px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  min-height: 300px;
  object-fit: cover;
`;
