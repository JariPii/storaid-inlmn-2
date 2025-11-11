'use client';
import { subscribeEmail } from '@/utils/actions';
import Form from './Form';
import InputField from './InputField';
import { Button } from '../buttons/Buttons';
import { subscribeSchema } from '@/utils/formSchemas';

const SubscribeForm = () => {
  return (
    <div className='w-full'>
      <Form action={subscribeEmail} schema={subscribeSchema}>
        {({ isPending, state, handleFieldChange }) => {
          return (
            <div className='w-full'>
              <div className='flex w-full gap-3'>
                <InputField
                  labelVisibility='hidden'
                  type='email'
                  name='email'
                  placeholder='Enter your email'
                  defaultValue={state?.inputs?.email}
                  error={state?.errors?.email?.[0]}
                  onChange={(e) => {
                    handleFieldChange('email', e.target.value);
                  }}
                />

                <Button
                  type='submit'
                  disabled={isPending}
                  className='max-h-full'
                >
                  Submit
                </Button>
              </div>
            </div>
          );
        }}
      </Form>
    </div>
  );
};
export default SubscribeForm;
