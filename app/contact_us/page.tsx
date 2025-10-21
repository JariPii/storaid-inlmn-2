import Button from '@/components/buttons/Button';
import Section from '@/components/utils/Section';
import moversImg from '../../public/images/layoutImages/centre-for-ageing-better-ZlOlRnWk8zU-unsplash.jpg';
import Image from 'next/image';
import Form from '@/components/form/Form';
import InputField from '@/components/form/InputField';
import TextAreaInput from '@/components/form/TextAreaInput';
import { subscribeEmil } from '@/utils/actions';

const ContactUsPage = () => {
  return (
    <div>
      <Section variant='light' className='grid grid-cols-2 h-auto gap-4 py-20'>
        <div className='flex flex-col gap-3'>
          <h3 className='text-2xl text-(--clr-accent) font-bold'>
            Get in Touch
          </h3>
          <h4 className='text-[3.25rem] font-bold tracking-tighter leading-[52px]'>
            Get Personalized Assistance – Contact Us
          </h4>
          <p className='leading-6 text-(--clr-secondary)'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
          </p>
          <div>
            <Image
              src={moversImg}
              alt='Warehouse shelves'
              className='image-frame object-cover h-full w-full'
            />
          </div>
        </div>
        <div className='grid bg-(--clr-color-3) p-5 rounded-[10px]'>
          <Form action={subscribeEmil} className='grid gap-2'>
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
                // defaultValue='Adam'
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
              rows={5}
              placeHolder='Comments'
            />
            <Button>Submit</Button>
          </Form>
        </div>
      </Section>
    </div>
  );
};
export default ContactUsPage;
