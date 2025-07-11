// components/landing/HeroSection.tsx

'use client';

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ImagesSlider } from "@/components/ui/image-slider";
import { FaArrowRight } from "react-icons/fa";
import { FiMapPin, FiClock } from "react-icons/fi";

const images = [
  "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3",
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
      <ImagesSlider className="h-full w-full" images={images} autoplay direction="right">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-50 flex flex-col justify-center items-center h-full text-center px-4"
        >
          <motion.p
            className="uppercase text-sm tracking-widest text-gray-300 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            YogyaKomtek 2025
          </motion.p>

          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            DISCOVER A WORLD <br />
            <span className="text-yellow-400">OF INNOVATION</span>
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-gray-300 max-w-xl mt-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Yogyakomtek 2025 hadir sebagai pameran teknologi dan inovasi terbesar — penuh promo, hiburan, dan solusi masa depan!
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 text-sm text-gray-300"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <p className="flex items-center gap-2"><FiMapPin /> Jogja Expo Center</p>
            <p className="flex items-center gap-2"><FiClock /> 10 AM - 10 PM, 20 April 2025</p>
          </motion.div>

          <motion.button
            className="mt-8 px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-red-500 to-blue-500 hover:scale-105 transition-all duration-300 shadow-md flex items-center gap-2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            onClick={() => document.getElementById("highlight")?.scrollIntoView({ behavior: "smooth" })}
          >
            Purchase Ticket <FaArrowRight className="group-hover:translate-x-1 transition" />
          </motion.button>
        </motion.div>
      </ImagesSlider>
    </motion.section>
  );
}
