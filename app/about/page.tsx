import AboutSection from '@/components/about/AboutSectio';
import BrandsBar from '@/components/brands/BrandsBar';
import BlogCardSkeleton from '@/components/blog/BlogCardSkeleton';
import Hero from '@/components/hero/Hero';
import { heroContent } from '@/components/hero/heroContent';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';
import WhyChooseUs from '@/components/why_choose_us/WhyChooseUs';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import { TestimonailsError } from '../errorExports';
import Section from '@/components/global/Section';

const AboutPage = () => {
  return (
    <div>
      <Hero {...heroContent.about} />

      <AboutSection />
      <BrandsBar />
      <ErrorBoundary errorComponent={TestimonailsError}>
        <TestimonialsSection />
      </ErrorBoundary>
      <Section variant='light' className='flex flex-col gap-4 py-20'>
        <WhyChooseUs />
      </Section>
    </div>
  );
};
export default AboutPage;
