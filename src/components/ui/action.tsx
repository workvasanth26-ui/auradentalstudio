import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "quiet";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<Variant, string> = {
  solid: "bg-primary text-primary-foreground hover:bg-bluegrey-deep",
  outline:
    "border border-input bg-transparent text-foreground hover:border-bluegrey-deep hover:bg-secondary/60",
  quiet:
    "px-0 py-0 text-sm font-medium text-bluegrey-deep underline-offset-4 hover:underline",
};

export function actionClass(variant: Variant = "solid", className?: string) {
  return cn(base, variants[variant], className);
}

export function ActionLink({
  to,
  variant = "solid",
  className,
  children,
}: {
  to: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link to={to} className={actionClass(variant, className)}>
      {children}
    </Link>
  );
}

export function ActionAnchor({
  variant = "solid",
  className,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant }) {
  return (
    <a className={actionClass(variant, className)} {...props}>
      {children}
    </a>
  );
}

export function ActionButton({
  variant = "solid",
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button className={actionClass(variant, className)} {...props}>
      {children}
    </button>
  );
}
