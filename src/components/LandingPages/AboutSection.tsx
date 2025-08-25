"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-white dark:bg-neutral-950">
      {/* ===== MOBILE (cover, content in-flow) ===== */}
      <div className="md:hidden relative w-full">
        {/* BG full cover */}
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('/assets/banner/about-bg.png')",
            backgroundSize: "cover",
          }}
        />
        {/* Content IN-FLOW (parent bakal nambah tinggi sesuai konten) */}
        <div className="relative z-10 px-4 pt-24 pb-10 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="
        w-full max-w-[18.5rem] sm:max-w-[20rem]
        text-center
        bg-white/90 dark:bg-neutral-900/85 backdrop-blur
        rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,.28)]
        ring-1 ring-black/5 dark:ring-white/10
        p-4 sm:p-5
      "
          >
            <h2 className="text-xl sm:text-2xl font-extrabold leading-tight mb-3">
              <span className="bg-gradient-to-r from-[#F97316] via-[#EF4444] to-[#3B82F6] bg-clip-text text-transparent">
                TENTANG YOGYAKOMTEK 2025
              </span>
            </h2>

            <p className="text-[13px] sm:text-[14.5px] leading-6 text-neutral-800 dark:text-neutral-200">
              Yogyakomtek 2025 kembali hadir sebagai edisi ke-28 dari rangkaian
              pameran teknologi tahunan terbesar di Yogyakarta dan Jawa Tengah.
              Tahun ini, Yogyakomtek mengusung semangat inovasi dan transformasi
              digital dengan menghadirkan beragam teknologi terkini, zona AI
              interaktif, serta promo spektakuler dari brand-brand IT ternama.
              <br />
              <br />
              Temukan pengalaman pameran IT paling lengkap – dari perangkat
              keras, software, gaming, hingga kreativitas digital – semuanya
              hanya di Yogyakomtek 2025:{" "}
              <strong>Artificial Intelligence Now!</strong>
            </p>

            {/* CTA Mobile */}
            <div className="mt-4 flex flex-col gap-3">
              <button
                onClick={() =>
                  window.open(
                    "https://www.apkomjogja.org/tiket",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                aria-label="Daftar Sekarang"
                className="w-full h-10 px-5 rounded-full font-semibold text-white shadow-lg shadow-black/20 bg-gradient-to-r from-[#F97316] to-[#EF4444] transition will-change-transform hover:scale-[1.02] active:scale-[.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444] focus-visible:ring-offset-2"
              >
                Daftar Sekarang →
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ===== DESKTOP (contain, exact image size) ===== */}
      <div className="hidden md:block relative w-full">
        {/* Use natural width/height so height follows the image exactly */}
        <Image
          src="/assets/banner/about-bg.png"
          alt="About Yogyakomtek 2025"
          width={1627} // match the actual image size
          height={768}
          priority
          className="w-full h-auto object-contain"
        />

        {/* Overlay text aligned to the right */}
        <div className="absolute inset-0 flex items-center justify-end px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-xl lg:max-w-2xl text-right ml-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              <span className="bg-gradient-to-r from-[#F97316] via-[#EF4444] to-[#3B82F6] bg-clip-text text-transparent">
                TENTANG YOGYAKOMTEK 2025
              </span>
            </h2>
            <p className="text-base lg:text-lg leading-relaxed text-neutral-800 dark:text-neutral-200">
              Yogyakomtek 2025 kembali hadir sebagai edisi ke-28 dari rangkaian
              pameran teknologi tahunan terbesar di Yogyakarta dan Jawa Tengah.
              Tahun ini, Yogyakomtek mengusung semangat inovasi dan transformasi
              digital dengan menghadirkan beragam teknologi terkini, zona AI
              interaktif, serta promo spektakuler dari brand-brand IT ternama.
              <br />
              <br />
              Temukan pengalaman pameran IT paling lengkap – dari perangkat
              keras, software, gaming, hingga kreativitas digital – semuanya
              hanya di Yogyakomtek 2025:{" "}
              <strong>Artificial Intelligence Now!</strong>
            </p>

            {/* CTA Desktop (sudah ada) */}
            <div className="mt-6 flex flex-col sm:flex-row items-center sm:justify-end gap-3 sm:gap-4">
              <button
                aria-label="Daftar Sekarang"
                onClick={() =>
                  window.open(
                    "https://www.apkomjogja.org/tiket",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="
                  w-full sm:w-auto h-11
                  px-6 rounded-full font-semibold text-white
                  shadow-lg shadow-black/20
                  bg-gradient-to-r from-[#F97316] to-[#EF4444]
                  transition will-change-transform
                  hover:scale-[1.02] active:scale-[.98]
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444] focus-visible:ring-offset-2
                "
              >
                Daftar Sekarang →
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
