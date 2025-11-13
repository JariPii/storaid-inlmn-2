import FAQSection from '@/components/faq/FAQSection';
import SubHeroContactUs from '@/components/hero/SubHeroContactUs';
import Hero from '@/components/hero/Hero';
import { heroContent } from '@/components/hero/heroContent';
import ContactSection from '@/components/contact/ContactSection';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import { FAQError } from '../errorExports';

const ContactUsPage = () => {
  return (
    <div className='flex flex-col'>
      <Hero {...heroContent.contact} />
      <ContactSection />
      <SubHeroContactUs />
      <ErrorBoundary errorComponent={FAQError}>
        <FAQSection />
      </ErrorBoundary>
    </div>
  );
};
export default ContactUsPage;
