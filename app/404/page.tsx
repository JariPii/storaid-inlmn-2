import { testimonials } from '../../mockData';
import TestimonialCard from '@/components/testimonials/TestimonialCard';

const ErrorPage = () => {
  return (
    <>
      <h1>TESTIMONIALS</h1>
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} {...testimonial} />
      ))}
    </>
  );
};
export default ErrorPage;
