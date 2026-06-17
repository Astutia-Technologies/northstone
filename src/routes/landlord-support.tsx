import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/landlord-support")({
  head: () => ({
    meta: [
      { title: "Landlord Support — Northstone Property Management" },
      { name: "description", content: "Tailored support for landlords and property owners — from one-off advice and compliance reviews to fully managed and guaranteed-rent arrangements." },
      { property: "og:title", content: "Landlord Support — Northstone" },
      { property: "og:description", content: "Tailored support for landlords and property owners across the UK and Scotland." },
    ],
  }),
  component: LandlordPage,
});

const tiers = [
  { name: "Advisory", body: "One-off consultations for compliance reviews, portfolio strategy, or a difficult tenancy situation." },
  { name: "Managed", body: "Full property management with a named contact, compliance baseline and proactive reporting." },
  { name: "Guaranteed rent", body: "Rent-to-rent partnerships with a guaranteed monthly figure, zero voids and the property returned as given." },
];

function LandlordPage() {
  return (
    <>
      <PageHeader
        eyebrow="Landlord Support"
        title={<>Support that <span className="italic gold-gradient-text">flexes</span> to your portfolio.</>}
        description="Whether you own one property or fifty, the right level of support changes over time. We meet you where you are — and adjust as you grow."
      >
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-medium text-stone hover:bg-navy-deep">
          Speak with a landlord adviser
        </Link>
      </PageHeader>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i}>
              <div className="h-full rounded-3xl border border-navy/8 bg-card p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-gold">Tier 0{i + 1}</p>
                <h3 className="mt-4 font-display text-2xl text-navy">{t.name}</h3>
                <p className="mt-3 text-sm text-charcoal/70">{t.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection eyebrow="Landlord enquiry" title="Tell us about your portfolio" ctaLabel="Start an enquiry" />
    </>
  );
}
