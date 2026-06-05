"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Logomark } from "@/components/brand/Logomark";
import { fadeUp, stagger, useReducedMotionSafe } from "@/lib/motion";
import { getDictionary } from "@/lib/dictionaries";
import { localizedPath, type Locale } from "@/lib/i18n";

interface HeroProps {
  lang: Locale;
}

export function Hero({ lang }: HeroProps) {
  const reduced = useReducedMotionSafe();
  const initial = reduced ? "show" : "hidden";
  const dict = getDictionary(lang);

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <Container>
        <motion.div
          variants={stagger}
          initial={initial}
          animate="show"
          className="max-w-5xl"
        >
          <motion.h1
            variants={fadeUp}
            className="text-[clamp(3.5rem,8vw,7rem)] leading-[0.95] tracking-[-0.04em] font-medium text-ink"
          >
            {dict.hero.titleLine1}
            <br />
            {dict.hero.titleLine2}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-10 max-w-xl text-lg md:text-xl text-ink-secondary leading-[1.55]"
          >
            {dict.hero.subtitle}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <Button href={localizedPath(lang, "/work")} variant="primary" arrow>
              {dict.hero.primaryCta}
            </Button>
            <Button href={localizedPath(lang, "/contact")} variant="ghost">
              {dict.hero.secondaryCta}
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 opacity-[0.04]"
      >
        <Logomark className="h-[400px] w-[400px]" />
      </div>
    </section>
  );
}
