import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { getDictionary } from "@/lib/dictionaries";
import { defaultLocale, localizedPath } from "@/lib/i18n";

export default function NotFound() {
  const dict = getDictionary(defaultLocale);
  return (
    <Section className="pt-40 md:pt-48 min-h-[70vh] flex items-start">
      <div className="max-w-2xl">
        <Eyebrow>{dict.notFound.eyebrow}</Eyebrow>
        <h1 className="mt-8 text-[clamp(3rem,8vw,7rem)] font-medium tracking-[-0.04em] leading-[0.95] text-ink">
          {dict.notFound.title}
        </h1>
        <p className="mt-8 text-lg md:text-xl text-ink-secondary leading-[1.55]">
          {dict.notFound.body}
        </p>
        <div className="mt-12">
          <Button href={localizedPath(defaultLocale, "/")} arrow>
            {dict.notFound.cta}
          </Button>
        </div>
      </div>
    </Section>
  );
}
