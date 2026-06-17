import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as PageHeader } from "./PageHeader-Cb-f7w1T.mjs";
import { o as site } from "./site-D8OqtMei.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-of-use-KlQTQrlg.js
var import_jsx_runtime = require_jsx_runtime();
function TermsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Legal",
		title: "Terms of Use",
		description: "The terms governing your use of this website."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "prose prose-sm mx-auto max-w-3xl px-6 pb-24 text-charcoal/80 sm:prose-base",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"By accessing ",
				site.domain,
				", you agree to these Terms of Use. The website is provided by ",
				site.fullName,
				"(Company No. ",
				site.companyNumber,
				") for informational purposes."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 font-display text-2xl text-navy",
				children: "Information"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3",
				children: "Content on this website is provided in good faith and may be updated without notice. Nothing on this site constitutes legal, tax or financial advice."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 font-display text-2xl text-navy",
				children: "Service availability"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3",
				children: "Our primary service area is Scotland, with selected coverage across the wider UK subject to availability. References to coverage are indicative and not a guarantee of service in any particular location."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 font-display text-2xl text-navy",
				children: "Intellectual property"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3",
				children: [
					"All content, marks and design elements on this site are the property of ",
					site.fullName,
					" unless otherwise stated."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 font-display text-2xl text-navy",
				children: "Contact"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3",
				children: [
					"For any queries about these terms, please email ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${site.email}`,
						className: "text-navy underline",
						children: site.email
					}),
					"."
				]
			})
		]
	})] });
}
//#endregion
export { TermsPage as component };
