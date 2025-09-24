"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

const ACCENT = "#f4b74a"; // ganti di sini kalau hex-mu berbeda (mis. "#F4B7A0")
const toRGBA = (hex: string, a: number) => {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};
const VenueChip = ({ children }: { children: React.ReactNode }) => (
  <span
    className="ml-2 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium"
    style={{
      backgroundColor: "rgba(244,183,74,0.10)",
      color: ACCENT,
      border: "1px solid rgba(244,183,74,0.18)",
    }}
  >
    {children}
  </span>
);

const Section = ({
  id,
  title,
  subtitle,
  data,
}: {
  id: string;
  title: string;
  subtitle?: string;
  data: { title: string; content: React.ReactNode }[];
}) => (
  <section id={id} className="py-0" style={{ backgroundColor: ACCENT }}>
    <div className="max-w-6LG mx-auto px-6">
      {/* Blok header: tinggi tetap & benar2 center */}
      <div className="grid place-items-center text-center h-56 md:h-46">
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2">
            {title}
          </h2>
          {subtitle && (
            <p className="text-white/90">{subtitle}</p>
          )}
        </div>
      </div>
    </div>

    {/* Timeline, beri jarak atas kecil */}
    <div className="relative w-full pt-6 pb-24 md:pb-28">
      <Timeline data={data} />
    </div>
  </section>
);


export function ScheduleSection() {
  const timeStyle = { color: ACCENT }; // untuk jam utama
  const subTimeStyle = { color: ACCENT }; // untuk sub-activities/experience

  const data = [
    {
      title: "Sabtu, 27 September 2025",
      content: (
        <div className="space-y-3 text-sm md:text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold" style={timeStyle}>
              10.00 – 13.00
            </span>{" "}
            Opening Ceremony
            <VenueChip>Joglo (GIK UGM)</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold" style={timeStyle}>
              12.00 – 14.00
            </span>{" "}
            Ramah Tamah (Undangan)
            <VenueChip>Ruang Co Learning</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold" style={timeStyle}>
              14.00 – 17.00
            </span>{" "}
            Coswalk Competition (Vokasi UGM)
            <VenueChip>Student Center Lantai 2</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold" style={timeStyle}>
              14.00 – 17.00
            </span>{" "}
            Seminar Komik “Jadi Komikus Harus Serius” (HUION)
            <VenueChip>Student Center Lantai 2</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold" style={timeStyle}>
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
            <span className="font-semibold" style={timeStyle}>
              10.00 – 13.00
            </span>{" "}
            Lomba Menggambar SD “Kita & Teknologi” (ISI – HUION)
            <VenueChip>Joglo (GIK UGM)</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold" style={timeStyle}>
              14.00 – 17.00
            </span>{" "}
            Seminar Komik “Dari Imajinasi Jadi Ilustrasi” (ISI)
            <VenueChip>Student Center Lantai 2</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold" style={timeStyle}>
              14.00 – 17.00
            </span>{" "}
            Kompetisi Robot Soccer (Vokasi UGM) & ROG Street Fighter 6
            Tournament (ELS)
            <VenueChip>Joglo (GIK UGM)</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold" style={timeStyle}>
              18.00 – 21.00
            </span>{" "}
            PEGAFEST Band Competition – I<VenueChip>Joglo (GIK UGM)</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold" style={timeStyle}>
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
            <span className="font-semibold" style={timeStyle}>
              10.00 – 13.00
            </span>{" "}
            Seminar Microsoft (ANANDAM)
            <VenueChip>Student Center Lantai 2</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold" style={timeStyle}>
              14.00 – 17.00
            </span>{" "}
            Seminar ACER
            <VenueChip>Joglo (GIK UGM)</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold" style={timeStyle}>
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
            <span className="font-semibold" style={timeStyle}>
              10.00 – 13.00
            </span>{" "}
            Seminar “Menjadi Pekerja Kreatif di Era AI” (DOSS × SONY)
            <VenueChip>Student Center Lantai 2</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold" style={timeStyle}>
              14.00 – 17.00
            </span>{" "}
            Seminar AI “Robot Cerdas untuk Semua” (FMIPA UGM)
            <VenueChip>Student Center Lantai 2</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold" style={timeStyle}>
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
            <span className="font-semibold" style={timeStyle}>
              10.00 – 13.00
            </span>{" "}
            Seminar “AI as Company Solutions” (ELS × LENOVO)
            <VenueChip>Student Center Lantai 2</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold" style={timeStyle}>
              14.00 – 17.00
            </span>{" "}
            Seminar “Membuat Film Animasi Kelas Dunia” (AMIKOM)
            <VenueChip>Student Center Lantai 2</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold" style={timeStyle}>
              17.00 – 18.00
            </span>{" "}
            Final Battle Speed Drawing Contest (HUION)
            <VenueChip>Joglo (GIK UGM)</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold" style={timeStyle}>
              18.00 – 20.00
            </span>{" "}
            Closing Ceremony
            <VenueChip>Joglo (GIK UGM)</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold" style={timeStyle}>
              18.00 – 21.00
            </span>{" "}
            Pengumuman Pemenang Lomba
            <VenueChip>Joglo (GIK UGM)</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold" style={timeStyle}>
              19.00 – 19.15
            </span>{" "}
            Band Perform (Juara 1 & 2)
            <VenueChip>Joglo (GIK UGM)</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold" style={timeStyle}>
              20.00 – 21.00
            </span>{" "}
            Undian Pembelian Pengunjung
            <VenueChip>Joglo (GIK UGM)</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold" style={timeStyle}>
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
            <span className="font-semibold" style={subTimeStyle}>
              09.00 – 21.00
            </span>{" "}
            Games Changer: NVIDIA GeForce Fans Party
            <VenueChip>C1 - 004</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold" style={subTimeStyle}>
              09.00 – 17.00
            </span>{" "}
            Introduction National Vibe Coding Competition
            <VenueChip>C1 - 011</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold" style={subTimeStyle}>
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
            <span className="font-semibold" style={subTimeStyle}>
              09.00 – 17.00
            </span>{" "}
            Kelas A – VIBE CODING (Xerphian) <VenueChip>C1 - 004</VenueChip>
          </div>
          <div>
            <span className="font-semibold" style={subTimeStyle}>
              09.00 – 17.00
            </span>{" "}
            Kelas B – CREATIVE CONTENT (Xerphian){" "}
            <VenueChip>C1 - 006</VenueChip>
          </div>
          <div>
            <span className="font-semibold" style={subTimeStyle}>
              09.00 – 17.00
            </span>{" "}
            Kelas C – ACADEMIC & WRITING (Xerphian){" "}
            <VenueChip>C1 - 007</VenueChip>
          </div>
          <div>
            <span className="font-semibold" style={subTimeStyle}>
              09.00 – 17.00
            </span>{" "}
            Kelas D – MUSIC & ART (Xerphian) <VenueChip>C1 - 011</VenueChip>
          </div>
          <div>
            <span className="font-semibold" style={subTimeStyle}>
              18.00 – 21.00
            </span>{" "}
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
            <span className="font-semibold" style={subTimeStyle}>
              09.00 – 17.00
            </span>{" "}
            Kelas A – VIBE CODING (Xerphian) <VenueChip>C1 - 004</VenueChip>
          </div>
          <div>
            <span className="font-semibold" style={subTimeStyle}>
              09.00 – 17.00
            </span>{" "}
            Kelas B – CREATIVE CONTENT (Xerphian){" "}
            <VenueChip>C1 - 006</VenueChip>
          </div>
          <div>
            <span className="font-semibold" style={subTimeStyle}>
              09.00 – 17.00
            </span>{" "}
            Kelas C – ACADEMIC & WRITING (Xerphian){" "}
            <VenueChip>C1 - 007</VenueChip>
          </div>
          <div>
            <span className="font-semibold" style={subTimeStyle}>
              09.00 – 17.00
            </span>{" "}
            Kelas D – MUSIC & ART (Xerphian) <VenueChip>C1 - 011</VenueChip>
          </div>
          <div>
            <span className="font-semibold" style={subTimeStyle}>
              18.00 – 21.00
            </span>{" "}
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
            <span className="font-semibold" style={subTimeStyle}>
              09.00 – 17.00
            </span>{" "}
            Kelas A – VIBE CODING (Xerphian) <VenueChip>C1 - 004</VenueChip>
          </div>
          <div>
            <span className="font-semibold" style={subTimeStyle}>
              09.00 – 17.00
            </span>{" "}
            Kelas B – CREATIVE CONTENT (Xerphian){" "}
            <VenueChip>C1 - 006</VenueChip>
          </div>
          <div>
            <span className="font-semibold" style={subTimeStyle}>
              09.00 – 17.00
            </span>{" "}
            Kelas C – ACADEMIC & WRITING (Xerphian){" "}
            <VenueChip>C1 - 007</VenueChip>
          </div>
          <div>
            <span className="font-semibold" style={subTimeStyle}>
              09.00 – 17.00
            </span>{" "}
            Kelas D – MUSIC & ART (Xerphian) <VenueChip>C1 - 011</VenueChip>
          </div>
          <div>
            <span className="font-semibold" style={subTimeStyle}>
              18.00 – 21.00
            </span>{" "}
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
            <span className="font-semibold" style={subTimeStyle}>
              09.00 – 12.00
            </span>{" "}
            Seminar “Solar Panel Philips” by Pegastore{" "}
            <VenueChip>C1 - 007</VenueChip>
          </div>
          <div>
            <span className="font-semibold" style={subTimeStyle}>
              09.00 – 12.00
            </span>{" "}
            Seminar “Solar Panel Philips” by Pegastore{" "}
            <VenueChip>C1 - 009</VenueChip>
          </div>
          <div>
            <span className="font-semibold" style={subTimeStyle}>
              09.00 – 17.00
            </span>{" "}
            Penjurian Lomba National Vibe Coding <VenueChip>C1 - 011</VenueChip>
          </div>
          <div>
            <span className="font-semibold" style={subTimeStyle}>
              09.00 – 17.00
            </span>{" "}
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
            <span className="font-semibold" style={timeStyle}>
              5 days
            </span>{" "}
            Lomba Foto
            <VenueChip>All Area</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold" style={timeStyle}>
              5 days
            </span>{" "}
            Lomba Reels
            <VenueChip>All Area</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold" style={timeStyle}>
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
            <span className="font-semibold" style={subTimeStyle}>
              5 days
            </span>{" "}
            Prodi ELINS FMIPA UGM (AI)
            <VenueChip>SPC-X SC</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold" style={subTimeStyle}>
              5 days
            </span>{" "}
            Univ. AMIKOM (ANIMASI)
            <VenueChip>SPC-Y SC</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold" style={subTimeStyle}>
              5 days
            </span>{" "}
            ISI DKV (Gambar Desainer)
            <VenueChip>Selasar SC</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold" style={subTimeStyle}>
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
     <Section
      id="schedule"
      title="Rundown Acara Yogyakomtek 2025"
      subtitle="Main Activities (Joglo & Student Center Lt.2)"
      data={data}
    />

    <Section
      id="subactivities"
      title="Sub Activities"
      subtitle="Workshop & Classes (Ruang C1)"
      data={subActivities}
    />

    <Section
      id="other-activities"
      title="Other Activities"
      subtitle="Static activities across all areas"
      data={otherActivities}
    />

    <Section
      id="experience-exhibition"
      title="Experience & Exhibition Zone"
      subtitle="SPC/Student Center showcases (5 days)"
      data={experienceZones}
    />
    </>
  );
}
