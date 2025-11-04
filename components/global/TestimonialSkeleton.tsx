export const LoadingTestimonialsContainer = () => {
  return (
    <div className='flex gap-4'>
      <TestimonialSkeleton />
      <TestimonialSkeleton />
      <TestimonialSkeleton />
    </div>
  );
};

const TestimonialSkeleton = () => {
  return (
    <div className='max-w-[27.3rem] flex flex-col gap-8 p-8 rounded-[10px] border-2 bg-(--clr-primary) animate-pulse'>
      <div className='flex gap-0.5 text-(--clr-secondary) h-5 bg-gray-200 rounded-md w-24'></div>
      <p className='max-w-[38ch] h-[5rem] bg-gray-200 rounded-md'></p>
      <div className='flex justify-between'>
        <div className='flex gap-4 items-center'>
          <div className='w-16 h-16 rounded-full bg-gray-200'></div>

          <div className='flex flex-col gap-4'>
            <h4 className='text-xl font-bold h-7 bg-gray-200 w-[200px]'></h4>
            <p className='h-4 w-[10rem] bg-gray-200'></p>
          </div>
        </div>
        <div className='h-[53px] w-[64px] bg-gray-200 '></div>
      </div>
    </div>
  );
};
export default TestimonialSkeleton;
