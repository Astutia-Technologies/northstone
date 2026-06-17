import { useState, type ReactNode } from "react";
import { useNavigate } from "@tanstack/react-router";
import { MapPin, Search } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { buyPriceRanges, rentPriceRanges, type ListingType } from "@/content/properties";

const propertyTypes = [
  { label: "Any type", value: "any" },
  { label: "Flat", value: "flat" },
  { label: "House", value: "house" },
  { label: "Bungalow", value: "bungalow" },
  { label: "Commercial", value: "commercial" },
];

const bedroomOptions = [
  { label: "Any beds", value: "any" },
  { label: "1+", value: "1" },
  { label: "2+", value: "2" },
  { label: "3+", value: "3" },
  { label: "4+", value: "4" },
];

export function HeroPropertySearch() {
  const navigate = useNavigate();
  const [listingType, setListingType] = useState<ListingType>("rent");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("any");
  const [beds, setBeds] = useState("any");
  const [maxPrice, setMaxPrice] = useState("any");

  const priceRanges = listingType === "rent" ? rentPriceRanges : buyPriceRanges;

  const handleSearch = () => {
    navigate({
      to: "/properties",
      search: {
        type: listingType,
        location: location.trim() || undefined,
        propertyType: propertyType !== "any" ? propertyType : undefined,
        beds: beds !== "any" ? beds : undefined,
        maxPrice: maxPrice !== "any" ? maxPrice : undefined,
      },
    });
  };

  return (
    <div className="rounded-3xl border border-navy/10 bg-card/80 p-5 shadow-elegant ring-1 ring-navy/5 backdrop-blur-xl sm:p-6">
      <Tabs
        value={listingType}
        onValueChange={(v) => {
          setListingType(v as ListingType);
          setMaxPrice("any");
        }}
      >
        <TabsList className="mb-5 h-11 w-full rounded-full bg-stone-warm p-1 sm:w-auto">
          <TabsTrigger
            value="rent"
            className="flex-1 rounded-full px-6 data-[state=active]:bg-navy data-[state=active]:text-stone sm:flex-none"
          >
            Rent
          </TabsTrigger>
          <TabsTrigger
            value="buy"
            className="flex-1 rounded-full px-6 data-[state=active]:bg-navy data-[state=active]:text-stone sm:flex-none"
          >
            Buy
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="space-y-4">
        <div>
          <label className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-charcoal/60">
            Location
          </label>
          <div className="relative">
            <MapPin className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gold" />
            <Input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Town, city or postcode"
              className="h-12 rounded-xl border-navy/10 bg-stone/60 pl-10 text-base shadow-sm focus-visible:ring-gold/40"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <Field label="Property type">
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger className="h-12 rounded-xl border-navy/10 bg-stone/60 text-base shadow-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {propertyTypes.map((t) => (
                  <SelectItem key={t.value} value={t.value}>
                    {t.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Field label="Bedrooms">
            <Select value={beds} onValueChange={setBeds}>
              <SelectTrigger className="h-12 rounded-xl border-navy/10 bg-stone/60 text-base shadow-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {bedroomOptions.map((b) => (
                  <SelectItem key={b.value} value={b.value}>
                    {b.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Field label="Max price">
            <Select value={maxPrice} onValueChange={setMaxPrice}>
              <SelectTrigger className="h-12 rounded-xl border-navy/10 bg-stone/60 text-base shadow-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {priceRanges.map((r) => (
                  <SelectItem key={r.value} value={r.value}>
                    {r.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
        </div>

        <button
          type="button"
          onClick={handleSearch}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gold text-sm font-medium text-navy shadow-gold transition hover:bg-gold-soft sm:text-base"
        >
          <Search className="h-4 w-4" />
          Search properties
        </button>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-charcoal/60">
        {label}
      </label>
      {children}
    </div>
  );
}
