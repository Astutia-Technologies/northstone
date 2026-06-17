import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { site } from "@/content/site";

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    meta: [
      { title: "Terms of Use — Northstone Property Management" },
      { name: "description", content: "The terms governing use of the Northstone Property Management website." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of Use" description="The terms governing your use of this website." />
      <article className="prose prose-sm mx-auto max-w-3xl px-6 pb-24 text-charcoal/80 sm:prose-base">
        <p>
          By accessing {site.domain}, you agree to these Terms of Use. The website is provided by {site.fullName}
          (Company No. {site.companyNumber}) for informational purposes.
        </p>
        <h2 className="mt-10 font-display text-2xl text-navy">Information</h2>
        <p className="mt-3">Content on this website is provided in good faith and may be updated without notice. Nothing on this site constitutes legal, tax or financial advice.</p>
        <h2 className="mt-10 font-display text-2xl text-navy">Service availability</h2>
        <p className="mt-3">Our primary service area is Scotland, with selected coverage across the wider UK subject to availability. References to coverage are indicative and not a guarantee of service in any particular location.</p>
        <h2 className="mt-10 font-display text-2xl text-navy">Intellectual property</h2>
        <p className="mt-3">All content, marks and design elements on this site are the property of {site.fullName} unless otherwise stated.</p>
        <h2 className="mt-10 font-display text-2xl text-navy">Contact</h2>
        <p className="mt-3">For any queries about these terms, please email <a href={`mailto:${site.email}`} className="text-navy underline">{site.email}</a>.</p>
      </article>
    </>
  );
}
