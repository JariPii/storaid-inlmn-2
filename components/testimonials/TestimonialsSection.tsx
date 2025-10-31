import { Suspense } from 'react';
import TestimonialSkeleton, {
  LoadingTestimonialsContainer,
} from '../global/TestimonialSkeleton';
import Section from '../utils/Section';
import TestimonialsList from './TestimonialsList';
import { fetchAllTesitmonials } from '@/utils/actions';

type TestimonialBackgroundProps = {
  backgroundImage?: 'with' | 'withOut';
};

const TestimonialsSection = async ({
  backgroundImage = 'withOut',
}: TestimonialBackgroundProps) => {
  'use cache';
  const testimonials = await fetchAllTesitmonials();
  return (
    <Section backroundImage={backgroundImage} className='py-24'>
      <div className='flex flex-col items-center gap-4'>
        <h3 className='text-(--clr-accent) text-2xl font-bold'>Testimonials</h3>
        <h4 className='text-[3.125rem] text-(--clr-primary) font-bold'>
          See What Our Clients Have to Say
        </h4>
        <p className='text-(--clr-primary) max-w-[112ch] text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac
          blandit nisi non sodales augue. Phasellus eget elit gravida.
        </p>
        <div className='flex gap-4'>
          <Suspense fallback={<LoadingTestimonialsContainer />}>
            <TestimonialsList testimonials={testimonials} />
          </Suspense>
        </div>
      </div>
    </Section>
  );
};
export default TestimonialsSection;
