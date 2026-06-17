import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { site } from "@/content/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Northstone Property Management" },
      { name: "description", content: "How Northstone Property Management collects, uses and protects personal data submitted through this website." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" description="How we handle the personal data you share with us." />
      <article className="prose prose-sm mx-auto max-w-3xl px-6 pb-24 text-charcoal/80 sm:prose-base">
        <p>
          This Privacy Policy explains how {site.fullName} ("we", "us") collects, uses and protects information submitted
          through {site.domain}.
        </p>
        <h2 className="mt-10 font-display text-2xl text-navy">Data we collect</h2>
        <p className="mt-3">
          We collect only the information you choose to submit through our enquiry forms — your name, contact details,
          property location and the content of your message. We also collect aggregated, non-identifying analytics
          information via Google Analytics 4, gated by your cookie consent choice.
        </p>
        <h2 className="mt-10 font-display text-2xl text-navy">How we use it</h2>
        <p className="mt-3">We use the information you submit only to respond to your enquiry and to provide the services you request.</p>
        <h2 className="mt-10 font-display text-2xl text-navy">Your rights</h2>
        <p className="mt-3">You may request a copy or deletion of any personal information we hold about you at any time by emailing <a href={`mailto:${site.email}`} className="text-navy underline">{site.email}</a>.</p>
        <h2 className="mt-10 font-display text-2xl text-navy">Cookies</h2>
        <p className="mt-3">A cookie consent banner is displayed before any analytics cookies fire. You can decline at any time and reset your choice by clearing your browser storage.</p>
      </article>
    </>
  );
}
