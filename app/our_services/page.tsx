import HeroServices from '@/components/hero/HeroServices';
import ServicesSection from '@/components/services/ServicesSection';
import SuggestionSection from '@/components/suggestion/SuggestionSection';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';
import Section from '@/components/utils/Section';

const OurServicesPage = () => {
  return (
    <div>
      <Section>
        <HeroServices />
      </Section>
      <ServicesSection />
      <TestimonialsSection />
      {/* TODO: FAQ */}
      <SuggestionSection />
    </div>
  );
};
export default OurServicesPage;
