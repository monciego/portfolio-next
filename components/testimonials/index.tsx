import { testimonials } from '@/.velite';
import { sortTestimonials } from '@/lib/utils';
import React, { useMemo } from 'react';
import { SectionHeading } from '../ui/section-heading';
import { TestimonialCard } from './testimonial-card';
import {
  TestimonialCardsContainer,
  TestimonialsContainer,
} from './testimonials.styles';

export const Testimonials: React.FunctionComponent = () => {
  const sortedTestimonials = useMemo(() => sortTestimonials(testimonials), []);

  return (
    <TestimonialsContainer id="testimonials" className="container">
      <SectionHeading
        titleNumber="04"
        sectionTitle="testimonials"
        sectionDetails="See what people says about me."
      />

      <TestimonialCardsContainer>
        {sortedTestimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.date} {...testimonial} />
        ))}
      </TestimonialCardsContainer>
    </TestimonialsContainer>
  );
};
