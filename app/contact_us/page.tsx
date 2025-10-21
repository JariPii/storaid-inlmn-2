import Button from '@/components/buttons/Button';
import Section from '@/components/utils/Section';
import moversImg from '../../public/images/layoutImages/centre-for-ageing-better-ZlOlRnWk8zU-unsplash.jpg';
import Image from 'next/image';
import Form from '@/components/form/Form';
import InputField from '@/components/form/InputField';
import TextAreaInput from '@/components/form/TextAreaInput';
import { sendContactInformation } from '@/utils/actions';
import FAQSection from '@/components/faq/FAQSection';
import SubHeroContactUs from '@/components/hero/SubHeroContactUs';
import HeroContact from '@/components/hero/HeroContact';
import ContactInformationForm from '@/components/form/ContactInformationForm';

const ContactUsPage = () => {
  return (
    <div className='flex flex-col'>
      <Section>
        <HeroContact />
      </Section>
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
          <ContactInformationForm />
        </div>
      </Section>
      <SubHeroContactUs />
      <FAQSection />
    </div>
  );
};
export default ContactUsPage;
