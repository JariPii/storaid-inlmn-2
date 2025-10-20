import Link from 'next/link';
import Button from './Button';
import { links } from '@/utils/links';

import { oneLink } from '@/utils/helpers';

type NavButtonProps = {
  dest: 'bookings' | 'home';
};

const NavButton = ({ dest }: NavButtonProps) => {
  const link = oneLink(dest);

  if (!link) return null;

  return (
    // <Button>
    <Link
      href={link.href}
      className='py-1 px-3 rounded-[5px] flex items-center justify-center bg-(--clr-accent) hover:bg-(--clr-secondary) hover:text-(--clr-accent)'
    >
      {link.label}
    </Link>
    // </Button>
  );
};
export default NavButton;
