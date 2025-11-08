import AboutSection from '@/components/about/AboutSectio';
import BlogSection from '@/components/blog/BlogSection';
import BrandsBar from '@/components/brands/BrandsBar';
import Hero from '@/components/hero/Hero';
import { heroContent } from '@/components/hero/heroContent';
import PricingSection from '@/components/pricingplan/PricingSection';
import ServicesSection from '@/components/services/ServicesSection';
import SuggestionSection from '@/components/suggestion/SuggestionSection';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';
import WhyChooseUs from '@/components/why_choose_us/WhyChooseUs';

const HomePage = () => {
  return (
    <main>
      <Hero {...heroContent.home} />
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
