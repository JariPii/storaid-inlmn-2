import { bookLink } from '@/utils/links';
import Link from 'next/link';

const BookNowButton = () => {
  return (
    <div className='text-amber-300 text-3xl'>
      <Link href={bookLink.href}>{bookLink.label}</Link>
    </div>
  );
};
export default BookNowButton;
