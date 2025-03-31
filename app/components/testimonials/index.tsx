import React from 'react';
import { SectionHeading } from '../../../components/section-heading';
import { testimonials } from '../../../constants';
import { TestimonialCard } from './testimonial-card';
import {
  TestimonialCardsContainer,
  TestimonialsContainer,
} from './testimonials.styles';

export interface ITestimonialsProps {}

export const Testimonials: React.FunctionComponent<ITestimonialsProps> = () => {
  return (
    <TestimonialsContainer id="testimonials">
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
