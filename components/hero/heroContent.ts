import { StaticImageData } from 'next/image';
import image from '../../public/images/Rectangle2.svg';

type HeroContent = {
  invitation?: string;
  title: string;
  description: string;
  showImage?: string;
  buttonText?: string;
  buttonLink?: string;
  imgSrc?: string | StaticImageData;
  image?: object;
  alt?: string;
};

type HeroContentList = {
  home: HeroContent;
  about: HeroContent;
  contact: HeroContent;
  services: HeroContent;
  booking: HeroContent;
};

export const heroContent: HeroContentList = {
  home: {
    invitation: 'Welcome to StorAid',
    title: 'Space Simplified, Storage Perfected',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem fringilla soda les. Cras lobortis, libero at iaculis luctus, nisi ex pellentesque nisi, at euismod sem ipsum ac dolor.',
    buttonText: 'Discover More',
    buttonLink: 'about',
    imgSrc: image,
    alt: 'hero image',
  },
  about: {
    title: 'About Us',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
  contact: {
    title: 'Contact Us',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
  services: {
    title: 'Services',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
  booking: {
    title: 'Booking',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
};
