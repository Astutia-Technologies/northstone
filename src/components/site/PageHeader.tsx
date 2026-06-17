import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-40 sm:pt-44">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(176,125,58,0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-gold">{eyebrow}</p>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="mt-4 font-display text-5xl text-balance text-navy sm:text-6xl md:text-7xl">{title}</h1>
        </Reveal>
        {description && (
          <Reveal delay={2}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-charcoal/70">{description}</p>
          </Reveal>
        )}
        {children && <Reveal delay={3}><div className="mt-8">{children}</div></Reveal>}
      </div>
    </section>
  );
}
