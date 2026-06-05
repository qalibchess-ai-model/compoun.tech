import type { Locale } from "@/lib/i18n";

export interface Service {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  outcomes: string[];
  stack: string[];
  relatedCases: string[];
  paragraphs: [string, string, string];
}

interface ServiceContent {
  title: string;
  subtitle: string;
  description: string;
  outcomes: string[];
  paragraphs: [string, string, string];
}

const stack: Record<string, string[]> = {
  brand: ["Figma", "Tailwind tokens"],
  web: ["Next.js", "TypeScript", "Sanity"],
  growth: ["GA4", "PostHog", "Segment"],
  ai: ["Claude API", "n8n", "Vercel"],
};

const relatedCases: Record<string, string[]> = {
  brand: ["log-academy"],
  web: ["monopak"],
  growth: ["log-academy"],
  ai: [],
};

const content: Record<string, Record<Locale, ServiceContent>> = {
  brand: {
    en: {
      title: "Brand & Identity Systems",
      subtitle: "Visual systems built to scale beyond launch day.",
      description:
        "Naming, identity, and design systems engineered to stay coherent as a company grows from one team to twelve.",
      outcomes: [
        "Naming and verbal identity",
        "Visual identity system",
        "Design tokens and component library",
        "Brand guidelines (digital + print)",
      ],
      paragraphs: [
        "Most identity work breaks the moment the first new team picks it up. New buttons get drawn, new colors creep in, and within a year the system is a mood board rather than a standard. We design identities the same way we design software — with tokens, governance, and a workflow that survives staff changes.",
        "Engagement starts with naming, voice, and visual direction, then converges on a token-driven system you can ship in Figma, Tailwind, and brand guidelines simultaneously. Every primitive — color, typography, spacing, motion — has one source of truth and one owner.",
        "The deliverable is not a logo file. It is a system your marketing, product, and operations teams can extend without breaking what came before.",
      ],
    },
    az: {
      title: "Brend və identifikasiya sistemləri",
      subtitle: "Buraxılış günündən sonra da böyüyə bilən vizual sistemlər.",
      description:
        "Şirkət bir komandadan on iki komandaya qədər böyüsə də vahid qalan adlandırma, identifikasiya və dizayn sistemləri.",
      outcomes: [
        "Adlandırma və verbal identifikasiya",
        "Vizual identifikasiya sistemi",
        "Dizayn tokenləri və komponent kitabxanası",
        "Brend qaydaları (rəqəmsal + çap)",
      ],
      paragraphs: [
        "Əksər identifikasiya işləri ilk yeni komanda onu götürən anda dağılır. Yeni düymələr çəkilir, yeni rənglər sürüşür və bir il ərzində sistem standart olmaqdan çıxıb mood board-a çevrilir. Biz identifikasiyaları proqram təminatı kimi dizayn edirik — tokenlərlə, idarəetmə ilə və komanda dəyişiklikləri zamanı dayanıqlı qalan iş axını ilə.",
        "Əməkdaşlıq adlandırma, səs və vizual istiqamətlə başlayır, sonra Figma, Tailwind və brend qaydalarında eyni anda buraxa biləcəyiniz token əsaslı sistemə yığılır. Hər primitiv — rəng, tipoqrafiya, məsafə, hərəkət — bir həqiqət mənbəyi və bir sahibə malikdir.",
        "Nəticə logo faylı deyil. Marketinq, məhsul və əməliyyat komandalarınızın əvvəlkini sındırmadan genişləndirə biləcəyi sistemdir.",
      ],
    },
  },
  web: {
    en: {
      title: "Web Platforms",
      subtitle: "Production-grade Next.js platforms, not marketing pages.",
      description:
        "We build the web layer that customers, sales, and operations all depend on — composable, measurable, and fast.",
      outcomes: [
        "Next.js / React platforms",
        "E-commerce and checkout",
        "Headless CMS architecture",
        "Performance and Core Web Vitals",
      ],
      paragraphs: [
        "Marketing sites stop being marketing sites once they handle pricing, booking, checkout, or partner workflows. Most teams realize this two years too late, after the codebase has fused into something only one freelancer can edit. We build the web layer the way it actually gets used — as production infrastructure.",
        "Engagements ship a Next.js platform with TypeScript, a headless CMS, an analytics layer, and the deploy pipeline your team will own. We split the stack so marketing can publish without engineering, and engineering can build without breaking marketing.",
        "We design for Core Web Vitals from the first commit, instrument every funnel step, and hand over a system that compounds — not one that needs a rebuild every two years.",
      ],
    },
    az: {
      title: "Veb platformalar",
      subtitle: "Marketinq səhifələri yox — istehsal səviyyəli Next.js platformaları.",
      description:
        "Müştərilərin, satışın və əməliyyatların asılı olduğu veb qatını qururuq — kompozisiyalı, ölçülə bilən və sürətli.",
      outcomes: [
        "Next.js / React platformaları",
        "E-ticarət və ödəniş",
        "Headless CMS arxitekturası",
        "Performans və Core Web Vitals",
      ],
      paragraphs: [
        "Qiymət, rezervasiya, ödəniş və ya partnyor iş axınları idarə etməyə başladıqları anda marketinq saytları artıq marketinq saytı olmur. Əksər komandalar bunu iki il gecikmiş şəkildə dərk edir — kod bazası yalnız bir frilanserin redaktə edə biləcəyi şeyə çevriləndən sonra. Biz veb qatını həqiqətən istifadə olunduğu kimi qururuq — istehsal infrastrukturu olaraq.",
        "Əməkdaşlıqlar TypeScript ilə Next.js platforması, headless CMS, analitika qatı və komandanızın sahibləndiyi deploy boru kəməri buraxır. Stek-i ayırırıq ki, marketinq mühəndislik olmadan dərc edə, mühəndislik isə marketinqi sındırmadan qura bilsin.",
        "İlk commit-dən Core Web Vitals üçün dizayn edirik, hər voronka addımını ölçürük və böyüyən sistem təhvil veririk — hər iki ildən bir yenidən qurulması lazım olanı yox.",
      ],
    },
  },
  growth: {
    en: {
      title: "Growth Engineering",
      subtitle: "The infrastructure that turns traffic into pipeline.",
      description:
        "Analytics, experimentation, and conversion systems wired into the product — so growth becomes a property of the platform, not a campaign.",
      outcomes: [
        "Analytics and event modeling",
        "Conversion infrastructure",
        "A/B testing systems",
        "Lifecycle and lead routing",
      ],
      paragraphs: [
        "Growth teams inherit instrumentation that does not match the funnel, dashboards that disagree with each other, and attribution that resolves arguments by seniority. We treat measurement as engineering — modeled, versioned, and tested before a single experiment ships.",
        "Engagement maps the funnel end-to-end, agrees on the event taxonomy with sales and product, and wires the analytics, routing, and experimentation layers into one system. Sales gets scored leads in real time; marketing sees CAC by channel by week.",
        "What changes after launch: arguments stop being about lead quality and start being about which experiment to run next. The platform is the campaign.",
      ],
    },
    az: {
      title: "Böyümə mühəndisliyi",
      subtitle: "Trafiki pipeline-a çevirən infrastruktur.",
      description:
        "Məhsula bağlanan analitika, eksperiment və konversiya sistemləri — beləliklə böyümə kampaniya deyil, platformanın xüsusiyyəti olur.",
      outcomes: [
        "Analitika və hadisə modelləşdirilməsi",
        "Konversiya infrastrukturu",
        "A/B test sistemləri",
        "Lifecycle və lead marşrutlaşdırması",
      ],
      paragraphs: [
        "Böyümə komandaları voronkaya uyğun olmayan ölçü alətlərini, bir-birinə zidd dashboard-ları və mübahisələri staj əsasında həll edən atribusiyanı miras alır. Biz ölçməyə mühəndislik kimi yanaşırıq — modelləşdirilmiş, versiyalı və bir eksperiment də buraxmadan əvvəl test edilmiş.",
        "Əməkdaşlıq voronkanı baştan sona xəritələndirir, satış və məhsulla hadisə taksonomiyasını razılaşdırır, analitika, marşrutlaşdırma və eksperiment qatlarını bir sistemə birləşdirir. Satış real zamanda qiymətləndirilmiş lead-lər alır; marketinq həftəlik kanal üzrə CAC görür.",
        "Buraxılışdan sonra dəyişən: mübahisələr lead keyfiyyəti haqqında olmaqdan çıxır və növbəti hansı eksperimenti aparmaq haqqında olur. Platforma artıq kampaniyadır.",
      ],
    },
  },
  ai: {
    en: {
      title: "AI & Automation",
      subtitle: "Internal tools that compound team leverage.",
      description:
        "AI-driven workflows, agent infrastructure, and internal tools that take repetitive work off the team's plate — built to integrate, not replace.",
      outcomes: [
        "Workflow automation",
        "AI integration into existing tools",
        "Internal dashboards and operators",
        "Custom agent infrastructure",
      ],
      paragraphs: [
        "AI projects fail when they try to replace a team instead of integrate with one. We start from the workflow that already exists, identify the deterministic steps, and isolate the judgment calls that benefit from model assistance.",
        "Engagements ship internal tools, agent infrastructure, and workflow automations that live inside your existing stack — Slack, your ERP, your CMS, your CRM. Humans stay in the loop where it matters; agents handle the reconciliation, drafting, and routing that drain a team's week.",
        "Every workflow we ship is measured against the hours it removes and the error rate it lowers. We do not ship AI for its own sake.",
      ],
    },
    az: {
      title: "AI və avtomatlaşdırma",
      subtitle: "Komandanın gücünü artıran daxili alətlər.",
      description:
        "Təkrarlanan işi komandadan götürən AI iş axınları, agent infrastrukturu və daxili alətlər — əvəz etmək üçün yox, inteqrasiya etmək üçün qurulub.",
      outcomes: [
        "İş axınının avtomatlaşdırılması",
        "Mövcud alətlərə AI inteqrasiyası",
        "Daxili dashboard-lar və operatorlar",
        "Fərdi agent infrastrukturu",
      ],
      paragraphs: [
        "AI layihələri komandanı inteqrasiya etmək əvəzinə əvəz etməyə çalışdıqda uğursuz olur. Biz artıq mövcud olan iş axınından başlayırıq, deterministik addımları müəyyən edirik və model köməyindən faydalana biləcək qərarları ayırırıq.",
        "Əməkdaşlıqlar mövcud stek-iniz daxilində yaşayan daxili alətlər, agent infrastrukturu və iş axını avtomatlaşdırmaları buraxır — Slack, ERP, CMS, CRM. İnsanlar əhəmiyyətli olan yerlərdə qərarverici qalır; agentlər komandanın həftəsini boşaldan üzləşdirmə, layihələndirmə və marşrutlaşdırma işlərini görür.",
        "Buraxdığımız hər iş axını çıxardığı saatlarla və azaltdığı xəta səviyyəsi ilə ölçülür. AI-ı sırf AI olsun deyə buraxmırıq.",
      ],
    },
  },
};

const ids = ["brand", "web", "growth", "ai"] as const;

export function getServices(lang: Locale): Service[] {
  return ids.map((id, i) => {
    const c = content[id][lang];
    return {
      id,
      number: String(i + 1).padStart(2, "0"),
      title: c.title,
      subtitle: c.subtitle,
      description: c.description,
      outcomes: c.outcomes,
      stack: stack[id],
      relatedCases: relatedCases[id],
      paragraphs: c.paragraphs,
    };
  });
}
