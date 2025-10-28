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
        <div className='flex gap-3 w-full'>
          <InputField
            name='name'
            type='text'
            // defaultValue='Adam@adam.com'
            label='Name'
            placeholder='Name'
            required
          />

          <InputField
            name='email'
            type='email'
            // defaultValue='Adam@adam.com'
            label='Email'
            placeholder='Email'
            required
          />
        </div>
        <InputField
          name='selectedUnit'
          type='text'
          defaultValue={selectedUnit}
          // value={selectedUnit}
          label='Choose Unit'
          placeholder='Choose Unit'
          required
        />
        <div className='flex flex-col gap-2 '>
          <label htmlFor='choose-unit'>Choose Unit</label>
          <select
            name='selectedUnit'
            id='choose-unit'
            defaultValue={selectedUnit}
            // className=' selectBor '
          >
            <option value=''>Choose Unit</option>
            <option value='Small Unit'>Small</option>
            <option value='Medium Unit'>Medium</option>
            <option value='Large Unit'>Large</option>
            <option value='Executive Unit'>Executive</option>
          </select>
        </div>
        <TextAreaInput
          labelText='Storage purpose'
          name='purpose'
          rows={6}
          placeHolder='Describe your storage purpose so that we can match your request'
        />
        <Button type='submit'>Submit</Button>
      </Form>
    </>
  );
};
export default BookingForm;
