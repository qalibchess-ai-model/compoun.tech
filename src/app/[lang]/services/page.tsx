import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { getServices } from "@/lib/content/services";
import { getCases } from "@/lib/content/cases";
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
    title: dict.metadata.services.title,
    description: dict.metadata.services.description,
    alternates: { canonical: localizedPath(lang, "/services") },
    openGraph: {
      title: dict.metadata.services.title,
      description: dict.metadata.services.description,
      images: ["/og/services.jpg"],
    },
  };
}

export default async function ServicesPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;
  const dict = getDictionary(locale);
  const services = getServices(locale);
  const cases = getCases(locale);

  return (
    <>
      <Section className="pt-32 md:pt-40 pb-0">
        <h1 className="text-[clamp(3rem,7vw,6rem)] font-medium tracking-[-0.04em] leading-[0.95] text-ink">
          {dict.servicesPage.title}
        </h1>
        <p className="mt-8 max-w-2xl text-lg md:text-xl text-ink-secondary leading-[1.55]">
          {dict.servicesPage.subtitle}
        </p>
      </Section>

      {services.map((service) => {
        const related = cases
          .filter((c) => service.relatedCases.includes(c.slug))
          .concat(
            cases.filter(
              (c) =>
                !service.relatedCases.includes(c.slug) &&
                c.services.some((s) =>
                  s.toLowerCase().includes(service.id.toLowerCase()),
                ),
            ),
          )
          .slice(0, 2);

        return (
          <Section key={service.id} hairline id={service.id}>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-medium tracking-[-0.03em] leading-[1.05] text-ink">
              {service.title}
            </h2>
            <p className="mt-8 max-w-3xl text-lg md:text-xl text-ink-secondary leading-[1.6]">
              {service.subtitle}
            </p>

            <div className="mt-10 space-y-6 max-w-3xl">
              {service.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-base md:text-lg text-ink-secondary leading-[1.65]"
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-14">
              <Eyebrow>{dict.servicesPage.whatsIncluded}</Eyebrow>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 max-w-3xl">
                {service.outcomes.map((o) => (
                  <li
                    key={o}
                    className="flex items-start gap-3 text-base md:text-lg text-ink leading-[1.5]"
                  >
                    <span
                      aria-hidden
                      className="mt-3 inline-block h-px w-4 shrink-0 bg-ink"
                    />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>

            {related.length > 0 && (
              <div className="mt-16">
                <Eyebrow>{dict.servicesPage.relatedWork}</Eyebrow>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
                  {related.map((c) => (
                    <CaseStudyCard
                      key={c.slug}
                      lang={locale}
                      slug={c.slug}
                      title={c.title}
                      cover={c.cover}
                      coverWidth={c.coverWidth}
                      coverHeight={c.coverHeight}
                      sector={c.sectorLabel}
                      year={c.year}
                      outcome={c.outcome}
                      metrics={c.metrics.slice(0, 2)}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="mt-14">
              <Button href={localizedPath(locale, "/contact")} variant="primary" arrow>
                {dict.servicesPage.startWithService}
              </Button>
            </div>
          </Section>
        );
      })}

      <FinalCTA lang={locale} />
    </>
  );
}
