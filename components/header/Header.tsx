import BookNowButton from './BookNow';
import Logo from './Logo';
import NavLinks from './NavLinks';
import Socials from './Socials';
import Contacts from './Contacts';

const Header = () => {
  return (
    <div className='flex justify-between flex-col'>
      <div className='flex justify-between bg-[var(--clr-secondary)] py-[0.5rem] px-[2rem]'>
        <Contacts />
        <Socials />
      </div>
      <div className='grid grid-cols-[auto_1fr_auto] justify-between w-full py-4 px-8'>
        <Logo />
        <NavLinks />
        <BookNowButton />
      </div>
    </div>
  );
};
export default Header;
