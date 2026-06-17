import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { c as MapPin, h as Bath, m as BedDouble, v as ArrowLeft } from "../_libs/lucide-react.mjs";
import { t as Reveal } from "./Reveal-BbPNmrUU.mjs";
import { a as getPropertyBySlug, r as formatPrice } from "./properties-e_hn0MgK.mjs";
import { t as Route } from "./properties._slug-CzqrrIUF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/properties._slug-GXZZwnAa.js
var import_jsx_runtime = require_jsx_runtime();
function PropertyDetailPage() {
	const { slug } = Route.useParams();
	const property = getPropertyBySlug(slug);
	if (!property) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex min-h-[60vh] flex-col items-center justify-center px-6 pt-40 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-5xl text-navy",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 font-display text-2xl text-navy",
				children: "Property not found"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-charcoal/70",
				children: "This listing may have been removed or the link is incorrect."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/properties",
					className: "inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-stone hover:bg-navy-deep",
					children: "Browse properties"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "inline-flex items-center gap-2 rounded-full border border-navy/15 px-5 py-2.5 text-sm font-medium text-navy hover:bg-navy/5",
					children: "Back home"
				})]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden pb-16 pt-36 sm:pt-44",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(176,125,58,0.18),transparent_60%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/properties",
				className: "inline-flex items-center gap-1.5 text-sm font-medium text-navy/70 transition hover:text-gold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), "All properties"]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-10 lg:grid-cols-2 lg:gap-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-3xl border border-navy/10 shadow-elegant",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: property.image,
						alt: property.title,
						className: "aspect-[4/3] w-full object-cover lg:aspect-auto lg:h-full lg:min-h-[420px]"
					})
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-navy/10 bg-stone-warm px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-navy",
							children: property.listingType === "rent" ? "To rent" : "For sale"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 font-display text-4xl text-balance text-navy sm:text-5xl",
							children: property.title
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 3,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-display text-3xl text-gold",
							children: formatPrice(property)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 4,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 flex items-center gap-1.5 text-charcoal/70",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-gold" }),
								property.location,
								", ",
								property.postcode
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 5,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-4 text-sm text-charcoal/80",
							children: [
								property.beds > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2 rounded-full border border-navy/10 bg-stone-warm px-4 py-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BedDouble, { className: "h-4 w-4 text-gold" }),
										property.beds,
										" bedroom",
										property.beds !== 1 ? "s" : ""
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2 rounded-full border border-navy/10 bg-stone-warm px-4 py-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bath, { className: "h-4 w-4 text-gold" }),
										property.baths,
										" bathroom",
										property.baths !== 1 ? "s" : ""
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full border border-navy/10 bg-stone-warm px-4 py-2 capitalize",
									children: property.propertyType
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 6,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-base leading-relaxed text-charcoal/80",
							children: property.description
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 7,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-navy shadow-gold transition hover:bg-gold-soft",
								children: "Enquire about this property"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/properties",
								className: "inline-flex items-center gap-2 rounded-full border border-navy/15 px-6 py-3.5 text-sm font-medium text-navy hover:bg-navy/5",
								children: "View more properties"
							})]
						})
					})
				] })]
			})]
		})]
	}) });
}
//#endregion
export { PropertyDetailPage as component };
