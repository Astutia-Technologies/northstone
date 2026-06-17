import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { p as Check } from "../_libs/lucide-react.mjs";
import { t as CTASection } from "./CTASection-8Lu5ybCe.mjs";
import { t as Reveal } from "./Reveal-BbPNmrUU.mjs";
import { t as PageHeader } from "./PageHeader-Cb-f7w1T.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/property-management-D__-QdeD.js
var import_jsx_runtime = require_jsx_runtime();
var includes = [
	"Tenant sourcing, referencing and right-to-rent checks",
	"Tenancy paperwork, deposit registration and renewals",
	"Quarterly inspections and condition reporting",
	"Rent collection, arrears handling and statements",
	"24/7 maintenance triage with vetted contractors",
	"Compliance tracking — gas, electrical, EPC, smoke & CO"
];
function PMPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Property Management",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["The full discipline of letting, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "italic gold-gradient-text",
				children: "handled with care."
			})] }),
			description: "A single accountable service across the tenancy lifecycle — from finding the right tenant to keeping the property compliant, occupied and well-kept.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/contact",
				className: "inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-medium text-stone hover:bg-navy-deep",
				children: "Request property management"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-5xl px-6 pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-navy/8 bg-card p-10 sm:p-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl text-navy",
					children: "What's included"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 grid gap-3 sm:grid-cols-2",
					children: includes.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-3 text-sm text-charcoal/80",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" })
						}), line]
					}, line))
				})]
			}) })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {
			eyebrow: "Ready to talk?",
			title: "Tell us about your property",
			ctaLabel: "Start an enquiry"
		})
	] });
}
//#endregion
export { PMPage as component };
