import { cn } from '@/lib/utils';

type BackroundImageProps = {
  imgUrl?: string;
  children: React.ReactNode;
  className?: string;
};

const SectionBackgroundImage = ({
  imgUrl,
  children,
  className,
}: BackroundImageProps) => {
  return (
    <div
      className={cn(
        `bg-[url(/images/BgImg_opt.webp)] bg-no-repeat bg-cover bg-top`,
        className
      )}
    >
      {children}
    </div>
  );
};
export default SectionBackgroundImage;
