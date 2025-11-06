import Image from 'next/image';
import Section from '../utils/Section';
import moversImg from '../../public/images/layoutImages/centre-for-ageing-better-ZlOlRnWk8zU-unsplash.jpg';
import Tile from '../utils/Tiles';
import Button from '../buttons/Button';
import { MdPhone } from 'react-icons/md';
import StatsCard from '../utils/StatsCard';

const AboutSection = () => {
  return (
    <Section
      variant='light'
      className='grid grid-cols-[1fr_1fr] py-[6rem] gap-4'
    >
      <div className='relative'>
        <Image
          src={moversImg}
          alt='Moving truck and movers trying to lift a big window.'
          className='image-frame'
          fetchPriority='high'
          priority
        />
        <StatsCard className='absolute -bottom-4 left-6' />
      </div>
      <div className='flex flex-col gap-2'>
        <div className='bg-(--clr-secondary) p-2'>
          <h3 className='text-2xl text-(--clr-accent) font-bold leading-6 font-urbanist'>
            About Us
          </h3>
        </div>
        <h4 className='text-[3.25rem] leading-[52px] tracking-tight font-bold font-urbanist'>
          Providing a Safe Space for Your Treasured Items
        </h4>
        <p className='leading-6 font-norma font-inter'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac
          blandit nisi, non sodales augue. Phasellus eget elit gravida.
        </p>
        <div className='grid grid-cols-[1fr_1fr] gap-5 mb-10'>
          <Tile
            title='Vision'
            description='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.'
          />
          <Tile
            title='Mission'
            description='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.'
          />
        </div>
        <div className='flex justify-between items-center w-[90%]'>
          <Button>Discover More</Button>
          <div className='flex gap-3 p-2'>
            <div className='bg-(--clr-secondary) flex items-center justify-center rounded-full p-4'>
              <MdPhone className='text-(--clr-accent) w-[1.875rem] h-[1.875rem]' />
            </div>
            <div>
              <p className='text-2xl font-semibold'>More Information</p>
              <p className='text-xl font-bold'>+46 8 123 122 44</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default AboutSection;
