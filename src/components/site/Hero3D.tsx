"use client";
import { Suspense, lazy, useEffect, useState } from "react";

const Scene = lazy(() => import("./HeroScene"));

export function Hero3D() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only enable on devices that can handle it.
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia("(max-width: 640px)");
    setEnabled(!mq.matches && !mobile.matches);
  }, []);

  if (!enabled) return <Fallback />;

  return (
    <Suspense fallback={<Fallback />}>
      <Scene />
    </Suspense>
  );
}

function Fallback() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute left-[20%] top-[30%] h-32 w-32 rounded-3xl bg-gradient-to-br from-gold/40 to-transparent blur-2xl" />
    </div>
  );
}
