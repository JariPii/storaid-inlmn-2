import { cn } from '@/lib/utils';

type SectionProps = {
  variant?: 'dark' | 'light';
  children: React.ReactNode;
  className?: string;
};

const Section = ({ variant = 'dark', children, className }: SectionProps) => {
  const backgroundColor = {
    dark: 'bg-(--clr-accent-3)',
    light: 'bg-(--clr-primary)',
  };

  return (
    <div className={cn(`${backgroundColor[variant]} w-full h-auto`)}>
      <div className={cn('w-[min(100%,1320px)] mx-auto', className)}>
        {children}
      </div>
    </div>
  );
};
export default Section;
