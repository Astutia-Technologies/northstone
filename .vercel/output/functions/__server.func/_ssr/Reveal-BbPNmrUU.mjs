import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { o as motion, t as useReducedMotion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Reveal-BbPNmrUU.js
var import_jsx_runtime = require_jsx_runtime();
var variants = {
	hidden: {
		opacity: 0,
		y: 24,
		filter: "blur(8px)"
	},
	show: (i = 0) => ({
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: {
			duration: .7,
			ease: [
				.22,
				1,
				.36,
				1
			],
			delay: i * .06
		}
	})
};
function Reveal({ children, delay = 0, className, as: As = "div" }) {
	if (useReducedMotion()) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(As, {
		className,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		variants,
		initial: "hidden",
		whileInView: "show",
		viewport: {
			once: true,
			margin: "-80px"
		},
		custom: delay,
		className,
		children
	});
}
function Stagger({ children, className, gap = .08 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: "hidden",
		whileInView: "show",
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: { staggerChildren: gap },
		className,
		children
	});
}
function StaggerItem({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		variants,
		className,
		children
	});
}
//#endregion
export { Stagger as n, StaggerItem as r, Reveal as t };
