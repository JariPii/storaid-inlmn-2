'use client';

import BlogCardSkeleton from '@/components/global/BlogCardSkeleton';
import TestimonialSkeleton from '@/components/global/TestimonialSkeleton';
import Section from '@/components/global/Section';
import FAQSkeleton from '@/components/global/FAQSkeleton';

export function ErrorComp({ error }: { error: Error }) {
  return (
    <div>
      <div>
        <Section variant='light' className='flex flex-col gap-4 py-20'>
          <div className='bg-(--clr-secondary) p-2'>
            <h3 className='text-2xl text-(--clr-accent) font-bold'>
              Latest Blog and News
            </h3>
          </div>
          <div className='grid grid-cols-2 gap-1'>
            <div className='w-full'>
              <h4 className='text-[3.25rem] font-bold leading-[52px]'>
                Check Out Our Latest Blog and News Update
              </h4>
            </div>

            <div className='flex items-center h-auto'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                molestie nisl sed dui lacinia gravida. Nulla quis nulla leo.
                Mauris ac blandit nisi non sodales augue. Phasellus eget elit
                gravida.
              </p>
            </div>
          </div>

          <div className='flex flex-col items-center gap-6'>
            <div className='flex gap-4'>
              <h3 className='text-3xl text-red-400 font-bold'>
                * {error.message} *
              </h3>
            </div>

            <div className='flex gap-6'>
              <BlogCardSkeleton />
              <BlogCardSkeleton />
              <BlogCardSkeleton />
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}

type TestimonialBackgroundProps = {
  backgroundImage?: 'with' | 'withOut';

  error: Error;
};

export function TestimonailsError({
  error,
  backgroundImage,
}: TestimonialBackgroundProps) {
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
          <h3 className='text-3xl text-red-400 font-bold'>
            * {error.message} *
          </h3>
        </div>
        <div className='flex gap-6'>
          <TestimonialSkeleton />
          <TestimonialSkeleton />
          <TestimonialSkeleton />
        </div>
      </div>
    </Section>
  );
}

export function FAQError({ error }: { error: Error }) {
  return (
    <Section variant='light' className='flex flex-col gap-4 py-20'>
      <div className='bg-(--clr-secondary) p-2'>
        <h3 className='text-2xl text-(--clr-accent) font-bold'>FAQs</h3>
      </div>
      <div className='grid grid-cols-2 gap-1'>
        <div className='w-full'>
          <h4 className='text-[3.25rem] font-bold tracking-tighter leading-[52px]'>
            Frequently Ask Questions
          </h4>
          <p className='leading-6 text-(--clr-secondary)'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <h5 className='text-red-400 font-bold text-3xl'>
            * {error.message} *
          </h5>
        </div>
        <div className='flex flex-col items-center h-auto w-[auto] gap-4'>
          <FAQSkeleton />
          <FAQSkeleton />
          <FAQSkeleton />
          <FAQSkeleton />
          <FAQSkeleton />
        </div>
      </div>
    </Section>
  );
}
