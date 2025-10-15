import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';

const HeaderSocials = () => {
  return (
    <div className='flex gap-4'>
      <div className='h-auto rounded-full bg-(--clr-accent) p-1'>
        <FaFacebookF className='w-[1.5rem] h-[1.5rem] text-[var(--clr-secondary)] ' />
      </div>
      <div className='h-auto rounded-full bg-(--clr-accent) p-1'>
        <FaXTwitter className='w-[1.5rem] h-[1.5rem] text-[var(--clr-secondary)] ' />
      </div>
      <div className='h-auto rounded-full bg-(--clr-accent) p-1'>
        <FaInstagram className='w-[1.5rem] h-[1.5rem] text-[var(--clr-secondary)] ' />
      </div>
      <div className='h-auto rounded-full bg-(--clr-accent) p-1'>
        <FaYoutube className='w-[1.5rem] h-[1.5rem] text-[var(--clr-secondary)] ' />
      </div>
    </div>
  );
};
export default HeaderSocials;
