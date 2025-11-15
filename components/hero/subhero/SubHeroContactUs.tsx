import Image from 'next/image';
import PersonImage from '@/public/images/ContactUsPerson.png';
import phone from '@/public/images/phone.svg';
import envelope from '@/public/images/envelope.svg';
import mapPin from '@/public/images/map-pointer.svg';
import Section from '@/components/global/Section';
import HeaderSocials from '@/components/header/Socials';

const SubHeroContactUs = () => {
  return (
    <Section className=''>
      <div className='grid grid-cols-[1fr_55%] grid-rows-1 h-full relative'>
        <div className='flex h-full items-end justify-center'>
          <Image
            src={PersonImage}
            alt='Profile carrying a box'
            className='h-[32rem] absolute bottom-0'
          />
        </div>

        <div className='flex items-start justify-center flex-col bg-(--clr-color-5) h-full gap-8 p-[5rem] max-w-[80ch]'>
          <h2 className='text-[3.25rem] text-(--clr-secondary) font-bold leading-6 text-2xl'>
            Find Us On:
          </h2>

          <p className=' text-(--clr-secondary)'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className='flex gap-3'>
            <div className=' bg-(--clr-secondary) rounded-full flex items-center justify-center w-[4rem] h-[4rem]'>
              <Image src={phone} alt='Phone icon' />
            </div>
            <div>
              <h3 className='text-[1.5rem] font-semibold text-(--clr-secondary)'>
                Call Center
              </h3>
              <p className='font-semibold text-(--clr-secondary)'>
                +46 8 123 122 44
              </p>
            </div>
          </div>
          <div className='flex gap-3'>
            <div className=' bg-(--clr-secondary) rounded-full flex items-center justify-center w-[4rem] h-[4rem]'>
              <Image src={envelope} alt='Envelope icon' />
            </div>
            <div>
              <h3 className='text-[1.5rem] font-semibold text-(--clr-secondary)'>
                Email Address
              </h3>
              <p className='font-semibold text-(--clr-secondary)'>
                contact@domain.com
              </p>
            </div>
          </div>
          <div className='flex gap-3'>
            <div className=' bg-(--clr-secondary) rounded-full flex items-center justify-center w-[4rem] h-[4rem]'>
              <Image src={mapPin} alt='Map pin icon' />
            </div>
            <div>
              <h3 className='text-[1.5rem] font-semibold text-(--clr-secondary)'>
                Location
              </h3>
              <p className='font-semibold text-(--clr-secondary)'>
                Klarabergsviadukten 90, Stockholm
              </p>
            </div>
          </div>
          <div className='flex items-center justify-center gap-5'>
            <h3 className='text-[1.5rem] font-semibold text-(--clr-secondary) tracking-tight'>
              Our Social Media
            </h3>
            <div className='border-b-[1px] border-black w-[10rem]'></div>
            <HeaderSocials />
          </div>
        </div>
      </div>
    </Section>
  );
};
export default SubHeroContactUs;
