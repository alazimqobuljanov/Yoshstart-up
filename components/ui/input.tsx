import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-xl border border-border bg-white px-3.5 text-[14.5px] text-ink placeholder:text-muted/70 transition-shadow focus:border-brand/40 focus:outline-none focus:ring-4 focus:ring-brand/10",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "flex w-full rounded-xl border border-border bg-white px-3.5 py-3 text-[14.5px] text-ink placeholder:text-muted/70 transition-shadow focus:border-brand/40 focus:outline-none focus:ring-4 focus:ring-brand/10",
      className
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";
