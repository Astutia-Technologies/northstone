import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as CTASection } from "./CTASection-8Lu5ybCe.mjs";
import { t as PageHeader } from "./PageHeader-Cb-f7w1T.mjs";
import { a as services } from "./site-D8OqtMei.mjs";
import { t as ServiceCard } from "./ServiceCard-DH1Fh_2t.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-Cxzgl7AN.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Services",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Five disciplines. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "italic gold-gradient-text",
				children: "One standard of care."
			})] }),
			description: "Whatever the asset class, we apply the same diligence, the same named-contact service, and the same insistence on doing the small things properly."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-6 pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
					service: s,
					index: i
				}, s.slug))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
//#endregion
export { ServicesPage as component };
