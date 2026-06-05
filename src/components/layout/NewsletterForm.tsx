"use client";

import { useState } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

interface NewsletterFormProps {
  lang: Locale;
}

export function NewsletterForm({ lang }: NewsletterFormProps) {
  const dict = getDictionary(lang);
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <Eyebrow>{dict.footer.newsletter}</Eyebrow>
      <p className="text-sm text-ink-secondary">{dict.footer.newsletterCopy}</p>
      <label htmlFor="footer-newsletter" className="sr-only">
        {dict.footer.emailLabel}
      </label>
      <input
        id="footer-newsletter"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={dict.footer.emailPlaceholder}
        className="w-full px-4 py-2.5 text-sm bg-bg border border-line rounded-full placeholder:text-ink-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
      />
      <button
        type="submit"
        className="self-start inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium bg-ink text-bg hover:bg-ink-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
      >
        {dict.footer.subscribe}
      </button>
    </form>
  );
}
