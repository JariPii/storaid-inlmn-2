'use client';
import { links } from '@/utils/links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <nav className='flex items-center justify-center gap-6 text-[var(--clr-secondary)] font-semibold size-[1.125rem] w-full h-full '>
      {links
        .filter((link) => link.href !== '/bookings')
        .map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                isActive ? 'text-(--clr-accent)' : 'text-(--clr-secondary)'
              } hover:text-(--clr-accent)`}
            >
              {link.label}
            </Link>
          );
        })}
    </nav>
  );
};
export default NavLinks;
