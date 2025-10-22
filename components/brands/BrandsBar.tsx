import Section from '../utils/Section';
import Image from 'next/image';
import logo1 from '../../public/images/Logoipsum1.png';
import logo2 from '../../public/images/Logoipsum2.png';
import logo3 from '../../public/images/Logoipsum3.png';
import logo4 from '../../public/images/Logoipsum4.png';
import logo5 from '../../public/images/Logoipsum5.png';

const BrandsBar = () => {
  return (
    <Section variant='brands' className='my-4'>
      <div className='flex items-center justify-between gap-4 h-auto py-4'>
        <Image src={logo1} alt='Company logo' className='max-w-[13.75rem]' />
        <Image src={logo2} alt='Company logo' className='max-w-[13.75rem]' />
        <Image src={logo3} alt='Company logo' className='max-w-[13.75rem]' />
        <Image src={logo4} alt='Company logo' className='max-w-[13.75rem]' />
        <Image src={logo5} alt='Company logo' className='max-w-[13.75rem]' />
      </div>
    </Section>
  );
};
export default BrandsBar;
