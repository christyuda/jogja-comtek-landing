// components/landing/HomeContent.tsx

'use client';

import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { ContainerTextFlip } from "../ui/container-text-flip";

export default function HomeContent() {
  return (
    <>
      <div className="h-24" />

      {/* Highlight Section */}
      <section id="highlight">
        <HeroHighlight>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [20, -5, 0] }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
          >
            Jelajahi teknologi <ContainerTextFlip words={["Keren", "Pintar", "Cepat", "Moderen"]}
        interval={2500}
        animationDuration={800}
        textClassName="text-indigo-600 dark:text-indigo-400" /> masa depan bersama kami di{" "}
            <Highlight className="text-black dark:text-white">
              Pameran Jogja Comtek 2025.
            </Highlight>
          </motion.h1>
        </HeroHighlight>
      </section>

      <div className="h-24" />

    
    </>
  );
}
