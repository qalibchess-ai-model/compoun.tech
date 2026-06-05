"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/lib/dictionaries";
import {
  isLocale,
  localizedPath,
  stripLocaleFromPath,
  type Locale,
} from "@/lib/i18n";

interface FooterLanguageToggleProps {
  lang: Locale;
}

export function FooterLanguageToggle({ lang }: FooterLanguageToggleProps) {
  const dict = getDictionary(lang);
  const pathname = usePathname() ?? "/";
  const otherLang: Locale = lang === "az" ? "en" : "az";
  const segments = pathname.split("/").filter(Boolean);
  const restPath =
    segments.length > 0 && isLocale(segments[0])
      ? stripLocaleFromPath(pathname)
      : pathname;
  const switchHref = localizedPath(otherLang, restPath);

  return (
    <Link
      href={switchHref}
      className="self-start md:self-auto font-mono uppercase tracking-[0.14em] hover:text-ink transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
      aria-label={dict.nav.switchLanguage}
    >
      {otherLang.toUpperCase()}
    </Link>
  );
}
