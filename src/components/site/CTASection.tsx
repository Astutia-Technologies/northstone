import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTASection({
  eyebrow = "Begin a conversation",
  title = "Let's discuss your portfolio",
  body = "A 20-minute introductory call, no obligation. We listen first, advise second.",
  ctaLabel = "Request a consultation",
  ctaTo = "/contact",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  ctaLabel?: string;
  ctaTo?: "/contact" | "/services";
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[2.5rem] bg-navy p-10 text-stone shadow-elegant sm:p-16"
      >
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="relative max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-gold-soft">{eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl text-balance sm:text-5xl">{title}</h2>
          <p className="mt-5 max-w-xl text-stone/75">{body}</p>
          <Link
            to={ctaTo}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-navy shadow-gold transition hover:bg-gold-soft"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
