
# Northstone Property Management — Website Plan

A premium, animation-rich marketing site for landlords and property owners. Brand-aligned (Navy #0C1B2E, Gold #B07D3A, Stone #F8F5F0, Charcoal #2C2C2A), built with content sourced from a single typed content layer so a CMS can plug in later without re-touching components.

## Visual direction

- Editorial, calm-luxury aesthetic — think property-house meets quiet-luxury fintech. Navy + stone base, gold as a precious accent (not splashed everywhere).
- Display serif (Fraunces or Instrument Serif) paired with a refined sans (Geist / Inter Tight) for body. Loaded via `<link>` in the root head.
- Generous whitespace, large editorial type, subtle film-grain texture, soft gold-on-navy gradients.

## Header (centered pill → full-width on scroll)

- Renders as a floating, centered rounded-pill nav with backdrop blur at the top of every page.
- A scroll listener (threshold ~80px) animates it via Framer Motion `layout` + width/border-radius springs into a full-width navy bar with a thin gold underline.
- Logo wordmark left, links center, "Request a consultation" CTA right (gold).

## Hero with 3D

- React Three Fiber + drei: a slowly rotating low-poly architectural mass (abstract building/keystone) lit with two warm rim lights, sitting beside the headline. Falls back to a static SVG illustration on mobile / reduced-motion.
- Floating gold particles + subtle parallax on scroll.
- Headline uses a word-by-word reveal; sub-headline blurs in; two CTAs (Request consultation / Explore services).

## Card reveals & motion language

- Section reveals: blur + lift + stagger via Framer Motion `useInView`.
- Service cards: tilt on hover (CSS `@property` + pointer math), gold border-beam on hover, image zoom inside rounded mask, content slide-up.
- "How it works" steps: sticky scroll-driven progress rail with numbers that fill gold as the user scrolls.
- Stats / trust strip: counters animate up when in view.
- Respect `prefers-reduced-motion` everywhere.

## Pages & routes

Each is its own TanStack route file with unique SEO metadata:

- `/` Home — hero, services overview, how it works teaser, trust strip, FAQ teaser, CTA band
- `/about` — story, values, team placeholder
- `/services` — grid of five service categories (Residential lettings, Block & leasehold, Commercial, Sales, Rent-to-rent)
- `/property-management` — detail page + enquiry CTA
- `/landlord-support` — detail page + landlord enquiry CTA
- `/how-it-works` — animated process timeline
- `/faqs` — accordion grouped by topic
- `/contact` — enquiry form (visual only in v1; wiring to email is a later phase), placeholder phone, hello@ email
- `/privacy-policy`, `/terms-of-use` — long-form legal layouts

Footer on every page: company no. 17243480, domain, Scotland focus, legal links, cookie banner.

## CMS-ready content layer

All page copy, service items, FAQs, stats, and testimonials live in typed modules under `src/content/` (e.g. `services.ts`, `faqs.ts`, `pages/home.ts`) exporting plain objects. Components consume these via props. When a CMS is added later, the same shapes are fetched from the CMS — components stay untouched. This is the single most important architectural choice for the admin requirement.

## Forms

Built with react-hook-form + zod schemas matching the brief's field list (first/last name, email, UK phone with +44 support, enquiry type dropdown with the brief's options, property location, # properties, message, GDPR consent checkbox with the approved wording). Submission shows success state; backend wiring is deferred to a follow-up.

## Out of scope for this build (per brief v1)

Tenant/landlord portals, payments, listings engine, actual CMS admin UI, real form email delivery, blog frontend. Cookie banner is included as a static component.

---

## Technical notes

- Stack already in place: TanStack Start + React 19 + Tailwind v4 + shadcn.
- Add: `framer-motion`, `@react-three/fiber`, `@react-three/drei`, `three`, `react-hook-form`, `zod`, `@hookform/resolvers`, `lucide-react` (likely already present).
- Design tokens added to `src/styles.css` via `@theme`: `--color-navy`, `--color-gold`, `--color-stone`, `--color-charcoal`, plus gradient + shadow tokens. shadcn semantic tokens remapped to the brand palette.
- Fonts loaded with `<link rel="stylesheet">` in `src/routes/__root.tsx` head (not `@import` in CSS — Tailwind v4 / Lightning CSS rule).
- 3D scene lives in a client-only component dynamically imported with SSR off to avoid `window`/WebGL SSR crashes.
- Route files: `__root.tsx` keeps `<Outlet />`; new routes added with per-route `head()` metadata (unique title + description per the brief's URL list). Replace the placeholder `index.tsx`.
- Header uses `useScroll` from Framer Motion + a single layout animation; pinned via `position: fixed`.
- No backend / Lovable Cloud yet — content is static. Forms validate client-side and show a success toast.

Once approved I'll implement in this order: tokens & fonts → header → home (hero + sections) → service detail pages → remaining pages → forms → polish pass.
