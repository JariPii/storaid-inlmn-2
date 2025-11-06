'use client';
import Button from '../buttons/Button';
import Form from './Form';
import InputField from './InputField';
import TextAreaInput from './TextAreaInput';
import { sendContactInformation } from '@/utils/actions';

const ContactInformationForm = () => {
  return (
    <>
      <Form action={sendContactInformation} className='grid gap-6'>
        {({ isPending, state }) => (
          <>
            <InputField
              name='name'
              type='text'
              // defaultValue='Adam'
              label='Your name'
              placeholder='Your name'
              required
              error={state?.errors?.name?.[0]}
              defaultValue={state?.inputs?.name}
            />
            <div className='flex gap-3 w-full'>
              <InputField
                name='email'
                type='email'
                // defaultValue='Adam@adam.com'
                label='Email'
                placeholder='Email'
                required
                error={state?.errors?.email?.[0]}
                defaultValue={state?.inputs?.email}
              />

              <InputField
                name='phone'
                type='text'
                // defaultValue='Adam'
                label='Telephone'
                placeholder='Telephone'
              />
            </div>
            <InputField
              name='subject'
              type='text'
              // defaultValue='Question'
              label='Subject'
              placeholder='Subject'
              required
              error={state?.errors?.subject?.[0]}
              defaultValue={state?.inputs?.subject}
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
            <Button type='submit'>Submit</Button>
            {state?.message && <p>{state.message}</p>}
          </>
        )}
      </Form>
    </>
  );
};
export default ContactInformationForm;
