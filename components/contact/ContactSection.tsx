import Image from 'next/image';
import ContactInformationForm from '../form/ContactInformationForm';
import Section from '../global/Section';
import moversImg from '../../public/images/layoutImages/lo-img4.webp';

const ContactSection = () => {
  return (
    <>
      <Section variant='light' className='grid grid-cols-2 h-auto gap-4 py-20'>
        <div className='flex flex-col gap-3'>
          <div className='bg-(--clr-secondary) p-2'>
            <h3 className='text-2xl text-(--clr-accent) font-bold'>
              Get in Touch
            </h3>
          </div>
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
    </>
  );
};
export default ContactSection;
