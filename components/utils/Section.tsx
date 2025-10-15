import { cn } from '@/lib/utils';

type SectionProps = {
  variant?: 'dark' | 'light';
  children: React.ReactNode;
};

const Section = ({ variant = 'dark', children }: SectionProps) => {
  const backgroundColor = {
    dark: 'bg-(--clr-accent-3)',
    light: 'bg-(--clr-primary)',
  };

  return (
    <div className={cn(`${backgroundColor[variant]} w-full h-auto`)}>
      <div className='w-[min(100%,1320px)] mx-auto'>{children}</div>
    </div>
  );
};
export default Section;
