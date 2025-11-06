'use client';
import { sendBookingInformation } from '@/utils/actions';
import Form from './Form';
import InputField from './InputField';
import TextAreaInput from './TextAreaInput';
import Button from '../buttons/Button';
import { useBooking } from '@/hooks/BookingContext';
import { useActionState, useEffect } from 'react';

const BookingForm = () => {
  const { selectedUnit } = useBooking();

  return (
    <>
      <Form action={sendBookingInformation} className='grid gap-6'>
        {({ isPending, state }) => (
          <>
            <div className='flex gap-3 w-full'>
              <InputField
                name='name'
                type='text'
                label='Name'
                placeholder='Name'
                required
                error={state?.errors?.name?.[0]}
                defaultValue={state?.inputs?.name}
              />

              <InputField
                name='email'
                type='email'
                label='Email'
                placeholder='Email'
                required
                error={state?.errors?.email?.[0]}
                defaultValue={state?.inputs?.email}
              />
            </div>
            <InputField
              name='selectedUnit'
              type='text'
              label='Choose Unit'
              placeholder='Choose Unit'
              required
              error={state?.errors?.selectedUnit?.[0]}
              defaultValue={selectedUnit || state?.inputs?.selectedUnit}
            />
            <TextAreaInput
              labelText='Storage purpose'
              name='purpose'
              rows={6}
              placeHolder='Describe your storage purpose so that we can match your request'
              error={state?.errors?.purpose?.[0]}
              defaultValue={state?.inputs?.purpose}
              required
            />
            <div className='flex justify-between p-1.5'>
              <Button type='submit' disabled={isPending}>
                Submit
              </Button>
            </div>
            {state?.message && <p>{state.message}</p>}
          </>
        )}
      </Form>
    </>
  );
};
export default BookingForm;
