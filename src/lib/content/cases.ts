import type { Locale } from "@/lib/i18n";

export type Sector =
  | "Government"
  | "Corporate"
  | "International"
  | "App"
  | "E-commerce";

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  cover: string;
  coverWidth: number;
  coverHeight: number;
  sector: Sector;
  sectorLabel: string;
  year: string;
  duration: string;
  services: string[];
  outcome: string;
  url?: string;
  links?: { label: string; href: string }[];
  metrics: { value: string; label: string }[];
  body: {
    context: string;
    approach: string;
    solution: string;
    outcome: string;
  };
  quote?: {
    text: string;
    author: string;
    role: string;
  };
  featured: boolean;
}

interface CaseBase {
  slug: string;
  client: string;
  cover: string;
  coverWidth: number;
  coverHeight: number;
  sector: Sector;
  year: string;
  url?: string;
  links?: { label: string; href: string }[];
  featured: boolean;
}

interface CaseLocalized {
  title: string;
  duration: string;
  services: string[];
  outcome: string;
  metrics: { value: string; label: string }[];
  body: {
    context: string;
    approach: string;
    solution: string;
    outcome: string;
  };
  quote?: { text: string; author: string; role: string };
}

const sectorLabels: Record<Sector, Record<Locale, string>> = {
  Government: { az: "Dövlət", en: "Government" },
  Corporate: { az: "Korporativ", en: "Corporate" },
  International: { az: "Beynəlxalq", en: "International" },
  App: { az: "Tətbiq", en: "App" },
  "E-commerce": { az: "E-ticarət", en: "E-commerce" },
};

const baseData: CaseBase[] = [
  {
    slug: "monopak",
    client: "Monopak",
    cover: "/images/work/monopak.png",
    coverWidth: 2880,
    coverHeight: 1556,
    sector: "E-commerce",
    year: "2025",
    url: "https://monopak.az/",
    featured: true,
  },
  {
    slug: "amo-group",
    client: "Amo Group",
    cover: "/images/work/amogroup.png",
    coverWidth: 2880,
    coverHeight: 1556,
    sector: "Corporate",
    year: "2025",
    url: "https://amogroup.az/",
    featured: true,
  },
  {
    slug: "amo-fresh",
    client: "Amo Fresh",
    cover: "/images/work/amofresh.png",
    coverWidth: 2880,
    coverHeight: 1558,
    sector: "Corporate",
    year: "2025",
    url: "https://amofresh.az/",
    featured: false,
  },
  {
    slug: "zn-group",
    client: "ZN Group",
    cover: "/images/work/zngroup.png",
    coverWidth: 2880,
    coverHeight: 1558,
    sector: "Corporate",
    year: "2025",
    url: "https://zngroup.vercel.app/",
    featured: false,
  },
  {
    slug: "log-academy",
    client: "Log Academy",
    cover: "/images/work/logacademy.png",
    coverWidth: 2880,
    coverHeight: 1556,
    sector: "Corporate",
    year: "2024",
    url: "https://logacademy.az/",
    featured: true,
  },
  {
    slug: "gstone-gallery",
    client: "GStone Gallery",
    cover: "/images/work/gstonegallery.png",
    coverWidth: 2878,
    coverHeight: 1554,
    sector: "Corporate",
    year: "2025",
    url: "https://gstonegallery.az/",
    featured: false,
  },
  {
    slug: "lubristar",
    client: "Lubristar",
    cover: "/images/work/lubristar.png",
    coverWidth: 2880,
    coverHeight: 1516,
    sector: "Corporate",
    year: "2025",
    url: "https://www.lubristar.az/",
    featured: false,
  },
  {
    slug: "play-10",
    client: "Play 10",
    cover: "/images/work/play10.png",
    coverWidth: 524,
    coverHeight: 538,
    sector: "App",
    year: "2025",
    url: "https://apps.apple.com/az/app/play10/id6738125748",
    links: [
      { label: "Google Play", href: "https://play.google.com/store/search?q=play+10&c=apps" },
      { label: "App Store", href: "https://apps.apple.com/az/app/play10/id6738125748" },
    ],
    featured: true,
  },
];

const localized: Record<string, Record<Locale, CaseLocalized>> = {
  monopak: {
    en: {
      title: "Monopak — an e-commerce storefront built from scratch.",
      duration: "3 months",
      services: ["Web platform", "E-commerce", "UI/UX"],
      outcome:
        "A full e-commerce site with catalogue, cart, and checkout — engineered for fast browsing and easy ordering.",
      metrics: [
        { value: "100%", label: "custom build" },
        { value: "Mobile-first", label: "responsive" },
        { value: "Live", label: "monopak.az" },
      ],
      body: {
        context:
          "Monopak needed a modern e-commerce presence that could showcase its packaging products and let customers order online without friction.",
        approach:
          "We designed the storefront around product discovery — clear categories, fast search, and a checkout flow that works as well on a phone as on a laptop.",
        solution:
          "A fully custom storefront with a product catalogue, cart, and order management. The UI is responsive, lightweight, and built to scale as the catalogue grows.",
        outcome:
          "Monopak now has a self-serve storefront online, with a foundation ready for promotions, inventory expansion, and analytics.",
      },
    },
    az: {
      title: "Monopak — sıfırdan qurulmuş e-ticarət saytı.",
      duration: "3 ay",
      services: ["Veb platforma", "E-ticarət", "UI/UX"],
      outcome:
        "Kataloq, səbət və ödəniş ilə tam e-ticarət saytı — sürətli baxış və asan sifariş üçün qurulub.",
      metrics: [
        { value: "100%", label: "fərdi quruluş" },
        { value: "Mobile-first", label: "uyğunlaşan" },
        { value: "Canlı", label: "monopak.az" },
      ],
      body: {
        context:
          "Monopak-ın qablaşdırma məhsullarını nümayiş etdirə bilən və müştərilərə maneəsiz onlayn sifariş imkanı verən müasir e-ticarət platformasına ehtiyacı var idi.",
        approach:
          "Saytı məhsulun aşkarlanması ətrafında dizayn etdik — aydın kateqoriyalar, sürətli axtarış və telefonda da, kompüterdə də eyni dərəcədə yaxşı işləyən ödəniş axını.",
        solution:
          "Məhsul kataloqu, səbət və sifariş idarəetməsi ilə tam fərdi sayt. İnterfeys uyğunlaşan, yüngül və kataloq böyüdükcə miqyaslanan şəkildə qurulub.",
        outcome:
          "Monopak indi onlayn self-servis saytına sahibdir və bu, promosyonlar, anbar genişlənməsi və analitika üçün hazır bünövrədir.",
      },
    },
  },
  "amo-group": {
    en: {
      title: "Amo Group — corporate site for a multi-brand holding.",
      duration: "6 weeks",
      services: ["Web platform", "UI/UX"],
      outcome:
        "A corporate identity site that introduces the holding, its sub-brands, and how to reach the right team.",
      metrics: [
        { value: "Multi-brand", label: "structure" },
        { value: "Fully custom", label: "front-end" },
        { value: "Live", label: "amogroup.az" },
      ],
      body: {
        context:
          "Amo Group needed a single corporate site that could speak to investors, partners, and customers — while still pointing each audience to the right sub-brand.",
        approach:
          "We mapped the holding's structure first, then designed a page system that lets each sub-brand have its own surface without losing the parent identity.",
        solution:
          "A clean, content-driven corporate site with sections for the group, sub-brands, news, and contact — built from scratch on a modern stack.",
        outcome:
          "Amo Group now has a single, credible online home that scales as more sub-brands and projects join the holding.",
      },
    },
    az: {
      title: "Amo Group — çox brendli holdinq üçün korporativ sayt.",
      duration: "6 həftə",
      services: ["Veb platforma", "UI/UX"],
      outcome:
        "Holdinqi, alt brendlərini və düzgün komandaya necə çatılacağını təqdim edən korporativ sayt.",
      metrics: [
        { value: "Çox brendli", label: "struktur" },
        { value: "Tam fərdi", label: "front-end" },
        { value: "Canlı", label: "amogroup.az" },
      ],
      body: {
        context:
          "Amo Group-un investorlara, partnyorlara və müştərilərə eyni anda müraciət edə bilən — və hər auditoriyanı düzgün alt brendə yönəldən vahid korporativ sayta ehtiyacı var idi.",
        approach:
          "Əvvəlcə holdinqin strukturunu xəritələndirdik, sonra hər alt brendin ana identifikasiyanı itirmədən öz səthinə malik olmasına imkan verən səhifə sistemi dizayn etdik.",
        solution:
          "Qrup, alt brendlər, xəbərlər və əlaqə bölmələri olan, müasir stekdə sıfırdan qurulmuş təmiz, kontent əsaslı korporativ sayt.",
        outcome:
          "Amo Group indi holdinqə daha çox alt brend və layihə qoşulduqca miqyaslanan vahid və etibarlı onlayn evə sahibdir.",
      },
    },
  },
  "amo-fresh": {
    en: {
      title: "Amo Fresh — corporate site for the fresh-products line.",
      duration: "5 weeks",
      services: ["Web platform", "UI/UX"],
      outcome:
        "A product-led corporate site that introduces Amo Fresh, its categories, and its standards to partners.",
      metrics: [
        { value: "Product-led", label: "layout" },
        { value: "Custom", label: "front-end" },
        { value: "Live", label: "amofresh.az" },
      ],
      body: {
        context:
          "Amo Fresh wanted a dedicated corporate site that puts its product range front and centre — without getting lost inside the parent holding's website.",
        approach:
          "We focused the design on the products themselves: clear category surfaces, strong imagery, and short copy that buyers can scan quickly.",
        solution:
          "A standalone corporate site with category pages, an about section, and contact paths — implemented from scratch and tuned for fast loads.",
        outcome:
          "Amo Fresh has its own digital footprint that mirrors its position in the market and gives buyers a clean entry point.",
      },
    },
    az: {
      title: "Amo Fresh — təzə məhsullar xətti üçün korporativ sayt.",
      duration: "5 həftə",
      services: ["Veb platforma", "UI/UX"],
      outcome:
        "Amo Fresh-i, kateqoriyalarını və standartlarını partnyorlara təqdim edən məhsul-mərkəzli korporativ sayt.",
      metrics: [
        { value: "Məhsul-mərkəzli", label: "düzən" },
        { value: "Fərdi", label: "front-end" },
        { value: "Canlı", label: "amofresh.az" },
      ],
      body: {
        context:
          "Amo Fresh məhsul çeşidini ön plana çıxaran xüsusi korporativ sayt istəyirdi — ana holdinqin saytı içində itməyən.",
        approach:
          "Dizaynı məhsulların özünə yönəltdik: aydın kateqoriya səthləri, güclü görüntülər və alıcıların tez nəzər sala biləcəyi qısa mətn.",
        solution:
          "Kateqoriya səhifələri, haqqımızda bölməsi və əlaqə yolları olan müstəqil korporativ sayt — sıfırdan icra olunub və sürətli yüklənmə üçün tənzimlənib.",
        outcome:
          "Amo Fresh bazardakı mövqeyini əks etdirən və alıcılara təmiz giriş nöqtəsi verən öz rəqəmsal izinə sahibdir.",
      },
    },
  },
  "zn-group": {
    en: {
      title: "ZN Group — a corporate site shipped end-to-end.",
      duration: "4 weeks",
      services: ["Web platform", "UI/UX"],
      outcome:
        "A focused corporate site covering services, projects, and contact — designed and engineered from a blank page.",
      metrics: [
        { value: "From scratch", label: "design + build" },
        { value: "Responsive", label: "every breakpoint" },
        { value: "Live", label: "zngroup.vercel.app" },
      ],
      body: {
        context:
          "ZN Group needed a no-template corporate site that reflected the company's positioning and could be extended over time.",
        approach:
          "We started from the brand and worked outwards — pages, sections, and components were all designed before a single line of code.",
        solution:
          "A custom-built site covering services, projects, and contact, deployed on a modern hosting stack with fast global delivery.",
        outcome:
          "ZN Group has a credible web presence ready to support sales conversations and future content updates.",
      },
    },
    az: {
      title: "ZN Group — başdan sona təhvil verilmiş korporativ sayt.",
      duration: "4 həftə",
      services: ["Veb platforma", "UI/UX"],
      outcome:
        "Xidmətləri, layihələri və əlaqəni əhatə edən fokuslanmış korporativ sayt — boş səhifədən dizayn olunub və qurulub.",
      metrics: [
        { value: "Sıfırdan", label: "dizayn + quruluş" },
        { value: "Uyğunlaşan", label: "hər breakpoint" },
        { value: "Canlı", label: "zngroup.vercel.app" },
      ],
      body: {
        context:
          "ZN Group şirkətin mövqeyini əks etdirən və zamanla genişləndirilə bilən şablonsuz korporativ sayta ehtiyac duyurdu.",
        approach:
          "Brenddən başladıq və xaricə doğru işlədik — səhifələr, bölmələr və komponentlərin hamısı bir sətir kod yazılmadan əvvəl dizayn olundu.",
        solution:
          "Xidmətləri, layihələri və əlaqəni əhatə edən, sürətli qlobal çatdırılma ilə müasir hosting stekdə deploy olunan fərdi qurulmuş sayt.",
        outcome:
          "ZN Group satış söhbətlərini və gələcək kontent yeniləmələrini dəstəkləməyə hazır etibarlı veb mövcudluğa sahibdir.",
      },
    },
  },
  "log-academy": {
    en: {
      title: "Log Academy — corporate site for an education brand.",
      duration: "6 weeks",
      services: ["Web platform", "UI/UX"],
      outcome:
        "A corporate site that explains Log Academy's programmes and converts visitors into enrolled students.",
      metrics: [
        { value: "Programmes", label: "fully detailed" },
        { value: "Enrolment", label: "flow" },
        { value: "Live", label: "logacademy.az" },
      ],
      body: {
        context:
          "Log Academy needed a website that did two jobs at once: explain its programmes clearly and move interested students into an enrolment flow.",
        approach:
          "We split the IA into a marketing layer (who we are, what we teach) and a conversion layer (programmes, apply, contact) — each with its own job to do.",
        solution:
          "A custom-built corporate site with detailed programme pages, an enrolment flow, and content surfaces the team can keep updated.",
        outcome:
          "Log Academy now has a working pipeline from first visit to enrolment, with room to add more programmes as the academy grows.",
      },
    },
    az: {
      title: "Log Academy — təhsil brendi üçün korporativ sayt.",
      duration: "6 həftə",
      services: ["Veb platforma", "UI/UX"],
      outcome:
        "Log Academy proqramlarını izah edən və ziyarətçiləri qeydiyyatdan keçmiş tələbələrə çevirən korporativ sayt.",
      metrics: [
        { value: "Proqramlar", label: "tam detallı" },
        { value: "Qeydiyyat", label: "axını" },
        { value: "Canlı", label: "logacademy.az" },
      ],
      body: {
        context:
          "Log Academy eyni anda iki iş görən bir vebsayt istəyirdi: proqramlarını aydın izah etmək və maraqlanan tələbələri qeydiyyat axınına yönəltmək.",
        approach:
          "İnformasiya arxitekturasını marketinq qatına (biz kimik, nə öyrədirik) və konversiya qatına (proqramlar, müraciət, əlaqə) ayırdıq — hər birinin öz işi var.",
        solution:
          "Ətraflı proqram səhifələri, qeydiyyat axını və komandanın yeniləyə biləcəyi kontent səthləri olan fərdi qurulmuş korporativ sayt.",
        outcome:
          "Log Academy indi ilk ziyarətdən qeydiyyata qədər işləyən pipeline-a sahibdir və akademiya böyüdükcə daha çox proqram əlavə etmək üçün yer var.",
      },
    },
  },
  "gstone-gallery": {
    en: {
      title: "GStone Gallery — corporate site for a stone gallery.",
      duration: "4 weeks",
      services: ["Web platform", "UI/UX"],
      outcome:
        "A visually focused corporate site that showcases stone collections and lets clients reach out for projects.",
      metrics: [
        { value: "Gallery-first", label: "layout" },
        { value: "Custom", label: "front-end" },
        { value: "Live", label: "gstonegallery.az" },
      ],
      body: {
        context:
          "GStone Gallery sells through visuals — the previous setup didn't do the material justice and made it hard to discover specific collections.",
        approach:
          "We rebuilt the site around the imagery: large, fast-loading visuals, clean collection structure, and a short path to contact.",
        solution:
          "A custom corporate site with collection pages, about, and contact — engineered to keep the focus on the stone itself.",
        outcome:
          "Clients now reach GStone Gallery through a site that matches the quality of the product on offer.",
      },
    },
    az: {
      title: "GStone Gallery — daş qalereyası üçün korporativ sayt.",
      duration: "4 həftə",
      services: ["Veb platforma", "UI/UX"],
      outcome:
        "Daş kolleksiyalarını nümayiş etdirən və müştərilərə layihələr üçün əlaqə imkanı verən vizual fokuslu korporativ sayt.",
      metrics: [
        { value: "Qalereya-mərkəzli", label: "düzən" },
        { value: "Fərdi", label: "front-end" },
        { value: "Canlı", label: "gstonegallery.az" },
      ],
      body: {
        context:
          "GStone Gallery vizuallar vasitəsilə satır — əvvəlki quruluş materialı haqqını vermirdi və xüsusi kolleksiyaları tapmağı çətinləşdirirdi.",
        approach:
          "Saytı görüntülər ətrafında yenidən qurduq: böyük, sürətli yüklənən vizuallar, təmiz kolleksiya strukturu və əlaqəyə qısa yol.",
        solution:
          "Kolleksiya səhifələri, haqqımızda və əlaqə ilə fərdi korporativ sayt — diqqəti daşın özündə saxlamaq üçün qurulub.",
        outcome:
          "Müştərilər indi GStone Gallery-ə təklif olunan məhsulun keyfiyyətinə uyğun sayt vasitəsilə çatır.",
      },
    },
  },
  lubristar: {
    en: {
      title: "Lubristar — corporate site for a lubricants brand.",
      duration: "5 weeks",
      services: ["Web platform", "UI/UX"],
      outcome:
        "A corporate site presenting Lubristar's product range, B2B positioning, and contact paths.",
      metrics: [
        { value: "Product range", label: "covered" },
        { value: "B2B-ready", label: "contact paths" },
        { value: "Live", label: "lubristar.az" },
      ],
      body: {
        context:
          "Lubristar needed a serious corporate site that positions the brand for B2B buyers and distributors, not just end-customers.",
        approach:
          "We designed for credibility — clear product range, specifications, and contact paths that make it easy for procurement teams to take the next step.",
        solution:
          "A from-scratch corporate site with product categories, an about section, and dedicated B2B contact flows.",
        outcome:
          "Lubristar has a B2B-ready digital presence that supports its sales process and brand positioning.",
      },
    },
    az: {
      title: "Lubristar — yağlayıcı brend üçün korporativ sayt.",
      duration: "5 həftə",
      services: ["Veb platforma", "UI/UX"],
      outcome:
        "Lubristar-ın məhsul çeşidini, B2B mövqeyini və əlaqə yollarını təqdim edən korporativ sayt.",
      metrics: [
        { value: "Məhsul çeşidi", label: "əhatəli" },
        { value: "B2B hazır", label: "əlaqə yolları" },
        { value: "Canlı", label: "lubristar.az" },
      ],
      body: {
        context:
          "Lubristar-ın brendi yalnız son müştərilər üçün deyil, B2B alıcıları və distribyutorlar üçün mövqeləndirən ciddi korporativ sayta ehtiyacı var idi.",
        approach:
          "Etibarlılıq üçün dizayn etdik — aydın məhsul çeşidi, spesifikasiyalar və satınalma komandalarının növbəti addımı atmasını asanlaşdıran əlaqə yolları.",
        solution:
          "Məhsul kateqoriyaları, haqqımızda bölməsi və xüsusi B2B əlaqə axınları olan sıfırdan korporativ sayt.",
        outcome:
          "Lubristar satış prosesini və brend mövqeyini dəstəkləyən B2B-hazır rəqəmsal mövcudluğa sahibdir.",
      },
    },
  },
  "play-10": {
    en: {
      title: "Play 10 — mobile app shipped on iOS and Android.",
      duration: "4 months",
      services: ["Mobile app", "UI/UX"],
      outcome:
        "A cross-platform mobile app built from scratch and shipped to both the App Store and Google Play.",
      metrics: [
        { value: "iOS + Android", label: "shipped" },
        { value: "From scratch", label: "design + build" },
        { value: "Live", label: "in both stores" },
      ],
      body: {
        context:
          "Play 10 needed a mobile app delivered end-to-end — design, development, and store submission — without piecing together separate vendors.",
        approach:
          "We owned the full stack: product design, native experience, API integration, and the App Store / Play Store submission process.",
        solution:
          "A cross-platform mobile app, designed and developed from the ground up, released on both iOS and Android.",
        outcome:
          "Play 10 is live in both stores. Users can download, install, and use the app with the same experience on either platform.",
      },
    },
    az: {
      title: "Play 10 — iOS və Android üçün buraxılmış mobil tətbiq.",
      duration: "4 ay",
      services: ["Mobil tətbiq", "UI/UX"],
      outcome:
        "Sıfırdan qurulmuş və həm App Store-da, həm də Google Play-də buraxılmış çoxplatformalı mobil tətbiq.",
      metrics: [
        { value: "iOS + Android", label: "buraxılıb" },
        { value: "Sıfırdan", label: "dizayn + quruluş" },
        { value: "Canlı", label: "hər iki mağazada" },
      ],
      body: {
        context:
          "Play 10 başdan sona təhvil verilmiş mobil tətbiqə ehtiyac duyurdu — dizayn, inkişaf və mağazaya təqdimat — fərqli təchizatçıları birləşdirmədən.",
        approach:
          "Bütün stekə sahib idik: məhsul dizaynı, native təcrübə, API inteqrasiyası və App Store / Play Store təqdim prosesi.",
        solution:
          "Sıfırdan dizayn edilmiş və inkişaf etdirilmiş, həm iOS-da, həm də Android-də buraxılmış çoxplatformalı mobil tətbiq.",
        outcome:
          "Play 10 hər iki mağazada canlıdır. İstifadəçilər tətbiqi yükləyə, quraşdıra və hər iki platformada eyni təcrübə ilə istifadə edə bilərlər.",
      },
    },
  },
};

const order = [
  "monopak",
  "amo-group",
  "amo-fresh",
  "zn-group",
  "log-academy",
  "gstone-gallery",
  "lubristar",
  "play-10",
];

export function getCases(lang: Locale): CaseStudy[] {
  return order.map((slug) => {
    const base = baseData.find((b) => b.slug === slug)!;
    const loc = localized[slug][lang];
    return {
      slug: base.slug,
      title: loc.title,
      client: base.client,
      cover: base.cover,
      coverWidth: base.coverWidth,
      coverHeight: base.coverHeight,
      sector: base.sector,
      sectorLabel: sectorLabels[base.sector][lang],
      year: base.year,
      duration: loc.duration,
      services: loc.services,
      outcome: loc.outcome,
      url: base.url,
      links: base.links,
      metrics: loc.metrics,
      body: loc.body,
      quote: loc.quote,
      featured: base.featured,
    };
  });
}

export function getCaseSlugs(): string[] {
  return order;
}
