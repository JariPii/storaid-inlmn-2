'use client';
import { subscribeEmail, subscribeEmil } from '@/utils/actions';
import Form from './Form';
import InputField from './InputField';
import Button from '../buttons/Button';

const SubscribeForm = () => {
  return (
    <div className='w-full'>
      <Form action={subscribeEmail}>
        <InputField
          labelVisibility='hidden'
          type='email'
          name='email'
          placeholder='Enter you email'
          className='h-12'
        />
        <Button className='h-12'>Submit</Button>
      </Form>
    </div>
  );
};
export default SubscribeForm;
