import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { FAQList } from "@/components/site/FAQList";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — Northstone Property Management" },
      { name: "description", content: "Common questions from landlords about property management, fees, compliance and maintenance." },
      { property: "og:title", content: "FAQs — Northstone" },
      { property: "og:description", content: "What landlords most often want to know about property management." },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQs"
        title={<>Answers to the things <span className="italic gold-gradient-text">landlords ask first.</span></>}
        description="If something isn't covered here, send us a note — we reply to every enquiry, usually within a working day."
      />
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <FAQList />
      </section>
      <CTASection eyebrow="Still have questions?" title="Talk to a real person" />
    </>
  );
}
