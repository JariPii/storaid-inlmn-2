import Section from '../utils/Section';
import SubscribeForm from '../form/SubscribeForm';

const SubscribeSection = () => {
  return (
    <Section variant='brands' className='grid grid-cols-[55%_1fr]'>
      <div className='flex flex-col py-7'>
        <h2 className='text-[3.25rem] font-bold tracking-tight'>
          Subscribe To Our Newsletter
        </h2>
        <p>
          Subscribe to our newsletter to receive early discount offers, updates
          and info
        </p>
      </div>
      <div className='flex items-center justify-center gap-4'>
        <SubscribeForm />
      </div>
    </Section>
  );
};
export default SubscribeSection;
