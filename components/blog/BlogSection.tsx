import Section from '../utils/Section';
import BlogCard from './BlogCard';
import { fetchAllBlogs } from '@/utils/actions';
import BlogCardsList from './BlogCardsList';
import { cacheLife } from 'next/cache';
import { LoadingBlogContainer } from '../global/BlogCardSkeleton';
import { Suspense } from 'react';

const BlogSection = async () => {
  'use cache';
  cacheLife('days');
  const blogs = await fetchAllBlogs();
  return (
    <div>
      <Section variant='light' className='flex flex-col gap-4 py-20'>
        <div>
          <h3 className='text-2xl text-(--clr-accent) font-bold'>
            Latest Blog and News
          </h3>
        </div>
        <div className='grid grid-cols-2 gap-1'>
          <div className='w-full'>
            <h4 className='text-[3.25rem] font-bold tracking-tighter leading-[52px]'>
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
          {/* {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))} */}
          <Suspense fallback={<LoadingBlogContainer />}>
            <BlogCardsList blogs={blogs} />
          </Suspense>
        </div>
      </Section>
    </div>
  );
};
export default BlogSection;
