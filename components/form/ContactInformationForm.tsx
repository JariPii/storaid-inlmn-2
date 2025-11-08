'use client';

import { Button } from '../buttons/Buttons';
import Form from './Form';
import InputField from './InputField';
import TextAreaInput from './TextAreaInput';
import { sendContactInformation } from '@/utils/actions';

const ContactInformationForm = () => {
  return (
    <>
      <Form action={sendContactInformation} className='grid gap-6'>
        {({ isPending, state }) => {
          console.log('errors:', state?.errors);
          console.log('inputs:', state?.inputs);

          return (
            <>
              <InputField
                name='name'
                type='text'
                label='Your name'
                placeholder='Your name'
                error={state?.errors?.name?.[0]}
                defaultValue={state?.inputs?.name}
                required
              />
              <div className='flex gap-3 w-full'>
                <InputField
                  name='email'
                  type='email'
                  label='Email'
                  placeholder='Email'
                  error={state?.errors?.email?.[0]}
                  defaultValue={state?.inputs?.email}
                  required
                />

                <InputField
                  name='phone'
                  type='number'
                  label='Telephone'
                  placeholder='Telephone'
                />
              </div>
              <InputField
                name='subject'
                type='text'
                label='Subject'
                placeholder='Subject'
                error={state?.errors?.subject?.[0]}
                defaultValue={state?.inputs?.subject}
                required
              />
              <TextAreaInput
                labelText='Comments / Questions'
                name='comment'
                rows={6}
                placeHolder='Comments'
                error={state?.errors?.comment?.[0]}
                defaultValue={state?.inputs?.comment}
                required
              />
              <div className='flex p-1.5 justify-between'>
                <Button type='reset' buttonTypes='reset' className=''>
                  Reset
                </Button>
                <Button type='submit'>Submit</Button>
              </div>
            </>
          );
        }}
      </Form>
    </>
  );
};
export default ContactInformationForm;
