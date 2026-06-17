import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/content/site";

export function FAQList({ limit }: { limit?: number }) {
  const groups = limit ? faqs.map((g) => ({ ...g, items: g.items.slice(0, limit) })) : faqs;
  return (
    <div className="space-y-12">
      {groups.map((group) => (
        <div key={group.group}>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">{group.group}</p>
          <div className="mt-5 divide-y divide-navy/10 overflow-hidden rounded-3xl border border-navy/10 bg-card">
            {group.items.map((item, i) => (
              <FAQItem key={item.q} q={item.q} a={item.a} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function FAQItem({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition hover:bg-stone-warm/50"
      >
        <span className="font-display text-lg text-navy">{q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.3 }} className="shrink-0 text-gold">
          <Plus className="h-5 w-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-sm leading-relaxed text-charcoal/75">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
