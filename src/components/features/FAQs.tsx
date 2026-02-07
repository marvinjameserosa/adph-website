'use client';

import { useState } from 'react';
import Accordion from '../ui/accordion';
import { faqs }  from '@/data/index';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showSecondColumn, setShowSecondColumn] = useState(false);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const half = Math.ceil(faqs.length / 2);
  const column1 = faqs.slice(0, half);
  const column2 = faqs.slice(half);

  return (
    <div className="relative container w-full">
      <h2 className="mb-6 h2 text-white sm:mb-8">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-2">
        <Accordion faqs={column1} startIndex={0} openIndex={openIndex} toggleAccordion={toggleAccordion} />
        <div className={`md:block ${showSecondColumn ? 'block' : 'hidden'}`}>
          <Accordion faqs={column2} startIndex={column1.length} openIndex={openIndex} toggleAccordion={toggleAccordion} />
        </div>
      </div>
      <button
        onClick={() => setShowSecondColumn(!showSecondColumn)}
        className="mt-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition-colors hover:bg-white/10 md:hidden"
      >
        {showSecondColumn ? 'See Less' : 'See More'}
      </button>
    </div>
  );
}
