'use client';

import errorImg from '@/public/images/error.webp';

import Section from '@/components/global/Section';
import Image from 'next/image';

export default function ErrorComp({ error }: { error: Error }) {
  return (
    <div className='h-full w-full relative overflow-hidden bg-[url(/images/error.webp)] bg-cover bg-center'>
      <div className='absolute rotate-45 bg-(--clr-secondary) h-[15rem] w-[15rem] top-0 left-0 -translate-x-1/2 -translate-y-1/2' />
      <div className='absolute rotate-45 bg-(--clr-secondary) h-[15rem] w-[15rem] top-0 right-0 translate-x-1/2 -translate-y-1/2' />
      <div className='h-[80dvh] w-auto border-6 border-(--clr-secondary)'>
        <div className='flex flex-col items-center justify-around h-full w-full bg-(--clr-error-img-overlay)'>
          <h2 className='text-(--clr-accent) underline underline-offset-6 text-7xl font-bold text-shadow-lg text-shadow-red-500'>
            We at StorAid are really sorry!
          </h2>
          <h3 className='text-(--clr-accent) text-6xl font-bold text-shadow-lg text-shadow-red-500'>
            There seems to be some difficulties right now!
          </h3>
          <h3 className='text-(--clr-accent) text-6xl font-bold text-shadow-lg text-shadow-red-500'>
            Please try again later!
          </h3>
        </div>
      </div>
      <div className='absolute rotate-45 bg-(--clr-secondary) h-[15rem] w-[15rem] bottom-0 left-0 -translate-x-1/2 translate-y-1/2' />
      <div className='absolute rotate-45 bg-(--clr-secondary) h-[15rem] w-[15rem] bottom-0 right-0 translate-x-1/2 translate-y-1/2' />
    </div>
  );
}
