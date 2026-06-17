import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { ArrowRight, Search } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { PropertyCard } from "@/components/site/PropertyCard";
import { Reveal } from "@/components/site/Reveal";
import { filterProperties } from "@/content/properties";

const searchSchema = z.object({
  type: z.enum(["rent", "buy"]).optional(),
  location: z.string().optional(),
  beds: z.string().optional(),
  propertyType: z.string().optional(),
  maxPrice: z.string().optional(),
});

export const Route = createFileRoute("/properties")({
  validateSearch: searchSchema,
  head: ({ search }) => {
    const location = search.location?.trim();
    const title = location
      ? `Properties in ${location} — Northstone`
      : "Properties — Northstone Property Management";
    return {
      meta: [
        { title },
        {
          name: "description",
          content: "Browse available properties to rent or buy across Scotland and the UK.",
        },
        { property: "og:title", content: title },
        {
          property: "og:description",
          content: "Find your next property with Northstone Property Management.",
        },
      ],
    };
  },
  component: PropertiesPage,
});

function PropertiesPage() {
  const search = Route.useSearch();
  const results = filterProperties(search);
  const location = search.location?.trim();

  const title = location ? (
    <>
      Properties in <span className="italic gold-gradient-text">{location}</span>
    </>
  ) : (
  <>
    Find your next <span className="italic gold-gradient-text">property.</span>
  </>
  );

  const activeFilters = [
    search.type && { label: search.type === "rent" ? "To rent" : "For sale", key: "type" },
    location && { label: location, key: "location" },
    search.propertyType && { label: search.propertyType, key: "propertyType" },
    search.beds && { label: `${search.beds}+ beds`, key: "beds" },
    search.maxPrice && { label: `Up to £${Number(search.maxPrice).toLocaleString("en-GB")}`, key: "maxPrice" },
  ].filter(Boolean) as { label: string; key: string }[];

  return (
    <>
      <PageHeader
        eyebrow="Properties"
        title={title}
        description={
          results.length > 0
            ? `${results.length} propert${results.length === 1 ? "y" : "ies"} matching your search.`
            : "No properties match your current filters — try broadening your search."
        }
      />

      <section className="mx-auto max-w-7xl px-6 pb-32">
        {activeFilters.length > 0 && (
          <Reveal>
            <div className="mb-8 flex flex-wrap items-center gap-2">
              {activeFilters.map((f) => (
                <span
                  key={f.key}
                  className="rounded-full border border-navy/10 bg-stone-warm px-3 py-1 text-xs font-medium capitalize text-navy"
                >
                  {f.label}
                </span>
              ))}
            </div>
          </Reveal>
        )}

        {results.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((property) => (
              <Reveal key={property.slug}>
                <PropertyCard property={property} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="rounded-3xl border border-navy/10 bg-stone-warm px-8 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy/5">
                <Search className="h-6 w-6 text-gold" />
              </div>
              <h2 className="mt-6 font-display text-2xl text-navy">No properties found</h2>
              <p className="mx-auto mt-3 max-w-md text-sm text-charcoal/70">
                We couldn't find any listings matching your criteria. Try adjusting your filters or
                search a different area.
              </p>
              <Link
                to="/"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-medium text-stone transition hover:bg-navy-deep"
              >
                Search again <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        )}
      </section>
    </>
  );
}
