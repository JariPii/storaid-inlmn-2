import { links } from '@/utils/links';
import Link from 'next/link';

const NavLinks = () => {
  return (
    <div className='flex gap-2'>
      {links.map((link) => {
        return (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};
export default NavLinks;
