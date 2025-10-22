import Section from '../utils/Section';
import moversImg from '../../public/images/layoutImages/alberto-rodriguez--aCrA9FmT8Y-unsplash.jpg';
import Image from 'next/image';
import { padlock, moneybag, broom, clock } from '@/public/images/icons/icons';

const WhyChooseUs = () => {
  return (
    <div>
      <Section variant='brands' className='flex flex-col gap-4 py-20'>
        <div>
          <h3 className='text-2xl text-(--clr-accent) font-bold'>
            Why Choose Us
          </h3>
        </div>
        {/* <div className='flex justify-between gap-24'> */}
        <div className='grid grid-cols-2 gap-1'>
          <div className='w-full'>
            <h4 className='text-[3.25rem] font-bold tracking-tighter leading-[52px]'>
              Choose Us for Exceptional Storage Solutions
            </h4>
          </div>
          <div className='flex items-center h-auto'>
            {/* <p className='w-[95ch] leading-6'> */}
            <p className='leading-6 text-(--clr-secondary)'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              molestie nisl sed dui lacinia gravida. Nulla quis nulla leo.
              Mauris ac blandit nisi non sodales augue. Phasellus eget elit
              gravida
            </p>
          </div>
        </div>
        <div className='grid grid-cols-[1fr_1fr] gap-10'>
          <div className='flex flex-col gap-6 p-4'>
            <div className='flex gap-4'>
              <div
                className='bg-(--clr-secondary) flex items-center
              justify-center rounded-full max-w-[5.125rem] max-h-[5.125rem] '
              >
                <Image src={padlock} alt='padlock' />
              </div>
              <div className='max-w-[55ch] grid gap-4'>
                <h5 className='text-2xl font-semibold'>Security and Safety</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>
            <div className='flex gap-4'>
              <div
                className='bg-(--clr-secondary) flex items-center
              justify-center rounded-full max-w-[5.125rem] max-h-[5.125rem] '
              >
                <Image src={moneybag} alt='padlock' />
              </div>
              <div className='max-w-[55ch] grid gap-4'>
                <h5 className='text-2xl font-semibold'>
                  Flexible and Affordable
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>
            <div className='flex gap-4'>
              <div
                className='bg-(--clr-secondary) flex items-center
              justify-center rounded-full max-w-[5.125rem] max-h-[5.125rem] '
              >
                <Image src={broom} alt='padlock' />
              </div>
              <div className='max-w-[55ch] grid gap-4'>
                <h5 className='text-2xl font-semibold'>
                  Clean and Well-Maintained Facilities
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>
            <div className='flex gap-4'>
              <div
                className='bg-(--clr-secondary) flex items-center
              justify-center rounded-full max-w-[5.125rem] max-h-[5.125rem] '
              >
                <Image src={clock} alt='padlock' />
              </div>
              <div className='max-w-[55ch] grid gap-4'>
                <h5 className='text-2xl font-semibold'>
                  24/7 and Convenient Access
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>
          </div>
          <Image
            src={moversImg}
            alt='Warehouse shelves'
            className='image-frame object-cover h-full w-full'
          />
        </div>
      </Section>
    </div>
  );
};
export default WhyChooseUs;
