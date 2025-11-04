import FAQSection from '@/components/faq/FAQSection';
import SuggestionSection from '@/components/suggestion/SuggestionSection';
import Section from '@/components/utils/Section';
import WhyChooseUs from '@/components/why_choose_us/WhyChooseUs';
import moversImg from '../../public/images/layoutImages/centre-for-ageing-better-ZlOlRnWk8zU-unsplash.jpg';
import Image from 'next/image';
import BookingForm from '@/components/form/BookingForm';
import Hero from '@/components/hero/Hero';
import { heroContent } from '@/components/hero/heroContent';

const BookingsPage = () => {
  return (
    <div>
      <Hero {...heroContent.booking} />
      <div className='flex flex-col'>
        <Section
          variant='light'
          className='grid grid-cols-2 h-auto gap-4 py-20'
        >
          <div className='flex flex-col gap-3 '>
            <div className='bg-(--clr-secondary) p-1'>
              <h3 className='text-2xl text-(--clr-accent) font-bold'>
                Booking Unit
              </h3>
            </div>
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
              <fieldset>
                <BookingForm />
              </fieldset>
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
