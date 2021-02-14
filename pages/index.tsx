import Head from 'next/head';
import styled from 'styled-components';
import Layout, { name } from '../components/layout';
import { colors } from '../components/constants';
import { StyledA } from '../components/common';
import { SOCIALS } from '../data/socials';

export default function Home() {
  const getSocialLinkItem = ({
    href,
    name,
    icon,
  }: {
    href: string;
    name: string;
    icon: string;
  }) => {
    return (
      <StyledIconA href={href} target="_blank">
        <StyledIcon src={icon} alt={name}></StyledIcon>
      </StyledIconA>
    );
  };
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
        <SocialsWrapper>
          {SOCIALS.map((item) => getSocialLinkItem(item))}
        </SocialsWrapper>
      </section>
      <div></div>
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

const SocialsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 224px;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (min-width: 768px) {
    width: 30%;
  }
`;

const StyledImg = styled.img`
  margin-bottom: 32px;
  @media only screen and (min-width: 768px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  min-height: 372px;
  object-fit: cover;
`;

const StyledIcon = styled.img`
  @media only screen and (max-width: 768px) {
    width: 20px;
    margin: 8px;
  }
  @media only screen and (min-width: 768px) {
    width: 20px;
  }
`;

const StyledIconA = styled(StyledA)`
  &:hover {
    background-color: ${colors.accent};
    border-radius: 50%;
  }
`;
