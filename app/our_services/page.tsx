import FAQSection from '@/components/faq/FAQSection';
import Hero from '@/components/hero/Hero';
import { heroContent } from '@/components/hero/heroContent';
import ServicesSection from '@/components/our_services/ServicesSection';
import SuggestionSection from '@/components/suggestion/SuggestionSection';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';

const OurServicesPage = () => {
  return (
    <div>
      <Hero {...heroContent.services} />
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
      <SuggestionSection />
    </div>
  );
};
export default OurServicesPage;
