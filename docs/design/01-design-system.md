# Compound — Design System Foundation

> Bu fayl Compound saytının vizual təməlidir. Bütün komponentlər, səhifələr və animasiyalar bu sənəddəki qaydalara tabedir. Roksman-ın struktur skeleti referans götürülüb, lakin onun bütün vizual zəiflikləri (generic şablon hissi, sınıq statistika, zəif iyerarxiya, dekor-kimi sosial sübut) burada həll edilib.

---

## 1. Brand əsasları

| Element | Dəyər |
|---|---|
| Ad | Compound |
| Positioning | Growth infrastructure, not an agency |
| Slogan | Built to compound |
| Ton | Confident, restrained, technical, anti-marketing |
| Vizual prinsip | Strict monochrome. No gradients. No emoji. No stock illustrations. |

**Tone of voice qaydaları:**
- Aktiv səs, qısa cümlələr
- Heç bir superlativ ("ən yaxşı", "ən böyük", "lider", "innovativ")
- Heç bir agentlik klişesi ("kreativ", "passionate", "biz dinləyirik")
- Rəqəm və konkretlik hər yerdə (43 gün, 12 layihə, 3 nəfərlik komanda — boş şişirtmə yox)

---

## 2. Renk paleti (Tailwind v4 token-ları)

`app/globals.css` daxilində:

```css
@theme {
  /* Surface */
  --color-bg: #FFFFFF;
  --color-bg-subtle: #FAFAFA;
  --color-bg-muted: #F5F5F5;

  /* Ink */
  --color-ink: #0A0A0A;
  --color-ink-secondary: #525252;
  --color-ink-muted: #A3A3A3;

  /* Line */
  --color-line: #E5E5E5;
  --color-line-strong: #D4D4D4;

  /* Inverse (dark sections) */
  --color-inverse-bg: #0A0A0A;
  --color-inverse-ink: #FAFAFA;
  --color-inverse-line: #262626;

  /* Accent — yalnız 1 yerdə işlənir: focus ring, link underline hover */
  --color-accent: #0A0A0A;
}
```

**Qayda:** Heç bir mavi, yaşıl, qırmızı rəng. Heç bir gradient. Yalnız 5 boz tonu + qara + ağ. Brand-ın güclülüyü bu sərtlikdən gəlir.

**Dark sections:** Hero və CTA bölmələri qara (`bg-inverse-bg`) ola bilər. Bütün digərləri ağ (`bg-bg`).

---

## 3. Tipografiya

```ts
// app/layout.tsx
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
```

| Token | Class | İstifadə |
|---|---|---|
| `display` | `text-[clamp(3.5rem,8vw,7rem)] leading-[0.95] tracking-[-0.04em] font-medium` | Hero başlığı, yalnız 1 dəfə per page |
| `h1` | `text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] tracking-[-0.03em] font-medium` | Səhifə başlıqları |
| `h2` | `text-[clamp(1.875rem,3vw,2.5rem)] leading-[1.1] tracking-[-0.02em] font-medium` | Section başlıqları |
| `h3` | `text-xl md:text-2xl leading-[1.2] tracking-[-0.01em] font-medium` | Card/sub başlıqlar |
| `body` | `text-base md:text-lg leading-[1.55] text-ink-secondary` | Paraqraf |
| `body-sm` | `text-sm leading-[1.55] text-ink-secondary` | Köməkçi mətn |
| `label` | `text-xs uppercase tracking-[0.14em] font-mono text-ink-muted` | Section eyebrow ("01 — Services"), tarix, kateqoriya |
| `mono` | `font-mono text-sm` | Rəqəmlər, ID, kod fraqmentləri |

**Qaydalar:**
- Bütün başlıqlar `font-medium` (500). `font-bold` istifadə etmə.
- Letter-spacing böyük başlıqlarda mənfi (`-0.04em` → `-0.02em`) — Geist bu cür gözəl görünür.
- `text-ink` = primary, `text-ink-secondary` = body, `text-ink-muted` = meta. Bu hierarchy həmişə qorunur.
- Eyebrow label-lar mono şriftdə, kiçik, uppercase — Roksman-da olmayan bu kiçik detay brand-i premium edir.

---

## 4. Spacing və layout

**Container:**
```tsx
<div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
```

**Section spacing:**
- Standart section: `py-24 md:py-32 lg:py-40`
- Tight section: `py-16 md:py-20`
- Hero: `pt-32 pb-24 md:pt-40 md:pb-32`

**Grid sistemi:**
- 12 column grid
- Gap: `gap-x-6 md:gap-x-8 gap-y-12`
- Komponent daxili 4px scale (4, 8, 12, 16, 24, 32, 48, 64, 96)

**Vacib qayda — Roksman fix:** Roksman-da hər bölmənin vizual çəkisi eynidir. Compound-da bu belə deyil. Hero və case studies "böyük" hiss olunur (geniş spacing, böyük tipografiya), services və FAQ "sıx" və işgüzar hiss olunur. Bu **vizual ritm** brand-i unforgettable edir.

---

## 5. Border və line işi

Roksman heç bir line işi etmir — hər şey card-larda örtülüb. Compound-da əksinə — **hairline divider-lər brand DNA-sıdır**.

```css
.hairline { @apply border-t border-line; }
.hairline-strong { @apply border-t border-line-strong; }
```

İstifadə yerləri:
- Hər section-un yuxarısında 1px line
- Eyebrow label ilə başlıq arasında 1px line + 16px boşluq
- Footer-də sütunlar arasında vertikal line
- Case study card-larında məzmunla meta arasında 1px line

Border radius:
- Cards: `rounded-none` (kvadrat — brand logosuna uyğun)
- Buttons: `rounded-full` (kontrast yaradır)
- Image container: `rounded-lg` (yalnız 8px)

---

## 6. Logo və brand mark

Üç ascending offset kvadrat. SVG-də bu cür struktur:

```tsx
// components/brand/Logomark.tsx
export function Logomark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="Compound">
      <rect x="0" y="14" width="8" height="8" fill="currentColor" />
      <rect x="8" y="8" width="8" height="8" fill="currentColor" />
      <rect x="16" y="2" width="8" height="8" fill="currentColor" />
    </svg>
  );
}
```

Logo + wordmark birlikdə:
```tsx
<Link href="/" className="flex items-center gap-2.5">
  <Logomark className="h-5 w-5" />
  <span className="text-base font-medium tracking-[-0.02em]">Compound</span>
</Link>
```

---

## 7. Motion sistemi

Roksman-da animasiya ya yoxdur, ya da sınıqdır (statistika "0+" qalır). Compound-da motion **incə və məqsədli**dir.

**Library:** `framer-motion` (Next.js 15 ilə uyğun)

**Standart variant-lar:**

```ts
// lib/motion.ts
export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const stagger = {
  show: { transition: { staggerChildren: 0.06 } },
};

export const reveal = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};
```

**Qaydalar:**
- Heç bir bounce, heç bir elastic easing
- `ease: [0.22, 1, 0.36, 1]` — bütün motion-da bu easing (Linear/Vercel istifadə edir)
- Maksimum 16px translate, 600ms duration
- Scroll-triggered animation `whileInView={{ once: true, margin: "-100px" }}`
- Hover-də scale yoxdur. Yalnız opacity və ya underline.

**Count-up (Roksman fix):** Statistika count-up real animasiya olacaq. `useInView` + `framer-motion`-un `useMotionValue` + `useTransform`-u ilə. Heç vaxt "0+" placeholder göstərmir — JS pozulsa belə server-side render-də final rəqəm göstərilir.

---

## 8. İmage handling

**Komponent:** `next/image` hər yerdə. Heç vaxt `<img>` istifadə etmə.

**Qaydalar:**
- Case study cover: `aspect-[16/10]` və ya `aspect-[4/3]`
- Portfolio grid: `aspect-[4/5]` (portrait, Roksman flat 16:9-dan fərqlənmək üçün)
- Bütün şəkillərin üstündə default `bg-bg-muted` placeholder
- `priority` yalnız hero-da

**Filter:** Bütün portfolio şəkilləri default `grayscale-[20%]` hover-də `grayscale-0`. Bu monoxrom brand-ə uyğunlaşır və layihələrin müxtəlif rənglərini bir-birinə yaxınlaşdırır.

---

## 9. Iconography

**Heç bir flat icon library yox.** Roksman generic Elementor ikon-larından əziyyət çəkir. Compound-da:

- Funksional ikon: `lucide-react` (1.5px stroke, monoline)
- Brand ikon: özümüz çəkilmiş, geometrik (kvadratlardan qurulmuş, logoya uyğun)
- Service-lər üçün **emoji və ya generic icon istifadə ETMƏ** — sadəcə nömrə + başlıq + təsvir

---

## 10. Accessibility

- Bütün interaktiv elementlərdə `focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2`
- Kontrast: minimum AA (təmin olunub — qara/ağ)
- Bütün ikonlar `aria-hidden` və ya `aria-label`
- Scroll-triggered animations `prefers-reduced-motion: reduce` halında deaktiv olur

```ts
// lib/motion.ts
import { useReducedMotion } from "framer-motion";
```

---

## 11. Texniki konfiqurasiya

**Tailwind v4:**
```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  /* token-lar yuxarıda */
}

@layer base {
  html { scroll-behavior: smooth; }
  body { @apply bg-bg text-ink antialiased; font-feature-settings: "ss01", "cv11"; }
  ::selection { @apply bg-ink text-bg; }
}
```

**Font feature settings:** `ss01` və `cv11` Geist-in alternativ glyph-larıdır — `a` və `g` daha texniki görünür.

---

## 12. Çəkin diqqəti — qaçınmaq lazım olanlar (anti-pattern siyahısı)

Roksman və digər AZ agentlik saytlarında olan və Compound-da QƏTI olmayacaq şeylər:

- ❌ Stok şəkillər (handshake, lightbulb, team meeting)
- ❌ Gradient background-lar
- ❌ Animasiyalı emojilər və ya flat illustration
- ❌ "Innovative", "creative", "passionate" sözləri
- ❌ Card-larda drop shadow
- ❌ Carousel/slider (Roksman bunu istifadə etmir, biz də etmirik)
- ❌ Hero-da rotating headline ("We build [websites/apps/brands]")
- ❌ Background video
- ❌ Parallax scrolling
- ❌ "We are X-y, Y-y, Z-y" tipli üçlü adjective listing
- ❌ Müştəri logoları üçün auto-scroll carousel
- ❌ Cookie banner pop-up (consent yalnız EU traffic üçün)

---

## 13. Performans hədəfləri

- Lighthouse Performance: **95+**
- LCP: < 1.5s
- CLS: 0
- TBT: < 100ms
- Roksman PageSpeed-də 50-65 alır. Biz **2x üstün olmalıyıq** — bu mövqenin texniki sübutudur.