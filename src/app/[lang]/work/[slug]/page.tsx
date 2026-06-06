import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { getCases, getCaseSlugs, type CaseStudy } from "@/lib/content/cases";
import { getDictionary } from "@/lib/dictionaries";
import {
  isLocale,
  locales,
  localizedPath,
  type Locale,
} from "@/lib/i18n";

interface PageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export function generateStaticParams() {
  const slugs = getCaseSlugs();
  return locales.flatMap((lang) =>
    slugs.map((slug) => ({ lang, slug })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const c = getCases(lang).find((x) => x.slug === slug);
  if (!c) return {};

  return {
    title: c.title,
    description: c.outcome,
    alternates: { canonical: localizedPath(lang, `/work/${c.slug}`) },
    openGraph: {
      title: c.title,
      description: c.outcome,
      images: [c.cover],
    },
  };
}

function MetaCell({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
        {label}
      </div>
      <div className="mt-3 text-base text-ink">{value}</div>
    </div>
  );
}

function deriveStack(c: CaseStudy): string[] {
  const map: Record<string, string[]> = {
    monopak: ["Next.js", "TypeScript", "Tailwind CSS", "Figma"],
    "amo-group": ["Next.js", "TypeScript", "Tailwind CSS", "Figma"],
    "amo-fresh": ["Next.js", "TypeScript", "Tailwind CSS", "Figma"],
    "zn-group": ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    "log-academy": ["Next.js", "TypeScript", "Tailwind CSS", "Figma"],
    "gstone-gallery": ["Next.js", "TypeScript", "Tailwind CSS", "Figma"],
    lubristar: ["Next.js", "TypeScript", "Tailwind CSS", "Figma"],
    "play-10": ["React Native", "TypeScript", "Node.js", "Figma"],
    "play-10-branch": ["React Native", "TypeScript", "Node.js", "Figma"],
  };
  return map[c.slug] ?? c.services;
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;
  const dict = getDictionary(locale);
  const cases = getCases(locale);
  const caseStudy = cases.find((c) => c.slug === slug);
  if (!caseStudy) notFound();

  const idx = cases.findIndex((c) => c.slug === caseStudy.slug);
  const next = cases[(idx + 1) % cases.length];
  const stack = deriveStack(caseStudy);
  const role = dict.caseStudyPage.role;

  return (
    <>
      <section className="relative w-full aspect-[21/9] bg-bg-muted overflow-hidden">
        <Image
          src={caseStudy.cover}
          alt={caseStudy.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <Container className="absolute inset-x-0 bottom-0 pb-10 md:pb-16">
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-medium tracking-[-0.04em] leading-[0.98] text-inverse-ink max-w-4xl">
            {caseStudy.title}
          </h1>
          {(caseStudy.url || caseStudy.links) && (
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {caseStudy.url && (
                <a
                  href={caseStudy.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-inverse-ink border-b border-inverse-ink/70 pb-0.5 hover:gap-3 transition-all"
                >
                  {dict.caseStudyPage.visitLiveSite}
                  <span aria-hidden>↗</span>
                </a>
              )}
              {caseStudy.links?.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-inverse-ink border-b border-inverse-ink/70 pb-0.5 hover:gap-3 transition-all"
                >
                  {l.label}
                  <span aria-hidden>↗</span>
                </a>
              ))}
            </div>
          )}
        </Container>
      </section>

      <Section tight hairline>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-x-6 gap-y-10">
          <MetaCell label={dict.caseStudyPage.metaLabels.client} value={caseStudy.client} />
          <MetaCell label={dict.caseStudyPage.metaLabels.sector} value={caseStudy.sectorLabel} />
          <MetaCell label={dict.caseStudyPage.metaLabels.year} value={caseStudy.year} />
          <MetaCell
            label={dict.caseStudyPage.metaLabels.services}
            value={caseStudy.services.join(", ")}
          />
          <MetaCell label={dict.caseStudyPage.metaLabels.duration} value={caseStudy.duration} />
          <MetaCell label={dict.caseStudyPage.metaLabels.role} value={role} />
        </div>
      </Section>

      <Section hairline>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow>{dict.caseStudyPage.context.eyebrow}</Eyebrow>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium tracking-[-0.03em] leading-[1.1] text-ink">
              {dict.caseStudyPage.context.title}
            </h2>
            <p className="mt-8 max-w-3xl text-lg text-ink-secondary leading-[1.6]">
              {caseStudy.body.context}
            </p>
          </div>
        </div>
      </Section>

      <Section hairline>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow>{dict.caseStudyPage.approach.eyebrow}</Eyebrow>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium tracking-[-0.03em] leading-[1.1] text-ink">
              {dict.caseStudyPage.approach.title}
            </h2>
            <p className="mt-8 max-w-3xl text-lg text-ink-secondary leading-[1.6]">
              {caseStudy.body.approach}
            </p>
          </div>
        </div>
      </Section>

      <Section hairline>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow>{dict.caseStudyPage.solution.eyebrow}</Eyebrow>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium tracking-[-0.03em] leading-[1.1] text-ink">
              {dict.caseStudyPage.solution.title}
            </h2>
            <p className="mt-8 max-w-3xl text-lg text-ink-secondary leading-[1.6]">
              {caseStudy.body.solution}
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((n) => (
                <div
                  key={n}
                  className="relative aspect-[4/3] bg-bg-muted overflow-hidden"
                >
                  <Image
                    src={caseStudy.cover}
                    alt={dict.caseStudyPage.detailAlt(caseStudy.title, n)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section hairline>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow>{dict.caseStudyPage.outcome.eyebrow}</Eyebrow>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium tracking-[-0.03em] leading-[1.1] text-ink">
              {dict.caseStudyPage.outcome.title}
            </h2>
            <p className="mt-8 max-w-3xl text-lg text-ink-secondary leading-[1.6]">
              {caseStudy.body.outcome}
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {caseStudy.metrics.map((m) => (
                <div key={m.label} className="border-t border-line pt-6">
                  <div className="text-[clamp(2.5rem,5vw,4rem)] font-medium tracking-[-0.03em] leading-none text-ink">
                    {m.value}
                  </div>
                  <div className="mt-4 text-sm text-ink-secondary">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {caseStudy.quote && (
        <Section hairline>
          <figure className="max-w-5xl">
            <blockquote className="text-[clamp(1.75rem,4vw,3rem)] font-medium tracking-[-0.02em] leading-[1.2] text-ink">
              &ldquo;{caseStudy.quote.text}&rdquo;
            </blockquote>
            <figcaption className="mt-10 font-mono text-sm text-ink-secondary">
              <div className="text-ink">— {caseStudy.quote.author}</div>
              <div className="mt-1">{caseStudy.quote.role}</div>
            </figcaption>
          </figure>
        </Section>
      )}

      <Section hairline>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow>{dict.caseStudyPage.stack}</Eyebrow>
          </div>
          <div className="col-span-12 md:col-span-9">
            <ul className="flex flex-wrap gap-2">
              {stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-line px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-secondary"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section hairline tight>
        <Link
          href={localizedPath(locale, `/work/${next.slug}`)}
          className="group grid grid-cols-12 gap-8 items-center"
        >
          <div className="col-span-12 md:col-span-7 order-2 md:order-1">
            <div className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
              {dict.caseStudyPage.nextCase}
            </div>
            <h3 className="mt-4 text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium tracking-[-0.03em] leading-[1.1] text-ink">
              {next.title}
            </h3>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium border-b border-ink pb-0.5 group-hover:gap-3 transition-all">
              {dict.caseStudyPage.readCaseStudy}
              <span aria-hidden>→</span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 order-1 md:order-2">
            <div className="relative aspect-[4/3] overflow-hidden bg-bg-muted">
              <Image
                src={next.cover}
                alt={next.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
        </Link>
      </Section>

      <FinalCTA lang={locale} />
    </>
  );
}
