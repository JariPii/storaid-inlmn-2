import Link from 'next/link';
import logo from '../../public/images/Logo_opt.webp';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href='/' className='fles items-center justify-center'>
      <Image src={logo} alt='Company logo' />
    </Link>
  );
};
export default Logo;
