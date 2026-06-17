import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { enquiryTypes, gdprConsent } from "@/content/site";

const schema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a UK phone number").regex(/^[+0-9\s()-]+$/, "Use digits, +, spaces only"),
  enquiryType: z.enum(enquiryTypes, { message: "Choose an enquiry type" }),
  location: z.string().optional(),
  properties: z.string().optional(),
  message: z.string().min(10, "Tell us a little more"),
  consent: z.literal(true, { message: "Consent is required" }),
});

type FormValues = z.infer<typeof schema>;

export function EnquiryForm({ defaultEnquiryType }: { defaultEnquiryType?: (typeof enquiryTypes)[number] }) {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { enquiryType: defaultEnquiryType ?? "Property management" } as Partial<FormValues> as FormValues,
  });

  const onSubmit = async (_values: FormValues) => {
    // CMS/backend wiring is added in a later phase.
    await new Promise((r) => setTimeout(r, 700));
    setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl border border-gold/30 bg-stone-warm p-8 text-center"
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-navy text-stone">
          <Check className="h-5 w-5" />
        </div>
        <h3 className="mt-4 font-display text-2xl text-navy">Enquiry received</h3>
        <p className="mt-2 text-sm text-charcoal/70">
          Thank you for contacting Northstone Property Management. We have received your enquiry and a member of the team
          will be in touch shortly to discuss your property needs.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="First name" error={errors.firstName?.message}>
          <input {...register("firstName")} className={inputCls} autoComplete="given-name" />
        </Field>
        <Field label="Last name" error={errors.lastName?.message}>
          <input {...register("lastName")} className={inputCls} autoComplete="family-name" />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" error={errors.email?.message}>
          <input type="email" {...register("email")} className={inputCls} autoComplete="email" />
        </Field>
        <Field label="Phone (UK or +44)" error={errors.phone?.message}>
          <input type="tel" {...register("phone")} className={inputCls} autoComplete="tel" placeholder="+44…" />
        </Field>
      </div>
      <Field label="Enquiry type" error={errors.enquiryType?.message}>
        <select {...register("enquiryType")} className={inputCls}>
          {enquiryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Property location" hint="Town, city or postcode" error={errors.location?.message}>
          <input {...register("location")} className={inputCls} />
        </Field>
        <Field label="Number of properties" hint="Optional" error={errors.properties?.message}>
          <input {...register("properties")} className={inputCls} inputMode="numeric" />
        </Field>
      </div>
      <Field label="Message" error={errors.message?.message}>
        <textarea {...register("message")} rows={5} className={inputCls + " resize-none"} />
      </Field>

      <label className="flex items-start gap-3 text-sm text-charcoal/80">
        <input type="checkbox" {...register("consent")} className="mt-1 h-4 w-4 rounded border-navy/30 text-navy focus:ring-gold" />
        <span>{gdprConsent}</span>
      </label>
      {errors.consent && <p className="-mt-3 text-xs text-destructive">{errors.consent.message as string}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-medium text-stone shadow-elegant transition hover:bg-navy-deep disabled:opacity-60"
      >
        {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
        Send enquiry
      </button>
    </form>
  );
}

const inputCls =
  "w-full rounded-2xl border border-navy/15 bg-card px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20";

function Field({ label, hint, error, children }: { label: string; hint?: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="mb-1.5 flex items-baseline justify-between gap-3">
        <span className="text-xs font-medium uppercase tracking-[0.12em] text-navy/70">{label}</span>
        {hint && <span className="text-[10px] uppercase tracking-wider text-charcoal/40">{hint}</span>}
      </div>
      {children}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </label>
  );
}
