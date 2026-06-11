import type { Locale } from "./i18n";

export interface Dictionary {
  nav: {
    work: string;
    services: string;
    about: string;
    startProject: string;
    switchLanguage: string;
    openMenu: string;
    closeMenu: string;
    home: string;
  };
  footer: {
    tagline: string;
    location: string;
    navigation: string;
    journal: string;
    contact: string;
    connect: string;
    newsletter: string;
    newsletterCopy: string;
    emailLabel: string;
    emailPlaceholder: string;
    subscribe: string;
    legal: string;
    privacy: string;
    terms: string;
    copyright: (year: number) => string;
  };
  hero: {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  featuredWork: {
    title: string;
    viewAll: (n: number) => string;
  };
  caseCard: {
    visitLiveSite: string;
    readCaseStudy: string;
    visitShort: string;
  };
  processTimeline: {
    title: string;
  };
  faq: {
    title1: string;
    title2: string;
    description: string;
  };
  finalCta: {
    title: string;
    cta: string;
    contacts: {
      instagram: string;
      phone: string;
      location: string;
      locationValue: string;
    };
  };
  servicesPage: {
    title: string;
    subtitle: string;
    whatsIncluded: string;
    relatedWork: string;
    startWithService: string;
  };
  servicesGrid: {
    title: string;
    seeRelated: string;
  };
  workPage: {
    title: string;
    subtitle: string;
    filters: {
      all: string;
      web: string;
      mobile: string;
      ecommerce: string;
      corporate: string;
    };
    filterLabel: string;
    visit: string;
    empty: string;
  };
  caseStudyPage: {
    visitLiveSite: string;
    metaLabels: {
      client: string;
      sector: string;
      year: string;
      services: string;
      duration: string;
      role: string;
    };
    role: string;
    context: { eyebrow: string; title: string };
    approach: { eyebrow: string; title: string };
    solution: { eyebrow: string; title: string };
    outcome: { eyebrow: string; title: string };
    quote: string;
    stack: string;
    nextCase: string;
    readCaseStudy: string;
    detailAlt: (title: string, n: number) => string;
  };
  aboutPage: {
    title: string;
    intro: string[];
    holdToTitle: string;
    locationTitle: string;
    address: string;
    addressValue: string;
    coordinates: string;
    hours: string;
    hoursValue: string;
    studioAlt: string;
  };
  contactPage: {
    title: string;
    subtitle: string;
    directContact: string;
    beforeYouAsk: string;
    labels: {
      email: string;
      phone: string;
      linkedin: string;
    };
  };
  contactForm: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    company: string;
    companyPlaceholder: string;
    projectType: string;
    selectDiscipline: string;
    budget: string;
    selectBudget: string;
    budgetOptions: {
      under25: string;
      r25to50: string;
      r50to100: string;
      over100: string;
    };
    disciplineOptions: {
      brand: string;
      web: string;
      growth: string;
      ai: string;
      other: string;
    };
    message: string;
    messagePlaceholder: string;
    submit: string;
    receivedLabel: string;
    receivedTitle: string;
    receivedBody: string;
  };
  notFound: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
  };
  miniFaqs: {
    whatHappens: { question: string; answer: string };
    responseTime: { question: string; answer: string };
    nda: { question: string; answer: string };
  };
  metadata: {
    siteTitleDefault: string;
    siteTitleTemplate: string;
    siteDescription: string;
    home: { description: string; ogTitle: string };
    work: { title: string; description: string };
    services: { title: string; description: string };
    about: { title: string; description: string; ogDescription: string };
    contact: {
      title: string;
      description: string;
      ogDescription: string;
    };
    notFound: { title: string; description: string };
  };
}

const az: Dictionary = {
  nav: {
    work: "İşlər",
    services: "Xidmətlər",
    about: "Haqqımızda",
    startProject: "Layihəyə başla",
    switchLanguage: "Dili dəyiş",
    openMenu: "Menyunu aç",
    closeMenu: "Menyunu bağla",
    home: "Compound — Ana səhifə",
  },
  footer: {
    tagline: "Orta ölçülü bizneslər üçün böyümə infrastrukturu.",
    location: "Bakı, Azərbaycan",
    navigation: "Naviqasiya",
    journal: "Jurnal",
    contact: "Əlaqə",
    connect: "Əlaqə kanalları",
    newsletter: "Bülleten",
    newsletterCopy: "Böyümə infrastrukturu haqqında rüblük qeydlər.",
    emailLabel: "Email ünvanı",
    emailPlaceholder: "siz@şirkət.com",
    subscribe: "Abunə ol",
    legal: "Hüquqi",
    privacy: "Məxfilik",
    terms: "Şərtlər",
    copyright: (year) => `© ${year} Compound. Bütün hüquqlar qorunur.`,
  },
  hero: {
    titleLine1: "Böyüməyə",
    titleLine2: "kökləndi.",
    subtitle:
      "Orta ölçülü şirkətlərin proqnozlaşdırıla bilən şəkildə böyümək üçün istifadə etdiyi sistemləri qururuq. Kampaniyalar deyil. Redizaynlar deyil. İnfrastruktur.",
    primaryCta: "İşlərimizi gör",
    secondaryCta: "Layihəyə başla",
  },
  featuredWork: {
    title: "Böyüməyə töhfə verən işlər.",
    viewAll: (n) => `Bütün işlərə bax (${n})`,
  },
  caseCard: {
    visitLiveSite: "Canlı sayta keç",
    readCaseStudy: "Layihəni oxu",
    visitShort: "Ziyarət et ↗",
  },
  processTimeline: {
    title: "Layihə necə böyüyür.",
  },
  faq: {
    title1: "Başlamazdan öncə",
    title2: "suallar.",
    description:
      "Hər ilk söhbətdə gündəmə gələn suallar. Başqa bir şey olsa, birbaşa soruşun.",
  },
  finalCta: {
    title: "Böyüməyə hazırsan?",
    cta: "Layihəyə başla",
    contacts: {
      instagram: "Instagram",
      phone: "Telefon",
      location: "Ünvan",
      locationValue: "Bakı, Azərbaycan",
    },
  },
  servicesPage: {
    title: "Xidmətlər",
    subtitle: "Dörd sahə. Bir nəticə.",
    whatsIncluded: "Daxildir",
    relatedWork: "Əlaqəli işlər",
    startWithService: "Bu xidmətlə başla",
  },
  servicesGrid: {
    title: "Nə qururuq.",
    seeRelated: "Əlaqəli işə bax",
  },
  workPage: {
    title: "İşlər",
    subtitle: "Son 3 ildən seçilmiş layihələr.",
    filters: {
      all: "Hamısı",
      web: "Veb platformalar",
      mobile: "Mobil tətbiqlər",
      ecommerce: "E-ticarət",
      corporate: "Korporativ",
    },
    filterLabel: "Layihələri süz",
    visit: "Ziyarət et ↗",
    empty: "Bu kateqoriyada hələ layihə yoxdur.",
  },
  caseStudyPage: {
    visitLiveSite: "Canlı sayta keç",
    metaLabels: {
      client: "Müştəri",
      sector: "Sektor",
      year: "İl",
      services: "Xidmətlər",
      duration: "Müddət",
      role: "Rol",
    },
    role: "Aparıcı studiya",
    context: { eyebrow: "Kontekst", title: "Layihə hardan başladı." },
    approach: { eyebrow: "Yanaşma", title: "Necə düşündük." },
    solution: { eyebrow: "Həll", title: "Nə qurduq." },
    outcome: { eyebrow: "Nəticə", title: "Nə dəyişdi." },
    quote: "Sitat",
    stack: "Stek",
    nextCase: "Növbəti layihə",
    readCaseStudy: "Layihəni oxu",
    detailAlt: (title, n) => `${title} — detal ${n}`,
  },
  aboutPage: {
    title: "Orta ölçülü şirkətlərin böyüdüyü əməliyyat sistemlərini qururuq.",
    intro: [
      "Əksər agentlik işləri köhnəlir. Brend iki rüb sərt qalır, sayt ilk redizaynadək sürətli işləyir, analitika növbəti yenidən təşkilatlanmaya qədər dəqiq qalır. Üçüncü ilə komanda artıq qoyduğu pulu yenidən qurmaq üçün ödəyir.",
      "Compound mövcuddur, çünki orta ölçülü şirkətlər bu dövrü götürə bilməz. Onlar frilanser mərhələsindən böyüyüb, network-agentlik mərhələsini istəmirlər. Brendi dizayn edən, platformanı quran və böyümə qatını bir sistem kimi birləşdirən kiçik komandaya ehtiyacları var — və sonra bu sistemi onlara təhvil verən komandaya.",
      "Bizim işimiz növbəti üç ilin böyüməsinin altındakı əməliyyat sistemidir, növbəti rübü dolduran kampaniya deyil. Belə bir iş görmək istəyirsənsə, biz sənin studyandayıq.",
    ],
    holdToTitle: "Tutduqlarımız.",
    locationTitle: "Bakıda yerləşirik. Bölgədəki komandalarla işləyirik.",
    address: "Ünvan",
    addressValue: "28 May küçəsi, Bakı AZ1000\nAzərbaycan",
    coordinates: "Koordinatlar",
    hours: "İş saatları",
    hoursValue: "Bazar ertəsi — Cümə, 10:00 — 19:00 AZT",
    studioAlt: "Bakıdakı Compound studiyası",
  },
  contactPage: {
    title: "Layihəyə başla",
    subtitle: "Nə qurduğunu bizə danış.",
    directContact: "Birbaşa əlaqə",
    beforeYouAsk: "Sormazdan öncə",
    labels: {
      email: "Email",
      phone: "Telefon",
      linkedin: "LinkedIn",
    },
  },
  contactForm: {
    name: "Ad",
    namePlaceholder: "Adınız",
    email: "Email",
    emailPlaceholder: "siz@şirkət.com",
    company: "Şirkət",
    companyPlaceholder: "İşlədiyiniz yer",
    projectType: "Layihə növü",
    selectDiscipline: "Sahə seç",
    budget: "Büdcə aralığı",
    selectBudget: "Aralıq seç",
    budgetOptions: {
      under25: "25,000 AZN-dən aşağı",
      r25to50: "25,000 — 50,000 AZN",
      r50to100: "50,000 — 100,000 AZN",
      over100: "100,000 AZN və yuxarı",
    },
    disciplineOptions: {
      brand: "Brend və identifikasiya",
      web: "Veb platforma",
      growth: "Böyümə mühəndisliyi",
      ai: "AI və avtomatlaşdırma",
      other: "Başqa bir şey",
    },
    message: "Mesaj",
    messagePlaceholder: "Nə qurursan və hansı maneə var?",
    submit: "Layihəyə başla",
    receivedLabel: "Alındı",
    receivedTitle: "Təşəkkür edirik — iki iş günü ərzində geri qayıdacağıq.",
    receivedBody:
      "Təsisçi mesajını oxuyacaq və birbaşa cavab verəcək. Layihəyə uyğun gəlsək, onu konkretləşdirmək üçün 30 dəqiqəlik söhbət təyin edəcəyik.",
  },
  notFound: {
    eyebrow: "Xəta 404",
    title: "Səhifə tapılmadı.",
    body: "Axtardığın səhifə daşınıb və ya heç vaxt mövcud olmayıb.",
    cta: "Ana səhifəyə qayıt",
  },
  miniFaqs: {
    whatHappens: {
      question: "Göndərdikdən sonra nə olur?",
      answer:
        "Təsisçi mesajını oxuyacaq və iki iş günü ərzində cavab verəcək. Uyğun gəlsək, layihəni konkretləşdirmək və sabit təklif razılaşdırmaq üçün 30 dəqiqəlik söhbət təyin edəcəyik — saatlıq qiymət yox, gözlənilməz hesab yox.",
    },
    responseTime: {
      question: "Nə qədər tez cavab verirsiniz?",
      answer:
        "Hər müraciətə iki iş günü ərzində cavab veririk, adətən daha tez. Sabit həcmli layihələr üçün təkliflər söhbətdən sonra beş-yeddi iş günü çəkir.",
    },
    nda: {
      question: "NDA imzalayırsınız?",
      answer:
        "Bəli — kommersial detalların paylaşıldığı ilk söhbətdən əvvəl qarşılıqlı NDA standartdır. On dəqiqədə imzalanan bir səhifəlik şablonumuz var, və ya sizinkini imzalayarıq.",
    },
  },
  metadata: {
    siteTitleDefault: "Compound — Böyümə infrastrukturu",
    siteTitleTemplate: "%s · Compound",
    siteDescription:
      "Orta ölçülü şirkətlərin proqnozlaşdırıla bilən şəkildə böyümək üçün istifadə etdiyi sistemləri qururuq.",
    home: {
      description:
        "Orta ölçülü bizneslər üçün böyümə infrastrukturu. Böyüməyə töhfə verən sistemləri qururuq.",
      ogTitle: "Compound — Böyümə infrastrukturu",
    },
    work: {
      title: "İşlər",
      description:
        "Son 3 ildən seçilmiş layihələr — brend, veb platformalar, böyümə və AI avtomatlaşdırması üzrə layihə nümunələri.",
    },
    services: {
      title: "Xidmətlər",
      description:
        "Dörd sahə — brend, veb, böyümə və AI — orta ölçülü şirkətlər üçün vahid əməliyyat sistemi kimi qurulmuş.",
    },
    about: {
      title: "Haqqımızda",
      description:
        "Compound orta ölçülü şirkətlərin böyüdüyü əməliyyat sistemlərini quran studiyadır — brend, veb, böyümə və AI bir disiplin kimi.",
      ogDescription:
        "Compound orta ölçülü şirkətlərin böyüdüyü əməliyyat sistemlərini quran studiyadır.",
    },
    contact: {
      title: "Layihəyə başla",
      description:
        "Nə qurduğunu bizə danış. İki iş günü ərzində cavab veririk və rübdə dörd-altı yeni müştəri ilə işləyirik.",
      ogDescription:
        "Nə qurduğunu bizə danış. Rübdə dörd-altı yeni müştəri ilə işləyirik.",
    },
    notFound: {
      title: "Səhifə tapılmadı",
      description:
        "Axtardığın səhifə daşınıb və ya heç vaxt mövcud olmayıb. Ana səhifəyə qayıt.",
    },
  },
};

const en: Dictionary = {
  nav: {
    work: "Work",
    services: "Services",
    about: "About",
    startProject: "Start a project",
    switchLanguage: "Switch language",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    home: "Compound — Home",
  },
  footer: {
    tagline: "Growth infrastructure for mid-size businesses.",
    location: "Baku, Azerbaijan",
    navigation: "Navigation",
    journal: "Journal",
    contact: "Contact",
    connect: "Connect",
    newsletter: "Newsletter",
    newsletterCopy: "Quarterly notes on growth infrastructure.",
    emailLabel: "Email address",
    emailPlaceholder: "you@company.com",
    subscribe: "Subscribe",
    legal: "Legal",
    privacy: "Privacy",
    terms: "Terms",
    copyright: (year) => `© ${year} Compound. All rights reserved.`,
  },
  hero: {
    titleLine1: "Built to",
    titleLine2: "compound.",
    subtitle:
      "We build the systems that mid-size companies use to grow predictably. Not campaigns. Not redesigns. Infrastructure.",
    primaryCta: "See our work",
    secondaryCta: "Start a project",
  },
  featuredWork: {
    title: "Work that compounded.",
    viewAll: (n) => `View all work (${n})`,
  },
  caseCard: {
    visitLiveSite: "Visit live site",
    readCaseStudy: "Read case study",
    visitShort: "Visit ↗",
  },
  processTimeline: {
    title: "How a project compounds.",
  },
  faq: {
    title1: "Questions before",
    title2: "we start.",
    description:
      "The ones that come up on every first call. Anything else, ask us directly.",
  },
  finalCta: {
    title: "Built to compound?",
    cta: "Start a project",
    contacts: {
      instagram: "Instagram",
      phone: "Phone",
      location: "Location",
      locationValue: "Baku, Azerbaijan",
    },
  },
  servicesPage: {
    title: "Services",
    subtitle: "Four disciplines. One outcome.",
    whatsIncluded: "What's included",
    relatedWork: "Related work",
    startWithService: "Start with this service",
  },
  servicesGrid: {
    title: "What we build.",
    seeRelated: "See related work",
  },
  workPage: {
    title: "Work",
    subtitle: "Selected projects from the last 3 years.",
    filters: {
      all: "All",
      web: "Web Platforms",
      mobile: "Mobile Apps",
      ecommerce: "E-commerce",
      corporate: "Corporate",
    },
    filterLabel: "Filter projects",
    visit: "Visit ↗",
    empty: "No projects in this category yet.",
  },
  caseStudyPage: {
    visitLiveSite: "Visit live site",
    metaLabels: {
      client: "Client",
      sector: "Sector",
      year: "Year",
      services: "Services",
      duration: "Duration",
      role: "Role",
    },
    role: "Lead studio",
    context: { eyebrow: "Context", title: "Where the project started." },
    approach: { eyebrow: "Approach", title: "How we thought about it." },
    solution: { eyebrow: "Solution", title: "What we built." },
    outcome: { eyebrow: "Outcome", title: "What it changed." },
    quote: "Quote",
    stack: "Stack",
    nextCase: "Next case",
    readCaseStudy: "Read case study",
    detailAlt: (title, n) => `${title} — detail ${n}`,
  },
  aboutPage: {
    title: "We build the operating systems mid-size companies grow on.",
    intro: [
      "Most agency work decays. The brand stays sharp for two quarters, the site stays fast until the first redesign, the analytics stay accurate until the next reorg. By year three, the team is paying to rebuild what they paid to ship.",
      "Compound exists because mid-size companies cannot afford that cycle. They have outgrown the freelancer phase and they do not want the network-agency phase. They need a small group of people who will design the brand, build the platform, and wire the growth layer as one continuous system — and then hand it over.",
      "Our work is the operating system underneath the next three years of growth, not the campaign that fills the next quarter. If that is the kind of work you are trying to do, we are the studio for it.",
    ],
    holdToTitle: "What we hold to.",
    locationTitle: "Based in Baku. Working with teams across the region.",
    address: "Address",
    addressValue: "28 May Street, Baku AZ1000\nAzerbaijan",
    coordinates: "Coordinates",
    hours: "Hours",
    hoursValue: "Monday — Friday, 10:00 — 19:00 AZT",
    studioAlt: "Compound studio in Baku",
  },
  contactPage: {
    title: "Start a project",
    subtitle: "Tell us what you're building.",
    directContact: "Direct contact",
    beforeYouAsk: "Before you ask",
    labels: {
      email: "Email",
      phone: "Phone",
      linkedin: "LinkedIn",
    },
  },
  contactForm: {
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "you@company.com",
    company: "Company",
    companyPlaceholder: "Where you work",
    projectType: "Project type",
    selectDiscipline: "Select a discipline",
    budget: "Budget range",
    selectBudget: "Select a range",
    budgetOptions: {
      under25: "Under 25,000 AZN",
      r25to50: "25,000 — 50,000 AZN",
      r50to100: "50,000 — 100,000 AZN",
      over100: "100,000 AZN and up",
    },
    disciplineOptions: {
      brand: "Brand & Identity",
      web: "Web Platform",
      growth: "Growth Engineering",
      ai: "AI & Automation",
      other: "Something else",
    },
    message: "Message",
    messagePlaceholder: "What are you building, and what's in the way?",
    submit: "Start a project",
    receivedLabel: "Received",
    receivedTitle: "Thanks — we'll be in touch within two business days.",
    receivedBody:
      "A founder will read your message and reply directly. If we're a fit for the project, we'll book a 30-minute call to scope it.",
  },
  notFound: {
    eyebrow: "Error 404",
    title: "Page not found.",
    body: "The page you're looking for has moved or never existed.",
    cta: "Back to home",
  },
  miniFaqs: {
    whatHappens: {
      question: "What happens after I submit?",
      answer:
        "A founder reads your message and replies within two business days. If we look like a fit, we book a 30-minute call to scope the project and agree on a fixed proposal — no hourly rates, no surprise invoices.",
    },
    responseTime: {
      question: "How quickly do you respond?",
      answer:
        "We reply to every inbound within two business days, usually faster. Quotes for fixed-scope projects take five to seven business days once we've had the scoping call.",
    },
    nda: {
      question: "Do you sign NDAs?",
      answer:
        "Yes — mutual NDAs are standard before a first call where commercial detail is shared. We have a one-page template that takes ten minutes to sign, or we'll sign yours.",
    },
  },
  metadata: {
    siteTitleDefault: "Compound — Growth infrastructure",
    siteTitleTemplate: "%s · Compound",
    siteDescription:
      "We build the systems mid-size companies use to grow predictably.",
    home: {
      description:
        "Growth infrastructure for mid-size businesses. We build the systems that compound.",
      ogTitle: "Compound — Growth infrastructure",
    },
    work: {
      title: "Work",
      description:
        "Selected projects from the last 3 years — case studies in brand, web platforms, growth, and AI automation.",
    },
    services: {
      title: "Services",
      description:
        "Four disciplines — brand, web, growth, and AI — built as one operating system for mid-size companies.",
    },
    about: {
      title: "About",
      description:
        "Compound is a studio that builds the operating systems mid-size companies grow on — brand, web, growth, and AI as one continuous discipline.",
      ogDescription:
        "Compound is a studio that builds the operating systems mid-size companies grow on.",
    },
    contact: {
      title: "Start a project",
      description:
        "Tell us what you're building. We respond within two business days and work with four to six new clients per quarter.",
      ogDescription:
        "Tell us what you're building. We work with four to six new clients per quarter.",
    },
    notFound: {
      title: "Page not found",
      description:
        "The page you're looking for has moved or never existed. Head back to the homepage.",
    },
  },
};

const dictionaries: Record<Locale, Dictionary> = { az, en };

export function getDictionary(lang: Locale): Dictionary {
  return dictionaries[lang];
}
