"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {GlowingEffect} from "@/components/ui/glowing-effect";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Ilustrasi */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full h-full">
            <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <Image
            src="/assets/images/jogja-comtek-banner.jpg"
            alt="About Yogyakomtek 2025"
            width={500}
            height={400}
            className="w-full max-h-[400px] object-contain z-10 relative"
          />
            <div className="absolute top-4 left-4 bg-gradient-to-r from-[#F97316] to-[#EF4444] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
              #JogjaComtek2025
            </div>
          </div>
        </motion.div>

        {/* Konten */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white leading-tight mb-4">
            <span className="bg-gradient-to-r from-[#F97316] via-[#EF4444] to-[#3B82F6] bg-clip-text text-transparent">
              Tentang Yogyakomtek 2025
            </span>
          </h2>

          <p className="text-neutral-600 dark:text-neutral-300 text-base md:text-lg mb-6 leading-relaxed">
            Event teknologi terbesar di Yogyakarta yang menyatukan <strong>inovator, pelajar, profesional</strong> hingga komunitas digital dalam satu ruang eksplorasi masa depan.
          </p>

          <ul className="space-y-3 text-neutral-700 dark:text-neutral-200 text-sm md:text-base mb-8">
            <li>🚀 Eksplorasi AI, IoT, dan teknologi futuristik</li>
            <li>🎙️ Talkshow bersama expert industri</li>
            <li>🛠️ Workshop & kompetisi inovasi</li>
            <li>🎉 Terbuka untuk umum & GRATIS!</li>
          </ul>

          <div className="flex flex-wrap gap-4">
            <button className="bg-gradient-to-r from-[#F97316] to-[#EF4444] text-white px-6 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition">
                Lihat Jadwal →
            </button>
            <button className="border border-neutral-300 dark:border-neutral-700 px-6 py-2 rounded-full font-medium text-neutral-700 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
              Daftar Sekarang
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
