import { Link } from "@tanstack/react-router";
import { Bath, BedDouble, MapPin } from "lucide-react";
import { formatPrice, type Property } from "@/content/properties";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <Link
      to="/properties/$slug"
      params={{ slug: property.slug }}
      className="group block overflow-hidden rounded-3xl border border-navy/8 bg-card shadow-[0_1px_2px_rgba(12,27,46,0.04)] transition-shadow duration-500 hover:shadow-elegant"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-4 top-4 rounded-full bg-navy/90 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-stone backdrop-blur-sm">
          {property.listingType === "rent" ? "To rent" : "For sale"}
        </span>
        {property.featured && (
          <span className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-medium text-navy">
            Featured
          </span>
        )}
      </div>

      <div className="p-6">
        <p className="font-display text-2xl text-navy">{formatPrice(property)}</p>
        <h3 className="mt-2 font-display text-lg text-navy transition-colors group-hover:text-gold">
          {property.title}
        </h3>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-charcoal/60">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-gold" />
          {property.location}, {property.postcode}
        </p>
        <div className="mt-4 flex items-center gap-4 text-sm text-charcoal/70">
          {property.beds > 0 && (
            <span className="flex items-center gap-1.5">
              <BedDouble className="h-4 w-4 text-gold" />
              {property.beds} bed{property.beds !== 1 ? "s" : ""}
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <Bath className="h-4 w-4 text-gold" />
            {property.baths} bath{property.baths !== 1 ? "s" : ""}
          </span>
          <span className="capitalize text-charcoal/50">{property.propertyType}</span>
        </div>
      </div>
    </Link>
  );
}
