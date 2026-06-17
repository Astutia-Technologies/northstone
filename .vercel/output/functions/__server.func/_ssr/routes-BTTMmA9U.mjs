import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { _ as ArrowRight, c as MapPin, d as ChevronUp, f as ChevronDown, i as Search, n as Sparkles, p as Check, r as ShieldCheck } from "../_libs/lucide-react.mjs";
import { a as useScroll, o as motion, r as useTransform, t as useReducedMotion } from "../_libs/framer-motion.mjs";
import { t as CTASection } from "./CTASection-8Lu5ybCe.mjs";
import { n as Stagger, r as StaggerItem, t as Reveal } from "./Reveal-BbPNmrUU.mjs";
import { a as services, c as steps, o as site, s as stats } from "./site-D8OqtMei.mjs";
import { t as FAQList } from "./FAQList-C9lH0Nyn.mjs";
import { i as getHeroShowcaseProperties, o as rentPriceRanges, t as buyPriceRanges } from "./properties-e_hn0MgK.mjs";
import { t as ServiceCard } from "./ServiceCard-DH1Fh_2t.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BTTMmA9U.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Tabs = Root2;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}));
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = Content.displayName;
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var propertyTypes = [
	{
		label: "Any type",
		value: "any"
	},
	{
		label: "Flat",
		value: "flat"
	},
	{
		label: "House",
		value: "house"
	},
	{
		label: "Bungalow",
		value: "bungalow"
	},
	{
		label: "Commercial",
		value: "commercial"
	}
];
var bedroomOptions = [
	{
		label: "Any beds",
		value: "any"
	},
	{
		label: "1+",
		value: "1"
	},
	{
		label: "2+",
		value: "2"
	},
	{
		label: "3+",
		value: "3"
	},
	{
		label: "4+",
		value: "4"
	}
];
function HeroPropertySearch() {
	const navigate = useNavigate();
	const [listingType, setListingType] = (0, import_react.useState)("rent");
	const [location, setLocation] = (0, import_react.useState)("");
	const [propertyType, setPropertyType] = (0, import_react.useState)("any");
	const [beds, setBeds] = (0, import_react.useState)("any");
	const [maxPrice, setMaxPrice] = (0, import_react.useState)("any");
	const priceRanges = listingType === "rent" ? rentPriceRanges : buyPriceRanges;
	const handleSearch = () => {
		navigate({
			to: "/properties",
			search: {
				type: listingType,
				location: location.trim() || void 0,
				propertyType: propertyType !== "any" ? propertyType : void 0,
				beds: beds !== "any" ? beds : void 0,
				maxPrice: maxPrice !== "any" ? maxPrice : void 0
			}
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl border border-navy/10 bg-card/80 p-5 shadow-elegant ring-1 ring-navy/5 backdrop-blur-xl sm:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {
			value: listingType,
			onValueChange: (v) => {
				setListingType(v);
				setMaxPrice("any");
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
				className: "mb-5 h-11 w-full rounded-full bg-stone-warm p-1 sm:w-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
					value: "rent",
					className: "flex-1 rounded-full px-6 data-[state=active]:bg-navy data-[state=active]:text-stone sm:flex-none",
					children: "Rent"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
					value: "buy",
					className: "flex-1 rounded-full px-6 data-[state=active]:bg-navy data-[state=active]:text-stone sm:flex-none",
					children: "Buy"
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "mb-1.5 block text-xs uppercase tracking-[0.18em] text-charcoal/60",
					children: "Location"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: location,
						onChange: (e) => setLocation(e.target.value),
						onKeyDown: (e) => e.key === "Enter" && handleSearch(),
						placeholder: "Town, city or postcode",
						className: "h-12 rounded-xl border-navy/10 bg-stone/60 pl-10 text-base shadow-sm focus-visible:ring-gold/40"
					})]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Property type",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: propertyType,
								onValueChange: setPropertyType,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "h-12 rounded-xl border-navy/10 bg-stone/60 text-base shadow-sm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: propertyTypes.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: t.value,
									children: t.label
								}, t.value)) })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Bedrooms",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: beds,
								onValueChange: setBeds,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "h-12 rounded-xl border-navy/10 bg-stone/60 text-base shadow-sm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: bedroomOptions.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: b.value,
									children: b.label
								}, b.value)) })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Max price",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: maxPrice,
								onValueChange: setMaxPrice,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "h-12 rounded-xl border-navy/10 bg-stone/60 text-base shadow-sm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: priceRanges.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: r.value,
									children: r.label
								}, r.value)) })]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: handleSearch,
					className: "flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gold text-sm font-medium text-navy shadow-gold transition hover:bg-gold-soft sm:text-base",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4" }), "Search properties"]
				})
			]
		})]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "mb-1.5 block text-xs uppercase tracking-[0.18em] text-charcoal/60",
		children: label
	}), children] });
}
var cardLayouts = [
	{
		className: "left-[4%] top-[12%] w-36 -rotate-6 xl:w-44",
		delay: 0
	},
	{
		className: "right-[3%] top-[18%] w-32 rotate-[5deg] xl:w-40",
		delay: .4
	},
	{
		className: "bottom-[30%] left-[6%] w-36 rotate-[4deg] xl:w-[10.5rem]",
		delay: .8
	},
	{
		className: "bottom-[26%] right-[5%] w-36 -rotate-[5deg] xl:w-44",
		delay: 1.2
	}
];
function HeroVisualLayer() {
	const reduce = useReducedMotion();
	const showcase = getHeroShowcaseProperties();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 -z-10",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: site.heroBackgroundImage,
				alt: "",
				fetchPriority: "high",
				loading: "eager",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-navy/20" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(248,245,240,0.85)_0%,rgba(248,245,240,0.55)_45%,transparent_75%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-stone/70 via-stone/50 to-stone-warm/95" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 hidden lg:block",
				children: showcase.map((property, i) => {
					const layout = cardLayouts[i];
					if (!layout) return null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: .8,
							y: reduce ? 0 : [
								0,
								-6,
								0
							]
						},
						transition: {
							opacity: {
								duration: .8,
								delay: .3 + layout.delay
							},
							y: reduce ? { duration: 0 } : {
								duration: 8,
								repeat: Infinity,
								ease: "easeInOut",
								delay: layout.delay
							}
						},
						className: `absolute overflow-hidden rounded-2xl border-2 border-white/40 shadow-elegant ${layout.className}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: property.image,
							alt: "",
							loading: "lazy",
							className: "aspect-[3/4] h-full w-full object-cover"
						})
					}, property.slug);
				})
			})
		]
	});
}
var headlineWords = [
	"Property",
	"management",
	"portal"
];
function HomePage() {
	const reduce = useReducedMotion();
	const heroRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
	const opacity = useTransform(scrollYProgress, [0, 1], [1, .3]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			ref: heroRef,
			className: "relative isolate min-h-[100svh] overflow-hidden pt-36 sm:pt-44",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroVisualLayer, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					style: {
						y,
						opacity
					},
					className: "relative z-10 mx-auto max-w-6xl px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto flex w-fit items-center gap-2 rounded-full border border-navy/10 bg-stone/60 px-4 py-1.5 text-xs text-navy backdrop-blur",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: site.region })]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mx-auto mt-8 text-center font-display text-3xl leading-[1.02] text-balance text-navy sm:text-4xl md:text-5xl",
							children: headlineWords.map((word, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								initial: {
									opacity: 0,
									y: 40,
									filter: "blur(10px)"
								},
								animate: {
									opacity: 1,
									y: 0,
									filter: "blur(0px)"
								},
								transition: {
									duration: .8,
									delay: .15 + i * .08,
									ease: [
										.22,
										1,
										.36,
										1
									]
								},
								className: "inline-block pr-[0.25em]",
								children: i === headlineWords.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic gold-gradient-text",
									children: word
								}) : word
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 4,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-7 max-w-2xl text-center text-lg font-medium text-navy sm:text-xl",
								children: "A calm, accountable service for residential, block, commercial and rent-to-rent portfolios — with a named manager and the rigour your assets deserve."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 5,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto mt-10 max-w-4xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroPropertySearch, {})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 6,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap items-center justify-center gap-4 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/contact",
										className: "inline-flex items-center gap-1.5 font-medium text-navy underline-offset-4 hover:text-gold hover:underline",
										children: ["Request consultation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-navy/20",
										children: "·"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/services",
										className: "font-medium text-navy/70 underline-offset-4 hover:text-gold hover:underline",
										children: "Explore services"
									})
								]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute inset-x-0 bottom-8 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						animate: reduce ? {} : { y: [
							0,
							8,
							0
						] },
						transition: {
							duration: 2.2,
							repeat: Infinity,
							ease: "easeInOut"
						},
						className: "h-10 w-6 rounded-full border border-navy/20 p-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto h-2 w-1 rounded-full bg-navy/40" })
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative border-y border-navy/8 bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
				className: "mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden bg-navy/10 md:grid-cols-4",
				children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StaggerItem, {
					className: "bg-card px-6 py-10 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-4xl text-navy",
						children: s.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs uppercase tracking-[0.18em] text-charcoal/60",
						children: s.label
					})]
				}, s.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "services",
			className: "mx-auto max-w-7xl px-6 py-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-end justify-between gap-8 md:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.25em] text-gold",
						children: "Services"
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-4xl text-balance text-navy sm:text-5xl",
							children: "One trusted partner across every property need."
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 2,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-md text-charcoal/70",
						children: "From single residential units to commercial estates, we shape the service mix to your portfolio — and keep a named manager at the centre of every conversation."
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
					service: s,
					index: i
				}, s.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-navy py-32 text-stone",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 opacity-[0.06]",
				style: {
					backgroundImage: "radial-gradient(circle at 1px 1px, #F8F5F0 1px, transparent 0)",
					backgroundSize: "32px 32px"
				}
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.25em] text-gold-soft",
						children: "How it works"
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-4xl text-balance sm:text-5xl",
							children: "A measured path from enquiry to active management."
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4",
					children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 24
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-80px"
						},
						transition: {
							duration: .6,
							delay: i * .1,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "group relative rounded-3xl border border-stone/10 bg-navy-deep/40 p-7 backdrop-blur transition hover:border-gold/40 hover:bg-navy-deep/60",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-sm tracking-[0.2em] text-gold",
									children: s.n
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 font-display text-xl",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-stone/70",
								children: s.body
							})
						]
					}, s.n))
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-5xl px-6 py-32",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.25em] text-gold",
						children: "Common questions"
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-4xl text-balance text-navy sm:text-5xl",
							children: "The things landlords most want to know."
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQList, { limit: 2 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/faqs",
						className: "inline-flex items-center gap-1.5 text-sm font-medium text-navy underline-offset-4 hover:text-gold hover:underline",
						children: ["See all FAQs ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
//#endregion
export { HomePage as component };
