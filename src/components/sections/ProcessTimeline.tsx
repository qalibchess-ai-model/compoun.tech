import { Section } from "@/components/layout/Section";
import { ProcessStep } from "@/components/cards/ProcessStep";
import { getProcess } from "@/lib/content/process";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

interface ProcessTimelineProps {
  lang: Locale;
}

export function ProcessTimeline({ lang }: ProcessTimelineProps) {
  const dict = getDictionary(lang);
  const process = getProcess(lang);
  return (
    <Section hairline>
      <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-medium tracking-[-0.03em] leading-[1.05] text-ink">
        {dict.processTimeline.title}
      </h2>

      <div className="mt-20">
        {process.map((step) => (
          <ProcessStep
            key={step.id}
            number={step.number}
            name={step.name}
            duration={step.duration}
            description={step.description}
            deliverables={step.deliverables}
          />
        ))}
      </div>
    </Section>
  );
}
