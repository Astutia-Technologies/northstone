import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { g as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { i as useMotionValue, n as useSpring, o as motion, r as useTransform } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ServiceCard-DH1Fh_2t.js
var import_jsx_runtime = require_jsx_runtime();
function ServiceCard({ service, index }) {
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const rx = useSpring(useTransform(y, [-50, 50], [6, -6]), {
		stiffness: 150,
		damping: 15
	});
	const ry = useSpring(useTransform(x, [-50, 50], [-6, 6]), {
		stiffness: 150,
		damping: 15
	});
	const glowX = useTransform(x, [-50, 50], ["0%", "100%"]);
	const glowY = useTransform(y, [-50, 50], ["0%", "100%"]);
	const onMove = (e) => {
		const r = e.currentTarget.getBoundingClientRect();
		x.set(e.clientX - r.left - r.width / 2);
		y.set(e.clientY - r.top - r.height / 2);
	};
	const onLeave = () => {
		x.set(0);
		y.set(0);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 30
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-60px"
		},
		transition: {
			duration: .7,
			ease: [
				.22,
				1,
				.36,
				1
			],
			delay: index * .08
		},
		onMouseMove: onMove,
		onMouseLeave: onLeave,
		style: {
			rotateX: rx,
			rotateY: ry,
			transformStyle: "preserve-3d",
			perspective: 1e3
		},
		className: "group relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-full overflow-hidden rounded-3xl border border-navy/8 bg-card p-7 shadow-[0_1px_2px_rgba(12,27,46,0.04)] transition-shadow duration-500 hover:shadow-elegant",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					"aria-hidden": true,
					style: {
						left: glowX,
						top: glowY
					},
					className: "pointer-events-none absolute h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-sm tracking-[0.2em] text-gold",
						children: ["0", index + 1]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border border-navy/10 p-2 text-navy transition-all duration-500 group-hover:rotate-45 group-hover:border-gold group-hover:text-gold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-8 font-display text-2xl text-navy",
					children: service.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-charcoal/70",
					children: service.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 space-y-2",
					children: service.bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-2 text-sm text-charcoal/80",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1 w-3 shrink-0 rounded-full bg-gold" }), b]
					}, b))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: service.href,
					className: "mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-navy underline-offset-4 hover:text-gold hover:underline",
					children: "Learn more"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-7 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-700 group-hover:scale-x-100" })
			]
		})
	});
}
//#endregion
export { ServiceCard as t };
