export type ListingType = "rent" | "buy";
export type PropertyType = "flat" | "house" | "bungalow" | "commercial";

export type Property = {
  slug: string;
  title: string;
  listingType: ListingType;
  propertyType: PropertyType;
  beds: number;
  baths: number;
  price: number;
  location: string;
  postcode: string;
  description: string;
  image: string;
  featured: boolean;
};

export const properties: Property[] = [
  {
    slug: "new-town-flat-edinburgh",
    title: "Elegant Georgian flat in New Town",
    listingType: "rent",
    propertyType: "flat",
    beds: 2,
    baths: 1,
    price: 1450,
    location: "Edinburgh",
    postcode: "EH2 4DR",
    description:
      "A beautifully proportioned two-bedroom flat on a quiet New Town street, with high ceilings, original cornicing and a modern kitchen. Walking distance to Princes Street and Waverley.",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    featured: true,
  },
  {
    slug: "west-end-apartment-glasgow",
    title: "West End sandstone apartment",
    listingType: "rent",
    propertyType: "flat",
    beds: 3,
    baths: 2,
    price: 1650,
    location: "Glasgow",
    postcode: "G12 8QQ",
    description:
      "Spacious three-bedroom apartment in Glasgow's West End, close to Byres Road. Bay windows, period features and a shared rear garden.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    featured: true,
  },
  {
    slug: "stockbridge-terrace-edinburgh",
    title: "Stockbridge terrace with garden",
    listingType: "buy",
    propertyType: "house",
    beds: 4,
    baths: 2,
    price: 625000,
    location: "Edinburgh",
    postcode: "EH3 6SS",
    description:
      "A charming four-bedroom terraced house in Stockbridge with a private rear garden, two reception rooms and excellent local schools nearby.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    featured: true,
  },
  {
    slug: "merchant-city-loft-glasgow",
    title: "Merchant City warehouse loft",
    listingType: "buy",
    propertyType: "flat",
    beds: 2,
    baths: 2,
    price: 385000,
    location: "Glasgow",
    postcode: "G1 1LE",
    description:
      "Converted warehouse loft with exposed brick, floor-to-ceiling windows and open-plan living in the heart of Merchant City.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    featured: false,
  },
  {
    slug: "aberdeen-seafront-flat",
    title: "Seafront flat with harbour views",
    listingType: "rent",
    propertyType: "flat",
    beds: 1,
    baths: 1,
    price: 950,
    location: "Aberdeen",
    postcode: "AB11 5HP",
    description:
      "A bright one-bedroom flat overlooking Aberdeen harbour. Modern finish throughout with allocated parking and lift access.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    featured: false,
  },
  {
    slug: "stirling-family-bungalow",
    title: "Detached bungalow with driveway",
    listingType: "buy",
    propertyType: "bungalow",
    beds: 3,
    baths: 2,
    price: 295000,
    location: "Stirling",
    postcode: "FK8 2DG",
    description:
      "Well-maintained detached bungalow on a quiet residential street. Large lounge, conservatory and a generous rear garden.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    featured: false,
  },
  {
    slug: "dundee-waterfront-apartment",
    title: "Waterfront apartment near V&A",
    listingType: "rent",
    propertyType: "flat",
    beds: 2,
    baths: 1,
    price: 1100,
    location: "Dundee",
    postcode: "DD1 4DE",
    description:
      "Contemporary two-bedroom apartment on Dundee's regenerated waterfront, moments from the V&A and railway station.",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
    featured: false,
  },
  {
    slug: "inverness-victorian-house",
    title: "Victorian villa near city centre",
    listingType: "buy",
    propertyType: "house",
    beds: 5,
    baths: 3,
    price: 475000,
    location: "Inverness",
    postcode: "IV2 4AG",
    description:
      "Impressive five-bedroom Victorian villa with original fireplaces, a modern extension and views towards the River Ness.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    featured: false,
  },
  {
    slug: "edinburgh-commercial-office",
    title: "Grade B office suite, Quartermile",
    listingType: "rent",
    propertyType: "commercial",
    beds: 0,
    baths: 2,
    price: 3200,
    location: "Edinburgh",
    postcode: "EH3 9GF",
    description:
      "Flexible open-plan office suite in Quartermile with meeting rooms, kitchen facilities and 24-hour access. Ideal for professional services.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    featured: false,
  },
  {
    slug: "glasgow-retail-unit",
    title: "Ground-floor retail unit, Shawlands",
    listingType: "buy",
    propertyType: "commercial",
    beds: 0,
    baths: 1,
    price: 210000,
    location: "Glasgow",
    postcode: "G41 3YF",
    description:
      "Prominent ground-floor retail unit on a busy Shawlands parade with good footfall and rear storage. Currently let on an Assured Shorthold basis.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    featured: false,
  },
  {
    slug: "perth-riverside-flat",
    title: "Riverside two-bedroom flat",
    listingType: "rent",
    propertyType: "flat",
    beds: 2,
    baths: 1,
    price: 875,
    location: "Perth",
    postcode: "PH2 8NX",
    description:
      "A well-presented two-bedroom flat beside the River Tay, with allocated parking and easy access to Perth city centre.",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    featured: false,
  },
  {
    slug: "aberdeen-family-home",
    title: "Four-bedroom family home, Cults",
    listingType: "buy",
    propertyType: "house",
    beds: 4,
    baths: 3,
    price: 550000,
    location: "Aberdeen",
    postcode: "AB13 0DH",
    description:
      "Detached family home in Cults with a double garage, landscaped garden and excellent schools within walking distance.",
    image: "https://images.unsplash.com/photo-1605276374102-dee22b3a5a0e?w=800&q=80",
    featured: false,
  },
];

export type PropertySearchParams = {
  type?: ListingType;
  location?: string;
  beds?: string;
  propertyType?: string;
  maxPrice?: string;
};

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function getHeroShowcaseProperties(): Property[] {
  const featured = properties.filter((p) => p.featured);
  const others = properties.filter((p) => !p.featured);
  return [...featured, ...others].slice(0, 4);
}

export function filterProperties(params: PropertySearchParams): Property[] {
  const location = params.location?.trim().toLowerCase();
  const minBeds = params.beds && params.beds !== "any" ? parseInt(params.beds, 10) : undefined;
  const maxPrice = params.maxPrice && params.maxPrice !== "any" ? parseInt(params.maxPrice, 10) : undefined;
  const propertyType = params.propertyType && params.propertyType !== "any" ? params.propertyType : undefined;

  return properties.filter((p) => {
    if (params.type && p.listingType !== params.type) return false;
    if (location) {
      const haystack = `${p.location} ${p.postcode} ${p.title}`.toLowerCase();
      if (!haystack.includes(location)) return false;
    }
    if (propertyType && p.propertyType !== propertyType) return false;
    if (minBeds !== undefined && !Number.isNaN(minBeds) && p.beds < minBeds) return false;
    if (maxPrice !== undefined && !Number.isNaN(maxPrice) && p.price > maxPrice) return false;
    return true;
  });
}

export function formatPrice(property: Property): string {
  const formatted = property.price.toLocaleString("en-GB");
  return property.listingType === "rent" ? `£${formatted} pcm` : `£${formatted}`;
}

export const rentPriceRanges = [
  { label: "Any price", value: "any" },
  { label: "Up to £800", value: "800" },
  { label: "Up to £1,000", value: "1000" },
  { label: "Up to £1,500", value: "1500" },
  { label: "Up to £2,000", value: "2000" },
  { label: "Up to £3,000", value: "3000" },
];

export const buyPriceRanges = [
  { label: "Any price", value: "any" },
  { label: "Up to £200k", value: "200000" },
  { label: "Up to £300k", value: "300000" },
  { label: "Up to £400k", value: "400000" },
  { label: "Up to £500k", value: "500000" },
  { label: "Up to £750k", value: "750000" },
];
