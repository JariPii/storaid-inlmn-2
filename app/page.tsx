import AboutSection from '@/components/about/AboutSectio';
import BrandsBar from '@/components/brands/BrandsBar';
import HeroHome from '@/components/hero/HeroHome';
import Section from '@/components/utils/Section';

const HomePage = () => {
  return (
    <div>
      <Section>
        <HeroHome />
      </Section>

      <AboutSection />
      <BrandsBar />
    </div>
  );
};
export default HomePage;
