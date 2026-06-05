import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { getDictionary } from "@/lib/dictionaries";
import { localizedPath, type Locale } from "@/lib/i18n";

interface CaseStudyCardProps {
  lang: Locale;
  slug: string;
  title: string;
  cover: string;
  coverWidth: number;
  coverHeight: number;
  sector: string;
  year: string;
  outcome: string;
  metrics: { value: string; label: string }[];
  url?: string;
  className?: string;
}

export function CaseStudyCard({
  lang,
  slug,
  title,
  cover,
  coverWidth,
  coverHeight,
  sector,
  year,
  outcome,
  metrics,
  url,
  className,
}: CaseStudyCardProps) {
  const dict = getDictionary(lang);
  const body = (
    <>
      <div className="relative overflow-hidden bg-bg-muted">
        <Image
          src={cover}
          alt={title}
          width={coverWidth}
          height={coverHeight}
          className="w-full h-auto grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
          sizes="(max-width: 768px) 100vw, 80vw"
        />
      </div>

      <div className="mt-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
        <span>{sector}</span>
        <span aria-hidden>·</span>
        <span>{year}</span>
      </div>

      <h3 className="mt-3 text-2xl md:text-3xl font-medium tracking-[-0.02em]">
        {title}
      </h3>

      <p className="mt-4 max-w-2xl text-base md:text-lg text-ink-secondary leading-[1.55]">
        {outcome}
      </p>

      <div className="mt-6 flex flex-wrap gap-4 text-sm text-ink">
        {metrics.map((m, i) => (
          <div key={m.label} className="flex items-center gap-4">
            {i > 0 && (
              <span className="text-ink-muted" aria-hidden>
                ·
              </span>
            )}
            <span>
              <strong className="font-medium">{m.value}</strong>
              <span className="ml-1 text-ink-secondary">{m.label}</span>
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium border-b border-ink pb-0.5 group-hover:gap-3 transition-all">
        {url ? dict.caseCard.visitLiveSite : dict.caseCard.readCaseStudy}
        <span aria-hidden>{url ? "↗" : "→"}</span>
      </div>
    </>
  );

  const classes = cn("group block", className);

  return url ? (
    <a href={url} target="_blank" rel="noopener noreferrer" className={classes}>
      {body}
    </a>
  ) : (
    <Link href={localizedPath(lang, `/work/${slug}`)} className={classes}>
      {body}
    </Link>
  );
}
