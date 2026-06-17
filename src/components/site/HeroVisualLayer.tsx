import { motion, useReducedMotion } from "framer-motion";
import { getHeroShowcaseProperties } from "@/content/properties";
import { site } from "@/content/site";

const cardLayouts = [
  {
    className: "left-[4%] top-[12%] w-36 -rotate-6 xl:w-44",
    delay: 0,
  },
  {
    className: "right-[3%] top-[18%] w-32 rotate-[5deg] xl:w-40",
    delay: 0.4,
  },
  {
    className: "bottom-[30%] left-[6%] w-36 rotate-[4deg] xl:w-[10.5rem]",
    delay: 0.8,
  },
  {
    className: "bottom-[26%] right-[5%] w-36 -rotate-[5deg] xl:w-44",
    delay: 1.2,
  },
];

export function HeroVisualLayer() {
  const reduce = useReducedMotion();
  const showcase = getHeroShowcaseProperties();

  return (
    <div className="absolute inset-0 -z-10" aria-hidden>
      <img
        src={site.heroBackgroundImage}
        alt=""
        fetchPriority="high"
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-navy/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(248,245,240,0.85)_0%,rgba(248,245,240,0.55)_45%,transparent_75%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-stone/70 via-stone/50 to-stone-warm/95" />

      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {showcase.map((property, i) => {
          const layout = cardLayouts[i];
          if (!layout) return null;

          return (
            <motion.div
              key={property.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 0.8, y: reduce ? 0 : [0, -6, 0] }}
              transition={{
                opacity: { duration: 0.8, delay: 0.3 + layout.delay },
                y: reduce
                  ? { duration: 0 }
                  : { duration: 8, repeat: Infinity, ease: "easeInOut", delay: layout.delay },
              }}
              className={`absolute overflow-hidden rounded-2xl border-2 border-white/40 shadow-elegant ${layout.className}`}
            >
              <img
                src={property.image}
                alt=""
                loading="lazy"
                className="aspect-[3/4] h-full w-full object-cover"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
