import { cn } from '@/lib/utils';

type ButtonProps = {
  height?: string;
  width?: string;
  padding?: string;
  margin?: string;
  color?: string;
  hover?: 'light' | 'dark';
  background?: string;
  text?: string;
  href?: string;
  className?: string;
  children: React.ReactNode;
};

const Button = ({
  height,
  width,
  padding,
  margin,
  color,
  hover = 'light',
  background,
  text,
  href,
  className,
  children,
}: ButtonProps) => {
  const buttonHover = {
    light: 'hover:bg-(--clr-secondary) hover:text-(--clr-accent)',
    dark: 'hover:bg-(--clr-primary)',
  };
  return (
    <button className={cn(`button-primary ${buttonHover[hover]} py-10`)}>
      {children}
    </button>
  );
};
export default Button;
