'use cache';
import Section from '../global/Section';
import { fetchAllBlogs } from '@/utils/actions';
import BlogCardsList from './BlogCardsList';
import { LoadingBlogContainer } from '../global/BlogCardSkeleton';
import { Suspense } from 'react';
import { cacheLife } from 'next/cache';

const BlogSection = async () => {
  const blogs = await fetchAllBlogs();
  cacheLife('days');

  return (
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
        <div className='flex gap-6'>
          <Suspense fallback={<LoadingBlogContainer />}>
            <BlogCardsList blogs={blogs} />
          </Suspense>
        </div>
      </Section>
    </div>
  );
};
export default BlogSection;
