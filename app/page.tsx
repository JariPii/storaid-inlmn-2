import AboutSection from '@/components/about/AboutSectio';
import BlogCard from '@/components/blog/BlogCard';
import BrandsBar from '@/components/brands/BrandsBar';
import HeroHome from '@/components/hero/HeroHome';
import PricingSection from '@/components/pricingplan/PricingSection';
import ServicesSection from '@/components/services/ServicesSection';
import SuggestionSection from '@/components/suggestion/SuggestionSection';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';
import Section from '@/components/utils/Section';
import WhyChooseUs from '@/components/why_choose_us/WhyChooseUs';
import { blogPosts } from '@/mockData';

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
      <PricingSection />
      <SuggestionSection />
      <div className='flex gap-6'>
        {blogPosts.map((blog, i) => (
          <BlogCard key={i} {...blog} />
        ))}
      </div>
    </main>
  );
};
export default HomePage;
