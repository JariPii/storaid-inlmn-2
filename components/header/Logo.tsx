import Link from 'next/link';
import logo from '../../public/images/Logo.png';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href='/404' className='fles items-center justify-center'>
      <Image src={logo} alt='Company logo' />
    </Link>
  );
};
export default Logo;
