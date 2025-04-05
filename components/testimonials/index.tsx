import { testimonials } from '@/.velite';
import { sortTestimonials } from '@/lib/utils';
import React from 'react';
import { SectionHeading } from '../ui/section-heading';
import { TestimonialCard } from './testimonial-card';
import {
  TestimonialCardsContainer,
  TestimonialsContainer,
} from './testimonials.styles';

export interface ITestimonialsProps {}

export const Testimonials: React.FunctionComponent<ITestimonialsProps> = () => {
  const sortedTestimonials = sortTestimonials(testimonials);
  const allTestimonials = sortedTestimonials;

  return (
    <TestimonialsContainer id="testimonials" className="container">
      <SectionHeading
        titleNumber="04"
        sectionTitle="testimonials"
        sectionDetails="See what people says about me."
      />

      <TestimonialCardsContainer>
        {allTestimonials.map((testimonial) => {
          return <TestimonialCard key={testimonial.date} {...testimonial} />;
        })}
      </TestimonialCardsContainer>
    </TestimonialsContainer>
  );
};
