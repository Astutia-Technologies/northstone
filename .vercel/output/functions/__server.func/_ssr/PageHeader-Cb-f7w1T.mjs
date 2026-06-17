import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Reveal } from "./Reveal-BbPNmrUU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHeader-Cb-f7w1T.js
var import_jsx_runtime = require_jsx_runtime();
function PageHeader({ eyebrow, title, description, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden pb-16 pt-40 sm:pt-44",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(176,125,58,0.18),transparent_60%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-5xl px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.25em] text-gold",
					children: eyebrow
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-5xl text-balance text-navy sm:text-6xl md:text-7xl",
						children: title
					})
				}),
				description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 2,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-2xl text-pretty text-lg text-charcoal/70",
						children: description
					})
				}),
				children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 3,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children
					})
				})
			]
		})]
	});
}
//#endregion
export { PageHeader as t };
