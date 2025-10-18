import Button from '../buttons/Button';
import Section from '../utils/Section';

const SuggestionSection = () => {
  return (
    <Section className='flex flex-col items-center justify-center text-center gap-6 py-24  text-(--clr-primary)'>
      <h2 className='text-[3.25rem] font-bold leading-[3.25rem] w-[40ch]'>
        Looking for Secure and Flexible Storage? Find Your Perfect Fit With Us.
      </h2>
      <p className=' w-[128ch] leading-6'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac
        blandit nisi non sodales augue. Phasellus eget elit gravida.
      </p>
      <Button>Book Now</Button>
    </Section>
  );
};
export default SuggestionSection;
