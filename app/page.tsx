import AboutSection from '@/components/about/AboutSectio';
import BlogSection from '@/components/blog/BlogSection';
import BrandsBar from '@/components/brands/BrandsBar';
import Hero from '@/components/hero/Hero';
import { heroContent } from '@/components/hero/heroContent';
import PricingSection from '@/components/pricingplan/PricingSection';
import ServicesSection from '@/components/our_services/ServicesSection';
import SuggestionSection from '@/components/hero/subhero/SuggestionSection';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';
import WhyChooseUs from '@/components/why_choose_us/WhyChooseUs';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import { BlogsError, TestimonailsError } from './errorExports';

const HomePage = () => {
  return (
    <main>
      <Hero {...heroContent.home} />
      <AboutSection />
      <BrandsBar />
      <ServicesSection />
      <ErrorBoundary errorComponent={TestimonailsError}>
        <TestimonialsSection backgroundImage='with' />
      </ErrorBoundary>
      <WhyChooseUs />
      <PricingSection />
      <SuggestionSection />
      <ErrorBoundary errorComponent={BlogsError}>
        <BlogSection />
      </ErrorBoundary>
    </main>
  );
};
export default HomePage;
