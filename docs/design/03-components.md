# Compound — Component Architecture

> Bu fayl Next.js 15 App Router strukturunda hər komponentin yerini, props-larını və əsas implementasiya qaydalarını təsvir edir. Tailwind v4 və TypeScript strict istifadə olunur.

---

## 1. Layihə qovluq strukturu

```
src/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx                 # Homepage /
│   │   ├── work/
│   │   │   ├── page.tsx             # /work
│   │   │   └── [slug]/page.tsx      # /work/[slug]
│   │   ├── services/page.tsx        # /services
│   │   ├── about/page.tsx           # /about
│   │   └── contact/page.tsx         # /contact
│   ├── layout.tsx                   # Root layout (fonts, metadata)
│   ├── globals.css                  # Tailwind v4 + tokens
│   └── not-found.tsx
│
├── components/
│   ├── brand/
│   │   ├── Logomark.tsx
│   │   └── Wordmark.tsx
│   │
│   ├── layout/
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── Container.tsx
│   │   └── Section.tsx
│   │
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Link.tsx                 # Arrow link və sair
│   │   ├── Eyebrow.tsx              # Mono label
│   │   ├── Hairline.tsx
│   │   ├── Accordion.tsx            # Radix UI əsaslı
│   │   └── Tag.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── TrustBar.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── FeaturedWork.tsx
│   │   ├── MetricsGrid.tsx
│   │   ├── ProcessTimeline.tsx
│   │   ├── FAQ.tsx
│   │   └── FinalCTA.tsx
│   │
│   ├── cards/
│   │   ├── ServiceCard.tsx
│   │   ├── CaseStudyCard.tsx
│   │   ├── MetricCard.tsx
│   │   └── ProcessStep.tsx
│   │
│   └── motion/
│       ├── FadeIn.tsx               # Reusable scroll reveal
│       ├── Stagger.tsx              # Children stagger
│       └── CountUp.tsx              # Number animation
│
├── lib/
│   ├── motion.ts                    # Variant exports
│   ├── utils.ts                     # cn() helper və s.
│   ├── metadata.ts                  # SEO helpers
│   └── content/
│       ├── services.ts              # Services data
│       ├── cases.ts                 # Case studies data
│       ├── faqs.ts
│       └── process.ts
│
├── content/                         # MDX case studies (faza 2)
│   └── work/
│       ├── client-1.mdx
│       └── client-2.mdx
│
└── types/
    └── index.ts
```

**Niyə `(marketing)` route group?** Gələcəkdə `(app)` qrupu əlavə edilərsə (məs. internal dashboard), marketing layout-u onlardan ayrılır.

---

## 2. Əsas layout və font setup

```tsx
// app/layout.tsx
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata = {
  title: { default: "Compound — Growth infrastructure", template: "%s · Compound" },
  description: "We build the systems mid-size companies use to grow predictably.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="az" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-bg text-ink antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

---

## 3. Komponent kataloqu — detallı

### 3.1 `<Container>` və `<Section>`

```tsx
// components/layout/Container.tsx
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16", className)}>
      {children}
    </div>
  );
}
```

```tsx
// components/layout/Section.tsx
import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  inverse?: boolean;        // qara background
  tight?: boolean;          // smaller py
  hairline?: boolean;       // border-t
  id?: string;
}

export function Section({
  children,
  className,
  containerClassName,
  inverse = false,
  tight = false,
  hairline = false,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        tight ? "py-16 md:py-20" : "py-24 md:py-32 lg:py-40",
        inverse && "bg-inverse-bg text-inverse-ink",
        hairline && "border-t border-line",
        inverse && hairline && "border-inverse-line",
        className
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
```

---

### 3.2 `<Eyebrow>` — mono label (brand DNA)

```tsx
// components/ui/Eyebrow.tsx
import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  number,
}: {
  children: React.ReactNode;
  className?: string;
  number?: string;
}) {
  return (
    <div
      className={cn(
        "font-mono text-xs uppercase tracking-[0.14em] text-ink-muted",
        className
      )}
    >
      {number && <span className="mr-2">{number} —</span>}
      {children}
    </div>
  );
}
```

İstifadə:
```tsx
<Eyebrow number="02">Services</Eyebrow>
```

---

### 3.3 `<Button>`

```tsx
// components/ui/Button.tsx
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "inverse";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
}

const variants: Record<Variant, string> = {
  primary: "bg-ink text-bg hover:bg-ink-secondary",
  secondary: "bg-bg-muted text-ink hover:bg-line",
  ghost: "bg-transparent text-ink underline underline-offset-4 hover:no-underline",
  inverse: "bg-bg text-ink hover:bg-bg-muted",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  arrow,
  onClick,
}: ButtonProps) {
  const base = cn(
    "inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium",
    "transition-colors duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2",
    variants[variant],
    className
  );

  const content = (
    <>
      {children}
      {arrow && <span aria-hidden>→</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={base}>
        {content}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={base}>
      {content}
    </button>
  );
}
```

---

### 3.4 `<Hero>`

```tsx
// components/sections/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { fadeUp, stagger } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-5xl"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow number="01">Growth Infrastructure</Eyebrow>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-8 text-[clamp(3.5rem,8vw,7rem)] leading-[0.95] tracking-[-0.04em] font-medium"
          >
            Built to
            <br />
            compound.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-10 max-w-xl text-lg md:text-xl text-ink-secondary leading-[1.55]"
          >
            We build the systems that mid-size companies use to grow predictably.
            Not campaigns. Not redesigns. Infrastructure.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-12 flex flex-wrap items-center gap-4">
            <Button href="/work" variant="primary" arrow>
              See our work
            </Button>
            <Button href="/contact" variant="ghost">
              Start a project
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Background logomark — incə brand marker */}
      <div className="absolute bottom-0 right-0 opacity-[0.04] pointer-events-none">
        <Logomark className="h-[400px] w-[400px]" />
      </div>
    </section>
  );
}
```

---

### 3.5 `<MetricsGrid>` + `<CountUp>` (Roksman fix)

```tsx
// components/motion/CountUp.tsx
"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useTransform } from "framer-motion";
import { motion } from "framer-motion";

export function CountUp({
  end,
  duration = 1.8,
  suffix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, end, {
        duration,
        ease: [0.22, 1, 0.36, 1],
      });
      return controls.stop;
    }
  }, [inView, end, duration, count]);

  return (
    <span ref={ref} aria-label={`${end}${suffix}`}>
      {/* SSR fallback: final dəyər mövcuddur, "0+" qalmır */}
      <noscript>{end}{suffix}</noscript>
      <motion.span aria-hidden>{rounded}</motion.span>
      <span aria-hidden>{suffix}</span>
    </span>
  );
}
```

```tsx
// components/sections/MetricsGrid.tsx
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CountUp } from "@/components/motion/CountUp";

const metrics = [
  { value: 127, suffix: "", label: "Projects shipped" },
  { value: 43, suffix: "", label: "Avg. days to launch" },
  { value: 8, suffix: "", label: "Team members" },
  { value: 2.4, suffix: "×", label: "Avg. ROI in year 1" },
];

export function MetricsGrid() {
  return (
    <Section hairline>
      <Eyebrow number="04">By the numbers</Eyebrow>
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
        {metrics.map((m) => (
          <div key={m.label} className="border-t border-line pt-6">
            <div className="text-[clamp(3rem,6vw,5rem)] font-medium tracking-[-0.03em] leading-none">
              <CountUp end={m.value} suffix={m.suffix} />
            </div>
            <div className="mt-4 text-sm text-ink-secondary">{m.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
```

---

### 3.6 `<CaseStudyCard>`

```tsx
// components/cards/CaseStudyCard.tsx
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CaseStudyCardProps {
  slug: string;
  title: string;
  cover: string;
  sector: string;
  year: string;
  outcome: string;
  metrics: { value: string; label: string }[];
  className?: string;
}

export function CaseStudyCard({
  slug,
  title,
  cover,
  sector,
  year,
  outcome,
  metrics,
  className,
}: CaseStudyCardProps) {
  return (
    <Link
      href={`/work/${slug}`}
      className={cn("group block", className)}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-bg-muted">
        <Image
          src={cover}
          alt={title}
          fill
          className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
          sizes="(max-width: 768px) 100vw, 80vw"
        />
      </div>

      <div className="mt-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
        <span>{sector}</span>
        <span aria-hidden>·</span>
        <span>{year}</span>
      </div>

      <h3 className="mt-3 text-2xl md:text-3xl font-medium tracking-[-0.02em]">
        {title}
      </h3>

      <p className="mt-4 max-w-2xl text-base md:text-lg text-ink-secondary leading-[1.55]">
        {outcome}
      </p>

      <div className="mt-6 flex flex-wrap gap-4 text-sm text-ink">
        {metrics.map((m, i) => (
          <div key={m.label} className="flex items-center gap-4">
            {i > 0 && <span className="text-ink-muted" aria-hidden>·</span>}
            <span>
              <strong className="font-medium">{m.value}</strong>
              <span className="ml-1 text-ink-secondary">{m.label}</span>
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium border-b border-ink pb-0.5 group-hover:gap-3 transition-all">
        Read case study
        <span aria-hidden>→</span>
      </div>
    </Link>
  );
}
```

---

### 3.7 `<ProcessTimeline>`

```tsx
// components/sections/ProcessTimeline.tsx
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { process } from "@/lib/content/process";

export function ProcessTimeline() {
  return (
    <Section hairline>
      <Eyebrow number="05">Process</Eyebrow>
      <h2 className="mt-6 text-[clamp(1.875rem,3vw,2.5rem)] font-medium tracking-[-0.02em] leading-[1.1]">
        How a project compounds.
      </h2>

      <div className="mt-20 space-y-0">
        {process.map((step, i) => (
          <div
            key={step.id}
            className="grid grid-cols-12 gap-8 border-t border-line py-10"
          >
            <div className="col-span-12 md:col-span-4">
              <div className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-2 text-2xl font-medium tracking-[-0.02em]">
                {step.name}
              </h3>
              <div className="mt-3 font-mono text-sm text-ink-secondary">
                {step.duration}
              </div>
            </div>

            <div className="col-span-12 md:col-span-8">
              <p className="text-lg text-ink-secondary leading-[1.55]">
                {step.description}
              </p>
              <ul className="mt-6 space-y-2">
                {step.deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-3 text-base text-ink"
                  >
                    <span aria-hidden className="text-ink-muted mt-1">·</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
```

---

### 3.8 `<FAQ>` (Radix əsaslı)

```bash
npm install @radix-ui/react-accordion
```

```tsx
// components/ui/Accordion.tsx
"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export const Accordion = AccordionPrimitive.Root;

export const AccordionItem = ({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) => (
  <AccordionPrimitive.Item
    className={cn("border-t border-line", className)}
    {...props}
  />
);

export const AccordionTrigger = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      className={cn(
        "group flex flex-1 items-center justify-between py-8 text-left text-xl md:text-2xl font-medium tracking-[-0.01em]",
        "transition-colors hover:text-ink-secondary",
        className
      )}
      {...props}
    >
      {children}
      <Plus
        className="h-5 w-5 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-45"
        aria-hidden
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
);

export const AccordionContent = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) => (
  <AccordionPrimitive.Content
    className="overflow-hidden text-base md:text-lg text-ink-secondary leading-[1.55]
               data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-8 max-w-3xl", className)}>{children}</div>
  </AccordionPrimitive.Content>
);
```

---

### 3.9 `<Navigation>` (sticky + blur)

```tsx
// components/layout/Navigation.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logomark } from "@/components/brand/Logomark";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Logomark className="h-5 w-5" />
          <span className="text-base font-medium tracking-[-0.02em]">Compound</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink-secondary hover:text-ink transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-xs font-mono uppercase tracking-[0.14em] text-ink-secondary">
            AZ
          </button>
          <Button href="/contact" variant="primary">
            Start a project
          </Button>
        </div>
      </div>
    </header>
  );
}
```

---

## 4. Content data structure

Bütün content `lib/content/*` faylarında saxlanılır (faza 2-də MDX-ə köçürüləcək).

```ts
// lib/content/services.ts
export interface Service {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  outcomes: string[];
  stack: string[];
  relatedCases: string[];
}

export const services: Service[] = [
  {
    id: "brand",
    number: "01",
    title: "Brand & Identity Systems",
    subtitle: "Visual systems built to scale beyond launch day.",
    description: "...",
    outcomes: [
      "Naming and verbal identity",
      "Visual identity system",
      "Design tokens and component library",
      "Brand guidelines (digital + print)",
    ],
    stack: ["Figma", "Tailwind tokens"],
    relatedCases: ["case-1", "case-2"],
  },
  // ...
];
```

```ts
// lib/content/cases.ts
export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  cover: string;
  sector: "Government" | "Corporate" | "International" | "App" | "E-commerce";
  year: string;
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
  quote?: {
    text: string;
    author: string;
    role: string;
  };
  featured: boolean; // homepage-də göstərilir
}
```

---

## 5. SEO və metadata

Hər səhifədə:

```tsx
// app/(marketing)/work/[slug]/page.tsx
import { Metadata } from "next";
import { cases } from "@/lib/content/cases";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const c = cases.find((c) => c.slug === params.slug);
  if (!c) return {};
  return {
    title: c.title,
    description: c.outcome,
    openGraph: {
      images: [c.cover],
    },
  };
}

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}
```

---

## 6. Lazımi npm package-lər

```bash
npm install framer-motion @radix-ui/react-accordion lucide-react
npm install geist
```

`tailwind.config` Tailwind v4-də artıq lazımsızdır — bütün konfiqurasiya `globals.css`-dədir.

---

## 7. Performance qaydaları

- Bütün section component-ləri **server component** (Hero, MetricsGrid kimi `framer-motion` istifadə edənlər istisna)
- `"use client"` yalnız interaktiv komponentlərdə (Accordion, CountUp, Navigation, Hero animations)
- Image lazy loading default, `priority` yalnız hero-da
- Font-lar `next/font` ilə (Geist)
- `next.config.ts`-də:
  ```ts
  experimental: { optimizePackageImports: ["framer-motion", "lucide-react"] }
  ```

---

## 8. Build order (Claude Code üçün)

Bu komponentləri bu sırada qur:

1. **Foundation** — `globals.css`, `tailwind` tokens, `Container`, `Section`, `Eyebrow`, `Button`, `Hairline`
2. **Brand** — `Logomark`, `Wordmark`
3. **Layout** — `Navigation`, `Footer`
4. **Motion** — `motion.ts`, `FadeIn`, `Stagger`, `CountUp`
5. **Cards** — `ServiceCard`, `CaseStudyCard`, `MetricCard`, `ProcessStep`
6. **Sections** — `Hero`, `TrustBar`, `ServicesGrid`, `FeaturedWork`, `MetricsGrid`, `ProcessTimeline`, `FAQ`, `FinalCTA`
7. **Pages** — Homepage, /work, /work/[slug], /services, /about, /contact
8. **Content data** — `services.ts`, `cases.ts`, `faqs.ts`, `process.ts`
9. **SEO + sitemap** — metadata, `sitemap.ts`, `robots.txt`

Hər addımdan sonra `npm run typecheck && npm run lint` keçməlidir.

---

## 9. Komponent yoxlama check-listi (hər komponent üçün)

- [ ] TypeScript strict (heç `any` yox)
- [ ] `className` prop dəstəyi (cn ilə)
- [ ] Default values aydındır
- [ ] Accessibility (aria, focus, keyboard)
- [ ] Responsive (mobile-first)
- [ ] Reduced motion respect olunur
- [ ] Hairline və spacing token-ları istifadə olunur
- [ ] Heç bir hardcoded rəng yoxdur (yalnız token)
- [ ] Heç bir generic icon (yalnız brand-uyğun)