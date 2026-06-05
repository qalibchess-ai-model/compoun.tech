import type { Locale } from "@/lib/i18n";

export interface ClientLogo {
  name: string;
  src: string;
}

export interface FeaturedQuote {
  text: string;
}

export const logos: ClientLogo[] = [
  { name: "Northwind", src: "/images/logos/northwind.svg" },
  { name: "Helios Bank", src: "/images/logos/helios.svg" },
  { name: "Atlas Logistics", src: "/images/logos/atlas.svg" },
  { name: "Meridian Health", src: "/images/logos/meridian.svg" },
  { name: "Civic Digital", src: "/images/logos/civic.svg" },
  { name: "Lumen Retail", src: "/images/logos/lumen.svg" },
  { name: "Argo Capital", src: "/images/logos/argo.svg" },
  { name: "Vector Group", src: "/images/logos/vector.svg" },
];

const quotes: Record<Locale, string> = {
  az: "Compound bizim böyümə üçün əməliyyat sistemini qurdu. Dörd ayda lead-to-close dövrümüz 38 gündən 11 günə düşdü.",
  en: "Compound built the operating system for our growth. In four months, our lead-to-close cycle dropped from 38 days to 11.",
};

export function getFeaturedQuote(lang: Locale): FeaturedQuote {
  return { text: quotes[lang] };
}
