import { cn } from '@/lib/utils';
import Image from 'next/image';
import { FaArrowRight, FaRegCalendar } from 'react-icons/fa6';

type BlogCardProps = {
  id?: string;
  created: string;
  imageUrl: string;
  title: string;
  description: string;
  isExpanded?: boolean;
  onToggle?: (id?: string) => void;
};

const BlogCard = ({
  id,
  imageUrl,
  created,
  title,
  description,
  isExpanded = false,
  onToggle,
}: BlogCardProps) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 w-[26.875rem] bg-(--clr-secondary) hover:bg-(--clr-color-4) hover:transition-colors hover:duration-500 group p-6 rounded-[5px] hover:cursor-pointer h-[36rem]',
        {
          'h-auto bg-(--clr-color-4)': isExpanded,
        }
      )}
      onClick={() => onToggle?.(id)}
    >
      <Image
        src={imageUrl}
        alt='Blog image'
        width={500}
        height={500}
        className='rounded-[5px]'
      />
      <div className='flex gap-2 text-(--clr-primary)  items-baseline'>
        <FaRegCalendar
          className={cn('text-lg group-hover:text-(--clr-secondary)', {
            isExpandedText: isExpanded,
          })}
        />
        <p
          className={cn(' text-[14px] group-hover:text-(--clr-secondary)', {
            isExpandedText: isExpanded,
          })}
        >
          {created}
        </p>
      </div>
      <h2
        className={cn(
          'text-(--clr-primary) group-hover:text-(--clr-secondary) text-xl font-bold',
          { isExpandedText: isExpanded }
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          'text-(--clr-primary) group-hover:text-(--clr-secondary) overflow-hidden transition-[max-height] duration-300',
          { 'text-(--clr-secondary)': isExpanded },
          isExpanded ? 'line-clamp-none' : 'line-clamp-3'
        )}
      >
        {description}
      </p>
      <div className='flex items-center gap-1.5'>
        <p
          className={cn('text-(--clr-accent)', {
            isExpandedText: isExpanded,
          })}
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </p>
        <FaArrowRight
          className={cn(
            'text-(--clr-accent)',
            'trasition-all duration-500',
            isExpanded ? 'rotate-180 text-(--clr-secondary)' : 'rotate-0'
          )}
        />
      </div>
    </div>
  );
};
export default BlogCard;

// TODO: Finish the blogcards text and so on!!!
