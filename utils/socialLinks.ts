import { IconType } from 'react-icons';
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';

type SocialLink = {
  icon: IconType;
  href: string;
  ariaLabelName: string;
};

export const socialLinks: SocialLink[] = [
  {
    icon: FaFacebookF,
    href: 'http://www.facebook.com',
    ariaLabelName: 'Facebook',
  },
  {
    icon: FaInstagram,
    href: 'https://www.instagram.com',
    ariaLabelName: 'Instagram',
  },
  {
    icon: FaXTwitter,
    href: 'https://x.com',
    ariaLabelName: 'X former Twitter',
  },
  {
    icon: FaYoutube,
    href: 'https://www.youtube.com',
    ariaLabelName: 'YouTube',
  },
];
