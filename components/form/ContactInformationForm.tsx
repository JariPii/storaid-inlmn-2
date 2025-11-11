'use client';

import { Button } from '../buttons/Buttons';
import Form from './Form';
import InputField from './InputField';
import TextAreaInput from './TextAreaInput';
import { sendContactInformation } from '@/utils/actions';
import { useName } from '@/hooks/BookingContext';
import { useState } from 'react';
import { contactInfoSchema } from '@/utils/formSchemas';

const ContactInformationForm = () => {
  const { setSenderName } = useName();
  const [isEmpty, setIsEmpty] = useState('');

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenderName(e.target.value);
  };

  return (
    <>
      <Form
        action={sendContactInformation}
        schema={contactInfoSchema}
        className='grid gap-6'
      >
        {({ isPending, state, handleFieldChange }) => {
          return (
            <>
              <InputField
                name='name'
                type='text'
                label='Your name'
                placeholder='Your name'
                error={state?.errors?.name?.[0]}
                defaultValue={state?.inputs?.name}
                onChange={(e) => {
                  setSenderName(e.target.value);
                  handleFieldChange('name', e.target.value);
                }}
              />
              <div className='flex gap-3 w-full'>
                <InputField
                  name='email'
                  type='email'
                  label='Email'
                  placeholder='Email'
                  error={state?.errors?.email?.[0]}
                  defaultValue={state?.inputs?.email}
                  onChange={(e) => {
                    handleFieldChange('email', e.target.value);
                  }}
                />

                <InputField
                  name='phoneNumber'
                  type='text'
                  label='Telephone'
                  placeholder='Telephone'
                  error={state?.errors?.phoneNumber?.[0]}
                  defaultValue={state?.inputs?.phoneNumber}
                />
              </div>
              <InputField
                name='subject'
                type='text'
                label='Subject'
                placeholder='Subject'
                error={state?.errors?.subject?.[0]}
                defaultValue={state?.inputs?.subject}
                onChange={(e) => {
                  handleFieldChange('subject', e.target.value);
                }}
              />
              <TextAreaInput
                labelText='Comments / Questions'
                name='comment'
                rows={6}
                placeHolder='Comments'
                error={state?.errors?.comment?.[0]}
                defaultValue={state?.inputs?.comment}
                onChange={(e) => {
                  handleFieldChange('comment', e.target.value);
                }}
              />
              <div className='flex p-1.5 justify-end'>
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
