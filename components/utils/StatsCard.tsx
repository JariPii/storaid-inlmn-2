import { cn } from '@/lib/utils';

type StatsCardProps = {
  className?: string;
};

const StatsCard = ({ className }: StatsCardProps) => {
  return (
    <div
      className={cn(
        'bg-(--clr-secondary) flex items-center justify-center p-4 rounded-[10px] gap-8 max-w-[38rem]',
        className
      )}
    >
      <div className='flex flex-col items-center justify-center'>
        <h3 className='text-(--clr-accent) text-[4rem] font-extrabold leading-20 tracking-tighter'>
          12+
        </h3>
        <p className='text-(--clr-primary) leading-6'>Years of Experience</p>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h3 className='text-(--clr-accent) text-[4rem] font-extrabold leading-20 tracking-tighter'>
          150K+
        </h3>
        <p className='text-(--clr-primary) leading-6'>Satisfied Clients</p>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h3 className='text-(--clr-accent) text-[4rem] font-extrabold leading-20 tracking-tighter'>
          35+
        </h3>
        <p className='text-(--clr-primary) leading-6'>Warehouse</p>
      </div>
    </div>
  );
};
export default StatsCard;
