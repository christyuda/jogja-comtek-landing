"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const images = [
  "/assets/images/location1.jpg",
  "/assets/images/location1.jpg",
  "/assets/images/location1.jpg",
];

export default function LocationSection() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-neutral-900 dark:to-neutral-800 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-3"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            📍 Lokasi Acara Yogyakomtek
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Lihat lokasi venue dan suasana tempat secara langsung. Klik peta atau tombol di bawah untuk membuka langsung di Google Maps.
          </p>
        </motion.div>

        {/* Grid 2 Kolom */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 items-start gap-8 md:gap-12"
        >
          {/* Left: Swiper Image */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative w-full h-64 md:h-[350px] rounded-xl overflow-hidden shadow-xl">
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop
                className="w-full h-full"
              >
                {images.map((src, i) => (
                  <SwiperSlide key={i}>
                    <Image
                      src={src}
                      alt={`Venue ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              📸 Dokumentasi area sekitar lokasi venue acara
            </p>
          </div>

          {/* Right: Map & Button */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative w-full h-64 md:h-[350px] rounded-3xl overflow-hidden shadow-xl border border-gray-200 dark:border-white/10">
              <iframe
                src="https://www.google.com/maps?q=-7.801389,110.364722&hl=id&z=16&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen
                title="Lokasi Venue"
              />
              <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/50 text-gray-800 dark:text-white text-sm font-semibold px-4 py-1 rounded-full shadow backdrop-blur-md">
                🗺️ Lokasi Venue
              </div>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 italic">
              🌐 Tampilan Penuh Lokasi Venue Acara
            </p>

            <a
              href="https://www.google.com/maps?q=-7.801389,110.364722"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-full shadow-md hover:brightness-110 transition-all"
            >
              📌 Buka di Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
