import { cn } from "@/lib/utils";
import { Logomark } from "./Logomark";

export function Wordmark({
  className,
  logoClassName,
  textClassName,
}: {
  className?: string;
  logoClassName?: string;
  textClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Logomark className={cn("h-5 w-5", logoClassName)} />
      <span
        className={cn(
          "text-base font-medium tracking-[-0.02em]",
          textClassName
        )}
      >
        Compound
      </span>
    </span>
  );
}
