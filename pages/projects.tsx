import Head from 'next/head';
import styled from 'styled-components';
import Layout, { name, colors } from '../components/layout';
import Link from 'next/link';
import { StyledA, SectionTitleWrapper } from '../components/common';
import { COURSEWARE_PROJECTS, CREATIVE_PROJECTS } from '../data/projects';

export default function Projects() {
  const getProjectLinkItem = ({
    href,
    title,
    category,
    external,
  }: {
    href: string;
    title: string;
    category: string;
    external: boolean;
  }) => {
    return external ? (
      <ProjectLinkWrapper>
        <StyledA href={href} target="_blank">
          <LinkTitle>{title}</LinkTitle>
        </StyledA>
        <Category>{category}</Category>
      </ProjectLinkWrapper>
    ) : (
      <ProjectLinkWrapper>
        <Link href={href}>
          <StyledLinkA>
            <LinkTitle>{title}</LinkTitle>
          </StyledLinkA>
        </Link>
        <Category>{category}</Category>
      </ProjectLinkWrapper>
    );
  };
  return (
    <Layout projects>
      <Head>
        <title>Projects | {name}</title>
      </Head>
      <section>
        <SectionTitleWrapper>
          <h3>Courseware</h3>
        </SectionTitleWrapper>
        {COURSEWARE_PROJECTS.map((item) => getProjectLinkItem(item))}
      </section>
      <section>
        <SectionTitleWrapper>
          <h3>Creative</h3>
        </SectionTitleWrapper>
        {CREATIVE_PROJECTS.map((item) => getProjectLinkItem(item))}
      </section>
    </Layout>
  );
}

const ProjectLinkWrapper = styled.div`
  margin: 20px 0;
  @media only screen and (max-width: 768px) {
    display: block;
  }
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &:hover {
    color: ${colors.accent};
    background-color: ${colors.main};
    a {
      color: ${colors.accent};
      background-color: ${colors.main};
    }
  }
`;

const Category = styled.p`
  @media only screen and (max-width: 768px) {
    font-size: 16px;
    margin-top: 8px;
  }
  @media only screen and (min-width: 768px) {
    margin: 0 0 0 50px;
    text-align: right;
  }
`;

const StyledLinkA = styled(StyledA)`
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;

const LinkTitle = styled.p`
  margin: 0;
`;
