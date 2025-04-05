import React from 'react';
import { SectionHeading } from '../ui/section-heading';
import {
  CenterLine,
  Company,
  EmptySection,
  ExperienceCard,
  ExperienceCircle,
  ExperienceContainer,
  ExperienceDate,
  ExperienceDetail,
  ExperienceDetails,
  ExperienceHeaderContent,
  ExperiencePing,
  ExperienceSectionContainer,
  ExperienceWrapper,
  JobDescriptionList,
  JobDescriptionLists,
  Row,
  Skill,
} from './experience.styles';

type TExperience = {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  isPresent: boolean;
  location: string;
  skills: string[];
  jobDescriptions: string[];
  isContentRight: boolean;
};

const Experience = () => {
  const experiences: TExperience[] = [
    {
      company: 'TechniqalGroup',
      title: 'Software Developer',
      startDate: 'Feb 2024',
      endDate: '',
      isPresent: true,
      location: 'Baguio City',
      skills: [
        'Laravel',
        'React',
        'Tailwind',
        'Inertia',
        'Tailwindcss',
        'Next',
        'MySql',
        'Figma',
        'Typescript',
        'Git & GitHub',
      ],
      jobDescriptions: [
        'Assist in leading projects and oversee the design and development of product architecture and features.',
        'Supervise interns, providing guidance and mentorship to ensure their growth and contribution to the team.',
      ],
      isContentRight: false,
    },
    {
      company: 'Freelance Web Developer',
      title: 'Fullstack Developer',
      startDate: 'Feb 2022',
      endDate: '',
      isPresent: true,
      location: 'Philippines',
      skills: [
        'Laravel',
        'React',
        'Tailwind',
        'Inertia',
        'Tailwindcss',
        'Next',
        'MySql',
        'Figma',
        'Vue',
        'Alpine',
        'Typescript',
        'Git & GitHub',
      ],
      jobDescriptions: [
        "Giving assistance in system development for those in their bachelor's or master's degree.",
        'Developed government websites, ensuring user-friendly interfaces and robust functionalities for seamless public interaction.',
      ],
      isContentRight: true,
    },
    {
      company: 'Massive Integrated Tech Solutions Inc.',
      title: 'Freelance Software Engineer',
      startDate: 'Jan 2024',
      endDate: 'Feb 2024',
      isPresent: false,
      location: 'Quezon City',
      skills: ['Laravel', 'Tailwind', 'Livewire', 'Volt', 'Git & GitHub'],
      jobDescriptions: [
        'Developed web applications and software solutions, ensuring high performance, responsiveness, and user-friendly design. (NDA signed)',
      ],
      isContentRight: false,
    },
    {
      company: 'FFUF Manila Inc.',
      title: 'Frontend Engineer Intern',
      startDate: 'Mar 2022',
      endDate: 'Jun 2022',
      isPresent: false,
      location: 'Makati City',
      skills: [
        'Angular',
        'Scrum',
        'Git',
        'GitFlow',
        'Akita',
        'Jira',
        'Bitbucket',
      ],
      jobDescriptions: [
        'Assist build front end web applications using Angular, RxJS and Akita.',
        'Implement front-end features in line with best practices.',
        'Experienced Scrum professionals drive sprint planning, daily standups, and backlog refinement for efficient and effective project execution.',
      ],
      isContentRight: true,
    },
  ];

  return (
    <ExperienceSectionContainer className="container" id="experience">
      <SectionHeading
        titleNumber="03"
        sectionTitle="experience"
        sectionDetails="An overview of my work experience."
      />
      <ExperienceContainer>
        <CenterLine />

        {experiences.map((experience, index) => (
          <Row key={index} $isContentRight={experience.isContentRight}>
            <ExperienceWrapper>
              <ExperiencePing />
              <ExperienceCircle />
            </ExperienceWrapper>

            {!experience.isContentRight ? (
              <>
                <ExperienceCard>
                  <ExperienceHeaderContent>
                    <Company>{experience.company}</Company>
                    <div>
                      <ExperienceDate>{experience.startDate}</ExperienceDate> -{' '}
                      {experience.isPresent === false ? (
                        <>
                          <ExperienceDate>{experience.endDate}</ExperienceDate>
                        </>
                      ) : (
                        <ExperienceDate>Present</ExperienceDate>
                      )}
                    </div>
                  </ExperienceHeaderContent>

                  <ExperienceDetails>
                    <ExperienceDetail>{experience.title}</ExperienceDetail>
                    &bull;
                    <ExperienceDetail>{experience.location}</ExperienceDetail>
                  </ExperienceDetails>
                  <JobDescriptionLists>
                    {experience.jobDescriptions.map((description) => {
                      return (
                        <JobDescriptionList key={description}>
                          {description}
                        </JobDescriptionList>
                      );
                    })}
                  </JobDescriptionLists>
                  <div style={{ marginTop: '.75rem' }}>
                    <Skill style={{ fontWeight: 600 }}>Skills: </Skill>{' '}
                    {experience.skills.map((skill, index) => {
                      return (
                        <React.Fragment key={skill}>
                          <Skill>{skill}</Skill>
                          {index < experience.skills.length - 1 && ', '}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </ExperienceCard>
                <EmptySection />
              </>
            ) : (
              <>
                <EmptySection />
                <ExperienceCard>
                  <ExperienceHeaderContent>
                    <Company>{experience.company}</Company>
                    <div>
                      <ExperienceDate>{experience.startDate}</ExperienceDate> -{' '}
                      {experience.isPresent === false ? (
                        <>
                          <ExperienceDate>{experience.endDate}</ExperienceDate>
                        </>
                      ) : (
                        <ExperienceDate>Present</ExperienceDate>
                      )}
                    </div>
                  </ExperienceHeaderContent>

                  <ExperienceDetails>
                    <ExperienceDetail>{experience.title}</ExperienceDetail>
                    &bull;
                    <ExperienceDetail>{experience.location}</ExperienceDetail>
                  </ExperienceDetails>
                  <JobDescriptionLists>
                    {experience.jobDescriptions.map((description) => {
                      return (
                        <JobDescriptionList key={description}>
                          {description}
                        </JobDescriptionList>
                      );
                    })}
                  </JobDescriptionLists>
                  <div style={{ marginTop: '.75rem' }}>
                    <Skill style={{ fontWeight: 600 }}>Skills: </Skill>{' '}
                    {experience.skills.map((skill, index) => {
                      return (
                        <React.Fragment key={skill}>
                          <Skill>{skill}</Skill>
                          {index < experience.skills.length - 1 && ', '}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </ExperienceCard>
              </>
            )}
          </Row>
        ))}
      </ExperienceContainer>
    </ExperienceSectionContainer>
  );
};

export default Experience;
