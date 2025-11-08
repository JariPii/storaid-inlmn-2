import Logo from './Logo';
import NavLinks from './NavLinks';
import Socials from './Socials';
import Contacts from './Contacts';
import { NavButton } from '../buttons/Buttons';

const Header = () => {
  return (
    <div className='flex justify-between flex-col sticky top-0 left-0 right-0 z-10 bg-(--clr-primary)'>
      <div className='flex justify-between bg-[var(--clr-secondary)] py-[0.5rem] px-[2rem] '>
        <Contacts />
        <Socials />
      </div>
      <div className='grid grid-cols-[auto_1fr_auto] justify-between items-center w-full py-4 px-8'>
        <Logo />
        <NavLinks />
        <NavButton href='/bookings' />
      </div>
    </div>
  );
};
export default Header;
