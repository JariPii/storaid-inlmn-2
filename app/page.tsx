import AboutSection from '@/components/about/AboutSectio';
import BrandsBar from '@/components/brands/BrandsBar';
import HeroHome from '@/components/hero/HeroHome';
import PricingplanCard from '@/components/pricingplan/PricingplanCard';
import ServicesSection from '@/components/services/ServicesSection';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';
import Section from '@/components/utils/Section';
import WhyChooseUs from '@/components/why_choose_us/WhyChooseUs';
import { pricingPlans } from '@/mockData';

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
      <div className='flex gap-6'>
        {pricingPlans.map((plan) => (
          <PricingplanCard
            buttonLabel={'Rent now'}
            key={plan.title}
            {...plan}
          />
        ))}
      </div>
    </main>
  );
};
export default HomePage;
