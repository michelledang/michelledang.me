import Head from 'next/head';
import styled from 'styled-components';

import Layout, { name } from '../components/layout';
import { StyledA, SectionTitleWrapper } from '../components/common';
import { WORK_EXPERIENCES } from '../data/work_experiences';

export default function WorkExperience() {
  const getWorkExperienceItem = ({
    logo,
    company,
    location,
    position,
    dates,
    descriptions,
  }: {
    logo: string;
    company: string;
    location: string;
    position: string;
    dates: string;
    descriptions: string[];
  }) => {
    return (
      <WorkExperienceItem>
        {/* <Logo src={logo} /> */}
        <Experience>
          <ExperienceHeader>
            <h5>{company}</h5>
            <h6>{location}</h6>
          </ExperienceHeader>
          <ExperienceHeader>
            <h5>{position}</h5>
            <h6>{dates}</h6>
          </ExperienceHeader>
          {descriptions.map((description) => (
            <ExperienceDescription>{description}</ExperienceDescription>
          ))}
        </Experience>
      </WorkExperienceItem>
    );
  };

  return (
    <Layout work>
      <Head>
        <title>Work Experience | {name}</title>
      </Head>
      <section>
        <SectionTitleWrapper>
          <h3>Overview</h3>
        </SectionTitleWrapper>
        <p>My work experience is listed below, starting with most recent :) </p>
        <p>
          You can also download my{' '}
          <StyledA href="http://michelledang.github.io/michelledang-resume.pdf">
            resume
          </StyledA>
          , connect on{' '}
          <StyledA href="https://www.linkedin.com/in/dang-michelle">
            LinkedIn
          </StyledA>
          , view my{' '}
          <StyledA href="https://github.com/michelledang">GitHub</StyledA> or
          send an <StyledA href="mailto:mbdang@uwaterloo.ca">email</StyledA>!
        </p>
      </section>
      <section>
        <SectionTitleWrapper>
          <h3>Work Experience</h3>
        </SectionTitleWrapper>
        {WORK_EXPERIENCES.map((we) => getWorkExperienceItem(we))}
      </section>
    </Layout>
  );
}

const WorkExperienceItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;
`;

const Experience = styled.div``;

const ExperienceHeader = styled.div`
  margin-bottom: 8px;
  @media only screen and (max-width: 768px) {
    display: block;
  }
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const ExperienceDescription = styled.p`
  line-height: 1;
`;

const Logo = styled.img`
  width: 32px;
  margin-right: 12px;
`;
