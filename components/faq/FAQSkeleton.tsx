const FAQSkeleton = () => {
  return (
    <div className='flex flex-col w-full animate-pulse gap-4'>
      <div className='flex justify-between p-5 rounded-[5px] bg-(--clr-color-2) hover:bg-(--clr-accent)'>
        <div className='h-6 w-full bg-gray-300'></div>
      </div>
    </div>
  );
};
export default FAQSkeleton;
