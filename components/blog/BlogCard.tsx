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
  // const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div
      className={cn(
        'flex flex-col gap-4 w-[26.875rem] bg-(--clr-secondary) hover:bg-(--clr-color-4) hover:transition-colors hover:duration-500 group p-6 rounded-[5px] hover:cursor-pointer h-[36rem]',
        {
          'h-auto': isExpanded,
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
        <FaRegCalendar className='text-lg group-hover:text-(--clr-secondary)' />
        <p className=' text-[14px] group-hover:text-(--clr-secondary)'>
          {created}
        </p>
      </div>
      <h2 className='text-(--clr-primary) group-hover:text-(--clr-secondary) text-xl font-bold'>
        {title}
      </h2>
      <p
        className={cn(
          'text-(--clr-primary) group-hover:text-(--clr-secondary) overflow-hidden transition-[max-height] duration-300',
          isExpanded ? 'line-clamp-none' : 'line-clamp-3'
        )}
      >
        {description}
      </p>
      {isExpanded ? 'Read Less' : 'Read More'}
      <FaArrowRight
        className={cn(
          'trasition-transform duration-500',
          isExpanded ? 'rotate-180' : 'rotate-0'
        )}
      />
    </div>
  );
};
export default BlogCard;
