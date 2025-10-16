import AboutSection from '@/components/about/AboutSectio';
import BrandsBar from '@/components/brands/BrandsBar';
import HeroHome from '@/components/hero/HeroHome';
import ServicesSection from '@/components/services/ServicesSection';
import Section from '@/components/utils/Section';

const HomePage = () => {
  return (
    <div>
      <Section>
        <HeroHome />
      </Section>
      <AboutSection />
      <BrandsBar />
      <ServicesSection />
    </div>
  );
};
export default HomePage;
