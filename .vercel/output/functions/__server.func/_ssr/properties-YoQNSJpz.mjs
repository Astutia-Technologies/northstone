import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { _ as ArrowRight, c as MapPin, h as Bath, i as Search, m as BedDouble } from "../_libs/lucide-react.mjs";
import { t as Reveal } from "./Reveal-BbPNmrUU.mjs";
import { t as PageHeader } from "./PageHeader-Cb-f7w1T.mjs";
import { t as Route } from "./properties-DPRS_0Py.mjs";
import { n as filterProperties, r as formatPrice } from "./properties-e_hn0MgK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/properties-YoQNSJpz.js
var import_jsx_runtime = require_jsx_runtime();
function PropertyCard({ property }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/properties/$slug",
		params: { slug: property.slug },
		className: "group block overflow-hidden rounded-3xl border border-navy/8 bg-card shadow-[0_1px_2px_rgba(12,27,46,0.04)] transition-shadow duration-500 hover:shadow-elegant",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[4/3] overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: property.image,
					alt: property.title,
					className: "h-full w-full object-cover transition duration-700 group-hover:scale-105",
					loading: "lazy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute left-4 top-4 rounded-full bg-navy/90 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-stone backdrop-blur-sm",
					children: property.listingType === "rent" ? "To rent" : "For sale"
				}),
				property.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-medium text-navy",
					children: "Featured"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl text-navy",
					children: formatPrice(property)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 font-display text-lg text-navy transition-colors group-hover:text-gold",
					children: property.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 flex items-center gap-1.5 text-sm text-charcoal/60",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 shrink-0 text-gold" }),
						property.location,
						", ",
						property.postcode
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-center gap-4 text-sm text-charcoal/70",
					children: [
						property.beds > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BedDouble, { className: "h-4 w-4 text-gold" }),
								property.beds,
								" bed",
								property.beds !== 1 ? "s" : ""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bath, { className: "h-4 w-4 text-gold" }),
								property.baths,
								" bath",
								property.baths !== 1 ? "s" : ""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "capitalize text-charcoal/50",
							children: property.propertyType
						})
					]
				})
			]
		})]
	});
}
function PropertiesPage() {
	const search = Route.useSearch();
	const results = filterProperties(search);
	const location = search.location?.trim();
	const title = location ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Properties in ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "italic gold-gradient-text",
		children: location
	})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Find your next ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "italic gold-gradient-text",
		children: "property."
	})] });
	const activeFilters = [
		search.type && {
			label: search.type === "rent" ? "To rent" : "For sale",
			key: "type"
		},
		location && {
			label: location,
			key: "location"
		},
		search.propertyType && {
			label: search.propertyType,
			key: "propertyType"
		},
		search.beds && {
			label: `${search.beds}+ beds`,
			key: "beds"
		},
		search.maxPrice && {
			label: `Up to £${Number(search.maxPrice).toLocaleString("en-GB")}`,
			key: "maxPrice"
		}
	].filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Properties",
		title,
		description: results.length > 0 ? `${results.length} propert${results.length === 1 ? "y" : "ies"} matching your search.` : "No properties match your current filters — try broadening your search."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-6 pb-32",
		children: [activeFilters.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-8 flex flex-wrap items-center gap-2",
			children: activeFilters.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "rounded-full border border-navy/10 bg-stone-warm px-3 py-1 text-xs font-medium capitalize text-navy",
				children: f.label
			}, f.key))
		}) }), results.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
			children: results.map((property) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PropertyCard, { property }) }, property.slug))
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-3xl border border-navy/10 bg-stone-warm px-8 py-16 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy/5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-6 w-6 text-gold" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 font-display text-2xl text-navy",
					children: "No properties found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-3 max-w-md text-sm text-charcoal/70",
					children: "We couldn't find any listings matching your criteria. Try adjusting your filters or search a different area."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-medium text-stone transition hover:bg-navy-deep",
					children: ["Search again ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})
			]
		}) })]
	})] });
}
//#endregion
export { PropertiesPage as component };
