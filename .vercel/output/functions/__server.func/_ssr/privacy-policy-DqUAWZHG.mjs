import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as PageHeader } from "./PageHeader-Cb-f7w1T.mjs";
import { o as site } from "./site-D8OqtMei.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-policy-DqUAWZHG.js
var import_jsx_runtime = require_jsx_runtime();
function PrivacyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Legal",
		title: "Privacy Policy",
		description: "How we handle the personal data you share with us."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "prose prose-sm mx-auto max-w-3xl px-6 pb-24 text-charcoal/80 sm:prose-base",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"This Privacy Policy explains how ",
				site.fullName,
				" (\"we\", \"us\") collects, uses and protects information submitted through ",
				site.domain,
				"."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 font-display text-2xl text-navy",
				children: "Data we collect"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3",
				children: "We collect only the information you choose to submit through our enquiry forms — your name, contact details, property location and the content of your message. We also collect aggregated, non-identifying analytics information via Google Analytics 4, gated by your cookie consent choice."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 font-display text-2xl text-navy",
				children: "How we use it"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3",
				children: "We use the information you submit only to respond to your enquiry and to provide the services you request."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 font-display text-2xl text-navy",
				children: "Your rights"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3",
				children: [
					"You may request a copy or deletion of any personal information we hold about you at any time by emailing ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${site.email}`,
						className: "text-navy underline",
						children: site.email
					}),
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 font-display text-2xl text-navy",
				children: "Cookies"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3",
				children: "A cookie consent banner is displayed before any analytics cookies fire. You can decline at any time and reset your choice by clearing your browser storage."
			})
		]
	})] });
}
//#endregion
export { PrivacyPage as component };
