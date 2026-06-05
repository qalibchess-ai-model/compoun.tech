import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { getCases } from "@/lib/content/cases";
import { getDictionary } from "@/lib/dictionaries";
import { localizedPath, type Locale } from "@/lib/i18n";

interface FeaturedWorkProps {
  lang: Locale;
}

export function FeaturedWork({ lang }: FeaturedWorkProps) {
  const dict = getDictionary(lang);
  const cases = getCases(lang);
  const featured = cases.filter((c) => c.featured).slice(0, 3);
  const total = cases.length;

  return (
    <Section hairline>
      <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-medium tracking-[-0.03em] leading-[1.05] text-ink">
        {dict.featuredWork.title}
      </h2>

      <div className="mt-20 flex flex-col gap-y-24">
        {featured.map((c) => (
          <CaseStudyCard
            key={c.slug}
            lang={lang}
            slug={c.slug}
            title={c.title}
            cover={c.cover}
            coverWidth={c.coverWidth}
            coverHeight={c.coverHeight}
            sector={c.sectorLabel}
            year={c.year}
            outcome={c.outcome}
            metrics={c.metrics}
            url={c.url}
          />
        ))}
      </div>

      <div className="mt-20">
        <Link
          href={localizedPath(lang, "/work")}
          className="group inline-flex items-center gap-2 text-base font-medium border-b border-ink pb-0.5 hover:gap-3 transition-all"
        >
          {dict.featuredWork.viewAll(total)}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </Section>
  );
}
