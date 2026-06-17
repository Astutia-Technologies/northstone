import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const KEY = "ns_cookie_consent_v1";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {}
  }, []);

  const decide = (value: "accepted" | "declined") => {
    try { localStorage.setItem(KEY, value); } catch {}
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 24 }}
          className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-3xl rounded-3xl border border-navy/10 bg-stone/95 p-5 shadow-elegant backdrop-blur-xl sm:bottom-5 sm:p-6"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-charcoal/80">
              We use a small number of cookies, including Google Analytics, to understand how the
              site is used. You can accept or decline.
            </p>
            <div className="flex shrink-0 gap-2">
              <button
                onClick={() => decide("declined")}
                className="rounded-full border border-navy/15 px-4 py-2 text-sm font-medium text-navy hover:bg-navy/5"
              >
                Decline
              </button>
              <button
                onClick={() => decide("accepted")}
                className="rounded-full bg-navy px-4 py-2 text-sm font-medium text-stone hover:bg-navy-deep"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
