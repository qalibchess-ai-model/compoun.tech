# Compound — Page Structure & Section Specs

> Bu fayl saytın hər səhifəsinin və hər bölməsinin konkret spesifikasiyasıdır. Roksman-ın struktur skeleti referans götürülüb, lakin hər bölmənin Roksman-da olan zəifliyi qeyd edilib və bizim həllimiz təsvir edilib.

---

## Sayt xəritəsi

```
/                  → Homepage
/work              → Portfolio (case study siyahısı)
/work/[slug]       → Tək case study
/services          → Xidmətlər (dərinləşmiş)
/about             → Haqqımızda
/contact           → Əlaqə
/journal           → Blog / yazılar (opsional, faza 2)
```

**Roksman-da `/portfolio/` bir uzun siyahıdır. Bizdə `/work` indeks + hər layihə üçün ayrıca səhifə var. Bu fərq bütün dizaynın ən əhəmiyyətli arxitektur qərarıdır.**

---

## SƏHIFƏ 1: Homepage (`/`)

Bölmə ardıcıllığı:

```
1. Navigation (sticky)
2. Hero
3. Trust bar (müştərilər)
4. Services
5. Featured work (case studies preview)
6. Numbers (real statistika)
7. Process
8. FAQ
9. CTA
10. Footer
```

---

### 1.1 Navigation

**Roksman problemi:** Standart üfüqi nav, fərqsiz, hover state yox, sticky deyil.

**Compound həlli:**
- Fixed top, scroll-da background-blur + hairline border altda
- Sol: Logomark + "Compound" wordmark
- Orta: `Work · Services · About · Journal`
- Sağ: dil seçici (AZ/EN) + "Start a project" button (primary)
- Mobile: hamburger → full-screen menu (background qara, mətnlər ağ, böyük tipografiya)

**Spec:**
```tsx
<header className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
  {/* default: bg-transparent */}
  {/* scrolled: bg-bg/80 backdrop-blur-md border-b border-line */}
</header>
```

Trigger: `scrollY > 24px`.

---

### 1.2 Hero

**Roksman problemi:**
- "Kreativ Texnologiyalar Studiyası" — klişe
- Uzun paraqraf izahı
- Tək CTA
- Heç bir vizual maraq

**Compound həlli:**

Layout: Sol 7 col, sağ 5 col (yaxud asimmetrik tipografiya — display başlıq həm sol həm sağa yayılır).

**Mətn:**
```
[eyebrow]  01 — GROWTH INFRASTRUCTURE

[display]  Built to
           compound.

[body]     We build the systems that mid-size companies use
           to grow predictably. Not campaigns. Not redesigns.
           Infrastructure.

[actions]  [See our work →]   [Start a project]
```

**Önemli detallar:**
- Display başlıq 2 sətirdə. "compound." sözü period ilə bitir — kəskin nöqtə brand-i markalayır.
- Eyebrow mono şriftdə (`01 — GROWTH INFRASTRUCTURE`). 
- 2 CTA: birincisi underline link stilli (`See our work →`), ikincisi solid button. Hierarchy aydındır.
- Background: ağ. Aşağıda Logomark böyük versiyada (sağ aşağı küncdə, opacity 0.04) — incə brand marker.
- Heç bir image, heç bir illustration. Tipografiya əsas hero element-dir.

**Mobile:**
- Display başlıq `text-[14vw]` ölçüsündə
- Eyebrow ayrı sətir, başlıq alta, sonra body, sonra button-lar şaquli stack

---

### 1.3 Trust bar

**Roksman problemi:** 22 logo eyni boyutda divar şəklində — dekor kimi. Heç bir kontekst yox.

**Compound həlli:**

İki səviyyəli sosial sübut:

**A. Logo strip (yuxarı sətir):**
- Eyebrow: `Trusted by` (sol tərəfdə, mono, kiçik)
- Yan-yana 6-8 logo (maksimum), monoxrom (grayscale + opacity-60), eyni hündürlükdə
- Static, scroll yoxdur, hover-də opacity-100
- Yalnız **ən tanınmış 6 müştəri** seçilir

**B. Quote testimonial (aşağı sətir):**
- 1 dənə qabarıq sitat (sol tərəfdə)
- Sağda: müştərinin adı, vəzifəsi, şirkəti + onların logosu

```
[eyebrow]   TRUSTED BY

[logo row]  Logo · Logo · Logo · Logo · Logo · Logo

[divider — hairline]

[quote]     "Compound built the operating system for our growth.
             In 4 months, our lead-to-close cycle dropped from 38
             days to 11."

[meta]      — Name Surname
            CEO, Company Name
```

**Spec:**
- Logo height: 24px, max-width: 120px
- Hover: opacity 60 → 100, duration 200ms
- Heç bir auto-scroll, heç bir carousel

---

### 1.4 Services

**Roksman problemi:** 6 generic xidmət, hər biri 1-2 cümlə təsvir. "Hər şey edirik" mesajı.

**Compound həlli:** 

3-4 dərinləşmiş xidmət (Roksman-ın 6-dan az). Hər biri uzunçəkili kart, tam icra detallı.

**Section başlığı:**
```
[eyebrow]  02 — SERVICES

[h2]       What we build.
```

**Layout:** Tək sütun, hər service tam genişlikdə. Üstündən hairline line ilə ayrılır.

**Service kartı strukturu:**
```
┌─────────────────────────────────────────────────────────┐
│ 01                                          [Stack tags]│
│                                                          │
│ Brand & Identity Systems                                │
│                                                          │
│ Sub-headline that describes the outcome,                │
│ not the activity.                                       │
│                                                          │
│ • Bullet outcome 1                                      │
│ • Bullet outcome 2                                      │
│ • Bullet outcome 3                                      │
│                                                          │
│ → See related work                                      │
└─────────────────────────────────────────────────────────┘
```

**3-4 xidmət (təklif):**

1. **Brand & Identity Systems** — naming, visual identity, brand guidelines, design tokens
2. **Web Platforms** — Next.js/React saytlar, e-commerce, CMS arxitekturası
3. **Growth Engineering** — analytics, conversion infrastructure, A/B test sistemi
4. **AI & Automation** — workflow automation, AI integration, internal tools

(Sənin AI workflow platformanı 4-cü servisə daxil et — bu Compound üçün təbii uzantıdır.)

**Vacib:** Hər xidmət kartının sağ tərəfində bağlı case study link-i var — bu portfoliyaya birbaşa yol yaradır. Roksman bunu etmir.

---

### 1.5 Featured Work

**Roksman problemi:** Portfolio yalnız `/portfolio/` səhifəsində URL siyahısı kimi göstərilir. Homepage-də case study yoxdur.

**Compound həlli:** Homepage-də **3 seçilmiş case study** göstərilir. Bu Roksman-dan ən böyük fərqimizdir.

**Section başlığı:**
```
[eyebrow]  03 — SELECTED WORK

[h2]       Work that compounded.
```

**Layout:** 3 case study kartı, tək sütunda (vertikal stack). Hər biri tam genişlikdə, böyük şəkil + meta + qısa nəticə.

**Case study card strukturu:**

```
┌───────────────────────────────────────────────┐
│                                                │
│         [Cover image — aspect-[16/10]]        │
│                                                │
├───────────────────────────────────────────────┤
│ [Sector tag] · [Year]                          │
│                                                │
│ Project Name                                   │
│                                                │
│ One-sentence outcome statement that includes  │
│ a measurable result.                          │
│                                                │
│ +143% conversion  ·  3 months  ·  Web platform│
│                                                │
│ Read case study →                              │
└───────────────────────────────────────────────┘
```

**Detallar:**
- Cover şəkil aspect-[16/10], `grayscale-[20%] hover:grayscale-0` keçidi
- Sector tag + year mono şriftdə, kiçik
- Project name h3 ölçüsündə
- Outcome bir cümlə, **ölçülə bilən nəticə daxil olur**
- 3 metric badge (rəqəm + müddət + tip)
- "Read case study →" link

Section altında: `View all work (24) →` — `/work` səhifəsinə aparır.

---

### 1.6 Numbers (Statistika)

**Roksman problemi:** "0+ İllərin Təcrübəsi", "0+ Tamamlanmış Layihələr" — placeholder qalır, JS pozulub. Üstəlik mənasız metrik.

**Compound həlli:**

4 real metrik. Hər biri **count-up animation** ilə canlanır. Server-side render-də son rəqəm artıq görünür (heç vaxt "0" qalmır).

```
[eyebrow]  04 — BY THE NUMBERS

[grid — 4 sütun, mobile: 2x2]

  127            43             8             2.4×
  Projects       Avg. days      Team          Avg. ROI
  shipped        to launch      members       in year 1
```

**Vacib qaydalar:**
- Rəqəm `text-[clamp(3rem,6vw,5rem)]` ölçüsündə, font-medium, tracking-tight
- Label aşağıda, body-sm, ink-secondary
- Hər metrik altında hairline border-top
- Count-up `framer-motion`-un `useInView` ilə triggerlənir, `viewport={{ once: true }}`
- Reduced motion halında dərhal final dəyər göstərilir

**Komponent:**
```tsx
<MetricCounter value={127} suffix="" label="Projects shipped" />
```

---

### 1.7 Process

**Roksman problemi:** 7 mərhələ, hər biri uzun paraqraf. Standart agentlik klişesi. Vizual olaraq darıxdırıcı.

**Compound həlli:**

4-5 mərhələ (yığcam). Layout: **horizontal scroll deyil, vertical timeline**. Sol tərəfdə nömrə + mərhələ adı, sağ tərəfdə təsvir + deliverable list.

**Section başlığı:**
```
[eyebrow]  05 — PROCESS

[h2]       How a project compounds.
```

**5 mərhələ (təklif):**

1. **Discovery** — 1 həftə. Audit, müsahibələr, problem definition.
2. **Strategy** — 1-2 həftə. Positioning, architecture, success metrics.
3. **Design** — 2-4 həftə. System, prototypes, validation.
4. **Build** — 4-8 həftə. Implementation, testing, integration.
5. **Compound** — ongoing. Optimization, measurement, iteration.

**Hər step üçün card:**
```
[01]  Discovery                              1 week
─────────────────────────────────────────────────
We map your current state — what works,
what's broken, what's invisible.

Deliverables:
· Audit document
· Stakeholder interviews (5-8)
· Problem framing document
```

**Vacib:** Sonuncu mərhələ "**Compound**" adlanır — slogan-ı process-ə daxil edirik. Bu Roksman-da olan generic "Davamlı Dəstək" mərhələsinin əksinə brand mesaj daşıyır.

---

### 1.8 FAQ

**Roksman problemi:** 4 səth səviyyəli sual. Real alıcı qorxularına toxunmur.

**Compound həlli:**

8-10 sual. Real biznes qərarverici suallar. Accordion komponent (1 dəfədə 1 açıq).

**Layout:** 2 sütun — sol tərəfdə section başlığı (sticky), sağ tərəfdə accordion.

**Suallar (təklif):**

1. How much does a typical project cost?
2. How long does it take?
3. What if we already have an in-house team?
4. Do you work on retainer or project basis?
5. Who owns the code and design files?
6. How do you measure success?
7. What stack do you use and why?
8. Can you work with our existing brand/codebase?
9. Do you sign NDAs?
10. What happens after launch?

**Hər cavab:** 2-4 cümlə. Konkret. Rəqəmlərlə (məs. "Projects start at 18,000 AZN. Average web platform: 32,000-65,000 AZN.").

**Spec:**
```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="item-1" className="border-t border-line">
    <AccordionTrigger className="py-8 text-xl font-medium">
      How much does a typical project cost?
    </AccordionTrigger>
    <AccordionContent className="pb-8 text-ink-secondary">
      ...
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

---

### 1.9 CTA (final)

**Roksman problemi:** "AĞLINIZDA HƏR HANSI LAYİHƏ İDEYASI VAR?" + "Bizimlə əlaqə" — generic, yorğun.

**Compound həlli:**

Tam genişlikdə qara bölmə (inverse). Böyük tipografiya. 1 mətn + 1 CTA + əlaqə kanalları.

```
[bg: inverse-bg, ink: inverse-ink, py-32]

           Built to compound?

[body]     We work with 4-6 clients per quarter.
           If you're building something serious,
           let's talk.

[button]   Start a project →

[divider]

[contact row]
  Email             Phone              Location
  hello@compound.az +994 XX XXX XX XX  Baku
```

**Detallar:**
- Display başlıq centerlənmiş ola bilər (homepage-də yeganə center text)
- "Start a project" button ağ background, qara mətn (inverse-də kontrast)
- Email/phone interaktivdir (`mailto:`, `tel:`)
- Heç bir form burada deyil (form yalnız `/contact`-da)

---

### 1.10 Footer

**Roksman problemi:** Logo + nav təkrarı + WhatsApp link. Hamısı budur.

**Compound həlli:**

4 sütunlu footer + alt sətir.

**Sütun 1: Brand**
- Logomark + wordmark (böyük versiya)
- Tagline: "Growth infrastructure for mid-size businesses."
- Address: Baku, Azerbaijan

**Sütun 2: Navigation**
- Work
- Services
- About
- Journal
- Contact

**Sütun 3: Connect**
- Email
- LinkedIn
- GitHub (əgər var)
- Behance / Dribbble (əgər var)

**Sütun 4: Newsletter (opsional)**
- "Quarterly notes on growth infrastructure."
- Email input + Subscribe button

**Alt sətir (hairline ilə ayrılır):**
- Sol: `© 2026 Compound. All rights reserved.`
- Orta: Privacy · Terms
- Sağ: dil seçici (AZ / EN / RU)

**Vacib qayda:** Footer-də **WhatsApp floating button YOXDUR** (Roksman-dan fərqli olaraq). WhatsApp Azərbaycan B2C üçün uyğundur, B2B premium positioning üçün yox. Əlaqə email və ya formla.

---

## SƏHIFƏ 2: Work indeks (`/work`)

**Roksman problemi:** Sadəcə URL siyahısı. Şəkil yox, kateqoriya filter işləmir.

**Compound həlli:**

**Üst hissə:**
- Page title: `Work` (h1)
- Sub: `Selected projects from the last 3 years.`
- Filter chips: `All · Web Platforms · Brand · Growth · AI Automation`

**Grid:**
- 2 sütunlu masonry (desktop), 1 sütun (mobile)
- Hər project card: cover image (aspect-[4/5]) + sector tag + project name + outcome line
- Hover: card altdan 4px qalxır (subtle), grayscale 0-a düşür

**Hər card → `/work/[slug]`** səhifəsinə link

---

## SƏHIFƏ 3: Case study (`/work/[slug]`)

**Roksman problemi:** Yoxdur. Sadəcə xarici link.

**Compound həlli:**

Tam case study strukturu (bu sənin satış silahındır).

**Bölmələr:**

1. **Cover** — Tam genişlikdə hero şəkil + project name overlay
2. **Meta** — Client, sector, year, services, duration, role (Compound rolu)
3. **Context** — Problem nədir, müştəri haradan başlayırdı
4. **Approach** — Necə düşündük, hansı qərarlar verdik
5. **Solution** — Nə qurduq (şəkil galerysi, ekran görüntüləri)
6. **Outcome** — Nəticə rəqəmlərlə: before/after metrics
7. **Quote** — Müştəri sözü
8. **Tech stack** — İstifadə olunan texnologiyalar (badge formatda)
9. **Next project** — Növbəti case study-yə keçid (sticky pagination)

Hər case study URL: `/work/[client-slug]`

---

## SƏHIFƏ 4: Services (`/services`)

Homepage-dəki services bölməsinin genişlənmiş versiyası. Hər servis üçün dedicated section.

**Hər servis bölməsi:**
- Service name (h1)
- Long description (2-3 paragraph)
- What's included (bullet list)
- Process variant (xidmət üçün xüsusi)
- Pricing range (transparency!)
- Bağlı case studies (2-3)
- "Start with this service" CTA

---

## SƏHIFƏ 5: About (`/about`)

**Roksman problemi:** 3 paraqraf generic mətn. Komanda yox, dəyərlər yox.

**Compound həlli:**

1. **Hero** — Position statement (1 cümlə manifesto)
2. **Manifesto** — 3-4 paraqraf, niyə Compound mövcuddur
3. **Principles** — 4-6 prinsip, hər biri qısa
4. **Team** — Komanda üzvləri (foto, ad, rol, qısa bio)
5. **Office / Studio** — 1 şəkil + ünvan
6. **Open positions** — Vakansiyalar (əgər varsa, yoxdursa "We're not hiring right now.")

---

## SƏHIFƏ 6: Contact (`/contact`)

**Roksman problemi:** Bilinmir, amma çox güman ki sadə form.

**Compound həlli:**

2 sütun:

**Sol sütun:** Form
- Name
- Email
- Company
- Project type (select: Brand / Web / Growth / AI / Other)
- Budget range (select)
- Message
- Submit → "Start a project"

**Sağ sütun:** Direct contact + FAQ kiçik
- Email: hello@compound.az
- Phone: +994 XX XXX XX XX (yalnız iş saatları)
- LinkedIn
- Studio address + map (kiçik, monoxrom)
- "What happens after I submit?" mini-FAQ (3 sual)

---

## Səhifə-arası vizual ardıcıllıq

Hər səhifədə bu strukturu qoru:

1. Nav (sticky, eyni)
2. Hero / page header (h1 + sub)
3. Main content
4. CTA section (eyni komponent təkrarlanır)
5. Footer

Bu **tutarlılıq** Roksman-ın səhifələri arasında olmayan struktur ahəngdarlığı yaradır.