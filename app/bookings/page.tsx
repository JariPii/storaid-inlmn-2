import FAQSection from '@/components/faq/FAQSection';
import SuggestionSection from '@/components/hero/subhero/SuggestionSection';
import WhyChooseUs from '@/components/why_choose_us/WhyChooseUs';
import Hero from '@/components/hero/Hero';
import { heroContent } from '@/components/hero/heroContent';
import BookingSection from '@/components/bookings/BookingSection';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import { FAQError } from '../errorExports';
import Section from '@/components/global/Section';

const BookingsPage = () => {
  return (
    <div>
      <Hero {...heroContent.booking} />
      <BookingSection />
      <Section variant='brands' className='flex flex-col gap-4 py-20'>
        <WhyChooseUs />
      </Section>
      <SuggestionSection />
      <ErrorBoundary errorComponent={FAQError}>
        <FAQSection />
      </ErrorBoundary>
    </div>
  );
};
export default BookingsPage;
