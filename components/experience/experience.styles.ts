import styled, { keyframes } from 'styled-components';

interface ExperienceStyledProps {
  readonly $isContentRight?: boolean;
}

// Animations
export const pingAnimation = keyframes`
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
`;

export const ExperienceSectionContainer = styled.section`
  padding-bottom: 5rem;
`;

export const ExperienceContainer = styled.div`
  position: relative;
`;

export const CenterLine = styled.div`
  position: absolute;
  height: 100%;
  width: 1px;
  background: #ffffff;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-50%);

  @media all and (max-width: 900px) {
    display: none;
  }
`;

export const ExperienceWrapper = styled.span`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  width: 1.2rem;
  height: 1.2rem;
  margin-top: 1rem;

  @media all and (max-width: 920px) {
    display: none;
  }
`;

export const ExperiencePing = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 9999px;
  background: rgba(79, 70, 229, 0.75);
  animation: ${pingAnimation} 4s cubic-bezier(0, 0, 0.2, 1) infinite;
`;

export const ExperienceCircle = styled.span`
  position: relative;
  background: #4f46e5;
  border-radius: 50%;
  width: 1.2rem;
  height: 1.2rem;
`;

export const Row = styled.div<ExperienceStyledProps>`
  display: flex;
  position: relative;
  justify-content: space-between;

  @media all and (max-width: 980px) {
    flex-direction: ${(props) =>
      props.$isContentRight ? 'column-reverse' : 'column'};
    margin: 1rem 0;
  }
`;

export const Section = styled.section`
  border-radius: 5px;
  width: calc(50% - 40px);

  @media all and (max-width: 900px) {
    width: 100%;
  }
`;

export const ExperienceCard = styled(Section)`
  background-color: #19181a;
  padding: 1.35rem;
  margin-top: 1rem;

  @media all and (max-width: 920px) {
    margin: 0;
  }
`;

export const ExperienceHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ExperienceDetails = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.15rem;
  gap: 0.5rem;
`;

export const Company = styled.p`
  font-weight: 600;
  --min: 1rem;
  --val: 2.5vw;
  --max: 1.1rem;
`;

export const ExperienceDate = styled.span`
  --min: 1rem;
  --val: 2.5vw;
  --max: 1.1rem;
`;

export const ExperienceDetail = styled.p`
  --min: 0.875rem;
  --val: 2vw;
  --max: 1rem;
  line-height: 1.5;
  color: #d1d5db;
`;

export const EmptySection = styled(Section)`
  /* Empty section to maintain layout */

  @media all and (max-width: 920px) {
    display: none;
  }
`;

export const JobDescriptionLists = styled.ul`
  margin-top: 0.5rem; /* Optional for the container itself */

  > li + li {
    margin-top: 0.5rem; /* Equivalent to space-y-4 (1rem or 16px) between list items */
  }
`;

export const JobDescriptionList = styled.li`
  list-style: disc;
  list-style-position: inside;
  --min: 1em;
  --val: 2.5vw;
  --max: 1.125em;
  line-height: 1.5;
`;

export const Skill = styled.span`
  --min: 1rem;
  --val: 2.5vw;
  --max: 1rem;
  line-height: 1.5;
`;
