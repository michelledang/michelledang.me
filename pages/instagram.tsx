import Head from 'next/head';
import styled from 'styled-components';
import Layout, { name } from '../components/layout';
import { colors } from '../components/constants';
import { StyledA } from '../components/common';
import { IG_SOCIALS, IG_LINKS } from '../data/socials';

export default function Instagram() {
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

  const getExternalLinkItem = ({
    href,
    name,
  }: {
    href: string;
    name: string;
  }) => {
    return (
      <LinkWrapper>
        <StyledA href={href} target="_blank">
          <LinkTitle>
            <LinkSpan>{name}</LinkSpan>
          </LinkTitle>
        </StyledA>
      </LinkWrapper>
    );
  };

  return (
    <Layout home>
      <Head>
        <title>Home | {name}</title>
      </Head>
      <section>
        <SectionHeader>!!!</SectionHeader>
        <LinksWrapper>
          {IG_LINKS.map((item) => getExternalLinkItem(item))}
        </LinksWrapper>
        <SectionHeader>You can also find me here:</SectionHeader>
        <SocialsWrapper>
          {IG_SOCIALS.map((item) => getSocialLinkItem(item))}
        </SocialsWrapper>
      </section>
      <div></div>
    </Layout>
  );
}

const SocialsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 224px;
  margin: 12px auto;
  @media only screen and (min-width: 768px) {
    width: 30%;
  }
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

const LinksWrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const LinkWrapper = styled.div`
  padding: 12px 0;
`;

const LinkTitle = styled.p`
  margin: 0;
  font-size: 16px;
`;

const LinkSpan = styled.span`
  &:hover {
    color: ${colors.accent};
    background-color: ${colors.main};
    a {
      color: ${colors.accent};
      background-color: ${colors.main};
    }
  }
`;

const SectionHeader = styled.h6`
  width: 100%;
  text-align: center;
`;
