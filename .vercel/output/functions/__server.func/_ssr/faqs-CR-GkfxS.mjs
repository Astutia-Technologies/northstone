import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as CTASection } from "./CTASection-8Lu5ybCe.mjs";
import { t as PageHeader } from "./PageHeader-Cb-f7w1T.mjs";
import { t as FAQList } from "./FAQList-C9lH0Nyn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faqs-CR-GkfxS.js
var import_jsx_runtime = require_jsx_runtime();
function FAQPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "FAQs",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Answers to the things ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "italic gold-gradient-text",
				children: "landlords ask first."
			})] }),
			description: "If something isn't covered here, send us a note — we reply to every enquiry, usually within a working day."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-4xl px-6 pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQList, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {
			eyebrow: "Still have questions?",
			title: "Talk to a real person"
		})
	] });
}
//#endregion
export { FAQPage as component };
