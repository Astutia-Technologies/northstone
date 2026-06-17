import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { Check } from "lucide-react";

export const Route = createFileRoute("/property-management")({
  head: () => ({
    meta: [
      { title: "Property Management for Landlords — Northstone" },
      { name: "description", content: "Full-service property management for landlords across the UK and Scotland — tenant find, compliance, rent collection, maintenance and reporting." },
      { property: "og:title", content: "Property Management for Landlords" },
      { property: "og:description", content: "A calm, named-contact service for landlords across the UK with a focus on Scotland." },
    ],
  }),
  component: PMPage,
});

const includes = [
  "Tenant sourcing, referencing and right-to-rent checks",
  "Tenancy paperwork, deposit registration and renewals",
  "Quarterly inspections and condition reporting",
  "Rent collection, arrears handling and statements",
  "24/7 maintenance triage with vetted contractors",
  "Compliance tracking — gas, electrical, EPC, smoke & CO",
];

function PMPage() {
  return (
    <>
      <PageHeader
        eyebrow="Property Management"
        title={<>The full discipline of letting, <span className="italic gold-gradient-text">handled with care.</span></>}
        description="A single accountable service across the tenancy lifecycle — from finding the right tenant to keeping the property compliant, occupied and well-kept."
      >
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-medium text-stone hover:bg-navy-deep">
          Request property management
        </Link>
      </PageHeader>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <Reveal>
          <div className="rounded-3xl border border-navy/8 bg-card p-10 sm:p-12">
            <h2 className="font-display text-2xl text-navy">What's included</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {includes.map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm text-charcoal/80">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Check className="h-3 w-3" />
                  </span>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <CTASection eyebrow="Ready to talk?" title="Tell us about your property" ctaLabel="Start an enquiry" />
    </>
  );
}
