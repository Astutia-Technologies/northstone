import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { Reveal } from "@/components/site/Reveal";
import { site } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Northstone Property Management" },
      { name: "description", content: "Get in touch with Northstone Property Management. Send an enquiry and a member of the team will be in contact to discuss your property needs." },
      { property: "og:title", content: "Contact Northstone Property Management" },
      { property: "og:description", content: "Send an enquiry — we'll be in touch shortly." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={<>Let's talk about <span className="italic gold-gradient-text">your property.</span></>}
        description="Send us a few details and a member of the team will be in touch to arrange an introductory conversation."
      />
      <section className="mx-auto max-w-6xl px-6 pb-32">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="rounded-3xl border border-navy/10 bg-stone-warm p-8">
              <h2 className="font-display text-2xl text-navy">Get in touch</h2>
              <p className="mt-3 text-sm text-charcoal/70">
                We reply to every enquiry — typically within a working day.
              </p>
              <ul className="mt-8 space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-navy text-stone"><Mail className="h-4 w-4" /></span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-charcoal/60">Email</p>
                    <a href={`mailto:${site.email}`} className="font-medium text-navy hover:text-gold">{site.email}</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-navy text-stone"><Phone className="h-4 w-4" /></span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-charcoal/60">Phone</p>
                    <p className="text-charcoal/70">{site.phonePlaceholder}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-navy text-stone"><MapPin className="h-4 w-4" /></span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-charcoal/60">Coverage</p>
                    <p className="text-charcoal/70">{site.region}</p>
                  </div>
                </li>
              </ul>
              <p className="mt-10 text-xs text-charcoal/50">
                {site.fullName} · Company No. {site.companyNumber}
              </p>
            </div>
          </Reveal>

          <Reveal delay={1} className="md:col-span-7">
            <div className="rounded-3xl border border-navy/10 bg-card p-8 sm:p-10">
              <EnquiryForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
