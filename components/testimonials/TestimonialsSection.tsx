import { Suspense } from 'react';
import TestimonialSkeleton, {
  LoadingTestimonialsContainer,
} from './TestimonialSkeleton';
import Section from '../global/Section';
import TestimonialsList from './TestimonialsList';
import { fetchAllTesitmonials } from '@/utils/actions';
import { cacheLife } from 'next/cache';
import TestimonialsContainer from './TestimonialsContainer';
import SectionBackgroundImage from '../global/SectionBackgroundImage';

const TestimonialsSection = async () => {
  // 'use cache';
  // cacheLife('days');

  return (
    <SectionBackgroundImage>
      <Section className='py-24'>
        <div className='flex flex-col items-center gap-4'>
          <h3 className='text-(--clr-accent) text-2xl font-bold'>
            Testimonials
          </h3>
          <h4 className='text-[3.125rem] text-(--clr-primary) font-bold'>
            See What Our Clients Have to Say
          </h4>
          <p className='text-(--clr-primary) max-w-[80%] text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris
            ac blandit nisi non sodales augue. Phasellus eget elit gravida.
          </p>
          <div className='flex gap-4'>
            <Suspense fallback={<LoadingTestimonialsContainer />}>
              <TestimonialsContainer />
            </Suspense>
          </div>
        </div>
      </Section>
    </SectionBackgroundImage>
  );
};
export default TestimonialsSection;
