import { cn } from '@/lib/utils';
import Link from 'next/link';

import { LinkHref, links } from '@/utils/links';

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
    light: 'hover:bg-(--clr-secondary) hover:text-(--clr-primary)',
    dark: 'hover:bg-(--clr-primary)',
  };

  const buttonType = {
    normal: ' bg-(--clr-accent)  text-(--clr-secondary)',
    reset: 'bg-(--clr-accent-3) text-(--clr-accent)',
  };
  return (
    <button
      className={cn(
        `flex items-center ${buttonType[buttonTypes]} justify-center rounded-md font-semibold leading-tight px-9 py-4 cursor-pointer ${buttonHover[hover]} font-semibold h-fit`,
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

type NavButtonProps = {
  href: LinkHref;
  label?: string;
  colorVariant?: 'darkBg' | 'lightBg';
};

const NavButton = ({
  href,
  label,
  colorVariant = 'lightBg',
}: NavButtonProps) => {
  const navLink = links.find((link) => link.href === href);

  if (!navLink) {
    console.log('');
    return null;
  }

  const variant = {
    darkBg: 'hover:bg-(--clr-primary) ',
    lightBg: 'hover:bg-(--clr-secondary) hover:text-(--clr-primary)',
  };

  return (
    <Link
      href={navLink?.href}
      className={cn(
        `py-3 px-9 bg-(--clr-accent) text-(--clr-secondary) rounded-md max-h-fit font-semibold ${variant[colorVariant]}`
      )}
    >
      {label || navLink?.label}
    </Link>
  );
};
export { Button, NavButton };
