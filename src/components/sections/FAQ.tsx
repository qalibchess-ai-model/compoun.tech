import { Section } from "@/components/layout/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { getFaqs } from "@/lib/content/faqs";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

interface FAQProps {
  lang: Locale;
}

export function FAQ({ lang }: FAQProps) {
  const dict = getDictionary(lang);
  const faqs = getFaqs(lang);
  return (
    <Section hairline>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-5">
          <div className="md:sticky md:top-32">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-medium tracking-[-0.03em] leading-[1.05] text-ink">
              {dict.faq.title1}
              <br />
              {dict.faq.title2}
            </h2>
            <p className="mt-8 max-w-md text-base text-ink-secondary leading-[1.55]">
              {dict.faq.description}
            </p>
          </div>
        </div>

        <div className="col-span-12 md:col-span-7">
          <Accordion type="single" collapsible>
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Section>
  );
}
