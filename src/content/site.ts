// Centralised content layer — swap with CMS later without touching components.

export const site = {
  name: "Northstone",
  fullName: "Northstone Property Management",
  domain: "northstoneproperty.co.uk",
  companyNumber: "17243480",
  email: "hello@northstoneproperty.co.uk",
  phonePlaceholder: "Phone — coming soon",
  region: "United Kingdom · Focus on Scotland",
  tagline: "Property management portal",
  heroBackgroundImage: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1920&q=80",
};

export const nav = [
  { label: "Services", to: "/services" as const },
  { label: "Properties", to: "/properties" as const },
  { label: "How it works", to: "/how-it-works" as const },
  { label: "About", to: "/about" as const },
  { label: "FAQs", to: "/faqs" as const },
  { label: "Contact", to: "/contact" as const },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  href: "/property-management" | "/landlord-support" | "/services";
};

export const services: Service[] = [
  {
    slug: "residential-lettings",
    title: "Residential Lettings",
    short: "Full-service letting for single units and portfolios.",
    description:
      "From tenant sourcing and referencing to renewals and rent collection — a calm, accountable letting service built around long tenancies and well-kept homes.",
    bullets: [
      "Tenant find & referencing",
      "Compliance & inventories",
      "Rent collection & arrears handling",
    ],
    href: "/property-management",
  },
  {
    slug: "block-leasehold",
    title: "Block & Leasehold",
    short: "Diligent management for blocks and developments.",
    description:
      "Transparent service charge budgeting, planned maintenance and clear leaseholder communication — managed with the rigour the role deserves.",
    bullets: [
      "Service charge & accounts",
      "Planned & reactive works",
      "AGMs & leaseholder relations",
    ],
    href: "/services",
  },
  {
    slug: "commercial-property",
    title: "Commercial Property",
    short: "Stewardship for retail, office and mixed-use assets.",
    description:
      "Lease management, occupier liaison and asset reporting — tuned to the operational realities of commercial portfolios.",
    bullets: ["Lease event management", "Occupier relations", "Asset performance reporting"],
    href: "/services",
  },
  {
    slug: "property-sales",
    title: "Property Sales",
    short: "Sales advice for landlords exiting positions.",
    description:
      "Whether selling tenanted or with vacant possession, we time the market, prepare the asset and coordinate the transaction end-to-end.",
    bullets: ["Tenanted & vacant sales", "Asset preparation", "Solicitor coordination"],
    href: "/services",
  },
  {
    slug: "rent-to-rent",
    title: "Rent to Rent",
    short: "Guaranteed-rent partnerships with full operational care.",
    description:
      "A guaranteed monthly rent, no voids, and a property returned in the condition it was given — suited to landlords who want hands-off certainty.",
    bullets: ["Guaranteed monthly rent", "Zero voids & no fees", "Property returned cared-for"],
    href: "/landlord-support",
  },
];

export const stats = [
  { value: "100%", label: "Compliance-first onboarding" },
  { value: "24/7", label: "Maintenance coordination" },
  { value: "UK", label: "Scotland-focused coverage" },
  { value: "1:1", label: "Named point of contact" },
];

export const steps = [
  {
    n: "01",
    title: "Introductory conversation",
    body: "A 20-minute call to understand your portfolio, goals and pressures. No obligation, no pitch.",
  },
  {
    n: "02",
    title: "Property assessment",
    body: "We review condition, compliance, tenancy status and market position — and propose a tailored management plan.",
  },
  {
    n: "03",
    title: "Structured onboarding",
    body: "Documents collected, inventories prepared, compliance gaps closed. You'll know exactly what's happening at every step.",
  },
  {
    n: "04",
    title: "Active management",
    body: "A named manager, scheduled reporting, fast responses — and quiet, dependable stewardship of your property.",
  },
];

export const faqs = [
  {
    group: "Getting started",
    items: [
      {
        q: "Which areas do you cover?",
        a: "Our primary focus is Scotland, with selected coverage across the wider UK subject to availability. The best way to confirm is to send us the property location and we'll come straight back to you.",
      },
      {
        q: "How quickly can you take over an existing tenancy?",
        a: "Typically within 2–4 weeks once compliance documents and tenancy paperwork are in hand. We coordinate the handover with your current agent so tenants feel no disruption.",
      },
      {
        q: "Do I need to sign a long contract?",
        a: "No. Our management agreements are designed to feel fair on both sides, with sensible notice periods rather than long lock-ins.",
      },
    ],
  },
  {
    group: "Fees & reporting",
    items: [
      {
        q: "How are your fees structured?",
        a: "Fees depend on the service mix and portfolio scale. We quote transparently after the initial property assessment — no hidden charges, no surprise add-ons.",
      },
      {
        q: "What reporting will I receive?",
        a: "Monthly statements, periodic inspection reports, and an annual portfolio review. You'll always have a named contact, not a ticket queue.",
      },
    ],
  },
  {
    group: "Compliance & maintenance",
    items: [
      {
        q: "How do you handle compliance?",
        a: "We treat compliance as the baseline — gas, electrical, EPC, smoke/CO, deposit protection and tenancy paperwork all tracked centrally with proactive renewals.",
      },
      {
        q: "What happens with maintenance issues?",
        a: "Tenants report issues via a single channel, we triage, instruct vetted contractors, and keep you informed against an agreed authorisation limit.",
      },
    ],
  },
];

export const enquiryTypes = [
  "Property management",
  "Landlord support",
  "Block & leasehold",
  "Commercial property",
  "Property sales",
  "Rent to rent",
  "General enquiry",
] as const;

export const gdprConsent =
  "I consent to Northstone Property Management contacting me about my enquiry. I have read and agree to the Privacy Policy.";
