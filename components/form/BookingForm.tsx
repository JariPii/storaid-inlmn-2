import { sendBookingInformation } from '@/utils/actions';
import Form from './Form';
import InputField from './InputField';
import TextAreaInput from './TextAreaInput';
import Button from '../buttons/Button';

const BookingForm = () => {
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
            // defaultValue='Adam'
            label='Email'
            placeholder='Email'
            required
          />
        </div>
        <InputField
          name='selectedUnit'
          type='text'
          // defaultValue='Question'
          label='Choose Unit'
          placeholder='Choose Unit'
          required
        />
        <TextAreaInput
          labelText='Storage purpose'
          name='purpose'
          rows={6}
          placeHolder='Describe your storage purpose so that we can match your request'
        />
        <Button>Submit</Button>
      </Form>
    </>
  );
};
export default BookingForm;
