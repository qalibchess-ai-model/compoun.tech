import { Section } from "@/components/layout/Section";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { getServices } from "@/lib/content/services";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

interface ServicesGridProps {
  lang: Locale;
}

export function ServicesGrid({ lang }: ServicesGridProps) {
  const dict = getDictionary(lang);
  const services = getServices(lang);
  return (
    <Section hairline>
      <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-medium tracking-[-0.03em] leading-[1.05] text-ink">
        {dict.servicesGrid.title}
      </h2>

      <div className="mt-20 flex flex-col">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            lang={lang}
            number={service.number}
            title={service.title}
            subtitle={service.subtitle}
            outcomes={service.outcomes}
            stack={service.stack}
            relatedCaseSlug={service.relatedCases[0]}
            seeRelatedLabel={dict.servicesGrid.seeRelated}
            className="pb-12 md:pb-16"
          />
        ))}
      </div>
    </Section>
  );
}
