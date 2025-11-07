import Image, { StaticImageData } from 'next/image';
import Section from '../utils/Section';
import Link from 'next/link';
import { NavButton } from '../buttons/Buttons';

export type HeroProps = {
  invitation?: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  imgSrc?: string | StaticImageData;
  alt?: string;
};

const Hero = ({
  invitation,
  title,
  description,
  imgSrc,
  alt,
  buttonText,
  buttonLink,
}: HeroProps) => {
  return (
    <Section>
      <div className='grid grid-cols-[60%_1fr] py-[10rem] grid-rows-[1fr] relative'>
        <div className='flex items-start justify-center flex-col gap-4'>
          {invitation && (
            <h1 className='text-(--clr-accent) font-bold leading-6 text-2xl'>
              {invitation}
            </h1>
          )}
          <h2 className='text-[5rem] text-(--background) font-bold leading-20'>
            {title}
          </h2>
          <p className='text-(--background) w-[70ch] leading-6'>
            {description}
          </p>
          {buttonText && buttonLink && (
            <NavButton href={'/bookings'} colorVariant='darkBg' />
          )}
        </div>
        {imgSrc && (
          <Image
            src={imgSrc}
            alt={alt || 'hero image'}
            className='h-[32rem] absolute bottom-0 right-0'
            width={500}
            height={500}
          />
        )}
      </div>
    </Section>
  );
};
export default Hero;
