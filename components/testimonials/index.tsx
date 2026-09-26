import type { Testimonial } from '@/lib/velite';
import React from 'react';
import { SectionHeading } from '../ui/section-heading';
import { TestimonialCard } from './testimonial-card';
import {
  TestimonialCardsContainer,
  TestimonialsContainer,
} from './testimonials.styles';

interface TestimonialsProps {
  // Expected pre-sorted by date
  testimonials: Testimonial[];
}

export const Testimonials: React.FunctionComponent<TestimonialsProps> = ({
  testimonials,
}) => {
  return (
    <TestimonialsContainer id="testimonials" className="container">
      <SectionHeading
        titleNumber="04"
        sectionTitle="testimonials"
        sectionDetails="See what people says about me."
      />

      <TestimonialCardsContainer>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.date} {...testimonial} />
        ))}
      </TestimonialCardsContainer>
    </TestimonialsContainer>
  );
};
