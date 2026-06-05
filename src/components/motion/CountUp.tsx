"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { EASE, useReducedMotionSafe } from "@/lib/motion";

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
}

function decimalsOf(n: number): number {
  if (Number.isInteger(n)) return 0;
  const str = n.toString();
  const dot = str.indexOf(".");
  return dot === -1 ? 0 : str.length - dot - 1;
}

export function CountUp({ end, duration = 1.8, suffix = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotionSafe();
  const decimals = decimalsOf(end);

  const count = useMotionValue(reduced ? end : 0);
  const formatted = useTransform(count, (v) => v.toFixed(decimals));

  useEffect(() => {
    if (reduced) {
      count.set(end);
      return;
    }
    if (inView) {
      const controls = animate(count, end, {
        duration,
        ease: EASE,
      });
      return controls.stop;
    }
  }, [inView, end, duration, count, reduced]);

  return (
    <span ref={ref} aria-label={`${end}${suffix}`}>
      <noscript>
        {end}
        {suffix}
      </noscript>
      <motion.span aria-hidden>{formatted}</motion.span>
      <span aria-hidden>{suffix}</span>
    </span>
  );
}
