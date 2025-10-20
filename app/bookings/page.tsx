import HeroBooking from '@/components/hero/HeroBooking';
import SubscribeSection from '@/components/subscribe/SubscribeSection';
import Section from '@/components/utils/Section';

const BookingsPage = () => {
  return (
    <div>
      <Section>
        <HeroBooking />
      </Section>
      <SubscribeSection />
    </div>
  );
};
export default BookingsPage;
