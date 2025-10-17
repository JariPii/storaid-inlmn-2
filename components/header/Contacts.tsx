import { FaEnvelopeOpen } from 'react-icons/fa6';
import { MdPhone } from 'react-icons/md';

const Contacts = () => {
  return (
    <div className='flex items-center gap-6 text-[var(--clr-primary)]'>
      <div className='flex items-center gap-2'>
        <MdPhone className='h-[1.5rem] w-[1.5rem]' />
        +46 8 123 122 44
      </div>
      <div className='flex items-center gap-2'>
        <FaEnvelopeOpen className='h-[1.125rem] w-[1.125rem]' />
        contact@domain.com
      </div>
    </div>
  );
};
export default Contacts;
