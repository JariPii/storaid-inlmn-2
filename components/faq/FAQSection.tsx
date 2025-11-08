import { fetchAllFAQs } from '@/utils/actions';
import AccordionList from '../accordion/AccordionList';
import Section from '../global/Section';
import FAQSkeleton from '../global/FAQSkeleton';

const FAQSection = async () => {
  try {
    const faqs = await fetchAllFAQs();
    return (
      <div>
        <Section variant='light' className='flex flex-col gap-4 py-20'>
          <div className='bg-(--clr-secondary) p-2'>
            <h3 className='text-2xl text-(--clr-accent) font-bold'>FAQs</h3>
          </div>
          <div className='grid grid-cols-2 gap-1'>
            <div className='w-full'>
              <h4 className='text-[3.25rem] font-bold tracking-tighter leading-[52px]'>
                Frequently Ask Questions
              </h4>
              <p className='leading-6 text-(--clr-secondary)'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className='flex flex-col items-center h-auto w-[auto] gap-4'>
              <AccordionList faqs={faqs} />
            </div>
          </div>
        </Section>
      </div>
    );
  } catch (error) {
    console.log(error);

    return (
      <div>
        <Section variant='light' className='flex flex-col gap-4 py-20'>
          <div className='bg-(--clr-secondary) p-2'>
            <h3 className='text-2xl text-(--clr-accent) font-bold'>FAQs</h3>
          </div>
          <div className='grid grid-cols-2 gap-1'>
            <div className='w-full'>
              <h4 className='text-[3.25rem] font-bold tracking-tighter leading-[52px]'>
                Frequently Ask Questions
              </h4>
              <p className='leading-6 text-(--clr-secondary)'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <h5 className='text-red-400 font-bold text-3xl'>
                * FAQs are unavailable at the moment *
              </h5>
            </div>
            <div className='flex flex-col items-center h-auto w-[auto] gap-4'>
              <FAQSkeleton />
              <FAQSkeleton />
              <FAQSkeleton />
              <FAQSkeleton />
              <FAQSkeleton />
            </div>
          </div>
        </Section>
      </div>
    );
  }
};
export default FAQSection;
