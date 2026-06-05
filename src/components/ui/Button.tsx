import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "inverse";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
}

const variants: Record<Variant, string> = {
  primary: "bg-ink text-bg hover:bg-ink-secondary",
  secondary: "bg-bg-muted text-ink hover:bg-line",
  ghost:
    "bg-transparent text-ink underline underline-offset-4 hover:no-underline",
  inverse: "bg-bg text-ink hover:bg-bg-muted",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  arrow,
  onClick,
}: ButtonProps) {
  const base = cn(
    "inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium",
    "transition-colors duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2",
    variants[variant],
    className
  );

  const content = (
    <>
      {children}
      {arrow && <span aria-hidden>→</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={base}>
        {content}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={base}>
      {content}
    </button>
  );
}
