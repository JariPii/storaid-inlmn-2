import { FaChevronCircleRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='flex justify-around bg-(--clr-secondary) p-6'>
      <div>
        <p className='text-(--clr-primary)'>
          &copy; 2025 StorAid, All rights reserved.
        </p>
      </div>
      <div className='flex gap-5'>
        <div className='flex items-center gap-2 '>
          <a href='/terms' className='flex items-center gap-2'>
            <FaChevronCircleRight className='text-(--clr-primary)' />
            <p className='text-(--clr-primary)'>Terms & Conditions</p>
          </a>
        </div>
        <div className='flex items-center gap-2'>
          <a href='/privacy' className='flex items-center gap-2'>
            <FaChevronCircleRight className='text-(--clr-primary)' />
            <p className='text-(--clr-primary)'> Privacy Policy</p>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
