import Button from '../buttons/Button';
import { cn } from '@/lib/utils';
import { FaCheck } from 'react-icons/fa6';

type PricingplanCardProps = {
  title: string;
  price: string;
  subscription: string;
  description: string;
  checks: { text: string }[];
  buttonLabel: string;
  className?: string;
};

const PricingplanCard = ({
  title,
  //   currency,
  checks,
  price,
  subscription,
  description,
  buttonLabel,
  className,
}: PricingplanCardProps) => {
  return (
    <div
      className={cn(
        'flex flex-col border-[3px] border-(--clr-color-2) p-9 items-center justify-center w-[20rem] gap-3 bg-(--clr-color-4) rounded-[10px] group hover:bg-(--clr-secondary)',
        className
      )}
    >
      <h2 className='text-(--clr-secondary) group-hover:text-(--clr-primary) text-2xl font-semibold'>
        {title}
      </h2>
      <div className='flex gap-4'>
        <span className='text-(--clr-accent)'>$</span>
        <h3 className='text-[3.25rem] text-(--clr-accent) leading-[52px] font-bold '>
          {price}
        </h3>
        <div>
          <p className='flex items-end h-full text-xl font-bold group-hover:text-(--clr-primary)'>
            {subscription}
          </p>
        </div>
      </div>
      <p className='w-[28ch] text-center group-hover:text-(--clr-primary)'>
        {description}
      </p>

      <div className='border-2 w-full'></div>
      <ul className='flex flex-col gap-2'>
        {checks.map((item, index) => (
          <li
            key={index}
            className='flex gap-4 group-hover:text-(--clr-primary)'
          >
            <div className=' bg-(--clr-secondary) group-hover:bg-(--clr-accent) rounded-full flex items-center justify-center p-1'>
              <FaCheck className='text-(--clr-color-4) group-hover:text-(--clr-secondary)' />
            </div>
            {/* <Image
              src={check}
              alt='Check icon'
              width={20}
              height={20}
              className='w-5 h-5 text-amber-800'
            /> */}
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
      <Button>{buttonLabel}</Button>
    </div>
  );
};
export default PricingplanCard;
