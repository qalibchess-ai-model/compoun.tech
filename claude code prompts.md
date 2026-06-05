# Compound — Claude Code Build Prompts

> Bu fayl 8 ardıcıl prompt-dan ibarətdir. Hər prompt Claude Code-a verilməlidir, əvvəlki addım tamamlandıqdan sonra. Hər prompt sonunda `npm run typecheck && npm run lint` keçməlidir. Promptlar İngilis dilindədir (Claude Code üçün optimal), açıqlamalar AZ dilindədir.

**İstifadə qaydası:**
1. Layihə qovluğunda `docs/design/` altında `01-design-system.md`, `02-page-structure.md`, `03-components.md` faylları olmalıdır
2. `CLAUDE.md`-də bu fayllara istinad olmalıdır
3. Hər prompt-u sırayla Claude Code-a yapışdır
4. Hər addımdan sonra dəyişiklikləri yoxla, sonra növbəti prompt-a keç

---

## PROMPT 1 — Foundation: project setup, design tokens, base primitives

```
We are building the Compound website. Reference design docs:
- docs/design/01-design-system.md (tokens, typography, motion rules)
- docs/design/02-page-structure.md (sections per page)
- docs/design/03-components.md (component architecture)

This is step 1 of 8. Do NOT build pages, sections, or cards yet. Only foundation.

## Tasks

1. Verify Next.js 15 App Router + TypeScript strict + Tailwind v4 setup is correct.

2. Install dependencies:
   - geist (font)
   - framer-motion
   - @radix-ui/react-accordion
   - lucide-react
   - clsx, tailwind-merge

3. Configure src/app/globals.css with Tailwind v4 @theme tokens exactly as defined in 01-design-system.md section 2 (colors) and section 11 (base styles). Use the design-doc tokens verbatim — do not invent new colors.

4. Configure src/app/layout.tsx:
   - Import GeistSans and GeistMono via next/font
   - Apply font variables to <html>
   - Set lang="az"
   - Apply default metadata as specified in 03-components.md section 2

5. Create src/lib/utils.ts with a cn() helper combining clsx + tailwind-merge.

6. Create base primitives in src/components/:
   - layout/Container.tsx
   - layout/Section.tsx (with inverse, tight, hairline props)
   - ui/Eyebrow.tsx (mono uppercase label with optional number prop)
   - ui/Button.tsx (variants: primary, secondary, ghost, inverse; arrow prop)
   - ui/Hairline.tsx (1px divider)

Implement all primitives exactly per 03-components.md sections 3.1–3.3.

## Acceptance criteria

- npm run typecheck passes with no errors
- npm run lint passes
- npm run dev runs without errors
- Visiting / shows an empty page with correct fonts loaded (verify in Network tab)
- All primitives accept className prop and use cn() helper
- No hardcoded hex colors anywhere in components — only token references
```

---

## PROMPT 2 — Brand mark + global layout (Navigation, Footer)

```
Step 2 of 8 for Compound website. Foundation primitives from step 1 must already exist.

Reference: docs/design/03-components.md sections 3.2 and 3.9, docs/design/02-page-structure.md sections 1.1 and 1.10.

## Tasks

1. Create src/components/brand/Logomark.tsx — three ascending offset squares as defined in 03-components.md section "Logo və brand mark". SVG must accept className prop, default h-6 w-6, use currentColor.

2. Create src/components/brand/Wordmark.tsx — Logomark + "Compound" text combined. Default to h-5 w-5 logo + text-base wordmark.

3. Create src/components/layout/Navigation.tsx:
   - Fixed top, z-50
   - Transparent when scrollY <= 24
   - bg-bg/80 + backdrop-blur-md + border-b border-line when scrollY > 24
   - Left: Wordmark linked to /
   - Center (desktop): Work, Services, About links — text-sm text-ink-secondary, hover:text-ink
   - Right: AZ language toggle button (font-mono uppercase tracking-wide) + "Start a project" primary Button to /contact
   - Mobile: hamburger icon (lucide-react Menu) → full-screen menu with bg-inverse-bg, text-inverse-ink, large typography (text-4xl for nav items)
   - Mobile menu must close on link click and on Escape key
   - Body must get overflow-hidden when mobile menu is open

4. Create src/components/layout/Footer.tsx with 4-column grid as defined in 02-page-structure.md section 1.10:
   - Column 1: Brand (Logomark + wordmark + tagline + Baku address)
   - Column 2: Nav (Work, Services, About, Journal, Contact)
   - Column 3: Connect (Email mailto, LinkedIn, GitHub placeholder links)
   - Column 4: Newsletter (input + Subscribe button — non-functional placeholder for now)
   - Bottom row separated by hairline: copyright left, Privacy/Terms middle, language toggle right
   - NO WhatsApp floating button anywhere on the site

5. Add Navigation + Footer to src/app/layout.tsx around {children}.

## Acceptance criteria

- npm run typecheck and npm run lint pass
- Navigation visually transitions on scroll (manual check at localhost:3000)
- Mobile menu opens, closes on Escape, closes on link click
- Footer renders all 4 columns on desktop, stacks on mobile
- No WhatsApp button anywhere
- All interactive elements have focus-visible ring (token-based)
- Wordmark and Logomark accept className override
```

---

## PROMPT 3 — Motion system

```
Step 3 of 8. Navigation and Footer must exist.

Reference: docs/design/01-design-system.md section 7 (Motion sistemi), docs/design/03-components.md.

## Tasks

1. Create src/lib/motion.ts exporting:
   - fadeUp variant (opacity 0→1, y 16→0, 600ms, ease [0.22, 1, 0.36, 1])
   - stagger variant (staggerChildren 0.06)
   - reveal variant (opacity 0→1, 800ms, same ease)
   - All variants must respect prefers-reduced-motion (export a useReducedMotionSafe helper)

2. Create src/components/motion/FadeIn.tsx:
   - Client component
   - Wraps children in motion.div with fadeUp variant
   - Triggers via useInView with { once: true, margin: "-100px" }
   - Accepts delay prop (number, in seconds)
   - Accepts as prop (default "div") to render as different elements
   - Falls back to static render if prefers-reduced-motion is set

3. Create src/components/motion/Stagger.tsx:
   - Client component
   - Wraps children in motion.div with stagger variant
   - Used as parent of multiple FadeIn children

4. Create src/components/motion/CountUp.tsx exactly as specified in 03-components.md section 3.5:
   - Accepts end (number), duration (default 1.8), suffix (string)
   - Uses useMotionValue + useTransform + animate
   - Triggers on useInView
   - SSR-safe: renders final value in <noscript>, motion span hidden from screen readers via aria-hidden
   - Outer span has aria-label="${end}${suffix}"
   - Respects prefers-reduced-motion (jumps to final value immediately)
   - Supports decimal values (e.g. 2.4)

## Acceptance criteria

- npm run typecheck and npm run lint pass
- Create a temporary test page at src/app/_motion-test/page.tsx with three FadeIn elements and one CountUp(end={127}) to verify behavior, then delete it after verification
- All motion components mark themselves as "use client"
- No motion runs when prefers-reduced-motion: reduce is set in DevTools
- CountUp shows final number even with JavaScript disabled (test in browser DevTools → disable JS)
```

---

## PROMPT 4 — Card components

```
Step 4 of 8. Motion system must exist.

Reference: docs/design/03-components.md sections 3.6 and ServiceCard / CaseStudyCard / MetricCard / ProcessStep definitions in section 3.

## Tasks

1. Create src/components/cards/ServiceCard.tsx:
   - Props: number, title, subtitle, outcomes (string[]), stack (string[]), relatedCaseSlug (optional)
   - Layout: top-aligned number (mono, ink-muted, top-left) + stack tags (top-right)
   - Title h3, subtitle body, outcomes as hyphen-prefixed list (NOT bullet-style)
   - "See related work →" link if relatedCaseSlug provided
   - Full-width card, hairline border-t separator
   - No drop shadow, no rounded corners (rounded-none)

2. Create src/components/cards/CaseStudyCard.tsx exactly per 03-components.md section 3.6:
   - Props: slug, title, cover, sector, year, outcome, metrics ({value, label}[])
   - Cover image aspect-[16/10], grayscale-[20%] hover:grayscale-0 transition
   - Sector + year mono eyebrow
   - Title h3, outcome body
   - Metrics inline row with hairline dividers
   - "Read case study →" with bottom border underline that animates on hover (gap increase)
   - Entire card is a Link to /work/[slug]

3. Create src/components/cards/MetricCard.tsx:
   - Props: value (number), suffix (string), label (string)
   - Uses CountUp component
   - border-t border-line at top
   - Large value (clamp 3rem→5rem), label below in body-sm ink-secondary

4. Create src/components/cards/ProcessStep.tsx:
   - Props: number, name, duration, description, deliverables (string[])
   - 12-col grid: 4 cols for number+name+duration, 8 cols for description+deliverables
   - hairline border-t separator
   - Mobile: stacks vertically

## Acceptance criteria

- npm run typecheck and npm run lint pass
- Create a temporary src/app/_card-test/page.tsx that renders one of each card with placeholder data, then delete after verification
- All cards accept className override
- All cards use design tokens only (no hardcoded colors/spacing)
- CaseStudyCard hover animation works smoothly (test grayscale transition)
- ProcessStep responsive layout works on mobile
```

---

## PROMPT 5 — Sections part 1 (Hero, TrustBar, ServicesGrid, FeaturedWork)

```
Step 5 of 8. Cards from step 4 must exist.

Reference: docs/design/02-page-structure.md sections 1.2–1.5, docs/design/03-components.md section 3.4.

Also create content data files first.

## Tasks

1. Create src/lib/content/services.ts with the Service interface from 03-components.md section 4 and export a services array with 4 items:
   - 01 Brand & Identity Systems
   - 02 Web Platforms
   - 03 Growth Engineering
   - 04 AI & Automation
   Use placeholder copy per 02-page-structure.md section 1.4.

2. Create src/lib/content/cases.ts with CaseStudy interface and export 3-5 placeholder case studies. Each must have featured: true for at least 3. Use placeholder cover paths like /images/work/[slug]/cover.jpg — we will replace later.

3. Create src/lib/content/trust.ts exporting:
   - logos array: 6-8 placeholder client logos {name, src}
   - featuredQuote: {text, author, role, company}

4. Create src/components/sections/Hero.tsx per 03-components.md section 3.4 exactly:
   - "use client" because of motion
   - Eyebrow 01 — Growth Infrastructure
   - Display headline "Built to / compound." with line break
   - Body paragraph from 02-page-structure.md section 1.2
   - Two CTAs: primary "See our work" to /work, ghost "Start a project" to /contact
   - Background Logomark at bottom-right, opacity-[0.04], h/w 400px
   - All elements wrapped in Stagger with fadeUp children

5. Create src/components/sections/TrustBar.tsx per 02-page-structure.md section 1.3:
   - "Trusted by" eyebrow
   - Logo strip: 6-8 client logos at h-6, monochrome, opacity-60 hover:opacity-100, gap-x-12 wrapping
   - Hairline divider below logos
   - Featured quote section: large quote text on left (col-span-8), attribution on right (col-span-4)
   - All in Section component with hairline prop

6. Create src/components/sections/ServicesGrid.tsx per 02-page-structure.md section 1.4:
   - Eyebrow 02 — Services
   - h2 "What we build."
   - Map services from content data into ServiceCard components
   - Each ServiceCard separated by hairline (border-t)

7. Create src/components/sections/FeaturedWork.tsx per 02-page-structure.md section 1.5:
   - Eyebrow 03 — Selected Work
   - h2 "Work that compounded."
   - Filter cases.filter(c => c.featured), take first 3
   - Render as vertical stack of CaseStudyCard with large vertical gap (gap-y-24)
   - Bottom: "View all work (N) →" link to /work where N is total case count

## Acceptance criteria

- npm run typecheck and npm run lint pass
- Test page at src/app/_sections-test/page.tsx renders all 4 sections — verify visually, then delete
- All sections use Section wrapper
- All sections respect the visual rhythm rule (Hero = breathing room, Services = denser)
- All client logos are placeholders (use simple SVG rectangles with company name text if real logos unavailable)
- Hero count of CTAs is exactly 2
```

---

## PROMPT 6 — Sections part 2 (MetricsGrid, ProcessTimeline, FAQ, FinalCTA)

```
Step 6 of 8. Sections from step 5 must exist.

Reference: docs/design/02-page-structure.md sections 1.6–1.9, docs/design/03-components.md sections 3.5, 3.7, 3.8.

## Tasks

1. Create src/lib/content/process.ts exporting array of 5 ProcessStep items:
   - 01 Discovery — 1 week
   - 02 Strategy — 1-2 weeks
   - 03 Design — 2-4 weeks
   - 04 Build — 4-8 weeks
   - 05 Compound — ongoing
   Each with description (2 sentences) and deliverables (3-5 items) per 02-page-structure.md section 1.7.

2. Create src/lib/content/faqs.ts exporting array of 8-10 FAQ items per 02-page-structure.md section 1.8 list. Use realistic 2-4 sentence answers with concrete numbers (e.g. "Projects start at 18,000 AZN.").

3. Create src/lib/content/metrics.ts exporting 4 metrics: Projects shipped (127), Avg. days to launch (43), Team members (8), Avg. ROI in year 1 (2.4×).

4. Create src/components/sections/MetricsGrid.tsx per 03-components.md section 3.5:
   - Eyebrow 04 — By the numbers
   - 2x2 grid on mobile, 1x4 on desktop, gap-x-8 gap-y-12
   - Each cell uses MetricCard
   - Section with hairline prop

5. Create src/components/sections/ProcessTimeline.tsx per 03-components.md section 3.7:
   - Eyebrow 05 — Process
   - h2 "How a project compounds."
   - Map process data to ProcessStep components
   - Each step has border-t border-line py-10

6. Create src/components/ui/Accordion.tsx per 03-components.md section 3.8 using @radix-ui/react-accordion:
   - Export Accordion, AccordionItem, AccordionTrigger, AccordionContent
   - Use Plus icon from lucide-react that rotates 45deg when open
   - Border-t border-line on each item
   - Trigger py-8 text-xl md:text-2xl font-medium
   - Content max-w-3xl pb-8 text-ink-secondary

7. Create src/components/sections/FAQ.tsx per 02-page-structure.md section 1.8:
   - Two-column layout (desktop): left column sticky with eyebrow + h2, right column accordion
   - On mobile: stacks, accordion below heading
   - Type="single" collapsible, only one item open at a time
   - Map faqs data array

8. Create src/components/sections/FinalCTA.tsx per 02-page-structure.md section 1.9:
   - Section inverse prop (qara background)
   - py-32
   - Display headline "Built to compound?" centered
   - Body paragraph centered max-w-xl
   - Primary button inverse variant: "Start a project →" to /contact
   - Hairline divider (use inverse-line color)
   - 3-column contact row at bottom: Email (mailto:hello@compound.az), Phone (tel:), Location (Baku)
   - All text in inverse-ink colors

## Acceptance criteria

- npm run typecheck and npm run lint pass
- FAQ accordion only allows one item open at a time
- FAQ accordion icon rotates smoothly on open
- MetricsGrid counts up only when scrolled into view
- FinalCTA inverse colors render correctly (dark background, light text)
- ProcessTimeline shows 5 steps with consistent spacing
```

---

## PROMPT 7 — Homepage composition + Work pages

```
Step 7 of 8. All sections from steps 5–6 must exist.

Reference: docs/design/02-page-structure.md (entire file).

## Tasks

1. Create src/app/(marketing)/page.tsx — Homepage composition:
   Import and render in this exact order:
   - <Hero />
   - <TrustBar />
   - <ServicesGrid />
   - <FeaturedWork />
   - <MetricsGrid />
   - <ProcessTimeline />
   - <FAQ />
   - <FinalCTA />
   No additional wrapper needed (each section has its own Section component).

2. Export proper metadata for homepage:
   - title (default from layout)
   - description: "Growth infrastructure for mid-size businesses. We build the systems that compound."
   - openGraph image placeholder /og/home.jpg

3. Create src/app/(marketing)/work/page.tsx — Work index page per 02-page-structure.md section "SƏHIFƏ 2":
   - Page header section: h1 "Work" + sub "Selected projects from the last 3 years."
   - Filter chips: All, Web Platforms, Brand, Growth, AI Automation
     - Use useState for selected filter (client component for this part only — extract into a separate WorkGrid client component)
     - Active chip: bg-ink text-bg rounded-full
     - Inactive: border border-line text-ink-secondary
   - Grid: 2 columns on desktop, 1 on mobile, gap-x-8 gap-y-16
   - Each card: cover image aspect-[4/5], sector + year eyebrow, project name h3, one-line outcome
   - Hover: card translateY(-4px) transition, grayscale to 0
   - FinalCTA at bottom

4. Create src/app/(marketing)/work/[slug]/page.tsx — Case study page per 02-page-structure.md section "SƏHIFƏ 3":
   - generateStaticParams from cases data
   - generateMetadata using case data
   - Sections in order:
     a. Cover: full-width hero image (aspect-[21/9]) with project name overlay (h1, bottom-left)
     b. Meta strip: client, sector, year, services list, duration, role — in 6-column grid, mono eyebrow labels
     c. Context: section with eyebrow "Context", h2, body
     d. Approach: same pattern, eyebrow "Approach"
     e. Solution: eyebrow "Solution", body + image gallery (2-3 images, aspect-[4/3], grid-cols-1 md:grid-cols-2)
     f. Outcome: eyebrow "Outcome", 3-4 metric cards horizontal row
     g. Quote (if exists): large quote text + attribution
     h. Tech stack: eyebrow "Stack", badge row with tech tags
     i. Next project: sticky bottom pagination — "Next case →" with image preview of next case
   - FinalCTA at bottom
   - 404 if slug not found (notFound() from next/navigation)

## Acceptance criteria

- npm run typecheck and npm run lint pass
- npm run build succeeds with all routes statically generated
- Homepage / loads with all 8 sections in correct order
- /work loads with filter chips working (filters re-render the grid)
- /work/[any-slug] from cases data renders correctly
- /work/non-existent returns 404
- All metadata exports work (verify in browser tab title)
- Lighthouse Performance score on / is 90+
```

---

## PROMPT 8 — Remaining pages, SEO, polish

```
Step 8 of 8 — final step. Homepage and work pages must exist and pass build.

Reference: docs/design/02-page-structure.md sections "SƏHIFƏ 4–6", section 1.7 (services details).

## Tasks

1. Create src/app/(marketing)/services/page.tsx:
   - Page header: h1 "Services", sub "Four disciplines. One outcome."
   - For each service in services data, render a large section with:
     - Eyebrow with service number
     - h2 with service title
     - Long description (3 paragraphs)
     - "What's included" bullet list of outcomes
     - Pricing range note (mono, ink-secondary): e.g. "Starts at 18,000 AZN"
     - Related case studies (2-3 CaseStudyCards from cases data)
     - "Start with this service" CTA button
   - Hairline border-t between services
   - FinalCTA at bottom

2. Create src/app/(marketing)/about/page.tsx per 02-page-structure.md section "SƏHIFƏ 5":
   - Section 1: Hero with manifesto headline (single sentence positioning statement, e.g. "We build the operating systems mid-size companies grow on.")
   - Section 2: Manifesto — 3 paragraphs of why Compound exists
   - Section 3: Principles — 4-6 principles, each with eyebrow number + title + 2-sentence description, hairline separated
   - Section 4: Team — placeholder grid (3-4 members, each: square photo placeholder, name, role, short bio)
   - Section 5: Studio — 1 image placeholder + Baku address + studio coordinates
   - Section 6: Open positions placeholder ("We're not actively hiring. If you think you'd be a great fit, send us your work at jobs@compound.az.")
   - FinalCTA at bottom

3. Create src/app/(marketing)/contact/page.tsx per 02-page-structure.md section "SƏHIFƏ 6":
   - Page header: h1 "Start a project", sub "Tell us what you're building."
   - 2-column layout:
     - Left: form (client component) with fields: Name, Email, Company, Project type select (Brand / Web / Growth / AI / Other), Budget range select (<25k / 25-50k / 50-100k / 100k+ AZN), Message textarea, Submit button
     - Right: direct contact info (email mailto, phone tel, LinkedIn) + mini-FAQ accordion with 3 questions: "What happens after I submit?", "How quickly do you respond?", "Do you sign NDAs?"
   - Form does NOT submit anywhere yet — placeholder onSubmit that just console.logs and shows a thank-you state
   - No FinalCTA needed here

4. Create src/app/not-found.tsx:
   - Display headline "404" or "Page not found."
   - Body: "The page you're looking for has moved or never existed."
   - Button: "Back to home →" linking to /

5. Create src/app/sitemap.ts:
   - Static routes: /, /work, /services, /about, /contact
   - Dynamic routes: /work/[slug] for each case in cases data
   - Set changeFrequency and priority appropriately

6. Create src/app/robots.ts allowing all crawlers and pointing to sitemap.

7. SEO sweep:
   - Verify each page has unique title and description
   - Verify openGraph image is set per page (placeholder paths ok)
   - Add canonical URLs via metadata.alternates.canonical

8. Performance polish:
   - Add experimental.optimizePackageImports for framer-motion and lucide-react in next.config.ts
   - Verify all images use next/image
   - Verify no client components import server-only modules

9. Final QA:
   - Run npm run build — must succeed with all routes statically generated
   - Run Lighthouse on / locally and document score in PR description
   - Test mobile responsive (375px, 768px, 1440px)
   - Test prefers-reduced-motion (no animations should run)
   - Test keyboard navigation (Tab through entire homepage — focus rings visible)

## Acceptance criteria

- npm run typecheck, npm run lint, npm run build all pass
- All 6 main routes load: /, /work, /work/[slug], /services, /about, /contact
- 404 page renders for invalid routes
- sitemap.xml and robots.txt accessible at /sitemap.xml and /robots.txt
- Lighthouse Performance score 90+ on homepage
- All pages render correctly at mobile, tablet, desktop widths
- No console errors in browser DevTools
- No hardcoded colors or spacing anywhere in codebase (only tokens)
```

---

## Bonus PROMPT 9 (opsional) — Polish və content qaytarma

Bu prompt yalnız 1-8 tamamlandıqdan və real məzmun hazır olduqda istifadə olunur.

```
Final polish step for Compound website. All pages from steps 1-8 must exist.

## Tasks

1. Replace all placeholder copy in lib/content/* with real content:
   - services.ts — final service descriptions and outcomes
   - cases.ts — real 3-5 case studies with actual metrics, quotes, images
   - faqs.ts — final FAQ answers with correct pricing and timelines
   - trust.ts — real client logos and one featured quote
   - process.ts — finalized 5-step descriptions

2. Replace placeholder images:
   - Add real cover images to public/images/work/[slug]/cover.jpg
   - Add real OG images to public/og/[page].jpg (1200x630)
   - Add real client logos to public/logos/[client].svg

3. Add structured data (JSON-LD):
   - Organization schema in root layout
   - Article schema on each case study page
   - BreadcrumbList on work and case study pages

4. Add analytics:
   - Vercel Analytics or PostHog (whichever is preferred)
   - Track key events: page view, CTA click, form submit

5. Connect contact form to a real endpoint:
   - Use a server action or API route
   - Send to email or Supabase table
   - Show real loading + success + error states

6. Add Open Graph image generation:
   - Use @vercel/og or Next.js metadata image conventions
   - Generate dynamic OG images for case study pages

## Acceptance criteria

- All placeholder content replaced
- All images optimized (next/image handles this automatically)
- Analytics fire correctly (verify in dashboard)
- Contact form sends successfully
- OG images render correctly when sharing URL on social media
- Final Lighthouse score: Performance 95+, Accessibility 100, Best Practices 100, SEO 100
```

---

## Workflow tövsiyələri

1. **Hər prompt-dan sonra git commit**: "step 1: foundation", "step 2: layout", və s.
2. **Test page-ləri silməyi unutma**: Prompt 3, 4, 5-də müvəqqəti test səhifələri var
3. **Real məzmun gəldikdə yenidən başlamaq lazım deyil** — `lib/content/*` fayllarını dəyişmək kifayətdir, komponentlər avtomatik yeniliklərlə görünəcək
4. **Hər addımda Lighthouse test et** — proqress izləməyə kömək edir
5. **Mobile-first yoxlama** — hər prompt sonunda DevTools-da 375px-də yoxla

Hər prompt təxminən 30-60 dəqiqəlik Claude Code işidir. Tam build 6-10 saat (real məzmun və şəkil olmadan).