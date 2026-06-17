import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { services, site, stats, steps } from "@/content/site";

import { CTASection } from "@/components/site/CTASection";
import { FAQList } from "@/components/site/FAQList";
import { HeroPropertySearch } from "@/components/site/HeroPropertySearch";
import { HeroVisualLayer } from "@/components/site/HeroVisualLayer";
import { ServiceCard } from "@/components/site/ServiceCard";
import { useRef } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Northstone Property Management — Property management portal" },
      {
        name: "description",
        content:
          "Calm, accountable property management for landlords across the UK with a focus on Scotland. Residential lettings, block & leasehold, commercial, sales and rent-to-rent.",
      },
      { property: "og:title", content: "Northstone Property Management" },
      {
        property: "og:description",
        content: "Property management portal for landlords.",
      },
    ],
  }),
  component: HomePage,
});

const headlineWords = ["Property", "management", "portal"];

function HomePage() {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <>
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative isolate min-h-[100svh] overflow-hidden pt-36 sm:pt-44"
      >
        <HeroVisualLayer />

        <motion.div style={{ y, opacity }} className="relative z-10 mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-navy/10 bg-stone/60 px-4 py-1.5 text-xs text-navy backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              <span>{site.region}</span>
            </div>
          </Reveal>

          <h1 className="mx-auto mt-8 text-center font-display text-3xl leading-[1.02] text-balance text-navy sm:text-4xl md:text-5xl">
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block pr-[0.25em]"
              >
                {i === headlineWords.length - 1 ? (
                  <span className="italic gold-gradient-text">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>

          <Reveal delay={4}>
            <p className="mx-auto mt-7 max-w-2xl text-center text-lg font-medium text-navy sm:text-xl">
              A calm, accountable service for residential, block, commercial and rent-to-rent
              portfolios — with a named manager and the rigour your assets deserve.
            </p>
          </Reveal>

          <Reveal delay={5}>
            <div className="mx-auto mt-10 max-w-4xl">
              <HeroPropertySearch />
            </div>
          </Reveal>

          <Reveal delay={6}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 font-medium text-navy underline-offset-4 hover:text-gold hover:underline"
              >
                Request consultation <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <span className="text-navy/20">·</span>
              <Link
                to="/services"
                className="font-medium text-navy/70 underline-offset-4 hover:text-gold hover:underline"
              >
                Explore services
              </Link>
            </div>
          </Reveal>
        </motion.div>

        {/* Scroll cue */}
        <div className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center">
          <motion.div
            animate={reduce ? {} : { y: [0, 8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="h-10 w-6 rounded-full border border-navy/20 p-1"
          >
            <div className="mx-auto h-2 w-1 rounded-full bg-navy/40" />
          </motion.div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="relative border-y border-navy/8 bg-card">
        <Stagger className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden bg-navy/10 md:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.label} className="bg-card px-6 py-10 text-center">
              <p className="font-display text-4xl text-navy">{s.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-charcoal/60">{s.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-32">
        <div className="flex flex-col items-end justify-between gap-8 md:flex-row">
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.25em] text-gold">Services</p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-4 font-display text-4xl text-balance text-navy sm:text-5xl">
                One trusted partner across every property need.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={2}>
            <p className="max-w-md text-charcoal/70">
              From single residential units to commercial estates, we shape the service mix to your
              portfolio — and keep a named manager at the centre of every conversation.
            </p>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden bg-navy py-32 text-stone">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #F8F5F0 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.25em] text-gold-soft">How it works</p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-4 font-display text-4xl text-balance sm:text-5xl">
                A measured path from enquiry to active management.
              </h2>
            </Reveal>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-3xl border border-stone/10 bg-navy-deep/40 p-7 backdrop-blur transition hover:border-gold/40 hover:bg-navy-deep/60"
              >
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-4 w-4 text-gold" />
                  <span className="font-display text-sm tracking-[0.2em] text-gold">{s.n}</span>
                </div>
                <h3 className="mt-6 font-display text-xl">{s.title}</h3>
                <p className="mt-3 text-sm text-stone/70">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs teaser */}
      <section className="mx-auto max-w-5xl px-6 py-32">
        <div className="text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-gold">Common questions</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 font-display text-4xl text-balance text-navy sm:text-5xl">
              The things landlords most want to know.
            </h2>
          </Reveal>
        </div>
        <div className="mt-14">
          <FAQList limit={2} />
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/faqs"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-navy underline-offset-4 hover:text-gold hover:underline"
          >
            See all FAQs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
