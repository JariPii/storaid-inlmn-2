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
    <Link
      href={link.href}
      className='py-2 px-4 rounded-[5px] flex font-semibold items-center justify-center bg-(--clr-accent) hover:bg-(--clr-secondary) hover:text-(--clr-accent) max-h-fit'
    >
      {link.label}
    </Link>
  );
};
export default NavButton;
