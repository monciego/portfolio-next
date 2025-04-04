import { StaticImageData } from 'next/legacy/image';
import React from 'react';
import { MDXContent } from '../mdx-components';
import {
  AvatarContainer,
  TestimonialAvatar,
  TestimonialContainer,
  TestimonialHeader,
  TestimonialInformation,
  TestimonialName,
  TestimonialPosition,
  TestimonialStyledCard,
} from './testimonials.styles';

export interface ITestimonialCardProps {
  readonly avatar: StaticImageData;
  readonly name: string;
  readonly title: string;
  readonly content: string;
}

export const TestimonialCard: React.FunctionComponent<
  ITestimonialCardProps
> = ({ avatar, name, title, content }) => {
  return (
    <TestimonialStyledCard>
      <TestimonialContainer>
        <TestimonialHeader>
          <AvatarContainer>
            <TestimonialAvatar
              src={avatar}
              alt={name}
              layout="fill"
              objectFit="cover"
              priority={false}
            />
          </AvatarContainer>
          <TestimonialInformation>
            <TestimonialName>{name}</TestimonialName>
            <TestimonialPosition>{title}</TestimonialPosition>
          </TestimonialInformation>
        </TestimonialHeader>
        <MDXContent code={content} />
      </TestimonialContainer>
    </TestimonialStyledCard>
  );
};
