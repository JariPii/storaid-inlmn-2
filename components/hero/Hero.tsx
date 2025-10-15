import { cn } from '@/lib/utils';

const Hero = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cn('bg-(--clr-accent-3) w-full h-auto')}>
      <div className='w-[min(100%,1320px)] mx-auto'>{children}</div>
    </div>
  );
};
export default Hero;
