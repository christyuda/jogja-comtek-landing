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

// Link Google Maps place (sesuai permintaan)
const MAPS_PLACE_URL =
  "https://www.google.com/maps/place/Gelanggang+Inovasi+dan+Kreativitas+UGM/@-7.7742504,110.3735552,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7a5910f39cb25f:0xaab7386fd1291305!8m2!3d-7.7742504!4d110.3761355!16s%2Fg%2F11kjlx4931?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3DGelanggang Inovasi dan Kreativitas UGM";

// Koordinat dari link di atas (untuk iframe embed)
const LAT = -7.7742504;
const LNG = 110.3761355;

export default function LocationSection() {
  return (
    <section
      id="location"
      className="w-full py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-neutral-900 dark:to-neutral-800 px-4"
    >
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
            Lihat lokasi venue dan suasana tempat secara langsung. Klik peta
            atau tombol di bawah untuk membuka langsung di Google Maps.
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
              {/* Iframe diarahkan ke koordinat GIK UGM */}
              <iframe
                src={`https://www.google.com/maps?q=${LAT},${LNG}&hl=id&z=17&output=embed`}
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen
                title="Gelanggang Inovasi dan Kreativitas UGM (GIK UGM)"
              />
              <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/50 text-gray-800 dark:text-white text-sm font-semibold px-4 py-1 rounded-full shadow backdrop-blur-md">
                🗺️ Gelanggang Inovasi & Kreativitas UGM
              </div>
            </div>

            {/* Alamat lengkap */}
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
              Jl. Persatuan, Sendowo, Sinduadi, Kec. Depok, Kabupaten Sleman,
              Daerah Istimewa Yogyakarta
            </p>

            <a
              href={MAPS_PLACE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-full shadow-md hover:brightness-110 transition-all"
              aria-label="Buka lokasi Gelanggang Inovasi dan Kreativitas UGM di Google Maps"
            >
              📌 Buka di Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
