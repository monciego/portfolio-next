import Head from 'next/head';
import Layout from '../../components/layout';
import ProjectBody from '../../components/project-body';
import ProjectType from '../../interfaces/project';
import { getAllProjects, getProjectBySlug } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHTML';
import {
  ProjectDetailImage,
  ProjectDetailsContainer,
  ProjectDetailsTitle,
  ProjectSubtitle,
} from '../../styles/ProjectDetails.styled';

export interface IProjectProps {
  project: ProjectType;
}

const Project: React.FunctionComponent<IProjectProps> = ({ project }) => {
  return (
    <Layout>
      <Head>
        <title>{project.subTitle}</title>
      </Head>
      <ProjectDetailsContainer>
        <ProjectSubtitle>{project.subTitle}</ProjectSubtitle>
        <ProjectDetailsTitle>{project.title}</ProjectDetailsTitle>
        <div>
          <ProjectDetailImage
            src={project.coverImage}
            alt={`Cover Image for ${project.title}`}
            width={1300}
            height={530}
          />
        </div>
        <ProjectBody content={project.content} />
      </ProjectDetailsContainer>
    </Layout>
  );
};

type IParamsProps = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: IParamsProps) {
  const project = getProjectBySlug(params.slug, [
    'title',
    'subTitle',
    'githubCode',
    'livePreview',
    'date',
    'coverImage',
    'transitionImage',
    'content',
  ]);

  const content = await markdownToHtml(project.content || '');

  return {
    props: {
      project: {
        ...project,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const projects = getAllProjects(['slug']);

  return {
    paths: projects.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default Project;
