import React from 'react';
import { testimonials } from '../constants';
import {
  TestimonialCardsContainer,
  TestimonialsContainer,
} from '../styles/Testimonials.styled';
import { SectionHeading } from './section-heading';
import { TestimonialCard } from './testimonial-card';

export interface ITestimonialsProps {}

export const Testimonials: React.FunctionComponent<ITestimonialsProps> = (
  props
) => {
  return (
    <TestimonialsContainer>
      <SectionHeading
        titleNumber="03"
        sectionTitle="testimonials"
        sectionDetails="See what people says about me."
      />

      <TestimonialCardsContainer>
        {testimonials.map((testimonial) => {
          return <TestimonialCard key={testimonial.id} {...testimonial} />;
        })}
      </TestimonialCardsContainer>
    </TestimonialsContainer>
  );
};
