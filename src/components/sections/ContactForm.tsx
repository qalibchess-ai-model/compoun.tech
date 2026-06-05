"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

const fieldClass =
  "w-full bg-transparent border-0 border-b border-line text-base md:text-lg text-ink placeholder:text-ink-muted py-4 focus:outline-none focus:border-ink transition-colors";

const labelClass =
  "font-mono text-xs uppercase tracking-[0.14em] text-ink-muted";

interface ContactFormProps {
  lang: Locale;
}

export function ContactForm({ lang }: ContactFormProps) {
  const dict = getDictionary(lang);
  const [submitted, setSubmitted] = useState(false);

  const projectTypes = [
    { value: "", label: dict.contactForm.selectDiscipline },
    { value: "brand", label: dict.contactForm.disciplineOptions.brand },
    { value: "web", label: dict.contactForm.disciplineOptions.web },
    { value: "growth", label: dict.contactForm.disciplineOptions.growth },
    { value: "ai", label: dict.contactForm.disciplineOptions.ai },
    { value: "other", label: dict.contactForm.disciplineOptions.other },
  ];

  const budgets = [
    { value: "", label: dict.contactForm.selectBudget },
    { value: "<25k", label: dict.contactForm.budgetOptions.under25 },
    { value: "25-50k", label: dict.contactForm.budgetOptions.r25to50 },
    { value: "50-100k", label: dict.contactForm.budgetOptions.r50to100 },
    { value: "100k+", label: dict.contactForm.budgetOptions.over100 },
  ];

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = Object.fromEntries(data.entries());
    console.log("[contact form submission]", payload);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border-t border-ink pt-12">
        <div className={labelClass}>{dict.contactForm.receivedLabel}</div>
        <h2 className="mt-6 text-[clamp(2rem,4vw,3rem)] font-medium tracking-[-0.03em] leading-[1.05] text-ink">
          {dict.contactForm.receivedTitle}
        </h2>
        <p className="mt-6 max-w-xl text-base md:text-lg text-ink-secondary leading-[1.6]">
          {dict.contactForm.receivedBody}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-10" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className={labelClass}>
            {dict.contactForm.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder={dict.contactForm.namePlaceholder}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            {dict.contactForm.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={dict.contactForm.emailPlaceholder}
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className={labelClass}>
          {dict.contactForm.company}
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          placeholder={dict.contactForm.companyPlaceholder}
          className={fieldClass}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="projectType" className={labelClass}>
            {dict.contactForm.projectType}
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            defaultValue=""
            className={fieldClass}
          >
            {projectTypes.map((t) => (
              <option key={t.value} value={t.value} disabled={t.value === ""}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className={labelClass}>
            {dict.contactForm.budget}
          </label>
          <select
            id="budget"
            name="budget"
            required
            defaultValue=""
            className={fieldClass}
          >
            {budgets.map((b) => (
              <option key={b.value} value={b.value} disabled={b.value === ""}>
                {b.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          {dict.contactForm.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={dict.contactForm.messagePlaceholder}
          className={`${fieldClass} resize-none`}
        />
      </div>

      <div className="pt-4">
        <Button arrow>{dict.contactForm.submit}</Button>
      </div>
    </form>
  );
}
