import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Bath, BedDouble, MapPin } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { formatPrice, getPropertyBySlug } from "@/content/properties";

export const Route = createFileRoute("/properties/$slug")({
  head: ({ params }) => {
    const property = getPropertyBySlug(params.slug);
    const title = property
      ? `${property.title} — Northstone`
      : "Property not found — Northstone";
    return {
      meta: [
        { title },
        {
          name: "description",
          content: property?.description ?? "Property listing not found.",
        },
        { property: "og:title", content: title },
        { property: "og:description", content: property?.description ?? "" },
        ...(property ? [{ property: "og:image", content: property.image }] : []),
      ],
    };
  },
  component: PropertyDetailPage,
});

function PropertyDetailPage() {
  const { slug } = Route.useParams();
  const property = getPropertyBySlug(slug);

  if (!property) {
    return (
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 pt-40 text-center">
        <p className="font-display text-5xl text-navy">404</p>
        <h1 className="mt-4 font-display text-2xl text-navy">Property not found</h1>
        <p className="mt-2 text-sm text-charcoal/70">
          This listing may have been removed or the link is incorrect.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-stone hover:bg-navy-deep"
          >
            Browse properties
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-5 py-2.5 text-sm font-medium text-navy hover:bg-navy/5"
          >
            Back home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-36 sm:pt-44">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(176,125,58,0.18),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal>
            <Link
              to="/properties"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-navy/70 transition hover:text-gold"
            >
              <ArrowLeft className="h-4 w-4" />
              All properties
            </Link>
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-navy/10 shadow-elegant">
                <img
                  src={property.image}
                  alt={property.title}
                  className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:h-full lg:min-h-[420px]"
                />
              </div>
            </Reveal>

            <div>
              <Reveal delay={1}>
                <span className="rounded-full border border-navy/10 bg-stone-warm px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-navy">
                  {property.listingType === "rent" ? "To rent" : "For sale"}
                </span>
              </Reveal>
              <Reveal delay={2}>
                <h1 className="mt-4 font-display text-4xl text-balance text-navy sm:text-5xl">
                  {property.title}
                </h1>
              </Reveal>
              <Reveal delay={3}>
                <p className="mt-4 font-display text-3xl text-gold">{formatPrice(property)}</p>
              </Reveal>
              <Reveal delay={4}>
                <p className="mt-3 flex items-center gap-1.5 text-charcoal/70">
                  <MapPin className="h-4 w-4 text-gold" />
                  {property.location}, {property.postcode}
                </p>
              </Reveal>

              <Reveal delay={5}>
                <div className="mt-6 flex flex-wrap gap-4 text-sm text-charcoal/80">
                  {property.beds > 0 && (
                    <span className="flex items-center gap-2 rounded-full border border-navy/10 bg-stone-warm px-4 py-2">
                      <BedDouble className="h-4 w-4 text-gold" />
                      {property.beds} bedroom{property.beds !== 1 ? "s" : ""}
                    </span>
                  )}
                  <span className="flex items-center gap-2 rounded-full border border-navy/10 bg-stone-warm px-4 py-2">
                    <Bath className="h-4 w-4 text-gold" />
                    {property.baths} bathroom{property.baths !== 1 ? "s" : ""}
                  </span>
                  <span className="rounded-full border border-navy/10 bg-stone-warm px-4 py-2 capitalize">
                    {property.propertyType}
                  </span>
                </div>
              </Reveal>

              <Reveal delay={6}>
                <p className="mt-8 text-base leading-relaxed text-charcoal/80">{property.description}</p>
              </Reveal>

              <Reveal delay={7}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-navy shadow-gold transition hover:bg-gold-soft"
                  >
                    Enquire about this property
                  </Link>
                  <Link
                    to="/properties"
                    className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-6 py-3.5 text-sm font-medium text-navy hover:bg-navy/5"
                  >
                    View more properties
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
