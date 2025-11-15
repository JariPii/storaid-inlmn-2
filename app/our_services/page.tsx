import FAQSection from '@/components/faq/FAQSection';
import Hero from '@/components/hero/Hero';
import { heroContent } from '@/components/hero/heroContent';
import ServicesSection from '@/components/our_services/ServicesSection';
import SuggestionSection from '@/components/hero/subhero/SuggestionSection';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import { FAQError, TestimonailsError } from '../errorExports';

const OurServicesPage = () => {
  return (
    <div>
      <Hero {...heroContent.services} />
      <ServicesSection />
      <ErrorBoundary errorComponent={TestimonailsError}>
        <TestimonialsSection />
      </ErrorBoundary>
      <ErrorBoundary errorComponent={FAQError}>
        <FAQSection />
      </ErrorBoundary>
      <SuggestionSection />
    </div>
  );
};
export default OurServicesPage;
