import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { colors } from './constants';

export default function ProjectsFooter() {
  return (
    <Link href="/projects">
      <ProjectsLink>all projects</ProjectsLink>
    </Link>
  );
}

const ProjectsLink = styled.a`
  color: ${colors.main};
  font-size: 16px;
  text-decoration: underline;
  @media only screen and (min-width: 768px) {
    &:hover {
      color: ${colors.accent};
      background-color: ${colors.main};
      text-decoration: none;
    }
  }
`;
