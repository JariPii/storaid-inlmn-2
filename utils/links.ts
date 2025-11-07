export type NavLink = {
  href: string;
  label: string;
};

// TODO: Fix BOOKINGS link so it does not appear in the nav list

export const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/our_services', label: 'Sercives' },
  { href: '/contact_us', label: 'Contact Us' },
  { href: '/bookings', label: 'Bookings' },
] as const;

export type LinkType = (typeof links)[number];

// export type LinkHref = LinkType['href'];
export type LinkHref = (typeof links)[number]['href'];

export const bookLink: NavLink = { href: '/bookings', label: 'Bookings' };
