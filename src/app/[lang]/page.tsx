import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/Hero";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
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
    description: dict.metadata.home.description,
    alternates: { canonical: localizedPath(lang, "/") },
    openGraph: {
      title: dict.metadata.home.ogTitle,
      description: dict.metadata.home.description,
      images: ["/og/home.jpg"],
    },
  };
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;

  return (
    <>
      <Hero lang={locale} />
      <FeaturedWork lang={locale} />
      <ProcessTimeline lang={locale} />
      <FAQ lang={locale} />
      <FinalCTA lang={locale} />
    </>
  );
}
