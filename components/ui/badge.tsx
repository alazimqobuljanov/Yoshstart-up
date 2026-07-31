import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10.5px] font-semibold uppercase tracking-wide",
  {
    variants: {
      variant: {
        brand: "bg-brand-50 text-brand-700",
        amber: "bg-amber-50 text-amber-700",
        neutral: "bg-ink/5 text-ink/70",
        white: "bg-white/10 text-white ring-1 ring-inset ring-white/20",
        outline: "border border-border text-muted",
      },
    },
    defaultVariants: { variant: "neutral" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
