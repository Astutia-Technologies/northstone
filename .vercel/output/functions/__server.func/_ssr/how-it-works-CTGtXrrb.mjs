import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { a as useScroll, o as motion, r as useTransform } from "../_libs/framer-motion.mjs";
import { t as CTASection } from "./CTASection-8Lu5ybCe.mjs";
import { t as PageHeader } from "./PageHeader-Cb-f7w1T.mjs";
import { c as steps } from "./site-D8OqtMei.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/how-it-works-CTGtXrrb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HowPage() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 0.6", "end 0.4"]
	});
	const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "How it works",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["From first conversation to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "italic gold-gradient-text",
				children: "active care."
			})] }),
			description: "No high-pressure pitch, no opaque onboarding. Four clear stages, each with someone you can name."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			ref,
			className: "mx-auto max-w-4xl px-6 pb-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative pl-16 sm:pl-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-6 top-0 w-px bg-navy/10 sm:left-10" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						style: { height: lineHeight },
						className: "absolute left-6 top-0 w-px bg-gold sm:left-10"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-16",
						children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								x: 20
							},
							whileInView: {
								opacity: 1,
								x: 0
							},
							viewport: {
								once: true,
								margin: "-100px"
							},
							transition: {
								duration: .6,
								delay: i * .05
							},
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -left-[3.75rem] flex h-10 w-10 items-center justify-center rounded-full border border-gold bg-stone font-display text-sm text-gold sm:-left-[5.25rem]",
									children: s.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-3xl text-navy",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-2xl text-charcoal/70",
									children: s.body
								})
							]
						}, s.n))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
//#endregion
export { HowPage as component };
