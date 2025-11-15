import Section from '../global/Section';
import Image from 'next/image';
import { logo1, logo2, logo3, logo4, logo5 } from '@/public/images/logos';

const BrandsBar = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5];
  return (
    <Section variant='brands' className='my-4'>
      <div className='flex items-center justify-between gap-4 h-auto py-4'>
        {logos.map((logo, i) => (
          <Image
            key={i}
            src={logo}
            alt='Company logo'
            className='max-w-[13.75rem]'
          />
        ))}
      </div>
    </Section>
  );
};
export default BrandsBar;
