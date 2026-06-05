import type { Locale } from "@/lib/i18n";

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const content: Record<string, Record<Locale, { question: string; answer: string }>> = {
  cost: {
    en: {
      question: "How much does a typical project cost?",
      answer:
        "Projects start at 18,000 AZN. A typical web platform lands between 32,000 and 65,000 AZN, and a full brand-and-platform engagement runs 80,000 AZN and up. Every proposal lists fixed milestones with fixed prices — no hourly rates, no surprise invoices.",
    },
    az: {
      question: "Adi bir layihənin qiyməti nə qədərdir?",
      answer:
        "Layihələr 18,000 AZN-dən başlayır. Adi veb platforma 32,000 ilə 65,000 AZN arasında, tam brend və platforma əməkdaşlığı 80,000 AZN və yuxarı olur. Hər təklifdə sabit qiymətlərlə sabit mərhələlər göstərilir — saatlıq tarif yox, gözlənilməz hesab yox.",
    },
  },
  timeline: {
    en: {
      question: "How long does it take?",
      answer:
        "Most engagements run 8 to 16 weeks from kickoff to launch. A focused brand sprint takes about 4 weeks; a full web platform with growth instrumentation closer to 12. We publish the timeline in week one and re-confirm it after each milestone.",
    },
    az: {
      question: "Nə qədər çəkir?",
      answer:
        "Əksər əməkdaşlıqlar başlanğıcdan buraxılışa qədər 8-16 həftə davam edir. Diqqətli brend sprinti təxminən 4 həftə; böyümə ölçüsü ilə tam veb platforma isə 12 həftəyə yaxındır. Cədvəli birinci həftədə dərc edirik və hər mərhələdən sonra təsdiqləyirik.",
    },
  },
  "inhouse-team": {
    en: {
      question: "What if we already have an in-house team?",
      answer:
        "We work alongside in-house teams more often than we replace them. Our role is usually the architecture, the system, and the first production slice — your team carries it forward. We document everything we ship so handover is the default, not an exception.",
    },
    az: {
      question: "Əgər artıq daxili komandamız varsa?",
      answer:
        "Daxili komandaları əvəz etməkdənsə, onlarla yanaşı işləməyimiz daha çox olur. Rolumuz adətən arxitektura, sistem və ilk istehsal hissəsidir — komandanız bunu inkişaf etdirir. Buraxdığımız hər şeyi sənədləşdiririk ki, təhvil istisna deyil, standart olsun.",
    },
  },
  "engagement-model": {
    en: {
      question: "Do you work on retainer or project basis?",
      answer:
        "Both. New work starts as a fixed-scope project so we can size each other up against real deliverables. After launch, most clients move to a quarterly retainer (16,000-32,000 AZN per quarter) for the Compound phase — measurement, iteration, and the next slice of scope.",
    },
    az: {
      question: "Retainer əsasında, yoxsa layihə əsasında işləyirsiniz?",
      answer:
        "Hər ikisi. Yeni iş sabit həcmli layihə kimi başlayır ki, real nəticələr üzərindən bir-birimizi qiymətləndirə bilək. Buraxılışdan sonra əksər müştərilər rüblük retainer-ə (rübdə 16,000-32,000 AZN) keçir — ölçü, təkrarlama və növbəti həcm üçün.",
    },
  },
  ownership: {
    en: {
      question: "Who owns the code and design files?",
      answer:
        "You do, from day one. All code ships into your GitHub organization, all design files live in your Figma workspace, and all infrastructure is provisioned on your accounts. We keep no lock-in, no proprietary CMS, and no special licensing.",
    },
    az: {
      question: "Kod və dizayn fayllarının sahibi kimdir?",
      answer:
        "Birinci gündən siz. Bütün kod sizin GitHub təşkilatınıza, bütün dizayn faylları sizin Figma iş sahənizə yüklənir, bütün infrastruktur sizin hesablarınızda təşkil olunur. Heç bir lock-in, mülkiyyət CMS-i və ya xüsusi lisenziya saxlamırıq.",
    },
  },
  "success-metrics": {
    en: {
      question: "How do you measure success?",
      answer:
        "We define success metrics in week two and instrument them before we ship a single page. Typical targets: lead-to-close cycle time, conversion rate by funnel stage, time-to-publish for marketing, or Core Web Vitals. If a metric isn't measurable, we don't promise to move it.",
    },
    az: {
      question: "Uğuru necə ölçürsünüz?",
      answer:
        "Uğur göstəricilərini ikinci həftədə təyin edirik və bir səhifə də buraxmadan əvvəl onları ölçməyə başlayırıq. Tipik hədəflər: lead-to-close dövr müddəti, voronka mərhələləri üzrə konversiya, marketinq üçün nəşr müddəti və ya Core Web Vitals. Əgər göstərici ölçülə bilməzsə, onu hərəkətə gətirməyə söz vermirik.",
    },
  },
  stack: {
    en: {
      question: "What stack do you use and why?",
      answer:
        "Next.js, TypeScript, Tailwind, and a headless CMS (usually Sanity) for the web layer. PostHog and GA4 for analytics, Vercel for hosting, and the Claude API for AI workflows. The stack is boring on purpose — it has to outlive us on your team.",
    },
    az: {
      question: "Hansı stek-i istifadə edirsiniz və niyə?",
      answer:
        "Veb qatı üçün Next.js, TypeScript, Tailwind və headless CMS (adətən Sanity). Analitika üçün PostHog və GA4, hosting üçün Vercel, AI iş axınları üçün Claude API. Stek qəsdən sadədir — komandanızda bizdən daha uzun yaşamalıdır.",
    },
  },
  "existing-systems": {
    en: {
      question: "Can you work with our existing brand or codebase?",
      answer:
        "Yes. About half our work is rebuilds; the other half is grafting new infrastructure onto something that already exists. We start with an audit, agree on what stays and what goes, and migrate in slices so the site stays live the whole time.",
    },
    az: {
      question: "Mövcud brendimiz və ya kodumuzla işləyə bilərsiniz?",
      answer:
        "Bəli. İşlərimizin təxminən yarısı yenidən qurmadır; digər yarısı isə mövcud bir şeyin üzərinə yeni infrastruktur tikməkdir. Auditlə başlayırıq, nəyin qalacağına və nəyin gedəcəyinə razılaşırıq, sonra hissə-hissə miqrasiya edirik ki, sayt bütün müddət ərzində canlı qalsın.",
    },
  },
  nda: {
    en: {
      question: "Do you sign NDAs?",
      answer:
        "Yes, mutual NDAs are standard before a first call where commercial detail is shared. We have a one-page template that takes ten minutes to sign, or we'll sign yours. We never publish client work without written approval.",
    },
    az: {
      question: "NDA imzalayırsınız?",
      answer:
        "Bəli, kommersial detalların paylaşıldığı ilk söhbətdən əvvəl qarşılıqlı NDA standartdır. On dəqiqəyə imzalanan bir səhifəlik şablonumuz var, və ya sizinkini imzalayarıq. Yazılı razılıq olmadan heç vaxt müştəri işini dərc etmirik.",
    },
  },
  "after-launch": {
    en: {
      question: "What happens after launch?",
      answer:
        "Launch is the start of the Compound phase. We stay on for a 30-day stabilization window included in every project, and most clients continue on a quarterly retainer for measurement and iteration. If you'd rather take it in-house, we hand over a fully documented system.",
    },
    az: {
      question: "Buraxılışdan sonra nə olur?",
      answer:
        "Buraxılış böyümə fazasının başlanğıcıdır. Hər layihəyə daxil olan 30 günlük stabilləşmə pəncərəsi üçün yanınızda qalırıq və əksər müştərilər ölçü və təkrarlama üçün rüblük retainer-ə davam edir. Daxiliyə götürmək istəyirsənsə, tam sənədləşdirilmiş sistemi təhvil veririk.",
    },
  },
};

const ids = [
  "cost",
  "timeline",
  "inhouse-team",
  "engagement-model",
  "ownership",
  "success-metrics",
  "stack",
  "existing-systems",
  "nda",
  "after-launch",
] as const;

export function getFaqs(lang: Locale): FAQ[] {
  return ids.map((id) => ({ id, ...content[id][lang] }));
}
