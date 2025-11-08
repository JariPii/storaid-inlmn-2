'use client';
import { sendBookingInformation } from '@/utils/actions';
import Form from './Form';
import InputField from './InputField';
import TextAreaInput from './TextAreaInput';
import { Button } from '../buttons/Buttons';
import { useBooking } from '@/hooks/BookingContext';
import { pricingPlans } from '@/utils/unitPricing';
import Dropdown from './Dropdown';
import { toast } from 'sonner';

const BookingForm = () => {
  const { selectedUnit, setSelectedUnit } = useBooking();
  const options = pricingPlans.map((unit) => ({
    value: unit.title,
    label: unit.title,
  }));

  return (
    <>
      <Form action={sendBookingInformation} className='grid gap-6'>
        {({ isPending, state }) => {
          const chosenUnit = state?.inputs?.selectedUnit || selectedUnit || '';

          return (
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
              <Dropdown
                key={chosenUnit}
                label='Choose a unit'
                id='selectedUnit'
                name='selectedUnit'
                optionTitle='Choose unit'
                options={options}
                defaultValue={chosenUnit}
                onChange={setSelectedUnit}
                error={state?.errors?.selectedUnit?.[0]}
                required
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
              <div className='flex justify-end p-1.5'>
                <Button type='submit' disabled={isPending}>
                  Submit
                </Button>
              </div>
            </>
          );
        }}
      </Form>
    </>
  );
};
export default BookingForm;
