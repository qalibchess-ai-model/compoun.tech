import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/layout/Section";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { WorkGrid } from "@/components/sections/WorkGrid";
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
    title: dict.metadata.work.title,
    description: dict.metadata.work.description,
    alternates: { canonical: localizedPath(lang, "/work") },
    openGraph: {
      title: dict.metadata.work.title,
      description: dict.metadata.work.description,
      images: ["/og/work.jpg"],
    },
  };
}

export default async function WorkPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;
  const dict = getDictionary(locale);
  const cases = getCases(locale);

  return (
    <>
      <Section className="pt-32 md:pt-40 pb-0">
        <h1 className="text-[clamp(3rem,7vw,6rem)] font-medium tracking-[-0.04em] leading-[0.95] text-ink">
          {dict.workPage.title}
        </h1>
        <p className="mt-8 max-w-2xl text-lg md:text-xl text-ink-secondary leading-[1.55]">
          {dict.workPage.subtitle}
        </p>

        <WorkGrid lang={locale} cases={cases} />
      </Section>

      <FinalCTA lang={locale} />
    </>
  );
}
