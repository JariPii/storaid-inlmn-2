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
  { icon: FaFacebookF, href: '/', ariaLabelName: 'Facebook' },
  { icon: FaInstagram, href: '/', ariaLabelName: 'Instagram' },
  { icon: FaXTwitter, href: '/', ariaLabelName: 'X former Twitter' },
  { icon: FaYoutube, href: '/', ariaLabelName: 'YouTube' },
];
