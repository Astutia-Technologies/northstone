import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as CTASection } from "./CTASection-8Lu5ybCe.mjs";
import { t as Reveal } from "./Reveal-BbPNmrUU.mjs";
import { t as PageHeader } from "./PageHeader-Cb-f7w1T.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/landlord-support-B22Ftm3H.js
var import_jsx_runtime = require_jsx_runtime();
var tiers = [
	{
		name: "Advisory",
		body: "One-off consultations for compliance reviews, portfolio strategy, or a difficult tenancy situation."
	},
	{
		name: "Managed",
		body: "Full property management with a named contact, compliance baseline and proactive reporting."
	},
	{
		name: "Guaranteed rent",
		body: "Rent-to-rent partnerships with a guaranteed monthly figure, zero voids and the property returned as given."
	}
];
function LandlordPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Landlord Support",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"Support that ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "italic gold-gradient-text",
					children: "flexes"
				}),
				" to your portfolio."
			] }),
			description: "Whether you own one property or fifty, the right level of support changes over time. We meet you where you are — and adjust as you grow.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/contact",
				className: "inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-medium text-stone hover:bg-navy-deep",
				children: "Speak with a landlord adviser"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-6 pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-3",
				children: tiers.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full rounded-3xl border border-navy/8 bg-card p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs uppercase tracking-[0.2em] text-gold",
								children: ["Tier 0", i + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-2xl text-navy",
								children: t.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-charcoal/70",
								children: t.body
							})
						]
					})
				}, t.name))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {
			eyebrow: "Landlord enquiry",
			title: "Tell us about your portfolio",
			ctaLabel: "Start an enquiry"
		})
	] });
}
//#endregion
export { LandlordPage as component };
