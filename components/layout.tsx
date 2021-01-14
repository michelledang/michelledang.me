import Head from 'next/head';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import Modal from 'react-modal';
import { useState } from 'react';
import { Chevron } from './common';

export const name = 'Michelle Dang';
export const colors = {
  main: '#00613a',
  accent: '#ffc2ce',
  background: '#f4f4f4', // d7f3eb
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
  const [modalIsOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const getHeaderLinks = () => {
    return (
      <>
        <Link href="/about">
          <HeaderA isCurrent={about}>About</HeaderA>
        </Link>
        <Link href="/work">
          <HeaderA isCurrent={work}>Work</HeaderA>
        </Link>
        <Link href="/projects">
          <HeaderA isCurrent={projects}>Projects</HeaderA>
        </Link>
      </>
    );
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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-H82WKJD1P0"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-H82WKJD1P0');
            `,
          }}
        />
      </Head>
      <header>
        <HeaderWrapper>
          <Link href="/">
            <HeaderA isTitle isCurrent={home}>
              {name}
            </HeaderA>
          </Link>
          <StyledModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Menu Modal"
          >
            <ModalCloseIcon src="/images/close.svg" onClick={closeModal} />
            <ModalLinksWrapper>
              <Link href="/">
                <HeaderA isCurrent={home}>Home</HeaderA>
              </Link>
              {getHeaderLinks()}
            </ModalLinksWrapper>
          </StyledModal>
          <MobileNavIcon src={'/images/menu.svg'} onClick={openModal} />
          <HeaderSubWrapper>{getHeaderLinks()}</HeaderSubWrapper>
        </HeaderWrapper>
      </header>
      <MainWrapper>{children}</MainWrapper>
      <ScrollButtonWrapper onClick={scrollToTop}>
        <Chevron up></Chevron>
        top
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
  margin-bottom: 40px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px #00613a;
`;

const HeaderSubWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    max-width: 372px;
  }
`;

const StyledModal = styled(Modal)`
  position: absolute;
  inset: 40px;
  border: 1px solid ${colors.main};
  background: ${colors.accent};
  overflow: auto;
  border-radius: 0;
  outline: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const ModalLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  flex: 1;
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
    props.isTitle
      ? css`
          @media only screen and (max-width: 768px) {
            font-style: normal;
            font-size: 24px;
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
  color: ${colors.main};
  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (min-width: 768px) {
    position: fixed;
    top: 80%;
    right: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const MobileNavIcon = styled.img`
  color: ${colors.main};
  width: 24px;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const ModalCloseIcon = styled.img`
  color: ${colors.main};
  width: 16px;
  margin-left: auto;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
