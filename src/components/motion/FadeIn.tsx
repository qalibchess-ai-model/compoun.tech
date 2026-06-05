"use client";

import { useMemo, useRef, type ComponentType, type ElementType, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { EASE, useReducedMotionSafe } from "@/lib/motion";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  as = "div",
  className,
}: FadeInProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reduced = useReducedMotionSafe();

  const MotionTag = useMemo(
    () => motion.create(as as ComponentType<Record<string, unknown>>),
    [as],
  );

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}
