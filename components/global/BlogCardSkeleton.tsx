import { FaArrowRight, FaRegCalendar } from 'react-icons/fa6';

export const LoadingBlogContainer = () => {
  return (
    <div className='flex gap-4'>
      <BlogCardSkeleton />
      <BlogCardSkeleton />
      <BlogCardSkeleton />
    </div>
  );
};

const BlogCardSkeleton = () => {
  return (
    <div className='flex flex-col gap-4 w-[26.875rem] bg-(--clr-primary) border-[1px] border-gray-300 p-6 rounded-[5px] h-[36rem] animate-pulse'>
      <div className='bg-gray-200 h-1/2 w-full rounded-[5px]'></div>
      <div className='flex gap-2 text-(--clr-primary) '>
        <div className='bg-gray-200 w-2/5 h-5 rounded-[5px]'></div>
        <p className=' text-[14px] '></p>
      </div>
      <h2 className='h-10 w-full bg-gray-200 rounded-[5px]'></h2>
      <p className='text-(--clr-primary) h-24 w-full bg-gray-200 rounded-[5px] '></p>
      <div className='flex items-center gap-1.5'>
        <p className='text-(--clr-accent) w-2/6 h-5 bg-gray-200 rounded-[5px]'></p>
      </div>
    </div>
  );
};
export default BlogCardSkeleton;
