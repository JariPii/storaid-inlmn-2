'use client';

import { Testimonial } from '@/utils/actions';
import TestimonialCard from './TestimonialCard';

type Props = {
  testimonials: Testimonial[];
};

const TestimonialsList = ({ testimonials }: Props) => {
  return (
    <>
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} {...testimonial} />
      ))}
    </>
  );
};
export default TestimonialsList;
