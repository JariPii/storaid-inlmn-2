import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaCalendar, FaRegCalendar } from 'react-icons/fa6';

type BlogCardProps = {
  image: string;
  alt: string;
  date: string;
  title: string;
  content: string;
};

const BlogCard = ({ image, alt, date, title, content }: BlogCardProps) => {
  return (
    <div className='flex flex-col gap-4 w-[26.875rem] bg-(--clr-secondary) p-6 rounded-[5px]'>
      <Image
        src={image}
        alt={alt}
        width={1000}
        height={1000}
        className='rounded-[5px]'
      />
      <div className='flex gap-2 text-(--clr-primary) items-baseline'>
        <FaRegCalendar className='text-lg' />
        <p className=' text-[14px] '>{date}</p>
      </div>
      <h2 className='text-(--clr-primary) text-xl font-bold'>{title}</h2>
      <p className='text-(--clr-primary)'>{content}</p>
      <Link href='/' className='text-(--clr-accent) flex items-center gap-2'>
        Read more <FaArrowRight />
      </Link>
    </div>
  );
};
export default BlogCard;
