import AboutSection from '@/components/about/AboutSectio';
import BlogSection from '@/components/blog/BlogSection';
import BrandsBar from '@/components/brands/BrandsBar';
import HeroHome from '@/components/hero/HeroHome';
import PricingSection from '@/components/pricingplan/PricingSection';
import ServicesSection from '@/components/services/ServicesSection';
import SuggestionSection from '@/components/suggestion/SuggestionSection';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';
import Section from '@/components/utils/Section';
import WhyChooseUs from '@/components/why_choose_us/WhyChooseUs';

const HomePage = () => {
  return (
    <main>
      <Section>
        <HeroHome />
      </Section>
      <AboutSection />
      <BrandsBar />
      <ServicesSection />
      <TestimonialsSection backgroundImage='with' />
      <WhyChooseUs />
      <PricingSection />
      <SuggestionSection />
      <BlogSection />
    </main>
  );
};
export default HomePage;
