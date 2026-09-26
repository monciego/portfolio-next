import Link from 'next/link';
import React from 'react';
import {
  SectionDetails,
  SectionHeadingLink,
  SectionStyledHeading,
  SectionTitle,
} from './section-heading.styles';

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
      <SectionTitle $number={titleNumber}>{sectionTitle}</SectionTitle>
      <SectionDetails>
        {sectionDetails}{' '}
        <SectionHeadingLink
          href={sectionHeadingLink}
          // Client-side navigation for internal routes
          as={sectionHeadingLink?.startsWith('/') ? Link : undefined}
        >
          {sectionHeadingLinkContent}
        </SectionHeadingLink>
      </SectionDetails>
    </SectionStyledHeading>
  );
};
