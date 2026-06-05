import { cn } from "@/lib/utils";
import { CountUp } from "@/components/motion/CountUp";

interface MetricCardProps {
  value: number;
  suffix: string;
  label: string;
  className?: string;
}

export function MetricCard({ value, suffix, label, className }: MetricCardProps) {
  return (
    <div className={cn("border-t border-line pt-6", className)}>
      <div className="text-[clamp(3rem,6vw,5rem)] font-medium tracking-[-0.03em] leading-none text-ink">
        <CountUp end={value} suffix={suffix} />
      </div>
      <div className="mt-4 text-sm text-ink-secondary">{label}</div>
    </div>
  );
}
