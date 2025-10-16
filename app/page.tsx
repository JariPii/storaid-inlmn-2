import AboutSection from '@/components/about/AboutSectio';
import HeroHome from '@/components/hero/HeroHome';
import Section from '@/components/utils/Section';

const HomePage = () => {
  return (
    <div>
      <Section>
        <HeroHome />
      </Section>

      <AboutSection />
    </div>
  );
};
export default HomePage;
