import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { CTASection } from "@/components/site/CTASection";
import { steps } from "@/content/site";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — Northstone Property Management" },
      { name: "description", content: "Our property management process from first conversation through structured onboarding to active management." },
      { property: "og:title", content: "Our Process — Northstone" },
      { property: "og:description", content: "A measured path from enquiry to active property management." },
    ],
  }),
  component: HowPage,
});

function HowPage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.6", "end 0.4"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title={<>From first conversation to <span className="italic gold-gradient-text">active care.</span></>}
        description="No high-pressure pitch, no opaque onboarding. Four clear stages, each with someone you can name."
      />

      <section ref={ref} className="mx-auto max-w-4xl px-6 pb-32">
        <div className="relative pl-16 sm:pl-24">
          <div className="absolute bottom-0 left-6 top-0 w-px bg-navy/10 sm:left-10" />
          <motion.div style={{ height: lineHeight }} className="absolute left-6 top-0 w-px bg-gold sm:left-10" />

          <div className="space-y-16">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="relative"
              >
                <span className="absolute -left-[3.75rem] flex h-10 w-10 items-center justify-center rounded-full border border-gold bg-stone font-display text-sm text-gold sm:-left-[5.25rem]">
                  {s.n}
                </span>
                <h3 className="font-display text-3xl text-navy">{s.title}</h3>
                <p className="mt-3 max-w-2xl text-charcoal/70">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
