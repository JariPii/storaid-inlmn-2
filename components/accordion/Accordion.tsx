'use client';
import { cn } from '@/lib/utils';
import { FaChevronDown } from 'react-icons/fa6';

type AccordionProps = {
  id?: number | string;
  title: string;
  description: string;
  open?: boolean;
  onToggle?: (id?: number | string) => void;
};

const Accordion = ({
  title,
  description,
  id,
  open = false,
  onToggle,
}: AccordionProps) => {
  return (
    <div className='w-full border-amber-200'>
      <div
        className={cn(
          'flex justify-between p-5 rounded-[5px] bg-(--clr-color-2) hover:bg-(--clr-accent)',
          {
            'bg-(--clr-accent)': open,
          }
        )}
        onClick={() => onToggle?.(id)}
      >
        <h3
          className={cn(
            'font-semibold transition-all duration-500 text-(--clr-secondary)'
          )}
        >
          {title}
        </h3>
        <FaChevronDown
          className={cn(
            'transition-all duration-500 text-(--clr-secondary)',
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
