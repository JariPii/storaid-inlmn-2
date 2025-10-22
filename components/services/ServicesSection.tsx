import Image from 'next/image';
import Section from '../utils/Section';
import Tile from '../utils/Tiles';
import serviceImage from '../../public/images/layoutImages/chuttersnap-BNBA1h-NgdY-unsplash.jpg';

const ServicesSection = () => {
  return (
    <div>
      <Section variant='light' className='flex flex-col gap-4 py-8'>
        <div>
          <h3 className='text-2xl text-(--clr-accent) font-bold'>
            Our Services
          </h3>
        </div>
        <div className='flex justify-between gap-24'>
          <div>
            <h4 className='text-[3.25rem] font-bold tracking-tighter max-w-[20ch] leading-[52px]'>
              Specialized Storage for Every Special Item
            </h4>
          </div>
          <div className='max-w-[90ch] flex items-center h-auto'>
            {/* <p className='w-[95ch] leading-6'> */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              molestie nisl sed dui lacinia gravida. Nulla quis nulla leo.
              Mauris ac blandit nisi non sodales augue. Phasellus eget elit
              gravida
            </p>
          </div>
        </div>
        <div className='grid grid-cols-[29.5%_1fr_29.5%] gap-8 grid-rows-[21rem]'>
          <div className='flex flex-col gap-4'>
            <Tile
              title='Diverse Unit Sizes'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
              className=''
            />
            <Tile
              title='Moving Assistance'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
              className=''
            />
          </div>
          {/* <div className='h-full w-full'> */}
          <Image
            src={serviceImage}
            alt='Warehouse shelves'
            className='image-frame object-cover h-full w-full'
          />
          {/* </div> */}
          <div className='flex flex-col gap-4'>
            <Tile
              title='Vehicle Storage'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
              className=''
            />
            <Tile
              title='Top-Notch Security'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
              className=''
            />
          </div>
        </div>
      </Section>
    </div>
  );
};
export default ServicesSection;
