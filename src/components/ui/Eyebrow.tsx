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
