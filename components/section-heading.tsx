import {
  SectionDetails,
  SectionHeadingLink,
  SectionStyledHeading,
  SectionTitle,
} from '../styles/SectionHeading.styled';

export interface ISectionHeadingProps {
  titleNumber: string;
  sectionTitle: string;
  sectionDetails?: string;
  sectionHeadingLink?: string;
  sectionHeadingLinkContent?: string;
}

export const SectionHeading: React.FunctionComponent<ISectionHeadingProps> = ({
  titleNumber,
  sectionTitle,
  sectionDetails,
  sectionHeadingLink,
  sectionHeadingLinkContent,
}) => {
  return (
    <SectionStyledHeading>
      <SectionTitle number={titleNumber}>{sectionTitle}</SectionTitle>
      <SectionDetails>
        {sectionDetails}{' '}
        <SectionHeadingLink href={sectionHeadingLink}>
          {sectionHeadingLinkContent}
        </SectionHeadingLink>
      </SectionDetails>
    </SectionStyledHeading>
  );
};
