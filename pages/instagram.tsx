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
        <title>Instagram | {name}</title>
      </Head>
      <section>
        <SectionHeader>!!!</SectionHeader>
        <LinksWrapper>
          {IG_LINKS.map((item) => getExternalLinkItem(item))}
        </LinksWrapper>
      </section>
      <div></div>
    </Layout>
  );
}

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
  @media only screen and (min-width: 768px) {
    &:hover {
      background-color: ${colors.accent};
      border-radius: 50%;
    }
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
  @media only screen and (min-width: 768px) {
    &:hover {
      color: ${colors.main};
      text-decoration: underline;
    }
  }
`;

const LinkSpan = styled.span`
  @media only screen and (min-width: 768px) {
    &:hover {
      color: ${colors.accent};
      background-color: ${colors.main};
    }
  }
`;

const SectionHeader = styled.h6`
  width: 100%;
  text-align: center;
`;
