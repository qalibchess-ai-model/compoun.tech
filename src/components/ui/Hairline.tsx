import { cn } from "@/lib/utils";

export function Hairline({
  className,
  strong = false,
}: {
  className?: string;
  strong?: boolean;
}) {
  return (
    <hr
      className={cn(
        "border-0 border-t",
        strong ? "border-line-strong" : "border-line",
        className
      )}
    />
  );
}
