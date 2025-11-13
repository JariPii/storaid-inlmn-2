import FAQSection from '@/components/faq/FAQSection';
import SuggestionSection from '@/components/suggestion/SuggestionSection';
import WhyChooseUs from '@/components/why_choose_us/WhyChooseUs';
import Hero from '@/components/hero/Hero';
import { heroContent } from '@/components/hero/heroContent';
import BookingSection from '@/components/bookings/BookingSection';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import { FAQError } from '../errorExports';

const BookingsPage = () => {
  return (
    <div>
      <Hero {...heroContent.booking} />
      <BookingSection />
      <WhyChooseUs />
      <SuggestionSection />
      <ErrorBoundary errorComponent={FAQError}>
        <FAQSection />
      </ErrorBoundary>
    </div>
  );
};
export default BookingsPage;
