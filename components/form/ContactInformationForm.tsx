import Button from '../buttons/Button';
import Form from './Form';
import InputField from './InputField';
import TextAreaInput from './TextAreaInput';
import { sendContactInformation } from '@/utils/actions';

const ContactInformationForm = () => {
  return (
    <>
      <Form action={sendContactInformation} className='grid gap-6'>
        <InputField
          name='name'
          type='text'
          defaultValue='Adam'
          label='Your name'
          placeholder='Your name'
          required
        />
        <div className='flex gap-3 w-full'>
          <InputField
            name='email'
            type='email'
            defaultValue='Adam@adam.com'
            label='Email'
            placeholder='Email'
            required
          />

          <InputField
            name='phone'
            type='text'
            defaultValue='Adam'
            label='Telephone'
            placeholder='Telephone'
          />
        </div>
        <InputField
          name='subject'
          type='text'
          defaultValue='Question'
          label='Subject'
          placeholder='Subject'
          required
        />
        <TextAreaInput
          labelText='Comments / Questions'
          name='comment'
          rows={6}
          placeHolder='Comments'
        />
        <Button type='submit'>Submit</Button>
      </Form>
    </>
  );
};
export default ContactInformationForm;
