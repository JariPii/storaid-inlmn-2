'use client';
import { subscribeEmail } from '@/utils/actions';
import Form from './Form';
import InputField from './InputField';
import Button from '../buttons/Button';
// import Form from 'next/form';

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
          defaultValue={''}
        />
        <Button className='h-12' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default SubscribeForm;
