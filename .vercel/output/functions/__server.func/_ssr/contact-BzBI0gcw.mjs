import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { c as MapPin, l as Mail, o as Phone, p as Check, u as LoaderCircle } from "../_libs/lucide-react.mjs";
import { o as motion } from "../_libs/framer-motion.mjs";
import { t as Reveal } from "./Reveal-BbPNmrUU.mjs";
import { t as PageHeader } from "./PageHeader-Cb-f7w1T.mjs";
import { o as site, r as gdprConsent, t as enquiryTypes } from "./site-D8OqtMei.mjs";
import { n as useForm, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { i as string, n as literal, r as object, t as _enum } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BzBI0gcw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var schema = object({
	firstName: string().min(1, "Required"),
	lastName: string().min(1, "Required"),
	email: string().email("Enter a valid email"),
	phone: string().min(7, "Enter a UK phone number").regex(/^[+0-9\s()-]+$/, "Use digits, +, spaces only"),
	enquiryType: _enum(enquiryTypes, { message: "Choose an enquiry type" }),
	location: string().optional(),
	properties: string().optional(),
	message: string().min(10, "Tell us a little more"),
	consent: literal(true, { message: "Consent is required" })
});
function EnquiryForm({ defaultEnquiryType }) {
	const [sent, setSent] = (0, import_react.useState)(false);
	const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
		resolver: u(schema),
		defaultValues: { enquiryType: defaultEnquiryType ?? "Property management" }
	});
	const onSubmit = async (_values) => {
		await new Promise((r) => setTimeout(r, 700));
		setSent(true);
	};
	if (sent) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 12
		},
		animate: {
			opacity: 1,
			y: 0
		},
		className: "rounded-3xl border border-gold/30 bg-stone-warm p-8 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-navy text-stone",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 font-display text-2xl text-navy",
				children: "Enquiry received"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-charcoal/70",
				children: "Thank you for contacting Northstone Property Management. We have received your enquiry and a member of the team will be in touch shortly to discuss your property needs."
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSubmit(onSubmit),
		className: "grid gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "First name",
					error: errors.firstName?.message,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						...register("firstName"),
						className: inputCls,
						autoComplete: "given-name"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Last name",
					error: errors.lastName?.message,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						...register("lastName"),
						className: inputCls,
						autoComplete: "family-name"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Email",
					error: errors.email?.message,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "email",
						...register("email"),
						className: inputCls,
						autoComplete: "email"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Phone (UK or +44)",
					error: errors.phone?.message,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "tel",
						...register("phone"),
						className: inputCls,
						autoComplete: "tel",
						placeholder: "+44…"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Enquiry type",
				error: errors.enquiryType?.message,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					...register("enquiryType"),
					className: inputCls,
					children: enquiryTypes.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: t,
						children: t
					}, t))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Property location",
					hint: "Town, city or postcode",
					error: errors.location?.message,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						...register("location"),
						className: inputCls
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Number of properties",
					hint: "Optional",
					error: errors.properties?.message,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						...register("properties"),
						className: inputCls,
						inputMode: "numeric"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Message",
				error: errors.message?.message,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					...register("message"),
					rows: 5,
					className: inputCls + " resize-none"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex items-start gap-3 text-sm text-charcoal/80",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					...register("consent"),
					className: "mt-1 h-4 w-4 rounded border-navy/30 text-navy focus:ring-gold"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: gdprConsent })]
			}),
			errors.consent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "-mt-3 text-xs text-destructive",
				children: errors.consent.message
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "submit",
				disabled: isSubmitting,
				className: "mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-medium text-stone shadow-elegant transition hover:bg-navy-deep disabled:opacity-60",
				children: [isSubmitting && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), "Send enquiry"]
			})
		]
	});
}
var inputCls = "w-full rounded-2xl border border-navy/15 bg-card px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20";
function Field({ label, hint, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-1.5 flex items-baseline justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-medium uppercase tracking-[0.12em] text-navy/70",
					children: label
				}), hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] uppercase tracking-wider text-charcoal/40",
					children: hint
				})]
			}),
			children,
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 text-xs text-destructive",
				children: error
			})
		]
	});
}
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Contact",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Let's talk about ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "italic gold-gradient-text",
			children: "your property."
		})] }),
		description: "Send us a few details and a member of the team will be in touch to arrange an introductory conversation."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-6xl px-6 pb-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 md:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "md:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-navy/10 bg-stone-warm p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl text-navy",
							children: "Get in touch"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-charcoal/70",
							children: "We reply to every enquiry — typically within a working day."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-8 space-y-5 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-navy text-stone",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs uppercase tracking-[0.18em] text-charcoal/60",
										children: "Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `mailto:${site.email}`,
										className: "font-medium text-navy hover:text-gold",
										children: site.email
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-navy text-stone",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs uppercase tracking-[0.18em] text-charcoal/60",
										children: "Phone"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-charcoal/70",
										children: site.phonePlaceholder
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-navy text-stone",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs uppercase tracking-[0.18em] text-charcoal/60",
										children: "Coverage"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-charcoal/70",
										children: site.region
									})] })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-10 text-xs text-charcoal/50",
							children: [
								site.fullName,
								" · Company No. ",
								site.companyNumber
							]
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 1,
				className: "md:col-span-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-3xl border border-navy/10 bg-card p-8 sm:p-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryForm, {})
				})
			})]
		})
	})] });
}
//#endregion
export { ContactPage as component };
