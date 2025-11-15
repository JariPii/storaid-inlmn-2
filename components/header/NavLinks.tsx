'use client';
import { cn } from '@/lib/utils';
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
              className={cn(
                ' px-3 py-1 text-lg rounded-sm hover:text-(--clr-primary) hover:bg-(--clr-accent-3)',
                `${
                  isActive
                    ? 'text-(--clr-accent) bg-(--clr-secondary)'
                    : 'text-(--clr-secondary)'
                }`
              )}
            >
              {link.label}
            </Link>
          );
        })}
    </nav>
  );
};
export default NavLinks;
