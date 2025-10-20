import { subscribeEmil } from '@/utils/actions';
import Button from '../buttons/Button';
import Form from '../form/Form';
import InputField from '../form/InputField';
import Section from '../utils/Section';
import SubscribeForm from '../form/SubscribeForm';

// TODO: Send email action

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
        {/* <Form action={subscribeEmil}>
          <InputField
            labelVisibility='hidden'
            type='email'
            name='subscribe'
            placeholder='Enter your email'
            className='h-12'
          />
          <Button className='h-12'>Submit</Button>
        </Form> */}
        <SubscribeForm />
      </div>
    </Section>
  );
};
export default SubscribeSection;
