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
        <StyledImg src="/images/cover-bw.jpg" alt={name} />
        <SocialsWrapper>
          {SOCIALS.map((item) => getSocialLinkItem(item))}
        </SocialsWrapper>
      </section>
    </Layout>
  );
}

const SocialsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: min(100%, 294px);
  margin-left: auto;
  margin-right: auto;
`;

const StyledImg = styled.img`
  margin-bottom: 32px;
  @media only screen and (min-width: 768px) {
    width: 40%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const StyledIcon = styled.img`
  @media only screen and (max-width: 768px) {
    width: 32px;
    margin: 16px;
  }
  @media only screen and (min-width: 768px) {
    width: 24px;
  }
`;

const StyledIconA = styled(StyledA)`
  &:hover {
    background-color: ${colors.accent};
    border-radius: 50%;
  }
`;
