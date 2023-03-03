import { useRouter } from 'next/router';

export interface IProjectProps {}

const Project: React.FunctionComponent<IProjectProps> = (props) => {
  const router = useRouter();
  const { slug } = router.query;
  return <div>Project {slug}</div>;
};

export default Project;
