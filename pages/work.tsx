import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';
import Layout, { name, colors } from '../components/layout';

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
        <Logo src={logo} />
        <Experience>
          <ExperienceHeader>
            <h3>{company}</h3>
            <h5>{location}</h5>
          </ExperienceHeader>
          <ExperienceHeader>
            <h4>{position}</h4>
            <h5>{dates}</h5>
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
          <StyledA href="https://github.com/michelledang">Github</StyledA> or
          send an <StyledA href="mailto:mbdang@uwaterloo.ca">email</StyledA>!
        </p>
      </section>
      <section>
        {getWorkExperienceItem({
          logo: '/images/seatgeek.svg',
          company: 'SeatGeek',
          location: 'Remote',
          position: 'Software Engineer Intern',
          dates: 'Sept 2020 - Dec 2020',
          descriptions: [
            'Worked as a member of the SeatGeek Enterprise team.',
            'Projects included: UI refresh of client facing tools and API modifications for providing ticket sales analytics.',
            'Day-to-day technologies included React, TypeScript, GraphQL and C#.',
          ],
        })}
        {getWorkExperienceItem({
          logo: '/images/linkedin.svg',
          company: 'LinkedIn',
          location: 'Sunnyvale, CA',
          position: 'UI Engineer Intern',
          dates: 'Jan 2020 - Apr 2020',
          descriptions: [
            "Designed an internal tool responsible for configuring taxes that affect all of LinkedIn's online transactions.",
            'Implemented the UI and mid-tier APIs to support the tool.',
            'Project was designed with Figma and developed using Ember, JavaScript, Java and Scala.',
          ],
        })}
        {getWorkExperienceItem({
          logo: '/images/seatgeek.svg',
          company: 'SeatGeek',
          location: 'New York, NY',
          position: 'Software Engineering Intern',
          dates: 'May 2019 - Aug 2019',
          descriptions: [
            "Simplified SeatGeek's internal search engine by replacing categorical search with a single input that handles all query types.",
            'Redesigned the search page and search results layout using Sketch to develop mock designs while getting feedback from stakeholders.',
            'Project was developed using React, Typescript, GraphQL, Redux and Node.',
          ],
        })}
        {getWorkExperienceItem({
          logo: '/images/microsoft.svg',
          company: 'Microsoft',
          location: 'Bellevue, WA',
          position: 'Software Engineering Intern',
          dates: 'Sept 2018 - Dec 2018',
          descriptions: [
            "Developed an activity timeline displaying a user's email, deal and meeting history with a contact in Outlook Customer Manager.",
            'Implemented contact search UI to allow users to include new contacts in existing deals.',
            'Both features were created using React, Typescript and C#.',
          ],
        })}
        {getWorkExperienceItem({
          logo: '/images/microsoft.svg',
          company: 'Microsoft',
          location: 'Redmond, WA',
          position: 'Software Engineering Intern',
          dates: 'Jan 2018 - Apr 2018',
          descriptions: [
            'Collaborated with PMs and designers to plan feedback collection in Office Business Center and Outlook Customer Manager using Office Customer Voice SDK and APIs.',
            'Implemented user-initiated feedback feature in C# middle-tier and HTML/CSS/Javascript front-end.',
            'Feedback collected with my feature improved the development cycle by allowing bug tracking and direct communication with customers.',
          ],
        })}
        {getWorkExperienceItem({
          logo: '/images/microsoft.svg',
          company: 'Microsoft',
          location: 'Redmond, WA',
          position: 'Explore Intern',
          dates: 'May 2017 - Aug 2017',
          descriptions: [
            "Created customer scenarios and designed ux/wireframes for third party integrations in Microsoft's Business Center website in a Program Manager role (two months).",
            'Prototyped third-party integration using .NET framework, C# and HTML/CSS in a Software Engineering role (two months).',
            'Completed OAuth 2.0 log-in and data collection into Business Center from third-party REST APIs.',
          ],
        })}
      </section>
    </Layout>
  );
}

const WorkExperienceItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 64px 0px;
`;

const Experience = styled.div``;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const ExperienceDescription = styled.p`
  font-size: 20px;
  line-height: 1;
`;

const StyledA = styled.a`
  color: ${colors.main};
  &:hover {
    color: ${colors.accent};
    background-color: ${colors.main};
    text-decoration: none;
  }
`;

const Logo = styled.img`
  width: 32px;
  margin-right: 12px;
`;
