import type { Locale } from "@/lib/i18n";

export interface Metric {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

const labels: Record<string, Record<Locale, string>> = {
  projects: { az: "Tamamlanan layihə", en: "Projects shipped" },
  days: { az: "Orta buraxılış (gün)", en: "Avg. days to launch" },
  team: { az: "Komanda üzvü", en: "Team members" },
  roi: { az: "1-ci ildə orta ROI", en: "Avg. ROI in year 1" },
};

export function getMetrics(lang: Locale): Metric[] {
  return [
    { id: "projects", value: 127, suffix: "", label: labels.projects[lang] },
    { id: "days", value: 43, suffix: "", label: labels.days[lang] },
    { id: "team", value: 8, suffix: "", label: labels.team[lang] },
    { id: "roi", value: 2.4, suffix: "×", label: labels.roi[lang] },
  ];
}
