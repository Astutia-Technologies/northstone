import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useLocation, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { s as Menu, t as X } from "../_libs/lucide-react.mjs";
import { o as motion, s as AnimatePresence, t as useReducedMotion } from "../_libs/framer-motion.mjs";
import { i as nav, o as site } from "./site-D8OqtMei.mjs";
import { t as Route$11 } from "./properties-DPRS_0Py.mjs";
import { t as Route$12 } from "./properties._slug-CzqrrIUF.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DkSKKEu5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-M1E7__q9.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var northstone_logo_png_asset_default = {
	version: 1,
	asset_id: "4bd076c2-af94-465c-af08-7183353e229a",
	project_id: "ef43bf0f-de1f-42dc-9f3b-f51f103b9f64",
	url: "./northstone-logo.png",
	r2_key: "a/v1/ef43bf0f-de1f-42dc-9f3b-f51f103b9f64/4bd076c2-af94-465c-af08-7183353e229a/northstone-logo.png",
	original_filename: "northstone-logo.png",
	size: 103825,
	content_type: "image/png",
	created_at: "2026-06-17T11:24:53Z"
};
function SiteHeader() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const reduce = useReducedMotion();
	const { pathname } = useLocation();
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 80);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	const transition = reduce ? { duration: 0 } : {
		type: "spring",
		stiffness: 180,
		damping: 26,
		mass: .8
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.header, {
		initial: false,
		animate: {
			width: scrolled ? "100%" : "min(72rem, calc(100% - 2rem))",
			top: scrolled ? 0 : 16,
			borderRadius: scrolled ? 0 : 9999,
			backgroundColor: scrolled ? "rgba(12,27,46,0.92)" : "rgba(248,245,240,0.72)",
			borderColor: scrolled ? "rgba(255,255,255,0.08)" : "rgba(12,27,46,0.08)",
			color: scrolled ? "#F8F5F0" : "#0C1B2E",
			boxShadow: scrolled ? "0 10px 40px -10px rgba(12,27,46,0.45)" : "0 20px 60px -30px rgba(12,27,46,0.25)"
		},
		transition,
		className: "fixed left-1/2 z-50 -translate-x-1/2 border backdrop-blur-xl",
		style: { willChange: "transform, width, border-radius" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			animate: {
				paddingTop: scrolled ? 12 : 16,
				paddingBottom: scrolled ? 12 : 16
			},
			transition,
			className: "mx-auto flex items-center justify-between gap-6 px-5 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2.5 leading-none tracking-tight",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { scrolled }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						animate: { fontSize: scrolled ? "1.125rem" : void 0 },
						transition,
						className: `font-display ${scrolled ? "" : "text-3xl sm:text-5xl"}`,
						children: "Northstone"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 md:flex",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "rounded-full px-3.5 py-1.5 text-sm font-medium opacity-80 transition hover:bg-current/10 hover:opacity-100",
						activeProps: { className: "rounded-full px-3.5 py-1.5 text-sm font-medium opacity-100 bg-current/10" },
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "hidden rounded-full bg-gold px-4 py-2 text-sm font-medium text-navy shadow-gold transition hover:bg-gold-soft md:inline-flex",
						children: "Request consultation"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Toggle menu",
						onClick: () => setOpen((v) => !v),
						className: "rounded-full p-2 md:hidden",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-current/10 px-5 pb-4 pt-2 md:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col",
				children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					className: "rounded-lg px-3 py-2.5 text-sm font-medium opacity-90",
					children: item.label
				}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "mt-2 rounded-full bg-gold px-4 py-2.5 text-center text-sm font-medium text-navy",
					children: "Request consultation"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs opacity-60",
				children: site.region
			})]
		})]
	});
}
function Logo({ scrolled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
		animate: {
			width: scrolled ? 32 : 56,
			height: scrolled ? 32 : 56,
			borderRadius: scrolled ? 8 : 12
		},
		transition: {
			type: "spring",
			stiffness: 180,
			damping: 26,
			mass: .8
		},
		className: `flex shrink-0 items-center justify-center transition-colors ${scrolled ? "bg-stone" : "bg-transparent"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
			src: northstone_logo_png_asset_default.url,
			alt: "Northstone",
			animate: {
				width: scrolled ? 28 : 48,
				height: scrolled ? 28 : 48
			},
			transition: {
				type: "spring",
				stiffness: 180,
				damping: 26,
				mass: .8
			},
			className: "object-contain"
		})
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative mt-32 bg-navy text-stone",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "font-display text-2xl tracking-tight",
								children: "Northstone"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-sm text-pretty text-stone/70",
								children: site.tagline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-sm text-stone/60",
								children: site.region
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.18em] text-gold-soft",
							children: "Explore"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-2.5 text-sm",
							children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: n.to,
								className: "text-stone/80 transition hover:text-stone",
								children: n.label
							}) }, n.to))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.18em] text-gold-soft",
							children: "Get in touch"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-4 space-y-2.5 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${site.email}`,
									className: "text-stone/80 hover:text-stone",
									children: site.email
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "text-stone/60",
									children: site.phonePlaceholder
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "text-stone/80 hover:text-stone",
									children: "Request a consultation →"
								}) })
							]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 flex flex-col gap-4 border-t border-stone/10 pt-8 text-xs text-stone/60 md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					site.fullName,
					". Company No. ",
					site.companyNumber,
					". ",
					site.domain,
					"."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/privacy-policy",
						className: "hover:text-stone",
						children: "Privacy Policy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/terms-of-use",
						className: "hover:text-stone",
						children: "Terms of Use"
					})]
				})]
			})]
		})]
	});
}
var KEY = "ns_cookie_consent_v1";
function CookieBanner() {
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			if (!localStorage.getItem(KEY)) setShow(true);
		} catch {}
	}, []);
	const decide = (value) => {
		try {
			localStorage.setItem(KEY, value);
		} catch {}
		setShow(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: show && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			y: 40,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		exit: {
			y: 40,
			opacity: 0
		},
		transition: {
			type: "spring",
			stiffness: 200,
			damping: 24
		},
		className: "fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-3xl rounded-3xl border border-navy/10 bg-stone/95 p-5 shadow-elegant backdrop-blur-xl sm:bottom-5 sm:p-6",
		role: "dialog",
		"aria-label": "Cookie consent",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-charcoal/80",
				children: "We use a small number of cookies, including Google Analytics, to understand how the site is used. You can accept or decline."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => decide("declined"),
					className: "rounded-full border border-navy/15 px-4 py-2 text-sm font-medium text-navy hover:bg-navy/5",
					children: "Decline"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => decide("accepted"),
					className: "rounded-full bg-navy px-4 py-2 text-sm font-medium text-stone hover:bg-navy-deep",
					children: "Accept"
				})]
			})]
		})
	}) });
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-7xl text-navy",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-2xl text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-stone transition-colors hover:bg-navy-deep",
						children: "Return home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. Try refreshing, or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-stone hover:bg-navy-deep",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-muted",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$10 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Northstone Property Management — Property management portal" },
			{
				name: "description",
				content: "Calm, accountable property management for landlords across the UK with a focus on Scotland."
			},
			{
				name: "author",
				content: "Northstone Property Management"
			},
			{
				name: "theme-color",
				content: "#0C1B2E"
			},
			{
				property: "og:title",
				content: "Northstone Property Management — Property management portal"
			},
			{
				name: "twitter:title",
				content: "Northstone Property Management — Property management portal"
			},
			{
				property: "og:description",
				content: "Calm, accountable property management for landlords across the UK with a focus on Scotland."
			},
			{
				name: "twitter:description",
				content: "Calm, accountable property management for landlords across the UK with a focus on Scotland."
			},
			{
				property: "og:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/463b15be-8486-4c52-850a-0f30280c79f4"
			},
			{
				name: "twitter:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/463b15be-8486-4c52-850a-0f30280c79f4"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Inter+Tight:wght@300;400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$10.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-screen bg-background text-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CookieBanner, {})
			]
		})
	});
}
var $$splitComponentImporter$9 = () => import("./terms-of-use-KlQTQrlg.mjs");
var Route$9 = createFileRoute("/terms-of-use")({
	head: () => ({ meta: [{ title: "Terms of Use — Northstone Property Management" }, {
		name: "description",
		content: "The terms governing use of the Northstone Property Management website."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./services-Cxzgl7AN.mjs");
var Route$8 = createFileRoute("/services")({
	head: () => ({ meta: [
		{ title: "Services — Northstone Property Management" },
		{
			name: "description",
			content: "Property management and landlord support across residential lettings, block & leasehold, commercial, sales and rent-to-rent."
		},
		{
			property: "og:title",
			content: "Property Management Services — Northstone"
		},
		{
			property: "og:description",
			content: "Residential, block, commercial, sales and rent-to-rent — managed with rigour and care."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./property-management-D__-QdeD.mjs");
var Route$7 = createFileRoute("/property-management")({
	head: () => ({ meta: [
		{ title: "Property Management for Landlords — Northstone" },
		{
			name: "description",
			content: "Full-service property management for landlords across the UK and Scotland — tenant find, compliance, rent collection, maintenance and reporting."
		},
		{
			property: "og:title",
			content: "Property Management for Landlords"
		},
		{
			property: "og:description",
			content: "A calm, named-contact service for landlords across the UK with a focus on Scotland."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./privacy-policy-DqUAWZHG.mjs");
var Route$6 = createFileRoute("/privacy-policy")({
	head: () => ({ meta: [{ title: "Privacy Policy — Northstone Property Management" }, {
		name: "description",
		content: "How Northstone Property Management collects, uses and protects personal data submitted through this website."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./landlord-support-B22Ftm3H.mjs");
var Route$5 = createFileRoute("/landlord-support")({
	head: () => ({ meta: [
		{ title: "Landlord Support — Northstone Property Management" },
		{
			name: "description",
			content: "Tailored support for landlords and property owners — from one-off advice and compliance reviews to fully managed and guaranteed-rent arrangements."
		},
		{
			property: "og:title",
			content: "Landlord Support — Northstone"
		},
		{
			property: "og:description",
			content: "Tailored support for landlords and property owners across the UK and Scotland."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./how-it-works-CTGtXrrb.mjs");
var Route$4 = createFileRoute("/how-it-works")({
	head: () => ({ meta: [
		{ title: "How It Works — Northstone Property Management" },
		{
			name: "description",
			content: "Our property management process from first conversation through structured onboarding to active management."
		},
		{
			property: "og:title",
			content: "Our Process — Northstone"
		},
		{
			property: "og:description",
			content: "A measured path from enquiry to active property management."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./faqs-CR-GkfxS.mjs");
var Route$3 = createFileRoute("/faqs")({
	head: () => ({ meta: [
		{ title: "FAQs — Northstone Property Management" },
		{
			name: "description",
			content: "Common questions from landlords about property management, fees, compliance and maintenance."
		},
		{
			property: "og:title",
			content: "FAQs — Northstone"
		},
		{
			property: "og:description",
			content: "What landlords most often want to know about property management."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contact-BzBI0gcw.mjs");
var Route$2 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact Northstone Property Management" },
		{
			name: "description",
			content: "Get in touch with Northstone Property Management. Send an enquiry and a member of the team will be in contact to discuss your property needs."
		},
		{
			property: "og:title",
			content: "Contact Northstone Property Management"
		},
		{
			property: "og:description",
			content: "Send an enquiry — we'll be in touch shortly."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-DtjgEyJr.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About — Northstone Property Management" },
		{
			name: "description",
			content: "Northstone Property Management supports landlords across the UK with a focus on Scotland — built on diligence, transparency and considered care."
		},
		{
			property: "og:title",
			content: "About Northstone Property Management"
		},
		{
			property: "og:description",
			content: "A property management business built on diligence, transparency and considered care."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-BTTMmA9U.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Northstone Property Management — Property management portal" },
		{
			name: "description",
			content: "Calm, accountable property management for landlords across the UK with a focus on Scotland. Residential lettings, block & leasehold, commercial, sales and rent-to-rent."
		},
		{
			property: "og:title",
			content: "Northstone Property Management"
		},
		{
			property: "og:description",
			content: "Property management portal for landlords."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var TermsOfUseRoute = Route$9.update({
	id: "/terms-of-use",
	path: "/terms-of-use",
	getParentRoute: () => Route$10
});
var ServicesRoute = Route$8.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$10
});
var PropertyManagementRoute = Route$7.update({
	id: "/property-management",
	path: "/property-management",
	getParentRoute: () => Route$10
});
var PropertiesRoute = Route$11.update({
	id: "/properties",
	path: "/properties",
	getParentRoute: () => Route$10
});
var PrivacyPolicyRoute = Route$6.update({
	id: "/privacy-policy",
	path: "/privacy-policy",
	getParentRoute: () => Route$10
});
var LandlordSupportRoute = Route$5.update({
	id: "/landlord-support",
	path: "/landlord-support",
	getParentRoute: () => Route$10
});
var HowItWorksRoute = Route$4.update({
	id: "/how-it-works",
	path: "/how-it-works",
	getParentRoute: () => Route$10
});
var FaqsRoute = Route$3.update({
	id: "/faqs",
	path: "/faqs",
	getParentRoute: () => Route$10
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$10
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$10
});
var IndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$10
});
var PropertiesRouteChildren = { PropertiesSlugRoute: Route$12.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => PropertiesRoute
}) };
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	FaqsRoute,
	HowItWorksRoute,
	LandlordSupportRoute,
	PrivacyPolicyRoute,
	PropertiesRoute: PropertiesRoute._addFileChildren(PropertiesRouteChildren),
	PropertyManagementRoute,
	ServicesRoute,
	TermsOfUseRoute
};
var routeTree = Route$10._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
