'use client';
import { subscribeEmil } from '@/utils/actions';
import Form from './Form';
import InputField from './InputField';
import Button from '../buttons/Button';

const SubscribeForm = () => {
  return (
    <div className='w-full'>
      <Form action={subscribeEmil}>
        <InputField
          labelVisibility='hidden'
          type='email'
          name='subscribe'
          placeholder='Enter you email'
          className='h-12'
          defaultValue='w@r.com'
        />
        <Button className='h-12'>Submit</Button>
      </Form>
    </div>
  );
};
export default SubscribeForm;
