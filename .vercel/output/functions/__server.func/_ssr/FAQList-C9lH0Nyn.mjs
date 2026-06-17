import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { a as Plus } from "../_libs/lucide-react.mjs";
import { o as motion, s as AnimatePresence } from "../_libs/framer-motion.mjs";
import { n as faqs } from "./site-D8OqtMei.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FAQList-C9lH0Nyn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FAQList({ limit }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-12",
		children: (limit ? faqs.map((g) => ({
			...g,
			items: g.items.slice(0, limit)
		})) : faqs).map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs uppercase tracking-[0.2em] text-gold",
			children: group.group
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-5 divide-y divide-navy/10 overflow-hidden rounded-3xl border border-navy/10 bg-card",
			children: group.items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQItem, {
				q: item.q,
				a: item.a,
				defaultOpen: i === 0
			}, item.q))
		})] }, group.group))
	});
}
function FAQItem({ q, a, defaultOpen }) {
	const [open, setOpen] = (0, import_react.useState)(!!defaultOpen);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick: () => setOpen((v) => !v),
		className: "flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition hover:bg-stone-warm/50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-lg text-navy",
			children: q
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			animate: { rotate: open ? 45 : 0 },
			transition: { duration: .3 },
			className: "shrink-0 text-gold",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-5 w-5" })
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
		initial: false,
		children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				height: 0,
				opacity: 0
			},
			animate: {
				height: "auto",
				opacity: 1
			},
			exit: {
				height: 0,
				opacity: 0
			},
			transition: {
				duration: .3,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			className: "overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-6 pb-6 text-sm leading-relaxed text-charcoal/75",
				children: a
			})
		})
	})] });
}
//#endregion
export { FAQList as t };
