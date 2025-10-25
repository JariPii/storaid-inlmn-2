import Hero from '@/components/hero/Hero';
import { heroContent } from '@/components/hero/heroContent';

const page = () => {
  return (
    <div className='flex flex-col gap-5'>
      <Hero {...heroContent.home} />
      <Hero {...heroContent.about} />
      <Hero {...heroContent.contact} />
      <Hero {...heroContent.services} />
      <Hero {...heroContent.booking} />
    </div>
  );
};
export default page;
