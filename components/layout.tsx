import Head from 'next/head';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { StyledA, Chevron } from './common';

export const name = 'Michelle Dang';
export const colors = {
  main: '#00613a',
  accent: '#ffc2ce',
  background: '#abd6c4',
};

export default function Layout({
  children,
  home,
  about,
  work,
  projects,
}: {
  children: React.ReactNode;
  home?: boolean;
  about?: boolean;
  work?: boolean;
  projects?: boolean;
}) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      <Head>
        <link rel="icon" href="/images/favicon.png" />
        <meta
          name="description"
          content="Hi! I'm Michelle Dang, a software engineer and computer science student at the University of Waterloo."
        />
        <meta property="og:image" content="/images/profile.jpg" />
        <meta name="og:title" content={name} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@_dangmichelle" />
        <meta name="twitter:creator" content="@_dangmichelle" />
      </Head>
      <header>
        <HeaderWrapper>
          <Link href="/">
            <HeaderA first isCurrent={home}>
              {name}
            </HeaderA>
          </Link>
          <HeaderSubWrapper>
            <Link href="/about">
              <HeaderA isCurrent={about}>About</HeaderA>
            </Link>
            <Link href="/work">
              <HeaderA isCurrent={work}>Work</HeaderA>
            </Link>
            <Link href="/projects">
              <HeaderA isCurrent={projects}>Projects</HeaderA>
            </Link>
          </HeaderSubWrapper>
        </HeaderWrapper>
      </header>
      <MainWrapper>{children}</MainWrapper>
      <ScrollButtonWrapper>
        <StyledA onClick={scrollToTop}>
          <StyledChevron up></StyledChevron>{' '}
        </StyledA>
      </ScrollButtonWrapper>
    </div>
  );
}

const MainWrapper = styled.main`
  @media only screen and (max-width: 768px) {
    margin: 48px 0px;
  }
  @media only screen and (min-width: 768px) {
    margin: 48px 100px;
  }
`;

const HeaderWrapper = styled.div`
  @media only screen and (max-width: 768px) {
    display: block;
    text-align: center;
  }
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
  margin-bottom: 40px;
  border-bottom: solid 1px #00613a;
`;

const HeaderSubWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  @media only screen and (max-width: 768px) {
    margin-top: 32px;
  }
  @media only screen and (min-width: 768px) {
    max-width: 372px;
  }
`;

const HeaderA = styled.a`
  color: ${colors.main};
  text-decoration: 'none';
  text-transform: uppercase;
  font-weight: 400;
  font-size: 20px;
  padding: 4px;
  ${(props) =>
    props.isCurrent
      ? css`
          font-style: italic;
        `
      : ''};
  ${(props) =>
    props.first
      ? css`
          @media only screen and (max-width: 768px) {
            font-size: 32px;
            color: ${colors.accent};
            background-color: ${colors.main};
          }
        `
      : ''};
  &:hover {
    color: ${colors.accent};
    background-color: ${colors.main};
    text-decoration: none;
  }
`;

const ScrollButtonWrapper = styled.div`
  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  @media only screen and (min-width: 768px) {
    position: fixed;
    top: 50%;
    right: 50px;
  }
`;

const StyledChevron = styled(Chevron)`
  &:hover {
    color: ${colors.accent};
  }
`;
