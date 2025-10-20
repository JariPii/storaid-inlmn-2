import { fetchAllFAQs } from '@/utils/actions';
import Accordion from './Accordion';

const AccordionList = async () => {
  const faqs = await fetchAllFAQs();
  return (
    <>
      {faqs.map((faq) => (
        <Accordion key={faq.id} {...faq} />
      ))}
    </>
  );
};
export default AccordionList;
