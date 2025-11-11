'use client';
import { sendBookingInformation } from '@/utils/actions';
import Form from './Form';
import InputField from './InputField';
import TextAreaInput from './TextAreaInput';
import { Button } from '../buttons/Buttons';
import { useBooking, useName } from '@/hooks/BookingContext';
import { pricingPlans } from '@/utils/unitPricing';
import Dropdown from './Dropdown';

const BookingForm = () => {
  const { selectedUnit, setSelectedUnit } = useBooking();
  const { setSenderName } = useName();

  const options = pricingPlans.map((unit) => ({
    value: unit.title,
    label: unit.title,
  }));

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenderName(e.target.value);
  };

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
                  error={state?.errors?.name?.[0]}
                  defaultValue={state?.inputs?.name}
                  onChange={handleName}
                />

                <InputField
                  name='email'
                  type='email'
                  label='Email'
                  placeholder='Email'
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
              />
              <TextAreaInput
                labelText='Storage purpose'
                name='purpose'
                rows={6}
                placeHolder='Describe your storage purpose so that we can match your request'
                error={state?.errors?.purpose?.[0]}
                defaultValue={state?.inputs?.purpose}
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
