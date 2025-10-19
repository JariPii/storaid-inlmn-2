import { links } from '@/utils/links';

export type NavButtonDestination = 'bookings' | 'home';

export const oneLink = (dest: NavButtonDestination) => {
  const labels: Record<NavButtonDestination, string> = {
    home: 'Home',
    bookings: 'Bookings',
  };

  const link = links.find((item) => item.label === labels[dest]);

  return link || null;
};
