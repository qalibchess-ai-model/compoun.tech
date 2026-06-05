import type { Locale } from "@/lib/i18n";

export interface ProcessStep {
  id: string;
  number: string;
  name: string;
  duration: string;
  description: string;
  deliverables: string[];
}

interface ProcessContent {
  name: string;
  duration: string;
  description: string;
  deliverables: string[];
}

const content: Record<string, Record<Locale, ProcessContent>> = {
  discovery: {
    en: {
      name: "Discovery",
      duration: "1 week",
      description:
        "We map your current state — what works, what's broken, and what's invisible to the people closest to it. The goal is a shared problem definition that survives the next four months.",
      deliverables: [
        "Audit document",
        "Stakeholder interviews (5-8)",
        "Problem framing brief",
        "Constraints and success criteria",
      ],
    },
    az: {
      name: "Kəşf",
      duration: "1 həftə",
      description:
        "Hazırkı vəziyyətinizi xəritələndiririk — nə işləyir, nə qırıqdır və ən yaxınınızdakılara nə görünmür. Məqsəd növbəti dörd ay ərzində dayanıqlı olan ortaq problem tərifidir.",
      deliverables: [
        "Audit sənədi",
        "Maraqlı tərəflərlə müsahibələr (5-8)",
        "Problem çərçivəsi",
        "Məhdudiyyətlər və uğur meyarları",
      ],
    },
  },
  strategy: {
    en: {
      name: "Strategy",
      duration: "1-2 weeks",
      description:
        "We translate the problem into positioning, architecture, and success metrics. Every decision after this point traces back to a written rationale.",
      deliverables: [
        "Positioning and narrative",
        "System architecture",
        "Success metrics and instrumentation plan",
        "Roadmap with sequencing",
      ],
    },
    az: {
      name: "Strategiya",
      duration: "1-2 həftə",
      description:
        "Problemi mövqeləndirmə, arxitektura və uğur göstəricilərinə çeviririk. Bu nöqtədən sonra hər qərar yazılı əsasa söykənir.",
      deliverables: [
        "Mövqeləndirmə və narrativ",
        "Sistem arxitekturası",
        "Uğur göstəriciləri və ölçü planı",
        "Ardıcıllıqla yol xəritəsi",
      ],
    },
  },
  design: {
    en: {
      name: "Design",
      duration: "2-4 weeks",
      description:
        "Design as a system, not a deck. We prototype the pieces that carry real risk and validate them with users before they reach production.",
      deliverables: [
        "Design system and tokens",
        "Interactive prototypes",
        "Usability validation",
        "Component specification",
      ],
    },
    az: {
      name: "Dizayn",
      duration: "2-4 həftə",
      description:
        "Təqdimat deyil, sistem kimi dizayn. Real risk daşıyan hissələri prototipləşdiririk və istehsala çatmadan istifadəçilərlə yoxlayırıq.",
      deliverables: [
        "Dizayn sistemi və tokenlər",
        "İnteraktiv prototiplər",
        "İstifadə yararlılığı testi",
        "Komponent spesifikasiyası",
      ],
    },
  },
  build: {
    en: {
      name: "Build",
      duration: "4-8 weeks",
      description:
        "Implementation in production-grade code with testing and integration along the way. We ship in slices so the system is real long before launch day.",
      deliverables: [
        "Production implementation",
        "Automated test coverage",
        "Integration with existing systems",
        "Launch checklist and handover",
      ],
    },
    az: {
      name: "İnşa",
      duration: "4-8 həftə",
      description:
        "Test və inteqrasiya ilə birlikdə istehsal səviyyəli kodda icra. Hissə-hissə buraxırıq ki, sistem buraxılış günündən çox-çox əvvəl real olsun.",
      deliverables: [
        "İstehsal səviyyəli icra",
        "Avtomatlaşdırılmış test əhatəsi",
        "Mövcud sistemlərlə inteqrasiya",
        "Buraxılış siyahısı və təhvil",
      ],
    },
  },
  compound: {
    en: {
      name: "Compound",
      duration: "ongoing",
      description:
        "Launch is when the project starts compounding, not when it ends. We measure, iterate, and tune the system so each quarter outperforms the last.",
      deliverables: [
        "Quarterly performance review",
        "Experimentation backlog",
        "Optimization and iteration",
        "Knowledge transfer to your team",
      ],
    },
    az: {
      name: "Böyümə",
      duration: "davamlı",
      description:
        "Buraxılış layihənin bitdiyi yer deyil, böyüməyə başladığı yerdir. Ölçürük, təkrarlayırıq və sistemi tənzimləyirik ki, hər rüb əvvəlkindən daha yaxşı olsun.",
      deliverables: [
        "Rüblük performans baxışı",
        "Eksperiment siyahısı",
        "Optimizasiya və təkrarlama",
        "Komandaya bilik ötürülməsi",
      ],
    },
  },
};

const ids = ["discovery", "strategy", "design", "build", "compound"] as const;

export function getProcess(lang: Locale): ProcessStep[] {
  return ids.map((id, i) => {
    const c = content[id][lang];
    return {
      id,
      number: String(i + 1).padStart(2, "0"),
      name: c.name,
      duration: c.duration,
      description: c.description,
      deliverables: c.deliverables,
    };
  });
}
