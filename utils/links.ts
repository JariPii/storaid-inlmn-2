type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/our_services', label: 'Sercives' },
  { href: '/contact_us', label: 'Contact Us' },
  { href: '/booking', label: 'Bookings' },
];

export const bookLink: NavLink = { href: '/bookings', label: 'Bookings' };
