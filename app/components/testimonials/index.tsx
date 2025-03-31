import React from 'react';
import { testimonials } from '../../../constants';
import { SectionHeading } from '../ui/section-heading';
import { TestimonialCard } from './testimonial-card';
import {
  TestimonialCardsContainer,
  TestimonialsContainer,
} from './testimonials.styles';

export interface ITestimonialsProps {}

export const Testimonials: React.FunctionComponent<ITestimonialsProps> = () => {
  return (
    <TestimonialsContainer id="testimonials" className="container">
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
