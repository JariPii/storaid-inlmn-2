'use client';
import { useBooking } from '@/hooks/BookingContext';
import { Button } from '../buttons/Buttons';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { FaCircleCheck } from 'react-icons/fa6';

type PricingplanCardProps = {
  title: string;
  price: string;
  subscription: string;
  description: string;
  checks: { text: string }[];
  buttonLabel: string;
  className?: string;
};

// TODO: Add destination to bookings page with chosen unit allready set in the form

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
  const router = useRouter();
  const { setSelectedUnit } = useBooking();

  const handleChooseUnit = () => {
    setSelectedUnit(title);
    console.log(title);

    router.push('/bookings/');
  };

  return (
    <div
      className={cn(
        'flex flex-col border-[3px] border-(--clr-color-2) p-9 items-center justify-center max-w-[19rem] gap-3 bg-(--clr-color-4) rounded-[10px] group hover:bg-(--clr-secondary)',
        className
      )}
    >
      <h2 className='text-(--clr-secondary) group-hover:text-(--clr-primary) text-2xl font-semibold '>
        {title}
      </h2>
      <div className='flex gap-4'>
        <span className='text-(--clr-accent) text-shadow-xs text-shadow-black'>
          $
        </span>
        <h3 className='text-[3.25rem] text-(--clr-accent) leading-[52px] font-bold text-shadow-md text-shadow-gray-600'>
          {price}
        </h3>
        <div>
          <p className='flex items-end h-full text-xl font-bold group-hover:text-(--clr-primary)'>
            {subscription}
          </p>
        </div>
      </div>
      <p className='max-w-[28ch] text-center group-hover:text-(--clr-primary)'>
        {description}
      </p>

      <div className='border-b-[1px] w-full group-hover:border-(--clr-primary)'></div>
      <ul className='flex flex-col gap-3'>
        {checks.map((item, index) => (
          <li
            key={index}
            className='flex items-center gap-3 group-hover:text-(--clr-primary)'
          >
            <FaCircleCheck className='text-(--clr-secondary) group-hover:text-(--clr-accent) ' />
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
      <Button onClick={handleChooseUnit} hover='dark'>
        {buttonLabel}
      </Button>
    </div>
  );
};
export default PricingplanCard;
