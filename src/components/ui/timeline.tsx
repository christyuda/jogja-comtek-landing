"use client";

import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

// ===== THEME: ORANGE =====
export const ACCENT = "#F4B74A"; // orange
const ACCENT_SOFT = "rgba(244, 183, 74, 0.14)"; // blob/soft bg
const ACCENT_TRACK = "rgba(244, 183, 74, 0.24)"; // garis track

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) setHeight(ref.current.getBoundingClientRect().height);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section className="w-full relative overflow-hidden bg-[#f9fafb] dark:bg-neutral-900">
      {/* BG blobs: ORANGE */}
      <div
        className="absolute -top-10 -left-10 w-[300px] h-[300px] opacity-25 blur-3xl rounded-full z-0"
        style={{ backgroundColor: ACCENT_SOFT }}
      />
      <div
        className="absolute top-1/2 right-0 w-[220px] h-[220px] opacity-15 blur-2xl rounded-full z-0"
        style={{ backgroundColor: ACCENT_SOFT }}
      />
      <div className="absolute inset-0 bg-[url('/patterns/dot-grid.svg')] opacity-5 z-0" />

      <div ref={containerRef} className="relative z-10 w-full px-4 md:px-10 font-sans">
        <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
          {data.map((item, index) => (
            <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
              {/* Sticky title & dot */}
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div
                  className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center ring-1 ring-[rgba(244,183,74,0.35)]"
                >
                  <div
                    className="h-3.5 w-3.5 rounded-full"
                    style={{
                      backgroundColor: ACCENT,
                      boxShadow: "0 0 0 3px rgba(244,183,74,0.35)",
                    }}
                  />
                </div>
                <h3 className="hidden md:block text-base md:pl-20 md:text-2xl font-semibold text-neutral-700 dark:text-neutral-300">
                  {item.title}
                </h3>
              </div>

              {/* Content */}
              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-base mb-3 font-semibold text-neutral-700 dark:text-neutral-300">
                  {item.title}
                </h3>
                {item.content}
              </div>
            </div>
          ))}

          {/* Vertical track + animated fill */}
          <div
            style={{ height: height + "px", background: ACCENT_TRACK }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] rounded-full
                       [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <motion.div
              style={{ height: heightTransform, opacity: opacityTransform }}
              className="absolute inset-x-0 top-0 w-[2px]"
            >
              <div
                className="w-[2px] h-full rounded-full"
                style={{
                  backgroundImage: `linear-gradient(to top, ${ACCENT} 0%, ${ACCENT} 12%, transparent 100%)`,
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
