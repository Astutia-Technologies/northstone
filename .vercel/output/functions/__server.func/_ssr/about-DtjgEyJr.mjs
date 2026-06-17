import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as CTASection } from "./CTASection-8Lu5ybCe.mjs";
import { t as Reveal } from "./Reveal-BbPNmrUU.mjs";
import { t as PageHeader } from "./PageHeader-Cb-f7w1T.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-DtjgEyJr.js
var import_jsx_runtime = require_jsx_runtime();
var values = [
	{
		title: "Diligence",
		body: "Compliance first, always. We treat the unglamorous detail as the most important part of the work."
	},
	{
		title: "Transparency",
		body: "Clear fees, plain-language reporting, and answers when you ask — not three working days later."
	},
	{
		title: "Stewardship",
		body: "Your property is an asset and a home. We hold both responsibilities with equal weight."
	}
];
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "About Northstone",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["A property partner, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "italic gold-gradient-text",
				children: "not a portal."
			})] }),
			description: "Northstone Property Management was founded to bring considered, accountable service to a category that too often treats landlords as ticket numbers."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-4xl px-6 pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-navy/8 bg-card p-10 text-lg leading-relaxed text-charcoal/80 sm:p-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We work with landlords, property owners and partners across the United Kingdom, with our primary focus on Scotland. From a single residential unit to a block portfolio, every relationship begins with the same thing — a real conversation about what you own, what it earns, and what it asks of you." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5",
					children: "From there, we shape a management plan that fits — built on a named point of contact, clear reporting, and an unshakeable baseline of compliance and care."
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-6 md:grid-cols-3",
				children: values.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full rounded-3xl border border-navy/8 bg-stone-warm p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl text-navy",
							children: v.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-charcoal/70",
							children: v.body
						})]
					})
				}, v.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {
			eyebrow: "Work with us",
			title: "Start with a conversation"
		})
	] });
}
//#endregion
export { AboutPage as component };
