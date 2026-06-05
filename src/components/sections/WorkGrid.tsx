"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/lib/content/cases";
import { cn } from "@/lib/utils";
import { getDictionary } from "@/lib/dictionaries";
import { localizedPath, type Locale } from "@/lib/i18n";

type FilterId = "all" | "web" | "mobile" | "ecommerce" | "corporate";

const FILTER_IDS: FilterId[] = ["all", "web", "mobile", "ecommerce", "corporate"];

function matchesFilter(c: CaseStudy, filter: FilterId) {
  if (filter === "all") return true;
  if (filter === "mobile") {
    return c.sector === "App" || c.services.some((s) => /mobil|mobile/i.test(s));
  }
  if (filter === "ecommerce") {
    return (
      c.sector === "E-commerce" ||
      c.services.some((s) => /e-?ticarət|e-?commerce/i.test(s))
    );
  }
  if (filter === "corporate") {
    return c.sector === "Corporate";
  }
  if (filter === "web") {
    return c.services.some((s) => /veb platforma|web platform/i.test(s));
  }
  return true;
}

interface WorkGridProps {
  lang: Locale;
  cases: CaseStudy[];
}

export function WorkGrid({ lang, cases }: WorkGridProps) {
  const dict = getDictionary(lang);
  const [filter, setFilter] = useState<FilterId>("all");

  const visible = useMemo(
    () => cases.filter((c) => matchesFilter(c, filter)),
    [cases, filter],
  );

  return (
    <>
      <div
        role="tablist"
        aria-label={dict.workPage.filterLabel}
        className="mt-12 flex flex-wrap gap-2"
      >
        {FILTER_IDS.map((f) => {
          const active = f === filter;
          return (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition-colors duration-200",
                active
                  ? "bg-ink text-bg"
                  : "border border-line text-ink-secondary hover:text-ink hover:border-ink",
              )}
            >
              {dict.workPage.filters[f]}
            </button>
          );
        })}
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 items-start">
        {visible.map((c) => {
          const cardClass =
            "group block transition-transform duration-300 ease-out hover:-translate-y-1";

          const inner = (
            <>
              <div className="relative overflow-hidden bg-bg-muted">
                <Image
                  src={c.cover}
                  alt={c.title}
                  width={c.coverWidth}
                  height={c.coverHeight}
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="mt-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
                <span>{c.sectorLabel}</span>
                <span aria-hidden>·</span>
                <span>{c.year}</span>
                {c.url && (
                  <>
                    <span aria-hidden>·</span>
                    <span>{dict.workPage.visit}</span>
                  </>
                )}
              </div>

              <h3 className="mt-3 text-2xl md:text-3xl font-medium tracking-[-0.02em] text-ink">
                {c.title}
              </h3>

              <p className="mt-3 text-base text-ink-secondary leading-[1.55]">
                {c.outcome}
              </p>
            </>
          );

          return c.url ? (
            <a
              key={c.slug}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cardClass}
            >
              {inner}
            </a>
          ) : (
            <Link
              key={c.slug}
              href={localizedPath(lang, `/work/${c.slug}`)}
              className={cardClass}
            >
              {inner}
            </Link>
          );
        })}
      </div>

      {visible.length === 0 && (
        <p className="mt-16 text-base text-ink-secondary">{dict.workPage.empty}</p>
      )}
    </>
  );
}
