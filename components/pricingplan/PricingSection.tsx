import { pricingPlans } from '@/mockData';
import Section from '../utils/Section';
import PricingplanCard from './PricingplanCard';

const PricingSection = () => {
  return (
    <div>
      <Section variant='light' className='flex flex-col gap-4 py-20'>
        <div className='bg-(--clr-secondary) p-2'>
          <h3 className='text-2xl text-(--clr-accent) font-bold'>
            Pricing Plan
          </h3>
        </div>
        <div className='grid grid-cols-2 gap-1'>
          <div className='w-full'>
            <h4 className='text-[3.25rem] font-bold tracking-tight leading-[52px]'>
              Find the Perfect Plan for Your Storage Needs
            </h4>
          </div>
          <div className='flex items-center h-auto'></div>
        </div>
        <div className='flex flex-wrap gap-6'>
          {pricingPlans.map((plan) => (
            <PricingplanCard
              buttonLabel={'Rent now'}
              key={plan.title}
              {...plan}
            />
          ))}
        </div>
      </Section>
    </div>
  );
};
export default PricingSection;
