"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function ScheduleSection() {
  const data = [
    {
      title: "27 September 2025 - Pagi",
      content: (
        <div className="space-y-4 text-sm md:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed transition-all duration-300">
          <p className="text-neutral-600 dark:text-neutral-400">
            Pembukaan acara Yogyakomtek 2025 dan sambutan dari panitia serta keynote speaker dari industri teknologi nasional.
          </p>
          <ul className="space-y-3">
            <li className="hover:bg-neutral-100 dark:hover:bg-neutral-800/40 p-2 rounded-md transition">
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">08.00 - 08.30 WIB</span> — Registrasi & Welcome Coffee
            </li>
            <li className="hover:bg-neutral-100 dark:hover:bg-neutral-800/40 p-2 rounded-md transition">
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">08.30 - 09.30 WIB</span> — Opening Ceremony & Keynote Speech
            </li>
            <li className="hover:bg-neutral-100 dark:hover:bg-neutral-800/40 p-2 rounded-md transition">
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">09.30 - 12.00 WIB</span> — Pameran Teknologi AI, IoT, dan Robotik
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "27 September 2025 - Siang",
      content: (
        <div className="space-y-4 text-sm md:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
          <p className="text-neutral-600 dark:text-neutral-400">
            Acara siang hari berisi talkshow, workshop, dan sesi networking bersama komunitas teknologi dan startup.
          </p>
          <ul className="space-y-3">
            <li className="hover:bg-neutral-100 dark:hover:bg-neutral-800/40 p-2 rounded-md transition">
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">13.00 - 14.30 WIB</span> — Talkshow Industri Digital bersama Startup
            </li>
            <li className="hover:bg-neutral-100 dark:hover:bg-neutral-800/40 p-2 rounded-md transition">
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">14.30 - 16.00 WIB</span> — Workshop: Pembuatan IoT Device
            </li>
            <li className="hover:bg-neutral-100 dark:hover:bg-neutral-800/40 p-2 rounded-md transition">
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">16.00 - 17.00 WIB</span> — Networking & Booth Tour
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "28 September 2025 - Pagi",
      content: (
        <div className="space-y-4 text-sm md:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
          <p className="text-neutral-600 dark:text-neutral-400">
            Hari kedua dimulai dengan seminar dan kompetisi inovasi dari peserta pelajar & mahasiswa.
          </p>
          <ul className="space-y-3">
            <li className="hover:bg-neutral-100 dark:hover:bg-neutral-800/40 p-2 rounded-md transition">
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">08.30 - 09.30 WIB</span> — Seminar Teknologi Masa Depan
            </li>
            <li className="hover:bg-neutral-100 dark:hover:bg-neutral-800/40 p-2 rounded-md transition">
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">09.30 - 11.30 WIB</span> — Kompetisi Inovasi Mahasiswa
            </li>
            <li className="hover:bg-neutral-100 dark:hover:bg-neutral-800/40 p-2 rounded-md transition">
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">11.30 - 12.00 WIB</span> — Demo Produk Inovatif
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "28 September 2025 - Siang",
      content: (
        <div className="space-y-4 text-sm md:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
          <p className="text-neutral-600 dark:text-neutral-400">
            Acara penutupan dengan pengumuman pemenang kompetisi dan dokumentasi bersama seluruh peserta & sponsor.
          </p>
          <ul className="space-y-3">
            <li className="hover:bg-neutral-100 dark:hover:bg-neutral-800/40 p-2 rounded-md transition">
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">13.00 - 14.00 WIB</span> — Sharing Session Komunitas Developer
            </li>
            <li className="hover:bg-neutral-100 dark:hover:bg-neutral-800/40 p-2 rounded-md transition">
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">14.00 - 15.30 WIB</span> — Pengumuman Pemenang Kompetisi
            </li>
            <li className="hover:bg-neutral-100 dark:hover:bg-neutral-800/40 p-2 rounded-md transition">
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">15.30 - 16.00 WIB</span> — Closing Ceremony & Dokumentasi
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section
      id="schedule"
      className="py-24 md:py-28 bg-gradient-to-b from-white via-neutral-50 to-white dark:from-[#0f0f0f] dark:via-[#121212] dark:to-[#0f0f0f]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-neutral-900 dark:text-white mb-4 tracking-tight">
          Jadwal Acara Yogyakomtek 2025
        </h2>
        <p className="text-center text-base md:text-lg text-neutral-600 dark:text-neutral-400 mb-14 max-w-3xl mx-auto leading-relaxed">
          Simak berbagai sesi menarik selama dua hari pameran: keynote inspiratif, kompetisi teknologi, dan workshop interaktif.
        </p>
        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  );
}
