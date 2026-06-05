"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Wordmark } from "@/components/brand/Wordmark";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { getDictionary } from "@/lib/dictionaries";
import {
  isLocale,
  localizedPath,
  stripLocaleFromPath,
  type Locale,
} from "@/lib/i18n";

interface NavigationProps {
  lang: Locale;
}

export function Navigation({ lang }: NavigationProps) {
  const dict = getDictionary(lang);
  const pathname = usePathname() ?? "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const nav = [
    { href: localizedPath(lang, "/work"), label: dict.nav.work },
    { href: localizedPath(lang, "/services"), label: dict.nav.services },
    { href: localizedPath(lang, "/about"), label: dict.nav.about },
  ];

  const otherLang: Locale = lang === "az" ? "en" : "az";
  const segments = pathname.split("/").filter(Boolean);
  const restPath = segments.length > 0 && isLocale(segments[0])
    ? stripLocaleFromPath(pathname)
    : pathname;
  const switchHref = localizedPath(otherLang, restPath);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-line"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 h-16 flex items-center justify-between">
        <Link
          href={localizedPath(lang, "/")}
          className="flex items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
          aria-label={dict.nav.home}
        >
          <Wordmark />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink-secondary hover:text-ink transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href={switchHref}
            className="text-xs font-mono uppercase tracking-[0.14em] text-ink-secondary hover:text-ink transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
            aria-label={dict.nav.switchLanguage}
          >
            {otherLang.toUpperCase()}
          </Link>
          <Button href={localizedPath(lang, "/contact")} variant="primary">
            {dict.nav.startProject}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 text-ink rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
          aria-label={dict.nav.openMenu}
          aria-expanded={open}
        >
          <Menu className="w-6 h-6" aria-hidden />
        </button>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 md:hidden bg-inverse-bg text-inverse-ink flex flex-col"
        >
          <div className="mx-auto max-w-[1440px] w-full px-6 md:px-10 h-16 flex items-center justify-between">
            <Link
              href={localizedPath(lang, "/")}
              onClick={() => setOpen(false)}
              className="flex items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inverse-ink focus-visible:ring-offset-2 focus-visible:ring-offset-inverse-bg"
              aria-label={dict.nav.home}
            >
              <Wordmark />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center w-10 h-10 -mr-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inverse-ink focus-visible:ring-offset-2 focus-visible:ring-offset-inverse-bg"
              aria-label={dict.nav.closeMenu}
            >
              <X className="w-6 h-6" aria-hidden />
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center px-6 gap-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-4xl font-medium tracking-[-0.02em] hover:opacity-70 transition-opacity rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inverse-ink focus-visible:ring-offset-2 focus-visible:ring-offset-inverse-bg"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="px-6 pb-10 flex flex-col gap-6">
            <Button
              href={localizedPath(lang, "/contact")}
              variant="inverse"
              className="self-start"
            >
              {dict.nav.startProject}
            </Button>
            <Link
              href={switchHref}
              onClick={() => setOpen(false)}
              className="self-start text-xs font-mono uppercase tracking-[0.14em] text-inverse-ink/70 hover:text-inverse-ink transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inverse-ink focus-visible:ring-offset-2 focus-visible:ring-offset-inverse-bg"
              aria-label={dict.nav.switchLanguage}
            >
              {otherLang.toUpperCase()}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
