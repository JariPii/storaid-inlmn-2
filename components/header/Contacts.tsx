import { FaEnvelope, FaPhone } from 'react-icons/fa6';

const Contacts = () => {
  return (
    <div className='flex items-center gap-6 text-[var(--clr-primary)]'>
      <div className='flex items-center gap-2'>
        <FaPhone />
        +46 8 123 122 44
      </div>
      <div className='flex items-center gap-2'>
        <FaEnvelope />
        contact@domain.com
      </div>
    </div>
  );
};
export default Contacts;
