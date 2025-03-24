import Link from 'next/link';
import {
  ContentContainer,
  LinkContainer,
} from '../styles/ProjectDetails.styled';
import projectContentStyle from '../styles/project-content.module.css';

type Props = {
  content: string;
};

const ProjectBody = ({ content }: Props) => {
  return (
    <ContentContainer>
      <div
        className={projectContentStyle['content']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <LinkContainer>
        <Link href="/">
          ← View more projects
        </Link>
      </LinkContainer>
    </ContentContainer>
  );
};

export default ProjectBody;
