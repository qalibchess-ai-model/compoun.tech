import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  inverse?: boolean;
  tight?: boolean;
  hairline?: boolean;
  id?: string;
}

export function Section({
  children,
  className,
  containerClassName,
  inverse = false,
  tight = false,
  hairline = false,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        tight ? "py-16 md:py-20" : "py-24 md:py-32 lg:py-40",
        inverse && "bg-inverse-bg text-inverse-ink",
        hairline && "border-t border-line",
        inverse && hairline && "border-inverse-line",
        className
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
