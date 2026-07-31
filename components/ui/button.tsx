import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-ink text-white hover:bg-ink/85 shadow-soft hover:-translate-y-0.5",
        brand:
          "bg-brand text-white shadow-[0_1px_2px_rgba(14,16,22,0.04),0_10px_28px_-8px_rgba(51,85,255,0.55)] hover:bg-brand-700 hover:-translate-y-0.5",
        amber:
          "bg-amber text-white shadow-[0_1px_2px_rgba(14,16,22,0.04),0_10px_28px_-8px_rgba(255,122,69,0.55)] hover:bg-amber-700 hover:-translate-y-0.5",
        outline:
          "border border-border bg-card text-ink hover:border-ink/30 hover:-translate-y-0.5 hover:shadow-soft",
        ghost: "text-ink hover:bg-ink/5",
        white:
          "bg-white text-navy-900 shadow-soft hover:-translate-y-0.5 hover:shadow-card-hover",
        danger: "bg-danger/10 text-danger hover:bg-danger/15",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-[13px]",
        lg: "h-13 px-7 text-base",
        icon: "h-9 w-9 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
