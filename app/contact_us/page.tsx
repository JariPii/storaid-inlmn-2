import FAQSection from '@/components/faq/FAQSection';
import SubHeroContactUs from '@/components/hero/SubHeroContactUs';
import Hero from '@/components/hero/Hero';
import { heroContent } from '@/components/hero/heroContent';
import ContactSection from '@/components/contact/ContactSection';

const ContactUsPage = () => {
  return (
    <div className='flex flex-col'>
      <Hero {...heroContent.contact} />
      <ContactSection />
      <SubHeroContactUs />
      <FAQSection />
    </div>
  );
};
export default ContactUsPage;
