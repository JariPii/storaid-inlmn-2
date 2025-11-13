'use client';
import { FAQ } from '@/utils/types';
import Accordion from './Accordion';
import { useState } from 'react';

type Props = { faqs: FAQ[] };

const AccordionList = ({ faqs }: Props) => {
  const [active, setActive] = useState<number | string | null>(null);

  const handleToggle = (id?: number | string) => {
    if (id === undefined) return;
    setActive((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {faqs.map((faq) => (
        <Accordion
          key={faq.id}
          {...faq}
          open={active === faq.id}
          onToggle={handleToggle}
        />
      ))}
    </>
  );
};
export default AccordionList;
