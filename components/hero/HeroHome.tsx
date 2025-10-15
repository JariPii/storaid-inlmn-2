import Image from 'next/image';
import image from '../../public/images/Rectangle2.svg';
import Buttons from '../buttons/Buttons';
import Button from '../buttons/Button';
import Link from 'next/link';

const HeroHome = () => {
  return (
    <div className='grid grid-cols-[60%_1fr] py-[10rem] grid-rows-[1fr] relative'>
      <div className='flex items-start justify-center flex-col gap-4'>
        <h1 className='text-(--clr-accent) font-bold leading-6 text-2xl'>
          Welcome to StorAid
        </h1>
        <h2 className='text-[5rem] text-(--background) font-bold leading-20'>
          Space Simplified, Storage Perfected
        </h2>
        <p className='text-(--background) w-[80ch] leading-6'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem
          magna. Etiam ac odio sit amet lorem fringilla sodales. Cras lobortis,
          libero at iaculis luctus, nisi ex pellentesque nisi, at euismod sem
          ipsum ac dolor.
        </p>
        <Button hover='dark' className=''>
          <Link href='/about'>Discover More</Link>
        </Button>
      </div>
      {/* <div className='flex items-end justify-center border-2'> */}
      <Image
        src={image}
        alt='Profile carrying a box'
        className='h-[32rem] absolute bottom-0 right-0'
      />
      {/* </div> */}
    </div>
  );
};
export default HeroHome;
