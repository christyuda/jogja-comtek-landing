// components/landing/HeroSection.tsx

"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ImagesSlider } from "@/components/ui/image-slider";
import { FaArrowRight } from "react-icons/fa";
import { FiMapPin, FiClock } from "react-icons/fi";

const images = [
  "/assets/banner/banner-1.jpg",
  "/assets/banner/banner-2.jpg",
  "/assets/banner/banner-3.jpg",
  "/assets/banner/banner-4.jpg",
  "/assets/banner/banner-5.jpg",
  "/assets/banner/banner-6.jpg",
];

export default function HeroSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity, scale }}
      className="relative h-screen w-screen text-white overflow-hidden"
    >
      <ImagesSlider
        className="h-full w-full"
        images={images}
        autoplay
        direction="right"
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-50 flex flex-col justify-center items-center h-full text-center px-4"
        >
          <motion.img
            src="/assets/logo/new-fix-logo-yoygakomtek.png"
            alt="YogyaKomtek Logo"
            width={200}
            height={200}
            className="h-16 md:h-24 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          />

          {/* Headline */}
          <motion.h1
            className="px-3 text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight
                       text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)]"
            style={
              {
                // tipis-outline biar seperti poster
                WebkitTextStroke: "0.6px rgba(10, 23, 60, 0.6)",
              } as React.CSSProperties
            }
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            PAMERAN KOMPUTER & IT <br className="hidden sm:block" />
            <span className="text-[#F4C542] bg-clip-text">
              TERBESAR • TERLENGKAP • TERKINI
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="max-w-3xl text-sm md:text-lg text-gray-200/
90 px-4
                       drop-shadow-[0_3px_12px_rgba(0,0,0,0.6)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
          >
            Yogyakomtek 2025 hadir sebagai pameran teknologi dan inovasi
          </motion.p>

          <motion.p
            className="max-w-3xl text-sm md:text-lg text-gray-200/
90 px-4
                       drop-shadow-[0_3px_12px_rgba(0,0,0,0.6)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
          >
            terbesar — penuh promo, hiburan, dan solusi masa depan!
          </motion.p>

          {/* Date big & Location */}
          <motion.div
            className="mt-6 md:mt-8 flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <p
              className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-[#FFC02E]
                         drop-shadow-[0_6px_24px_rgba(0,0,0,0.5)]"
            >
              27 September – 01 Oktober 2025
            </p>
            <p className="flex items-center gap-2 text-lg md:text-2xl font-semibold text-white">
              <FiMapPin className="shrink-0" />
              GIK UGM
            </p>
          </motion.div>
        </motion.div>
      </ImagesSlider>
    </motion.section>
  );
}
