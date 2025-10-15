import BookNowButton from './BookNow';
import Logo from './Logo';
import NavLinks from './NavLinks';

const Header = () => {
  return (
    <div className='flex justify-between'>
      <Logo />
      <NavLinks />
      <BookNowButton />
    </div>
  );
};
export default Header;
