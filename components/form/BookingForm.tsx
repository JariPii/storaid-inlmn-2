'use client';
import { sendBookingInformation } from '@/utils/actions';
import Form from './Form';
import InputField from './InputField';
import TextAreaInput from './TextAreaInput';
import { Button } from '../buttons/Buttons';
import { useBooking, useName } from '@/hooks/FormContext';
import { pricingPlans } from '@/utils/unitPricing';
import Dropdown from './Dropdown';
import { bookingSchema } from '@/utils/formSchemas';

const BookingForm = () => {
  const { selectedUnit, setSelectedUnit } = useBooking();
  const { setSenderName } = useName();

  const options = pricingPlans.map((unit) => ({
    value: unit.title,
    label: unit.title,
  }));

  return (
    <>
      <Form
        action={sendBookingInformation}
        schema={bookingSchema}
        className='grid gap-6'
      >
        {({ isPending, state, handleFieldChange }) => {
          const chosenUnit = state?.inputs?.selectedUnit || selectedUnit || '';

          return (
            <>
              <div className='flex gap-3 w-full'>
                <InputField
                  name='name'
                  type='text'
                  label='Name'
                  labelOptionalError={state?.errors?.name?.[0]}
                  placeholder='Name'
                  error={state?.errors?.name?.[0]}
                  defaultValue={state?.inputs?.name}
                  onChange={(e) => {
                    setSenderName(e.target.value);
                    handleFieldChange('name', e.target.value);
                  }}
                />

                <InputField
                  name='email'
                  type='email'
                  label='Email'
                  placeholder='Email'
                  labelOptionalError={state?.errors?.email?.[0]}
                  error={state?.errors?.email?.[0]}
                  defaultValue={state?.inputs?.email}
                  onChange={(e) => {
                    handleFieldChange('email', e.target.value);
                  }}
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
                onChange={(value) => {
                  setSelectedUnit(value);
                  handleFieldChange?.('selectedUnit', value);
                }}
                error={state?.errors?.selectedUnit?.[0]}
              />
              <TextAreaInput
                labelText='Storage purpose'
                name='purpose'
                rows={6}
                placeHolder='Describe your storage purpose so that we can match your request'
                error={state?.errors?.purpose?.[0]}
                defaultValue={state?.inputs?.purpose}
                onChange={(e) => {
                  handleFieldChange('purpose', e.target.value);
                }}
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
