import { Link } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { Service } from "@/content/site";
import { ArrowUpRight } from "lucide-react";
import type { MouseEvent } from "react";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-50, 50], [6, -6]), { stiffness: 150, damping: 15 });
  const ry = useSpring(useTransform(x, [-50, 50], [-6, 6]), { stiffness: 150, damping: 15 });
  const glowX = useTransform(x, [-50, 50], ["0%", "100%"]);
  const glowY = useTransform(y, [-50, 50], ["0%", "100%"]);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - r.left - r.width / 2);
    y.set(e.clientY - r.top - r.height / 2);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d", perspective: 1000 }}
      className="group relative"
    >
      <div className="relative h-full overflow-hidden rounded-3xl border border-navy/8 bg-card p-7 shadow-[0_1px_2px_rgba(12,27,46,0.04)] transition-shadow duration-500 hover:shadow-elegant">
        {/* gold glow follows cursor */}
        <motion.div
          aria-hidden
          style={{ left: glowX, top: glowY }}
          className="pointer-events-none absolute h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        />
        {/* number badge */}
        <div className="flex items-start justify-between">
          <span className="font-display text-sm tracking-[0.2em] text-gold">0{index + 1}</span>
          <span className="rounded-full border border-navy/10 p-2 text-navy transition-all duration-500 group-hover:rotate-45 group-hover:border-gold group-hover:text-gold">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        <h3 className="mt-8 font-display text-2xl text-navy">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{service.description}</p>
        <ul className="mt-6 space-y-2">
          {service.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-charcoal/80">
              <span className="mt-1.5 h-1 w-3 shrink-0 rounded-full bg-gold" />
              {b}
            </li>
          ))}
        </ul>
        <Link
          to={service.href}
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-navy underline-offset-4 hover:text-gold hover:underline"
        >
          Learn more
        </Link>
        {/* bottom gold beam */}
        <span className="absolute inset-x-7 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-700 group-hover:scale-x-100" />
      </div>
    </motion.div>
  );
}
