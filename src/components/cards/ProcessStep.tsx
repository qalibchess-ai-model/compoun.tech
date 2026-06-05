import { cn } from "@/lib/utils";

interface ProcessStepProps {
  number: string;
  name: string;
  duration: string;
  description: string;
  deliverables: string[];
  className?: string;
}

export function ProcessStep({
  number,
  name,
  duration,
  description,
  deliverables,
  className,
}: ProcessStepProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-12 gap-8 border-t border-line py-10",
        className
      )}
    >
      <div className="col-span-12 md:col-span-4">
        <div className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
          {number}
        </div>
        <h3 className="mt-2 text-2xl font-medium tracking-[-0.02em] text-ink">
          {name}
        </h3>
        <div className="mt-3 font-mono text-sm text-ink-secondary">
          {duration}
        </div>
      </div>

      <div className="col-span-12 md:col-span-8">
        <p className="text-lg text-ink-secondary leading-[1.55]">
          {description}
        </p>
        {deliverables.length > 0 && (
          <ul className="mt-6 space-y-2">
            {deliverables.map((d) => (
              <li
                key={d}
                className="flex items-start gap-3 text-base text-ink"
              >
                <span aria-hidden className="text-ink-muted mt-1">
                  ·
                </span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
