import { bookLink } from '@/utils/links';
import Link from 'next/link';
import Buttons from '../buttons/Buttons';
import Button from '../buttons/Button';

const BookNowButton = () => {
  return (
    <Button>
      <Link href={bookLink.href}>{bookLink.label}</Link>
    </Button>
  );
};
export default BookNowButton;
