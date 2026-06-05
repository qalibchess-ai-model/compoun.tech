import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { ContactForm } from "@/components/sections/ContactForm";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, localizedPath, type Locale } from "@/lib/i18n";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    title: dict.metadata.contact.title,
    description: dict.metadata.contact.description,
    alternates: { canonical: localizedPath(lang, "/contact") },
    openGraph: {
      title: dict.metadata.contact.title,
      description: dict.metadata.contact.ogDescription,
      images: ["/og/contact.jpg"],
    },
  };
}

export default async function ContactPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;
  const dict = getDictionary(locale);

  const directContacts = [
    {
      label: dict.contactPage.labels.email,
      value: "hello@compound.az",
      href: "mailto:hello@compound.az",
    },
    {
      label: dict.contactPage.labels.phone,
      value: "+994 12 555 00 00",
      href: "tel:+994125550000",
    },
    {
      label: dict.contactPage.labels.linkedin,
      value: "linkedin.com/company/compound",
      href: "https://linkedin.com/company/compound",
    },
  ];

  const miniFaqs = [
    { id: "what-happens", ...dict.miniFaqs.whatHappens },
    { id: "response-time", ...dict.miniFaqs.responseTime },
    { id: "nda", ...dict.miniFaqs.nda },
  ];

  return (
    <Section className="pt-32 md:pt-40">
      <h1 className="text-[clamp(3rem,7vw,6rem)] font-medium tracking-[-0.04em] leading-[0.95] text-ink">
        {dict.contactPage.title}
      </h1>
      <p className="mt-8 max-w-2xl text-lg md:text-xl text-ink-secondary leading-[1.55]">
        {dict.contactPage.subtitle}
      </p>

      <div className="mt-20 md:mt-28 grid grid-cols-12 gap-10 md:gap-16">
        <div className="col-span-12 lg:col-span-7">
          <ContactForm lang={locale} />
        </div>

        <div className="col-span-12 lg:col-span-5">
          <div className="lg:sticky lg:top-32 space-y-14">
            <div>
              <Eyebrow>{dict.contactPage.directContact}</Eyebrow>
              <dl className="mt-8 space-y-8">
                {directContacts.map((c) => (
                  <div key={c.label}>
                    <dt className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
                      {c.label}
                    </dt>
                    <dd className="mt-2">
                      <a
                        href={c.href}
                        className="text-lg md:text-xl text-ink hover:text-ink-secondary transition-colors"
                      >
                        {c.value}
                      </a>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <Eyebrow>{dict.contactPage.beforeYouAsk}</Eyebrow>
              <div className="mt-4">
                <Accordion type="single" collapsible>
                  {miniFaqs.map((f) => (
                    <AccordionItem key={f.id} value={f.id}>
                      <AccordionTrigger className="py-6 text-base md:text-lg">
                        {f.question}
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 text-sm md:text-base">
                        {f.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
