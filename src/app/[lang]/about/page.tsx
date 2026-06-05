import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Section } from "@/components/layout/Section";
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
    title: dict.metadata.about.title,
    description: dict.metadata.about.description,
    alternates: { canonical: localizedPath(lang, "/about") },
    openGraph: {
      title: dict.metadata.about.title,
      description: dict.metadata.about.ogDescription,
      images: ["/og/about.jpg"],
    },
  };
}

interface Principle {
  number: string;
  title: string;
  body: string;
}

const principlesByLang: Record<Locale, Principle[]> = {
  en: [
    {
      number: "01",
      title: "Build systems, not deliverables.",
      body: "A logo, a page, a dashboard — none of them survive contact with a growing team. We ship the system underneath, so every new asset stays coherent without our involvement.",
    },
    {
      number: "02",
      title: "Measure before you ship.",
      body: "Every engagement defines success in week two and instruments it before launch. If a metric is not measurable, we will not promise to move it.",
    },
    {
      number: "03",
      title: "Boring stack on purpose.",
      body: "Next.js, TypeScript, Tailwind, a headless CMS. The stack has to outlive us on your team — novelty for its own sake is a tax on whoever inherits the codebase.",
    },
    {
      number: "04",
      title: "Hand over by default.",
      body: "Every project ships with documentation, a runbook, and the keys to your own infrastructure. We keep no lock-in, no proprietary CMS, no special licensing.",
    },
    {
      number: "05",
      title: "Small teams, deep engagement.",
      body: "We work with four to six clients per quarter. The same people who scope the project are the people who ship it — no junior handoff, no account manager in between.",
    },
    {
      number: "06",
      title: "Compound after launch.",
      body: "Launch is the start of the work, not the end. The Compound phase — measurement, iteration, the next slice — is where the system earns back its cost.",
    },
  ],
  az: [
    {
      number: "01",
      title: "Sistemləri qur, deliverable yox.",
      body: "Logo, səhifə, dashboard — heç biri böyüyən komandayla təmasdan sağ çıxmır. Biz alt sistemi buraxırıq, beləliklə hər yeni aktiv bizim iştirakımız olmadan vahid qalır.",
    },
    {
      number: "02",
      title: "Buraxmazdan əvvəl ölç.",
      body: "Hər əməkdaşlıq uğuru ikinci həftədə təyin edir və buraxılışdan əvvəl ölçü alətləri qurur. Əgər göstərici ölçülə bilməzsə, onu hərəkətə gətirməyə söz vermirik.",
    },
    {
      number: "03",
      title: "Sadə stek qəsdən.",
      body: "Next.js, TypeScript, Tailwind, headless CMS. Stek komandanızda bizdən daha uzun yaşamalıdır — sırf yenilik üçün yenilik kodu miras alanlar üçün vergidir.",
    },
    {
      number: "04",
      title: "Təhvil — standart davranış.",
      body: "Hər layihə sənədləşmə, runbook və öz infrastrukturunuzun açarları ilə təhvil verilir. Heç bir lock-in, mülkiyyət CMS-i və ya xüsusi lisenziya saxlamırıq.",
    },
    {
      number: "05",
      title: "Kiçik komandalar, dərin əməkdaşlıq.",
      body: "Rübdə dörd-altı müştəri ilə işləyirik. Layihəni planlayan adamlar onu çatdıran adamlardır — junior ötürmə yox, aramızda hesab meneceri yox.",
    },
    {
      number: "06",
      title: "Buraxılışdan sonra böyü.",
      body: "Buraxılış işin başlanğıcıdır, sonu deyil. Böyümə fazası — ölçü, təkrar, növbəti hissə — sistemin xərcini geri qaytardığı yerdir.",
    },
  ],
};

export default async function AboutPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;
  const dict = getDictionary(locale);
  const principles = principlesByLang[locale];

  return (
    <>
      <Section className="pt-32 md:pt-40">
        <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-medium tracking-[-0.04em] leading-[1] text-ink max-w-5xl">
          {dict.aboutPage.title}
        </h1>
      </Section>

      <Section hairline>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12">
            <div className="space-y-8 max-w-3xl text-lg md:text-xl text-ink-secondary leading-[1.6]">
              {dict.aboutPage.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section hairline>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <div className="md:sticky md:top-32">
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-medium tracking-[-0.03em] leading-[1.05] text-ink">
                {dict.aboutPage.holdToTitle}
              </h2>
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <ul>
              {principles.map((p, i) => (
                <li
                  key={p.number}
                  className={i === 0 ? "py-8" : "py-8 border-t border-line"}
                >
                  <div className="grid grid-cols-12 gap-6 items-baseline">
                    <div className="col-span-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
                      {p.number}
                    </div>
                    <div className="col-span-10">
                      <h3 className="text-xl md:text-2xl font-medium tracking-[-0.01em] text-ink">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-base md:text-lg text-ink-secondary leading-[1.55] max-w-2xl">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section hairline>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <div className="relative aspect-[4/3] bg-bg-muted overflow-hidden">
                <Image
                  src="/images/work/_placeholder.svg"
                  alt={dict.aboutPage.studioAlt}
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-medium tracking-[-0.03em] leading-[1.1] text-ink">
                  {dict.aboutPage.locationTitle}
                </h2>
                <dl className="mt-10 space-y-6">
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
                      {dict.aboutPage.address}
                    </dt>
                    <dd className="mt-2 text-base md:text-lg text-ink whitespace-pre-line">
                      {dict.aboutPage.addressValue}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
                      {dict.aboutPage.coordinates}
                    </dt>
                    <dd className="mt-2 font-mono text-sm text-ink-secondary">
                      40.3777° N, 49.8920° E
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
                      {dict.aboutPage.hours}
                    </dt>
                    <dd className="mt-2 text-base text-ink-secondary">
                      {dict.aboutPage.hoursValue}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <FinalCTA lang={locale} />
    </>
  );
}
