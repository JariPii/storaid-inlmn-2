import Button from '@/components/buttons/Button';
import FAQSection from '@/components/faq/FAQSection';
import Form from '@/components/form/Form';
import InputField from '@/components/form/InputField';
import TextAreaInput from '@/components/form/TextAreaInput';
import HeroBooking from '@/components/hero/HeroBooking';
import SubHeroContactUs from '@/components/hero/SubHeroContactUs';
import SubscribeSection from '@/components/subscribe/SubscribeSection';
import SuggestionSection from '@/components/suggestion/SuggestionSection';
import Section from '@/components/utils/Section';
import WhyChooseUs from '@/components/why_choose_us/WhyChooseUs';
import { subscribeEmil } from '@/utils/actions';
import moversImg from '../../public/images/layoutImages/centre-for-ageing-better-ZlOlRnWk8zU-unsplash.jpg';
import Image from 'next/image';
import BookingForm from '@/components/form/BookingForm';
import { BookingProvider } from '@/hooks/BookingContext';

const BookingsPage = () => {
  return (
    <div>
      <Section>
        <HeroBooking />
      </Section>
      <div className='flex flex-col'>
        <Section
          variant='light'
          className='grid grid-cols-2 h-auto gap-4 py-20'
        >
          <div className='flex flex-col gap-3'>
            <h3 className='text-2xl text-(--clr-accent) font-bold'>
              Booking Unit
            </h3>
            <h4 className='text-[3.25rem] font-bold tracking-tighter leading-[52px]'>
              Book Your Storage Unit Now & Simplify Your Life!
            </h4>
            <div>
              <Image
                src={moversImg}
                alt='Warehouse shelves'
                className='image-frame object-cover h-full w-full'
              />
            </div>
          </div>

          <div className='h-full flex flex-col gap-5'>
            <p className='leading-6 text-(--clr-secondary)'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              molestie nisl sed dui lacinia gravida. Nulla quis nulla leo.
              Mauris ac blandit nisi non sodales augue. Phasellus eget elit
              gravida.
            </p>
            <div className='grid bg-(--clr-color-3) p-5 rounded-[10px]'>
              <BookingForm />
            </div>
          </div>
        </Section>
      </div>
      <WhyChooseUs />
      <SuggestionSection />
      <FAQSection />
    </div>
  );
};
export default BookingsPage;
