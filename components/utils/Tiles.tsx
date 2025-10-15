import { cn } from '@/lib/utils';

type TileProps = {
  title: string;
  description: string;
  className?: string;
};

const Tile = ({ title, description, className }: TileProps) => {
  return (
    <div
      className={cn(
        'w-[35ch] p-1rem border-3 border-(--clr-color-2) hover:border-(--clr-accent) rounded-xl p-5 flex flex-col gap-4',
        className
      )}
    >
      <h4 className={cn('text-2xl font-semibold leading-6', className)}>
        {title}
      </h4>
      <p className={cn('font-normal leading-6', className)}>{description}</p>
    </div>
  );
};
export default Tile;
