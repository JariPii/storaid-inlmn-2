import Image from 'next/image';
import quotes from '../../public/images/quotes.svg';
import { FaStar } from 'react-icons/fa6';

type TestimonialProps = {
  //   rating?: string;
  id?: number;
  rating: number;
  comment: string;
  avatarUrl: string;
  name: string;
  companyName: string;
};

const TestimonialCard = ({
  rating,
  comment,
  avatarUrl,
  name,
  companyName,
}: TestimonialProps) => {
  return (
    <div className='w-[27.3rem] flex flex-col gap-8 p-8 rounded-[10px] border-2 bg-(--clr-primary)'>
      <div className='flex gap-0.5 text-(--clr-secondary)'>
        {Array.from({ length: rating }).map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>
      <p className='w-[38ch]'>{comment}</p>
      <div className='flex justify-between'>
        <div className='flex gap-4 items-center'>
          <Image
            src={avatarUrl}
            alt={`${name}s avatar`}
            width={64}
            height={64}
            className='rounded-full'
            unoptimized
          />
          <div>
            <h4 className='text-xl font-bold'>{name}</h4>
            <p>{companyName}</p>
          </div>
        </div>
        <Image src={quotes} alt='quotes' />
      </div>
    </div>
  );
};
export default TestimonialCard;
