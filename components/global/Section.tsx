import { cn } from '@/lib/utils';

type SectionProps = {
  backroundImage?: 'with' | 'withOut';
  variant?: 'dark' | 'light' | 'brands';
  children: React.ReactNode;
  className?: string;
};

const Section = ({
  backroundImage = 'withOut',
  variant = 'dark',
  children,
  className,
}: SectionProps) => {
  const backgroundColor = {
    dark: 'bg-(--clr-accent-3)',
    light: 'bg-(--clr-primary)',
    brands: 'bg-(--clr-color-3)',
  };

  const withBackgroundImage = {
    with: 'bg-[url(/images/BgImg_opt.webp)] bg-no-repeat bg-cover bg-top',
    withOut: 'bg-transparent',
  };

  return (
    <section className={`${withBackgroundImage[backroundImage]}`}>
      <div className={cn(`${backgroundColor[variant]} w-full h-auto`)}>
        <div className={cn('w-[min(100%,1320px)] mx-auto', className)}>
          {children}
        </div>
      </div>
    </section>
  );
};
export default Section;
