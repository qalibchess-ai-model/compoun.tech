import Link from "next/link";
import { cn } from "@/lib/utils";
import { localizedPath, type Locale } from "@/lib/i18n";

interface ServiceCardProps {
  lang: Locale;
  number: string;
  title: string;
  subtitle: string;
  outcomes: string[];
  stack: string[];
  relatedCaseSlug?: string;
  seeRelatedLabel: string;
  className?: string;
}

export function ServiceCard({
  lang,
  number,
  title,
  subtitle,
  outcomes,
  stack,
  relatedCaseSlug,
  seeRelatedLabel,
  className,
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "w-full border-t border-line rounded-none pt-8 md:pt-10",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-6">
        <div className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
          {number}
        </div>
        {stack.length > 0 && (
          <ul className="flex flex-wrap justify-end gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
            {stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      <h3 className="mt-6 text-2xl md:text-3xl font-medium tracking-[-0.02em] text-ink">
        {title}
      </h3>

      <p className="mt-4 max-w-2xl text-base md:text-lg text-ink-secondary leading-[1.55]">
        {subtitle}
      </p>

      {outcomes.length > 0 && (
        <ul className="mt-6 space-y-2">
          {outcomes.map((outcome) => (
            <li
              key={outcome}
              className="flex items-start gap-3 text-base text-ink"
            >
              <span aria-hidden className="text-ink-muted mt-0.5">
                —
              </span>
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
      )}

      {relatedCaseSlug && (
        <Link
          href={localizedPath(lang, `/work/${relatedCaseSlug}`)}
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink border-b border-ink pb-0.5 hover:gap-3 transition-all"
        >
          {seeRelatedLabel}
          <span aria-hidden>→</span>
        </Link>
      )}
    </article>
  );
}
