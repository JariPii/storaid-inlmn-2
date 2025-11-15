'use cache';
import { fetchAllTesitmonials } from '@/utils/actions';
import TestimonialsList from './TestimonialsList';
import { cacheLife } from 'next/cache';

const TestimonialsContainer = async () => {
  cacheLife('weeks');
  const testimonials = await fetchAllTesitmonials();
  return <TestimonialsList testimonials={testimonials} />;
};
export default TestimonialsContainer;
