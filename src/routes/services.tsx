import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ServiceCard } from "@/components/site/ServiceCard";
import { CTASection } from "@/components/site/CTASection";
import { services } from "@/content/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Northstone Property Management" },
      { name: "description", content: "Property management and landlord support across residential lettings, block & leasehold, commercial, sales and rent-to-rent." },
      { property: "og:title", content: "Property Management Services — Northstone" },
      { property: "og:description", content: "Residential, block, commercial, sales and rent-to-rent — managed with rigour and care." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={<>Five disciplines. <span className="italic gold-gradient-text">One standard of care.</span></>}
        description="Whatever the asset class, we apply the same diligence, the same named-contact service, and the same insistence on doing the small things properly."
      />
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}
        </div>
      </section>
      <CTASection />
    </>
  );
}
