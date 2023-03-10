import { StaticImageData } from 'next/image';
import React from 'react';
import {
  AvatarContainer,
  TestimonialAvatar,
  TestimonialContainer,
  TestimonialContent,
  TestimonialHeader,
  TestimonialInformation,
  TestimonialName,
  TestimonialPosition,
  TestimonialStyledCard,
} from '../styles/Testimonials.styled';

export interface ITestimonialCardProps {
  readonly avatar: StaticImageData;
  readonly name: string;
  readonly position: string;
  readonly content: string;
}

export const TestimonialCard: React.FunctionComponent<
  ITestimonialCardProps
> = ({ avatar, name, position, content }) => {
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
              priority={true}
            />
          </AvatarContainer>
          <TestimonialInformation>
            <TestimonialName>{name}</TestimonialName>
            <TestimonialPosition>{position}</TestimonialPosition>
          </TestimonialInformation>
        </TestimonialHeader>
        <TestimonialContent>{content}</TestimonialContent>
      </TestimonialContainer>
    </TestimonialStyledCard>
  );
};
