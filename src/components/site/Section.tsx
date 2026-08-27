import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  tone = "default",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "muted" | "beige";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-28",
        tone === "muted" && "bg-card",
        tone === "beige" && "bg-secondary/60",
        className,
      )}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-4 text-3xl leading-tight md:text-[2.6rem]">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>
      )}
    </Reveal>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="border-b border-border bg-card">
      <div className="container-page grid gap-12 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 text-4xl leading-[1.1] md:text-5xl">{title}</h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        </Reveal>
        {image && (
          <Reveal delay={120}>
            <img
              src={image}
              alt={imageAlt ?? ""}
              loading="lazy"
              width={1600}
              height={1104}
              className="w-full rounded-lg border border-border object-cover"
            />
          </Reveal>
        )}
      </div>
    </section>
  );
}
