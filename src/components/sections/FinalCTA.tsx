import { Button } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";
import { getDictionary } from "@/lib/dictionaries";
import { localizedPath, type Locale } from "@/lib/i18n";

interface FinalCTAProps {
  lang: Locale;
}

export function FinalCTA({ lang }: FinalCTAProps) {
  const dict = getDictionary(lang);
  const contacts = [
    {
      label: dict.finalCta.contacts.instagram,
      value: "compound.tech",
      href: "https://www.instagram.com/compound.tech/",
    },
    {
      label: dict.finalCta.contacts.phone,
      value: "+994 51 345 26 86",
      href: "tel:+994513452686",
    },
    {
      label: dict.finalCta.contacts.location,
      value: dict.finalCta.contacts.locationValue,
      href: null,
    },
  ];

  return (
    <Section inverse className="py-32 md:py-32 lg:py-32">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-[clamp(3rem,7vw,6rem)] font-medium tracking-[-0.04em] leading-[0.95] text-inverse-ink">
          {dict.finalCta.title}
        </h2>

        <div className="mt-12">
          <Button href={localizedPath(lang, "/contact")} variant="inverse" arrow>
            {dict.finalCta.cta}
          </Button>
        </div>
      </div>

      <hr className="mt-24 border-0 border-t border-inverse-line" />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {contacts.map((c) => (
          <div key={c.label}>
            <div className="font-mono text-xs uppercase tracking-[0.14em] text-inverse-ink/60">
              {c.label}
            </div>
            {c.href ? (
              <a
                href={c.href}
                className="mt-3 inline-block text-lg text-inverse-ink hover:text-inverse-ink/70 transition-colors"
              >
                {c.value}
              </a>
            ) : (
              <div className="mt-3 text-lg text-inverse-ink">{c.value}</div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
