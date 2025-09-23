"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

const VenueChip = ({ children }: { children: React.ReactNode }) => (
  <span className="ml-2 inline-flex items-center rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
    {children}
  </span>
);
export function ScheduleSection() {
  const data = [
    {
      title: "Sabtu, 27 September 2025",
      content: (
        <div className="space-y-3 text-sm md:text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              10.00 – 13.00
            </span>{" "}
            Opening Ceremony
            <VenueChip>Joglo (GIK UGM)</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              12.00 – 14.00
            </span>{" "}
            Ramah Tamah (Undangan)
            <VenueChip>Ruang Co Learning</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              14.00 – 17.00
            </span>{" "}
            Coswalk Competition (Vokasi UGM)
            <VenueChip>Student Center Lantai 2</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              14.00 – 17.00
            </span>{" "}
            Seminar Komik “Jadi Komikus Harus Serius” (HUION)
            <VenueChip>Student Center Lantai 2</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              18.00 – 21.00
            </span>{" "}
            ASUS KPOP Dance Showcase (ELS)
            <VenueChip>Joglo (GIK UGM)</VenueChip>
          </div>
        </div>
      ),
    },

    {
      title: "Minggu, 28 September 2025",
      content: (
        <div className="space-y-3 text-sm md:text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              10.00 – 13.00
            </span>{" "}
            Lomba Menggambar SD “Kita & Teknologi” (ISI – HUION)
            <VenueChip>Joglo (GIK UGM)</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              14.00 – 17.00
            </span>{" "}
            Seminar Komik “Dari Imajinasi Jadi Ilustrasi” (ISI)
            <VenueChip>Student Center Lantai 2</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              14.00 – 17.00
            </span>{" "}
            Kompetisi Robot Soccer (Vokasi UGM) & ROG Street Fighter 6 Tournament (ELS)
            <VenueChip>Joglo (GIK UGM)</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              18.00 – 21.00
            </span>{" "}
            PEGAFEST Band Competition – I
            <VenueChip>Joglo (GIK UGM)</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              18.00 – 21.00
            </span>{" "}
            GameLAN Meet Up
            <VenueChip>Joglo (GIK UGM)</VenueChip>
          </div>
        </div>
      ),
    },

    {
      title: "Senin, 29 September 2025",
      content: (
        <div className="space-y-3 text-sm md:text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              10.00 – 13.00
            </span>{" "}
            Seminar Microsoft (ANANDAM)
            <VenueChip>Student Center Lantai 2</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              14.00 – 17.00
            </span>{" "}
            Seminar ACER
            <VenueChip>Joglo (GIK UGM)</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              18.00 – 21.00
            </span>{" "}
            PEGAFEST Band Competition – II
            <VenueChip>Joglo (GIK UGM)</VenueChip>
          </div>
        </div>
      ),
    },

    {
      title: "Selasa, 30 September 2025",
      content: (
        <div className="space-y-3 text-sm md:text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              10.00 – 13.00
            </span>{" "}
            Seminar “Menjadi Pekerja Kreatif di Era AI” (DOSS × SONY)
            <VenueChip>Student Center Lantai 2</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              14.00 – 17.00
            </span>{" "}
            Seminar AI “Robot Cerdas untuk Semua” (FMIPA UGM)
            <VenueChip>Student Center Lantai 2</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              18.00 – 21.00
            </span>{" "}
            PEGAFEST Band Competition – III
            <VenueChip>Joglo (GIK UGM)</VenueChip>
          </div>
        </div>
      ),
    },

    {
      title: "Rabu, 1 Oktober 2025",
      content: (
        <div className="space-y-3 text-sm md:text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              10.00 – 13.00
            </span>{" "}
            Seminar “AI as Company Solutions” (ELS × LENOVO)
            <VenueChip>Student Center Lantai 2</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              14.00 – 17.00
            </span>{" "}
            Seminar “Membuat Film Animasi Kelas Dunia” (AMIKOM)
            <VenueChip>Student Center Lantai 2</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              17.00 – 18.00
            </span>{" "}
            Final Battle Speed Drawing Contest (HUION)
            <VenueChip>Joglo (GIK UGM)</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              18.00 – 20.00
            </span>{" "}
            Closing Ceremony
            <VenueChip>Joglo (GIK UGM)</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              18.00 – 21.00
            </span>{" "}
            Pengumuman Pemenang Lomba
            <VenueChip>Joglo (GIK UGM)</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              19.00 – 19.15
            </span>{" "}
            Band Perform (Juara 1 & 2)
            <VenueChip>Joglo (GIK UGM)</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              20.00 – 21.00
            </span>{" "}
            Undian Pembelian Pengunjung
            <VenueChip>Joglo (GIK UGM)</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              21.00
            </span>{" "}
            Sayonara
            <VenueChip>Joglo (GIK UGM)</VenueChip>
          </div>
        </div>
      ),
    },
  ];

  const subActivities = [
  {
    title: "Sabtu, 27 September 2025",
    content: (
      <div className="space-y-3 text-sm md:text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
        <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
          <span className="font-semibold text-green-600 dark:text-green-400">
            09.00 – 21.00
          </span>{" "}
          Games Changer: NVIDIA GeForce Fans Party
          <VenueChip>C1 - 004</VenueChip>
        </div>

        <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
          <span className="font-semibold text-green-600 dark:text-green-400">
            09.00 – 17.00
          </span>{" "}
          Introduction National Vibe Coding Competition
          <VenueChip>C1 - 011</VenueChip>
        </div>

        <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
          <span className="font-semibold text-green-600 dark:text-green-400">
            18.00 – 21.00
          </span>{" "}
          Workshop Kurasi Karya
          <VenueChip>C1 - 006</VenueChip>
        </div>
      </div>
    ),
  },

  {
    title: "Minggu, 28 September 2025",
    content: (
      <div className="space-y-3 text-sm md:text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
        <div>
          <span className="font-semibold text-green-600">09.00 – 17.00</span>{" "}
          Kelas A – VIBE CODING (Xerphian) <VenueChip>C1 - 004</VenueChip>
        </div>
        <div>
          <span className="font-semibold text-green-600">09.00 – 17.00</span>{" "}
          Kelas B – CREATIVE CONTENT (Xerphian) <VenueChip>C1 - 006</VenueChip>
        </div>
        <div>
          <span className="font-semibold text-green-600">09.00 – 17.00</span>{" "}
          Kelas C – ACADEMIC & WRITING (Xerphian){" "}
          <VenueChip>C1 - 007</VenueChip>
        </div>
        <div>
          <span className="font-semibold text-green-600">09.00 – 17.00</span>{" "}
          Kelas D – MUSIC & ART (Xerphian) <VenueChip>C1 - 011</VenueChip>
        </div>
        <div>
          <span className="font-semibold text-green-600">18.00 – 21.00</span>{" "}
          Workshop Kurasi Karya <VenueChip>C1 - 006</VenueChip>
        </div>
      </div>
    ),
  },

  {
    title: "Senin, 29 September 2025",
    content: (
      <div className="space-y-3">
        <div>
          <span className="font-semibold text-green-600">09.00 – 17.00</span>{" "}
          Kelas A – VIBE CODING (Xerphian) <VenueChip>C1 - 004</VenueChip>
        </div>
        <div>
          <span className="font-semibold text-green-600">09.00 – 17.00</span>{" "}
          Kelas B – CREATIVE CONTENT (Xerphian) <VenueChip>C1 - 006</VenueChip>
        </div>
        <div>
          <span className="font-semibold text-green-600">09.00 – 17.00</span>{" "}
          Kelas C – ACADEMIC & WRITING (Xerphian){" "}
          <VenueChip>C1 - 007</VenueChip>
        </div>
        <div>
          <span className="font-semibold text-green-600">09.00 – 17.00</span>{" "}
          Kelas D – MUSIC & ART (Xerphian) <VenueChip>C1 - 011</VenueChip>
        </div>
        <div>
          <span className="font-semibold text-green-600">18.00 – 21.00</span>{" "}
          Workshop Kurasi Karya <VenueChip>C1 - 006</VenueChip>
        </div>
      </div>
    ),
  },

  {
    title: "Selasa, 30 September 2025",
    content: (
      <div className="space-y-3">
        <div>
          <span className="font-semibold text-green-600">09.00 – 17.00</span>{" "}
          Kelas A – VIBE CODING (Xerphian) <VenueChip>C1 - 004</VenueChip>
        </div>
        <div>
          <span className="font-semibold text-green-600">09.00 – 17.00</span>{" "}
          Kelas B – CREATIVE CONTENT (Xerphian) <VenueChip>C1 - 006</VenueChip>
        </div>
        <div>
          <span className="font-semibold text-green-600">09.00 – 17.00</span>{" "}
          Kelas C – ACADEMIC & WRITING (Xerphian){" "}
          <VenueChip>C1 - 007</VenueChip>
        </div>
        <div>
          <span className="font-semibold text-green-600">09.00 – 17.00</span>{" "}
          Kelas D – MUSIC & ART (Xerphian) <VenueChip>C1 - 011</VenueChip>
        </div>
        <div>
          <span className="font-semibold text-green-600">18.00 – 21.00</span>{" "}
          Workshop Kurasi Karya <VenueChip>C1 - 006</VenueChip>
        </div>
      </div>
    ),
  },

  {
    title: "Rabu, 1 Oktober 2025",
    content: (
      <div className="space-y-3">
        <div>
          <span className="font-semibold text-green-600">09.00 – 12.00</span>{" "}
          Seminar “Solar Panel Philips” by Pegastore{" "}
          <VenueChip>C1 - 007</VenueChip>
        </div>
        <div>
          <span className="font-semibold text-green-600">09.00 – 12.00</span>{" "}
          Seminar “Solar Panel Philips” by Pegastore{" "}
          <VenueChip>C1 - 009</VenueChip>
        </div>
        <div>
          <span className="font-semibold text-green-600">09.00 – 17.00</span>{" "}
          Penjurian Lomba National Vibe Coding{" "}
          <VenueChip>C1 - 011</VenueChip>
        </div>
        <div>
          <span className="font-semibold text-green-600">09.00 – 17.00</span>{" "}
          Workshop Kurasi Karya <VenueChip>C1 - 006</VenueChip>
        </div>
      </div>
    ),
  },
];

const otherActivities = [
  {
    title: "Sabtu–Rabu, 27 Sept – 1 Okt 2025",
    content: (
      <div className="space-y-3 text-sm md:text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
        <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            5 days
          </span>{" "}
          Lomba Foto
          <VenueChip>All Area</VenueChip>
        </div>

        <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            5 days
          </span>{" "}
          Lomba Reels
          <VenueChip>All Area</VenueChip>
        </div>

        <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            5 days
          </span>{" "}
          Digital Stamp
          <VenueChip>All Area</VenueChip>
        </div>
      </div>
    ),
  },
];

const experienceZones = [
  {
    title: "Sabtu–Rabu, 27 Sept – 1 Okt 2025",
    content: (
      <div className="space-y-3 text-sm md:text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
        <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
          <span className="font-semibold text-green-600 dark:text-green-400">
            5 days
          </span>{" "}
          Prodi ELINS FMIPA UGM (AI)
          <VenueChip>SPC-X SC</VenueChip>
        </div>

        <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
          <span className="font-semibold text-green-600 dark:text-green-400">
            5 days
          </span>{" "}
          Univ. AMIKOM (ANIMASI)
          <VenueChip>SPC-Y SC</VenueChip>
        </div>

        <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
          <span className="font-semibold text-green-600 dark:text-green-400">
            5 days
          </span>{" "}
          ISI DKV (Gambar Desainer)
          <VenueChip>Selasar SC</VenueChip>
        </div>

        <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
          <span className="font-semibold text-green-600 dark:text-green-400">
            5 days
          </span>{" "}
          Demo Produk BLUEPRINT
          <VenueChip>Selasar SC</VenueChip>
        </div>
      </div>
    ),
  },
];



  return (
    <>
      {/* MAIN ACTIVITIES */}
      <section id="schedule" className="py-24 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4">
            Jadwal Acara Yogyakomtek 2025
          </h2>
          <p className="text-center text-neutral-600 dark:text-neutral-400 mb-10">
            Main Activities (Joglo & Student Center Lt.2)
          </p>
        </div>
        <div className="relative w-full">
          <Timeline data={data} />
        </div>
      </section>

      {/* SUB ACTIVITIES */}
      <section
        id="subactivities"
        className="py-24 md:py-28 bg-neutral-50 dark:bg-[#121212]"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4">
            Sub Activities
          </h2>
          <p className="text-center text-neutral-600 dark:text-neutral-400 mb-10">
            Workshop & Classes (Ruang C1)
          </p>
        </div>
        <div className="relative w-full">
          <Timeline data={subActivities} />
        </div>
      </section>
      {/* OTHER ACTIVITIES */}
<section id="other-activities" className="py-24 md:py-28 bg-white dark:bg-[#0f0f0f]">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4">
      Other Activities
    </h2>
    <p className="text-center text-neutral-600 dark:text-neutral-400 mb-10">
      Static activities across all areas
    </p>
  </div>
  <div className="relative w-full">
    <Timeline data={otherActivities} />
  </div>
</section>

{/* EXPERIENCE & EXHIBITION ZONE */}
<section id="experience-exhibition" className="py-24 md:py-28 bg-neutral-50 dark:bg-[#121212]">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4">
      Experience & Exhibition Zone
    </h2>
    <p className="text-center text-neutral-600 dark:text-neutral-400 mb-10">
      SPC/Student Center showcases (5 days)
    </p>
  </div>
  <div className="relative w-full">
    <Timeline data={experienceZones} />
  </div>
</section>

    </>
  );

  
}
