import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { nav, site } from "@/content/site";
import { useEffect, useState } from "react";

import logoAsset from "@/assets/northstone-logo.png.asset.json";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const transition = reduce
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 180, damping: 26, mass: 0.8 };

  return (
    <motion.header
      initial={false}
      animate={{
        width: scrolled ? "100%" : "min(72rem, calc(100% - 2rem))",
        top: scrolled ? 0 : 16,
        borderRadius: scrolled ? 0 : 9999,
        backgroundColor: scrolled ? "rgba(12,27,46,0.92)" : "rgba(248,245,240,0.72)",
        borderColor: scrolled ? "rgba(255,255,255,0.08)" : "rgba(12,27,46,0.08)",
        color: scrolled ? "#F8F5F0" : "#0C1B2E",
        boxShadow: scrolled
          ? "0 10px 40px -10px rgba(12,27,46,0.45)"
          : "0 20px 60px -30px rgba(12,27,46,0.25)",
      }}
      transition={transition}
      className="fixed left-1/2 z-50 -translate-x-1/2 border backdrop-blur-xl"
      style={{ willChange: "transform, width, border-radius" }}
    >
      <motion.div
        animate={{ paddingTop: scrolled ? 12 : 16, paddingBottom: scrolled ? 12 : 16 }}
        transition={transition}
        className="mx-auto flex items-center justify-between gap-6 px-5 sm:px-6"
      >
        <Link to="/" className="flex items-center gap-2.5 leading-none tracking-tight">
          <Logo scrolled={scrolled} />
          <motion.span
            animate={{ fontSize: scrolled ? "1.125rem" : undefined }}
            transition={transition}
            className={`font-display ${scrolled ? "" : "text-3xl sm:text-5xl"}`}
          >
            Northstone
          </motion.span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-3.5 py-1.5 text-sm font-medium opacity-80 transition hover:bg-current/10 hover:opacity-100"
              activeProps={{
                className:
                  "rounded-full px-3.5 py-1.5 text-sm font-medium opacity-100 bg-current/10",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden rounded-full bg-gold px-4 py-2 text-sm font-medium text-navy shadow-gold transition hover:bg-gold-soft md:inline-flex"
          >
            Request consultation
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full p-2 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.div>

      {open && (
        <div className="border-t border-current/10 px-5 pb-4 pt-2 md:hidden">
          <div className="flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-lg px-3 py-2.5 text-sm font-medium opacity-90"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 rounded-full bg-gold px-4 py-2.5 text-center text-sm font-medium text-navy"
            >
              Request consultation
            </Link>
          </div>
          <p className="mt-3 text-xs opacity-60">{site.region}</p>
        </div>
      )}
    </motion.header>
  );
}

function Logo({ scrolled }: { scrolled: boolean }) {
  return (
    <motion.span
      animate={{
        width: scrolled ? 32 : 56,
        height: scrolled ? 32 : 56,
        borderRadius: scrolled ? 8 : 12,
      }}
      transition={{ type: "spring", stiffness: 180, damping: 26, mass: 0.8 }}
      className={`flex shrink-0 items-center justify-center transition-colors ${
        scrolled ? "bg-stone" : "bg-transparent"
      }`}
    >
      <motion.img
        src={logoAsset.url}
        alt="Northstone"
        animate={{
          width: scrolled ? 28 : 48,
          height: scrolled ? 28 : 48,
        }}
        transition={{ type: "spring", stiffness: 180, damping: 26, mass: 0.8 }}
        className="object-contain"
      />
    </motion.span>
  );
}
