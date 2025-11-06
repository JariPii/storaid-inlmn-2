import { cn } from '@/lib/utils';

type ButtonProps = {
  hover?: 'light' | 'dark';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button' | undefined;
  disabled?: boolean;
  buttonTypes?: 'normal' | 'reset';
};

const Button = ({
  hover = 'light',
  className,
  children,
  onClick,
  type = undefined,
  disabled,
  buttonTypes = 'normal',
}: ButtonProps) => {
  const buttonHover = {
    light: 'hover:bg-(--clr-secondary) hover:text-(--clr-accent)',
    dark: 'hover:bg-(--clr-primary)',
  };

  const buttonType = {
    normal: ' bg-(--clr-accent)  text-(--clr-secondary)',
    reset: 'bg-(--clr-accent-3) text-(--clr-accent)',
  };
  return (
    <button
      className={cn(
        `flex items-center ${buttonType[buttonTypes]} justify-center rounded-md font-semibold leading-tight px-8 py-2 cursor-pointer ${buttonHover[hover]} font-semibold max-h-fit`,
        className
      )}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default Button;
