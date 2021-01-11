import Head from 'next/head';
import Link from 'next/link';
import styled, { css } from 'styled-components';

export const name = 'Michelle Dang';
export const colors = {
  main: '#00613a',
  accent: '#ffc2ce',
};
export const routes = {
  home: { path: '/', title: 'Michelle Dang' },
  about: { path: '/about', title: 'About' },
  work: { path: '/work', title: 'Work' },
  projects: { path: '/projects', title: 'Projects' },
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
            <StyledA first isCurrent={home}>
              {name}
            </StyledA>
          </Link>
          <Link href="/about">
            <StyledA isCurrent={about}>About</StyledA>
          </Link>
          <Link href="/work">
            <StyledA isCurrent={work}>Work</StyledA>
          </Link>
          <Link href="/projects">
            <StyledA isCurrent={projects}>Projects</StyledA>
          </Link>
        </HeaderWrapper>
      </header>
      <MainWrapper>{children}</MainWrapper>
    </div>
  );
}

const MainWrapper = styled.main`
  margin: 48px 100px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  margin-bottom: 40px;
`;

const StyledA = styled.a`
  color: ${colors.main};
  ${(props) => (props.first ? 'margin-right: 400px' : '')};
  text-decoration: 'none';
  text-transform: uppercase;
  font-weight: 400;
  font-size: 20px;
  padding: 4px;
  ${(props) =>
    props.isCurrent
      ? css`
          text-decoration: underline;
        `
      : ''};
  &:hover {
    color: ${colors.accent};
    background-color: ${colors.main};
    text-decoration: none;
  }
`;
