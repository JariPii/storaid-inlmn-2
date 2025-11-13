import AboutSection from '@/components/about/AboutSectio';
import BrandsBar from '@/components/brands/BrandsBar';
import BlogCardSkeleton from '@/components/global/BlogCardSkeleton';
import Hero from '@/components/hero/Hero';
import { heroContent } from '@/components/hero/heroContent';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';
import WhyChooseUs from '@/components/why_choose_us/WhyChooseUs';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import { TestimonailsError } from '../errorExports';

const AboutPage = () => {
  return (
    <div>
      <Hero {...heroContent.about} />
      <AboutSection />
      <BrandsBar />
      <ErrorBoundary errorComponent={TestimonailsError}>
        <TestimonialsSection />
      </ErrorBoundary>
      <WhyChooseUs />
    </div>
  );
};
export default AboutPage;
