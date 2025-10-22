import Button from '@/components/buttons/Button';
import Section from '@/components/utils/Section';

const ErrorPage = () => {
  return (
    <Section className='h-[80dvh] flex flex-col items-center justify-center gap-5'>
      <p className='text-2xl text-(--clr-primary)'>Oops!</p>
      <h2 className='text-[5rem] text-(--clr-accent) font-bold tracking-tight'>
        Page Not Found
      </h2>
      <p className='text-(--clr-primary) w-[70ch] text-center leading-6'>
        Sorry, the page you are looking for does not exist. It may have been
        moved, removed altogether or is temporarily unavailable.
      </p>
      <Button>Back To Home</Button>
    </Section>
  );
};
export default ErrorPage;
