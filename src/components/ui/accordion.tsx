"use client";
import { ChevronDown } from "lucide-react";

interface FAQItem {
	question: string;
	answer: string;
}

interface AccordionProps {
	faqs: FAQItem[];
	startIndex: number;
	openIndex: number | null;
	toggleAccordion: (index: number) => void;
}

const Accordion: React.FC<AccordionProps> = ({
	faqs,
	startIndex,
	openIndex,
	toggleAccordion,
}) => {
	return (
		<div>
			{faqs.map((faq, index) => (
				<div
					key={index + startIndex}
					className="relative p-[0.8px] rounded-xl mb-3 sm:mb-4 md:mx-2"
				>
					<div className="absolute inset-0 bg-gradient-border-transparent rounded-xl"></div>
					<div className="relative bg-[#28262d] hover:bg-[#7d7c81] hover:text-black transition-all rounded-xl p-3 sm:p-4 min-h-[70px] sm:min-h-[80px] flex flex-col justify-center">
						<button
							onClick={() => toggleAccordion(index + startIndex)}
							className="flex items-center justify-between w-full text-left text-sm font-semibold sm:text-base"
						>
							{faq.question}
							<ChevronDown
								className={`transition-transform duration-300 ${
									openIndex === index + startIndex ? "rotate-180" : ""
								}`}
								size={24}
								strokeWidth={2}
							/>
						</button>
						<div
							className={`overflow-hidden transition-all duration-300 ${
								openIndex === index + startIndex ? "mt-4 h-auto" : "h-0"
							}`}
						>
							<p className="text-sm">{faq.answer}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Accordion;
