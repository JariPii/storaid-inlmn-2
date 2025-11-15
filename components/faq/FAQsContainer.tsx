'use cache';

import { fetchAllFAQs } from '@/utils/actions';
import AccordionList from '../accordion/AccordionList';
import { cacheLife } from 'next/cache';

const FAQsContainer = async () => {
  cacheLife('weeks');
  const faqs = await fetchAllFAQs();
  return <AccordionList faqs={faqs} />;
};
export default FAQsContainer;
