import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';

const HeaderSocials = () => {
  return (
    <div className='flex gap-4'>
      <FaFacebook className='w-[1.875rem] h-[1.875rem] text-[var(--clr-accent)] ' />
      <FaXTwitter className='w-[1.875rem] h-[1.875rem] text-[var(--clr-accent)] ' />
      <FaInstagram className='w-[1.875rem] h-[1.875rem] text-[var(--clr-accent)] ' />
      <FaYoutube className='w-[1.875rem] h-[1.875rem] text-[var(--clr-accent)] ' />
    </div>
  );
};
export default HeaderSocials;
