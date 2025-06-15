// hooks/useSmoothScroll.ts
"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8, // 1.8s transition
      smoothWheel: true, // smooth wheel scrolling
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easing
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
}
