import AboutSection from '@/components/about/AboutSectio';
import BrandsBar from '@/components/brands/BrandsBar';
import HeroHome from '@/components/hero/HeroHome';
import ServicesSection from '@/components/services/ServicesSection';
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
      <TestimonialsSection />
      <WhyChooseUs />
    </main>
  );
};
export default HomePage;
