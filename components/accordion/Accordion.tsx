'use client';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

type AccordionProps = {
  title: string;
  description: string;
};

const Accordion = ({ title, description }: AccordionProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='w-full border-amber-200'>
      <div
        className={cn(
          'flex justify-between p-5 rounded-[5px] bg-(--clr-color-2) hover:bg-(--clr-accent)',
          {
            'bg-(--clr-accent)': open,
          }
        )}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <h3>{title}</h3>
        <FaChevronDown
          className={cn(
            'transition-transform duration-500',
            !open ? 'rotate-0' : 'rotate-180'
          )}
        />
      </div>
      <div
        className={cn(
          !open ? 'overflow-hidden h-0' : 'h-auto no-scrollbar overflow-scroll',
          'transition-[height] duration-500 ease-in-out transition-discrete'
        )}
      >
        <p className='py-5 px-10'>{description}</p>
      </div>
    </div>
  );
};
export default Accordion;
