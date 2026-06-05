import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Hairline } from "@/components/ui/Hairline";
import { Wordmark } from "@/components/brand/Wordmark";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { getDictionary } from "@/lib/dictionaries";
import { localizedPath, type Locale } from "@/lib/i18n";
import { FooterLanguageToggle } from "./FooterLanguageToggle";

interface FooterProps {
  lang: Locale;
}

const linkBase =
  "text-sm text-ink-secondary hover:text-ink transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2";

export function Footer({ lang }: FooterProps) {
  const dict = getDictionary(lang);
  const year = new Date().getFullYear();

  const navLinks = [
    { href: localizedPath(lang, "/work"), label: dict.nav.work },
    { href: localizedPath(lang, "/services"), label: dict.nav.services },
    { href: localizedPath(lang, "/about"), label: dict.nav.about },
    { href: localizedPath(lang, "/journal"), label: dict.footer.journal },
    { href: localizedPath(lang, "/contact"), label: dict.footer.contact },
  ];

  const connectLinks = [
    { href: "mailto:hello@compound.az", label: "hello@compound.az" },
    { href: "https://www.linkedin.com/", label: "LinkedIn" },
    { href: "https://github.com/", label: "GitHub" },
  ];

  const legalLinks = [
    { href: localizedPath(lang, "/privacy"), label: dict.footer.privacy },
    { href: localizedPath(lang, "/terms"), label: dict.footer.terms },
  ];

  return (
    <footer className="border-t border-line bg-bg">
      <Container className="py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="flex flex-col gap-4">
            <Wordmark logoClassName="h-6 w-6" textClassName="text-lg" />
            <p className="text-sm text-ink-secondary max-w-[28ch]">
              {dict.footer.tagline}
            </p>
            <address className="not-italic text-sm text-ink-muted">
              {dict.footer.location}
            </address>
          </div>

          <nav className="flex flex-col gap-3" aria-label={dict.footer.navigation}>
            <Eyebrow>{dict.footer.navigation}</Eyebrow>
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} className={linkBase}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <Eyebrow>{dict.footer.connect}</Eyebrow>
            {connectLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={linkBase}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {item.label}
              </a>
            ))}
          </div>

          <NewsletterForm lang={lang} />
        </div>

        <Hairline className="mt-16" />

        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-xs text-ink-muted">
          <p>{dict.footer.copyright(year)}</p>
          <nav
            aria-label={dict.footer.legal}
            className="flex items-center gap-6 order-last md:order-none"
          >
            {legalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-ink transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <FooterLanguageToggle lang={lang} />
        </div>
      </Container>
    </footer>
  );
}
