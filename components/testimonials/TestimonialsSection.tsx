import { testimonials } from '@/mockData';
import Section from '../utils/Section';
import TestimonialCard from './TestimonialCard';
import bgImg from '../../public/images/BgImg.png';

const TestimonialsSection = () => {
  return (
    // <div className='bg-[url(/images/BgImg.png)]'>
    <Section backroundImage='with' className='py-24'>
      <div className='flex flex-col items-center gap-4'>
        <h3 className='text-(--clr-accent) text-2xl font-bold'>Testimonials</h3>
        <h4 className='text-[3.125rem] text-(--clr-primary) font-bold'>
          See What Our Clients Have to Say
        </h4>
        <p className='text-(--clr-primary) w-[112ch] text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac
          blandit nisi non sodales augue. Phasellus eget elit gravida.
        </p>
        <div className='flex gap-4'>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </Section>
    // </div>
  );
};
export default TestimonialsSection;
