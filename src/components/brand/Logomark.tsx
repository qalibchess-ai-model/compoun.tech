import { cn } from "@/lib/utils";

export function Logomark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-label="Compound"
      className={cn("h-6 w-6", className)}
    >
      <rect x="0" y="14" width="8" height="8" fill="currentColor" />
      <rect x="8" y="8" width="8" height="8" fill="currentColor" />
      <rect x="16" y="2" width="8" height="8" fill="currentColor" />
    </svg>
  );
}
