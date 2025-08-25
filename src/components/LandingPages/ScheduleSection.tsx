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
              14.00 – 17.00
            </span>{" "}
            Seminar Komik (HUION)
            <VenueChip>Student Center Lantai 2</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              18.00 – 21.00
            </span>{" "}
            ASUS KPOP Dance Showcase (EIS)
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
            Lomba Menggambar SD (ISI – HUION)
            <VenueChip>Joglo (GIK UGM)</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              14.00 – 17.00
            </span>{" "}
            Robotic FOOTBALL TD (Vokasi UGM)
            <VenueChip>Joglo (GIK UGM)</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              14.00 – 17.00
            </span>{" "}
            Seminar / Workshop Komik (ISI)
            <VenueChip>Student Center Lantai 2</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              18.00 – 21.00
            </span>{" "}
            PEGASTORE BAND COMPETITION – I<VenueChip>Joglo (GIK UGM)</VenueChip>
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
            Robotic SUMO TD (Vokasi UGM)
            <VenueChip>Joglo (GIK UGM)</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              14.00 – 17.00
            </span>{" "}
            Seminar AI – Sesi 1 (FMIPA UGM)
            <VenueChip>Student Center Lantai 2</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              18.00 – 21.00
            </span>{" "}
            PEGASTORE BAND COMPETITION – II
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
              14.00 – 17.00
            </span>{" "}
            Seminar AI – Sesi 2 (FMIPA UGM)
            <VenueChip>Student Center Lantai 2</VenueChip>
          </div>

          <div className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/40 transition">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              18.00 – 21.00
            </span>{" "}
            PEGASTORE BAND COMPETITION – III
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
              14.00 – 17.00
            </span>{" "}
            Seminar Animasi AI (AMIKOM)
            <VenueChip>Student Center Lantai 2</VenueChip>
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
              18.00 – 19.15
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

  return (
    <section
      id="schedule"
      className="py-24 md:py-28 bg-gradient-to-b from-white via-neutral-50 to-white dark:from-[#0f0f0f] dark:via-[#121212] dark:to-[#0f0f0f]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-neutral-900 dark:text-white mb-4 tracking-tight">
          Jadwal Acara Yogyakomtek 2025
        </h2>
        <p className="text-center text-base md:text-lg text-neutral-600 dark:text-neutral-400 mb-14 max-w-3xl mx-auto leading-relaxed"></p>
      </div>

      <div className="relative w-full">
        <Timeline data={data} />
      </div>
    </section>
  );
}
