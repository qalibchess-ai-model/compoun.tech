import { Section } from "@/components/layout/Section";
import { MetricCard } from "@/components/cards/MetricCard";
import { getMetrics } from "@/lib/content/metrics";
import type { Locale } from "@/lib/i18n";

interface MetricsGridProps {
  lang: Locale;
}

export function MetricsGrid({ lang }: MetricsGridProps) {
  const metrics = getMetrics(lang);
  return (
    <Section hairline>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
        {metrics.map((m) => (
          <MetricCard
            key={m.id}
            value={m.value}
            suffix={m.suffix}
            label={m.label}
          />
        ))}
      </div>
    </Section>
  );
}
