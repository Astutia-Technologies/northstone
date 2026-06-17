import { CTASection } from "@/components/site/CTASection";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Northstone Property Management" },
      {
        name: "description",
        content:
          "Northstone Property Management supports landlords across the UK with a focus on Scotland — built on diligence, transparency and considered care.",
      },
      { property: "og:title", content: "About Northstone Property Management" },
      {
        property: "og:description",
        content:
          "A property management business built on diligence, transparency and considered care.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    title: "Diligence",
    body: "Compliance first, always. We treat the unglamorous detail as the most important part of the work.",
  },
  {
    title: "Transparency",
    body: "Clear fees, plain-language reporting, and answers when you ask — not three working days later.",
  },
  {
    title: "Stewardship",
    body: "Your property is an asset and a home. We hold both responsibilities with equal weight.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Northstone"
        title={
          <>
            A property partner, <span className="italic gold-gradient-text">not a portal.</span>
          </>
        }
        description="Northstone Property Management was founded to bring considered, accountable service to a category that too often treats landlords as ticket numbers."
      />

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <Reveal>
          <div className="rounded-3xl border border-navy/8 bg-card p-10 text-lg leading-relaxed text-charcoal/80 sm:p-14">
            <p>
              We work with landlords, property owners and partners across the United Kingdom, with
              our primary focus on Scotland. From a single residential unit to a block portfolio,
              every relationship begins with the same thing — a real conversation about what you
              own, what it earns, and what it asks of you.
            </p>
            <p className="mt-5">
              From there, we shape a management plan that fits — built on a named point of contact,
              clear reporting, and an unshakeable baseline of compliance and care.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i}>
              <div className="h-full rounded-3xl border border-navy/8 bg-stone-warm p-7">
                <h3 className="font-display text-xl text-navy">{v.title}</h3>
                <p className="mt-3 text-sm text-charcoal/70">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection eyebrow="Work with us" title="Start with a conversation" />
    </>
  );
}
