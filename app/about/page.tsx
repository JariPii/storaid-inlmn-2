import AboutSection from '@/components/about/AboutSectio';
import BrandsBar from '@/components/brands/BrandsBar';
import HeroAbout from '@/components/hero/HeroAbout';
import SubscribeSection from '@/components/subscribe/SubscribeSection';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';
import Section from '@/components/utils/Section';
import WhyChooseUs from '@/components/why_choose_us/WhyChooseUs';

const AboutPage = () => {
  return (
    <div>
      <Section>
        <HeroAbout />
      </Section>
      <AboutSection />
      <BrandsBar />
      <TestimonialsSection />
      <WhyChooseUs />
      <SubscribeSection />
    </div>
  );
};
export default AboutPage;
