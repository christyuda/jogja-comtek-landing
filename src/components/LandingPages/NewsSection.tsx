"use client";

import Link from "next/link";
import { useMemo } from "react";

export type NewsItem = {
  id: string;
  title: string;
  summary: string;
  href: string;
  date: string;        // ISO string, e.g., "2025-09-25"
  image?: string;      // optional thumbnail URL
  tag?: string;        // optional label, e.g., "Update", "Press"
};

type Props = {
  items?: NewsItem[];
};

export default function NewsSection({ items }: Props) {
  // Temporary demo data (remove when you pass real items)
  const demoItems = useMemo<NewsItem[]>(
    () => [
      {
        id: "1",
        title: "Berkonsep Festival, Yogyakomter Hadir di GIK Yogyakarta",
        summary:
              "Mengambil tempat di Gelanggang Inovasi dan Kreativitas (GIK) UGM, Yogyakomtek 2025 kembali hadir sampai 2 Oktober 2025.",
        href: "https://www.vartadiy.com/varta/44015988097/berkonsep-festival-yogyakomter-hadir-di-gik-yogyakarta",
        date: "2025-09-27",
        image:
          "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/440/2025/09/27/IMG-20250927-WA0026-257872519.jpg",
        tag: "Update",
      },
      {
        id: "2",
        title: "YOGYAKOMTEK 2025 Resmi Dibuka, Artificial Intelligence Now!",
        summary:
          "KBRN, Yogyakarta: Pameran IT terbesar YOGYAKOMTEK yang ke-28, untuk pertama kalinya digelar di Gelanggang Inovasi dan Kreatif (GIK) UGM dalam sebuah festival bertajuk Artificial Intelligence Now! pada 27 September - 1 Oktober 2025.",
        href: "https://rri.co.id/yogyakarta/iptek/1861444/yogyakomtek-2025-resmi-dibuka-artificial-intelligence-now",
        date: "2025-09-27",
        image:
          "https://cdn.rri.co.id/berita/Yogyakarta/o/1758952915850-Screenshot_20250927_125436_Gallery/jay7shz709a0o8c.jpeg",
        tag: "Announcement",
      },
      {
        id: "3",
        title: "YOGYAKOMTEK 2025 Artificial Intelligence Now Resmi Dibuka, GIK UGM Meriah Produk Teknologi",
        summary:
          "SLEMAN YOGYAKOMTEK yang diselenggarakan oleh Asosiasi Pengusaha Komputer Jogja (APKOM JOGJA) di Gelanggang Inovasi dan Kreativitas (GIK) UGM resmi dibuka, Sabtu (27/9/2025). Penyelenggaraan pameran ke-28 ingin",
        href: "https://www.krjogja.com/sleman/1246628903/yogyakomtek-2025-artificial-intelligence-now-resmi-dibuka-gik-ugm-meriah-produk-teknologi",
        date: "2025-09-27",
        image:
          "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/124/2025/09/27/IMG-20250927-WA0033-3228503579.jpg",
      },
      {
        id: "4",
        title: "YOGYAKOMTEK 2025 Hadir di GIK UGM, Sinergi dengan Kampus dan Mahasiswa",
        summary:
              "YOGYAKOMTEK 2025 hadir pada 27 September-1 Oktober 2025. Pameran IT edisi ke-28 ini digelar di Gelanggang Inovasi dan Kreativitas (GIK) Universitas Gadjah Mada (UGM).",
        href: "https://seputarjogja.id/yogyakomtek-2025-hadir-di-gik-ugm-sinergi-dengan-kampus-dan-mahasiswa/",
        date: "2025-09-27",
        image:
          "https://seputarjogja.id/wp-content/uploads/2025/09/20250927_113707-1536x864.jpg",
        tag: "Update",
      },
      {
        id: "5",
        title: "YOGYAKOMTEK 2025 hadir pada 27 September-1 Oktober 2025. Pameran IT edisi ke-28 ini digelar di Gelanggang Inovasi dan Kreativitas (GIK) Universitas Gadjah Mada (UGM).",
        summary:
          "Pameran komputer legendaris Yogyakomtek kembali menyapa publik untuk ke-29 kalinya, sepanjang 27 September - 1 Oktober 2025.",
        href: "https://jogja.tribunnews.com/diy/1194352/yogyakomtek-2025-digelar-dengan-konsep-festival-gandeng-tiga-perguruan-tinggi",
        date: "2025-09-27",
        image:
          "https://asset-2.tribunnews.com/jogja/foto/bank/images/Yogyakomtek-2025-Digelar-dengan-Konsep-Festival-Gandeng-Tiga-Perguruan-Tinggi.jpg",
        tag: "Announcement",
      },
      {
        id: "6",
        title: "Yogyakomtek 2025 Hadir di GIK UGM, Sinergi Dengan Tiga Perguruan Tinggi, UGM, ISI dan AMIKOM",
        summary:
          "Meski sempat berhenti sebentar karena sesuatu, namun Yogyakomtek 2025 kini kembali digelar di Gelanggang Inovasi dan Kreatif (GIK) Universitas Gadjah Mada (UGM) dari tanggal 27 September sampai 1 Oktober 2025.",
        href: "https://www.smol.id/news/7115988546/yogyakomtek-2025-hadir-di-gik-ugm-sinergi-dengan-tiga-perguruan-tinggi-ugm-isi-dan-amikom",
        date: "2025-09-27",
        image:
          "https://static.promediateknologi.id/crop/0x5:1600x945/750x500/webp/photo/p1/71/2025/09/27/IMG-20250927-WA0045-159868329.jpg",
      },
      {
        id: "7",
        title: "Libatkan 300 Mahasiswa, Yogyakomtek 2025 Resmi Dibuka di GIK UGM",
        summary:
              "Pameran komputer Yogyakomtek 2025 resmi dibuka mulai Sabtu (27/9/2025) hingga Rabu (1/10/2025) mendatang di Gelanggang Inovasi dan Kreativitas (GIK) UGM. Keterlibatan kalangan mahasiswa di event ini agar mereka terus terlibat dalam pengembangan teknologi informasi.",
        href: "https://ototekno.harianjogja.com/read/2025/09/27/503/1229754/libatkan-300-mahasiswa-yogyakomtek-2025-resmi-dibuka-di-gik-ugm",
        date: "2025-09-27",
        image:
          "https://img.harianjogja.com/posts/2025/09/27/1229754/20250927_112621.jpg",
        tag: "Update",
      },
      {
        id: "8",
        title: "Kompetisi Koding Nasional Semarakkan Yogyakomtek",
        summary:
          "Rangkaian perhelatan akbar teknologi Yogyakomtek yang digelar di Gelanggang Inovasi dan Kreativitas (GIK UGM) tahun 2025 ini semakin semarak dengan hadirnya National Vibe Coding Competition 2025.",
        href: "https://radarjogja.jawapos.com/event/656629032/kompetisi-koding-nasional-semarakkan-yogyakomtek",
        date: "2025-09-27",
        image:
          "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/65/2025/09/27/6-1813043510.jpg",
        tag: "Announcement",
      },
      {
        id: "9",
        title: "Yogyakomtek 2025 pamerkan kecanggihan teknologi AI dari komik hingga film animasi",
        summary:
          "Penyelenggaraan pameran komputer dan teknologi Yogyakomtek 2025 resmi dibuka. Berlokasi di Gelanggang Inovasi dan Kreativitas (GIK) Universitas Gadjah Mada (UGM), Bulaksumur, Caturtunggal, Depok, Sleman,",
        href: "https://www.harianmerapi.com/lifestyle/4015991421/yogyakomtek-2025-pamerkan-kecanggihan-teknologi-ai-dari-komik-hingga-film-animasi",
        date: "2025-09-27",
        image:
          "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/40/2025/09/28/20250927_112707-1071979923.jpg",
      },
      {
        id: "10",
        title: "YOGYAKOMTEK 2025 bertema 'Artifical Intelligence Now' resmi dibuka di GIK UGM ",
        summary:
              "Pameran YOGYAKOMTEK 2025 bertema 'Artificial Intelligence Now!' yang diselenggarakan oleh Asosiasi Pengusaha Komputer (Apkom) Jogja resmi dibuka di Gelanggang Inovasi dan Kreativitas (GIK) Universitas Gadjah Mada (UGM) Yogyakarta, Sabtu.",
        href: "https://jogja.antaranews.com/berita/771749/yogyakomtek-2025-bertema-artificial-intelligence-now-resmi-dibuka-di-gik-ugm",
        date: "2025-09-27",
        image:
          "https://img.antaranews.com/cache/1200x800/2025/09/27/yogyakomtek2025-dibuka.jpg.webp",
        tag: "Update",
      },
      {
        id: "11",
        title: "Anak Muda Padati Yogyakomtek, Berburu Teknologi Terkini",
        summary:
          "Ribuan anak muda langsung memenuhi Gelanggang Inovasi dan Kreativitas UGM, tempat berlangsungnya Yogyakomtek. Pameran komputer terbesar, terlengkap dan termurah ini menghadirkan teknologi terbaru yang sesuai kebutuhan anak-anak muda.",
        href: "https://www.bisnisjogja.id/anak-muda-padati-yogyakomtek-berburu-teknologi-terkini/",
        date: "2025-09-28",
        image:
          "https://www.bisnisjogja.id/wp-content/uploads/2025/09/28iKOM-1.webp",
        tag: "Announcement",
      },
      {
        id: "12",
        title: "Ayo Merapat, Karya AI Anak Kampus Pamer di YOGYAKOMTEK 2025",
        summary:
          "Artificial Intelligence Now! menjadi tema pameran teknologi informasi terbesar di Yogyakarta, YOGYAKOMTEK 2025, yang kembali hadir untuk ke-28 kalinya. Tahun ini untuk pertama kalinya acara digelar di Gelanggang Inovasi dan Kreatif (GIK) UGM, berlangsung pada 27 September hingga 1 Oktober 2025.",
        href: "https://yogyadaily.com/ayo-merapat-karya-ai-anak-kampus-pamer-di-yogyakomtek-2025/",
        date: "2025-09-27",
        image:
          "https://yogyadaily.com/wp-content/uploads/2025/09/Screenshot_2025-09-27-21-35-58-43_6012fa4d4ddec268fc5c7112cbb265e7.jpg",
      },
    ],
    []
  );

  const data = items && items.length ? items : demoItems;

  return (
    <section id="news" className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium tracking-wide text-blue-600">
              Berita Terbaru
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Terbaru dari Yogyakomtek
            </h2>
            <p className="mt-2 text-gray-600">
                Ikuti perkembangan terbaru seputar acara, pembicara, dan informasi penting lainnya.
            </p>
          </div>

         
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md"
            >
              {item.image && (
                <div className="aspect-[16/9] overflow-hidden">
                  {/* Using <img> to avoid next/image remote config issues */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              )}

              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <time
                    dateTime={item.date}
                    className="font-medium text-gray-500"
                  >
                    {new Date(item.date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    })}
                  </time>
                  {item.tag && (
                    <span className="inline-flex rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-semibold text-gray-700">
                      {item.tag}
                    </span>
                  )}
                </div>

                <h3 className="mt-2 line-clamp-2 text-base sm:text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 line-clamp-3 text-sm text-gray-600">
                  {item.summary}
                </p>

                <div className="mt-4">
                  <Link
                    href={item.href}
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline"
                  >
                    Baca Selengkapnya
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="ml-1 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="#"
            className="inline-flex w-full justify-center rounded-xl border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            View all
          </Link>
        </div>
      </div>
    </section>
  );
}
