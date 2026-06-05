import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Hairline } from "@/components/ui/Hairline";
import { logos, getFeaturedQuote } from "@/lib/content/trust";
import type { Locale } from "@/lib/i18n";

interface TrustBarProps {
  lang: Locale;
}

const trustedByLabel: Record<Locale, string> = {
  az: "Etibar edənlər",
  en: "Trusted by",
};

export function TrustBar({ lang }: TrustBarProps) {
  const featuredQuote = getFeaturedQuote(lang);
  return (
    <Section hairline tight>
      <Eyebrow>{trustedByLabel[lang]}</Eyebrow>

      <ul className="mt-10 flex flex-wrap items-center gap-x-12 gap-y-8">
        {logos.map((logo) => (
          <li
            key={logo.name}
            className="text-ink opacity-60 hover:opacity-100 transition-opacity duration-200"
          >
            <span
              className="block h-6 font-mono text-sm uppercase tracking-[0.14em] leading-6"
              aria-label={logo.name}
            >
              {logo.name}
            </span>
          </li>
        ))}
      </ul>

      <Hairline className="mt-16" />

      <div className="mt-16 grid grid-cols-12 gap-8">
        <blockquote className="col-span-12 md:col-span-10 text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em] leading-[1.2] text-ink">
          &ldquo;{featuredQuote.text}&rdquo;
        </blockquote>
      </div>
    </Section>
  );
}
